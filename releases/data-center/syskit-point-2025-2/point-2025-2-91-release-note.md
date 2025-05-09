---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.91
---

# Syskit Point 2025.2.91

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.91

**Build number:** 52

**Release date:** May 13, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2Fv2025-2-90%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).


{% hint style="warning" %}
**Please note!**

The upgrade to this Syskit Point version may take longer to complete, so we kindly ask for your patience while upgrading. Larger environments may take up to an hour to finish upgrading. 

{% endhint %}

## New Features

* **New Power Platform actions are available.**
  * You can now complete the following actions on Power Platform reports:
    * **Delete Flow**
      * This action helps you remove unused flows and can be completed on the Power Automate Inventory report
      * On the report, you can select one or multiple Flows to delete them, however please ensure you have canceled any pending runs to prevent data loss before deleting any Flows
    * **Delete App**
      * This action helps you remove unused apps and can be completed on the Power Apps Inventory report

  * [For more details, please take a look at the Power Platform actions article.](../../../access-management/power-platform-actions.md)

## Improvements & Bug Fixes

* **Fixed an issue** where the Remove All Sharing Links action removed all links instead of only the selected ones. 
  * This option has been changed, and the updated action now removes only the selected links. 

* **Various improvements and minor UX and UI fixes are available**.
