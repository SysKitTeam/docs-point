---
description: Analytics reports provide insight into user interactions with Microsoft 365 services, departments, and content.
---

# Analytics Reports

Reports in this article help keep track of **user interaction** with Microsoft 365 services, compare adoption between **departments**, and detect which **content and services** are not being used.
 
This article contains information on analytics reports available through the **Report Center**:

* [Site Analytics Report](#site-analytics-report)
* [Site Structure Report](#site-structure-report)
* [Inactive Workspaces Report](#inactive-workspaces-report)
* [Workspaces with Stale Content Report](#workspaces-with-stale-content-report)

{% hint style="information" %}
**Site Structure and Inactive Workspaces reports** are available in all plans.
**Site Analytics report** is available in the Security & Compliance plan and higher tiers. 
See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## Adoption and Analytics Module Reports
The Adoption and Analytics module brings additional reports available through the **Report Center**.
* [SharePoint Activity Report](#sharepoint-activity-report)
* [Most Popular Content Report](#most-popular-content-report)
* [Meeting Interactions Report](#meeting-interactions-report)
* [Conversation Interactions Report](#conversation-interactions-report)
* [Network Interaction Details Report](#network-interaction-details-report)

{% hint style="warning" %}
**Please note!** **Adoption & Analytics module support ends on January 1st, 2024**. No further fixes, feature updates, or general support will be available after the date. 
{% endhint %}

## Site Analytics Report

The Site Analytics report provides an overview of all sites; it shows the total hits each site had in the last seven days, the highest number of unique daily visitors, and other details.

### Generate Site Analytics Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; it can be found in the upper left corner.
* **Click the Site Analytics report** to generate the report.

### Site Analytics Report Data 

Once the report has been successfully generated, the following data will be available in the columns:

* **Site Name**; shows the site's name in the column. 
  * When clicking on the row for a workspace, the charts at the bottom of the screen (Site Hits, Site Visitors, Site Storage) change to reflect information for that site show.
* **URL**; provides a direct link to the site on the Microsoft 365 tenant.
* **Type**; shows what type of workspace it is
* **Total Hits**; shows the total number of hits the site had in the last seven days.
* **Visitors**; shows the total number of unique visitors to the site.
* **Size**; shows the total size of the site.
* **Last Content Modified**; shows the date the site was last modified.

Below the report, you can see three different charts. You can select the time frame for the data shown in the charts in the left-side filter. The default setting is Last 7 Days.

The charts contain information on:

* **Site Hits**; shows the number of site hits on different days/dates
* **Site Vistors**; shows the number of site visitors on different days/dates
* **Site Storage**; shows the state of your storage on different days/dates

For a detailed insight into data about a specific site, click the Site Name. 
* The page that opens will show tiles with the site's General Info, Overview, Content, Permissions, Site Activity, User Activity, Documents Activity, and Pages Activity.

The analytics can show data from the last seven days, 14 days, 30 days, or a custom time frame.

## Site Structure Report

The Site Structure report provides the option to check the hierarchical structure for sites down to the file level. 

Use this report to display the structure of the SharePoint environment. 

  * The report can also be exported, with the ability to delete unique permissions or stop inheriting permissions.

### Generate Site Structure Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; it can be found in the upper left corner.
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


## Inactive Workspaces Report

The Inactive Workspaces report provides the ability to quickly detect unused sites, Microsoft 365 Groups, and Microsoft Teams in your Microsoft 365 environment. 

This report can be used to stay up to date with any unused workspaces in the environment to keep it clean and healthy.

### Generate Inactive Workspaces Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; it can be found in the upper left corner.
* **Click the Inactive Workspaces report** to be redirected to the options screen.
  * **Select which type of workspaces** the report should be generated for (Site, Microsoft 365 Group, or Microsoft Team)
* **Click the Run Report button**.

### Inactive Workspaces Report Data

When the report has been successfully generated, all of the currently inactive workspaces in your environment can be found there. 

The Inactive Workspaces report data can be **exported into PDF and XLSX formats**.

Select one or multiple workspaces to perform Lifecycle Management actions on them:

 * Choose to **Keep, Archive or Delete** the workspaces or **Send Reminder** to owners to resolve the inactive workspace tasks. 

When any of those actions are completed on a workspace, it will no longer be visible on the Inactive Workspaces Report.

When looking at the generated reports, the following columns can be found:

* **Workspace**; shows the name of the inactive workspace.
* **URL**; shows the URL of the workspace
* **Owner(s)**; lists the workspace owners
* **Last Activity Date**; shows the date and time when the workspace was last active
* **Storage Used**; shows the amount of storage used by the workspace

There are additional columns available from the column chooser:
* **Detected**
* **Status**
* **Workspace Type**
* **Last Modified**
* **Storage Limit**
* **Privacy**
* **Sharing Settings**
* **Policy**
* **Rule**
* **Assigned to**
* **SharePoint Activity**
* **SharePoint Last Activity Date**
* **Exchange Activity**
* **Exchange Last Activity Date**
* **Teams Activity**
* **Teams Last Activity Date**
* **Yammer Activity**
* **Yammer Last Activity Date**
* **Planner Activity**
* **Planner Last Activity Date**

## Workspaces with Stale Content Report

The Workspaces with Stale Content report can detect workspaces with old or unused files quickly. 

This report can be used to maintain clean and healthy workspaces by keeping track of any outdated content.

### Generate Workspaces with Stale Content Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; it can be found in the upper left corner.
* **Click the Workspaces with Stale Content report** to be redirected to the options screen.
  * **Select which type of workspaces** the report should be generated for (Site, Microsoft 365 Group, or Microsoft Team).
  * **Select whether you want to include files** that were created or modified.
  * **Select the date** before which the report is generated.
* **Click the Run Report button**.

### Workspaces with Stale Content Report Data

When the report has been successfully generated, all the workspaces with the parameters you entered on the selection step can be found there. 

The Workspaces with Stale Content report data can be **exported in the XLSX format** and be **scheduled**.

Selecting one or multiple workspaces provides the **Manage Metadata** action. 

When looking at the generated reports, the following columns can be found:

* **Name**; shows the name of the workspace
* **URL**; shows the URL of the workspace
* **Primary Admin**; shows the primary admin for the workspace
* **Sensitivity Label**; shows the type of sensitivity label applied to the workspace if there is one

There are additional columns available from the column chooser:
* **Site Guid**
* **Template**
* **Data Location**
* **Owners Emails**
* **Created on**
* **Last Modified**
* **Storage Used**
* **Primary Contact**
* **Secondary Contact**
* **Department**
* **Project**
* **Tier**
* **Today's Date 365**
* **Number of People on Project**


## SharePoint Activity Report

SharePoint Activity report **provides a detailed overview of SharePoint usage**. It offers insight into the most active users, most popular sites, documents, or pages. 

This report can be used to **track the adoption of SharePoint** in your environment.

To see this report, **the Adoption and Analytics module** needs to be installed in Syskit Point.

### Generate SharePoint Activity Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the SharePoint Activity report** to be redirected to the **Selections screen**.
  * **Select which workspace** the report should be generated for, and select the time frame on the bottom filter.
* **Click the Run Report button**.

### SharePoint Activity Report Data

When the report is successfully generated, detailed graphs that show the activity of Users, Sites, Pages, and Documents will be shown along with the following:
  * The Most Active Users 
  * Sites
  * Top five pages 
  * Top five Document visitors
  * Top five Documents visited
  
The number of Unique Visitors, the most popular days, which type of devices the visitors are using, and other details will also be visible. 

## Most Popular Content Report

The Most Popular Content report makes it easy to **identify the most popular documents and pages** in your Microsoft 365 environment.

To view this report, the Adoption and Analytics module needs to be installed in Syskit Point.

### Generate Most Popular Content Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Most Popular Content report** to be redirected to the **Selections screen**.
  * **Select which workspace** the report should be generated for; in the bottom filter, select the time frame and choose between **Pages or Documents**. 
* **Click the Run Report button**.

### Most Popular Content Report Data

Once the report is successfully generated, it shows the most popular pages or documents in your Microsoft 365 environment. 

The Most Popular Content report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

The columns that are seen by default are:

- **Name**; shows the name of the page or document. 
  * When clicked on, it redirects to the details page of that page or document in Syskit Point.
- **Site Name**; shows the name of the workspace where the most popular document is. 
  * When clicked on, it redirects to the site details page in Syskit Point.
- **Hit Count**; shows the unique number of hits on the page or document.
- **Unique Visitors Count**; shows the number of unique visitors that have visited the page or document.

## Meeting Interactions Report

The Meeting Interactions report allows the exploration of how people interact in Microsoft Teams via 1:1 calls and meetings.

This report can be used to see how users are adopting Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in Syskit Point.

### Generate Meeting Interactions Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Meeting Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Meeting Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via 1:1 calls or meetings and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

## Conversation Interactions Report

The Conversation Interactions report provides the ability to **explore how people interact with each other** via chat messages in Microsoft Teams. 

Use this report to track the adoption of Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in Syskit Point.

### Generate Conversation Interactions Report


* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Conversation Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Conversation Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via Microsoft Teams chat messages and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

## Network Interaction Details Report

Network Interaction Details report provides insight into details about members' interactions via meetings or conversations.

To see this report, the Adoption and Analytics module needs to be installed in Syskit Point.

### Generate Network Interaction Details Report


* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Analytics in the filter**; located in the upper left corner.
* **Click the Network Interaction Details report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time frame for the report. 
* **Click the Run Report button**.

### Network Interaction Details Report Data

Once the report is generated, the details about members' interactions through meetings or conversations can be seen. 

The Network Interaction Details report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

The Network Interaction Details report is a tree-type style report that shows the user as a Parent branch and all other users they interacted with as a Child branch. 

The report shows departments for each user to see which departments are interacting with each other. 

It also shows the number of calls and chat messages users exchanged.