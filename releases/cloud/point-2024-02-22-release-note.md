---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.43.10
---

# February 22, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Improvements & Bug Fixes

* **The Change Storage Limit action** was added to the Storage Metrics report.

* **The Remove Access action was enabled** for users in the Access review task on the Sharing step - Users View.   
  * Multiselection of users is also enabled.

* **Every file** now has the sensitivity and retention labels applied when they are available. 

* **Improved the performance** of the Site Storage Flat Report and Sure Storage Structure Report. 

* **Improved the performance** of the 'Tasks Overview' page when showing a large number of tasks.  

* **Fixed the issue** that caused the Permissions Summary report on the Site Details screen to time out in some environments.

* **Fixed an error** that caused a Duplicate ID crash when sending Lifecycle Management reminders.

* **Fixed an issue** on the User Details screen where the Remove Access action would time out when selecting multiple workspaces.

* **Fixed an issue** where the general Dashboard would fail to load when using the Analytics Module.

* **Fixed an error** that appeared when performing the Clean Up File Versions action on a site: `'Microsoft.SharePoint.Client.ServerException: No version with the requested ID was found.'` and `'Microsoft.SharePoint.Client.ServerException: Operation is not valid due to the current state of the object.'`

* **Fixed a bug** that showed Security Groups on the Rule Preview report when using Policy Automation on All Users, Everyone, and Everyone Except External users, even though a rule was set that security groups should not be included. 

* **Fixed a bug** on the Teams & Groups reports that showed different values for the Created On date for Security Groups when compared to the values shown on the exported report. 


* **Fixed an issue** where global search would not work as expected on the Sites, Teams & Groups Overview screen, the Storage Metrics, and Manually Apply Polivies reports, in case custom metadata columns were enabled in the column chooser.

* **Various improvements and minor UX fixes are available**.