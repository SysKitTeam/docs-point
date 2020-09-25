---
description: >-
  This article describes all information presented in SysKit Point
  Dashboard.
---

# Dashboard Overview

The Dashboard screen provides you with the information needed to see the whole picture of your **Office 365 environment**.   
You can use the Dashboard to:
* **see what was happening in your Office 365 environment** in the last 30 days at a glance  
* **find summary data** on your resources, internal and external users, sharing links, and used storage - all numbers are drillable, taking you to the related reports, which will show more details 
* **detect potential issues**, for example, if your environment has inactive or orphaned resources

{% hint style="warning" %}
**Please note!** Only **SysKit Point Admin** role can see the Dashboard.
{% endhint %}

You can access the **Dashboard** screen from:

* **the **Welcome Home** screen
* **the **Home dropdown menu** on any other screen within the application 

![Dashboard tile on the Welcome Home screen](../.gitbook/assets/dashboard_dashboard-tile-on-welcome-home-screen.png)

![Dashboard tile on the Home dropdown menu](../.gitbook/assets/dashboard_dashboard-tile-on-home-dropdown-menu.png)

The Dashboard screen consists of six tiles:
* **Inventory**
* **Users**
* **External Collaboration**
* **Storage**
* **Permissions Review**
* **Lifecycle Management**

![Dashboard screen](../.gitbook/assets/dashboard_dashboard-screen.png)

Below, each tile is described in more detail.

### Inventory

In Inventory, you can find the information about the total number of:

* **Microsoft teams** 
* **Office 365 groups** 
* **SharePoint sites** 
* **OneDrive**
* **orphaned resources**
* **and inactive resources**

Each of these numbers is drillable, and, once clicked, opens the Sites Overview screen filtered to show appropriate data.

![Inventory tile](../.gitbook/assets/dashboard_inventory-tile.png)

For the **period of the last 30 days**, you can find the number of new items for each resource type. 

If you **hover over a bar**, which represents a newly added resource, a **tooltip will appear** with the exact date. 

![Inventory tile - bar tooltip](../.gitbook/assets/dashboard_inventory-tile-bar-tooltip.png)

To see more details about all resources, click the **View All** link, which opens the **Sites Overview** screen. 

In the bottom part of the Inventory tile, colored in red, you will find inactive and orphaned resources number if they are present in your environment. 

By clicking the number of the inactive resource, the **Inactive Content** report opens. 

For more information about the Inactive Content report, click [here](../common-tasks/inactive-content.md#inactive-content-report). 

{% hint style="warning" %}
**Please note!** The number of inactive resources **will be visible 10 days after the first installation of SysKit Point.** 
{% endhint %}

Similarly, clicking on the number of orphaned resources will open the **Orphaned Resources** report in the **Report Center**. 

### Users tile

This tile contains information about the total number of users in the environment and newly added in the past 30 days. 

To access detailed information about the users, click on the total number of users or the **View All** link. 

![Users tile](../.gitbook/assets/dashboard_users-tile.png)

In the bottom part of the tile, additional information is provided about the number of external users, administrators, inactive users, and users who have blocked sign-in in Office 365. 

Drill on each of the numbers will guide you to the appropriate view in the **Users Overview** screen. You can perform further actions with each user by selecting them and choosing action in the side panel. 

### External Collaboration tile

You can supervise external sharing within your environment with this tile. 

Here you can find the total number of:

* **external users**,
* **ad-hoc \(guest\)** users. 

Drill on the number will open the **Users Overview** screen with filtered external/ad-hoc users. 

![External Collaboration tile ](../.gitbook/assets/dashboard_external-collaboration-tile.png)

Drill on **Sites With External Sharing** number opens a view with the name **External Sharing** in the **Sites Overview** screen. There will be Microsoft teams, Office 365 groups, sites, and OneDrive that have **external sharing settings different from "Only people in your organization"**. 

Clicking on the **Anonymous Links** number will open the **Sharing Links** report in Report Center. Link types shown on the report are **Anyone with access to the shared link can edit/view**. You can remove specific links with action in the side panel. 

The last information on this tile is the number of **Sites With Anonymous Sharing**. The drill will show you the **Anonymous Sharing** **view** in the Sites Overview screen. There will be resources that have external sharing settings set as **"Anyone"**. 

### Permissions Review tile and Lifecycle Management tile

The **Permissions Review** and **Lifecycle Management** tiles show the progress of current automated tasks if the automation is configured. 

{% hint style="warning" %}
**Please note!** Permissions Review tile and Lifecycle Management tile are only visible within the **Enterprise subscription plan**. Click [here ](https://www.syskit.com/products/point/pricing/)for more information. 
{% endhint %}

When the automation is not configured, they will look like shown in the picture below. 

![Permissions Review tile and Lifecycle Management tile &#x2013; not configured ](../.gitbook/assets/dashboard_permissions-review-tile-and-lifecycle-management-tile-not-configured.png)

Click on the link **Configure Now** to set up Permissions Review and Lifecycle Management features. The settings screen will open. 

When the Permissions review is configured, it will give you the information about the upcoming review, the previous review, and the current active review, depending on the available information. 

Below, you can see the information for the active Permissions Review. The **View All** link guides you to the **Governance screen**, where additional information is provided about the active review. 

![Permissions Review tile with active review information ](../.gitbook/assets/dashboard_permissions-review-tile-with-active-review.png)

When the **Lifecycle Management feature** is configured, the tile will give you information if it is in the active state, or just turned on but not active. 

If not active, the numbers in the tile will be zero. 

In the picture below, you can see the feature in the active state. 

![Lifecycle Management tile in active state ](../.gitbook/assets/dashboard_lifecycle-management-tile-in-active-state.png)

**View All** link opens the **Governance screen for Lifecycle Management Overview** with additional information.  

The **chart shows information about performed actions in the last 30 days**. 

Every number is drillable and opens the dedicated screen in the Governance section. 

If you have some **resources that require attention**, they **will be highlighted in red** on the bottom part of the tile. Clicking the link opens the **Awaiting Response** screen, where you can decide how to resolve tasks for these resources. 

### Storage tile

This tile provides you with information about the total, used, and free space in your environment. Especially for: 

* Microsoft teams, 
* Office 365 groups, 
* and sites. 

**SharePoint storage** includes all the files, including those in the recycle bin, and archived files. OneDrive storage is not included in the metrics. 

**View All** link will open the **Largest Sites view** on the **Sites Overview** screen. 

![Storage tile ](../.gitbook/assets/dashboard_storage-tile.png)

{% hint style="warning" %}
**Please note!** SysKit Point data regarding storage can differ from the data provided by the **SharePoint admin center**.
{% endhint %}

