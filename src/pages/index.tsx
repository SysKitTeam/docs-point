import React from 'react';
import LandingPageLayout from '@site/src/components/LandingPageLayout';
import LandingTile from '@site/src/components/LandingTile';
import LandingTileGrid from '@site/src/components/LandingTileGrid';

export default function HomePage() {
  return (
    <LandingPageLayout
      title="Syskit Point"
      description="Discover, Secure, and Control Your Microsoft 365 with Syskit Point"
    >
      <h1>Syskit Point</h1>
      
      <p>
        Deep visibility, powerful management, and automated governance – gain it all with a single scalable platform for Microsoft 365. 
        Here you'll find everything you need to set up Syskit Point and learn about the features.
      </p>
      
      <ul>
        <li>
          In case you've already set up your Syskit Point or started a 21-day free trial and need a quick-start guide, 
          please go to our <a href="/point/get-to-know-syskit-point/point-starter-kit">Get to Know Syskit Point article</a>.
        </li>
      </ul>

      <h2>Setup & Product Updates</h2>
      
      <LandingTileGrid>
        <LandingTile
          title="Syskit Point - Cloud"
          description="Get information about product updates, SaaS installation and activation."
          imageUrl="/img/cloud_icon_color_syskit.png"
          linkUrl="/set-up-point-cloud/overview"
          imageAlt="Syskit Point Cloud"
        />
        <LandingTile
          title="Syskit Point - Enterprise"
          description="Get information about product updates, self-hosted installation and activation."
          imageUrl="/img/data centar_icon_color_syskit.png"
          linkUrl="/set-up-point-enterprise/deployment/overview"
          imageAlt="Syskit Point Enterprise"
        />
      </LandingTileGrid>

      <h2>You are using Syskit Point as...</h2>

      <LandingTileGrid>
        <LandingTile
          title="Administrator"
          description="Learn how to configure it all, as well as how to use reporting, auditing, management, and governance features."
          imageUrl="/img/admin_icon_color_syskit.png"
          linkUrl="/configuration/how-to-configure-Point"
          imageAlt="Point Administrators"
        />
        <LandingTile
          title="M365 End User/Workspaces Owner"
          description="Learn how to easily get an overview across workspaces, request and manage access, or even create new workspaces."
          imageUrl="/img/business users_icon_color_syskit.png"
          linkUrl="/point-collaborators/"
          imageAlt="Point End-Users"
        />
      </LandingTileGrid>

      <h2>Useful sections to keep an eye on!</h2>

      <LandingTileGrid>
        <LandingTile
          title="Product Updates"
          description="We regularly launch updates to keep you up-to-date with the latest technology and provide you with new ways of managing M365. Be efficient and gain control at every point."
          linkUrl="/releases/"
          showLink={true}
          linkUrlDisplayText="Releases"
        />
        <LandingTile
          title="FAQ"
          description="Security, free trial, activation, licensing, we tried to cover it all for you. Please check if there is an answer to your question here, and if not, please feel free to contact us."
          linkUrl="/faq/"
          showLink={true}
          linkUrlDisplayText="FAQ"
        />
        <LandingTile
          title="Troubleshooting"
          description="If you are facing issues with Syskit Point, our team is happy to help. In this section, you can locate information our team might need to get your problems solved quickly and efficiently."
          linkUrl="/troubleshooting/"
          showLink={true}
          linkUrlDisplayText="Troubleshooting"
        />
      </LandingTileGrid>

      <h2>Syskit Point helps you...</h2>

      <h3>DISCOVER</h3>
      <p>
        <strong>Save hours of manual work and gain visibility with a centralized inventory:</strong> users, structure, sharing, and workspaces across Microsoft Teams, Groups, OneDrive, SharePoint sites, and Power BI.
      </p>
      <p>
        Focus less on exploring, <strong>be efficient</strong>, and provide a better and safer collaboration experience.
      </p>

      <h3>SECURE</h3>
      <p>
        Understand and <strong>manage who has access to what</strong> and <strong>stay on top of unauthorized or malicious activity</strong> by auditing internal and external users' and admins' actions.
      </p>
      <p>
        Take necessary actions to <strong>prevent security problems and data leaks</strong>, stay compliant with regulations, and keep the data secured in your environment.
      </p>

      <h3>CONTROL</h3>
      <p>
        <strong>Automate governance</strong> procedures, <strong>avoid uncontrolled sprawl, and manage workspaces lifecycle</strong>, from its creation to end of life.
      </p>
      <p>
        With Syskit Point governance features and Point Teams app, <strong>end users increase productivity, get simplified processes, and reduce dependency on the support</strong> team to manage access and create workspaces. <strong>Admins get the platform that helps them support adoption</strong> of modern ways of cloud collaboration, <strong>keeping the data secured and controlling</strong> everything with policies applied in the background.
      </p>
    </LandingPageLayout>
  );
}
