---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.42.3 
---

# February 06, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.


## Features

* **New Policies added:** Shadow Users and Workspaces with Too Many Members. 
  * Shadow users are users who have access to specific documents/folders or other content but are not members of the workspace. For more details, [read the Workspaces with Shadow Users article.](../linkhere)
  * Workspaces with Too Many Members are workspaces that have a number of members that are over a defined threshold. For more details, [read the Workspaces with Too Many Members article.](../linkhere)


## Improvements & Bug Fixes

* **The Remove Access action is now enabled** for users on the Sharing step - Users view - in the Access Review task.  
   * Multiselection of users is also enabled.

* **Ad-hoc users can now be deleted** with the Delete Users action.

* The **Storage tag was added to Reports** related to storage for easier filtering.

* **Site Storage Metrics report** had the Created On column added that can be selected from the column chooser. 

* **Default sorting on grids** added to the Tenant Wide Storage Metrics report.

* **Global Viewers can now complete actions** on Scheduled Reports. The following actions are available: Preview, Send Now, Edit, Pause, Delete.

* **Improved the description** for the Inactive Guest Users policy email and task screen.

* **Newly created licensed users** who have never logged in are not shown as inactive users. 
  * Additionally, on the Users Overview screen in the Inactive Users tile and Inactive Users view, newly created users (those created in the last 30 days) will not show.

* **Fixed an issue** where task resolvers who were removed from their resolver position would still receive emails when someone else resolved their past Security & Compliance check violations.

* **Fixed an issue** where the site sync and group sync weren't loading successfully for Private and Scared channels. 

* **Fixed an issue** where the Anonymously Shared Sites report and Externally Shared Sites report were not updating the information (numbers) in the tile filters accurately.  

* **Fixed an issue** where the discovery of new sites would keep loading without ever finishing.

* **Fixed a bug** that allowed owners of inactive workspaces to keep their workspace indefinitely, even when a maximum period limit for keeping the workspace was previously set.

* **Fixed a bug** where automatically Scheduled Report emails did not include an Attachment.  

* **Fixed an issue** on sites where information about file versions and sizes was not regularly refreshing.

* **Fixed a bug** where users who were both admins and workspace owners were not added as Reviewers for Private Channels, nor could they be added manually. 

* **Fixed an error** that showed up when trying to upgrade Syskit Point and stated the following: `The parameter MinTlsCipherSuite has an invalid value. Details: Value is invalid. Acceptable values are: TLS_AES_256_GCM_SHA384,TLS_AES_128_GCM_SHA256.`

* **Various improvements and minor UX fixes are available**.