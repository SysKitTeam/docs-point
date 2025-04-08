---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.88.16
---

# April 08, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features

{% hint style="warning" %}
**Please note!**\
Global admin re-consent is required after the upgrade to the latest version if you enabled Power Platform data collection in one of the previous versions.
Consent is required due to permission change introduced to enable [running Power Platform actions](../../access-management/power-platform-actions.md) in Syskit Point. [Learn more about permission changes here](../../requirements/permission-requirements-change-log.md)
{% endhint %}

* **New Power Platform actions are available.**
  * You can now complete the following actions on Power Platform reports:
    * **Change Owners**
      * This action can be completed for Flows on the Power Automate Inventory and Permissions reports, as well as Apps on the Power Apps Inventory and Permissions reports
      * On the reports, select a single App or Flow and modify the Primary owner and Co-owners
      * Note that the Primary owner cannot be changed for the non-solution Flows currently synced in Syskit Point
      * Note that the Change Owners action cannot be run on SharePoint Form apps
    * **Add Co-Owners**
      * This action can be completed for Flows on the Power Automate Inventory report and Apps on the Power Apps Inventory report
      * On the reports, select one or multiple Apps or Flows and add additional Co-owners, which can come in handy when trying to define Co-owners on multiple orphaned Flows
    * **Delete Environment**
      * This action helps you remove unused environments and can be completed on the Power Platform Environments report
  * [For more details, please take a look at the Power Platform actions article.](../../access-management/power-platform-actions.md)

* **New policy available**: Workspaces Without a Sensitivity Label
  * This policy helps you detect workspaces that don't have a sensitivity label attached and could pose a security risk.
    * [For more details about the Workspaces without a Sensitivity Label policy, read this article.](../../governance-and-automation/automated-workflows/workspaces-no-sensitivity-admin.md)
  * Once a workspace without a sensitivity label is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
    * [To find out more about actions available to Syskit Point admins and how they can resolve the detected vulnerability, read the related Security & Compliance report article.](../../governance-and-automation/security-compliance-checks/workspaces-without-sensitivity.md)
    * [Learn how workspace owners can resolve the Sensitivity review tasks in the following article.](../../point-collaborators/resolve-governance-tasks/sensitivity-review.md)
  * Clicking the **Unlabeled Workspaces** button on the Dashboard Workspace Sensitivity tile now redirects to the Security & Compliance checks screen for the Workspaces Without a Sensitivity Label policy.


## Improvements & Bug Fixes 

* **Fixed an issue** that didn't include the Details and Error columns on the Actions report when exporting it to Excel. 

* **Fixed a bug** with the File Storage Details report that caused the File Details columns to not load data correctly when viewing files Older than 6 months. 

* **Fixed an issue** where Microsoft Team Owners who were not also Site Admins could not perform the expected actions in Syskit Point to resolve security & compliance vulnerabilities.
  * The **Add users with Full Control** setting needs to be enabled for the Syskit Point Collaborators role to ensure that collaborators who are Team owners can access Syskit Point and resolve their tasks. 

* **Fixed the issue** where the Storage sync job would sync storage data based on the last sync time instead of when the sync was last successful.

* **Various improvements, including UX and UI fixes, are available.**