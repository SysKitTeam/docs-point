---
description: This article outlines the most frequently asked questions about storage management in Syskit Point.
---

# Storage Management in Syskit Point FAQ

## Where can I find information about used storage in Microsoft 365?

SharePoint Online **used storage** is visible when you open the Active Sites page in the **SharePoint Admin center**.
Available storage and the total storage numbers are displayed here (in TB).
When hovering over the info icon next to these numbers, you get the information that the `Storage used includes sites and Microsoft 365 containers published by Microsoft.`

Additional data can be found in [Microsoft 365 admin center > Reports > Usage > Storage Tab](https://admin.microsoft.com/#/reportsUsage/SharePointStorage).
Here, the percentage of total storage used is displayed. The info icon next to this number gives more details about the storage usage data refresh: `Usage data can take up to 24 hours to refresh. Storage limit increases can take up to 4 days to refresh.`
Below, storage usage and total storage numbers are displayed (in TB).

## What is the difference between Microsoft 365 and Syskit Point when calculating the used SharePoint Online storage space?

Syskit Point calculates used storage as a sum of the storage used by each site collection, which includes sites in the following states:
* Alive
* In-place Archived (Read-Only)
* M365 Archived
* Soft deleted

The storage used data you see in M365 vs Syskit Point can differ due to the following reasons:
* Usage data in M365 can take up to 24 hours to refresh
* Syskit Point sync runs when changes are detected; smaller sites are synced every 24 hours, while larger sites can take up to 7 days to sync
* When storage versioning limits are used, which automatically clean up storage and thus affect the storage used numbers, Syskit Point only sends the request to the Microsoft API, but Syskit Point cannot define the start and completion time of the cleanup action; it can take up to 48 hours for all changes to be visible in Syskit Point

Depending on the size of your environment, it takes some time to refresh the data for all sites. 


## How often is total storage checked and updated/synced by Syskit Point?

This depends on the size of your environment, as the sync happens gradually. 

**Smaller sites are synced every 24 hours. With larger sites, the sync can take up to 7 days.**

If a site is not yet synced and you want to have the current information instantly, you can manually sync the site from the Site details screen.


## Site Storage Limits in Microsoft 365

[For more details about site storage limits in Microsoft 365, please read through the Site Storage Limits article.](../faq/site-storage-limits.md)
