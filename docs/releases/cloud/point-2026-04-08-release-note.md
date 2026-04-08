---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.136
---

# April 08, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.


## Improvements & Bug Fixes

* **Improvements made to Risky Workspaces** on the Security and Compliance screen.
  * Admins can now resolve risks for workspaces directly from the report.
  * [For more details, please take a look at the Risky Workspaces article.](../../governance-and-automation/security-compliance-checks/risky-workspaces.md)

* **Fixed an issue** where a Group Membership sync could fail due to SQL timeouts. 

* **Improvements made to** the Inactive Workspaces policy inactivity threshold. 
  * Once the inactivity threshold is changed for a Inactive Workspaces policy, existing vulnerabilities are now closed if they no longer meet the updated inactivity threshold. 
  * Added a message with information that changes are applied within 24 hours.

* **Fixed an issue** where the Keep action for Inactive Workspaces was not available for all license types and would trigger the *LicensingFeatureNotAvailableException* error.

* **Fixed an issue** where Delete files action failed due to missing permissions.
* Attempting to delete files without access caused the following error: 
  ```
  System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.
  ```

* **Various improvements, including UX and UI fixes, have been implemented.**