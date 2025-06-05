---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.3.94.7
---

# June 05, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Feature

* **New role** added to Syskit Point: **Syskit Point Power Platform Admins**
  * Users assigned this role have **read-write** privileges on the **Power Platform Reports**, and Power Platform **Settings**.
  * [For more details on the new role and the access it provides, take a look at this article.](../../configuration/enable-role-based-access.md#syskit-point-power-platform-admins)


## Improvements & Bug Fixes 

* **The following improvements** to Provisioning have been made:
  * **Users are now prevented** from adding guest users as group or team owners when provisioning a workspace. 
  * **The maximum allowed length** for group or team emails has been restricted in order to avoid provisioning failure.
  * **Fixed the missing error message** when Provisioning fails, so it no longer shows as `null`.
  * **Fixed the issue** that caused Provisioning to fail when the same user is assigned as both the primary and secondary contact.

* **Added a warning** when a Microsoft 365 Group associated with a SharePoint Site has been deleted.  
  * The warning will appear on the Group or Site details screen. 

* **Syskit Point now detects and collects** data from SharePoint Agent accounts. 

* **Various improvements, including UX and UI fixes, are available.**