---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.5.70.13
---

# November 12, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features


* **New policy available**: Inactive Workspaces
  * Inactive Workspaces are workspaces that have been inactive for the time period set by administrators. 
  * This policy helps you clean up inactive workspaces to save storage space and keep your environment running smoothly. 
  * Once an inactive workspace is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
  * Administrators can resolve the vulnerability, or workspace owners can resolve the task if task delegation is enabled.
  * [For more details about the Inactive Workspaces policy, read this article.](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)
  * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article.](../../governance-and-automation/security-compliance-checks/inactive-workspaces.md)
  * [Read this article to learn how collaborators can resolve the Inactive Workspaces task.](../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md)
  

## Improvements & Bug Fixes

* **Metadata information and actions** have been added to the general tile on the workspace details screen for Microsoft 365 Teams, Microsoft 355 Groups, and SharePoint Sites. 
  * You can now change metadata, remove metadata, or ask owners to review metadata directly from that workspace's details screen. 

* **New options were added** to the Minimum Number of Owners and Maximum Number of Owners Policies.
  * When selecting the user that gets unresolved tasks reassigned after owners do not resolve the policy vulnerability, you can also add that user as a workspace member.  
  * This helps you ensure resolvers can access the workspace, examine it, and decide how best to resolve the policy vulnerability task.
 
* **The e-mail reminders sent** for the Accept Risk and Undo Accept Risk will now be grouped together. 

* **Fixed an issue** where the Shared with Everyone policy violations were triggered for workspaces that are not shared with everyone. 

* **Fixed a bug** that caused the Access Review sharing step view to appear empty. 

* **Fixed a bug** when generating the Permission Matric report from the Sites Details screen that prevented list items from appearing in the report.

* **Various improvements, including UX and UI fixes, are available**.