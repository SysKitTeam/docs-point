---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.4.52.66
---

# July 02, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

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
    * File versions are deleted after exceeding the number of versions or the time period you set. 
    * The Storage Versioning Limits can be applied automatically or manually. 
    * For more details on versioning limits, [take a look at this article.](../../storage-management/versioning-limits.md)
  * **The Site Storage Metrics report** has three new views available that detect workspaces without activity
    * The new views available are: 
      * Without Activity in the Last 90 Days
      * Without Activity in the Last 180 Days
      * Without Activity in the Last 365 Days 
    * These views show **workspaces that have not had activity registered or have not been modified** in the selected time frame. 

  * **Added the option to hide the Workspace name from the URL link and e-mails when creating Provisioning templates**. 
    * When the option is enabled, the URL and e-mail contain a number identifier (6-10 characters) instead of the workspace name.
    * Hiding the workspace name from the URL or e-mail can be useful when dealing with confidential workspaces where you don't want to disclose any information, even in the URL or e-mail. Additionally, if you think a workspace name will change with time, you can use this option and have a unique URL and e-mail that doesn't have to change with future changes.
    * For more details, [please take a look at this article.](../../governance-and-automation/provisioning/hide-workspace-name.md)

## Improvements & Bug Fixes

* **Sensitivity Label and Retention Label** columns are now available on the Unique Permissions and Sharing Links reports and can be selected from the column chooser.
     * You can easily **find files with specific Sensitivity and Retention labels** with the help of the column filters.

* **Improvements made to storage management actions!**
  * **Fixed an issue** where Storage clean-up actions failed due to workspaces' retention policy. 
    * The action log now notifies you that the clean-up action could not be performed on the workspace due to a hold or retention period assigned to it. 
  * **Fixed a bug** that allowed Global Viewers to perform Storage clean-up actions. 

* **Improvements made to the Lifecycle Management** feature when selecting to keep workspaces.
  * The default period is now set for 90 days when the keep action is selected, and the maximum limit is set to indefinitely.

* **Improvements made to Access Review**.
  * On the Sharing step, the default Sharing view is now set to Show by Users.
  * The Department column is now displayed for users on the Sharing step by default. 

* **Improved the Provisioning process** to be more resilient and better handle errors. This should help avoid provisioning failures when creating new Microsoft Teams.

* **Fixed a bug** that showed Access Review e-mails with the date in the UTC timezone instead of local time.

* **Fixed an issue** that prevented the Private Workspaces Shared with Everyone policy from correctly detecting vulnerabilities.

* **Fixed an issue** where the following error would occur when attempting to complete the Viva Engage app registration: 
`{"message":"An error has occurred.","exceptionMessage":"Unexpected character encountered while parsing value: i. Path '', line 0, position 0.","exceptionType":"Newtonsoft.Json.JsonReaderException"}`

* **Fixed a bug** that allowed users to apply previously deleted sensitivity labels.

* **Various improvements and minor UX and UI fixes are available**.