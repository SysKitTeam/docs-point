---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2024.1.41.1
---

# January 18, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **Additional features added to the User Access report.**
  * **The User Access report has additional columns** available to select from the column chooser: Sensitivity Label, Created On, Last Logged In.
  * **The Delete User action was added** and is available only to Syskit Point admins.

* **The Details column was updated in the Audit Logs Overview report** to show all the recipients for the activities: Shared Power BI Report and Shared Power BI Dashboard.
  


## Improvements & Bug Fixes

* **The Site Storage Metrics Report has been optimized** for better support to large sites.  

* **Collaborators can no longer configure alerts** for users when the option *"Give collaborators access to subordinate user activities"* is disabled.

* **Improved the position of the Reconsent banner** to prevent issues accessing the sidebar navigation. 

* **Improved the description** for the Inactive Guest Users policy email and task screen.

* **Improved provisioning for Outlook properties** by increasing retry count from 7 to 10. 

* **Fixed an issue** where task resolvers who were removed from their resolver position would still receive emails when someone else resolved their past Security & Compliance check violations.

* **Fixed bug** when generating the Preview Report for Rules that resulted in a "Bad Request" error when no workspaces were affected by the rule.
  * **Improved overall performance** when generating the Rule Preview Report. 

* **Fixed a bug** for the User Access report where exporting to XLSX wasn't showing Power BI workspaces.
  * The report now includes the name and type of resource for Power BI workspaces. 

* **Fixed the bug** where the Delete User action could not be completed for the Inactive Guest Users check. 

* **Fixed an issue** where the wrong email was sent during the provisioning process when Outlook properties failed.

* **Fixed a bug** that caused the owners of inactive workspaces to be able to keep their workspace indefinitely even when a maximum time period for keeping an inactive workspace had been previously set by an admin. 

* **Fixed an error** that showed `InvalidCastException` when checking the property bag by switching to converting instead of casting.

* **Fixed an issue** where metadata sync was not properly functioning for external INT and DateTime values. 

* **Various improvements and minor fixes are available**.

