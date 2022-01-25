---
description: This article lists improvements and bug fixes in SysKit Point version 2022.2.
--- 

# SysKit Point 2022.2

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.0

**Build number:** 37

**Release date:** Jan 20, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

## Features

* **Comments added to provisioning requests!** When creating a provisioning template, **users may enter a comment** to **explain why the requested workspace is needed**. **The comment is visible to approvers** when they receive the request and **helps them decide whether to approve or reject it**. 
SysKit Point admins can **enable comments when creating/editing a provisioning template** in SysKit Point settings.
[To learn more about provisioning template options, read this article](../governance-and-automation/provisioning/templates.md). 

## Improvements & Bug Fixes

* **SysKit Point is optimized for faster performance**! Multiple changes were made in the background to make SysKit Point work better than ever:
    * **SQL optimizations** resulting in **improved speed of Teams & Groups overview screen and site details screen**
    * **Audit logs read and write operation optimizations**, resulting in **improved performance of all audit log reports and faster analytics calculations**.
    **Please note!** Due to optimizations, SysKit Point will automatically migrate audit logs to a new CosmosDB storage container outside of working hours. As a result, some audit logs might temporarily be inaccessible in the app until the migration is finished.
    * **Group members sync optimized** only to run when membership changes are detected with the help of delta queries
    * **Analytics tile** visible on the site details screen and the **Automated Workflows screen** in settings were **optimized to load data faster**
* **SysKit Point initialization screen improved**. The screen automatically refreshes once the service apps start, and the sign-in screen shows.
* **Improved messages in Lifecycle management emails and tasks** if owners don’t resolve a task in time.
* **Fixed an issue** where SysKit Point would not correctly detect if access to Microsoft Teams protected API is granted.
* **Fixed an issue** where last the login data was not visible on the SysKit Point Collaborators report in Settings.
* **Fixed a bug** where Global Viewers could not manage their scheduled reports.
* **Fixed an issue** where the Microsoft Teams analytics dashboard would timeout when the date filter is set to Last 30 days. 
* **Various UX/UI improvements and minor fixes** are available. The most noticeable change is the **redesigned SysKit Point sign-in screen**. 

