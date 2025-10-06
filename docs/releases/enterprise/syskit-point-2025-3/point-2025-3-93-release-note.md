---
description: This article lists improvements and bug fixes in Syskit Point version 2025.3.93
sidebar_position: 5
---

# Syskit Point 2025.3.93

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.3.93

**Build number:** 84

**Release date:** June 05, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

:::warning
**Please note!**

**This update continues the transition toward a more scalable platform**.  

**When upgrading from Point versions older than 2025.2.91**, database migration is performed, which must finish before you can use the new version.
The migration progress is displayed when you open the Syskit Point web app.

**If you upgraded to Point version 2025.2.91 before this upgrade**, you can expect the upgrade completion without any significant downtime.

**Regular updates help prevent delays caused by skipping versions**. 

:::

## Improvements & Bug Fixes

* **Improvements made to Power Platform reports.**
  * System apps are no longer shown in the Orphaned Apps view.
  * Status messages have been improved to provide more details when an App deletion fails. 

* **The My Tasks screen has been improved** to load faster in environments with a large number of workspaces.

* **Fixed an issue** where retention labels added to files in SharePoint were not syncing correctly.

* **Fixed a bug** that caused the Resolve Task screen to fail for Minimum Owners policy tasks.

* **Fixed an issue** where the number of Orphaned Apps on the Power Platform Dashboard tile did not match the number shown on the Orphaned Apps view of the Power Apps Inventory report.

* **Various improvements and minor UX and UI fixes are available**.
