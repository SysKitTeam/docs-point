---
description: >-
  This article lists improvements and bug fixes in Syskit Point version
  2022.2.2.
---

# Syskit Point 2022.2.2

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.2

**Build number:** 91

**Release date:** Mar 15, 2022

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../setup/set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../setup/set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Syskit Point Power BI App

**A new version of the Syskit Point Power BI app is available**!\
Find out what's new in the latest [release note](../../../power-bi-app/releases/power-bi-app-21-release-note.md).

## Improvements & Bug Fixes

**New options are added for Lifecycle Management Archive action!** In the Lifecycle Management options, you can now:

* **define prefix and suffix added to workspace names when archiving them through Syskit Point**
* **choose to remove access for both members and owners when archiving a workspace**\
  [Find all Lifecycle Management-related options explained in this article](../../../governance-and-automation/lifecycle-management/enable-lifecycle-management.md).

**Syskit Point e-mail customization improved.** You can now define which banner will be visible for all e-mails and define a custom banner for the Access Review and Lifecycle Management e-mail which can differ from the global settings. [Read the following article to learn how to customize e-mails in Syskit Point](../../../setup/configuration/customize/customize-emails.md).

**New data privacy option added!** The option lets you define if owners and admins can access audit reports in Syskit Point.\
[Learn more about access settings in this article](../../../setup/configuration/configure/enable-role-based-access.md).

**Diagnostic Logs export is now available in Syskit Point.** Syskit Point support team might ask you to provide the logs if you experience issues when running Syskit Point. For existing customers, there are several [steps to enable the new functionality](../../../troubleshooting/setup-diagnostic-logs-export.md).\
[Use this link to learn how to export diagnostic logs](../../../troubleshooting/export-diagnostic-logs.md) .

**Resource-intensive SQL queries are now additionally optimized** to run faster, saving your time, as well as Azure SQL resources.

**Autodiscover is improved!** In rare cases, AutoDiscover would run into an issue when syncing basic site information, leading to it never finishing the sync process. The issue is now resolved.

**Fixed an issue** where filters would not work on the Manage Policies screen for Policies Applied and Privacy columns. 

**Error handling when sending e-mails is now improved.** If a single e-mail request fails, the e-mail sender job can now successfully recover and continue to deliver Syskit Point e-mails.

**Various UX/UI improvements and minor fixes** are available. 
