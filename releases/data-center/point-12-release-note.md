---
description: This article describes the new features and improvements in Syskit Point version 12.
---

# Syskit Point 12

Sticking to our new year’s resolutions and trying to improve isn’t an easy task. Yet, **Syskit Point 12** takes the phrase ‘new year, new me’ quite seriously, and comes packed with new features and improvements, although the year has just started!

Discover what’s new in the list below!

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 12.0.0  
**Build number:** 387  
**Release date:** Feb 11, 2020

## Features

* **View inactive content information throughout Syskit Point!** To keep your Microsoft 365 tenant nice and clean, it is essential to identify which content and workloads are not being used, and are therefore obsolete. You can now easily discover whether your sites, Microsoft Teams, and Microsoft 365 Groups are being actively used on the overview screens in the Activity column, as well as the dedicated **Inactive Content report**. To decide whether something is inactive in your Microsoft 365 environment, we are collecting activity data for the following workloads: **SharePoint**, **Exchange**, **Yammer**, and **Microsoft** **Teams!** You can find more information on how Syskit Point detects unused content [here](../governance-and-automation/lifecycle-management/inactive-content.md).
* A new **Users with Privileged Access** report is available! Discover all admins, owners, or users with full control permissions, as well as users assigned to Azure AD Admin roles in your tenant. Such users are mission-critical since they have permissions to wreak havoc in your tenant, so make sure no one unwanted is on this list.
* A new **Groups Access** report is available! With the help of this report, find out where each security group has permissions in your tenant. This can be especially useful if you have migrated from SharePoint on-prem to Microsoft 365.
* A new **Role-Based Security** is available! The old Role-Based Security \(RBS\) feature was completely revamped and now introduces **Syskit Point Roles**, which you can assign to Azure AD admin roles, groups, or specific users. The new Syskit Point Global Reader role is now available, giving you the option to grant view permissions for users on all content and reports in Syskit Point, without the possibility to execute actions, making it easier than ever to include auditors in your processes. Find out how to setup Role-Based Security in the [following article](../configuration/enable-role-based-access.md).
* **Check for updates!** To help you stay up to date, from now on, you will get a notification whenever there is a new version of Syskit Point available for download. Every version comes with awesome new features, so make sure to **upgrade as soon as possible!**
* New **Add Admin** and **Remove Admin** actions available! You can now easily add and remove site admins in bulk and save precious time! Add Admin and Remove Admin Actions are available when one or multiple Sites or OneDrive sites are selected on the Sites overview screen. Additionally, the new **Change Administrators** action is available when you want to edit Primary and other Site Admins for a single OneDrive or Site. For your convenience, the Change Administrator action is also available on the Permissions Matrix report.

## Improvements

* An **Add to Group action** has been added to the User Details screen. This action makes it possible to add a user to one or multiple O365 Groups or Microsoft Teams.
* An **Add Owners/Members** action has been added to the Site details screen of Group and Microsoft Teams connected sites.
* A **Remove Owners/Members** action has been added to the Sites and Microsoft Teams & Groups overview screens when one or more Microsoft 365 Groups or Microsoft Teams, or their connected sites are selected.
* A **Subsites content level** has been added as an option in the Permissions Matrix advanced filter. This option enables you to display only site collection and subsite objects in the Permissions Matrix report.
* A **Remove from Group** action has been added to the Microsoft 365 Group connected site details page, as well as the Permissions Matrix and Externally Shared Content reports. The action is available when an Microsoft 365 Group member is selected.
* The **Sync Status Report** now comes with an **additional In Progress summary tile** that enables you to see which sites are being synced in real-time.
* **Various UX/UI improvements**, including **improved responsiveness of all screens** in Syskit Point, **enhanced action messages**, **upgraded design of the General Info tile** on the details screens, as well as a **refined design of the Home** dropdown menu.

## Bug Fixes

* Fixed a bug that would cause the following error to appear during Site Sync: `Microsoft.SharePoint.Client.CollectionNotInitializedException: The collection has not been initialized. It has not been requested or the request has not been executed. It may need to be explicitly requested.`
* Fixed an issue where the web application would unexpectedly stop working after a couple of weeks, with the workaround being to reenter the credentials in the Configuration Wizard. Syskit Point now uses a more reliable method of application authorization with certificates.
* Fixed a bug where an incorrect error was displayed when a site owner tried to access OneDrive content without being the OneDrive admin. The following error was displayed: `There is no data to show for this report.` The correct error is now displayed in such cases: `Unauthorized Access Current user has insufficient permissions to view site page. Only administrators and allowed users have access.`
* Fixed a bug where retrieving analytics data for Sites that failed to sync would cause the following error: `System.NullReferenceException: Object reference not set to an instance of an object at SysKit.SecurityManager.Business.Audit.AuditService.`

