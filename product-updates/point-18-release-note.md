---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 18.
---

# SysKit Point 18

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 18.0.0  
**Build number:** 1695  
**Release date:** Feb 18, 2021

## Features

* **Alerts are now available in SysKit Point! Get an email every time something significant happens in your environment** - be it a sensitive file download, user sign-in from a suspicious IP address, or an unexpected addition of a new team member, you will be in the know. You can:

  * **Activate alerts on different scopes** – from tenant-wide down to specific file!
  * **Apply filters** – select specific users, IP ranges, or specific IP addresses to only get an alert when defined conditions are met
  * **Define who will get an email in case the alert is triggered**
  * **View all active alerts and resolve them** after ensuring that your environment is secure

  [To learn more about alerts in SysKit Point, read the following article.](point-18-release-note.md#TODO) 

* **New Permissions Review setup, policies, and capabilities are now available!**  
  You can now set up the automated Permissions Review with the help of the new Permissions Review wizard. Permissions review policies are also introduced to give you more possibilities and greater flexibility. Per each review policy, you can define the following:

  * **Review scope** – you can select to review membership, or content, or both, or only focus on the guest and external sharing
  * **Recurrence** – choose how often reviewers need to perform the permissions review
  * **Content scope** – select the content level that needs to be reviewed

  Once created, **you can apply review policies to Microsoft Teams**, **Groups**, and **sites**. Besides that, you can now **decide which users will be responsible for the permissions review** of selected **Microsoft Teams**, **Groups**, and **sites**.  

  [To learn all about the new capabilities of the automated Permissions Review, read the following article.](point-18-release-note.md#TODO)

* **New License Reports are available!** You can now find detailed information on license usage in the following reports:

  * **Licenses Overview**
  * **Licenses Usage by Service**
  * **License Distribution**
  * **Inactive Licenses**

  The **Remove Licenses action** is available on the **Inactive Licenses report**, enabling you to **reclaim unused licenses and minimize your license costs**.

  [To learn more about the new license reports, read the following article.](point-18-release-note.md#TODO)

* **New user actions added – Delete and Restore User**! 

  New actions are available on the **Users** overview screen. [To learn more about these actions and permissions needed to run them, navigate to the following article.](point-18-release-note.md#TODO)

* **New group management actions are available**:

  * **Add Members** – when a security group is selected
  * **Add to Group** – when a SharePoint group is selected

  You can find new actions on the **Group Access** and **Permissions Matrix report**, as well as the **Permissions Tile** on the Site Details screen.

## Improvements & Bug Fixes

* **Improved how SysKit Point utilizes CPU**! The following operations were optimized:
  * **saving audit logs**
  * **exporting reports to PDF files**
* **Improved how SysKit Point queries the SQL database!** We took additional measures to speed things up for you. You will notice these changes when generating reports, overview, and detail screens. 
* **Improved Home Screen and additional data about new features are available**! The latest features – **Alerts** and **Scheduled Reports** – are now available from the Home Screen. **After installing the latest version**, you will also get a **notification inside SysKit Point**, **giving you the list of most important** features added in the newest version.   
* **Additional columns and improved report data are available!**
  * **Site Type column added** to **External Users**, **Orphaned Users**, **Orphaned Resources**, **Users with Privileged Access**, **Group Access**, and **User Access report**
  * **IP Address column added** to **Audit Logs Overview**, **Exchange Logs**, **Site Permissions Changes**, **User Activity** and **File and Page Activities report**
* **Privacy column added** to **Users with Privileged Access report**
* **Details column** on audit reports now **shows additional data** for **Membership Changed** and **Changed Team Setting events** 
* **Email size for Scheduled Reports increased from 4MB to 35MB**, giving you the possibility to schedule reports with large amounts of data, which is especially important when sending PDF files. **You can additionally increase the limit to 150 MB in the** [**Exchange admin center**](https://docs.microsoft.com/en-us/exchange/recipients/user-mailboxes/mailbox-message-size-limits?view=exchserver-2019)**.** 
* **Validation was added on the Subject field when customizing emails**. Before, entering a lengthy text as a subject would cause the Settings screen to crash unexpectedly. Now a message appears if you reach the subject limit of 78 characters.
* **Various UX/UI improvements and minor fixes available**. With this version, **Office 365 Groups are renamed Microsoft 365 Groups in SysKit Point**, reflecting changes in [Microsoft’s naming](https://techcommunity.microsoft.com/t5/microsoft-365-blog/office-365-groups-will-become-microsoft-365-groups/ba-p/1303601). 
* **Improved the User Sync** to handle Security Groups with assigned Azure AD roles. Before, the sync would fail with the following errors:

  `System.ArgumentException: The value "Microsoft.Graph.Group" is not of type "Microsoft.Graph.User" and cannot be used in this generic collection.`

  and

  `System.InvalidCastException: Unable to cast object of type 'Microsoft.Graph.Group' to type 'Microsoft.Graph.User'.`

* **Fixed an issue** where the site sync would fail to complete, resulting in the following errors:

  `System.Exception: The remote server returned an error: (429). Unable to retry request no InitialRequest defined. RetryAttempt: 1`

  or 

  `System.Net.WebException: The remote server returned an error: (429).`

* **Fixed an issue that appeared when importing certificates from Personal Store**. The following error was visible in the event log:

  `System.Exception: SSL Certificate add failed, Error: 1312 A specified logon session does not exist. It may already have been terminated.` 

* **Fixed an issue where the Auto Discover would fail** to complete writing data to the database, which would result in the following error:

  `SysKit.SecurityManager.WorkerUtils.Database.CustomSqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.`

* **Fixed an issue** where SysKit Point would ask you to request access to protected Microsoft Teams API, although Microsoft already granted the access. 
* **Fixed an issue** with the Sharing Links sync, where the following error would appear in case SysKit Point reached the throttling limits:

  `System.Exception: 429 TOO MANY REQUESTS`

* **Fixed an issue** where SysKit Point collaborators would get a Bad Request error in the Sites tile when opening a user details screen for an owner of an archived or deleted site. The following error was visible in the event log:

  `System.Collections.Generic.KeyNotFoundException: The given key was not present in the dictionary.`

* **Fixed a bug** where unsuccessful Auto Discover syncs were erroneously displayed as successful in the Auto Discover drop-down menu. 
* **Fixed a bug** where removing an orphaned user from multiple sites would fail if SysKit Point could not remove the user from a single site.

