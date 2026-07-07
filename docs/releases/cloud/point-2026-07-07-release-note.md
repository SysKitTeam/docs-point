---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.149.20
---

# July 7, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **New Stale Files Policies are available in Syskit Point.**
  * Using the Stale Files Policy, you can identify inactive files across your tenant and take action to reduce storage growth.
  * You can configure your Stale Files Policies in the Stale Files section of Syskit Point Settings.
  * The new Archive Stale Files action is available and can be found: 
    * Under the Manage section on the Storage Metrics report, when using the Stale Files view.
    * On the Site Storage Metrics report, the Storage Optimization tile provides an easy way to perform a bulk archive action on stale files. 
  * [For more details, take a look at the Stale Files Policy article.](../../governance-and-automation/stale-files/stale-files-admin.md)

## Improvements & Bug Fixes

* **Support for Microsoft Entra Agent Users is now available in Syskit Point.**
  * Agent Users are automatically identified during sync and can be found on the:
    * **Users Overview** report - the Agent User column is available in the column chooser, and Agent Users are displayed with a distinct icon.
    * **User Details** screen - an **Agent User** tag is shown next to the user's name.

* **Improvements made to Cleanup Opportunities.**
  * Two new views are available on reports: **Sites with Inactive Unique Permissions** and **Sites with Redundant Unique Permissions**.
  * The **Resolve Manually** option on the **Inactive Unique Permissions** and **Redundant Unique Permissions** tiles now navigates to the corresponding view on the Permissions Matrix report.

* **Improvements made to Sync Status visibility for large SharePoint lists.**
  * When Syskit Point excludes very large lists, you now see a clear notification on the **Site details**, **Team & Group details**, and **Sync Status** screens, along with a **View Details** action that shows exactly what was excluded.

* **Improvements made to the Support Hub audit statistics.**
  * Audit statistics now accurately reflect the actual state of audit collection, so the numbers match what is still pending processing.
  * A new **lagging details** view shows which content is delayed and for how long, so you can quickly identify what needs attention.
  * The audit filter has been simplified to a single **Last 2 days** option, as the default threshold for audit is now 2 days. 

* The **Collaborator support link** settings have been moved from **Settings > Appearance** to **Settings > Manage access**, under the **Collaborators** section.

* **Fixed an issue** where a Site Admin performing an action on a workspace they are not the owner of received a generic error when the action failed due to insufficient access.
  * A more descriptive message is now shown, explaining why the action could not be completed.

* **Various improvements, including UX and UI fixes, have been implemented.**