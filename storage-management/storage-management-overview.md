---
description: This article explains how to manage and free up your storage on SharePoint sites.
---

# Storage Management 

## The Importance of Storage Management in Microsoft 365

**Storage management in Microsoft 365 isn't just a routine task - it's a strategic necessity.** 

Here's why you should maintain an active approach to your Storage Management:

  * **Your monthly expenses are directly linked** to the efficiency of your storage management, particularly within SharePoint sites connected to your organization's purchased licenses.
  * When you run out of storage for your SharePoint sites, depending on your plan, you would have to use the Office 365 Extra File Storage add-on to **buy more storage** in 1GB increments. 
 * **The best thing you can do to avoid additional costs is to clean up your storage proactively** and use tools that are available to manage and optimize the usage of your storage.

[For more details about site storage limits, take a look at this article.](../faq/site-storage-limits.md)

## Storage Management in Syskit Point

To start with your Storage Management, make sure it's configured based on your preferences within Syskit Point.

That's where you can set up certain metrics that help you with the clean-up of your storage, such as how many versions of a file you want to keep or how old files should be before you delete them. 

Here's how to get started with your storage management in Syskit Point: 

  * [The first step is to configure your environment for Storage Management, so take a look at this article.](../configuration/configure-point-for-storage-management.md) Please note, **this is only needed for the Syskit Point Data Center customers**. You can skip this step if you are using the Syskit Point Cloud.
  * Make sure to [read through the Configure Storage Management within Syskit Point article.](../../configuration/configure-storage-management.md) 
  * Next, it's time to configure your [Tenant Storage Limit Policy](../governance-and-automation/automated-workflows/tenant-storage-admin.md). This policy is used to detect and monitor your storage, but if you choose to, you can also enable task delegation.  
 * Once the policy has been edited based on your preferences, you can [take a look at the Tenant Storage Security & Compliance Check article](../governance-and-automation/security-compliance-checks/tenant-storage.md) to see all the details and information you can get from this policy being detected in your environment.

Now that we've covered how to begin utilizing your storage management within Syskit Point let's look into the valuable information and actions that can be completed from the Storage Metrics reports.

### The Storage Metrics Reports

The [Storage Metrics report](../storage-management/storage-reports.md#storage-metrics) is available in the latest Syskit Point version and helps you:
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

![Storage Metrics Report in Point](../.gitbook/assets/optimize-storage-storage-metrics-report-point.png)

You can also access the following Storage reports:
* [Site Storage Metrics](../storage-management/storage-reports.md#site-storage-metrics); shows site storage usage over time, along with an overview of all files (and types of files) stored on the site and the option to clean up older file versions.
* [File Storage Details](../storage-management/storage-reports.md#file-storage-details); shows how much storage is used by a file as well as an overview of all file versions still stored and the ability to remove the older or unused file versions.

With the help of these reports, you can:

 * Gain deeper **insight into how your storage is used by specific file types**, such as videos, photos, office documents, and others. 

 * See how much **storage you can save per site** if you delete file versions older than a certain number of months or every file version except for the most recent one. 

 * **Complete the Clean Up File Versions action and free up space**. 

For more details on exactly what information can be found in the reports, [take a look at the Storage Reports article](../storage-management/storage-reports.md)

## Related Articles

* [Configure Your Environment for Storage Management](../configuration/configure-point-for-storage-management.md)
* [Configure Storage Management](../configuration/configure-storage-management.md)
* [Configure Tenant Storage Limit Policy](../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Tenant Storage Security & Compliance Check](../governance-and-automation/security-compliance-checks/tenant-storage.md)
* [Resolve Tenant Storage Limit Task](../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Metrics Report](../storage-management/storage-reports.md)
* [Site Storage Metrics Report](../storage-management/storage-reports.md#site-storage-metrics)
* [File Storage Details Report](../storage-management/storage-reports.md#file-storage-details)
