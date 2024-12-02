---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.6.72.5
---

# December 03, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features

* **Save Custom Views feature now available!**
  * Custom View can be saved for Overview screens and specific reports.
  * This feature **lets you filter, sort, add, or remove columns** in your report based on your specific needs **and retain those customizations for future use**.
  * [For more details on how to Save Custom Views and a list of where custom views can be saved, take a look at this article.](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)

## Improvements & Bug Fixes

* **Fixed a bug** that caused Microsoft Teams and Microsoft Groups to retain an Alive state, even after it was deleted while completing a Lifecycle Management or Inactive Workspaces tasks. 

* **Fixed an issue** that caused the following error during storage sync: `AMR API reported a fatal error. SiteId: 415944, ListIds: 62620d25-c6be-4f12-9d23-2f9b8f791ec4,b8644cc4-aeed-41e3-8060-7ae77e6bad5c,c29e2a2e-b1a8-4733-ac46-85f4d06135c6,2c87cab7-5142-4a66-a596-96dd9814ab2c,c5abcf3b-23e6-4ae2-8668-c25d36f4ec21,`

* **Fixed an issue** that caused timeouts for the Ensure Special Groups jobs. 

* **Fixed an issue** with the Update Privacy action that caused the action to fail when performed in bulk. 

* **Fixed an issue** where an owner without a mailbox couldn't be set as an owner in the Inactive workspace policy settings.

* **Extension Attributes** can now be added to relevant reports by checking the Settings > General > Extension Attributes box.
  * Selecting the checkbox adds extension attributes from Entra ID to relevant reports. 

* **Improved the functionality** when completing Inactive Workspace tasks.
  * Workspaces with a completed review within an active task are now grayed out and placed at the bottom of the task with Completed stated where the button had previously been. 

* **Various improvements, including UX and UI fixes, are available**.