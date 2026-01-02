---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.5.123.1
---

# January 08, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Improved the performance of the tenant-wide Storage Metrics report**, which would result in a timeout on tenants with a large number of workspaces. 

* **Added PDF and XLSX export options to Workspace Review screens showing performed actions**. 

* **Added Job Title and Company** columns on the Group Memberships report. Columns are not displayed in the report by default. Use the Column Chooser to enable the columns. 
Added columns are also visible in the generated Excel file when exporting to XLSX.

* **Fixed an issue** where OneDrive sync would fail with the following error: `Microsoft.Kiota.Abstractions.ApiException: The server returned an unexpected status code and no error factory is registered for this code: 410`.

* **Fixed a bug** with Users sync, which would fail for users with unexpected characters in various user properties. Sync failed with the following error: `SysKit.Point.SPO.Graph.GraphException : There was an unexpected error performing the graph batch request. System.Text.Json.JsonReaderException : '0x0D' is invalid within a JSON string. The string should be correctly escaped.` 

* **Fixed a bug** where provisioning of Teams failed with the following error `System.Exception: Team with group id <groupID> was not created. <n> attempts made.`. 

* **Fixed an issue** where clicking the Resolve button for a task on the Tasks screen resulted in an error. The issue was limited to groups with a large number of members.

* **Fixed an issue** with Provisioning-related emails, where some images were not displayed correctly in old versions of desktop Outlook. 

* **Various improvements, including UX and UI fixes, are available.**
  * **Fixed the date format** visible in the Start Date field and the first Workspace Review start date information visible on the Create New Policy dialog when creating a new Workspace Review policy.
  * **The Apply policy dialog is now automatically displayed after policy creation**. It shows 2 options for applying the created policy: Apply Automatically with Rules (Recommended) and Manually Apply Policies.

