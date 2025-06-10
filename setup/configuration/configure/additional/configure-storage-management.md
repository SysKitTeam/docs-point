---
description:  This article describes how you can set up Storage Management in Syskit Point. 
---

# Configure Storage Management in Syskit Point

The Syskit Point Storage Management for SharePoint Online feature helps you keep your environment clutter-free, optimize the usage of your storage, and gain insight into how your storage is distributed across your tenant.

For more information on this feature, [read the Storage Management article](../../../../storage-management/storage-reports.md). 

To configure the Storage Management feature within Syskit Point, complete the following steps:

* **Go to the Settings (1)** of your Syskit Point
* Under the General section, **click the Storage Management link (2)**
*  The **Collect storage data checkbox (3)** is turned on by default
  * When the collecting storage data checkbox is selected, Syskit Point collects file sizes, file extensions, and file versions. 
  * If you deselect the check box and turn off collecting storage data, Syskit Point does not collect file sizes, file extensions, or file versions, and no new storage data is reflected in Syskit Point.
  * Site size history is collected even when the checkbox is deselected. 
* [Storage Versioning Limits (4) are described in detail in the Storage Versioning Limits article.](../../../../storage-management/versioning-limits.md)

![Storage Management Settings](../../../../.gitbook/assets/configure-storage-management-collect-storage-data.png)

{% hint style="information" %}
**Please note!** When the _Collect storage data_ checkbox is deselected and collecting storage data is turned off, you will not be able to access any of the Storage Management reports.
{% endhint %}

## Storage Reporting

When storage management is configured, you can also customize your storage reports in Syskit Point by setting the following:
* **Show how much I can save if I keep the latest X file versions (5)** - here, you can set a number in place of X depending on how many of the latest file versions you want to keep when trying to declutter your workspaces
* **Show how much I can save if I delete file versions older than X months (6)** - here, you can select the number of months that the file version should be older than when considering cleaning up your site and deleting previous versions
* These values can be found in tiles on: 
  * The [Site Storage Metrics](../../../../storage-management/storage-reports.md#site-storage-metrics) report, where you can use them to also instantly clean up your site, along with being shown the amount of storage that will be freed up.
  * The [File Storage Details](../../../../storage-management/storage-reports.md#file-storage-details) report, where you can use the tiles to filter between the versions of the files before deciding which to delete. 

![Storage Management Settings - Reporting & Data Retention](../../../../.gitbook/assets/configure-storage-management-reporting-and-data-retention.png)

## Storage Data Retention

In this section, you can define how long you want to keep the storage-related analytics data in Syskit Point. 
* **Enter the number of months (7)** you want the storage analytics data to be stored
  * **Syskit Point regularly checks for and deletes historical storage analytics data - Site size data - that is older than defined in settings**
  * By default, data is stored for 12 months
  * Site size data is used to show Storage Trend and Site Trend graphs on the Storage Metrics and Site Storage Metrics reports

Once finished, **click Save (8)** to save your storage management preferences. 

## Related Articles

* [Configure Your Environment for Storage Management](../additional/configure-point-for-storage-management.md)
* [Free Up Storage](../../../../storage-management/free-up-storage.md)
* [Configure Tenant Storage Limit Policy](../../../../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Tenant Storage Security & Compliance Check](../../../../governance-and-automation/security-compliance-checks/tenant-storage.md)
* [Resolve Tenant Storage Limit Task](../../../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Metrics Report](../../../../storage-management/storage-reports.md)
* [Site Storage Metrics Report](../../../../storage-management/storage-reports.md#site-storage-metrics)
* [File Storage Details Report](../../../../storage-management/storage-reports.md#file-storage-details)
