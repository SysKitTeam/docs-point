---
description: Storage Reports provide information on your tenant-wide storage consumption. 
---

# Storage Reports

In this article, you can locate information on:

* [Storage Metrics](#storage-metrics)
* [Site Storage Metrics](#site-storage-metrics)
* [File Storage Details](#file-storage-details)

Use the Storage Metrics report to view your **tenant-wide storage consumption** and **determine if you're at risk of running out of storage**, the Site Storage Metrics report to gain **insight into the storage used by a particular site** and identify any potentially unusual spikes, and the File Storage Details report to view all of the versions of your selected file with the most important information about each version.

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
 * **Click the Site Storage Metrics report** to generate the report.


### Report Data

Once the site report is successfully generated, the following information is available:

 * **The Site Trend chart** shows a graph that depicts your site storage usage over time in the last 180 days.
 * **The Site Storage Usage tile** on the right side shows the percentage of used storage out of the total number of available storage for your site.
* **The File Type tile** that shows a chart and list of the types of files in your site and the amount of storage each file takes up. 
  * The File types tracked are the following:
    * **Videos**: mp4, mov, wmv, avi, avchd, webm
    * **Photos**: jpeg, jpg, png, gif, raw, psd
    * **Office**: doc, docx, rtf, xls, xlsx, ppt, pptx, pdf, txt, one
    * **Other**: any extensions not categorized in one of the above groups
* **The File Version Cleanup tile** shows the amount of space you can free up by cleaning up the outdated versions of the site. 

The default view for your Site Storage Metrics report is set as Files Only. It shows the list of all files on your site with the following displayed in the columns:

* **Name**; the name of the file.
   * Clicking the name opens the File Storage Details report.
* **Path**; shows the path this file follows in your workspace.
* **Extension**; the type of extension the file has.
* **File Size**; shows the size of the specific file.
* **Total Size**; shows the amount of storage taken by all versions of the file.
* **Size (% of the site storage)**; shows the percentage of storage used by the file.
* **File Versions**; shows the versions of the files.
* **Author**; shows the author of the file.
* **Last Activity**; shows the date the last activity on the file happened.

**Selecting one or more files** provides the **action to Clean Up File Versions**, located on the right side of the screen under the **Manage section**. 

To change your report view, click the *Sort by* button located in the top right corner of the report. 

Selecting the Site Structure view shows the following information:

* **Name**; the name of the site.
   * Clicking the name opens the Site Details page of the selected workspaces.
   * Clicking the arrow symbol next to the name expands the site details to show all content included in the site.
* **Type**; shows what type of site or content it is.
* **Extension**; shows any extensions to the site or content.
* **File Size**; shows the size of the specific file.
* **Total Size**; shows the amount of storage taken by the site or specific content within the workspace.
* **Size (% of the site storage)**; shows the percentage of storage used by the site or content.
* **File Versions**; shows the versions of the files.
* **Author**; shows the author of the content.
* **Last Activity**; shows the date the last activity on the site or content happened.

**Selecting the site** or one or more of the files included in the site provides the **action to Clean Up File Versions**, located on the right side of the screen under the **Manage section**. 


{% hint style="information" %}
**Please note!** The Clean Up File Versions action is only available in the Governance plan or above. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## File Storage Details

{% hint style="information" %}
**The File Storage Details Report** is only available in the Governance plan or above. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

The File Storage Details report displays all of the versions of the selected file with the most important information about each of the versions.

The report lets you check on the amount of storage used by files in your tenant. This makes it easier to keep track of and organize your content on specific sites in order to optimize storage.

### Generate File Storage Details Report

 * **Click the Reports button** located on the left side of the screen.
 * **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
 * **Click the Site Storage Metrics report** to generate the report.
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