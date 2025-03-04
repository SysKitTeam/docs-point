---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.83.15
---

# March 04, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Feature

* **New Dashboard tile** is available: **Workspace Sensitivity**.
  * The new Workspace Sensitivity Dashboard tile provides an overview of workspaces without Sensitivity labels applied.
  * From this tile, you can: 
    * View All to open the Unlabeled Sites view 
    * Select multiple workspaces and Ask Owners to review them
    * Directly apply Sensitivity Labels to workspaces for an immediate resolution
  * [Learn more about the importance of sensitivity labels in the following Syskit blog.](https://www.syskit.com/blog/microsoft-365-sensitivity-labels-guide/)

## Improvements & Bug Fixes

* **Improvements made to the Sharing Links report.**
  * **Added new filters** for Sharing Links reports to make it easier to find links shared with external users; you can choose between the following options when generating the report: **all, only internal and only external users and groups**. 
  * The Sharing Links report now has the Created By column enabled for SharePoint sites.

* **Fixed an issue** with the in-place archive (read-only) action for SharePoint sites, which prevented members and owners from accessing the archived site. 

* **Fixed an issue** with the Storage Cleanup action when files are on hold or under a retention policy. 
  * File removal now works correctly within any applied policy constraints.

* **Fixed a bug** with user roles that caused a failure when performing user sync. 

* **Fixed an issue** that caused the following error when provisioning a Yammer site: `System.NullReferenceException: Object reference not set to an instance of an object.`

* **Improved the Storage sync** to increase performance in large environments.

* **Various improvements, including UX and UI fixes, are available**