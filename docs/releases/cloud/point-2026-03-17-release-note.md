---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.133.17
---

# March 17, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.
   
## Improvements & Bug Fixes 

* **Improvements made to License reports.**
  * The **Inactive Users with Assigned Licenses** report has been renamed to **Licenses Assigned to Inactive Users** to better reflect the generated report.
  * In the License Distribution report, the **Inactive Users with Assigned Licenses** column has been renamed to **Licenses Assigned to Inactive Users** for improved clarity.

* **Improvements made to the Risky Workspaces view on the Security & Compliance screen**.
  * Added the Request Workspace Review action, which allows admins to trigger a Workspace Review directly from the Risky Workspaces view. 
  * If no Workspace Review policy is assigned to the workspace, clicking the actions opens a confirmation modal that asks you to select a workspace review policy from the dropdown menu before initiating a review. 

* **Added the Workspace Type column** to the Orphaned Workspaces report. 
  * The column is hidden by default and can be selected from the column chooser. 

* **Improved the stability of Teams provisioning.** 
  * Resolved an issue where provisioning could occasionally fail when creating Microsoft 365 Groups. The process is now more reliable.

* **Fixed an issue** where Power Platform Connections would fail to save successfully and result in the following error:

  ```
  Error while saving connections batch to database for environment Id - {EnvironmentId} Microsoft.Data.SqlClient.SqlException: String or binary data would be truncated in table 'tempdb.dbo.#ABF50E8E', column 'DisplayName'.
  ```

* **Various improvements, including UX and UI fixes, have been implemented.**