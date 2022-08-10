---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.4.1.
--- 

# SysKit Point 2022.4.1

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.4.1

**Build number:** 4

**Release date:** May 16, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).


## Features

* **Added Access Review for Private Channels.**
  * The Members and Sharing steps of the Access Review task now include Private Channels. 

* **The User Access report has** a filter for Power BI, showing user access to Power BI workspaces and the resources within those workspaces. 
  * **The User Details shows which Power BI workspaces** a user has rights to access.


## Improvements & Bug Fixes

* **Admins can set limitations** on the maximum period a site can be kept by a user when completing Lifecycle Management tasks.
  * By default, this is set to twelve months but can be changed in Settings by the admin.  

* **Fixed a bug** where previously archived sites would still appear on Lifecycle Management tasks. 

* **Improved Lifecycle Management** by adding filtering for Shared Channels. 

* **Fixed a bug** where sensitivity labels within the edit provisioning template pulled information from the app identity instead of a service account. 

* **Fixed an issue** where User Sync would not complete successfully, showing the following error message:

  `System.Data.SqlClient.SqlException: Violation of PRIMARY KEY constraint 'PK_Principals_ServicePlans'. Cannot insert duplicate key in object 'dbo.Principals_ServicePlans'. The duplicate key value is (8436, 65).The statement has been terminated.`

* **Fixed a bug** where Power BI sync remains stuck in the process of syncing, showing the following error:

  `System.Data.SqlClient.SqlException (0x80131904): Cannot insert duplicate key row in object 'PowerBIData.Datasources' with unique index 'UX_Datasources_Guid'. The duplicate key value is (cecc75aa-ce8b-428a-8fb4-385ffe5b3048).`

   * The Power BI sync that does not complete within one day is now canceled, allowing it to retry the sync again. 

* **Fixed an issue** where trying to automatically resolve the Orphaned Group Policy showed the following errors: 

  `System.Collections.Generic.KeyNotFoundException: The given key '62194' was not present in the dictionary.
   at System.Collections.Generic.Dictionary'2.get_Item(TKey key)`

   and

   `System.ArgumentException: An item with the same key has already been added.`

* **Fixed a bug** that caused the automatic resolve of the Orphaned Groups Policy to continuously change from Pending to Resolved without finishing the task. 

* **Various UX/UI improvements and other minor fixes** were made. 