---
description: Inventory reports provide a detailed overview of the reports available for Sites, Users, and Microsoft Teams & Groups. 
---

# Inventory Reports

In this article, you'll find a list of reports that will provide an overview of your tenant inventory filtered through **Sites, Users, and Microsoft Teams & Group**. 

They are all available to generate in the **Report Center**:

* [Sites Reports](#sites-reports)
* [Users Reports](#users-reports)
* [Microsoft Teams & Groups Reports](#microsoft-teams-and-groups-reports)

## Sites Reports

Reports in this article provide **insight into everything you need to know about your sites** usage and will help you easily manage different options for sites. 

### Site Permissions Changes Report

This report provides insight into details for any permissions changes on selected site(s). 
   * If somebody removed a member from a Team or broke sharing inheritance, you can see it here.


#### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Site Permissions Changes report** to generate the report.

#### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**

There are no additional columns available in the **column chooser**.

To see more details on specific sites, select the individual site(s) or mark them all, select the number of days the report should cover, and click **Run Report** to generate.


#### Report Actions

The Site Permissions Changes report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.


### Site Analytics Report

Site Analytics report provides an overview of all sites; it shows the total hits each site had in the last seven days, the highest number of unique daily visitors, and other details.

#### Generate Site Analytics Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Site Analytics report** to generate the report.

#### Analytics Report Data 

Once the report has been successfully generated, the following data will be available in the columns:

* **Site Name**; shows the site's name in the column. 
   * When selecting a site, the charts for that site showing Site Hits, Site Visitors, and Site Storage will be visible at the bottom of the screen.
* **URL**; provides a direct link to the site on the Microsoft 365 tenant.
* **Total Hits**; shows the total number of hits the site had in the last seven days.
* **Visitors**; shows the total number of unique visitors to the site.
* **Size**; shows the total size of the site.
* **Last Content Modified**; shows the date the site was last modified.

For a detailed insight into data about a specific site, click on the Site Name. 
  * The page that opens will show tiles with the site's General Info, Overview, Content, Permissions, Site Activity, User Activity, Documents Activity, and Pages Activity.

The analytics can show data from the last seven days, 14 days, 30 days, or a chosen custom date period.

### Site Structure Report

The Site Structure report provides the option to check the hierarchical structure for sites down to the file level. 

Use this report to display the structure of the SharePoint environment. 

  * The report can also be exported, with the ability to delete unique permissions or stop inheriting permissions.

#### Generate Site Structure Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Site Structure report** to be redirected to the selection screen.
* **Select one or multiple sites** for which to generate the report. 
  * Once selected, there are several options available to show content down to; Subsites, Document libraries & lists, Folders and Files, and folders. 
    * These are available in the dropdown menu from the additional filter on the bottom. 
* **Click on the Run Report button** when finished with the selection.

#### Site Structure Report Data

Once the report has been successfully generated, the following data will be available in the columns:

* **Name**; shows the site's name and all the structure's content down to files & folders.
* **URL**; clicking on it redirects to the site's exact location or the following folders, subsites, etc.
* **Last Modified**; shows the exact date the site was last modified.
* **Created On**; shows the exact date when someone created the site or some of its structure.

The Site Structure report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### File and Page Activities Report

View who accessed and edited files/folders in your environment, as well as who visited your sites and when.

#### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the File and Page Activities report** to generate the report.

#### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details on specific users, select the individual user(s) or mark them all, select the number of days the report should cover, set the other preferred parameters, and click **Run Report** to generate.


#### Report Actions

The File and Page Activities report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.


## Users Reports

These reports provide a **detailed overview of all users' activities** in your environment. They enable you to quickly detect and troubleshoot potential issues, security breaches, or suspicious behavior. 

All of the reports can be found by clicking the **Reports tile** and selecting **Users** in the left side filter. 


### External Users Report

This report contains all external users (registered in your tenant and outside your tenant) who have access to sites, Microsoft 365 Groups, Microsoft Teams, OneDrive, and Private Channels.

#### Generate Report

**Access this report from the Report Center**:

 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select the Users category in the filter** located in the upper left corner.
 * **Click the External Users tile** to generate the report.

 The report generates immediately without a Selection step.

#### Report Data

The default columns displayed in the report are:
    
* **Name** of the user
* **Site Name**
* **Email**
* **Username**
* **Domain**
* **Last Logged In** DateTime
    
There is one additional column available in the column chooser.
  * **Site Type**; shows the type of workspace for resource

#### Report Actions

The actions that can be taken here are the following:

* **Remove access for users** from a resource
* **Generate User Access and User Activity reports**
* **View additional information about who added the external user inside your Microsoft 365 environment**

The External Users report can be **exported as a PDF or XLSX file**. There is also the **option to schedule the report**.


### User Access Report

With this report, you will see where exactly the user has access and if permissions are given directly or through Microsoft 365 Group, Security group, or SharePoint group.

#### Generate Report

To generate the User Access report:

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Users in the filter**; it can be found in the upper left corner.
* **Click the User Access report** to be redirected to the options screen.
* **Select one or multiple users** to include in the report.
   * Click the checkboxes on the left side of the screen. 
* **Click the Run Report button**.

This report can also be accessed from:

* **The Users Overview screen**; select the user and click on the proper action in the side panel
* **The details screen** of specific resource; Users report on the sites details screen
* **Other reports available** in SysKit Point
   * For example, the External Users report

#### Report Data

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

#### Report Actions

Users' access can be **removed and managed** directly from this report. **Select the item or user** and choose the available action from the side panel.

Some of the actions are:

*  **Remove user access**
*  **Edit user permissions**
*  **Remove user/group from SharePoint group**
*  **Change admins**

The User Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### User Activity Report

This report shows all actions performed by internal and external users in your environment. 

Selecting a single user provides insight into what they have been doing in the environment, from logging in to viewing a file. 
   * If the admin or manager added or removed permissions for a particular user, this would also be shown in this report.

#### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Users in the filter**; it can be found in the upper left corner.
 * **Click the User Activity report** to generate the report.

#### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details on specific users, select the individual user(s) or mark them all, select the amount of days the report should cover, and click **Run Report** to generate.

#### Report Actions

The User Activity report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.


### Orphaned Users

The Orphaned Users report displays all orphaned users in your tenant environment. 

It shows **all the users that have been disabled/blocked or deleted from Azure Active Directory**. 

This report helps detect and remove the disabled or deleted users from your Microsoft 365 resources.

#### Generate Orphaned Users report

 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select Users in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Users report** to generate the report.

#### Report Data

Once the report is successfully generated, the following data will be displayed in the columns:

* **User**; the name of the user that is orphaned. 
   * When clicked, the User Details page of the selected user is opened.
* **Site**; the name of the resource where said user is a member. 
   * When clicked, the page will be redirected to the Site Details screen of the selected resource.
* **Status**; defines whether the user was deleted or disabled in Azure Active Directory.
* **Department**; shows which department in the company the Orphaned User operated in. 
  * Only if that data is available from Azure Active Directory. 
* **Manager**; shows who the manager was of the orphaned user.

For more details, there are also additional columns available in the column chooser:

* **Site Type**; defines the resource by SharePoint Site, Microsoft Team, Microsoft 365 Group, or OneDrive.
* **URL**; a direct link to the selected resource on the Microsoft 365 tenant.
* **Username**; shows the Microsoft 365 tenant username for the orphaned user.

To group the report results by one or multiple columns, drag a column header to the designated place in the upper left corner of the report. 
  * Doing that provides a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user, you can perform the Remove User action and see the additional information, like who disabled it and when was the selected user disabled.

The Orphaned Users report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### Users with Privileged Access Report

The Users with Privileged Access report shows all users with privileged access on the tenant:
  * Users in Global administrator roles
  * Exchange admins
  * Teams admins
  * Compliance admins
  * And more 
  
  It also detects SharePoint site admins and users with full control permission levels.

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Users in the filter**; it can be found in the upper left corner.
* **Click the Users with Privileged Access report** to be redirected to the options screen.
* **Select the type of users** with privileged access for which the report should be generated.
   * Select one or more options from the available drop-down menu. 
* **Click the Run Report button**.

#### Report Data

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

#### Report Actions

Users' access can be removed and managed directly from this report. Select the item or user and choose the available action from the side panel.

The available action for this report is choosing to **Change Owners**.

The Users with Privileged Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### Meeting Interactions Report

The Meeting Interactions report allows the exploration of how people interact in Microsoft Teams via 1:1 calls and meetings.

This report can be used to see how users are adopting Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

#### Generate Meeting Interactions Report

* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Users in the filter**; located in the upper left corner.
* **Click the Meeting Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time period for the report. 
* **Click the Run Report button**.

#### Meeting Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via 1:1 calls or meetings and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

### Conversation Interactions Report

Conversation Interactions report provides the ability to **explore how people interact with each other** via chat messages in Microsoft Teams. 

Use this report to track the adoption of Microsoft Teams in your environment.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

#### Generate Conversation Interactions Report

* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Users in the filter**; located in the upper left corner.
* **Click the Conversation Interactions report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time period for the report. 
* **Click the Run Report button**.

### Conversation Interactions Report Data

When the report is generated, the connection tree of all users in the selected environment can be seen, as well as whether they interact via Microsoft Teams chat messages and how often they interact. The Activity tab can also be seen, where the most active users in that department are shown.

#### Network Interaction Details Report

Network Interaction Details report provides insight into details about members' interactions via meetings or conversations.

To see this report, the Adoption and Analytics module needs to be installed in SysKit Point.

#### Generate Network Interaction Details Report


* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Users in the filter**; located in the upper left corner.
* **Click the Network Interaction Details report** to be redirected to the **Selections screen**.
  * **Select which company department** the report should be generated for; in the bottom filter, select the time period for the report. 
* **Click the Run Report button**.

#### Network Interaction Details Report Data

Once the report is generated, the details about members' interactions through meetings or conversations can be seen. 

The Network Interaction Details report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

Network Interaction Details report is a tree-type style report that shows the user as a Parent branch and all other users they interacted with as a Child branch. 

The report shows departments for each user to enable seeing which departments are interacting with each other. 

It also shows the amount of calls and chat messages users exchanged.


## Microsoft Teams and Groups Reports

Reports in this article provide **detailed insight into data related to your Microsoft Teams and Groups** usage and help you easily manage them.

All of the reports can be found by clicking the **Reports tile** and selecting **Microsoft Teams & Groups** in the left side filter. 

### Permissions Matrix Report

The Permissions Matrix report gives insight into who has access to which content across your environment.

It allows viewing site hierarchy and permissions down to the document level.

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups category in the filter** you can find in the upper left corner.
* **Click the Permissions Matrix report tile** to be redirected to the Selection screen.

This report can also be accessed from:

* **The Sites Overview screen and The Microsoft Teams & Groups Overview screen**; select the resource and click the suitable action in the side panel.
* **The details screen** of specific resource
* **Other reports** available in SysKit Point
   * For example, User Access Report, Externally Shared Content Report, Unique Permissions Report

#### Selection & Filters

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
* **Click the Run Report button ** once the selected parameters have been set.

#### Report Data

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

#### Report Actions

This report provides the ability to remove and manage users' access directly. 

Select the item or user and choose the available action from the side panel.

Some of the available actions are:

*  **Remove sharing link**
*  **Remove user access**
*  **Edit user permissions**
*  **Delete unique permissions**

The Permissions Matrix report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

### Externally Shared Content Report

The Externally Shared Content report provides insight into the content in your tenant that is being shared with external users via sharing links or by granting them direct access.

#### Selection & Filters

After clicking the **Externally Shared Content** report tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, or OneDrive) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Choose the content level to be shown** once prompted.
  * The option to select between the following options will appear:
    * **subsites**
    * **document libraries & lists**
    * **folders**
    * **files & folders**
* **Click the Run Report button** to generate the report.

#### Report Data

The generated report displays all externally shared content based on the workspace and filter selection. 

The following columns are visible:    
* **Name**; the workspace, content, groups, and external users are shown in the tree grid.
* **Permission levels**; the level of access for external users over the content. 
  * For example: **Full Control**, **Design**, **Read**, **Edit**, **Contribute** or custom permission levels
    
Find and display additional columns in the **column chooser**, located in the top right corner, next to the search bar.

The options available to select are:

* **URL**
* **Object Type**
* **Email**
* **Principal Type**
* **Is External User**
* **Is Deleted**
* **Is Licensed**
* **Sign-in Status**
* **option to hide or show a specific permission level**

#### Report Actions

When the report is displayed, the following actions can be completed by clicking the corresponding link from the right-side panel:

* **Schedule the Report**; set up a recurring delivery
* **Export the report** as an **XLSX** or a **PDF file**
* **Open related reports**

**Access can be managed directly from the report** by selecting an object or a user and choosing one of the available actions from the side panel.

The following access management actions can be performed:
* **Change Owners/Admins**
* **Remove Sharing Links**
* **Grant**, **Remove**, and **Edit** user access
* **Break** and **Restore** permission inheritance
* **Add** users to groups, **Remove** users from groups, and **Delete** SharePoint groups


### Unique Permissions Report

The Unique Permissions report shows a list of objects (sites, lists, folders, files, etc.) with unique permissions (objects that do not inherit permissions).

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
* **Click the Unique Permissions report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.

This report can also be accessed from:

* **Sites Overview screen and Microsoft Teams & Groups Overview screen**; select the resource and click the proper action in the side panel.
* **The details screen** of a specific resource.
* **Other reports available** in SysKit Point. 
  * For example, Permissions Matrix report, Externally Shared Content report, and User Access report.

#### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource
* **URL**
* **Last Modified**
* **Created On**

There are additional columns available in the **column chooser**, located in the top right corner of the report:
      
* **Object Type**
* **Unique Permissions**

#### Report Actions

Select the resource and choose the available action from the side panel.

Available actions are:

*  **Stop Sharing**; for OneDrive
*   **Delete Unique Permissions**; for other resources

The Unique Permissions report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

### Sharing Links 

The Sharing Links report helps **identify all the shared files and folders along with their sharing links**. 

Use this to easily **locate and remove external users** when necessary.

#### Generate Report

This report can be accessed from:

* The **details screen of specific resource** by clicking the **Sharing Links tile**
* The **Report Center**
* **Other reports** available in SysKit Point 
  * For example, **Permissions Matrix report, Externally Shared Content report, and Unique Permissions report**

To generate this report from the Report Center:
 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select the Microsoft Teams & Groups category in the filter** located in the upper left corner.
 * **Click the Sharing Links tile** to generate the report.

#### Selection & Filters

After clicking the **Sharing Links** report tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, or OneDrive) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Choose the link type to show** on the generated report.
  * You can choose between the following link types:
    * **people in company can view**
    * **people in company can edit**
    * **anyone can view**
    * **anyone can edit**
    * **specific people can view or edit**
* **Click the Run Report button** to generate the report.

#### Report Data

There are default columns displayed in the report which list the following:
    
* **Name** of the resource
* **URL**
* **Link**
* **Link Type**
* **Created On**
* **Expiration Date**

#### Report Actions

The following actions can be performed within the report:
* **Remove sharing link**
* **Remove user access**
* **Open related reports**

The Sharing Links report can be **exported as a PDF or XLSX file**. There is also the **option to schedule the report**.


### Group Memberships Report

The Group Memberships report shows all members, owners, and guest users across your Microsoft Teams and Microsoft 365 groups. 

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
* **Click the Group Memberships report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.

This report can also be accessed from:

* **Microsoft Teams & Groups Overview screen**; select the resource and click on the proper action in the side panel
* **Teams/Groups details screen**; Members tile

#### Report Data

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

#### Report Actions

Remove and manage users' access directly from this report. 

Select the item or user and choose the available action from the side panel.

The available actions are:

*  **Change Owners**
*  **Add Owners/Members**
*  **Change to Member/Promote to Owner**
*   **Remove from Group**


The Group Memberships report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### Orphaned Resources

The Orphaned Resources report displays all the SharePoint Sites, Microsoft Teams, or Microsoft 365 groups in your tenant that don't have an active owner or administrator.

  * The last owner of those resources is either deleted or blocked in Azure Active Directory. 

This report helps manage Microsoft 365 resources' health and helps ensure there are no abandoned resources on the tenant.

#### Generate Orphaned Resources report

 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Resources report** to generate the report.

#### Report Data
Once the report is successfully generated, the following data will be displayed in the columns:

* **Name**; the name of the resource that is orphaned.
* **Blocked Admins**; shows the orphaned user who was the resource owner.
* **Users**; shows the current number of members in the orphaned resource.

There are also additional columns in the column chooser:

* **Site Type**; defines the resource, whether it was a SharePoint Site, Microsoft Team, Microsoft 365 Group
* **URL**; direct link to the selected resource on the Microsoft 365 tenant.

**Change the owner** of the selected resource by removing the orphaned user and promoting an active user to be the owner of the selected resource. 
  * This can be done by selecting a row on the report. 

After executing that action, the selected resource **will no longer be visible on the Orphaned Resources** report.

The Orphaned Resources report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

### Microsoft Teams with Private Channels Report

The Microsoft Teams with Private Channels report **shows all Microsoft Teams with private channels**, who created them, and who the members that have access to this content are.

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
* **Click the Users with Privileged Access report** 
* **Click the Microsoft Teams with Private Channels** to generate the report.

#### Report Data

The default columns displayed in the report are:

* **Name** of the user/resource
* **Role**
      
There are also additional columns in the **column chooser**,  located in the top right corner of the report:
      
* **Email**
* **URL**
* **Is External User**


#### Report Actions

There is no available action for this report.

The Microsoft Teams with Private Channels report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


### Inactive Content Report

The Inactive Content report provides the ability to quickly detect unused sites, Microsoft 365 Groups, and Microsoft Teams in your Microsoft 365 environment. 

This report can be used to stay up to date with any unused resources in the environment in order to keep it clean and healthy.

#### Generate Inactive Content Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
* **Click the Inactive Content report** to be redirected to the options screen.
  * **Select which type of resource** the report should be generated for (Site, Microsoft 365 Group, or Microsoft Team)
* **Click the Run Report button**.

#### Inactive Content Report Data

When the report has been successfully generated, all of the currently inactive resources in your environment can be found there. 

The Inactive Content report data can be **exported into PDF and XLSX formats**.

Select one or multiple resources to perform Lifecycle Management actions on those resources:

 * Choose to **Keep, Archive or Delete** the resources or ask the **owner to Renew** the resources. 

When any of those actions are completed on a resource, it will no longer be visible on the Inactive Content Report.

When looking at the generated reports, the following columns can be found:

- **Name**; shows the name of the inactive resource.
- **SharePoint, Exchange, Teams, and Yammer activity column;** shows inactivity based on the last date any activity was made on the resource.
- **Lifecycle Management**; shows if the site was monitored for activity by SysKit Point Lifecycle Management.


### Group Access Report

The Group Access report provides insight into each security group's permissions and access rights. 
  * For example, with this report, you can detect where "Everyone" and "Everyone except external users" groups have access.

#### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Microsoft Teams & Groups in the filter**; it can be found in the upper left corner.
* **Click the Group Access report** to be redirected to the options screen.
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Run Report button**.

This report can also be accessed from the SharePoint Groups report.

#### Report Data

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


#### Report Actions

Users' access can be removed and managed directly from this report. Select the item or user and choose the available action from the side panel.

The available actions are:

*  **Add Owners/Members**
*  **Change to Member/Promote to Owner**
*  **Remove from Group**
*  **Remove User Access**

The Group Access report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.
