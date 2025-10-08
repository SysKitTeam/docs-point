---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.6.70.47
---

# November 19, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features


* **New policy available**: Inactive Workspaces
  * Inactive Workspaces are workspaces that have been inactive for the time period set by administrators. 
  * This policy helps you clean up inactive workspaces to save storage space and keep your environment running smoothly. 
    * [For more details about the Inactive Workspaces policy, read this article.](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)
  * Once an inactive workspace is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
    * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article.](../../governance-and-automation/security-compliance-checks/inactive-workspaces.md)
  * Administrators can resolve the vulnerability, or workspace owners can resolve the task if task delegation is enabled.
    * [Read this article to learn how collaborators can resolve the Inactive Workspaces task.](../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md)
  * [The Inactive Workspaces report](../../reporting/analytics-reports.md#inactive-workspaces-report) has been improved to reflect the new Inactive Workspaces policy. 
  * [For details on what will happen to the Lifecycle Management feature, please read this article.](../../governance-and-automation/lifecycle-management/deprecating-lifecyle-management.md)
  
* **New Review types available:**
  * **Sensitivity Review**
    * Administrators can now enable workspace owners to review sensitivity labels for their workspaces. This helps ensure that all workspaces and documents are labeled appropriately. 
    * [For more information on the Ask Owners to Manage Sensitivity action, take a look at this article.](../../governance-and-automation/sensitivity-review/request-sensitivity-review.md)
  * **Privacy Review**
    * Administrators can now enable workspace owners to review the privacy settings for their workspaces. This gives workspace owners the ability to ensure only the necessary people have access and that their workspace has the correct privacy level. 
    * [Take a look at the Ask Owners to Manage Privacy article for more details.](../../governance-and-automation/privacy-review/request-privacy-review.md)    

## Improvements & Bug Fixes

* **Metadata information and actions** have been added to the general tile on the workspace details screen for Microsoft 365 Teams, Microsoft 355 Groups, and SharePoint Sites. 
  * You can now change metadata, remove metadata, or ask owners to review metadata directly from that workspace's details screen. 

* **New options were added** to the Minimum Number of Owners and Maximum Number of Owners Policies.
  * When selecting the user that gets unresolved tasks reassigned after owners do not resolve the policy vulnerability, you can also add that user as a workspace member.  
  * This helps you ensure resolvers can access the workspace, examine it, and decide how best to resolve the policy vulnerability task.
 
* **E-mails sent to owners/task resolvers** when accepting risk for policy vulnerability tasks, now use a grouped e-mail template. If the action was performed in bulk, resolvers will get one e-mail with multiple workspaces listed.
  * E-mails sent when undoing the accept risk command and those sent when clicking the Send Reminder action on Security & Compliance reports are grouped as well, thus reducing the number of e-mails sent to task resolvers while providing the same essential information.

* **Fixed an issue** when provisioning a new site by using the "Copy from existing site/team" option that caused provisioning to fail in the following situations:
  * When copying content types with fields that do not exist in the destination site. 
  * When copying theme options when certain colors were used.

* **Fixed an issue** where the Shared with Everyone policy violations were triggered for workspaces that are not shared with everyone. 

* **Fixed a bug** that caused the Access Review sharing step view to appear empty. 

* **Fixed a bug** when generating the Permission Matrix report from the Sites Details screen that prevented list items from appearing in the report.

* **Various improvements, including UX and UI fixes, are available**.