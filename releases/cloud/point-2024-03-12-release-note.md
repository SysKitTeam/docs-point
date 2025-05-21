---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.44.29
---

# March 12, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Improvements

* **Rules were improved and now support several custom metadata types!**
  * Custom metadata, which you create and apply to your workspaces in Syskit Point or via third-party tools, can now be used in rule conditions.
  * The following custom metadata types are supported: **Text**, **Number**, **Date**, and **Boolean (Yes/No)**.
  * New predefined property is available - **Created On** - enabling you to utilize rules to apply governance policies to workspaces based on their creation date. 
  * [For more details about conditions, available properties, and operators, take a look at the conditions section of the Rules article.](../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **Storage Management for SharePoint Online gets new improvements!**
  * **Views were added** to the Storage Metrics report:
    * **Largest Sites** view sorts the report based on site size.
    * **Potential Savings - Number of Versions** view sorts the report based on the amount of saved storage you can achieve with the Clean Up action, keeping the [defined number of file versions](../../setup/configuration/configure/additional/configure-storage-management.md).
    * **Potential Saving - Old Versions** view sorts the report based on the amount of saved storage you get if running the Clean Up action, deleting file versions older than you defined in [Storage Management settings](../../setup/configuration/configure/additional/configure-storage-management.md). 
  * **Views were added to the Site Storage Metrics report** for both the Files Only and Site Structure layout:
    * **Largest Files** view sorts the report by file size descending.
    * **File Type Views - Office files, Video, Photos, and Other files** help you filter and show the files by their type.
  * **The File Type tile** on the Site Storage Metrics Report is now drillable; when you click one of the displayed categories - Office, Videos, Photos, and Other - the report shows the selected file types. 
  * **Two new columns were added** to the Storage Metrics report and can be selected from the column chooser: **Potential Savings (Old Versions)** and **Potential Savings (Number of Versions)**.

* **The E-mail settings** now include a Weekly Vulnerabilities summary section, where you can configure which users will receive summary e-mails or turn sending of summary e-mails off.  

* **The option to replace an orphaned user** was added to the remove user action dialog. 
  * This option should be used if the orphaned user is also the primary admin of a site, as a user cannot be deleted before being replaced with another user as a primary admin.

* **Show items with unique permissions** filter was added to the **Externally Shared Content report**. 

## Bug Fixes

* **Fixed an issue** with filtering by Users and Activity on the Audit Logs Overview report.

* **Fixed an issue** where the Clean Up File Versions action on the Site Storage Metrics report would fail with the following error: `An exception occurred while deleting the file versions for the file: <guid>. Microsoft.SharePoint.Client.ServerException: Versions of this item cannot be deleted because it is on hold or retention policy.`

* **Various improvements and minor UX fixes are available**.