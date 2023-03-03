---
description: This article lists improvements and bug fixes in SysKit Point version 2022.2.2.
--- 

# SysKit Point 2022.2.2

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.2

**Build number:** 91

**Release date:** Mar 15, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../set-up-point-data-center/deployment/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## SysKit Point Power BI App
**A new version of the SysKit Point Power BI app is available**!  <br/>
Find out what's new in the latest [release note](../power-bi-app/releases/power-bi-app-21-release-note.md).


## Improvements & Bug Fixes

**New options are added for Lifecycle Management Archive action!** 
In the Lifecycle Management options, you can now:
* **define prefix and suffix added to workspace names when archiving them through SysKit Point**   
* **choose to remove access for both members and owners when archiving a workspace**   
[Find all Lifecycle Management-related options explained in this article](../governance-and-automation/lifecycle-management/enable-lifecycle-management.md).

**SysKit Point e-mail customization improved.** You can now define which banner will be visible for all e-mails and define a custom banner for the Access Review and Lifecycle Management e-mail which can differ from the global settings. 
[Read the following article to learn how to customize e-mails in SysKit Point](../configuration/customize-emails.md).

**New data privacy option added!** The option lets you define if owners and admins can access audit reports in SysKit Point.  
[Learn more about access settings in this article](../configuration/enable-role-based-access.md). 

**Diagnostic Logs export is now available in SysKit Point.** SysKit Point support team might ask you to provide the logs if you experience issues when running SysKit Point. 
For existing customers, there are several [steps to enable the new functionality](../troubleshooting/setup-diagnostic-logs-export.md).  
[Use this link to learn how to export diagnostic logs](../troubleshooting/export-diagnostic-logs.md) . 

**Resource-intensive SQL queries are now additionally optimized** to run faster, saving your time, as well as Azure SQL resources. 

**Autodiscover is improved!** In rare cases, AutoDiscover would run into an issue when syncing basic site information, leading to it never finishing the sync process. The issue is now resolved.

**Fixed an issue** where filters would not work on the Manage Policies screen for Policies Applied and Privacy columns.  

**Error handling when sending e-mails is now improved.** If a single e-mail request fails, the e-mail sender job can now successfully recover and continue to deliver SysKit Point e-mails. 

**Various UX/UI improvements and minor fixes** are available.  