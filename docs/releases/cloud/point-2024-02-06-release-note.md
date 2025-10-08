---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.42.45
---

# February 06, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Features

* **New Policies added**: **Shadow Users** and **Workspaces with Too Many Members**. 
  * **Shadow Users policy**
    * **Shadow users** are users who have access to specific documents/folders or other content but are not members of the workspace. Shadow users can potentially represent a security risk, as it is best practice to share access within workspace members only, especially when a workspace is private and contains sensitive content.
    * **Default Shadow Users policy** is created after the upgrade to the latest Point Cloud version.
    * **The Default Shadow Users** policy is not applied to any workspaces as it is not included in the default rule. To apply the policy to your workspaces, we recommend using [Syskit Point rules](../../governance-and-automation/automated-workflows/policy-automation.md).
    * **The default Shadow Users policy**, when applied to workspaces, **will show policy vulnerabilities on the Security & Compliance dashboard**, but **no tasks are created**, and **no emails sent**.
    * [For more details about the Shadow Users policy settings, read this article.](../../governance-and-automation/automated-workflows/shadow-users-admin.md)
    * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article](../../governance-and-automation/security-compliance-checks/workspaces-with-shadow-users.md)
  * **Workspaces with Too Many Members policy**
    * **Workspaces with Too Many Members** are workspaces that have a number of members that are over a defined threshold. 
    * **Too many members in a workspace** may lead to more difficult access control, which can result in a security risk. 
    * **Default Maximum Number of Members policy** is created after the upgrade to the latest Point Cloud version and sets a limit of 50 members on a workspace.
    * **The Default Maximum Number of Members policy** is included in the default rule, meaning that it is applied to your workspaces.
      * If policy vulnerabilities are detected, **they are shown on the Security & Compliance dashboard**, but **no tasks are created**, and **no emails sent**
    * [For more details on how to modify the Maximum Number of Members, read the following article.](../../governance-and-automation/automated-workflows/workspaces-with-too-many-members-admin.md)
    * [To learn how to resolve the policy vulnerability, navigate to the Security & Compliance report article](../../governance-and-automation/security-compliance-checks/workspaces-with-too-many-members.md)


## Improvements & Bug Fixes

* **Ad-hoc external users can now be removed** with the Delete Users action.
  * Ad-hoc users are external users who are not a part of Microsoft Entra ID but have access to specific SharePoint content.
  * Since they can't be found in Microsoft Entra ID, deleting such users in the same way as your tenant users or guest users is not possible.
  * The Delete Users action now removes ad-hoc external user access from SharePoint content. 
  * After running the Delete Users action, the ad-hoc external user is no longer visible in Syskit Point access reports. 

* **The Remove Access action is now enabled** for users on the Sharing step - Users view - in the Access Review task.  
  * Multiselection of users is also enabled.

Multiple improvements are available for the Storage Management for SharePoint Online feature:
  * The **Storage tag was added to reports** related to Storage Management for easier filtering in the Report Center.
  * **Site Storage Metrics report** now has the Created On column added that can be selected from the column chooser. 
  * **Columns sort on reports** is now correctly displayed on the tenant-wide Storage Metrics report.
  * **Fixed an issue** on sites where information about file versions and sizes was not regularly refreshing.

* **Global Viewers can now manage** Scheduled Reports they created. The following actions are available: Preview, Send Now, Edit, Pause, Delete. As before, Global Viewers cannot manage Scheduled Reports created by other users.

* **Improved the sync process for Private and Shared channels**, thus eliminating specific cases where manual intervention was needed to successfully sync Private and Shared channels in Syskit Point.

* **Newly created licensed users** who have never logged in are no longer shown on the Inactive Licenses report. 
  * Additionally, on the Users Overview screen in the Inactive Users tile and Inactive Users view, newly created users (those created in the last 30 days) will not show.

* **Fixed an issue** where the Autodiscover sync would load without ever finishing.

* **Fixed an issue** where task resolvers who were removed from their resolver position would still receive emails when someone else resolved their past Security & Compliance check violations.

* **Fixed an issue** where the Anonymously Shared Sites report and Externally Shared Sites report were not updating the information (numbers) in the tile filters accurately.  

* **Fixed a bug** that allowed owners of inactive workspaces to keep their workspace indefinitely, even when a maximum period limit for keeping the workspace was previously set.

* **Fixed a bug** where automatically Scheduled Report emails did not include an Attachment.  

* **Fixed a bug** where users who were both admins and workspace owners were not added as Reviewers for Private Channels, nor could they be added manually. 

* **Improved the description** for the Inactive Guest Users policy email and task screen.

* **Various improvements and minor UX fixes are available**.