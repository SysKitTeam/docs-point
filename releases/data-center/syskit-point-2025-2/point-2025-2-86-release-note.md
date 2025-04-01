---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.86
---

# Syskit Point 2025.2.86

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.86

**Build number:** 67

**Release date:** April 01, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2Fv2025-2-86%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).


## New Features

* **New Dashboard tile** is available: **Workspace Sensitivity**.
  * The new Workspace Sensitivity Dashboard tile provides an overview of workspaces without Sensitivity labels applied. From this tile, you can: 
    * Open the Unlabeled Sites view 
    * From there, select multiple workspaces and **Ask Owners** to review them or directly **apply Sensitivity Labels to workspaces** for an immediate resolution
  * [Learn more about the Workspace Sensitivity tile in the following article.](../../../microsoft365-inventory/explore-your-microsoft-365-dashboard.md#workspace-sensitivity)

* **Custom views are available on tree reports.**
  * Now, you can customize and save views on tree reports. (e.g., Permissions Matrix, User access, etc.)
  * Excel export of reports with applied views reflects the filtering from the view selected in Syskit Point.  
  * [Learn more about Custom Views in the configuration article.](../../../configuration/custom-views.md)


## Improvements & Bug Fixes

* **Improvements made to the Sharing Links report.**
  * **Added new filters** for Sharing Links reports to make it easier to find links shared with external users; you can choose between the following options when generating the report: **all, only internal and only external users and groups**. 
  * **New columns added** to the Sharing Links report:
    * **Created by** - enabled for SharePoint sites, shows who created the site. 
    * **Last Used** - shows the last time the content was accessed via a sharing link.
    * **Last Used By** - shows the last person who accessed the content via sharing link.

* **New columns added to the Sites Overview screen**: **Number of Owners** and **Number of Admins**.
  * **Number of Owners** 
    * For Teams and M365 groups, this is the number of defined M365 group owners.
    * For SharePoint sites, the column shows the number of users in the **Owners SharePoint group** associated with the SharePoint site.
  * **Number of Admins** column shows the total number of users within the Site admins group. The Primary owner is counted here as well.
  * You can find and enable these columns from the Column Chooser.

* **Improvements made to syncing in Point.**
  * **Fixed a bug** with user roles that caused a failure when performing user sync. 
  * **Improved the Storage sync** to increase performance in large environments.
  * **Improved the site sync** for larger SharePoint sites to prevent sync failures due to timeouts.

* **Fixed an issue** with the in-place archive (read-only) action for SharePoint sites, which prevented members and owners from accessing the archived site. 

* **Fixed an issue** that caused archived workspaces to be shown as active. 

* **Fixed an issue** with the Storage Cleanup action when files are on hold or under a retention policy. 
  * File removal now works correctly within any applied policy constraints.

* **Fixed a bug** that caused deleted users to appear in the Inactive Licenses report.

* **Fixed an issue** with the Teams App where the Resolved By column did not sort the information correctly. 

* **Fixed issues** with Sensitivity Labels in Provisioning.
  * Sensitivity Labels that were created for files no longer appear as an option when provisioning a site.
  * Sensitivity Labels with child labels now correctly appear when provisioning. 

* **Fixed an issue** that caused the following error when provisioning a Yammer site: `System.NullReferenceException: Object reference not set to an instance of an object.`

* **Fixed an issue** that caused the following errors: 
  * When syncing Power Platform apps: `Error reading string. Unexpected token: StartObject.`
  * When storing Power Platform App Flow usage: `Violation of PRIMARY KEY constraint 'PK_PowerAppFlowUsages'. Cannot insert duplicate key in object 'PowerPlatform.PowerAppFlowUsages'.`

* **Various improvements and minor UX and UI fixes are available**.
