---
description: This article outlines the most frequently asked questions about storage management in Syskit Point.
---

# Storage Management

## Where can I find information about used storage in Microsoft 365?

SharePoint Online **used storage** is visible when you open the Active Sites page in the **SharePoint Admin center**.
Available storage and the total storage numbers are displayed here (in TB).
When hovering over the info icon next to these numbers, you get the information that the `Storage used includes sites and Microsoft 365 containers published by Microsoft.`

**Archive storage used is displayed separately on the Archived Sites screen, in the upper-right corner**.

Additional data can be found in [Microsoft 365 admin center > Reports > Usage > Storage Tab](https://admin.microsoft.com/#/reportsUsage/SharePointStorage).
Here, the percentage of total storage used is displayed. The info icon next to this number gives more details about the storage usage data refresh: `Usage data can take up to 24 hours to refresh. Storage limit increases can take up to 4 days to refresh.`
Below, storage usage and total storage numbers are displayed (in TB).

## What is the difference between Microsoft 365 and Syskit Point when calculating the used SharePoint Online storage space?


### Microsoft 

Microsoft calculates the storage usage as a sum of the following components:
* Active sites - All files, lists, libraries, and metadata
* Soft deleted sites - Both the first-stage and second-stage recycle bin count toward used storage
* Read-only sites - The state of a site that was In-place Archived in Syskit Point

**Archive storage used is displayed separately on the Archived Sites screen, in the upper-right corner**.

:::warning
**Please note!**   
Please note! 
Permanently deleted sites no longer contribute to the total storage used.
Microsoft excludes sites archived via M365 Archive from the used storage numbers displayed in the SharePoint admin center.
:::

### Syskit Point

Syskit Point calculates used storage as a sum of the storage used by each site collection, which includes sites in the following states:
* Active sites - All files, lists, libraries, and metadata
* Read-only sites - The state of a site that was In-place Archived in Syskit Point
* Soft deleted - Both the first-stage and second-stage recycle bin count toward used storage
* **M365 Archived** - **Sites archived via M365 Archive are calculated in the used storage by Syskit Point**

:::warning
**Please note!**   
Please note! 
Permanently deleted sites no longer contribute to the total storage used.
Syskit Point calculates the M365 archived data in the used storage numbers, as exceeding your standard storage quota results in additional charges, although archiving the data can reduce these charges.
For more information about billing scenarios, navigate to the [following article](https://learn.microsoft.com/en-us/microsoft-365/archive/archive-pricing?view=o365-worldwide#billing-scenarios).
:::

### Differences
The storage used data you see in M365 vs Syskit Point can differ due to the following reasons:
* Microsoft shows storage used by M365 archive data separately; Syskit Point adds the storage used by M365 archive to the total storage used numbers
* Usage data in M365 can take up to 72 hours to refresh 
    * [See the related article for more information ](https://learn.microsoft.com/en-us/microsoft-365/admin/activity-reports/sharepoint-storage-reports?view=o365-worldwide)
* Syskit Point sync runs when changes are detected; smaller sites are synced every 24 hours, while larger sites can take up to 7 days to sync
* When storage versioning limits are used, which automatically clean up storage and thus affect the storage used numbers, Syskit Point sends the cleanup request to the Microsoft API, but cannot define the start or completion time of the action itself; it can take up to 48 hours for all changes to be visible in Syskit Point

Depending on the size of your environment, it takes some time to refresh the data for all sites. 


## How often is total storage checked and updated/synced by Syskit Point?

This depends on the size of your environment, as the sync happens gradually. 

**Smaller sites are synced every 24 hours. With larger sites, the sync can take up to 7 days.**

If a site is not yet synced and you want to have the current information instantly, you can manually sync the site from the Site details screen.


## Site Storage Limits in Microsoft 365

[For more details about site storage limits in Microsoft 365, please read through the Site Storage Limits article.](../faq/site-storage-limits.md)
