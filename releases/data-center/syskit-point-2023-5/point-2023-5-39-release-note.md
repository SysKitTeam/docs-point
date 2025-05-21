---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2023.5.39.113
---

# Syskit Point 2023.5.39

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.5.39

**Build number:** 113

**Release date:** December 14, 2023

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../setup/set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../setup/set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

{% hint style="warning" %}
**Please note!**\
Additional configuration is needed for the Storage Management feature to work.
[Navigate to the following article to find information on how to configure your environment](../../../setup/configuration/configure/additional/configure-point-for-storage-management.md).
{% endhint %}

* **The Storage Management feature is now fully available**!
  * The report section now also contains the: 
    * [Site Storage Metrics report](../../../storage-management/storage-reports.md#site-storage-metrics) 
    * [File Storage Details report](../../../storage-management/storage-reports.md#file-storage-details)
      * Drill from the Site Storage Metrics report to the File Storage Details report by clicking a file name.
      * Use this report to see all file versions and the total storage used by all versions.
      * Find how much storage is used by the file versions older than 6 months.
      * Find out how much storage can be saved by keeping the latest 20 versions.
        * These numbers are set by default and can be changed, visit the [Configure Storage Management](../../../setup/configuration/configure/additional/configure-storage-management.md) article to learn how.
      * See how much storage is used by the file versions other than the latest 20 versions. 
      * **Please note that the File Storage Details report is available in the Governance plan only**.

  * The Site Storage Metrics report has the **Clean Up File Versions action**. 
    * This means you can select any site, folder, document library, or even **the entire site** and clean up the older file versions.
  * The Site Storage Metrics report now has a new **File Type tile** added. 
    * There, you can check how much **storage is occupied by different types of files**: videos, photos, office documents, or others.
  * [Read this article to learn how to configure Storage Management settings](../../../setup/configuration/configure/additional/configure-storage-management.md).
  * The Storage Metrics report can have **metadata columns** added by selecting them from the column chooser. 
  * The File Storage Details report has a **Delete Version action** added when files are selected. 
  * [Learn more about Storage optimization in the following article](../../../storage-management/free-up-storage.md).

* **A new Number of Guest users** condition has been added to the **Rules feature**.
  * This condition helps define rules that will apply policies to workspaces with or without guest users.
  * For example, if you want to apply a specific policy to workspaces with Guest users, define a rule with the condition __Number of Guest Users is greater than 0__ and select a policy you want to apply. 
  * [Learn more about this in the Rules article](../../../governance-and-automation/automated-workflows/policy-automation.md)


## Improvements & Bug Fixes

* **Autodiscover was optimized**.
  * Optimization results in the Site storage quota and storage used information to be collected faster.
  * As a result, Point now discovers sites with LockState set to NoAccess. Such sites are now visible in Syskit Point reports.

* The **Policy Automation feature** has been **renamed to Rules**, and **Automation within Policies** has been changed to **Task Delegation**. 

* **Improved the descriptions on the policy screen** to enhance the comprehension of each policy.

* **Improved and optimized the Site Metrics report** when showing larger sites.

* **Fixed an issue** where giving reconsent permissions for Syskit Point couldn't be successfully completed.

* **Fixed an issue** where the Reconsent banner would appear even though the reconsent was already provided.

* **Fixed an issue** where hard deleted groups still provided membership information, seemingly giving permissions to users who were no longer members.

* **Fixed a bug** where actions performed by Ignored accounts were counted toward the Last Activity for workspaces. 

* **Fixed a bug** that prevented Yammer sites from being included in Lifecycle Management when selecting All under Monitoring Activity. 

* **Fixed a bug** where creating a SharePoint site provisioning request resulted in an error.

* **Fixed a bug** which caused no information to be shown when Syskit Point Admins tried to generate a Teams with Private Channels report.

* **Fixed a bug** that caused miscalculations to be shown in the Lifecycle Management column on the Inactive Workspaces report.

* **Fixed a bug** where occasionally there would be a request timeout and slowdown for auto-discover, resulting in emails being sent stating auto-discover had failed.

* **Fixed a bug** on reports that occasionally caused filtering issues when drilling to subsites.

* **Various improvements and minor UX fixes are available**.