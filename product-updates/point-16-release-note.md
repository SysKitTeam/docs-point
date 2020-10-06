---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 16.
---

# SysKit Point 16

**SysKit Point 16 is here**!

Along with autumn comes a new version of SysKit Point packed with new features and improvements! Find what's new in the list below.

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 16.0.0  
**Build number:** 1211  
**Release date:** Sep 29, 2020

## Features

* **New User Access report is available!** To help you better understand how a user got all permissions, the new User Access report shows:
  * **every permission in a new row** to separate different permission sources, 
  * **the Details column** where you can see how the user got its permissions even if this was done through nested groups, 
  * **actions throughout the entire site structure** to simplify permission management – now you can easily edit and remove permissions on all objects down to the list item level.

    [To learn more about the new User Access report, navigate to the following article.](../common-tasks/check-access-for-specific-user.md)
* **SysKit Point gets Dashboard!** Here you can:
  * **see what was happening in your Office 365 environment** in the last 30 days at a glance  
  * **find summary data on your resources**, **internal and external users**, **sharing links**, and **used storage** - **all numbers are drillable**, taking you to the related reports which will show more details 
  * **detect potential issues**, for example, if your environment has inactive or orphaned resources

    [Find more information about the new Dashboard here.](https://github.com/SysKitTeam/docs-point/tree/4404dffd2b720abb0fec405b7f9e703eff326f3b/how-to/dashboard-overview.md)
* **New SharePoint Groups report is available!** Use the report to view all SharePoint Groups and their permissions on your sites, remove group members, or drill to the Group Access report for selected SharePoint Groups.
* **SysKit Point supports Hub sites!** You can find hub-related information on the Sites Overview screen, in the **Hub Title** and **Is Hub Site** columns, and determine if a site is a part of a Hub.
* **Block and Unblock User Sign-in actions are available!** With these actions, you can block or allow the user to access Office 365 and other Microsoft services.
* **New views are available on the Sites Overview screen!** The **External Sharing view** shows sites where external sharing is different from Only people in your organization. **Anonymous Sharing view** shows sites where external sharing is set to Anyone.
* **Remove from Security Group action is available!** Now, you can remove a user from the selected security group on reports like Permissions Matrix or User Access.
* **New Storage Limit and Storage Warning Level information available** on the Sites Overview screen! Coupled with the Storage Used column, they enable you to discover sites close to reaching the storage quota limit.

## Improvements & Bug Fixes

* **Improved detection of password protected sharing links** in SysKit Point. Password protected anonymous links are now correctly displayed on Permissions Matrix, Sharing Links, User Access, and Anonymous Links reports.
* **The Orphaned Groups report was improved.** It now shows all orphaned resources \(Microsoft Teams, Office 365 groups, and SharePoint sites\), resources with no owners, and provides you with the Change Admins action for classic sites. Since it's no longer limited to groups, it was renamed Orphaned Resources.
* **Improved the Permissions Review experience** by showing information about the currently active Permissions Review in the side panel in case a resource is selected. Additionally, when a Permissions Review is created for a single resource, the resource name is displayed in the Permissions Review title.
* **Email customization was improved** by adding the size, dimensions, and format information and validation on all email customization forms.
* **Improved the Edit Permissions dialogue** by adding the list of existing group members. That way, when editing group permissions, you can see all users that will be affected by the change.
* **The Remove Sharing Link action was improved** by adding the list of users currently using it to the action dialog displayed when removing a company-wide sharing link.
* **Improved the People Picker** by showing the email address next to the user's name when searching. Once selected, the email address is displayed on hover.
* **Improved error handling in the Configuration Wizard when importing an SSL Certificate** on the Web Application Settings step.
* **The Remove Access action**, when performed on sharing links shared with specific people, now deletes the entire link in case the last user is removed from it.
* **Fixed an issue** where sites with many users would not sync correctly because of a sync timeout.
* **Fixed an issue** where a change in Audit settings would not be applied until SysKitPointService was restarted. Changes are now applied instantly.
* **Fixed an issue** where OneDrive sites would not show the correct date in the 'Created on' column.
* **Fixed an issue** where the Group Access report would not show the 'Everyone' and 'Everyone except external users' security groups.
* **Fixed a bug** where deleted sites would show up as not synced on the Sync Status Report.
* **Fixed a bug** where Grant Access action would not work on other reports and views except on the Permissions Matrix.
* **Fixed an issue** where the External Users Report would not show correct information about who added the guest users.
* **Removed the Sync option** erroneously displayed on the site details page of deleted resources.
* **Various UX/UI improvements and minor fixes** available. With this version, **SysKit Point switches to Microsoft's new Office 365 icons**.

