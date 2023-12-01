---
description: Cleanup & Health Reports provide information on maintaining the health of your tenant. 
---

# Cleanup & Health Reports

Reports in this section **help maintain the health of your tenant**. 

In this article, you can locate information on:

* [Orphaned Users](#orphaned-users) 
* [Orphaned Workspaces](#orphaned-workspaces)
* [Storage Metrics](#storage-metrics)
* [Site Storage](#site-storage-metrics)
* [File Storage](#file-storage-details)

Use Orphaned Users and Orphaned Workspaces reports to **detect and manage orphaned users and workspaces**, the Storage Metric to view your **tenant-wide storage consumption** and **determine if you're at risk of running out of storage**, and the Site Storage to gain **insight into the storage used by a particular site** and identify any potentially unusual spikes. 

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

## Storage Metrics

The Storage Metrics report displays your tenant-wide storage consumption over time.  

This report lets you check if you are at risk of running out of storage so that you can decrease clutter by optimizing or expanding your storage capability.

### Generate Storage Metrics Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Storage Metrics report** to generate the report.

### Report Data

Once the report is successfully generated, the following information is available:

 * **The Storage Trend chart** shows a graph that depicts your storage usage across time over the last 180 days.
 * **The Tenant Storage box** on the right side shows the percentage of used storage out of the total number of available storage for your tenant.

The following data will be displayed in the columns:

* **Name**; the name of the site.
   * Clicking the name opens the Site Storage report for the selected workspaces.
* **Storage Metrics URL**; the link for the site. 
   * Clicking the link opens the Storage Metrics page of the selected workspaces in SharePoint.
* **Primary Admin**; shows the admins of the site. 
* **Last Activity**; shows the date the last activity on the site happened.
* **Size**; shows the size of the site.
* **Storage Limit**; show the storage limit for the site.
* **% of Limit**; shows the percentage of how close to the storage limit your site is.
* **Alert on % of Limit**; shows the percentage at which you are alerted of being close to your storage limit. 


## Site Storage Metrics

The Site Storage Metrics report displays your storage consumption across your sites over time.  

The report lets you check on the amount of storage used by sites in your tenant. This makes it easier to maintain and organize your sites in order to optimize storage per site.

### Generate Site Storage Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Storage Metrics report** to generate the tenant-wide storage metric report.
 * Under the Largest Sites section, **click the name of the site** you want to generate a report for.


### Report Data

Once the site report is successfully generated, the following information is available:

 * **The Site Trend chart** shows a graph that depicts your site storage usage over time in the last 180 days.
 * **The Site Storage Usage tile** on the right side shows the percentage of used storage out of the total number of available storage for your site.
* **The File Type tile** that shows a chart and list of the types of files in your site and the amount of storage each file takes up. 
* **The File Version Cleanup tile** shows the amount of space you can free up by cleaning up the outdated versions of the site. 

The following data will be displayed in the columns:

* **Name**; the name of the site.
   * Clicking the name opens the Site Details page of the selected workspaces.
   * Clicking the arrow symbol next to the name expands the site details to show all content included in the site.
* **Type**; shows what type of site or content it is.
* **Extension**; shows any extensions to the site or content.
* **Size**; shows the size of the site or content.
* **Size (All Versions)**; shows the amount of storage taken by the site or specific content within the workspace.
* **Size (% of the site storage)**; shows the percentage of storage used by the site or content.
* **File Versions**; shows the versions of the files.
* **Author**; shows the author of the content.
* **Storage Limit**; show the storage limit for the site.
* **Last Activity**; shows the date the last activity on the site or content happened.

**Selecting the site** or one or more of the files included in the site provides the **action to Clean Up File Versions**, located on the right side of the screen under the **Manage section**. 


{% hint style="information" %}
**Please note!** The Clean Up File Versions action is only available in the Governance plan or above. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## File Storage Details

{% hint style="information" %}
**The File Storage Details Report** is only available in the Governance plan or above. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}


The File Storage Details report displays the state of your storage across specific files.  

The report lets you check on the amount of storage used by files in your tenant. This makes it easier to keep track of and organize your content on specific sites in order to optimize storage.

### Generate Site Storage Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Storage Metrics report** to generate the tenant-wide storage metric report.
 * Under the Largest Sites section, **click the name of the site** you want to check the content for.
 * Under the Largest Files & Folders section, **click the arrow next to the folders** to expand them until you reach the list of files within the folder.
 * **Click the name of the file** you want to generate the report for.


### Report Data

Once the site report is successfully generated, the following information is available at the top of the report:

 * **The amount of storage** used by all versions of this file expressed in bytes.
 * **The amount of storage used** that is older than 30 days.
 * **The size of all versions of the files** except the newest 20 versions.

Above the columns of the report, you can find:

 * The file name
 * The author of the file
 * The URL to the site and file
 * The date of the last activity on the file


The following data will be displayed in the columns:

* **Version Number**; the number of the version of the file.
* **Created on**; the date the version of the file was created.
* **Created by**; the person this version of the file was created by. 
* **Size**; shows the size of the version of the file. 

You can also **export this report as a PDF or Excel file**, or **schedule it**, to have it regularly delivered to your email. 

**Selecting one or more of the file versions** provides the **action to Delete Version**, located on the right side of the screen under the **Manage section**. 