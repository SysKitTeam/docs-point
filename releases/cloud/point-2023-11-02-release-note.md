---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2023.4.1.30
---

# November 02, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

{% hint style="warning" %}
**Please note!**\
Global admin re-consent is required after the upgrade to the latest version. Consent is required due to permission changes introduced with enhancements in the Copy User Permissions action. [Learn more about permission changes here](../../setup/requirements/permission-requirements-change-log.md).

[Syskit Point Teams app upgrade](../../governance-and-automation/syskit-point-teams-app.md#upgrade-syskit-point-teams-app) is required after upgrading to the latest version due to changes introduced in the new Microsoft Teams app.
{% endhint %}

* **New action added** - **Manage Sensitivity** - for Microsoft Teams, Microsoft 365 Groups and sites!
    * Syskit Point administrators can now apply to or remove a sensitivity label from workspaces!
    * The action is available on the Sites overview, Teams & Groups overview, and workspace details screens.
    * Multiselect is also supported. 
    * **Please note that modifying the sensitivity labels can take up to 24 hours to propagate**. 
    * To apply or remove sensitivity labels, a dedicated Microsoft 365 service account for SysKit Point needs to be connected.
    * [Learn more about this action in the new article](../../governance-and-automation/manage-sensitivity-labels.md).

* **New File Storage Details** report is available!
    * Drill from the Site Storage Metrics report to the File Storage Details report by clicking a file name.
    * Use this report to see all file versions and the total storage used by all versions.
    * Find how much storage is used by the file versions older than 30 days.
    * See how much storage is used by the file versions other than the latest 20 versions. 
    * **Please note that the File Storage Details report is available in the Governance plan only**.
    * [Read this article to find more information about the File Storage Details report](../../storage-management/storage-reports.md#file-storage-details).

* **New option added to Minimum Owners policy**!
    * Admins can decide whether they want to allow owners to accept risk for detected minimum number of owners policy vulnerabilities or not.
    * You can find the option under the Task Delegation section when editing a minimum number of owners policy.
    * [Find out how to setup minimum number of owners policy here](../../governance-and-automation/automated-workflows/minimum-number-of-owners-admin.md).

## Improvements & Bug Fixes

* **Improved how changes in policy settings are handled**. You can expect clearer messages on what will happen when you decide to modify existing governance policies. Here is a summary of policy updates and expected results: 
    * **Modifying detection options for policies** (e.g. changing the minimum number of required owners) **is applied within 24 hours**. Previously detected vulnerabilities and tasks will be examined again and closed if the workspace no longer violates the defined parameters. All workspaces will be checked again, vulnerabilities will be detected, and tasks created if needed.
    * **Turning on the task delegation for the first time results in tasks being created and emails being sent** within 24 hours.
    * **Modifying the task delegation options**, in case the task delegation is already enabled for a policy, results in new options being applied to future vulnerabilities. Existing tasks stay the same.
        * **Hint**! If you want to apply new task delegation options to all tasks, turn off task delegation - which will close all existing tasks - and turn it on again, which will create new tasks with new settings applied. 
    * **Turning off the task delegation results in the closing of previously opened tasks**. You will continue to see the detected vulnerabilities on the Security and Compliance dashboard even though the related tasks are closed.

* **The Copy user permissions action was enhanced**! Before, when adding members to private channels in Microsoft Teams, the action would often result in an error for users recently added to the Azure Active Directory.

* **Action log was improved** to provide better feedback when trying to remove access from sites for users that have access granted through security groups, Microsoft Teams, or Microsoft 365 groups.

* **The Active Tasks screen was improved** to correctly show the number of Active tasks. Previously, the Active tasks count included the ignored tasks as well.

* **Fixed an issue** where breaking changes in Microsoft audit logs resulted in Syskit Point not detecting such changes. As a consequence, Syskit Point didn't sync the newly added channels, and they were not visible in any part of the application.

* **Fixed an incompatibility issue** in Syskit Point Teams App when used with the new Microsoft Teams app. Due to breaking changes introduced in the new Microsoft Teams app, links in emails sent to workspace owners, which should open the Syskit Point Teams app, didn't work. 

* **Fixed an issue** where dates were not sorted in charts.

* **Fixed a bug** where Microsoft Teams activity sync failed if Yammer activity was fetched with errors.

* **Fixed an issue** where Names for some groups were not displayed on the selection step before generating the Group Access report.

* **Various improvements and minor fixes are available**.
    * **Fixed an issue** where the defined banner was not displayed within the test email.
    * **Fixed a bug** where you couldn't sort the date column in the XSLX reports exported from Syskit Point.







