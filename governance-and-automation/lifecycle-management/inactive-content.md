---
description: This section describes how to find inactive content within SysKit Point.
---

# Identify Inactive Content

Have you ever wondered how to discover all inactive content in your Microsoft 365 environment?  
It is important to have this kind of information because you want a well-organized and clutter-free Microsoft 365 environment.  
Now, you can find it all in one place with the help of **SysKit Point**.

## Monitored Workloads

To decide whether something is inactive in your Microsoft 365 environment, we collect activity data for the following workloads: **SharePoint**, **Exchange**, **Yammer**, and **Microsoft Teams**.

**SharePoint activity** is collected via Microsoft 365 audit logs. The last activity is based on the latest date when a file was viewed, edited, or downloaded.

For the collection of **Exchange activity**, SysKit Point uses Microsoft 365 Groups activity report available in Microsoft 365 admin center. The **last activity is based on the latest date when an email was delivered** to a group.

The **Yammer activity** collection is also accomplished through Microsoft 365 admin center usage report for Yammer groups activity. The **last activity is based on the latest date a message was read, posted, or liked** by the group.

**Microsoft Teams activity** is collected using protected APIs in Microsoft Graph. The **last activity is based on the latest date when a message was posted or replied to**.

**Data for Exchange, Yammer, and Microsoft Teams activities are collected by SysKit Point's dedicated service within non-working hours**, between 7:00 PM and 7:00 AM.

{% hint style="warning" %}
**Please note!  
Activity is being monitored from Syskit Point installation onward!** This applies to SharePoint and Exchange workloads since historical data for these workloads is not available in usage reports.
{% endhint %}

## Define What Is Inactive

You can **configure what is considered to be inactive** in SysKit Point by changing the number of inactive days, after which workloads will be marked as inactive. To do so, open the **Settings** page from any screen within the application, go to the **Governance &gt; Lifecycle Management** screen, where you will find the **Inactive Content** section. **Enter the number of days** in the field and click the **Save** button to update the value. The number of days can be set to a value between 30 and 1000.

![Settings - Governance screen - Inactive Content section](../.gitbook/assets/inactive-content_settings-inactive-content.png)

## View Inactive Content in SysKit Point

There are several places in SysKit Point where you can find activity information at. Let's get to know them.

### Sites Overview Screen

When you open the Sites Overview screen from the **Welcome Home** screen, click the **Column Chooser icon \(1\)** and mark the **Activity column \(2\)** to show it in the grid.

![Sites Overview screen - Activity column](../.gitbook/assets/inactive-content_sites-overview-activity-column.png)

You can see the **blue info icon** in the Activity column header.

![Activity column tooltip](../.gitbook/assets/inactive-content_activity-column-tooltip.png)

When you **hover over the info icon**, you will see which workloads are included in evaluating the activity for Sites, Microsoft Teams, Microsoft 365 Groups, and OneDrive sites. There is also information for which period \(number of days\) was the activity assessment made. In the grid, you have a **column filter** to help you see just the active or the inactive content.

Hover over circle icons for each row to get more information about the **activity**. The **circle is colored gray** if there **was no activity since the application started collecting the activity data**. If the **circle is colored** **green**, the **content is** **active**. The date of the last activity is displayed on hover.

{% hint style="info" %}
**Hint!** If more than one workload was active, then the latest date among all workloads will be shown.
{% endhint %}

There is also a separate **Inactive Sites view \(1\)** available, accessed from the View drop-down menu. By selecting it, the Activity column becomes visible in the grid.

![Sites Overview Screen - Inactive Sites view](../.gitbook/assets/inactive-content_inactive-sites-view.png)

### Microsoft Teams & Groups Overview Screen

The **Microsoft Teams & Groups Overview screen** has a similar representation of Microsoft Teams and Microsoft 365 Groups' workload activity as the Sites Overview screen. The **Activity column is**, **by default**, **shown** as the last column in the grid. The same rules of displaying the activity data are applied here, as explained for the Sites Overview screen. Additionally, here you can find a separate **Inactive** tile above the grid. By clicking the tile, the **Inactive Groups** view is shown.

![Inactive Content tile](../.gitbook/assets/inactive-content_inactive-content-tile.png)

### Details Screen

You can **access** **Details** **screens** for Sites, Microsoft 365 Groups, and Microsoft Teams by **clicking the link in the Name column** on **Overview** screens. The activity information inside the Details screens is shown in the **Analytics and Usage** tile. Hover over the **blue info icon** to see for which workloads are the activities tracked.

![Details screen - Analytics and Usage tile - Activity section](../.gitbook/assets/inactive-content_analytics-and-usage-tile-activity-section.png)

{% hint style="warning" %}
**Please note!**  
Workload activity data is shown only for the **root site level**. Document libraries, lists, folders, and list items **won't have the Activity section displayed** in the **Analytics and Usage** tile.
{% endhint %}

### Inactive Content Report

The easiest way to **find all inactive content** is by using the **Inactive Content report**, which you can find in the Report Center. By clicking the Inactive Content report tile, the **Options** screen opens where you can choose whether to include **Sites**, **Microsoft Teams**, and/or **Microsoft 365 Groups** in the report. By default, all options are selected.

![Inactive Content report - Options screen](../.gitbook/assets/inactive-content_inactive-content-report-options-screen.png)

Click the **Run Report** button to generate the Inactive Content report. There are four columns in the grid - the **Name** column, which you can **click to open the** **Details** **screen**, and **four activity columns** for **SharePoint**, **Exchange**, **Microsoft Teams**, and **Yammer**. Two additional columns, **Type** and **Owner\(s\)**, can be added from the **Column Chooser**.

![Inactive Content report - Column Chooser](../.gitbook/assets/inactive-content_inactive-content-report-column-chooser.png)

Notice the **blue info icon** next to the Activity columns. **Hovering above the icons displays a tooltip** with information on how the last activity date was determined.

![Inactive Content report - Activity column tooltip](../.gitbook/assets/inactive-content_inactive-content-report-activity-tooltip.png)

A **grey circle** icon represents an existing **workload with no activity. Hovering** **over** it will show the information since when SysKit Point monitors the activity.

**Dash \(-\)** **is displayed in case there is** **no workload** associated with the selected item. An appropriate tooltip is displayed on hover.

