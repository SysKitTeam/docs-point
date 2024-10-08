---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.5.65.1
---

# October 08, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Improvements & Bug Fixes

* **Improvements made to Reports.**
    * **The Sensitivity Label filter** was added when generating the **Permissions Matrix**, **Externally Shared Content** and **Group Access** reports.
        * You can choose for the report to show files with any sensitivity label or no sensitivity label, as well as choose to generate it for specific sensitivity labels. 
        * Selecting a specific sensitivity label generates the report only for files with that specific label sensitivity applied.
        * You can also select the Sensitivity Labels column from the column chooser. 
    * **The Sharing Links report** has new columns available to select from the column chooser:
        * **Sign-in** - shows whether this user is Allowed to sign in or has been Blocked.
        * **Deleted** - shows whether the user was deleted or not
        * **Last Logged In** - shows the last log-in date for the user

* **When completing the Lifecycle Management** review on a workspace and choosing the Keep action, the two options now available are **6 months** and **Custom**.
    * You can decide to Keep the workspace for 6 months or enter a Custom amount, however the custom amount cannot exceed the time frame set by the administrators in the Settings of Syskit Point. 

* **Improved the sync process** to ensure that if the last sync was not executed successfully, the next sync that Syskit Point performs is a full sync instead of a partial. 

* **Fixed a bug** that did not include users that are both Microsoft Team Owners and Private Channel Owners as reviewers when performing the Access Review.

* **Fixed an issue** where deleted policies were still applied to workspaces due to the Rules setup.

* **The subject line** for policy vulnerability e-mails has been changed to reflect that there is an **Action Required**.

* **Various improvements, including UX and UI fixes, are available**.