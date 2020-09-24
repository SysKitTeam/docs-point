---
description: >-
  This article shows you what kind of information is presented in SysKit Point
  Dashboard.
---

# Dashboard Overview

To get a whole picture of your **Office 365 environment**, you must keep an eye on all happening changes.  

The Dashboard screen provides you precisely that! 

You can access the **Dashboard** screen from:

1. the **Welcome Home** screen,
2. the **Home dropdown menu** on any other screen within the application. 

![Dashboard tile on Welcome Home screen](../.gitbook/assets/dashboard_dashboard-tile-on-welcome-home-screen.png)

![Dashboard tile on Home dropdown menu](../.gitbook/assets/dashboard_dashboard-tile-on-home-dropdown-menu.png)

Here is an example of how it looks.

![Dashboard screen](../.gitbook/assets/dashboard_dashboard-screen.png)

This summary screen consists of six tiles - Inventory, Users, External Collaboration, Storage, Permissions Review, and Lifecycle Management.

{% hint style="warning" %}
**Please note!** Only **SysKit Point Admin** role can see the Dashboard.
{% endhint %}

### Inventory tile

In Inventory, you can find the information about the total number of:

* **Microsoft teams,** 
* **Office 365 groups,** 
* **sites,** 
* **OneDrive,**
* **orphaned resources,**
* **and inactive resources.**

Each of these numbers is drillable, and it will open the Sites Overview screen, that is filtered with the selected resource.

![Inventory tile](../.gitbook/assets/dashboard_inventory-tile.png)

For the **period of the last 30 days**, you can see for each resource the number of new items, if any. 

If you **hover over a bar** which represents a newly added resource, a **tooltip will appear** with the exact date. 

![Inventory tile - bar tooltip](../.gitbook/assets/dashboard_inventory-tile-bar-tooltip.png)

To see all resources more detailed, click on **View All** link, and the **Sites Overview** screen will open. 

In the bottom part of the Inventory tile, colored in red, you will find inactive and orphaned resources number if they are present in your environment. 

By clicking on the number of the inactive resource, it will open the **Inactive Content** report. For more information, click [here](../common-tasks/inactive-content.md#inactive-content-report). 

{% hint style="warning" %}
**Please note!** The number of inactive resources **will be visible 10 days after the first installation of SysKit Point.** 
{% endhint %}

Similarly, clicking on the number of orphaned resources will open the **Orphaned Resources** report in the **Report Center**. 

### Users tile

This tile contains information about the total number of users in the environment and newly added in the past 30 days. 

To access detailed information about the users, click on the total number of users or the **View All** link. 

![Users tile](../.gitbook/assets/dashboard_users-tile.png)

In the bottom part of the tile, additional information is provided about the number of external users, administrator, inactive users, and users that have blocked sign-in in Office 365. 

Drill on each of the numbers will guide you to the appropriate view in the **Users Overview** screen. You can perform further actions with each user by selecting them and choosing action in the side panel. 

### External Collaboration tile

You can supervise external sharing within your environment with this tile. 

Here you can find the total number of:

* **external users**,
* **ad-hoc \(guest\)** users. 

Drill on the number will open the **Users Overview** screen with filtered external/ad-hoc users. 

![External Collaboration tile ](../.gitbook/assets/dashboard_external-collaboration-tile.png)

Drill on **Sites With External Sharing** number opens a view with the name **External Sharing** in the **Sites Overview** screen. There will be Microsoft teams, Office 365 groups, sites, and OneDrive that have **external sharing settings different from "Only people in your organization"**. 

Clicking on the **Anonymous Links** number will open the **Sharing Links** report in Report Center. Link types that are shown on the report are **"Anyone with access to the shared link can edit/view"**. You can remove specific links with action in the side panel. 

The last information on this tile is the number of **Sites With Anonymous Sharing**. The drill will show you the **Anonymous Sharing** **view** in the Sites Overview screen. There will be resources that have external sharing settings set as **"Anyone"**. 

### Permissions Review tile and Lifecycle Management tile

The **Permissions Review** tile and **Lifecycle Management** tile shows you the progress of the feature if they are configured. 

{% hint style="warning" %}
**Please note!** Permissions Review tile and Lifecycle Management tile are only visible within the **Enterprise subscription plan**. Click [here ](https://www.syskit.com/products/point/pricing/)for more information. 
{% endhint %}

When they are not configured, they will look like the picture below. 

![Permissions Review tile and Lifecycle Management tile &#x2013; not configured ](../.gitbook/assets/dashboard_permissions-review-tile-and-lifecycle-management-tile-not-configured.png)

Click on the link **Configure Now** to set up Permissions Review and Lifecycle Management features. The settings screen will open. 

When the Permissions review is configured, it will give you the information about the upcoming review, the previous review, and the current active review; depending on the available information. 

Below, you can see the information for the active Permissions Review. Link **View All** guides you to the **Governance screen** where additional information is provided about the active review. 

![Permissions Review tile with active review information ](../.gitbook/assets/dashboard_permissions-review-tile-with-active-review.png)

When the **Lifecycle Management feature** is configured, tile will give you information if it is in the active state or it is just turned on but not active. 

If not active, the numbers in the tile will be zero. 

In the picture below, you can see the feature in the active state. 

![Lifecycle Management tile in active state ](../.gitbook/assets/dashboard_lifecycle-management-tile-in-active-state.png)

**View All** link opens the **Governance screen for Lifecycle Management Overview** with additional information.  

The **chart shows information about performed actions in the last 30 days**. 

Every number is drillable and opens the dedicated screen in the Governance section. 

If you have some **resources that require attention**, they **will be highlighted in red** on the bottom part of the tile. Clicking on the link will open the **Awaiting Response** screen where you can decide how you want to resolve these resources. 

### Storage tile

This tile provides you information about the total, used, and free space in your environment. Especially for: 

* Microsoft teams, 
* Office 365 groups, 
* and sites. 

**SharePoint storage** includes all the files, including those in the recycle bin, and archived files. OneDrive storage is not included in the metrics. 

**View All** link will open the **Largest Sites view** on the **Sites Overview** screen. 

![Storage tile ](../.gitbook/assets/dashboard_storage-tile.png)

{% hint style="warning" %}
**Please note!** SysKit Point data regarding storage can differ from the data provided by the **SharePoint admin center**.
{% endhint %}

