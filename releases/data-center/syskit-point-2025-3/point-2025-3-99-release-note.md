---
description: This article lists features, improvements, and bug fixes in Syskit Point version 2025.3.99
---

# Syskit Point 2025.3.99

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.3.99

**Build number:** 57

**Release date:** July 15, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).


## New Features
* **New Dashboard tile: SharePoint Agents.**
  * The new SharePoint Agents tile provides an overview of all custom-built SharePoint agents in your organization.
  * Clicking the **Explore button opens the Custom SharePoint Agents Inventory report**.
  * [For more information, navigate to the Dashboard article.](../../../microsoft365-inventory/explore-your-microsoft-365-dashboard.md#sharepoint-agents)  

## Security Updates
* **Removed the following HTTP headers to reduce attack surface and risk of targeted attacks**:
  * Server
  * X-Powered-By
  * X-AspNet-Version

## Improvements & Bug Fixes

* **Changed the default Cosmos backup policy mode from Periodic to Continuous (7 days) for new Enterprise deployments**. \
This brings the following advantages:
  * 7 days of Cosmos backup for free
  * Point in time restore
  * Self-service restore (without the need to contact Microsoft support)
  * **Please note that a one-time charge occurs when restoring the Cosmos DB.**
    * [Find more information about the cost calculation in the following article.](https://learn.microsoft.com/en-us/azure/cosmos-db/continuous-backup-restore-introduction#continuous-backup-pricing)
  * **This change doesn't affect existing Enterprise customers**. Still, it is recommended to switch to the continuous backup policy mode due to the advantages listed above.
    * [For more information about the migration from periodic to continuous backup mode, please visit this link.](https://learn.microsoft.com/en-us/azure/cosmos-db/migrate-continuous-backup)

* **Created By** and **Modified By** information for SharePoint Agents is now available in Syskit Point. You can find the information on the:
  * **Custom SharePoint Agents Invetory report** in added report columns.
  * **SharePoint Agent details screen** in the General Info tile.
  * **Note that syncing the workspace is required to collect the Created By and Modified By data for SharePoint Agents.**

* **Added support for multi-geo environments** when using the **Clean Up File Versions** action for storage.

* **Improved the performance** of the Teams & Groups overview screen when filtering by Sensitivity labels.

* **Fixed an issue** with Private and Shared channels sync caused by changes in channel URLs.
  * Unsuccessful sync caused failure of management actions on Private Channels in some cases.
  * Sync resulted in the following error: `SysKit.Point.SPO.Graph.GraphException: channelId is not valid.`

* **Fixed an issue** where Entra ID roles were not recognized as SharePoint site owners in the Maximum Number of Owners policy details report. 

* **Fixed an issue** where the PowerBI sync would result in the following error: 
```Power BI Sync Error: Batch with Id {BatchId} failed. Microsoft.Data.SqlClient.SqlException: Cannot insert duplicate key row in object 'PowerBIData.Datasources' with unique index 'UX_Datasources_Guid'. The duplicate key value is (<objectID>). The statement has been terminated.```

* **Various improvements, including UX and UI fixes, are available.**
  * Improved validation on custom view Save dialog.
  * Fixed the default Name column width on Access Review and other reports.
