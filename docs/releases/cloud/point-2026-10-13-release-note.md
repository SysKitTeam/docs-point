---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.3.163.11
---

# October 13, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **A new filter is available** when generating the **Group Access** report that lets you include files and folders that inherit their permissions.
  * Previously, the report only listed items with unique permissions, so files that inherited access from their parent folder or library were not shown, even if they had a different sensitivity label.
  * You can now choose to show items with unique permissions only, or all items (with permission inheritance), the same as on the **Permissions Matrix** report.
  * This makes it easy to find, for example, every file with a specific sensitivity label that **Everyone except external users** can access, in a single report.
  * By default, the report still shows only items with unique permissions.

* **The default columns on the Sharing Links report have been updated** to put the most relevant information first.
  * The **Recommendation** and **Hero Link** columns are now shown right after the **Created By** column.
  * The **URL**, **Link**, **Link from Parent**, and **Last Used By** columns are now hidden by default and can be added back using the column chooser.
  * Scheduled reports that use the default view no longer include these columns in exported files.

* **The Hero Link column was removed from reports where it did not add value.**
  * The column is no longer shown on the **User Access** report, the Workspace Review **Sharing** steps (Anyone, organization-wide, expired, and unused links, and all shared content), the Workspace Review **Shadow Users** access view, and Permissions Review **User Access** tasks.
  * Syskit Point still recognizes hero links in the background and offers the correct removal action for them.

* **The Last Used column in Workspace Review now explains when a sharing link has no usage date**, instead of being left empty.
  * This makes it clearer why a link is marked as unused.

* **Fixed an issue** in the **Group Access** report where the **Sensitivity Label** filter was ignored, so the report also listed groups with other labels or with no label at all.

* **Fixed an issue** where some completed actions were missing from the **Actions Overview** report.
  * For example, deleting guest users who had no site permissions completed successfully, but the action was not listed in the report.
  * These actions are now listed, and their status is shown.

* **Fixed a bug** where escalation emails for overdue review tasks could fail to send because of a temporary Microsoft certificate error.
  * Previously, the emails were not sent until the service was restarted.

* **Various improvements, including UX and UI fixes, have been implemented.**
