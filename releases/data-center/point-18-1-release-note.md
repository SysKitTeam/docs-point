---
description: This article describes the new features and improvements in Syskit Point version 18.1.
---

# Syskit Point 18.1

**Syskit Point 18.1** is a minor release that comes with role-based dashboards and licensing reports, as well as customer-suggested improvements and a couple of important bug fixes. 

**Product version:** 18.1.0  
**Build number:** 1831  
**Release date:** Mar 16, 2021

## Features

* **Dashboards are now available for owners and admins!** Owners and admins can now:
  * **see what was happening on their Microsoft Teams, Microsoft 365 Groups, OneDrive, and sites** in the last 30 days at a glance  
  * **find summary data for their workspaces**, **internal and external users**, **sharing links**, and **used storage** - **all numbers are drillable**, opening related reports which will show more details 
  * **detect potential issues**, for example, if a Microsoft Team is inactive

* **Licensing reports are now available for owners and admins!** Admins and owners can now see license information about users they are the manager of and **discover inactive licenses** and **potential savings**. **Licenses Usage by Service**, **License Distribution**, and **Inactive Licenses** reports are available in the Report Center.

## Improvements & Bug Fixes
* **A new security group filter was added to the Permissions Matrix report**. The filter enables you to show or hide security group members depending on your needs.  
* **Improved how the Inactive Licenses report detects inactive users** after the first Syskit Point installation. Users without recent sign-ins are considered inactive only after the number of days defined in the Inactive Content settings is reached, which is by default 90 days. 
* **Detection of deleted users and groups was improved**. Syskit Point now performs additional checks to ensure users and groups deleted from Microsoft Entra ID are marked as such in the Syskit Point database. 
* **The Object Type column was added to the User Access report**. This addition helps you find user permissions defined on the selected objects – sites, document libraries, folders, or files. 
* **Fixed an issue** where Syskit Point did not collect audit logs if all activities were selected for collection.
* **Fixed an issue** where external users with the Syskit Point admin role assigned couldn’t export reports because of a bug with notifications. The notifications are now displayed correctly, enabling the user to download and view the exported files. 
