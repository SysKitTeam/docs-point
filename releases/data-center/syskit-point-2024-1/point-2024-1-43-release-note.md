---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2024.1.43.98
---

# Syskit Point 2024.1.43.98

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.1.43

**Build number:** 98

**Release date:** March 5, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

* **New Policies added**: **Shadow Users** and **Workspaces with Too Many Members**. 
  * **Shadow Users policy**
    * **Shadow users** are users who have access to specific documents/folders or other content but are not members of the Microsoft Groups or Microsoft Teams associated with it. Shadow users can potentially represent a security risk, as it is best practice to share access within workspace members only, especially when a workspace is private and contains sensitive content.
    * **Default Shadow Users policy** is created after the upgrade to the latest Point Cloud version.
    * **The Default Shadow Users** policy is not applied to any workspaces as it is not included in the default rule. To apply the policy to your workspaces, we recommend using [Syskit Point rules](../../../governance-and-automation/automated-workflows/policy-automation.md).
    * **The default Shadow Users policy**, when applied to workspaces, **will show policy vulnerabilities on the Security & Compliance dashboard**, but **no tasks are created**, and **no emails sent**.
    * [For more details about the Shadow Users policy settings, read this article.](../../../governance-and-automation/automated-workflows/shadow-users-admin.md)
    * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article](../../../governance-and-automation/security-compliance-checks/workspaces-with-shadow-users.md)
  * **Workspaces with Too Many Members policy**
    * **Workspaces with Too Many Members** are Microsoft Groups or Microsoft Teams that have a number of members that are over a defined threshold. 
    * **Too many members in a workspace** may lead to more difficult access control, which can result in a security risk. 
    * **Default Maximum Number of Members policy** is created after the upgrade to the latest Point Cloud version and sets a limit of 50 members on a workspace.
    * **The Default Maximum Number of Members policy** is included in the default rule, meaning that it is applied to your workspaces.
      * If policy vulnerabilities are detected, **they are shown on the Security & Compliance dashboard**, but **no tasks are created**, and **no emails sent**
    * [For more details on how to modify the Maximum Number of Members, read the following article.](../../../governance-and-automation/automated-workflows/workspaces-with-too-many-members-admin.md)
    * [To learn how to resolve the policy vulnerability, navigate to the Security & Compliance report article](../../../governance-and-automation/security-compliance-checks/workspaces-with-too-many-members.md)

* **The Change Storage Limit action** was added to the Storage Metrics report.
  * You can now customize and change the storage limit for each site, meaning that if you notice a certain site has a larger influx of data than others, you can increase the storage limit for that site while lowering the storage limit for others. 
  * The cumulative storage for all your sites cannot exceed the total storage available for your tenant.
  * [Follow this link to learn how to limit storage usage in Syskit Point](../../../storage-management/limit-storage-usage.md)

## Improvements & Bug Fixes

* **Ad-hoc external users can now be removed** with the Delete Users action.
  * Ad-hoc users are external users who are not a part of Microsoft Entra ID but have access to specific SharePoint content.
  * Since they can't be found in Microsoft Entra ID, deleting such users in the same way as your tenant users or guest users is not possible.
  * The Delete Users action now removes ad-hoc external user access from SharePoint content. 
  * After running the Delete Users action, the ad-hoc external user is no longer visible in Syskit Point access reports. 

* **The Remove Access action is now enabled** for users on the Sharing step - Users view - in the Access Review task.  
  * Multiselection of users is also enabled.

Multiple improvements are available for the Storage Management feature:
  * The **Storage tag was added to reports** related to Storage Management for easier filtering in the Report Center.
  * **Site Storage Metrics report** now has the Created On column added that can be selected from the column chooser. 
  * **Columns sort on reports** is now correctly displayed on the tenant-wide Storage Metrics report.
  * **Fixed an issue** on sites where information about file versions and sizes was not regularly refreshing.

* **Global Viewers can now manage** Scheduled Reports they created. The following actions are available: Preview, Send Now, Edit, Pause, Delete. As before, Global Viewers cannot manage Scheduled Reports created by other users.

* **The Remove Access action was enabled** for users in the Access review task on the Sharing step - Users View.   
  * Multiselection of users is also enabled.

* **When [configuring e-mail SMTP settings](../../../configuration/set-up-email.md#smtp-settings)**, along with the classic email@email.com format, the Sent From e-mail can now also be in the following format: DisplayName <email@email.com>.

* **Newly created licensed users** who have never logged in are no longer shown on the Inactive Licenses report. 
  * Additionally, on the Users Overview screen in the Inactive Users tile and Inactive Users view, newly created users (those created in the last 30 days) will not show.

* **Fixed an issue** where the Autodiscover sync would load without ever finishing.

* **Improved the sync process for Private and Shared channels**, thus eliminating specific cases where manual intervention was needed to successfully sync Private and Shared channels in Syskit Point.

* **Improved the performance** of the Site Storage Flat Report and Site Storage Structure Report. 

* **Improved the performance** of the 'Tasks Overview' page when showing a large number of tasks.  

* **Improved the description** for the Inactive Guest Users policy e-mail and task screen.

* **Fixed the issue** where background jobs were occasionally duplicated and caused delays in processing.

* **Fixed an issue** where task resolvers who were removed from their resolver position would still receive e-mails when someone else resolved their past Security & Compliance check violations.

* **Fixed the issue** that caused the Permissions Summary report on the Site Details screen to time out in some environments.

* **Fixed an issue** where the Anonymously Shared Sites report and Externally Shared Sites report were not updating the information (numbers) in the tile filters accurately.  

* **Fixed an issue** on the User Details screen where the Remove Access action would time out when selecting multiple workspaces.

* **Fixed a bug** on the Permissions Summary report that caused the Site Details Screen to time out in some environments.

* **Fixed a bug** where users who were both admins and workspace owners were not added as Reviewers for Private Channels, nor could they be added manually. 

* **Fixed a bug** that allowed owners of inactive workspaces to keep their workspace indefinitely, even when a maximum period limit for keeping the workspace was previously set.

* **Fixed a bug** that showed Security Groups on the Rule Preview report when using Policy Automation on All Users, Everyone, and Everyone Except External users, even though a rule was set that security groups should not be included. 

* **Fixed a bug** on the Teams & Groups reports that showed different values for the Created On date for Security Groups when compared to the values shown on the exported report. 

* **Fixed a bug** where automatically Scheduled Report e-mails did not include an Attachment.  

* **Fixed a bug** that caused an error when trying to send Lifecycle Management reminders. The following error message was displayed in the action log: `Error. An item with the same key has already been added. Key: int`

* **Fixed a bug** that caused the following error message to appear when performing the Clean Up File Versions action on a site: `'Microsoft.SharePoint.Client.ServerException: No version with the requested ID was found.'` and `'Microsoft.SharePoint.Client.ServerException: Operation is not valid due to the current state of the object.'`

* **Fixed an issue** where global search would not work as expected on the Sites, Teams & Groups Overview screen, the Storage Metrics, and Manually Apply Policies reports, in case custom metadata columns were enabled in the column chooser.

* **Various improvements and minor UX fixes are available**.