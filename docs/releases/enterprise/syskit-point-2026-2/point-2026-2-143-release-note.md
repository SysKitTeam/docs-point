---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.143
---

# Syskit Point 2026.2.143

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.143

**Build number:** 2

**Release date:** June 3, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.143.2](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-143-2%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

* **Administrators can now configure** a custom support link that collaborators can access in the Help & Support menu in Syskit Point.
  * A new **Customize Support Link for Collaborators** option is available in the **Settings** > **Appearance** section.
    * This option allows you to direct collaborators to your organization's own support resources instead of the default Syskit Point support page.

* **Improvements made to** Excel report exports.
  * Large reports are now automatically split across multiple sheets when the row limit of a single sheet is exceeded, ensuring all data is included in the exported file.

* **Improvements made to Power Platform sync.**
  * When syncing Flows that have **pending runs**, such as approvals waiting for a response, Syskit Point now **only checks those specific runs on subsequent syncs**, rather than re-scanning all previous runs.
    * This makes sync faster and more accurate.
  * **Fixed an issue** where syncing failed with errors when a Power Platform environment had been removed in Microsoft 365 but was still tracked in Syskit Point.

* **Improvements made to** the Power Platform Connections report.
  * Additional filters are now available: **Connection Type**, **Status**, **Created By**, and **Creator sign-in status**.
  * When opening connections directly from the dashboard, a message now guides you to use the report with filters for more actionable results.

* **Fixed an issue** with the count limit option when setting Storage Versioning Limits.
  * The Count Limit checkbox is now disabled and cannot be turned off, due to Microsoft's required retention limits.
  * [For more details, please take a look at this article.](../../../storage-management/versioning-limits.md)

* **The license expiration notification banner** is now displayed again to administrators when their subscription is approaching its renewal date.
  * The banner includes a link to the **Settings** > **Point License** page for reviewing subscription details.
  * Clicking the link dismisses the banner until the next login.

* **Fixed an issue** where the SharePoint sync on larger tenants could get stuck, repeatedly stopping and restarting instead of completing.
  * Long-running site syncs now complete without being interrupted.

* **Fixed a bug** where adding guest users to private Teams channels failed with an error, even when the action was permitted.

* **Fixed an issue** where completing the Workspace Review membership step for Unified groups displayed an incorrect failure notification, even when the action completed successfully.

* **Fixed an issue** where the Accept Risk option was incorrectly shown during the Workspace Review membership step for Unified groups, and completing it displayed an incorrect failure message.

* **Fixed an issue** where audit data collection could become unresponsive and stop processing, causing delays in audit log availability.

* **Various improvements, including UX and UI fixes, have been implemented.**
