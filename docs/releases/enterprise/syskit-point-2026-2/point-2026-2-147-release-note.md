---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.147
---

# Syskit Point 2026.2.147

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.147

**Build number:** 1

**Release date:** June 30, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.147](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-147-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

### Reporting

* **Improvements made to Exported Reports.**
  * **Exports superseded by a newer version are now clearly marked** in the Exported Reports list, making it easy to identify when a more recent version of an export is available for download.
  * **The Performed By and Report Format columns are now visible** in the Exported Reports list, providing additional context for each export record.
  * **Delivery method is now available** as an optional column in the Column Chooser for the Exported Reports list.

* **A new filter is available** when generating the Permissions Matrix report that lets you limit results to groups with up to a specified number of members, making the report easier to work with in large environments.

* **Improvements made to Reports.**
  * **Improved the processing speed for large environments** when exporting filtered data from the Power Platform Connection Inventory report and other tree-based reports.
  * **The Unique Permissions Report** no longer times out or returns an error when the site contains a very large number of list items.
  * **The Site Analytics report now supports exports**, and the report data can be exported to Excel and PDF directly from the action panel.
  * **Fixed an issue** where the File and Page Activities report showed different results depending on how it was accessed.
  * **Fixed an issue** where the number of admins and owners was missing from the site overview PDF export.

* **Added the Last Synced column to the Sites Overview report.** 
  * The column is available in the Column Chooser and can be used to filter and sort workspaces by their last sync date.

* **Added the Last Reminder Sent On column to Workspace Review details reports.** 
  * The column is available in the Column Chooser on the Workspace Review Details report and shows when the last reminder was sent for each review.

### Governance

* **The Inactive Guest Users Policy now supports custom domain exclusions.** 
  * In the **Ignored Domains section** of the policy, you can define a list of guest user e-mail domains to exclude from the policy, and the guest users belonging to those domains are not affected when the policy is triggered.
  * [Find more information about the policy in the Inactive Guest Users policy article.](../../../governance-and-automation/automated-workflows/inactive-guest-users-admin.md)

* **Improvements made to Workspace Review.**
  * **Fixed an issue** with the Workspace Review policy when recurrence is set to One Time, where a reused one-time policy did not auto-start after being cancelled and continued to show a Future status, despite there not being an active task.
  * **Fixed an issue** where attempting to complete a Workspace Review task for a deleted private channel resulted in an error with an unclear error message. 
    * The error message is now shown with a clear message explaining why the completion is not possible.

* **Fixed an issue** where the site description defined in a Provisioning template was not applied to the created SharePoint site.

* **Various improvements, including UX and UI fixes, have been implemented.**
