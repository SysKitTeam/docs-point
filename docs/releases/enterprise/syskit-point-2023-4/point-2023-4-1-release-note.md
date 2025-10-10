---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2023.4.1
---

# Syskit Point 2023.4.1

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.4.1

**Build number:** 53

**Release date:** November 16, 2023

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Features

:::warning
**Please note!**\
Global admin re-consent is required after the upgrade to the latest version. Consent is required due to permission changes introduced with enhancements in the Copy User Permissions action. [Learn more about permission changes here](../../../requirements/permission-requirements-change-log.md).

[Syskit Point Teams app upgrade](../../../governance-and-automation/syskit-point-teams-app.md#upgrade-syskit-point-teams-app) is required after upgrading to the latest version due to changes introduced in the new Microsoft Teams app.
:::

  * **New Storage Metrics report is available!**
    * The Storage Metrics report shows your storage usage over time in your tenant to help you: 
      * [Manage and optimize storage usage](../../../storage-management/free-up-storage.md)
      * Identify potentially unusual spikes
      * Determine whether you need additional storage options
      * In case a defined limit is reached, the usage percentage bar graph related to the site will be colored red on the tenant, as well as the site level.
  * When clicked, the **View All link on the Storage tile on the Home dashboard now opens the Storage Metrics report**. 
  * **A warning message** is added and shown when the storage quota for the policy is surpassed. 
  * **Additional metadata columns were added** to the Storage Metrics report and can be selected from the column chooser.
  * **The Storage Management screen** was added to General Settings, which lets you choose whether to collect storage data and provides the ability to define storage reporting settings. 
  * **The Storage tile on the Dashboard is updated**, showing storage details on the largest sites in your environment.

  * **There is a new tenant-wide policy - Tenant Storage Limits**.
  * You can modify the percentage of used tenant storage that, once reached, results in Syskit Point raising a check on the Security & Compliance dashboard. Find more details in the [Tenant Storage Limit policy article](../../../governance-and-automation/automated-workflows/tenant-storage-admin.md).
  * You can find the Tenant Storage Limit check on the [Security & Compliance dashboard](../../../governance-and-automation/security-compliance-checks/overview.md). For more information about the Tenant Storage Limit report, [take a look at this article](../../../governance-and-automation/security-compliance-checks/tenant-storage.md).
  * **Task delegation for the policy is, by default turned on**, meaning that **an email will be sent to Syskit Point administrators when Syskit Point detects that the defined tenant-wide storage limit was reached**. Along with an email, **a task is created for Syskit Point administrators in Syskit Point**. 
  * **[Find more information on how to resolve the task here](../../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)**.
  * The policy has a **vulnerability history available** that enables you to see all previously detected and resolved tenant storage limit vulnerabilities. 
  * **Tenant storage limit vulnerability also shows** the percentage of used storage, used and total storage in your tenant, as well as Accept risk action, and a link that provides you with information on how to resolve the issue at hand in Microsoft 365 by adding more storage.

* **Home dashboard is now customizable**! 
  * All users can **reorder the dashboard tiles with the simple drag-n-drop action**. The layout is saved per user.

* **Provisioning templates** now enable admins to enforce applying a naming convention (with prefix and suffix) on the workspace's URL. 
  * If the Naming Rule option on a template is enabled, the naming rule will be applied to the workspace URL by default. 

* **New action added** - **Manage Sensitivity** - for Microsoft Teams, Microsoft 365 Groups and sites!
    * Syskit Point administrators can now apply to or remove a sensitivity label from workspaces!
    * The action is available on the Sites overview, Teams & Groups overview, and workspace details screens.
    * Multiselect is also supported. 
    * **Please note that modifying the sensitivity labels can take up to 24 hours to propagate**. 
    * To apply or remove sensitivity labels, a dedicated Microsoft 365 service account for SysKit Point needs to be connected.
    * [Learn more about this action in the new article](../../../governance-and-automation/manage-sensitivity-labels.md).

* **New option added to Minimum Owners policy**!
    * Admins can decide whether they want to allow owners to accept risk for detected minimum number of owners policy vulnerabilities or not.
    * You can find the option under the Task Delegation section when editing a minimum number of owners policy.
    * [Find out how to set up a minimum number of owners policy here](../../../governance-and-automation/automated-workflows/minimum-number-of-owners-admin.md).


## Improvements & Bug Fixes

* **Remove Access action was improved**. Point now better handles removing access for a user from workspaces that were deleted in the M365 environment without being synced in Syskit Point. A clear message is displayed in the Action log in such cases.

* **Overdue Lifecycle Management tasks can now be resolved**!
  * Lifecycle Management tasks that are overdue can be found in the Active Tasks section and can be resolved.
  * For overdue tasks, Syskit Point administrators can now send reminders to owners who have not yet completed the received task.

* **Multiple policy improvements are available.**
  * **The automation option in policy settings for all policies was renamed to Task Delegation**. The name better describes the process of delegating tasks and sharing the responsibility to resolve vulnerabilities among multiple users.
  * The policies settings screen was redesigned to provide more information at a glance - **grid with policies now shows the policy severity and policy status**.
  * For policies with a task delegation option, an **improved validation was added to ensure that the Collaborator role is enabled** if required for task delegation.
  * **A new action - Ask Members - is available on the Security & Compliance report for Orphaned workspaces**. It helps you to ask members of an Orphaned workspace to resolve the policy vulnerability and suggest new owners.

* **Two new columns added to the Manage Reviewers report**. You can find the **Email** and **Tenant Domain** columns in the columns chooser. The Manage Reviewers report is located in Settings > Governance > Access Review Options > Manage Reviewers. 

* **The Active Tasks screen was improved** to show only the vulnerabilities with an open task. Previously, detected vulnerabilities without a task were displayed as well. 

* **The term Resource was replaced with Workspace across Syskit Point and the documentation**. For example, the Orphaned Resources tile segment on the dashboard was renamed to Orphaned Workspaces. The Inactive Content report was renamed to Inactive Workspaces, and so on.

* **User sync was improved to resolve policy vulnerabilities in case the user's status change in Microsoft 365 makes the vulnerability obsolete**. For example, if an orphaned user is deleted in Microsoft 365, Syskit Point will automatically resolve detected vulnerabilities for the user during the user sync.

* **Improved how changes in policy settings are handled**. You can expect clearer messages on what will happen when you decide to modify existing governance policies. Here is a summary of policy updates and expected results: 
    * **Modifying detection options for policies** (e.g. changing the minimum number of required owners) **is applied within 24 hours**. Previously detected vulnerabilities and tasks will be examined again and closed if the workspace no longer violates the defined parameters. All workspaces will be checked again, vulnerabilities will be detected, and tasks created if needed.
    * **Turning on the task delegation for the first time results in tasks being created and emails being sent** within 24 hours.
    * **Modifying the task delegation options**, in case the task delegation is already enabled for a policy, results in new options being applied to future vulnerabilities. Existing tasks stay the same.
        * **Hint**! If you want to apply new task delegation options to all tasks, turn off task delegation - which will close all existing tasks - and turn it on again, which will create new tasks with new settings applied. 
    * **Turning off the task delegation results in the closing of previously opened tasks**. You will continue to see the detected vulnerabilities on the Security and Compliance dashboard even though the related tasks are closed.

* **The Copy user permissions action was enhanced**! Before, when adding members to private channels in Microsoft Teams, the action would often result in an error for users recently added to Microsoft Entra ID.

* **Action log was improved** to provide better feedback when trying to remove access from sites for users that have access granted through security groups, Microsoft Teams, or Microsoft 365 groups.

* **The Active Tasks screen was improved** to correctly show the number of Active tasks. Previously, the Active tasks count included the ignored tasks as well.

* **Improved descriptions on the policy screens** to enhance comprehension of each policy. 

* **Improved validations and clearer messaging** added to the Subscriptions portal. 
  * Includes details on the number of licenses you need to purchase for Syskit Point or information if you are currently using more licenses for Syskit Point than previously purchased.

* **Fixed an issue** where provisioning would fail with the following error when applying sensitivity labels or setting Outlook properties:
`User does not have permissions to execute this action.`

* **Fixed an issue** where unassigned licenses were not shown in the Licenses Overview report. 

* **Fixed a bug** where the Remove Access action on the User Access report did not log that a user cannot delete their own permissions from a SharePoint site collection. 

* **Fixed an issue** where deleting multiple users at once to resolve the detected security & compliance vulnerabilities on the Inactive Guest Users report failed to delete all users.

* **Fixed an issue** where breaking changes in Microsoft audit logs resulted in Syskit Point not detecting such changes. As a consequence, Syskit Point didn't sync the newly added channels, and they were not visible in any part of the application.

* **Fixed an incompatibility issue** in Syskit Point Teams App when used with the new Microsoft Teams app. Due to breaking changes introduced in the new Microsoft Teams app, links in emails sent to workspace owners, which should open the Syskit Point Teams app, didn't work. 

* **Fixed an issue** where dates were not sorted in charts.

* **Fixed a bug** where Microsoft Teams activity sync failed if Viva Engage activity was fetched with errors.

* **Fixed an issue** where Names for some groups were not displayed on the selection step before generating the Group Access report.

* **Fixed an issue** that made it difficult to click the Send Reminder button for Lifecycle Management when selecting a large number of workspaces. 

* **Fixed a bug** that caused issues during automatic sync where new Teams channels were not synced and visible in Syskit Point. 

* **Fixed a bug** where Provisioning used the wrong template for SharePoint sites. 

* **Various improvements and minor fixes are available**.
    * **Fixed an issue** where the defined banner was not displayed within the test email.
    * **Fixed a bug** where you couldn't sort the date column in the XSLX reports exported from Syskit Point.
