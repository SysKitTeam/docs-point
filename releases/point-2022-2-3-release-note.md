---
description: This article lists improvements and bug fixes in SysKit Point version 2022.2.3
--- 

# SysKit Point 2022.2.3

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.3

**Build number:** 2022.2.3.8

**Release date:** Mar 31, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Improved User privacy options when viewed by Collaborators.** 
  * **The OneDrive tile and Analytics & Usage tile were removed** from User details for Collaborators. 
  * When setting up Access, **Admin can now select to give collaborators access to subordinate user's activities.** This option will not be automatically enabled. 

* **Fixed an issue** where archiving a Microsoft Team would result in the following error: **Failed to execute Templates backend request ArchiveRequest**.

* **Fixed a bug** where active guest users in Syskit Point were marked as inactive, prompting the admin to delete them.  