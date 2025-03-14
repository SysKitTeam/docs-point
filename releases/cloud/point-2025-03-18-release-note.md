---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.2.85.20
---

# March 18, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.


## Improvements & Bug Fixes 

* **The Power Platform** People Picker supports SharePoint lists.
  * When assigning owners in Power Platform Flows, you can search for and select SharePoint lists used in your connections. 

* **The People Picker now resets** after a user is selected. 
  * After picking a user, the input field clears automatically, making it easier to search for and select multiple users. 

* **Review Reminders** are now sent automatically to users for any pending reviews, with the option for admins to manually send a reminders when needed. 

* **Improved the logic** used to assign tasks when requesting a review based on policy settings.

* **Improved the site sync** for larger SharePoint sites to prevent sync failures due to timeouts.

* **Fixed a bug** that caused deleted users to appear in the Inactive Licenses report.

* **Fixed an issue** that caused archived workspaces to be shown as active. 

* **Fixed an issue** that caused the following errors: 
  * When syncing Power Platform apps: `[{"severityLevel":"Error","outerId":"0","message":"Error reading string. Unexpected token: StartObject.`
  * When storing Power Platform App Flow usage: `[{"severityLevel":"Error","outerId":"0","message":"Violation of PRIMARY KEY constraint 'PK_PowerAppFlowUsages'. Cannot insert duplicate key in object 'PowerPlatform.PowerAppFlowUsages'.`

* **Various improvements, including UX and UI fixes, are available.**