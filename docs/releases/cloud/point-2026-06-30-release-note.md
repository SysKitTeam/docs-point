---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.148.1
---

# June 30, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Feature

* **You can now see exactly how a policy applies to your workspaces.**
  * The new policy impact preview shows which workspaces a policy currently applies to, the active reviewers for each workspace, and how the policy was assigned to each one.
  * Access the view by:
    * Drilling into the **Applied to** column under **Settings** > **Policies**, or 
    * Drilling into **Workspaces included** under **Govern** > **Workspace Review** > **Overview**.
  * The policy impact view is not available for tenant-wide policies.


## Improvements & Bug Fixes

* **The Inactive Guest Users Policy now supports sponsors as reviewers.**
  * A new **Sponsor of Guest User** option is available in the **Select who will validate guest users** section of the policy.
    * You can also define fallback users or groups for guest users without a defined sponsor.
  * Sponsor information is now visible on the **User Details** screen and as a default column in the **External Users Report**.

* **Fixed an issue** with Cleanup Opportunities where the dashboard tile showed a count for leftover anyone links or leftover external users, while the related drill-down view appeared empty.

* **Fixed a bug** where user sync could fail because of an unsupported SharePoint guest user identifier format.

* **Fixed a bug** where the Orphaned Workspaces report on the Security & Compliance screen continued to display deleted sites, causing them to show up as unresolved policy vulnerabilities.

* **Fixed an issue** where audit data collection could lag due to a gateway timeout, causing delays in audit log availability.

* **Various improvements, including UX and UI fixes, have been implemented.**