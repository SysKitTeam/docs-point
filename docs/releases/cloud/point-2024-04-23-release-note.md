---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2024.2.47.12
sidebar_position: 64
---

# April 23, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## New Features

* **New options for integrating 3rd party apps and Syskit Point are available!**
  * Syskit Point offers 2 types of integration: **Syskit Point API and Webhooks**.
    * **Syskit Point API** is an interface that enables 3rd party apps to **access data available in Syskit Point** and **trigger operations in Syskit Point**.
    * **Webhooks** are messages that Syskit Point **sends to another defined application when an important event occurs**.
    * [For more details, please read through the articles listed in Integrations.](../../integrations/)

## Improvements & Bug Fixes

* **Improvements made to Reports!** &#x20;
  * **Added the total number of unique external users in the workspace** to the Power BI Workspaces report.
    * The Power BI Permissions report can now be filtered by user type: internal or external.
  * **Added a new column** to the Scheduled Reports screen: Last Manual Run.&#x20;
  * The column shows information on when the Send Now action was last executed.
  * **The Storage Metrics report** can now be exported and scheduled.
* **Improved the mechanics for logging into the Subscriptions portal** to reflect the email used for the subscription portal when navigating to it through Syskit Point.
  * Currently, this **only works for the General Administrator** that initiated the trial.
* **The Rule Preview report** has a new Manual Overrides filter that contains the following: Manually Applied and Priority Override.
* **Admin accounts with no mailbox** can now be added as admins to Orphaned Resourced and resolve delegated Tasks when there is no manager or manager response.
* **Improved functionality** of the Workspaces with too Many Members policy.
* **The Syskit Point trial version** has a limit of 10 File Version Cleanup actions that can be performed for the duration of the trial.
* **Fixed a bug** that caused the same policy violation to be logged as completed multiple times, along with sending duplicate Policy Resolved emails.
* **Fixed an issue** that caused an interruption in delivery of regularly set up scheduled reports if a scheduled report is requested manually.
* **Fixed an issue** that showed restored workspaces as deleted.
  * If a site was soft deleted and restored to active status, the workspace would still show as deleted when clicking on it.
* **Fixed an issue** with the Access Review that caused a problem loading users on workspaces with a large number of users. &#x20;
* **Fixed an issue** where retry attempts on Provisioning for Microsoft Teams caused the following error: `SysKit.Point.Provisioning.Infrastructure.Clients.MicrosoftGraph.MicrosoftGraphClientException: Failed to execute Templates backend request CreateTeamFromGroupWithTemplateRequest.`
* **Various improvements and minor UX and UI fixes are available**.
