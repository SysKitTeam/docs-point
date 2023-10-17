---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2023.4.0.315
---

# October 17, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **The storage usage reporting comes with a new Site Storage Metrics report**!
  * You can drill from the Storage Metrics report to a more detailed per-site report by clicking the workspace name. 
  * On the new report, see the complete site structure and content, accompanied with the **size**, **extension**, **number of file versions**, **author**, and **last activity** information for each file.

* **Tenant Storage Limit policy receives new options and changes**!
  * **Automation was added to the policy**, meaning that **an email will be sent to Syskit Point administrators when Syskit Point detects that the defined tenant-wide storage limit was reached**. Along with an email, **a task is created for Syskit Point administrators in Syskit Point**. 
  * **[Find more information on how to resolve the task here](../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)**.
  * The policy now has a **vulnerability history available** that enables you to see all previously detected and resolved tenant storage limit vulnerabilities. 

* **Home dashboard is now customizable**! 
  * All users can **reorder the dashboard tiles with the simple drag-n-drop action**. The layout is saved per user.

* **Provisioning templates** now enable admins to enforce applying a naming convention (with prefix and suffix) on the workspace's URL. 
  * If the Naming Rule option on a template is enabled, the naming rule will be applied to the workspace URL by default. 

## Improvements & Bug Fixes

* **Overdue Lifecycle Management tasks can now be resolved**!
  * Lifecycle Management tasks that are overdue can be found in the Active Tasks section and can be resolved.
  * For overdue tasks, Syskit Point administrators can now send reminders to owners who have not yet completed the received task.

* **Storage Metrics report was improved**.
  * **The Name column opens a Site Storage Metrics report when clicked**.
  * Color coding for tenant usage and site usage was improved. In case a defined limit is reached, the usage percentage bar graph related to the site will be colored red on the tenant, as well as the site level.
  * When clicked, the **View All link on the Storage tile on the Home dashboard now opens the Storage Metrics report**. 

* **Multiple policy improvements are available.**
  * **The automation option in policy settings for all policies was renamed to Task Delegation**. The name better describes the process of delegating tasks and sharing the responsibility to resolve vulnerabilities among multiple users.
  * The policies settings screen was redesigned to provide more information at a glance - **grid with policies now shows the policy severity and policy status**.
  * For policies with a task delegation option, an **improved validation was added to ensure that the Collaborator role is enabled** if required for task delegation.
  * **A new action - Ask Members - is available on the Security & Compliance report for Orphaned workspaces**. It helps you to ask members of an Orphaned workspace to resolve the policy violation and suggest new owners. 
  * **Tenant storage limit vulnerability now shows more details** - the percentage of used storage, used and total storage in your tenant, as well as Accept risk action, and a link that provides you with information on how to resolve the issue at hand in Microsoft 365 by adding more storage.

* **The Active Tasks screen was improved** to show only the vulnerabilities with an open task. Previously, detected vulnerabilities without a task were displayed as well. 

* **The term Resource was replaced with Workspace across Syskit Point and the documentation**. For example, the Orphaned Resources tile segment on the dashboard was renamed to Inactive Workspaces. The Inactive Content report was renamed to Inactive Workspaces, and so on.

* **User sync was improved to resolve policy violations in case the user's status change in Microsoft 365 makes the vulnerability obsolete**. For example, if an orphaned user is deleted in Microsoft 365, Syskit Point will automatically resolve detected vulnerabilities for the user during the user sync.

* **Fixed an issue** where unassigned licenses were not shown in the Licenses Overview report. 

* **Fixed a bug** where the Remove Access action on the User Access report did not log that a user cannot delete their own permissions from a SharePoint site collection. 

* **Fixed an issue** where deleting multiple users at once to resolve the detected security & compliance vulnerabilities on the Inactive Guest Users report failed to delete all users.

   



