---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.4.
--- 

# SysKit Point 2022.4

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.4.0

**Build number:** 5

**Release date:** July 15, 2022

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
    * List of all Power BI workspaces with **deeper insight into permissions and inventory**.
    * Ability to explore all workspaces with a list of reports and databases, including information on **who created them, who the owner is, when it was last modified**, and more!
    * Option to check which **users have access to Power BI workspaces and reports**, their level of access, and when they last used their licenses. 
      * This helps identify which users with a Power BI Pro license assigned are inactive. 
  * The following **Power BI reports** have been added:
      * Power BI Inventory
      * Power BI Workspaces
      * Power BI Permissions
   * Learn [how to enable Power BI data collection here](../configuration/enable-powerBI-data-collection.md).
* **Microsoft Teams Shared Channels can be found** under the Microsoft Teams and Groups Inventory. 
   * Find out which **internal and external members have access to Shared Channels**, their domain and content, and see whether any Team was added to a specific shared channel. 
* **Microsoft Teams with Private Channels** is now included in the Microsoft Teams reports in SysKit Point. 
     * **Browse all Teams with private channels** along with their content, members and owners. 
     * Admins for private channels can **remove, add or change owners and members**or promote members to owners directly in SysKit Point.
  * Learn more about [how to Manage Private Channels Access here](../access-management/manage-private-channels.md).
* **Collaborators** can change the metadata when the checkbox **‘Allow collaborators to change this metadata value’** has been enabled for a column. 
   * Global admins can change any metadata column. 
* **The External User Type** column is included in SysKit Point and provides **insight into users that are outside of an organization** but have access to content.  
   * It allows differentiating whether a user is a guest, ad hoc guest or shared channel user.  
* Users' details show **licenses and plans assigned** to them, along with when they were assigned.

## Improvements & Bug Fixes

* **Fixed a bug** where Group Memberships showed permanently deleted resources when accessing the User details report. 
* **Fixed an issue** where loading a large number of sites on the Sharing Links report was blocked if the number passed the Site Structure Threshold that had been set.
* **Fixed a bug** where some scheduled reports missed the Group Category.
* **Fixed a bug** that prevented selecting which activities to collect in the Audit Logs.
* **Fixed a bug** where Microsoft Teams wasn’t updated once changes to the interface were made. 
* **Fixed an issue** where archived workspaces were still sent out as a part of the Access Review. 
* **Various UX/UI improvements and other minor fixes** were made. 