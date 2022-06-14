---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.3.
--- 

# SysKit Point 2022.3

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.3.1

**Build number:** 1

**Release date:** June 14, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).


## Improvements & Bug Fixes

* **Improved the loading speed** for Access Review sites, showing top twenty reviewers per column and **optimized functionality of Access Review** when completing tasks. 

* **Improved the loading speed** of the Users details tile for User Access and Group Access reports and **removed Single Owner/Single Admin information** from the reports. 

* **Optimized the loading speed and quality** for the Manage Policies screen after accessing Automated Workflows when loading a sizeable number of sites.

* **Fixed a bug** where sites didn’t sync properly after exceeding 5k sites. 

* **Fixed a bug** when resolving Lifecycle Management tasks.
  * If a site was already deleted before completing the task, resolving the task was no longer possible.

* **Fixed a bug** where deleted files in SysKit Point were not being logged as an event. 

* **Fixed a bug** where duplicate users were created in SysKit Point. 