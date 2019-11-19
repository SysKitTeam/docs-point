# Collect Office 365 Data

## First Run

After you install and configure SysKit Point, all data for SharePoint Online Sites, Microsoft Teams, Office 365 Groups and Office 365 tenant users begins to load automatically. We will call this process **Sync**, ****since  we sync Office 365 tenant data with data in the SysKit Point database.

When you log in to SysKit Point, you will get an appropriate notification telling you that Sync started.

![SysKit Point - Sync started notification on first log in](../.gitbook/assets/collect-office-365-data.png)

If you navigate to the Sites screen and drill to Site details of a site for which the sync is not yet finished, a loading screen is displayed and you can notice the animated Sync icon in the top right corner. 

![SysKit Point - Initial site details load screen and sync icon](../.gitbook/assets/collect-office-365-data_loading_sync.png)

{% hint style="info" %}
**Hint!**  
While the initial load is in progress, if you drill to Site details of a not-yet-synced site, the site automatically gets a higher sync priority and will be synced as soon as possible.
{% endhint %}

## Sync 

The Sync button can be found positioned in the top right corner of the most screens in SysKit Point. Depending on the screen you are currently seeing, running the Sync will trigger different sync actions. 

Here is an overview of screens and actions triggered by clicking the Sync button:

* **Sites screen** - Sync action triggers the Autodiscover - all new Sites are discovered
* **Microsoft Teams & Groups screen** - Sync action triggers the Autodiscover - all new Microsoft Teams and Office 365 groups will be discovered
* **Users screen** - Sync action triggers data collection for all Users in Office 365 tenant
* **Site details screen** - Sync action triggers **data collection for the currently viewed site only**; if the site in question has a connected Office 365 group, the group data will also be collected
* **Group details screen** - Sync action triggers **data collection for the currently viewed Office 365 Group only**; if the group in question has a connected Site, the Site data will also be collected

## Sync Schedule

