---
description: Cleanup & Health Reports provide information on maintaining the health of your tenant environment. 
---

# Cleanup & Health Reports

Reports in this section **help maintain the health of your tenant environment**. 

In this article, you can locate information on [Orphaned Users](#orphaned-users) and [Orphaned Resources](#orphaned-resources).

Use Orphaned Users and Orphaned Resources reports to **detect and manage orphaned users and resources**. 

## Orphaned Users

The Orphaned Users report displays all orphaned users in your tenant environment. 

It shows **all the users that have been disabled/blocked or deleted from Azure Active Directory**. 

This report helps detect and remove the disabled or deleted users from your Microsoft 365 resources.

### Generate Orphaned Users report


 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Users report** to generate the report.


### Report Data

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

## Orphaned Resources

The Orphaned Resources report displays all the SharePoint Sites, Microsoft Teams, or Microsoft 365 groups in your tenant that don't have an active owner or administrator.

  * The last owner of those resources is either deleted or blocked in Azure Active Directory. 

This report helps manage Microsoft 365 resources' health and helps ensure there are no abandoned resources on the tenant.


### Generate Orphaned Resources report

 * **Click the Reports tile**; located on the SysKit Point home screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Orphaned Resources report** to generate the report.

### Report Data
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