---
description:  This article explains how the automatic and on-demand storage sync works in Syskit Point.
---
 
# Storage Sync
 
Storage Management helps organizations gain detailed insight into their storage usage all the way down to the file level, allows them an easy way to manage their storage with versioning limits, and provides quick insight into your potential storage savings. 

If you've already set up everything you can for your storage management, you might be wondering how the storage sync works and when you'll see the changes made reflected in Syskit Point. 

Certain metrics such as total storage used and total storage available are always accessible through Autodiscover sync and Site Sync. However, for more detailed storage insights, such as file-level details, the **Storage Sync** has to be completed. 
 
Syskit Point has two ways of collecting and updating your storage data: through **automatic storage sync**, or through **on-demand storage sync**. 

This article explains both as well as situations where they might prove useful. 

## Automatic

Storage sync runs automatically whenever a full site sync occurs, meanings if there's any major change on the workspace (structure ownership, sharing) it will trigger it based on the configured resync threshold

Large tenants can experience slower or incomplete automatics storage sync due to scale limitations so we reconmnend on-demand sync for those situations.


{% hint style="info" %}
* **There is a delay in storage sync, which can happen in large environments** which means that file versions that were already deleted in SharePoint could still appear in reports until the next sync is completed
  * Depending on the size of the environment, the storage sync can take **up to a month**
  * If you have a large tenant, you can use **on-demand sync to target specific environments or sites** instead of waiting for the full sync cycle to be completed
 
{% endhint %}
 
 
## On-Demand 

On-demand sync lers you manually trigger storage sync for specific workspaces when needed.
Recommended for larger tenants & if automatic storage sync is disabled. 
Available through Storage Metrics report.
* Step by step instructions on how to do it through SM report
Sync duration may vary - can take up to a week to complete for some sites
Track sync in two places - storage metrics report in Last Storage Sync and Storage Sync Status columns OR on the Site details page, if you hover over the sync status for real-time progress updates
* Last Storage Sync dare reflects the last time a **full** sync with changes occured, it's normal to see an older dare unless major changes triggered a new sync. 
you can refresh it through manial sync or wait for system to perform periodic full sync about every 6 months



![Storage Versioning Limits - Confirm Removal](../.gitbook/assets/storage-versioning-limits-remove-manualy-applied-confirmation.png)
 