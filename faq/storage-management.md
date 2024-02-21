---
description: This article outlines the most frequently asked questions about storage management in Syskit Point.
---

# Storage Management in Syskit Point FAQ


## What is the difference between Microsoft 365 and Syskit Point when calculating the used SharePoint Online storage space?

SharePoint Online **used storage** is visible inside the SharePoint Admin center; Microsoft refreshes this data periodically.

Syskit Point calculates used storage as a sum of the storage used by each site collection (alive or soft deleted).

Depending on the size of your environment, it takes some time to refresh the data for all sites. 


## How often is total storage checked and updated/synced by Syskit Point?

This depends on the size of your environment, as the sync happens gradually. 

**Smaller sites are synced every 24 hours. With larger sites, the sync can take up to 7 days.**

If a site is not yet synced and you want to have the current information instantly, you can manually sync the site from the Site details screen.


## Site Storage Limits in Microsoft 365

[For more details about site storage limits in Microsoft 365, please read through the Site Storage Limits article.](../faq/site-storage-limits.md)
