---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 17.
---

# SysKit Point 17

Let the festivities begin; **SysKit Point 17 is here**! Although it's still November, we bring you many gifts and treats to sweeten your end of the year! The list is long, so scroll down fast!

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 17.0.0  
**Build number:** 1396  
**Release date:** Nov 23, 2020

## Features

* **Scheduled reports are available!** Now you can set the reports to be delivered via email or saved to a document library, which can help you share information and collaborate with external team members without giving them access to SysKit Point. When working with Scheduled Reports, you can:

  * **Schedule all reports and views** with a couple of clicks
  * **Create subscriptions with multiple scheduled reports** that share the same schedule frequency and delivery options
  * **View all scheduled reports on a dedicated Scheduled Reports screen**
  * **Manually send scheduled reports when needed**
  * **Edit**, **pause**, **start** and **delete scheduled reports**

  [To learn more about Scheduled reports, read the dedicated article.](../common-tasks/scheduled-reports.md)

* **New Permissions Review wizard is available!** To simplify the Permissions Review process for site owners, the Permissions Review tasks can now be completed with the help of a wizard that guides you through the most important aspects of the Permissions Review.

  As a part of these change, the following improvements were made:

  * **Actions performed during the Permissions Review are tracked and summarized** at the end of the review process; **action summary can be exported to an XLSX file**
  * **Admins can now view Permissions Review summaries for one or multiple sites**; this **report can also be exported to an XLSX file**
  * **New filters were added to reports** displayed in the Permissions Review wizard steps
  * **Admins can manually request Permissions Reviews without enabling the Automated Permissions Review** 

  To learn all about the Permissions Review in SysKit Point, read the following articles:

  * [Enable Automated Permissions Review](../installation-and-configuration/enable-permissions-review.md)
  * [Perform Permissions Review](../common-tasks/permissions-review.md)
  * [Monitor Permissions Review](../common-tasks/monitor-permissions-review.md)
  * [Manually Request Permissions Review](../common-tasks/manually-request-permissions-review.md)

* **Copy User Permissions action is available!** You can use it to make the onboarding process faster by copying permissions from an existing team member to the new one, for example, or even copy to multiple users at once. All directly given permissions and group memberships are copied, eliminating the daunting task of comparing permissions and manually applying them to the new user.

  [Find more details about the Copy User Permissions action here!](../common-tasks/copy-user-permissions.md)

* **Change Sharing Settings action is available!** Use this action to define which level of sharing you want to allow on sites. Depending on your tenant-wide sharing policies, you can choose between the following options:

  * **Anyone**
  * **New and existing guests**
  * **Existing guests**
  * **Only people in your organization**

  You can find the new action on the Sites overview screen when one or multiple sites are selected, as well as on the Site details screen.

* **SysKit Point supports new group types – Distribution Lists and Mail-enabled security groups!** You can find group members and their access by using the **Group Access report**. All Distribution Lists and Mail-enabled security groups, which the user is a member of, are displayed on the user details screen.
* **New Audit Index growth charts are available!** They show valuable information on how your audit data is growing through time, which can help you plan and ensure enough disk size for SysKit Point to save the audit data. The charts are available on the Audit Settings screen. 
* **When customizing emails**, you can now **upload your logo and banner images** directly from SysKit Point settings, eliminating the need to set up your environment to host the content. 

## Improvements & Bug Fixes

* **Audit reports were optimized!** To bring you the audit report results faster, the following changes were made:
  * **Audit search queries were optimized** to use fewer resources
  * **Search query performance on Azure VM was improved** with additional caching
  * **Insignificant event logs are no longer saved by default to reduce disk requirements and improve performance**; for example, FileModifiedExtended and FileAccessedExtended
  * **New filters were introduced to audit reports** – you can now filter the ‘Site Permissions Changes’ and ‘File and Page Activities’ report by external or internal users only, or even select specific users to filter the report by
* **Audit log notifications improved!** SysKit Point now shows an appropriate notification when the disk space is getting low. In case there is less than five percent disk space available, the audit log data collection is stopped, and the error is displayed. 
* **Export added to all views!** You can now export exact data that you see when selecting different views on overview screens – Sites, Microsoft Teams & Groups, and Users overview screen.   
* **Domain column was added to the External Users report**, enabling you to filter external users from the same domain easily. 
* **Fixed the Details column filter** on the User Access report to show valid group names. 
* **Fixed an issue with the Autodiscover Sync** where sites with the same URL would cause the following error:

  `SysKit.SecurityManager.WorkerUtils.Database.CustomSqlException: Cannot insert duplicate key row in object 'dbo.ConnectedUnifiedGroups' with unique index 'UX_ConnectedSiteCollectionID'.`

* **Fixed an issue with the email sender job**, where the following error would appear in case SysKit Point was connected to multiple tenants:

  `System.InvalidOperationException: Collection was modified; enumeration operation may not execute.`

* **Fixed a bug** where the side panel showed erroneous information for the selected resource regarding the state of the last permissions review. Although the previous permissions review was completed, the following message was displayed: `Review ended n day(s) ago. Task was not completed in time.`
* **Fixed a bug** where the OneDrive report link was not displayed in the side panel if a user was selected on the Users Overview screen. The report link is now displayed as intended. 
* **Fixed an issue** where the site sync would fail, and the following error was thrown: `Errors loading data for list <list_name> ("<list_url>") (<object_id>) System.InvalidOperationException: There is an error in XML document.`
* **Fixed a bug** with the export of Sites Overview report where the ‘Storage Used’ column data was exported in bytes. The excel export now shows data in megabytes as the column name suggests – Storage Used \[MB\].
* **Fixed a bug** where the Orphaned Users report would result in the Bad Request error message. The following errors were visible in the event log:

  `System.ArgumentNullException: Value cannot be null.` and

  `SysKit.SecurityManager.Business.Exceptions.ReportGeneration.ReportGenerationException: Exception of type 'SysKit.SecurityManager.Business.Exceptions.ReportGeneration.ReportGenerationException' was thrown.`

* **Various UX/UI improvements and minor fixes available.**

