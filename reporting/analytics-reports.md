---
description: Analytics reports provide insight into user interactions with Microsoft 365 services, departments, and content.
---

# Analytics Reports

Reports in this article help keep track of **user interaction** with Microsoft 365 services, compare adoption between **departments**, and detect which **content and services** are not being used.
 
 Some of these reports will require an additional Analytics and Adoption module.

This article contains information on eight analytics reports available through the **Report Center**:

* [Site Analytics Report](#site-analytics-report)
* [Site Structure Report](#site-structure-report)
* [Inactive Content Report](#inactive-content-report)
* [SharePoint Activity Report](#sharepoint-activity-report)
* [Most Popular Content Report](#most-popular-content-report)
* [Meeting Interactions Report](#meeting-interactions-report)
* [Conversation Interactions Report](#conversation-interactions-report)
* [Network Interaction Details Report](#network-interaction-details-report)


## Site Analytics Report

Site Analytics report provides an overview of all sites; it shows the total hits each site had in the last seven days, the highest number of unique daily visitors, and other details.

### Generate File and Page Activities Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Site Analytics report** to generate the report.

### Analytics Report Data 

Once the report has been successfully generated, the following data will be available in the columns:

* **Site Name**; shows the site's name in the column. 
   * When selecting a site, the charts for that site showing Site Hits, Site Visitors, and Site Storage will be visible at the bottom of the screen.
* **URL**; provides a direct link to the site on the Microsoft 365 tenant.
* **Total Hits**; shows the total number of hits the site had in the last seven days.
* **Visitors**; shows the total number of unique visitors to the site.
* **Size**; shows the total size of the site.
* **Last Content Modified**; shows the date the site was last modified.

For a detailed insight into data about a specific site, click the Site Name. 
  * The page that opens will show tiles with the site's General Info, Overview, Content, Permissions, Site Activity, User Activity, Documents Activity, and Pages Activity.

The analytics can show data from the last seven days, 14 days, 30 days, or a custom time frame.

## Site Structure Report

The Site Structure report provides the option to check the hierarchical structure for sites down to the file level. 

Use this report to display the structure of the SharePoint environment. 

  * The report can also be exported, with the ability to delete unique permissions or stop inheriting permissions.

### Generate Site Structure Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Site Structure report** to be redirected to the selection screen.
* **Select one or multiple sites** for which to generate the report. 
  * Once selected, there are several options available to show content down to; Subsites, Document libraries & lists, Folders and Files, and folders. 
    * These are available in the dropdown menu from the additional filter on the bottom. 
* **Click the Run Report button** when finished with the selection.

### Site Structure Report Data

Once the report has been successfully generated, the following data will be available in the columns:

* **Name**; shows the site's name and all the structure's content down to files & folders.
* **URL**; clicking it redirects to the site's exact location or the following folders, subsites, etc.
* **Last Modified**; shows the exact date the site was last modified.
* **Created On**; shows the exact date when someone created the site or some of its structure.

The Site Structure report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Inactive Content Report

The Inactive Content report provides the ability to quickly detect unused sites, Microsoft 365 Groups, and Microsoft Teams in your Microsoft 365 environment. 

This report can be used to stay up to date with any unused resources in the environment to keep it clean and healthy.

### Generate Inactive Content Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Analytics in the filter**; it can be found in the upper left corner.
* **Click the Inactive Content report** to be redirected to the options screen.
  * **Select which type of resource** the report should be generated for (Site, Microsoft 365 Group, or Microsoft Team)
* **Click the Run Report button**.

### Inactive Content Report Data

When the report has been successfully generated, all of the currently inactive resources in your environment can be found there. 

The Inactive Content report data can be **exported into PDF and XLSX formats**.

Select one or multiple resources to perform Lifecycle Management actions on those resources:

 * Choose to **Keep, Archive or Delete** the resources or ask the **owner to Renew** the resources. 

When any of those actions are completed on a resource, it will no longer be visible on the Inactive Content Report.

When looking at the generated reports, the following columns can be found:

- **Name**; shows the name of the inactive resource.
- **SharePoint, Exchange, Teams, and Yammer activity column;** shows inactivity based on the last date any activity was made on the resource.
- **Lifecycle Management**; shows if the site was monitored for activity by SysKit Point Lifecycle Management.

## SharePoint Activity Report

SharePoint Activity report **provides a detailed overview of SharePoint usage**. It offers insight into the most active users, most popular sites, documents, or pages. 

This report can be used to **track the adoption of SharePoint** in your environment.

To see this report, **the Adoption and Analytics module** needs to be installed in SysKit Point.

### Generate SharePoint Activity Report


- Click the SharePoint Activity report.
- On the Selection screen, choose which resources you want to generate a report; select a time frame on the bottom filter and click the Run Report button.


* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the SharePoint Activity report** to be redirected to the **Selections screen**.
  * **Select which resource** the report should be generated for, and select the time frame on the bottom filter.
* **Click the Run Report button**.

### SharePoint Activity Report Data

When the report is successfully generated, detailed graphs which show the activity of Users, Sites, Pages, and Documents will be shown along with the following:
  * The Most Active Users 
  * Sites
  * Top five pages 
  * Top five Document visitors
  * Top five Documents visited
  
The number of Unique Visitors, the most popular days, which type of devices the visitors are using, and other details will also be visible. 

## Most Popular Content Report

The Most Popular Content report makes it easy to **identify the most popular documents and pages** in your Microsoft 365 environment.

To view this report, the Adoption and Analytics module needs to be installed in SysKit Point.

### Generate Most Popular Content Report

* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Most Popular Content report** to be redirected to the **Selections screen**.
  * **Select which resource** the report should be generated for; in the bottom filter, select the time frame and choose between **Pages or Documents**. 
* **Click the Run Report button**.

### Most Popular Content Report Data

Once the report is successfully generated, it shows the most popular pages or documents in your Microsoft 365 environment. 

The Most Popular Content report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

The columns that are seen by default are:

- **Name**; shows the name of the page or document. 
  * When clicked on, it redirected to the details page of that page or document in SysKit Point.
- **Site Name**; shows the name of the resource where the most popular document is. 
  * When clicked on, it redirects to the site details page in Syskit Point.
- **Hit Count**; shows the unique number of hits on the page or document.
- **Unique Visitors Count**; shows the number of unique visitors that have visited the page or document.

## Meeting Interactions Report

The Meeting Interactions report allows the exploration of how people interact in Microsoft Teams via 1:1 calls and meetings.

This report can be used to see how users are adopting Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

### Generate Meeting Interactions Report

* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Meeting Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Meeting Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via 1:1 calls or meetings and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

## Conversation Interactions Report

The Conversation Interactions report provides the ability to **explore how people interact with each other** via chat messages in Microsoft Teams. 

Use this report to track the adoption of Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

### Generate Conversation Interactions Report


* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Conversation Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Conversation Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via Microsoft Teams chat messages and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

## Network Interaction Details Report

Network Interaction Details report provides insight into details about members' interactions via meetings or conversations.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

### Generate Network Interaction Details Report


* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Network Interaction Details report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Network Interaction Details Report Data

Once the report is generated, the details about members' interactions through meetings or conversations can be seen. 

The Network Interaction Details report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

The Network Interaction Details report is a tree-type style report that shows the user as a Parent branch and all other users they interacted with as a Child branch. 

The report shows departments for each user to enable seeing which departments are interacting with each other. 

It also shows the number of calls and chat messages users exchanged.