---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  Cloud version 2023.3.0.14
---

# 2023-07-12

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Release date:** July 12, 2023

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **Introducing the Policy Automation feature!** Syskit Point Admins can now define rules, which Syskit Point will follow, and automatically apply defined governance policies for workspaces that meet the conditions configured in the said rules. You can fine-tune rules to apply governance policies to workspaces based on the following:
  * **Workspace name**,
  * **Privacy**,
  * **Sharing Settings**,
  * **URL**,
  * **Workspace Type**,
  * **Sensitivity Label**; with
  * **Additional conditions, such as Custom Metadata, coming soon!**

[To learn all about policy automation and how to set it up, follow this link](../../governance-and-automation/automated-workflows/policy-automation.md).

* **Notifications for provisioning errors are now available**. Syskit Point Admins will get an email in case of issues when the Syskit Point service creates a new workspace. Admins can also define custom recipients responsible for addressing such issues when they arise. As an admin, you can expect such emails when:
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
* **Various UX/UI improvements and minor fixes are available**.
  * Improved the message displayed in case the license limit is exceeded - the number of users in the M365 environment is greater than the number of users purchased with a Point license. Now, the message shows both - the total number of users and the number of users purchased with a Point license.
  * Export option added to all reports on the Governance screens, enabling you to export a list of active or resolved Acess Reviews, Lifecycle Management tasks, policy violations, and provisioning requests.
  * Fixed an issue where custom metadata, defined in provisioning templates, wasn't correctly displayed in Point Teams app.
