---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.81.1
---

# February 18, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes

* **Improved the error message** that is shown when removing Sharing Links. 
  * When removing a sharing link from the Permissions Copied section on the Permissions Matrix report or Matrix report and Access Review task, the action would fail with the following error message: 'Incorrect associated SharePoint object for this link.'
  * The message has been updated and states that the link can only be removed from the parent object. 

* **Fixed an issue** with Power Platform sync, which occurred when trying to sync an environment disabled due to inactivity. Inactive environments are no longer synced. 
  * Find the inactive environments in the Power Platform Environments report by selecting the Inactive Environments view.

* **Fixed an issue** that caused scheduled jobs to always run in the UTC Time zone instead of the one selected when connecting the tenant.

* **Various improvements, including UX and UI fixes, are available**.