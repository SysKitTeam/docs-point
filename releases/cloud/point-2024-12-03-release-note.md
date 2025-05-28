---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.6.72.5
---

# December 03, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features

* **Custom Views are now available!**
  * This feature **lets you filter, sort, add, or remove columns** in your report based on your specific needs **and retain those customizations for future use**.
  * Custom Views can be saved for Overview screens and other grid reports.
  * [For more details on how to Save Custom Views and a list of where custom views can be saved, take a look at this article.](../../configuration/custom-views.md)

## Improvements & Bug Fixes

* **Fixed a bug** that caused Microsoft Teams and Microsoft Groups to retain an Alive state, even after it was deleted while completing a Lifecycle Management or Inactive Workspaces tasks. 

* **Fixed an issue** that caused the following error during storage sync: `AMR API reported a fatal error. SiteId: <SiteID>, ListIds: <ListID>`

* **Fixed an issue** that caused timeouts for the background job handling special groups - Everyone, Everyone except external users, etc. 

* **Fixed an issue** with the Update Privacy action that caused the action to fail when performed in bulk. 

* **Fixed an issue** where an owner without a mailbox couldn't be set as an owner in the Inactive workspace policy settings.

* **Extension Attributes** can now be added to relevant reports by checking the Settings > General > Extension Attributes box.
  * Selecting the checkbox adds extension attributes from Microsoft Entra ID to relevant reports. 
    * Extension Attributes columns are available on the **Users with Privileged Access report**, with additional reports to be added in upcoming Point versions.

* **Improved the functionality** when completing Inactive Workspace tasks.
  * Workspaces with a completed review within an active task are now grayed out and placed at the bottom of the task with the Completed state displayed where the button had previously been. 

* **Various improvements, including UX and UI fixes, are available**.