---
description:  This article describes how you can set up Storage Management in Syskit Point. 
---

# Storage Management

The Syskit Point Storage Management feature helps you keep your environment clutter-free, optimize the usage of your storage, and gain insight into how your storage is distributed across your tenant.

For more information on this feature, [take a look at the Optimize Storage article](../governance-and-automation/optimize-storage.md). 

To configure the Storage Management feature within Syskit Point, complete the following steps:

  * **Go to the Settings (1)** of your Syskit Point
  * Under the General section, **click the Storage Management button (2)**
  *  The **Collect storage data checkbox (3)** is turned on by default
    * If you deselect the check box and turn off collecting storage data, Syskit Point retains and shows only the old versions of your files and your site storage, and no new storage data is collected or reflected in Syskit Point

Once storage management has been turned on, you can also customize your storage reports in Syskit Point by setting the following:
  * **Show how much I can save if I keep the latest X file versions (4)** - here, you can set a number in place of X depending on how many of the latest file versions you want to keep when trying to declutter your workspaces
  * **Show how much I can save if I delete file versions older than X months (5)** - here, you can select the number of months that the file version should be older than when considering cleaning up your site and deleting previous versions
  * These values can be found in tiles on: 
   * The [Site Storage Metrics](../.gitbook/assets/configure-storage-management-settings.png) report, where you can use them to also instantly clean up your site, along with being shown the amount of storage that will be freed up.  
   * [File Storage Details](../.gitbook/assets/configure-storage-management-settings.png) report, where you can use the tiles to filter between the versions of the files before deciding which to delete. 

Once finished, **click Save (6)** to save your storage management preferences. 

![Syskit Point - Storage Management Set Up](../.gitbook/assets/configure-storage-management-settings.png)

## Related Articles

* [Optimize Storage](../governance-and-automation/optimize-storage.md)
* [Configure Tenant Storage Limit Policy](../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Tenant Storage Security & Compliance Check](../../governance-and-automation/security-compliance-checks/tenant-storage.md)
* [Resolve Tenant Storage Limit Task](../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Metrics Report](../reporting/cleanup-and-health-reports.md#storage-metrics)
* [Site Storage Metrics Report](../reporting/cleanup-and-health-reports.md#site-storage-metrics)
* [File Storage Details Report](../reporting/cleanup-and-health-reports.md#file-storage-details)