---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.2.152.6
---

# July 29, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **New total-count metrics** for **Sharing Links** and **Unique Permissions** are now available as columns in the **Sites Overview** report.
  * Enable them from the **Column Chooser**.

* **Improvements made to the Inactive Workspaces Policy.**
  * Workspaces with recent activity are now correctly displayed as active on the **Sites Overview** and **Groups Overview** reports, even if a previous policy vulnerability existed.

* **Improved the Applied To drill-down in Rules** by replacing the full rule evaluation with a dedicated report that queries applied policies directly.
  * This resolves timeout issues that could occur on tenants with a large number of workspaces.

* **Fixed an issue** with the **Stale Files** policy where **Collaborators** were unable to see the rule definition in the tooltip on the **Site Storage** screen.

* **Fixed a timeout issue** that could occur during stale files evaluation on large tenants.

* **Fixed a bug** on the **Permissions Matrix** report where the recommendation node was missing the broken permission inheritance icon.

* **Fixed an issue** where **Storage Sync** could fail due to an incorrect change token being sent for folder synchronization.

* **Various improvements, including UX and UI fixes, have been implemented.**
