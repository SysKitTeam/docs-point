---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2023.5.39.1
---

# November 30, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **New options added to the Storage feature**!
  * The Site Storage Metrics report now has the **Clean Up File Versions action**. 
    * This means you can select each site, folder, document library, or even **the entire site** and clean up the older file versions.
  * The Site Storage Metrics report now has a new **File Type tile** added. 
    * There, you can check how much **storage is occupied by different types of files**: videos, photos, office documents, or others.
  * The Storage Metrics report can have **metadata columns** added by selecting them from the column chooser. 
  * The File Storage Details report has a **Delete Version action** added when files are selected. 

* **A new Number of Guest users** condition has been added to the **Rules feature**.
  * This condition makes completing Access Reviews on workspaces that have guest users easier by letting you set up a Rule that uses the condition of The Number of Guest Users set as 0 and has Access Review selected as the policy.
  * [Learn more about this in the Rules article](../../governance-and-automation/automated-workflows/policy-automation.md)


## Improvements & Bug Fixes

* The **Policy Automation feature** has been **renamed to Rules**, and **Automation within Policies** has been changed to **Task Delegation**. 

* **Improved the descriptions on the policy screen** to enhance the comprehension of each policy.

* **Improved descriptions on the policy screens** to enhance comprehension of each policy. 

* **Improved and optimized the Site Metrics report** when showing larger sites.

* **Fixed an issue** where giving reconsent permissions for Syskit Point couldn't be successfully completed.

* **Fixed an issue** where the Reconsent banner would appear even though the reconsent was already provided.

* **Fixed an issue** where hard deleted groups still provided membership information, seemingly giving permissions to users who were no longer members.

* **Fixed a bug** that prevented Yammer sites from being included in Lifecycle Management when selecting All under Monitoring Activity. 

* **Fixed a bug** where creating a SharePoint site provisioning request resulted in an error.

* **Fixed an issue** where collaborators could see information about the storage of the entire tenant and the 3 biggest sites. 
  * Collaborators can only see the storage of the workspaces they are in charge of. 

* **Fixed a bug** which caused no information to be shown when Syskit Point Admins tried to generate a Teams with Private Channels report.

* **Fixed a bug** that caused miscalculations to be shown in the Lifecycle Management column on the Inactive Workspaces report.

* **Fixed a bug** where occasionally there would be a request timeout and slowdown for auto-discover, resulting in emails being sent stating auto-discover had failed.

* **Fixed a bug** on reports that occasionally caused filtering issues when drilling to subsites.

* **Various improvements and minor UX fixes are available**.