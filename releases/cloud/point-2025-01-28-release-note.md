---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.78.25
---

# January 28, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes

* **API for distribution lists (groups)!**
  * An API was developed to retrieve group membership and distribution list data.
  * [You can find more details in the Syskit Point API article.](../../integrations/syskit-point-api.md)

* **The Settings icon and User icon** placements have now been updated.
  * The Settings icon has been moved back to the top-right corner of Syskit Point, and the User icon has been moved to the far right corner for better accessibility. 

* **Added additional audit events** for Intelligent SharePoint versioning.
  * Seven new audit events have been added under the *File and Page Activities* category. 
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

* **Fixed issues** with the Power Platform feature that caused the following:
  * The error occurred during Flow Permissions sync: `Error while processing {SyncStep} for flow {FlowId}
System.ArgumentNullException: Value cannot be null. (Parameter 'input')
 at System.ArgumentNullException.Throw(String paramName)
 at System.Guid.Parse(String input).`
  * The following error occurred when attempting to perform an Apps Permissions sync: `NullReferenceException kod ParsePrincipalType
 System.NullReferenceException: Object reference not set to an instance of an object.
 at SysKit.Point.PowerPlatform.Infrastructure.Principals.PrincipalsCache.ParsePrincipalType(String principalType) in E:\agent2\_work\1\s\SysKit.SecurityManager.Backend\SysKit.Point.PowerPlatform.Infrastructure\Principals\PrincipalsCache.cs:line 244`
  * The following error occurred during SharePoint List Permissions sync: `Microsoft.Data.SqlClient.SqlException: Violation of PRIMARY KEY constraint 'PK_FlowListPermissions'. Cannot insert duplicate key in object 'PowerPlatform.FlowListPermissions'. The duplicate key value is (93, 800393).`

* **Various improvements, including UX and UI fixes, are available**.