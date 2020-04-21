---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 13.
---

# SysKit Point 13

Spring has arrived, and with it, **SysKit Point 13**! In this version, we introduce our brand-new **Automated Permissions Review** feature, which will help you extend the area covered by spring cleaning in your Office 365 environment. To make the cleaning easier **new actions were added** to the toolbelt, the **workspace was expanded**, and **all reports and exports were optimized** to reduce the load on your environment. 

A lot of tweaks make this version of SysKit Point the best one yet, so make sure to read on and get to know them all!

[Try SysKit Point trial](https://syskit.com/products/point/download/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 13.0.0  
**Build number:** 653  
**Release date:** Apr 22, 2020

## Features

* **Automated Permissions Review** is available! This new feature takes care of the permissions review process in your environment by sending **automatic reminders via email to site admins**, Microsoft Teams owners, and Office 365 Group owners, and **creates related tasks for them in SysKit Point**. In the tasks, admins and owners get the full overview of users, their permissions, as well as shared content, edit permissions, and complete the Permissions Review Task once everything seems to be in order. Use the following links to find out:
  * [how to configure the Automated Permissions Review to suit your governance policies](../installation-and-configuration/enable-permissions-review.md),
  * [what happens in the permissions review process](../common-tasks/permissions-review.md), and
  * [which subscription plans include this feature](https://www.syskit.com/products/point/pricing/).
* **Cancel option is available** when generating reports. Reports in large environments having a lot of content can take a while to generate. While at it, if you change your mind and want to go a step back, you now have the possibility to cancel the report generation. By doing so, all server resources are being freed automatically ensuring best performance experience for all users. The same happens when you refresh the web page, close the browser tab, or even close your browser to optimize the usage of server resources.
* **New Grant Access action** is available, which enables you to grant permissions to multiple users and security groups, either directly, or by adding them to multiple existing SharePoint groups. The action is available for all SharePoint objects with broken permissions inheritance and can be found on the Site Details screen, Users report, and Permissions Matrix report.
* **New Change Owners action** is available. You can now easily change owners of Microsoft Teams and Office 365 Groups from multiple reports and screens in SysKit Point – Sites Overview screen, Microsoft Teams & Groups overview screen, Office 365 Group and Microsoft Teams details screens, Group Memberships report, Orphaned Groups report, Permissions Matrix report, and the Task Details screen when performing Permissions Review for a specific Microsoft Teams or Office 365 Groups.
* **Expand to Full Screen option** is available. You can find it on all reports in SysKit Point and use it to remove everything but the report grid and filters from your current view. The side panel holding all available actions is also collapsible, giving you the way to see all your data even on the smallest screens.
* **The Onboarding carousel** was created to introduce SysKit Point to new users and shows brief animations on how to navigate through screens, select different views, and perform other common actions in SysKit Point. The carousel appears only when a user navigates to the overview, or details screen, or the Report Center for the first time.

## Improvements & Bug Fixes

* **Improved Security group sync** available. SysKit Point now collects data for all security groups in your Office 365 tenant. Before, only security groups with permissions on SharePoint sites were synced. SysKit Point now detects if a security group was deleted and displays such groups accordingly on reports.
* **Improved export** available. When different users trigger the export of multiple reports simultaneously, servers sometimes refused to collaborate due to a lack of resources \(CPU or RAM\). To avoid such problems, exports are now processed sequentially, one by one, minimizing the consumption of server resources.
* **Improved error handling and messages** available. In the unlikely event of failure, SysKit Point will show clearer messages to better explain what went wrong. This applies to errors that can appear while executing an action, when activating the product, or after long inactivity periods when SysKit Point will ask you to sign in again.
* **Various UX/UI improvements and bug fixes** available, including improved support for mobile devices, non-chromium browsers, fixed icons in reports and PDF exports, and fixed date format based on the browser locale.
* **Fixed an issue** where the SysKit Point Configuration Wizard failed to create Azure AD Certificates for SysKit Point Client and SysKit Point Service app registrations. The following error was visible: `Microsoft.IdentityModel.Clients.ActiveDirectory.AdalServiceException: AADSTS700027: Client assertion contains an invalid signature. Reason – The key used is expired.`
* **Fixed a bug** where the Microsoft Teams activity was not considered when displaying the Activity column on the Microsoft Teams & Groups overview screen.

