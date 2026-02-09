---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.126.1
---

# January 27, 2026

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

* **Fixed an issue** where SharePoint sites remained in Point even after their geo-location was removed, which caused sync failures. 
  * Syskit Point now detects geo-locations that no longer exist in Microsoft 365 and automatically deletes affected sites.

* **Fixed an issue** where OneDrive sites that were deleted more than 93 days ago were shown as *Deleted* but still incorrectly marked as *Can Be Restored*.
  * OneDrive sites that were deleted more than 93 days ago are now correctly detected as hard-deleted during autodiscovery and sync. 

* **Fixed an issue** where certain folders were missing from sync due to invalid or incomplete sharing link data, and would show the following error: 
  ```
  System.InvalidOperationException: There is an error in XML document (1, 55567).
  invitedOnField is nullable and can accept empty value 
  ```

* **Added a column** to the Sharing Links report: **Recommendations** 
  * The column can include the Expired Link recommendation, making it easier to spot links that can be removed at a glance. 

* **Various improvements, including UX and UI fixes, are available.**