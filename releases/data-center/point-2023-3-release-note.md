---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2023.3
---

# Syskit Point 2023.3

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.3

**Build number:** 70

**Release date:** July 26, 2023

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

* **Introducing the Rules feature!** Syskit Point Admins can now define rules, which Syskit Point will follow, and automatically apply defined governance policies for workspaces that meet the conditions configured in the said rules.
You can fine-tune rules to apply governance policies to workspaces based on the following:
  * **Workspace name**,
  * **Privacy**,
  * **Sharing Settings**,
  * **URL**,
  * **Workspace Type**,
  * **Sensitivity Label**; with
  * **Additional conditions, such as Custom Metadata, coming soon!**

[To learn all about rules and how to set them up, follow this link](../../governance-and-automation/automated-workflows/policy-automation.md).   

* **Notifications for provisioning errors are now available**. Syskit Point Admins will get an email in case of issues when the Syskit Point service creates a new workspace. Admins can also define custom recipients responsible for addressing such issues when they arise. 
As an admin, you can expect such emails when: 
  * **Workspace provisioning failed**
  * **Workspace provisioning succeeded, but additional workspace configuration resulted in an error**
  * **Sensitivity label couldn't be applied to a provisioned workspace**

[Learn more about available settings here](../../governance-and-automation/provisioning/configure-provisioning-failure-notifications.md).

## Improvements & Bug Fixes

* **Group Access now supports Microsoft 365 Groups and Microsoft Teams**. Use it to discover workspaces in your M365 environment to which a specific Microsoft 365 Group or Microsoft Teams have access. The report also received additional columns - Email, privacy, and Sensitivity label, helping you filter out wanted groups. As before, you can use export and scheduled reports for documentation needs and to share them with your colleagues. 

* **Custom metadata sync was improved**. Syskit Point now periodically syncs custom metadata regardless of workspace activity. Before, Syskit Point didn't sync custom metadata for inactive workspaces in case it was applied outside of Syskit Point.

* **Remove Access action is improved.** 
    * Action was reworked from the ground up to execute faster and use less memory. The action result stayed the same - the selected user is completely removed from a site and has no access to any content on the site. 
    * Action now better handles removing access for orphaned users when run from the Orphaned Users report. If the user was deleted via PowerShell, and an additional Users Sync is needed to collect additional information before deletion, Syskit Point displays an appropriate message in the action log.

* **Improved Copy Permissions action is available.** Syskit Point Admins can now copy memberships in Microsoft Teams private channels by selecting an option on the action dialog. [You can find more information in the Copy User Permissions article](../../access-management/copy-user-permissions.md).

* **Improved user details screen for external users.** On the external user's details screen, Syskit Point Collaborators can no longer see the list of workspaces to which an external user has access, except for workspaces to which the said Collaborator is the owner.

* **Fixed an issue** with the User Sync Status data for users synced from On-Premises Active Directory. Some users were erroneously classified as Cloud users if their SID (Security Identifier) was not synced to Azure Active Directory. 

* **Fixed a bug** where syncing Power BI workspaces would fail with the following error: `Saving Power BI Workspace with Id {WorkspaceId} to database failed.
Microsoft.Data.SqlClient.SqlException: Cannot insert the value NULL into column 'Name', table '@Dataflows'; column does not allow nulls.`

* **Various UX/UI improvements and minor fixes are available**.
    * Improved the message displayed in case the license limit is exceeded - the number of users in the M365 environment is greater than the number of users purchased with a Point license. Now, the message shows both - the total number of users and the number of users purchased with a Point license.
    * Export option added to all reports on the Governance screens, enabling you to export a list of active or resolved Acess Reviews, Lifecycle Management tasks, policy vulnerabilities, and provisioning requests.
    * Fixed an issue where custom metadata, defined in provisioning templates, wasn't correctly displayed in Point Teams app.  
