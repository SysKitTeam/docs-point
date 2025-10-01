---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.4.109.37
---

# September 16, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **A new metric was added** to the column chooser on the **Sites Overview screen**: Number of items shared externally.
  * This metric helps you keep track of external sharing by counting items (files, folders, etc.) to which external users have either direct access or received access through a sharing link.

* **Improved the logging** for the Accept Risk action in Audit logs, which now accurately shows whether the action was successfully completed or failed.

* **Added the Accept risk option** to the Maximum Number of Owners policy for Site owners. 
  * The Accept Risk option can be configured by selecting it in the settings for the policy and is only available as an action if it is enabled.

* **Fixed an issue** that caused the number of owners and members to be incorrectly displayed in certain reports and tasks, such as the Too Many Members policy task and the Orphaned Workspaces report.

* **Fixed a bug** with the Point Teams app, where workspace provisioning requests could be created despite not being compliant with the ownership policy constraints defined in the provisioning template. 
  * The validation now correctly prevents creating requests with insufficient or excessive owners defined, or with an undefined Primary admin.

* **Various improvements, including UX and UI fixes, are available.**