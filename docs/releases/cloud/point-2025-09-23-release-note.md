---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.4.110.13
sidebar_position: 3
---

# September 23, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Yammer is now Viva Engage.**
  * Yammer was renamed, and the icons were changed to reflect the Microsoft 365 branding.

* **Fixed an issue** that caused the Swagger documentation to cache and display the wrong host domain name.
  * In some instances, if a request was sent with an X-Forwarded-Host header, that value would be cached and returned to all clients accessing the Swagger documentation endpoints. 
  * The received host value is now validated against a whitelist of allowed domains, which can be edited in the web service App Settings as XForwardedHostHeaderOptions__AllowedHosts settings.

* **Fixed a bug** that caused missing information when generating the Group Access report on larger tenants.

* **Fixed the issues** when resolving policy vulnerability tasks. 
  * The task no longer fails when deleting a site or team.
  * The progress indicator now accurately shows the progress of the task. 
  
* **Various improvements, including UX and UI fixes, are available.**