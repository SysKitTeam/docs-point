---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.144.1
---

# June 2, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **New tile adde to the Dashboard: Cleanup Opportunities**
 * The new Cleanup Opportunities tile on the Syskit Point dashboard highlights actionable cleanup opportunities in your environment.
  * The tile shows metrics such as stale unique permissions from expired links, access that violates your current sharing policies, and files with permissions that haven't been used in a long time.
  * From the tile, you can fix issues directly, resolve them manually via the relevant report, or send feedback.
  * [For more details, take a look at the Cleanup Opportunities article.](../../microsoft365-inventory/cleanup-opportunities.md).

## Improvements & Bug Fixes

* **A new Exported Reports** page is now available on the Reports screen.
  * The Exported Reports button, located in the right corner of the Reports screen, provides access to an overview of reports that were generated and delivered to your email.
  * Clicking a link in a report delivery email takes you directly to the page and automatically starts the download.
  * If a report has expired, a message informs you that it can no longer be downloaded.
  * [For more details, take a look at the Exported Reports article.](../../reporting/exported-reports.md).


* **Reports can now be exported to CSV format.** 
  * The CSV format is availble both from the report view and when configuring scheduled report deliveries.

* **Improvements made to** the Workspace Review feature.
  * Workspace Review reports now include a new **Restrictions** column, showing whether a workspace has Restricted Site Access applied.
  * When a reviewer clicks **Review Now** on a workspace with Restricted Site Access, Syskit Point now checks whether they have the required permissions to access it.
    * If access is not permitted, a dialog explains why the review cannot be completed.
    * If access is permitted, the review proceeds as usual.

* **Improvements made to** the Sync Status report.
  * A new **Site Type** column is now available in the Column Chooser, making it easier to filter and sort sites by type when managing manual sync.

* **Improvements made to** the Lifecycle actions. 
  * **Error messages for Keep and Delete actions have been updated** to correctly describe the required conditions, such as being a site admin or having an active review task.
  **Fixed an issue** where the Keep, Archive, and Delete lifecycle action buttons were displayed in the side panel for users who did not have the required permissions to use them.


* **Fixed a bug** where deleted sites still triggered policy violations and e-mail notifications were sent when a task was delegated.

* **Fixed a bug** where Sensitivity Labels and Sharing Settings were not applied to workspaces created using a template with Structure and Content.

* **Fixed a bug** where policies were not correctly handling deleted sites, causing incorrect policy violations to persist.

* **Fixed a bug** where archived workspaces were appearing in the Inactive Workspaces report.

* **Fixed an issue** where site owners with the Collaborator role received an Access Denied error when opening the Items Shared with Everyone report from a site's details page.

* **Fixed an issue** where the Workspace Review Sharing report did not display links for items shared with specific people.

* **Fixed a bug** where the Policy Add Members step did not complete all member additions, which could result in some members not being added as expected.

* **Fixed a bug** where a minimum owners policy violation on a SharePoint site incorrectly triggered the escalation to Add Members to All groups and teams in the tenant.

* **Various improvements, including UX and UI fixes, have been implemented.**