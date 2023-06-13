---
description: This article explains options available regarding Microsoft 365 data collection, also known as Sync.
---

# How Syskit Point Collects Microsoft 365 Data

## First Run

After you install and configure Syskit Point, all data for SharePoint Online Sites, Microsoft Teams, Microsoft 365 Groups, Microsoft 365 tenant users and their OneDrive \(optional\) begins to load automatically. We call this process **Sync** since Microsoft 365 tenant data is synced with data in the Syskit Point database.

When you log in to Syskit Point, you will get an appropriate notification telling you that Sync started.

![Syskit Point - Sync started notification on the first log in](../.gitbook/assets/collect-office-365-data_syskit-point-sync-started-notification-on-the-first-log-in.png)

If you navigate to the Sites screen and drill to Site details of a site for which the Sync is not yet finished, a loading screen is displayed and you can notice the animated Sync icon in the top right corner, meaning that the Sync is in progress.

![Syskit Point - Initial load screen and sync icon](../.gitbook/assets/collect-office-365-data_syskit-point-initial-load-screen-and-sync-icon.png)

{% hint style="info" %}
**Hint!**  
While the initial Sync is in progress, if you drill to Site details of a not-yet-synced site, the site automatically gets a higher Sync priority and will be synced as soon as possible.
{% endhint %}

{% hint style="warning" %}
**Please note!**  
Initial Sync can take considerably longer than 24 hours to complete, all depending on the size of your Microsoft 365 environment.
{% endhint %}

## Sync

The Sync button can be found positioned in the top right corner on most screens in Syskit Point. Depending on the screen you are currently seeing, running Sync will trigger different Sync actions.

Here is an overview of screens and actions triggered by clicking the Sync button:

* **Sites screen** - Sync action triggers the Auto Discover which **detects all new and deleted Sites and their basic information.**
* **Microsoft Teams & Groups screen** - Sync action triggers the Auto Discover which **detects all new and deleted Microsoft Teams and Microsoft 365 Groups and their basic information.**
* **Users screen** - Sync action triggers **data collection for all Azure Active Directory users**, their properties, Microsoft 365 licenses and memberships in Directory roles.
* **Site details screen** - Sync action triggers **data collection for the currently viewed site only**; all information about site content, permissions, sharing links, access requests, etc. is collected. If the site in question has a connected Microsoft 365 Group, the Group data will also be collected.
* **Group details screen** - Sync action triggers **data collection for the currently viewed Microsoft 365 Group only**; Microsoft 365 Groups & Microsoft teams additional information is collected, along with their memberships and their channel information. If the group in question has a connected Site, the Site data will also be collected.

## Sync Schedule

While the first Sync collects data for all SharePoint Online Sites, Microsoft Teams, Microsoft 365 Groups, Microsoft 365 tenant users and their OneDrive \(optional\), **all following Sync recurrences take changes into account, meaning that only SharePoint Online Sites and Microsoft 365 Groups with discovered changes will be synced.**

{% hint style="warning" %}
**Please note!**  
Since change detection is based on Microsoft 365 audit log data, it can take up to 24 hours after a change event occurs for the corresponding audit log entry to be available for Syskit Point to process.
{% endhint %}

**Auto Discover of Sites and Microsoft 365 Groups is by default run every 24 hours.**

**User Sync is by default run every 24 hours** and collects data for all Microsoft 365 tenant users. Single user sync is not available at this point.

{% hint style="info" %}
**Hint!**  
All changes in your Microsoft 365 environment should be synced in no more than 24 hours.  
Should you require data to be synced immediately, you can start the Sync manually at any time by clicking the Sync button on the appropriate screen, be it for a Site, Microsoft 365 Group or all users in your tenant.
{% endhint %}

