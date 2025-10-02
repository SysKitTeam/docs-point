---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.3.99.2
---

# July 08, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Created By** and **Modified By** information for SharePoint Agents is now available in Syskit Point. You can find the information on the:
  * **Custom SharePoint Agents Invetory report** in added report columns.
  * **SharePoint Agent details screen** in the General Info tile.
  * **Note that syncing the workspace is required to collect the Created By and Modified By data for SharePoint Agents.**

* **Added support for multi-geo environments** when using the **Clean Up File Versions** action for storage.

* **Improved the performance** of the Teams & Groups overview screen when filtering by Sensitivity labels.

* **Fixed an issue** where the PowerBI sync would result in the following error: 
```Power BI Sync Error: Batch with Id {BatchId} failed. Microsoft.Data.SqlClient.SqlException: Cannot insert duplicate key row in object 'PowerBIData.Datasources' with unique index 'UX_Datasources_Guid'. The duplicate key value is (<objectID>). The statement has been terminated.```

* **Fixed an issue** with Private and Shared channels sync caused by changes in channel URLs.
  * Unsuccessful sync caused failure of management actions on Private Channels in some cases.
  * Sync resulted in the following error: `SysKit.Point.SPO.Graph.GraphException: channelId is not valid.`

* **Various improvements, including UX and UI fixes, are available.**
  * Improved validation on custom view Save dialog.
  * Fixed the default Name column width on Access Review and other reports.