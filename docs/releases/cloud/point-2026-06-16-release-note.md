---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.146
---

# June 16, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to Reports.**
  * **Improved the processing speed for large environments** when exporting filtered data from the Power Platform Connection Inventory report and other tree-based reports.
  * **The Unique Permissions Report** no longer times out or returns an error when the site contains a very large number of list items.
  * **The Site Analytics report now supports exports**, and the report data can be exported to Excel and PDF directly from the action panel.
  * **Fixed an issue** where the File and Page Activities report showed different results depending on how it was accessed.

* **Added the Last Synced column to the Sites Overview report.** 
  * The column is available in the Column Chooser and can be used to filter and sort workspaces by their last sync date.

* **Added the Last Reminder Sent On column to Workspace Review details reports.** 
  * The column is available in the Column Chooser on the Workspace Review Details report and shows when the last reminder was sent for each review.

* **The Inactive Guest Users Policy now supports custom domain exclusions.** 
  * In the **Ignored Domains section** of the policy, you can define a list of guest user e-mail domains to exclude from the policy, and the guest users belonging to those domains are not affected when the policy is triggered.

* **Improvements made to Workspace Review.**
  * **Fixed an issue** with the Workspace Review policy when recurrence is set to One Time, where a reused one-time policy did not auto-start after being cancelled and continued to show a Future status, despite there not being an active task.
  * **Fixed an issue** where attempting to complete a Workspace Review task for a deleted private channel resulted in an error with an unclear error message. 
    * The error message is now shown with a clear message explaining why the completion is not possible.

* **Fixed an issue** where the site description defined in a Provisioning template was not applied to the created SharePoint site.

* **Various improvements, including UX and UI fixes, have been implemented.**