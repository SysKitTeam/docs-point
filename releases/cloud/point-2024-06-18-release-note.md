---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.3.51.31
---

# June 18, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Improvements & Bug Fixes

* **Improvements made to the Private Workspaces Shared with Everyone policy!** 
  * The Private Workspaces Shared with Everyone policy can now be resolved manually or automatically.
    * **Resolve Manually**: The vulnerability is flagged on the Security and Compliance Dashboard, where manual actions can be taken to resolve it. 
    * **Resolve Automatically**: Syskit Point automatically resolves the vulnerability by removing access via Everyone / Everyone except external users / All users. 


* **Improvements made to Reports!**
  * **Sensitivity Label and Retention Label** columns are now available on the Site Structure report and can be selected from the column chooser. 
  * **Reports now have a new Copilot Readiness tag.**
    * You can now select Copilot Readiness from the filter categories on Reports and the search bar.
  * **The Group Access report** no longer shows deleted Workspaces.

* **Fixed an issue** with saving the changes made in Settings for Syskit Point while WAF (web application firewall) is enabled. 

* **The number of concurrent file version cleanup actions** has been limited to avoid performance issues on the tenant. 

* **Fixed a bug** that removed Sensitivity Labels from the Group Details and Site Details screens after applying sensitivity labels to workspaces.

* **Fixed a bug** that caused the following error when logging additional information about sharing links on OneDrive: `System.NullReferenceException: Object reference not set to an instance of an object.
 at SysKit.Point.Business.SharePoint.SnapshotLoading.Utilities.SharingLinkConflictHelper.securityAndSizeTrim(JObject jObject)`

* **Various improvements and minor UX and UI fixes are available**.