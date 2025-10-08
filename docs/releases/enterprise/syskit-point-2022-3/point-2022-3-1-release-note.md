---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  version 2022.3.1.
---

# Syskit Point 2022.3.1

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.3.1

**Build number:** 4

**Release date:** June 20, 2022

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Improved the loading speed** for Access Review task steps and **optimized the complete functionality** of Access Review.
* **Improved the loading speed** of the Sites tile on the User Details screen.
* **Optimized the loading speed** for the Manage Policies screen when selecting and applying policies to a sizeable number of sites.
* **Improved the handling** of deleted sites when resolving Lifecycle Management tasks.
  * For sites deleted in SharePoint online, completing the Lifecycle Management task is now possible even if the site's state is not synced in Syskit Point.
* **Added support** for Deleted file activity.
  * Syskit Point now collects and shows the Deleted file activity in audit reports.
* **Fixed a bug** where duplicate users were created in Syskit Point.
