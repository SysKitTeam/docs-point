---
description: Cleanup & Health Reports provide information on maintaining the health of your tenant. 
---

# Cleanup & Health Reports

Reports in this section **help maintain the health of your tenant**. 

In this article, you can locate information on:

* [Orphaned Users](#orphaned-users) 
* [Orphaned Workspaces](#orphaned-workspaces)


Use the Orphaned Users and Orphaned Workspaces reports to **detect and manage orphaned users and workspaces**.

{% hint style="information" %}
**Please note!**  
You can save custom views for your reports based on your needs and preferences. [For more details on this, take a look at the Save Custom Views article.](../configuration/custom-views.md)
{% endhint %}

## Orphaned Users

The Orphaned Users report displays all orphaned users in your tenant environment. 

Orphaned users are **all the users that have been blocked or deleted from Microsoft Entra ID** and:
* Have access to workspace content, or
* Had access to workspace content and visited the SharePoint site containing that content, but lost access in the meantime
* [For more details on Orphaned Users in Syskit Point, take a look at the FAQ article.](../faq/orphaned-users.md)

This report helps detect and remove blocked/disabled or deleted users from your Microsoft 365 workspaces.

### Generate Orphaned Users Report

* **Click the Reports button** located on the left side of the screen.
* **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
* **Click the Orphaned Users report** to generate the report.


### Report Data

Once the report is successfully generated, the following data will be displayed in the columns:

* **User**; the name of the orphaned user. 
  * When clicked, the User Details page of the selected user is opened.
* **Site**; the name of the workspace where said user is a member. 
  * When clicked, the page will be redirected to the Site Details screen of the selected workspace.
* **Status**; defines whether the user was deleted or disabled in Microsoft Entra ID.
* **Department**; shows which department in the company the Orphaned User operated in. 
  * Only if that data is available from Microsoft Entra ID. 
* **Manager**; shows the manager of the orphaned user.

For more details, there are also additional columns available in the column chooser:

* **Site Type**; defines the workspace by SharePoint Site, Microsoft Team, Microsoft 365 Group, or OneDrive.
* **URL**; a direct link to the selected workspace on the Microsoft 365 tenant.
* **Username**; shows the Microsoft 365 tenant username for the orphaned user.

To group the report results by one or multiple columns, drag a column header to the designated place in the upper left corner of the report. 
  * Doing that provides a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user, you can perform the **Remove User** action and see the additional information, like who blocked it and when the selected user was blocked.

The Orphaned Users report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Orphaned Workspaces

The Orphaned Workspaces report displays all the SharePoint Sites, Microsoft Teams, or Microsoft 365 Groups in your tenant without an active owner or administrator.

* The last owner of those workspaces is either deleted or blocked in Microsoft Entra ID. 

This report helps manage Microsoft 365 workspaces' health and helps ensure there are no abandoned workspaces in your tenant.


### Generate Orphaned Workspaces Report

* **Click the Reports button** located on the left side of the screen.
* **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
* **Click the Orphaned Workspaces report** to generate the report.

### Report Data
Once the report is successfully generated, the following data will be displayed in the columns:

* **Workspace**; the name of the workspace that is orphaned.
* **Blocked Owners**; shows the orphaned user who was the workspace owner.
* **Members**; shows the current number of members in the orphaned workspace.
* **Last Activity Date**; shows the date of the last time an activity was detected on the workspace

There are also additional columns in the column chooser:

* **Detected**; shows when the Orphaned Workspaces policy vulnerability was detected
* **Site Type**; defines the workspace, whether it was a SharePoint Site, Microsoft Team, or Microsoft 365 Group
* **URL**; direct link to the selected workspace on the Microsoft 365 tenant.

Selecting one or multiple workspaces on the report lets you perform the following actions:
* **Add owners** - clicking this opens the confirmation modal where you can add new users as owners for the workspace
* **Archive** - clicking this archives the workspace
* **Delete** - clicking this deletes the workspace 
 

After executing any of the above actions, the selected workspace **is no longer be visible on the Orphaned Workspaces** report.

The Orphaned Workspaces report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.
