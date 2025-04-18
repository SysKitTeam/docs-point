---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.89.6
---

# April 22, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes 

* **The Permission Matrix report** now supports filtering down to specific document libraries and folders. 
  * Folder and library drill-downs were added to the Permission Matrix report filters, which allows users to generate detailed reports even on large sites with many files. 

* **Added fallback methods** when syncing sites with high subsite counts. 

* **Audit logs are now collected even if the status is lagging.**

* **Fixed an issue** that caused the following errors: 
  * When connecting **Power Platform**: `Microsoft.Data.SqlClient.SqlException: Cannot insert the value NULL into column 'ExternalApiId', table '@Connections'; column does not allow nulls. INSERT fails.`
  * When performing **user sync**: `at SysKit.Point.SPO.Graph.GraphLoaders.Batch.GraphBatchRequestExecutor.shouldHandleResponse(GraphBatchRequestExecutorOptions options, GraphBatchResponse batchResponse, Dictionary`

* **Fixed an issue** where Power Platform and Power BI sync failed on environments with custom networking and firewall configurations.

* **Fixed an issue** with storage sync caused by primary key violations. 

* **Fixed an issue** that caused SharePoint Form apps to appear orphaned.
  * SharePoint List Forms **no longer show as orphane** on the Orphaned Power Apps view. 

* **Fixed a bug** that caused missing filters in Provisioning Request reports. 
  * When the Provisioning Requests report had no results, filters (e.g., Date) were not visible, but now the filters can be found even when the report is empty. 

* **Fixed the Microsoft 365 Archive action** for Microsoft 365 Groups.
  * Users with only the SharePoint Admin role can now successfully archive Microsoft 365 Groups even when not listed as group owners. 

* **Fixed the bug** that caused deleted policies to appear in the filter for the Applied Policies column on the Overview screen reports.

* **Added the Company Name column** to the Users Overview screen. 
  * The Company Name is now retrieved during the user sync and can be selected from the column chooser on the Users Overview screen. 

* **Various improvements, including UX and UI fixes, are available.**