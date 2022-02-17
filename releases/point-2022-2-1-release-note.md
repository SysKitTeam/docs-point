---
description: This article lists improvements and bug fixes in SysKit Point version 2022.2.1.
--- 

# SysKit Point 2022.2.1

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.1

**Build number:** 15

**Release date:** Feb 17, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).


## Improvements & Bug Fixes

**Hangfire dashboard is now available for the SysKit Point backend app service.**  
Hangfire dashboard offers an overview of the status of all the background jobs SysKit Point is periodically running and shows detailed error logs in case some of them run into an issue.

**SysKit Point is now more stable and efficient than ever!** Multiple changes were made to make SysKit Point run smoother for everyone. As a result:

* SysKit Point app services use less memory 
* SysKit Point syncs your environment faster and more efficiently
* SysKit Point uses SQL resources better due to reorganized indexes

**Sites screen overview is now faster and more responsive.** Changes were made, so selection/deselection of workloads is now quicker on Site, User, and Group overview screens and in the report wizard filters.

**Sharing Links reports improved.** Sharing links reports are now faster due to changes made in SysKit Point sync. 

**Analytics tile on Site Details screens improved.** Multiple optimization changes were made, so loading times for site analytics are improved greatly in SysKit Point. 

**Users Manager can now be added as a column in reports.** By popular demand, we have added the option of User Manager info to the column chooser, and it is available on the User Overview screen under the column called 'Manager'. 

**Fixed an issue** that caused the Remove Access action not to work for some users. 

**Fixed an issue** where Remove Access action on Sharing Links in an Access Review task would fail with an error: 
 
`Associated SharePoint group c:0o.c|federateddirectoryclaimprovider|<GroupGUID>has unknown name format. Expecting 'SharingLink.LIST_ITEM_GUID.Flexible.SHARE_ID'. 
An exception occurred while removing users from specific sharing link.` 

**Fixed an issue** where search bars and filters would not work on the Apply Policies screen. 

**Fixed multiple issues** that could occur during the load of SharePoint Groups and OneDrives. 

**Fixed an issue** in Access Review tasks on Sharing step where duplicate rows appeared in the 'Permissions copied from parent' node when expanding nodes in the content structure. 
 
**Fixed a bug** where applying policies to multiple groups would not work. 

**Fixed an issue** where archiving a Microsoft Team would result in the following error: `Can not find the principal with id: <n>.` 

**Fixed an issue** where the result would be corrupted and have missing rows after the Group Access report was exported. 

**Various UX/UI improvements and minor fixes** are available.
