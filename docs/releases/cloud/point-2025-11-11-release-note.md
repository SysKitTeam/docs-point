---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.5.117.30
---

# November 11, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Improvements made to Provisioning.**
  * An option was added when creating a Provisioning template that allows you to limit the maximum number of characters allowed in workspace URLs.
    * When this option is enabled, any URL exceeding the limit will be automatically shortened (? tako sam skuzila bar?). 
    * This option is automatically disabled, and the checkbox needs to be selected to enable it.
    * The minimum number of characters required is 1 and the maximum number allowed is 256.
  * If the option to Hide workspace name from URL is selected, a message will inform users that the final URL will be masked when provisioning from that template. 

* **Improvements made to the License Distribution report.**
  * New filter was added to the selection step: **Country or Region**.
  * The Inactive Licenses column has been renamed to Inactive Users with Assigned Licenses for improved clarity.

* **Fixed an issue** where Access Review tasks were not created and Access Review e-mail were not sent out due to the following error: `Access Review Notifier Job failed on step: ReviewStartEmail.
Microsoft.Data.SqlClient.SqlException: The INSERT statement conflicted with the FOREIGN KEY constraint "FK_UserPermissionReview_SitePermissionReview".`

* **Fixed an issue** nested security groups were not synced properly.
  * Only users, not nested security groups, were shown as members of parent groups in reports such as the Permissions Matrix, Group Memberships, or Group Access.

* **Fixed an issue** where the Power BI data sync failed due to the wrong authentication token being used during the sync process. 

* **Fixed a bug** that caused the Sensitivity Labels Inventory report to fail when handling large values with the following error: `Arithmetic overflow error converting expression to data type int.`

* **Various improvements, including UX and UI fixes, are available.**