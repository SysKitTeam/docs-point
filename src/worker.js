/**
 * Cloudflare Worker for serving Docusaurus static site on /point route
 * This worker handles routing and serves static assets for testforce.uk/point
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle requests to /point route
    let pathname = url.pathname;
    
    // If the path starts with /point, remove it for internal routing
    if (pathname.startsWith('/point')) {
      pathname = pathname.replace('/point', '') || '/';
    } else {
      // Return 404 for non-/point routes to maintain consistency
      return new Response('Not Found - Please access via /point route', { status: 404 });
    }
    
    // Create a new URL for the asset request
    const assetUrl = new URL(pathname, url.origin);
    const assetRequest = new Request(assetUrl, request);
    
    // Handle static assets from the build directory
    try {
      // Try to get the asset from the ASSETS binding
      const asset = await env.ASSETS.fetch(assetRequest);
      
      // The ASSETS binding may return redirects (e.g. 301 to add a
      // trailing slash).  Those Location headers use the internal path
      // (without /point), so we must prepend /point back before the
      // browser follows the redirect.
      if (asset.status >= 300 && asset.status < 400) {
        const location = asset.headers.get('Location');
        if (location) {
          const locUrl = new URL(location, url.origin);
          if (!locUrl.pathname.startsWith('/point')) {
            locUrl.pathname = '/point' + locUrl.pathname;
          }
          return Response.redirect(locUrl.toString(), asset.status);
        }
      }

      if (asset.status === 404) {
        // Serve the Docusaurus 404 page instead of falling back to the
        // root index.html — Docusaurus is a static site, not an SPA.
        const notFoundRequest = new Request(
          new URL('/404.html', url.origin),
          request
        );
        const notFoundAsset = await env.ASSETS.fetch(notFoundRequest);
        if (notFoundAsset.status === 200) {
          return new Response(notFoundAsset.body, {
            status: 404,
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 'no-cache',
            },
          });
        }
      }

      // Add proper cache headers for static assets
      if (asset.status === 200) {
        const response = new Response(asset.body, asset);
        
        // Handle downloadable files with proper headers
        if (pathname.match(/\.(zip|7z|rar|tar|gz|pdf|doc|docx|xls|xlsx|ppt|pptx|ps1)$/)) {
          const filename = pathname.split('/').pop();
          response.headers.set('Content-Disposition', `attachment; filename="${filename}"`);
          response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        }
        // Cache static assets for a longer period
        else if (pathname.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
          response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (pathname.match(/\.(html)$/)) {
          response.headers.set('Cache-Control', 'public, max-age=3600');
        }
        
        // PR preview workers run on *.workers.dev where Cloudflare Rules
        // don't apply. Set the same anti-caching/security headers that the
        // Response Header Transform Rules set for docs.syskit.com and
        // docs-staging.syskit.com so preview links behave consistently.
        if (url.hostname.endsWith('.workers.dev')) {
          response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, max-age=0');
          response.headers.set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
          response.headers.set('Pragma', 'no-cache');
          response.headers.set('X-Frame-Options', 'DENY');
          response.headers.set('X-Redirect-Disabled', 'true');
        }
        
        return response;
      }
      
      return asset;
    } catch (error) {
      console.error('Error serving asset:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
