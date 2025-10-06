---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.78.25
sidebar_position: 35
---

# January 28, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes

* **Groups endpoint added to Syskit Point API!**
  * You can now retrieve all groups collected by Syskit Point via API call. You can also get data for specific group types or a single group by providing the group name.
  * Additionally, you can get information about group memberships for all groups.
  * [You can find more details in the Syskit Point API article.](../../integrations/syskit-point-api.md)

* **The Settings icon and User icon** placements have now been updated.
  * The Settings icon has been moved to the top-right corner of Syskit Point, and the User icon has been moved to the far right corner for better accessibility. 

* **Syskit Point now collects additional audit events** for SharePoint versioning.
  * Seven new audit events have been added: _File version trimming setting on site for new libraries is changed_, _File version trimming setting on tenant for new libraries is changed_, _Started bulk deleting file versions_, _Started bulk expiring file versions by using a schedule file_, _Started generating file version expiration export_, _Started updating version settings on all document libraries on the site_, _Updated expiration date of a file version_
  * These help you track changes to version limits at the tenant, site, or list level. 

* **A new column was added** to the External Users screen.
  * **The External User Type** column has been added and can be selected from the column chooser. 

* **The date format in emails** has been updated.
  * The date now shows in the format of MMMM, D, YYYY (ex. June 5, 2025)
  * The emails no longer show an exact time next to the date.  

* **Fixed an issue** where custom metadata that was not defined in Syskit Point did not show a red warning in the column, leaving that space empty instead. 
  * Custom metadata must be defined in Point before the correct metadata value is shown in the column. 

* **Fixed an issue** on the Tenant Storage Metrics report, where the storage trend was not refreshed when switching between report views (Last 180 Days, Last 30 Days, etc.).

* **Fixed an issue** where the Shared with Everyone policy was incorrectly resolved when it was set to resolve automatically. 

* **The Power Platform data sync was improved** to better handle cases where a SharePoint List has multiple permission levels assigned on a flow. Before, only the highest privilege permission was displayed; now, all permissions are collected and shown on related Power Platform reports.
  
* **Various improvements, including UX and UI fixes, are available**.