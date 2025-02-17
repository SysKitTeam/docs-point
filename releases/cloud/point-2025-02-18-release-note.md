---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.81.1
---

# February 18, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes

* **Improved the error message** that is shown when removing inherited Sharing Links. 
  * When removing a sharing link on Permissions Copied from the Parent section of the Permissions Matrix report and Access Review task, the message would state: 'Incorrect associated SharePoint object for this link.'
  * This has now been updated to provide a clearer message stating that the link can only be removed from the parent. 

* **Fixed an issue** where the following error occurred when accessing a Dynamics 365 environment that was disabled due to inactivity: `SysKit.Point.PowerPlatform.Application.PowerPlatform.Clients.PowerPlatformApiException: Error while retrieving PowerPlatformFlowsResponse Status Code: NotFound` 

* **Fixed an issue** that caused a failure to occur when upgrading the script.

* **Fixed an issue** that caused scheduled jobs to be sent in the incorrect timezone. (For example, the weekly summary Security & Compliance email that was scheduled for 10 AM would be sent at 5 AM instead)

* **Various improvements, including UX and UI fixes, are available**.