---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  Cloud version 2023.2.0.58
sidebar_position: 86
---

# May 16, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside of working hours to ensure minimal interference with your day-to-day business.

## Features

* **You can now resolve access and provisioning requests in the Syskit Point web app**! Whether using the Syskit Point Teams app or the Syskit Point web app, you can now resolve these tasks in any of the two places. As before, you will:
  * **Get a notification in the Teams app**
  * **Receive an email that opens the request in Syskit Point Teams app**
  * **Be able to resolve access and provisioning requests within the Syskit Point Teams app**\
    \
    In the newest addition, you will:
  * **Get a task in the Syskit Point web app as well**
  * **Be able to navigate to a task in the Syskit Point web app from the received email**
  * **Be able to resolve access and provisioning requests within the Syskit Point web app**\\
* **Group email address and site address editing added to provisioning requests**!
  * **When requesting a Microsoft Team or a Microsoft 365 Group**, you can **edit the group email address**.
  * **When requesting a new site**, you can now **edit the site address**, thus affecting the site's URL.

## Improvements & Bug Fixes

* **Syskit Point sync was improved to retrieve additional properties to distinguish between cloud and on-premises groups synced to Azure**!
  * **Refreshed look with additional icons** and **new on-premises views** on reports help you differentiate between the two group types
  * **Microsoft Teams & Groups inventory report** and **Group Membership** report enable filtering by group type with the help of the newly added views:
    * **Distribution Lists** and **Distribution Lists (On-Premises)**
    * **Security Groups** and **Security Groups (On-Premises)**
    * **Mail-Enabled Security Groups**
* **Performed by filter added to Audit Logs Overview report**! The new filter enables you to generate the report showing audit logs performed by:
  * **all users**
  * **only internal users**
  * **only external users**
  * **specific users**; here, you can select one or more users from your tenant in the people picker dialog
* **Recycled folder activity support added**!
  * The audit logs related to the Recycled folder activity are now collected in Syskit Point by default.
  * Activity is visible in the File and Page Activities report.
  * Activity triggers the Changed File or Folder alert if the alert is enabled.
* **Reports improved**!
  * **Job Title column was added** to the Users inventory report.
  * **Last Logged In column was added** to the Users with Privileged Access report.
* **Multiple sync improvements and fixes are available**.
  * **Fixed issues where changes in group memberships were not synced**.
  * **Added support for Request files links**. Before the changes, the following error would appear in the error logs: `SysKit.Point.WorkerUtils.Database.CustomSqlException: Violation of PRIMARY KEY constraint 'PK_Crawl_SharePointSharingLinks'. Cannot insert duplicate key in object 'Crawl.SharePointSharingLinks'.`
  * **Fixed an issue** that would appear when syncing sites with more than 1000 lists containing an Access Requests list. The following exception was thrown: `Violation of PRIMARY KEY constraint 'PK_Crawl_SharePointObjects'. Cannot insert duplicate key in object 'Crawl.SharePointObjects'.`
* **Fixed an issue** where generating the External Users report from the site details screen would result in an error.
* **Fixed a bug** with service account setup using Microsoft authentication flow. When setting up, instead of the entered service account, the signed-in account was used, resulting in missing permissions during provisioning.
* **Multiple provisioning-related fixes are available**.
  * **Fixed an issue** where custom metadata defined in the provisioning template was not correctly saved and applied in provisioning requests. The following custom metadata types were affected: number, yes/no, and Azure property - department.
  * **Fixed a bug** where an incorrect approval process was displayed when editing a provisioning template.
  * **Fixed an issue** where creating a new approval process from the provisioning template screen would reset the template form.
* **Fixed an issue** where reconsent would timeout and fail in large M365 environments.
* **Fixed an issue** where deleted users were displayed in the External Users report. Hard and soft deleted users are no longer shown.
* **Various UX/UI improvements and minor fixes are available**.
  * **Improved Syskit Point Teams app responsiveness** on smaller resolutions and scaled screens.
  * **Fixed issues** with the selection of collected audit logs activities in Audit Logs settings.
  * **Fixed an issue** where the Remove access action was erroneously displayed in the Power BI Inventory report when a workspace was selected.
  * **Fixed an issue** in Syskit Point Teams app where sorting requests by Requested On date would result in an error.
