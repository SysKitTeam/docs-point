---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.89.6
---

# April 22, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes 

:::warning
**Please note!**\
Global admin re-consent is required after the upgrade to the latest version due to changes in APIs used to [detect Teams chat activity](../../configuration/microsoft-teams-activity.md). [Learn more about permission changes here](../../requirements/permission-requirements-change-log.md)
:::

* **Improved the Sync job in Syskit Point to handle sites with high subsite count better**. 

* **The Permission Matrix report** can now be generated for specific document libraries or folders. 
  * Folder and library drill-downs were added to the Permission Matrix selection step, which allows users to generate detailed reports even on large sites with many files. 
  * Drill down by clicking the workspace or document library name on the selection step.

* **Added the Company Name column** to the Users Overview screen. 
  * The Company Name is now retrieved during the user sync and can be selected from the column chooser on the Users Overview screen. 

* **Introduced multiple Power Platform improvements and fixes**:
  * Improved error handling in Power Platform sync.
  * Improved error handling and action log messaging for Power Platform actions.
  * Fixed an issue where SharePoint Form apps were incorrectly shown as orphaned. 
  * Other UX/UI improvements.

* **Fixed an issue** with audit log processing where the audit log collection was incorrectly stopped due to a high load.

* **Fixed an issue** with the User sync where some special characters would cause failure to perform a complete user sync.

* **Fixed a bug** where the Manage Sensitivity action was erroneously available for Private and Shared channels, and running the action resulted in an error. 
  * Private and Shared channels inherit the sensitivity label applied to the parent team workspace. Apply the label to the parent team to get the desired outcome.

* **Fixed an issue** where storage sync would fail with the following error: `Violation of PRIMARY KEY constraint 'PK_FileInfos'. Cannot insert duplicate key in object 'Storage.FileInfos'.`

* **Fixed a bug** that caused missing filters in Provisioning Request reports. 
  * When the Provisioning Requests report had no results, filters (e.g., Date) were not visible, but now the filters can be found even when the report is empty. 

* **Fixed the Microsoft 365 Archive action** for Microsoft 365 Groups.
  * Users with the SharePoint Admin role can now successfully archive Microsoft 365 Groups even when not listed as group owners. 

* **Fixed the bug** that caused deleted policies to appear in the filter for the Applied Policies column on the Overview screen reports.

* **Various improvements, including UX and UI fixes, are available.**