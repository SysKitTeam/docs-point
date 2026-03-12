---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.128.54
---

# February 10, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.


:::warning
**Please note!**

* **Reconsent is required after updating to the latest version** due to permission changes introduced by collecting data related to the User Type (user, equipment, room) visible on License reports.

* The following **permission is added** to the existing Syskit Point app registrations:
  * **MailboxSettings.Read** – allows Syskit Point to read users' mailbox settings without a signed-in user. This does not include permission to send emails.

* For **new deployments**, the **MailboxSettings.Read permission is automatically added** during consent.
  
* For an **already deployed Point**, this permission is **not added automatically**. Syskit Point admins will **receive a reconsent prompt** to grant the required permission.

* [For more information about permission requirements changes, see the change log.](../../requirements/permission-requirements-change-log.md#syskit-point-cloud-20261128)

:::
   
## Improvements & Bug Fixes 

* **Added a new setting** for managing access in Syskit Point: **Restrict access to private channels not owned by the team owner**.
  * This setting can be found by going to **Settings > Manage Access > Syskit Point Collaborators**. 
  * This setting **controls whether Team Owners can access private channels they do not own**.
  * The setting is **enabled by default and restricts access to private channel details** unless the Team Owner is also the channel owner.
  * **When enabled**, Team Owners cannot be selected as reviewers for private channels in the Workspace Review policy wizard.
  * **When disabled**, Team Owners can view private channel details and can be selected as reviewers.

* **Improved user synchronization** by retrieving the Last Successful Sign-In time for both internal and external users during tenant sync, instead of relying only on audit data.

* **Fixed an issue** where Syskit Point reported successfully adding unlicensed users to mail-enabled security groups, even though the action failed in Microsoft 365.
  * It is now clearly indicated that the action has failed due to missing licenses when performed by users who are not admins.

* **Fixed an issue** where Power Platform actions would stop working after a period of time due to an expired access token, requiring users to restart Syskit Point.

* **Various improvements, including UX and UI fixes, are available.**