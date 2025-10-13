---
description: >-
  This article lists improvements and bug fixes in Syskit Point version
  2024.4.52
---

# Syskit Point 2024.4.52

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.4.52

**Build number:** 95

**Release date:** July 17, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## New Features

* **New Copilot Readiness tile available on the Dashboard!**
  * With the help of the Copilot Readiness score, **you can easily detect areas of improvement or potential security concerns as you prepare to integrate Copilot** into your day-to-day business.
  * The Copilot Readiness tile shows all of the **policy vulnerabilities or overshared workspaces** that could pose a security risk.
  * The following is counted for the Copilot Readiness:
    * Number of vulnerabilities detected for the Workspaces with Too Many Members, Workspaces with Shadow Users, and Workspaces Shared with Everyone policies.
    * The Group Access and Sharing Links reports
    * The number of company-wide sharing links and links shared with everyone
    * The number of public workspaces
* **Improvements made to Storage Management for SharePoint Online!**
  * **Storage Versioning Limits** are now available in the Syskit Point Settings for Storage Management.
    * Storage Versioning Limits help you limit the number of file versions kept in SharePoint document libraries.
    * The versioning limit that can be set is either a **Count Limit or Time Limit**.
    * File versions are deleted after exceeding the number of versions or the time frame you set.
    * The Storage Versioning Limits can be applied automatically or manually.
    * For more details on versioning limits, [take a look at this article.](../../../storage-management/versioning-limits.md)
    * During the trial period, the Set Version Limits action cannot be used.
  * **The Site Storage Metrics report** has three new views available that detect workspaces without activity
    * The new views available are:
      * Without Activity in the Last 90 Days
      * Without Activity in the Last 180 Days
      * Without Activity in the Last 365 Days
    * These views show **workspaces that have not had activity registered or have not been modified** in the selected time frame.
* **Added the option to hide the Workspace name from the URL link and e-mails when creating Provisioning templates**.
  * When the option is enabled, the URL and e-mail contain a number identifier (6-10 characters) instead of the workspace name.
  * Hiding the workspace name from the URL or e-mail can be useful when dealing with confidential workspaces where you don't want to disclose any information, even in the URL or e-mail. Additionally, if you think a workspace name will change with time, you can use this option to have a unique URL and e-mail that doesn't have to change with future changes.
  * For more details, [please take a look at this article.](../../../governance-and-automation/provisioning/hide-workspace-name.md)

## Improvements & Bug Fixes

* **Improvements made to storage management actions!**
  * **Fixed an issue** where Storage cleanup actions failed due to workspaces' retention policy.
    * The action log now notifies you that the cleanup action could not be performed on the workspace due to a hold or retention period assigned to it.
  * **Fixed a bug** that allowed Global Viewers to perform Storage cleanup actions.
* **Improvements made to the Private Workspaces Shared with Everyone policy!**
  * The Private Workspaces Shared with Everyone policy can now be resolved manually or automatically.
    * **Resolve Manually**: The vulnerability is flagged on the Security and Compliance Dashboard, where manual actions can be taken to resolve it.
    * **Resolve Automatically**: Syskit Point automatically resolves the vulnerability by removing access granted to Everyone, Everyone except external users and All users groups.
    * [For more details on the Private Workspaces Shared with Everyone policy, take a look at this article.](../../../governance-and-automation/automated-workflows/private-workspaces-shared-with-everyone-admin.md)
  * **Fixed an issue** that prevented the Private Workspaces Shared with Everyone policy from correctly detecting vulnerabilities.
