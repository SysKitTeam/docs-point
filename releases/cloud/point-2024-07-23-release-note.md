---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2024.4.54.1
---

# July 23, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## New Features

* **Logging changes made in Point Settings**. Implemented audit options detailing what changes were made, who made them, when, and the before and after values.
* **Exclude certain users from receiving governance emails and tasks**. Added a new feature in Settings > General > Governance-Excluded Users, which excludes specific users, security groups, and mail-enabled security groups from receiving tasks and emails for Security & Compliance policies, Lifecycle Management, and Access Review.
  * [Find out more on how to set it up in the Configuration article](../../setup/configuration/configure/additional/exclude-users-tasks.md).

## Improvements & Bug Fixes

* **Sensitivity Label and Retention Label columns** are now available on the Permissions Matrix and Externally Shared Content reports.
* **Improvements made to Storage Management**. &#x20;
  * **Set version limit action** is no longer disabled by default.
  * **Set version limit action** now overrides rules and does manual policy assignment.
  * **Storage Metrics and Site Storage Metrics** reports now display the currently applied version limit.
  * **Renamed file type** "Photos" to "Images" in the Site Storage Metrics report.
  * **Improved efficiency** for Storage Metrics and Site Storage Metrics reports.
* **Improvements made to the Teams App**.
  * **Fixed an issue** in the Approval Requests process, which displayed the error: "Something went wrong. Nullable object must have a value."
  * **The provisioning process** now displays the required minimum and maximum number of owners. This requirement needs to be satisfied for a user to continue the process.
  * **Removed** the deprecated "Wiki" option from the Request Workspace screen.
* **Improvements made to Copilot Readiness**.
  * **Public Teams & Groups were removed** from the Company-wide sharing links.
  * When opening **the Company Wide Links report**, the Sensitivity label and Privacy are now displayed by default, Site Type can be enabled manually.
  * **Fixed an issue** that prevented the Copilot Readiness tile from being visible on the home dashboard if the user changed the order of the tiles.
  * **Fixed an issue** causing the Copilot Readiness tile to crash in some cases.
* **Syskit Point now detects if a workspace is archived using Microsoft 365 Archive and sets the correct status**.
* **Improved the Syskit Point appearance feature** to ensure the tenant name color on the Home screen is changed to match the selected branding colors.
* **Added a message** in Access Requests to inform users when adding a new owner/member fails, ensuring they are aware that the action was not completed successfully.
* **An email notification** is sent when the "Automatically assign new owners" policy is selected for Orphaned Workspaces.
* **Fixed a bug** that prevented certain Access Review rules from being shown if they were not applied anywhere.
* **Fixed an** issue that caused the wrong count for certain tiles on the home dashboard.
* **Fixed an issue** where certain buttons were not displayed properly in the older version of Outlook.
* **Fixed a bug** that prevented metadata from being created or edited in certain situations.
* **Fixed an issue** that prevented users from viewing their selection when choosing fallback options for certain policies.
* **Fixed an issue** with validation when removing metadata values.
* **Fixed an issue** with the people picker on some actions where it would not show existing users/groups.
* **Fixed an issue** where deleted groups were displayed on the selection step when generating the Group Access report.
* **Fixed an issue** where the Rule would disappear from the UI if it was applied only to deleted workspaces.
* **Fixed a performance** issue with policy evaluation on large environments where the evaluation was never completed.
* **Fixed an issue** with creating and editing Custom Metadata in Syskit Point while WAF (web application firewall) is enabled.
