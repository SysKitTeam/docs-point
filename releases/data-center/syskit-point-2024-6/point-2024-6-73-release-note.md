---
description: This article lists improvements and bug fixes in Syskit Point version 2024.6.73
---

# Syskit Point 2024.6.73

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.6.73

**Build number:** 51

**Release date:** December 16, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

* **Custom Views are now available!**
  * This feature **lets you filter, sort, add, or remove columns** in your report based on your specific needs **and retain those customizations for future use**.
  * Custom Views can be saved for Overview screens and other grid reports.
  * [For more details on how to Save Custom Views and a list of where custom views can be saved, take a look at this article.](../../../configuration/custom-views.md)


## Improvements & Bug Fixes

* **Extension Attributes** can now be added to relevant reports by checking the Settings > General > Extension Attributes box.
  * Selecting the checkbox adds extension attributes from Microsoft Entra ID to relevant reports. 
    * Extension Attributes columns are available on the **Users with Privileged Access report**, with additional reports to be added in upcoming Point versions.

* **Improved the functionality** when completing Inactive Workspace tasks and the following Ask Owners for Review tasks: Metadata, Privacy, Sensitivity.
  * Workspaces with a completed review within an active task are now grayed out and placed at the bottom of the task with the Completed state displayed where the button had previously been. 

* **Fixed an issue** that caused a Provisioning error when applying metadata even though the Provisioning template does not contain metadata. 

* **Fixed an issue** where the site navigation visibility state wasn't correctly copied when Provisioning a workspace. 

* **Fixed an issue** that caused the following error during storage sync: `AMR API reported a fatal error. SiteId: <SiteID>, ListIds: <ListID>`

* **Fixed an issue** that caused timeouts for the background job handling special groups - Everyone, Everyone except external users, etc. 

* **Fixed an issue** with the Update Privacy action that caused the action to fail when performed in bulk. 

* **Fixed an issue** where an owner without a mailbox couldn't be set as an owner in the Inactive workspace policy settings.

* **Fixed a bug** that caused Microsoft Teams and Microsoft Groups to retain an Alive state, even after it was deleted while completing a Lifecycle Management or Inactive Workspaces tasks. 

* **Various improvements and minor UX and UI fixes are available**.
