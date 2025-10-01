---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.4.111.1
---

# September 30, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Two new endpoints have been added** to the Syskit Point API.
  * **GET /1.0/webhooks/endpoints** - retrieves all existing webhook endpoints registered in Syskit Point.
  * **DELETE /1.0/webhooks/endpoints** - deletes a specified webhook endpoint.
  * If the webhook endpoint URL doesn't exist, the API returns a **404 Not Found**.
  * If a webhook endpoint is successfully deleted, the delete returns a **204 No Content**. 

* **Fixed a bug** that caused errors when generating the Group Access report on large tenants; the report is now generated without missing data. 

* **The Last Logged In** column on all reports has been renamed to **Last Tenant Log In**.
  * This change was made to ensure clarity with users that the column references the last tenant log in, not the last workspace log in. 

* **New site metric** was added: Number of Items Shared with Everyone. 
  * The Number of Items Shared with Everyone column can be selected from the column chooser on the Sites Overview and Teams & Groups Overview screens. 

* **Various improvements, including UX and UI fixes, are available.**