* **Improvements made to Reports!**
  * **Sensitivity Label and Retention Label** columns are now available on the Site Structure report and can be selected from the column chooser. Now, you can easily **find files with specific Sensitivity and Retention labels** with the help of the column filters.
    * **More reports with Sensitivity and Retention label information are planned in the upcoming releases!**
  * **Reports now have a new Copilot Readiness tag.**
    * You can now select Copilot Readiness from the filter categories on Reports and the search bar.
    * Several Security & Compliance checks also have the Copilot Readiness category added since they help you find and resolve workspaces with oversharing vulnerabilities.
    * Use these reports and checks to deal with overshared and inactive content and prepare your environment for Copilot.
  * **The Group Access report** no longer shows deleted workspaces when generated.
    * **The Storage Metrics report** has a new column added - Version Limit - where you can see if a workspace has a Syskit Point or Microsoft 365 version limit assigned, as well as which version limit is applied to which workspace.
  * **The Site Storage Metrics** report has a new column added - Last Modified - where you can see when a file was last modified.
* **Improvements made to the Security & Compliance Checks Dashboard!**
  * The Security & Compliance Checks Dashboard has **two new columns added**: New (Last 30 Days) and Resolved (Last 30 Days).
    * The **New (Last 30 Days)** column shows the number of new vulnerabilities detected per each policy in the last 30 days.
    * The **Resolved (Last 30 Days)** column shows the number of vulnerabilities resolved per each policy in the last 30 days.
    * The Resolved (Last 30 Days) column includes manually resolved vulnerabilities and those resolved automatically by Syskit Point.
  * When trying the Syskit Point demo version, you can now see the available actions on the **the Security & Compliance** vulnerability reports.
    * **Please note:** These actions are preview-only with Syskit Point demo data. To run these actions, you must connect your tenant to Syskit Point.
* **Improvements made to the Lifecycle Management!**
  * When **selecting to keep workspaces**, the default period is now set for 90 days when the keep action is selected, and the maximum limit is set to indefinitely.
  * **Improved sorting and filtering** on the Lifecycle Management History report for ease of use.
    * The Status column has been divided into Action, Performed On, and Performed By.
* **Improvements made to Access Review**.
  * On the Sharing step, the default Sharing view is now set to Show by Users.
  * By default, the Department column is now displayed for users on the Sharing step.
* **Sensitivity Label and Retention Label** columns are now available on the Unique Permissions and Sharing Links reports and can be selected from the column chooser.
  * You can easily **find files with specific Sensitivity and Retention labels** with the help of the column filters.
* **Improved the Provisioning process** to be more resilient and better handle errors.
  * This should help avoid provisioning failures when creating new Microsoft Teams.
* **Fixed an issue** with using the `-` symbol in Provisioning templates.
* **Fixed a bug** that showed Access Review e-mails with the date in the UTC timezone instead of local time.
* **Fixed a bug** that allowed users to apply previously deleted sensitivity labels.
* **The number of concurrent file version cleanup actions** has been limited to avoid performance issues on the tenant.
* **Fixed a bug** that caused the bulk Clean Up File Versions action to fail.
* **Fixed a bug** where applying Sensitivity Labels to workspaces via Syskit Point resulted in the label not being applied.
* **Fixed an issue** with being able to view task details when the task policy violation was resolved as Accept Risk. &#x20;
* **Fixed an issue** where member permissions were not correctly copied when performing the Copy User Permissions action.
* **Fixed an issue** with saving the changes made in Settings for Syskit Point while WAF (web application firewall) is enabled.
* **Fixed an issue** with creating and editing Rules in Syskit Point while WAF (web application firewall) is enabled.
* **Fixed an issue** where users were not added to Distribution Lists or Email-Enabled Security Groups after their Access Request was approved.
* **Fixed an issue** where comments were not shown in the task summary after deleting an Orphaned Workspace or resolving the Orphaned Workspaces vulnerability task.
* **Fixed an issue** where the following error would occur when attempting to complete the Viva Engage app registration: `{"message":"An error has occurred.","exceptionMessage":"Unexpected character encountered while parsing value: i. Path '', line 0, position 0.","exceptionType":"Newtonsoft.Json.JsonReaderException"}`
* **Various improvements and minor UX and UI fixes are available**.
