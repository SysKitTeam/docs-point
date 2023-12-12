---
description: Cleanup & Health Reports provide information on maintaining the health of your tenant. 
---

# Cleanup & Health Reports

Reports in this section **help maintain the health of your tenant**. 

In this article, you can locate information on:

* [Orphaned Users](#orphaned-users) 
* [Orphaned Workspaces](#orphaned-workspaces)


Use Orphaned Users and Orphaned Workspaces reports to **detect and manage orphaned users and workspaces**.

## Orphaned Users

The Orphaned Users report displays all orphaned users in your tenant environment. 

It shows **all the users that have been blocked or deleted from Azure Active Directory**. 

This report helps detect and remove blocked/disabled or deleted users from your Microsoft 365 workspaces.

### Generate Orphaned Users Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Users report** to generate the report.


### Report Data

Once the report is successfully generated, the following data will be displayed in the columns:

* **User**; the name of the user that is orphaned. 
   * When clicked, the User Details page of the selected user is opened.
* **Site**; the name of the workspace where said user is a member. 
   * When clicked, the page will be redirected to the Site Details screen of the selected workspace.
* **Status**; defines whether the user was deleted or disabled in Azure Active Directory.
* **Department**; shows which department in the company the Orphaned User operated in. 
  * Only if that data is available from Azure Active Directory. 
* **Manager**; shows the manager of the orphaned user.

For more details, there are also additional columns available in the column chooser:

* **Site Type**; defines the workspace by SharePoint Site, Microsoft Team, Microsoft 365 Group, or OneDrive.
* **URL**; a direct link to the selected workspace on the Microsoft 365 tenant.
* **Username**; shows the Microsoft 365 tenant username for the orphaned user.

To group the report results by one or multiple columns, drag a column header to the designated place in the upper left corner of the report. 
  * Doing that provides a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user, you can perform the **Remove User** action and see the additional information, like who blocked it and when was the selected user blocked.

The Orphaned Users report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Orphaned Workspaces

The Orphaned Workspaces report displays all the SharePoint Sites, Microsoft Teams, or Microsoft 365 groups in your tenant that don't have an active owner or administrator.

  * The last owner of those workspaces is either deleted or blocked in Azure Active Directory. 

This report helps manage Microsoft 365 workspaces' health and helps ensure there are no abandoned workspaces in your tenant.


### Generate Orphaned Workspaces Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Workspaces report** to generate the report.

### Report Data
Once the report is successfully generated, the following data will be displayed in the columns:

* **Name**; the name of the workspace that is orphaned.
* **Blocked Admins**; shows the orphaned user who was the workspace owner.
* **Users**; shows the current number of members in the orphaned workspace.

There are also additional columns in the column chooser:

* **Site Type**; defines the workspace, whether it was a SharePoint Site, Microsoft Team, Microsoft 365 Group
* **URL**; direct link to the selected workspace on the Microsoft 365 tenant.


**Change the owner** of the selected workspace by removing the orphaned user and promoting an active user to be the owner of the selected workspace. 
  * This can be done by selecting a row on the report. 

After executing that action, the selected workspace **will no longer be visible on the Orphaned Workspaces** report.

The Orphaned Workspaces report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.
