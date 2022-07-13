---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.4.
--- 

# SysKit Point 2022.4

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.4.0

**Build number:** 5

**Release date:** July 18, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

## Features

* **Power Platform data sync can now be enabled for SysKit Point.** Collect Power BI data and utilize it for **Access Reports**.
* Enabling Power BI data collection provides:
    * **List of all Power BI workspaces** and ability to explore all workspaces with a list of **reports, dashboards, datasets, and dataflows**, including information on **who created them, who the owner is, when it was last modified**, and more!
    * Option to check which **users have access to Power BI workspaces and reports** and their level of access. 
    * Get insight into **users with a Power BI Pro license** assigned to them, the date **when the Power BI Pro license was assigned**, and when the **license was last used**. 
  * The following **Power BI reports** have been added:
      * Power BI Inventory
      * Power BI Workspaces
      * Power BI Permissions
   * Learn [how to enable Power BI data collection here](../configuration/enable-powerBI-data-collection.md).
* **SysKit Point now supports Shared Channels**, and they can be found under the Microsoft Teams & Groups Inventory. 
   * Find out which **internal and external members have access to Shared Channels**, their domain and content, and see whether any Team was added to a specific shared channel. 
* Admins for private channels can now **remove, add or change owners and members** or promote members to owners directly in SysKit Point.
  * Learn more about [how to Manage Private Channels Access here](../access-management/manage-private-channels.md).
* **Collaborators** can change the metadata when the checkbox **‘Allow collaborators to change this metadata value’** has been enabled for a column. 
   * Global admins can change any metadata column. 
* **The External User Type** column is included in SysKit Point and provides **insight into users that are outside of an organization** but have access to content.  
   * It allows differentiating whether a user is a guest, ad hoc guest or shared channel user.  
   * This information is available on the Users Overview screen and needs to be selected from the Column Chooser. 

## Improvements & Bug Fixes

* **Fixed a bug** where Group Memberships showed permanently deleted resources when accessing the User details report. 
* **Fixed an issue** where loading a large number of sites on the Sharing Links report was blocked if the number passed the Site Structure Threshold that had been set.
* **Fixed a bug** that prevented selecting which activities to collect from the Unified Audit Log.
* **Fixed a bug** where SysKit Point’s Microsoft Teams app wasn’t updated once changes to the interface were made. 
* **Fixed an issue** where archived workspaces were still sent out as a part of the Access Review. 
* **Various UX/UI improvements and other minor fixes** were made. 