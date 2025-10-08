---
description: This article lists improvements and bug fixes in Syskit Point version 2021.11.
---

# Syskit Point 2021.11

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2021.11.29

**Build number:** 1

**Release date:** Nov 29, 2021

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Sensitivity Label Changes** alert is now available! The alert can be enabled tenant-wide or on specific Microsoft Teams, Microsoft 365 Groups, or sites. [See the full list of alerts available in Syskit Point here.](../../governance-and-automation/configure-alerts.md)
* **Cosmos DB timeout and retry handling is improved**. Syskit Point is now more resistant to timeouts when collecting Unified Audit Logs.
* **Users Overview screen is optimized**. As a result, generating the report, searching and filtering by licenses and assigned admin roles is faster.
* **Microsoft Teams chat activity detection is optimized**. When determining Teams activity, Syskit Point is now faster and uses fewer Azure resources.
* **Access Review reports are optimized**. As a result, screens in the Access Review wizard load faster.
* **Users Sync is optimized**. User activity details are now fetched in a separate sync job enabling faster user sync and data visibility on the Users overview screen.
* **Users With Privileged Access Report is optimized**. Before, large environments would run into issues when generating the report, which is now fixed.
* **Added support for various types of sharing links**.
* **Fixed an issue** where Access Review e-mails and tasks were created for the wrong users.
* **Fixed an issue** where report links on Groups & Teams overview would result in an empty report.
* **Fixed a bug** where provisioning a group with more than 20 members would fail with the following error: `Exceeded changed links limit(20)`
* **Various UX/UI improvements and minor fixes are available**.
