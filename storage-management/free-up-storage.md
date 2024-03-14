---
description: This article explains how to free up your storage on SharePoint sites.
---

# Free Up Storage

{% hint style="information" %}
**Please note!** If a certain site **has a hold or retention policy applied**, the Clean Up Storage action fails for that workspace, and storage is not freed. If a certain file has a hold or retention policy applied, that file is not cleaned up or deleted. 
{% endhint %}

To **free up storage directly in Syskit Point**, generate the tenant-wide **Storage Metrics Report** in the following way:
 
 * **Click the View All** button on the Storage tile located on the dashboard.
   * Alternatively, **click the Reports button** located on the left side of the screen, **select Cleanup & Health Check** in the filter, and **click the Storage Metrics report**.

Once the Storage Metrics Report is generated, under the Largest Sites section, **click the name of the site** you want to remove storage from. This opens the **Site Storage Metrics report (1)**. 

There are three different ways to clean up the storage space across your sites. 

 * In the File Version Cleanup tile, you can:
   * **Choose to Clean Up file versions older than X month(s) (2)**
   * **Choose to Clean Up all but the last X file version(s) (3)**
     * The exact numbers shown here can be customized in your Syskit Point settings; for more details on this, take a look at the [Configure Storage Management article](../configuration/configure-storage-management.md)

  * **Selecting the site (4)**, or the files included in the site and clicking the **Clean Up File Versions button (5)**, located on the right side of the screen under the **Manage section**. 

![Site Storage Metrics Report- Clean Up File Versions](../.gitbook/assets/optimize-storage-site-storage-metrics-report-cleanup.png)

Once you click the **Clean Up button** on the File Version Cleanup tile or the **Clean Up File Versions button** in the Manage section, a **Clean Up File Versions pop-up opens (1)**.
  * To premanantly delete the file(s), check the **Permanantly delete checkbox (2)**; doing this instantly frees up space for your site.
    * If the checkbox is not selected, the file(s) are sent to the site's Recycle bin for the defined retention period; doing this does not instantly free up space for your site, and the space is only cleared once the file(s) are removed from recycle bin. 
  * **Type Clean Up (3)** in the the available space to proceed.
  * **Click the Clean Up button (4)** to finalize.

![Clean Up File Versions - Confirm](../.gitbook/assets/optimize-storage-site-storage-cleanup.png)

You can complete this action on the File Storage details screen as well. To navigate there, repeat the above steps until you reach the Site Storage Metrics report. 

From there:

 * Under the Largest Files & Folders section and **click the name of the file** you want to generate the File Details report for.
 * Once the report is generated, **select one or more of the file versions (1)**, and the **action to Delete Version (2)** is then available on the right side of the screen under the **Manage section**. 

![File Storage Details - Delete Version](../.gitbook/assets/optimize-storage-file-storage-details-delete.png)

{% hint style="information" %}
**Hint!** The latest version is never deleted, even if you select all versions and run the Delete Version or Clean Up File Versions action.
{% endhint %}

You can also remove storage directly from SharePoint by clicking the **link in the Storage Metrics URL column**. 
  * The SharePoint site-specific Storage Metrics report opens in your browser.