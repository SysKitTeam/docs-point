---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.145
---

# Syskit Point 2026.2.145

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.145

**Build number:** 1

**Release date:** June 17, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.145](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-145-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## New Feature

* **New tile added to the Dashboard: Cleanup Opportunities.**
  * The new Cleanup Opportunities tile on the Syskit Point dashboard highlights actionable cleanup opportunities in your environment.
  * The tile shows the following metrics: redundant unique permissions, leftover anyone links, leftover external users, and inactive unique permissions.
  * From the tile, you can click the Fix Now button to manually resolve the issues via the relevant report, or send feedback requesting automation.
  * [For more details, take a look at the Cleanup Opportunities article.](../../../microsoft365-inventory/cleanup-opportunities.md)


## Improvements & Bug Fixes

* **Various improvements, including UX and UI fixes, have been implemented.**

### Security & Compliance

* **Improvements made to Risky Workspaces.**
  * The **Accept Risk** action is now available directly in the report for quicker access.
  * The **Not a Risk? Tell Us Why** option has been moved to the dropdown, accessible by clicking the ellipsis.
  * **Fixed an issue** where drilling into the **Items Shared with Everyone** view from the Risky Workspaces screen did not show which workspace was being viewed.

* **Fixed a bug** where deleted sites unexpectedly triggered policy vulnerabilities displayed in the Security & Compliance dashboard.
  * Additionally, tasks were created and e-mail notifications were sent if the applied policies had the Task Delegation option enabled.

* **Fixed a bug** where policies were not correctly handling deleted sites, causing incorrect policy vulnerabilities to persist.

### Governance

* **Improvements made to** the Workspace Review feature.
  * Workspace Review reports now include a new **Restrictions** column, showing whether a workspace has Restricted Site Access applied.
  * When a reviewer clicks **Review Now** on a workspace with Restricted Site Access, Syskit Point now checks whether they have the required permissions to access it.
    * If access is not permitted, a dialog explains why the review cannot be completed.
    * If access is permitted, the review proceeds as usual.

* **Improvements made to** the Lifecycle actions.
  * **Error messages for Keep and Delete actions have been updated** to correctly describe the required conditions, such as being a site admin or having an active review task.
  * **Fixed an issue** where the Keep, Archive, and Delete lifecycle action buttons were displayed in the side panel for users who did not have the required permissions to use them.

* **Fixed a bug** where Sensitivity Labels and Sharing Settings were not applied to workspaces created using a template with the Copy structure and content option enabled.

* **Fixed a bug** where archived workspaces were appearing in the Inactive Workspaces report.

* **Fixed a bug** where the Policy Add Members step did not complete all member additions, which could result in some members not being added as expected.

* **Fixed a bug** where, on rare occasions, a minimum owners policy vulnerability on a SharePoint site incorrectly triggered the escalation to Add Members to all groups and teams in the tenant.

* **Fixed an issue** where custom SharePoint groups were not displayed correctly inside a Workspace Review task.

### Access Management

* **Fixed an issue** where site owners with the Collaborator role received an Access Denied error when opening the Items Shared with Everyone report from a site's details page.

### Reporting

* **A new Exported Reports page is now available on the Reports screen.**
  * When a report takes too long to generate or contains too much data, Syskit Point now offers to generate the export in the background and send it to you by e-mail when it's ready.
    * These reports can be downloaded from the Exported Reports page.
  * The Exported Reports button, located in the right corner of the Reports screen, provides access to an overview of reports that were generated and delivered to your email.
  * Clicking a link in a report delivery email takes you directly to the page and automatically starts the download.
  * If a report has expired, a message informs you that it can no longer be downloaded.
  * [For more details, take a look at the Exported Reports article.](../../../reporting/exported-reports.md)

* **Reports can now be exported to CSV format.**
  * The CSV format is available both from the report view and when configuring scheduled report deliveries.

* **Improvements made to Reports.**
  * **Fixed an issue** where scheduled reports in CSV format would display an incorrect icon when sent.
  * **Fixed an issue** where the **Recommendation** column values would not appear in the Permissions Matrix exports.

* **Improvements made to** the Sync Status report.
  * A new **Site Type** column is now available in the Column Chooser, making it easier to filter and sort sites by type when managing manual sync.

* **Fixed an issue** where the Workspace Review Sharing report did not display links for items shared with specific people.

### Power Platform

* **Fixed a bug** where Power Platform flow synchronization would fail with an access denied error for environments with restricted access settings applied.
