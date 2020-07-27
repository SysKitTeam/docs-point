---
description: >-
  This article describes new features and improvements in SysKit Point version
  11.
---

# SysKit Point 11

Just a month has passed since the last release, but we have been busy working on brand new features in SysKit Point, to give you the best possible Christmas present - **SysKit Point version 11**.

Scroll on to see what's new!

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 11.0.0  
**Build number:** 253  
**Release date:** Dec 18, 2019

## Features

* **SysKit Point now supports private channels!** As a Microsoft Teams owner, you will now have complete control over private, as well as standard channels. All channels are visible in the detail page of a Team, and are drillable, giving you the private channel content and members in just one click. A **new report is available** – **Microsoft Teams with Private Channels** – where you can discover all private channels in one place and discover owners and members. 
* **We’ve optimized the Permission Matrix report.** To make the report less cluttered and provide better experience, we now **display all the permissions that are inherited from a parent as a single line – “Permissions copied from a parent”.** This makes it easier to track all permission changes that make this object differ from the parent. If you still prefer to see all the information, you can easily expand this section and see the detailed list of people who have access. 
* **New Site Structure report is available.** Use this report to check how the content in your tenant is organized – from the site, all the way to a document level. You can find the new report in the Report Center. 
* **A new Sync Status report is available.** When SysKit Point syncs data, it does so in the background for the user's convenience. Still, sometimes you want to check what is happening under the hood. The Sync Status report shows all the needed information at a glance. You can select all unsynced sites and start the sync directly from the report. To access the report, click the View Details link in the Sync Schedule Details dropdown menu. 
* **Delete Orphaned User action available!** From the Orphaned Users report you can now select a user and Remove it from all sites and/or connected Office 365 Groups, to keep your tenant clean and clutter-free. 
* **Sync Schedule details are now available.** On every screen where the Sync button is visible, if you hover over it, you will now find more useful information on what exactly the current sync does, when it was last run, and when it will run the next time. 
* **Persistent layout on overview screens and reports is now available!** In case you add a column, set the width or order of columns, these changes will now be saved for your convenience. Even the search, sort or filtering of column data is saved – retyping or searching again will no longer give you a headache. 

## Improvements

* **Externally Shared Content and User Access reports were optimized!** Nobody likes to wait for their data to generate while helplessly watching the loading animation. Therefore, the before mentioned reports were tweaked to be fast, in some cases 10x faster, while still being precise as they were before.  
* **Report Center was revamped.** When the number of useful reports grows rapidly, as it does in SysKit Point, things can get out of control quite quickly. Therefore, the Report Center was redesigned to be as simple and clean as all other parts of SysKit Point. Added views and improved search will help you find the report you need faster. 
* **The availability of Management Actions was improved.** Some actions might get handy while you browse through SysKit Point reports or content screens, therefore, we added already existing actions where appropriate. You can also find the Manage on parent link on objects that inherit permissions. The link takes you to the first parent where it is possible to manage permissions.  
* **Edit Permissions action now supports multi-select!** 
* **Site Permission Activities report was renamed Site Permission Changes** to better describe the activities it shows. 
* **UX and UI were improved.** The design is now more consistent throughout SysKit Point. There were some big changes, but plenty of small ones you might not notice, but will make using SysKit Point easier.  
* **Improved handling of various errors while syncing tenant or audit log data.** 

## **Bug Fixes**

* Fixed an issue where SysKit Point Configuration Wizard would fail in case the service account was defined with an FQDN. 
* Fixed an issue where login to SysKit Point failed with the following error:   `Microsoft.Graph.ServiceException: Code: MailboxNotEnabledForRESTAPI  Message: REST API is not yet supported for this mailbox.   Inner error at SysKit.SecurityManager.SPO.Graph.GraphLoaders.TenantGraphLoader.<GetUserPhoto>d__25.MoveNext()`
* Fixed a bug where SysKit Point Configuration Wizard would fail when creating a database on German Language MS SQL Server Versions. 
* Fixed an issue where no channels were loaded as a result of changes in Microsoft Graph API.  
* Other various minor bug fixes. 

