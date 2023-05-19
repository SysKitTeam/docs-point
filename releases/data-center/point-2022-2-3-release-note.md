---
description: This article lists improvements and bug fixes in SysKit Point version 2022.2.3
---

# SysKit Point 2022.2.3

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.2.3

**Build number:** 109

**Release date:** Mar 31, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Improved User privacy options when accessed by Collaborators.**
  * While setting up Access, **Admin can now select ‘Give Collaborators access to subordinate user's activities’**, replacing the previously available option ‘Show audit reports to Collaborators’. This will not be automatically enabled.
    * **If enabled, the Collaborators will be able to view** the OneDrive tile, the Analytics & Usage tile, and Audit Log Reports when accessing User details or workspaces they manage.
  * For more details on Role-Based Access take a look at [this article](../../configuration/enable-role-based-access.md).
* **Fixed an issue** where archiving a Microsoft Team would result in the following error: `Failed to execute Templates backend request ArchiveRequest.`
* **Fixed a bug** where active Guest Users in Syskit Point were marked as inactive.
  * After setting up the Guest User Expiration Policy, the **assigned User receives an email once a Guest User is marked as inactive**.
  * The assigned User then **has a choice whether to Keep or Delete the inactive Guest User**.
  * Due to this bug, **active Guest Users were reported as inactive** to the assigned User.
* **Fixed a bug** with data column filtering on Overview screens for item selection of more than 10k items. When filtering to select more than 10k items for any column on Overview, it would show that there was no data available to display.
* **Fixed an issue** where HTTP requests used an expired access token instead of requiring a new one. Instead of generating a new access token, SysKit Point would retry action with a previously used token.
* **Fixed an issue** with triggering new hangfire jobs while existing ones are still in progress. If a hangfire job was active for longer than 30 minutes, it was triggered to start again.
