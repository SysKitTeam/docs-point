---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.43.28
---

# February 22, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **The Change Storage Limit action** was added to the Storage Metrics report.
  * You can now customize and change the storage limit for each site, meaning that if you notice a certain site has a larger influx of data than others, you can increase the storage limit for that site while lowering the storage limit for others. 
  * The cumulative storage for all your sites cannot exceed the total storage available for your tenant.
  * [Follow this link to learn how to limit storage usage in Syskit Point](../../storage-management/limit-storage-usage.md)


## Improvements & Bug Fixes

* **The Remove Access action was enabled** for users in the Access review task on the Sharing step - Users View.   
  * Multiselection of users is also enabled.

* **Improved the performance** of the Site Storage Flat Report and Site Storage Structure Report. 

* **Improved the performance** of the 'Tasks Overview' page when showing a large number of tasks.  

* **Fixed the issue** that caused the Permissions Summary report on the Site Details screen to time out in some environments.

* **Fixed a bug** that caused an error when trying to send Lifecycle Management reminders. The following error message was displayed in the action log: `Error. An item with the same key has already been added. Key: int`

* **Fixed an issue** on the User Details screen where the Remove Access action would time out when selecting multiple workspaces.


* **Fixed a bug** that caused the following error message to appear when performing the Clean Up File Versions action on a site: `'Microsoft.SharePoint.Client.ServerException: No version with the requested ID was found.'` and `'Microsoft.SharePoint.Client.ServerException: Operation is not valid due to the current state of the object.'`

* **Fixed a bug** that showed Security Groups on the Rule Preview report when using Policy Automation on All Users, Everyone, and Everyone Except External users, even though a rule was set that security groups should not be included. 

* **Fixed a bug** on the Teams & Groups reports that showed different values for the Created On date for Security Groups when compared to the values shown on the exported report. 

* **Fixed an issue** where global search would not work as expected on the Sites, Teams & Groups Overview screen, the Storage Metrics, and Manually Apply Policies reports, in case custom metadata columns were enabled in the column chooser.

* **Various improvements and minor UX fixes are available**.