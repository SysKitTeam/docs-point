---
description: Access reports provide information about the users' permissions and memberships across content within the tenant.
---

# Access Reports

This article contains information on eight access reports available through the **Report Center**:

* [Permissions Matrix Report](#permissions-matrix-report)
* [User Access Report](#user-access-report)
* [Unique Permissions Report](#unique-permissions-report)
* [Group Memberships Report](#group-memberships-report)
* [Group Access Report](#group-access-report)
* [Users with Privileged Access Report](#users-with-privileged-access-report)
* [SharePoint Groups Report](#sharepoint-groups-report)
* [Microsoft Teams with Private Channels Report](#microsoft-teams-with-private-channels-report)


## Permissions Matrix Report

The Permissions Matrix report gives insight into who has access to which content across your environment.

It allows viewing site hierarchy and permissions down to the document level.

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select the Permissions Reports category in the filter** you can find in the upper left corner.
* **Click the Permissions Matrix report tile** to be redirected to the Selection screen.

This report can also be accessed from:

* **The Sites Overview screen and The Microsoft Teams & Groups Overview screen**; select the resource and click the suitable action in the side panel.
* **The details screen** of specific resource
* **Other reports** available in Syskit Point
   * For example, User Access Report, Externally Shared Content Report, Unique Permissions Report

### Selection & Filters

After clicking the **Permissions Matrix** report tile, the Selection step opens where you can:
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Select various filter options** to refine data that will show once the report is generated
   * **see permissions for users and groups** that are:
      * internal, external, or both
      * licensed, unlicensed, or both
      * allowed to sign in, blocked from signing in, or both
   * **show items with**:
      * unique permissions only, or all (with permission inheritance)
   * **show content down to**:
      * subsites, document libraries & lists, folders, or files & folders
   * **show or hide security group members**
* **Click the Run Report button** once the selected parameters have been set.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource
* **Permissions levels**; depending on availability, several are shown in your environment.
   * For example **Full Control, Design, Edit, Contribute, Read, Restricted View**
      
There are also additional columns in the **column chooser**, located in the top right corner of the report:
      
* **URL**
* **Object Type**
* **Email**
* **Principal Type**
* **Is External User**
* **Is Deleted**
* **Is Licensed**
* **Sign-in Status**

### Report Actions

This report provides the ability to remove and manage users' access directly. 

Select the item or user and choose the available action from the side panel.

Some of the available actions are:

*  **Remove sharing link**
*  **Remove user access**
*  **Edit user permissions**
*  **Delete unique permissions**

The Permissions Matrix report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## User Access Report

With this report, you will see where exactly the user has access and if permissions are given directly or through Microsoft 365 Group, Security group, or SharePoint group.

### Generate Report

To generate the User Access report:

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the User Access report** to be redirected to the options screen.
* **Select one or multiple users** to include in the report.
   * Click the checkboxes on the left side of the screen. 
* **Click the Run Report button**.


This report can also be accessed from:

* **The Users Overview screen**; select the user and click the proper action in the side panel
* **The details screen** of specific resource; Users report on the sites details screen
* **Other reports available** in Syskit Point
   * For example, the External Users report

### Report Data

The default columns displayed in the report are:
      
* **Name** of the user/resource
* **Access**; the permissions level of the user
* **Given Through**
* **Details**; shows where the user received the permission from
      
The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **URL**
* **Object Type**
* **Site Type**

There is a **toggle button** above the grid that changes the data to **show only publicly accessible content**.

### Report Actions

Users' access can be **removed and managed** directly from this report. **Select the item or user** and choose the available action from the side panel.

Some of the actions are:

*  **Remove user access**
*  **Edit user permissions**
*  **Remove user/group from SharePoint group**
*  **Change admins**

The User Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Unique Permissions Report

The Unique Permissions report shows a list of objects (sites, lists, folders, files, etc.) with unique permissions (objects that do not inherit permissions).

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the Unique Permissions report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.


This report can also be accessed from:

* **Sites Overview screen and Microsoft Teams & Groups Overview screen**; select the resource and click the proper action in the side panel.
* **The details screen** of a specific resource.
* **Other reports available** in Syskit Point. 
  * For example, Permissions Matrix report, Externally Shared Content report, and User Access report.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource
* **URL**
* **Last Modified**
* **Created On**

There are additional columns available in the **column chooser**, located in the top right corner of the report:
      
* **Object Type**
* **Unique Permissions**


### Report Actions

Select the resource and choose the available action from the side panel.

Available actions are:

*  **Stop Sharing**; for OneDrive
*   **Delete Unique Permissions**; for other resources

The Unique Permissions report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Group Memberships Report

The Group Memberships report shows all members, owners, and guest users across your:
* **Microsoft Teams**
* **Microsoft 365 groups**
* **Security Groups**
* **Security Groups (On-Premises)**
* **Mail-Enabled Security Groups**
* **Distribution Lists**
* **Distribution Lists (On-Premises)**


The views available when generating the report are the following:
  * Microsoft 365 Groups
  * Microsoft Teams
  * Inactive Groups
  * Archived Groups
  * Security Groups
  * Security Groups (On-Premises)
  * Mail-Enabled Security Groups
  * Distribution Lists
  * Distribution Lists (On-Premises)
  * Recently Created Groups
  * Deleted Groups
  * Externally Shared Groups
  * Teams with Private Channels
  * Teams with Shared Channels
  * Teams and Groups with Only One Owner
  * Teams and Groups with Too Many Owners

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the Group Memberships report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.

This report can also be accessed from:

* **Microsoft Teams & Groups Overview screen**; select the resource and click the proper action in the side panel
* **Teams/Groups details screen**; Members tile

### Report Data

The default columns displayed in the report are:
      
* **Display Name** of the resource
* **Username**
* **Role**
* **Last Logged In**
      
There are additional columns available in the **column chooser**, located in the top right corner of the report:
      
* **Email**
* **Department**
* **State or Province**
* **City**
* **Country or Region**


### Report Actions

Remove and manage users' access directly from this report. 

Select the item or user and choose the available action from the side panel.

The available actions are:

*  **Change Owners**
*  **Add Owners/Members**
*  **Change to Member/Promote to Owner**
*   **Remove from Group**


The Group Memberships report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Group Access Report

The Group Access report provides insight into each security group's permissions and access rights. 
  * For example, with this report, you can detect where "Everyone" and "Everyone except external users" groups have access.

[For more details on how to Manage Group Access, take a look at this article.](../point-collaborators/manage-group-access.md) 

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the Group Access report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.

This report can also be accessed from the SharePoint Groups report.

### Report Data

The default columns displayed in the report are:

* **Name** of the user/resource
* **Group Type**
* **Access**; permissions level of the user
* **Given Through**
* **Details**; shows where the user received the permission from

      
There are additional columns in the **column chooser**, located in the top right corner of the report:
      
* **URL**
* **Object Type**
* **Site Type**


### Report Actions

Users' access can be removed and managed directly from this report. Select the item or user and choose the available action from the side panel.

The available actions are:

*  **Add Owners/Members**
*  **Change to Member/Promote to Owner**
*  **Remove from Group**
*  **Remove User Access**

The Group Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Users with Privileged Access Report

The Users with Privileged Access report shows all users with privileged access on the tenant:
  * Users in Global administrator roles
  * Exchange admins
  * Teams admins
  * Compliance admins
  * And more 
  
  It also detects SharePoint site admins and users with full control permission levels.

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the Users with Privileged Access report** to be redirected to the options screen.
* **Select the type of users** with privileged access for which the report should be generated.
   * Select one or more options from the available drop-down menu. 
* **Click the Run Report button**.


### Report Data

The default columns displayed in the report are:

* **Name** of the user/resource
* **URL**
* **Role**
* **Sign-in Status**


There are additional columns in the **column chooser**, located in the top right corner of the report:
      
* **Email**
* **Is External User**
* **Privacy**
* **Site Type**


### Report Actions

Users' access can be removed and managed directly from this report. Select the item or user and choose the available action from the side panel.

The available action for this report is choosing to **Change Owners**.

The Users with Privileged Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## SharePoint Groups Report

The SharePoint Groups report provides a list of all SharePoint groups and their members across the selected groups, teams, and sites.

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Permission Reports in the filter**; it can be found in the upper left corner.
* **Click the SharePoint Groups report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Select one or more options from the available drop-down menu. 
* **Click the Run Report button**.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource
* **URL**
* **Access**

There is one additional column in the **column chooser**, located in the top right corner of the report:
      
* **Email**

### Report Actions

There is no available action for this report.

The SharePoint Groups report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Microsoft Teams with Private Channels Report

The Microsoft Teams with Private Channels report **shows all Microsoft Teams with private channels**, who created them, and who the members that have access to this content are.

### Generate Report

* **Click the Reports tile**; it is located on the Syskit Point home screen.
* **Select Microsoft Teams and Groups in the filter**; it can be found in the upper left corner.
* **Click the Users with Privileged Access report** 
* **Click the Microsoft Teams with Private Channels** to generate the report.

### Report Data

The default columns displayed in the report are:

* **Name** of the user/resource
* **Role**
      
There are also additional columns in the **column chooser**,  located in the top right corner of the report:
      
* **Email**
* **URL**
* **Is External User**


### Report Actions

There is no available action for this report.

The Microsoft Teams with Private Channels report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Other Reports

Several other reports can also be located through the **Permission Reports filter in the Report Center**: 

* [Externally Shared Content](external-sharing-reports.md#externally-shared-content)
* [Sharing Links](external-sharing-reports.md#sharing-links)
* [Site Permissions Changes Report](audit-reports.md#site-permissions-changes-report)
* [User Activity Report](audit-reports.md#user-activity-report)