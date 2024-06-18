---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.3.51.47
---

# June 18, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Improvements & Bug Fixes

* **Improvements made to the Private Workspaces Shared with Everyone policy!** 
  * The Private Workspaces Shared with Everyone policy can now be resolved manually or automatically.
    * **Resolve Manually**: The vulnerability is flagged on the Security and Compliance Dashboard, where manual actions can be taken to resolve it. 
    * **Resolve Automatically**: Syskit Point automatically resolves the vulnerability by removing access granted to Everyone, Everyone except external users, and All users groups. 
    * [For more details on the Private Workspaces Shared with Everyone policy, take a look at this article.](../../governance-and-automation/automated-workflows/private-workspaces-shared-with-everyone-admin.md)


* **Improvements made to Reports!**
  * **Sensitivity Label and Retention Label** columns are now available on the Site Structure report and can be selected from the column chooser. 
  Now, you can easily **find files with specific Sensitivity and Retention labels** with the help of the column filters.
    * **More reports with Sensitivity and Retention label information are planned in the upcoming releases!**
  * **Reports now have a new Copilot Readiness tag.**
    * You can now select Copilot Readiness from the filter categories on Reports and the search bar.
    * Several Security & Compliance checks also have the Copilot Readiness category added since they help you find and resolve workspaces with oversharing vulnerabilities.
    * Use these reports and checks to deal with overshared and inactive content and prepare your environment for Copilot.
  * **The Group Access report** no longer shows deleted workspaces when generated.

* **The Security & Compliance Checks Dashboard** has two new columns added: New (Last 30 Days) and Resolved (Last 30 Days)
  * The **New (Last 30 Days)** column shows the number of new vulnerabities detected per each policy in the last 30 days
  * The **Resolved (Last 30 Days)** column shows the number of vulnerabities resolved per each policy in the last 30 days

* **Fixed an issue** with saving the changes made in Settings for Syskit Point while WAF (web application firewall) is enabled. 

* **The number of concurrent file version cleanup actions** has been limited to avoid performance issues on the tenant. 

* **Fixed a bug** where applying Sensitivity Labels to workspaces via Syskit Point resulted in the label not being applied.

* **Various improvements and minor UX and UI fixes are available**.