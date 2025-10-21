---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.5.114.39
---

# October 21, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 

* **Viva Engage (Yammer) provisioning** migrated to Graph API.
  * **Point Admins with existing Viva Engage provisioning templates will receive a reconsent prompt.**
  * **Point Admins who create their first Viva Engage provisioning template will receive a reconsent prompt.**
  * Point Admins who don't use Viva Engage provisioning templates will not receive any reconsent prompts and do not need to reconsent.
  * [Learn more about the added permission in the Permission Requirements Change Log article.](../../requirements/permission-requirements-change-log.md#syskit-point-cloud-20255114)

* **Improved the Teams app people picker** to no longer show users with blocked sign-in.

* **Fixed an issue** where users could click the Archive action for Private and Shared Channel sites from the Storage Metrics report, which caused an error to occur.
  * The Archive action is now unavailable for private and shared channel sites, and they can only be archived as part of their parent Team.

* **Fixed an issue** where collaborators could not perform the File Version Cleanup action due to the following error: `System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.`

* **Fixed a bug** where Archived sites were incorrectly flagged for the Orphaned Workspace policy vulnerability. 

* **Fixed an issue**, which caused errors on the Channel Details page in certain situations. 

* **Various improvements, including UX and UI fixes, are available.**