---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.1.76.1
---

# January 14, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features

* **New Archive methods available!**
  * With the introduction of Microsoft 365 Archive, Syskit Point now provides an additional option for archiving workspaces:
    * **In-place archival** - the standard Syskit Point method that archives the site and places it into a read-only state.
    * **Microsoft 365 Archive** - archives the site through Microsoft 365 and moves it into a cold storage tier for archived sites. 
  * [More details on archiving are available in the Resolve Inactive Workspaces Tasks article.](../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md)
  * [For information on the Inactive Workspaces policy, take a look at this article.](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)


## Improvements & Bug Fixes

* **Improvements made to the Activity column** on the Inactive Sites view on the Sites overview screen and Inactive Groups view on the Teams & Groups overview screen. 
  * Activity is determined by the usage of SharePoint, Exchange, Teams, and Yammer within the timeframe specified in the Inactive Workspaces policy. 

* **When copying** Structure or Structure & Content from an existing workspace using a Provisioning template, the site logo is also copied. 

* **Fixed an issue** where Teams archived via the Teams Admin Center were not recognized as archived by Syskit Point.

* **Fixed a bug** on the Users with Privileged Access report that caused the report to crash with the following error: `Error while exporting report: {ReportName} 
System.Collections.Generic.KeyNotFoundException: The given key 'principal_ExtensionAttribute1' was not present in the dictionary.`

* **Various improvements, including UX and UI fixes, are available**.