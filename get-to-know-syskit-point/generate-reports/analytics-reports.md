---
description: Analytics reports provide insight into user interactions with Microsoft 365 services, departments, and content.
---

# Analytics Reports

Reports in this article help keep track of **user interaction** with Microsoft 365 services, compare adoption between **departments** and detect which **content and services** are not being used.
 
 Some of these reports will require an additional Analytics and Adoption module.

This article contains information on eight analytics reports available through the **Reports Center**:

* [Site Analytics Report](#site-analytics-report)
* [Site Structure Report](#site-structure-report)
* [Inactive Content Report](#inactive-content-report)
* [SharePoint Activity Report](#sharePoint-activity-report)
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

Once the report has successfully generated, the following data will be available in the columns:

* **Site Name**; shows the site's name in the column. 
   * When selecting a site, the charts for that site showing Site Hits, Site Visitors, and Site Storage will be visible at the bottom of the screen.
* **URL**; provides a direct link to the site on the Microsoft 365 tenant.
* **Total Hits**; shows the total number of hits the site had in the last seven days.
* **Visitors**; shows the total number of unique visitors to the site.
* **Size**; shows the total size of the site.
* **Last Content Modified**; shows the date the site was last modified on.

For detailed insight into data about a specific site, click on the Site Name. 
  * The page that opens will show tiles with the sites General Info, Overview, Content, Permissions, Site Activity, User Activity, Documents Activity, and Pages Activity.

The analytics can show data from the last 7 days, 14 days, 30 days or a chosen custom date period.

## Site Structure Report

Site Structure report provides the ability to check the hierarchical structure for sites down to the file level. 

Use this report to display the structure of the Sharepoint environment. 
  * The report can also be exported, with the ability to delete unique permissions or stop inheriting permissions.

### Generate Site Structure Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Site Structure  report** to be redirected to the selection screen.
* **Select one or multiple sites** for which the report should be generated for. 
  * Once selected there are several options available to show content down to; Subsites, Document libraries & lists, Folders and Files, and folders. 
    * These are available in the dropdown menu from the additional filter on the bottom. 
* **Click on the Run Report button** when finished with the seleetion.

### Site Structure Report Data

Once the report has successfully generated, the following data will be available in the columns:

* **Name**; shows the name of the site and all the content in the structure down to files & folders.
* **URL**; clicking on it, you are redirected to the site's exact location or following folders, subsites, etc.
* **Last Modified**; shows the exact date the site was last modified.
* **Created On**; shows the exact date when someone created the site or some of its structure.

The Site Structure report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Inactive Content Report

The Inactive Content report gives you the ability to quickly detect unused sites, Microsoft 365 Groups, and Microsoft Teams in your Microsoft 365 environment. 

This report can be used to stay up to date with any unused resources in your environment, in order to keep it clean and healthy.

### Generate Inactive Content Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Site Structure  report** to be redirected to the selection screen.

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the Inactive Content report.
- On the Options screen, select which type of resource you want to generate the report (Site, Microsoft 365 Group, or Microsoft team) and click the Run Report button.

### Inactive Content Report Data

Now that You successfully generated the report, you can see all the resources in your environment that are currently inactive. You can export the report data into PDF and XLSX formats. 

If you select one or multiple resources, you can also perform Lifecycle Management actions on those resources (choose to Keep, Archive, or Delete the resources) or ask owners to Renew said resources. When either of those actions is completed, said resource wouldn't be visible on the Inactive Content Report anymore.

When looking at the generated reports, you can see the following columns:

- Name - shows you the name of the inactive resource
- Sharepoint, Exchange, Teams, and Yammer activity column shows inactivity based on the last date some activity was made on a said resource.
- Lifecycle Management - shows if the site was monitored for activity by SysKit Point Lifecycle Management.

## SharePoint Activity Report

SharePoint Activity report gives you a detailed overview of SharePoint usage. 
Report on the most active users, most popular sites, documents, or pages. Use this report to track the adoption of SharePoint in your environment.

To see this report, you need to have the Adoption and Analytics module installed in SysKit Point.

### Generate SharePoint Activity Report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the SharePoint Activity report.
- On the Selection screen, choose which resources you want to generate a report; select a period on the bottom filter and click on the Run Report button.

### SharePoint Activity Report Data

Now that the report is successfully generated, you can see detailed graphs showing the activity of Users, Sites, Pages, and Documents. See the Most Active Users, Sites, Top 5 pages, Top 5 Document visitors, and Top 5 Documents visited. You can also see the number of Unique Visitors, the Most popular Days, which type of devices visitors are using, etc.

## Most Popular Content Report

Most Popular Content report makes it easy to identify the most popular documents and pages in your Microsoft 365 environment.

To see this report, you need to have the Adoption and Analytics module installed in SysKit Point.

### Generate Most Popular Content Report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the Most Popular Content report.
- On the Selection screen, choose a resource you want to generate a report for; in the bottom filter, select the time frame and choose if you want to see Pages or Documents. Click on the Run Report button.

### Most Popular Content Report Data

Now that the report is successfully generated, you can see the most popular pages or documents in your Microsoft 365 environment. You can also export the report into PDF and XLSX format or schedule the report. Columns that are seen by default are:

- Name - This shows you the name of the page or the document; when clicked on it, you are redirected to the details page of that page or document in SysKit Point.
- Site Name - This shows the resource's name where the most popular document is; when clicked on it, you are redirected to the site details page in Syskit Point.
- Hit Count - Shows the unique number of hits on the page or document.
- Unique Visitors count - This shows the number of unique visitors that have visited said page or document.

## Meeting Interactions Report

The Meeting Interactions report gives you the ability to explore how people interact in Microsoft Teams via 1:1 calls and meetings. Use the report to see how users are adopting Microsoft Teams in your environment.

To see this report, you need to have the Adoption and Analytics module installed in SysKit Point.

### Generate Meeting Interactions Report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the Meeting Interactions report.
- On the Selection screen, choose which company department you wish to generate a report for, and at the bottom filter, select the period. Click on the Run Report button.

### Meeting Interactions Report Data

Now that the report is generated, you get to see the connection tree of all users in the selected environment and how often or do they even interact via 1:1 calls or meetings. You can also see the Activity tab, where you see the most active users in that department.

## Conversation Interactions Report

Conversation Interactions report gives you the ability to explore how people interact with each other in Microsoft Teams via chat messages. Use this report to track the adoption of Microsoft Teams in your environment.

To see this report, you need to have the Adoption and Analytics module installed in SysKit Point.

### Generate Conversation Interactions Report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the Conversation Interactions report.
- On the Selection screen, choose which company department you wish to generate a report for, and at the bottom filter, select the period. Click on the Run Report button.

### Conversation Interactions Report Data

Now that the report is generated, you get to see the connection tree of all users in the selected environment and how often or do they even interact with each other via Microsoft Teams chat messages. You can also see the Activity tab, where you see the most active users in that department.

## Network Interaction Details Report

Network Interaction Details reports allow you to view details about members' interactions via meetings or conversations.

To see this report, you need to have the Adoption and Analytics module installed in SysKit Point.

### Generate Network Interaction Details Report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Analytics filter.
- Click on the Network Interaction Details report.
- On the Selection screen, choose which company department you wish to generate a report for, and at the bottom filter, select the period. Click on the Run Report button.

### Network Interaction Details Report Data

Now that your report is generated, you can view the details about members' interactions, be it via meetings or conversations. You can export the report to the PDF or XLSX format or Schedule it. 

Network Interaction Details report is a tree-type style report that shows the user as a Parent branch and all other users they interacted with as a child branch. 

The report shows departments for each user so you can see which departments are interacting with each other. It also shows how many calls and chat messages users exchanged.