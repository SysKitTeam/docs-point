---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.6.71.17
---

# November 26, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## Improvements & Bug Fixes

* **Fixed an issue** that caused a timeout when clicking the View All Actions button and loading the Actions Report.
  * New views were added to the report with the default time set as 7 days.  

* **Fixed issues with Provisioning.**
  * When provisioning a new site by using the "Copy from existing site" option, provisioning would fail when copying content types with fields that do not exist in the destination site. 
  * Provisioning would fail when copying theme options if certain colors were used.
  * Provisioning did not apply metadata correctly; instead, it showed the following error: `SysKit.Point.SPO.Graph.Exceptions.MicrosoftGraphClientException: Error happened while resolving teamAsyncOperation at SysKit.Point.SPO.Graph.GraphGroupManager.innerResolveAsyncTeamOperation(Guid teamId, Guid operationId, Int32 resolveRetryCount, Int32 retryCount, Int32 timeoutInSeconds, Nullable'1 remainingRetryCount)`

* **Fixed a bug** that caused the Site Details screen to crash for those without the Governance License for their Syskit Point.

* **Various improvements, including UX and UI fixes, are available**.