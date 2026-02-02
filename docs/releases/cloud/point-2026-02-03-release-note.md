---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.127.11
---

# February 03, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

:::warning
**Please note!**

* For new deployments, the **RoleManagement.ReadWrite.Directory permission is no longer requested** or added during consent.  
  
* For an **already deployed Point**, this permission is **not removed automatically** and will remain until manually removed. You can choose to remove this permission if you **do not need to manage security groups with allowed role assignments**.

* If managing role-based security groups is required, after deploying Point for the first time, you will have to manually add this permission, as it is not included by default in new deployments. 

* [For more information about permission requirements changes, see the change log.](../../requirements/permission-requirements-change-log.md#syskit-point-cloud-20261126)

:::

   
## Improvements & Bug Fixes 

* **Automation for orphaned users** can now be set up directly from the Orphaned Users report in the Reports Center.
  * For more details, [take a look at the Orphaned Users article. ](../../reporting/cleanup-and-health-reports.md#orphaned-users)

* **Fixed an issue** where sharing links could not be removed for files with a # symbol in the file name, which caused an error when selecting the Remove Sharing Link action from the Sharing Links report.

* **Fixed a bug** that caused Syskit Point to fail to load after upgrading to the most recent version.

* **Improved the performance** of storage reports for larger tenants by:
  * Optimizing the Storage.StorageSyncStatusView
  * Reducing data generation time

* **Various improvements, including UX and UI fixes, are available.**