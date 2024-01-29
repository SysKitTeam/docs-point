---
description: This article explains how to manage and free up your storage on SharePoint sites.
---

# Storage Management

## Storage Management in Microsoft 365

**Storage management in Microsoft 365 is important, as it directly impacts your monthly expenses**. 
When talking about storage in Microsoft 365, we usually refer to the SharePoint space an organization has at its disposal, which depends on the number of purchased licenses.
[Read this article provided by Microsoft to learn more about SharePoint storage limits](https://learn.microsoft.com/en-us/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits).

After you run out of storage for your SharePoint sites, depending on your plan, you can use the Office 365 Extra File Storage add-on to buy more storage in 1GB increments.
The best thing you can do to avoid additional costs is to proactively clean up your storage and use tools that are available to manage your storage.
In the sections below, you can find ways to utilize Microsoft 365 built-in options, as well as Syskit Point, to stay on top of your storage management tasks.

[To find more information and see if your plan is eligible to buy extra storage, explore the following Microsoft article](https://learn.microsoft.com/en-us/microsoft-365/commerce/add-storage-space?view=o365-worldwide).


## Storage Metrics Reports in Syskit Point

The new [Storage Metrics report](../../reporting/storage-management/storage-reports.md#storage-metrics) is available in the latest Syskit Point version and helps you:
* **Discover the percentage of used storage in your tenant (1)**
* **See a trend of your storage usage over time (2)**
* **Find the largest sites in your tenant (3)**

You can also find the most important storage-related information for the largest sites:
* **State (4)** - current state of the site 
* **Size (5)** - storage used up by the SharePoint site
* **Storage Limit (6)**
    * Storage limit defined per site
    * By default, set in SharePoint to 25TB if not otherwise defined manually for the observed site; 25TB represents the pool of total available storage, although the actual size of available storage can be smaller, depending on the number of purchased licenses
    * Storage Limit for soft deleted sites is set to = KB
* **% of Limit (7)** - shows the percentage of the site's size in the defined site storage limit
* **Alert on % of Limit (8)** - shows the site's defined percentage limit when email notifications are sent to owners

Once you detect the largest sites with the help of the Storage Metrics report, use the **link in the Storage Metrics URL column (9)** to open the site-specific Storage Metrics report. From there, you can start to clean up versions and files on your site.

![Storage Metrics Report in Point](../../.gitbook/assets/optimize-storage-storage-metrics-report-point.png)

You can also access the following Storage reports:
* [Site Storage Metrics](../../reporting/storage-management/storage-reports.md#site-storage-metrics); shows site storage usage over time, along with an overview of all files (and types of files) stored on the site and the option to clean up older file versions.
* [File Storage Details](../../reporting/storage-management/storage-reports.md#file-storage-details); shows how much storage is used by a file as well as an overview of all file versions still stored and the ability to remove the older, or unused, file versions.

With the help of these reports, you can:

 * Gain deeper **insight into how your storage is used by specific file types**, such as videos, photos, office documents, and others. 

 * See how much **storage you can save per site** if you delete file versions older than a certain number of months or every file version except for the most recent one. 

 * **Complete the Clean Up File Versions action and free up space**. 

For more details on exactly what information can be found in the reports, [take a look at the Storage Reports article](../../reporting/storage-management/storage-reports.md)


## Related Articles

* [Configure Storage Management](../../configuration/configure-storage-management.md)
* [Configure Tenant Storage Limit Policy](../../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Tenant Storage Security & Compliance Check](../../governance-and-automation/security-compliance-checks/tenant-storage.md)
* [Resolve Tenant Storage Limit Task](../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Metrics Report](../../reporting/storage-management/storage-reports.md#storage-metrics)
* [Site Storage Metrics Report](../../reporting/storage-management/storage-reports.md#site-storage-metrics)
* [File Storage Details Report](../../reporting/storage-management/storage-reports.md#file-storage-details)