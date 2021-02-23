---
description: This article describes the new features and improvements in SysKit Point version 14.
---

# SysKit Point 14

**SysKit Point 14** is here!

Before the summer, it’s time to **get your Microsoft 365 tenant into shape**! To help you with that, **SysKit Point 14** comes equipped with **Lifecycle Management Automation** and a set of new actions for you to exercise - **Keep**, **Archive**, **Delete**, and **Restore**.  
As with all SysKit Point upgrades, this one is also filled with big and small improvements, giving you the best experience ever! Read on and learn what’s new!

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 14.0.0  
**Build number:** 836  
**Release date:** Jun 16, 2020

## Features

* **Lifecycle Management Automation** is now available! When the feature is enabled, SysKit Point sends automatic reminders via email to site owners in case their Microsoft Teams, Microsoft 365 Group, or a site is not actively used longer than the period defined in settings. Site owners can then decide whether to **keep**, **archive**, or **delete** such resources directly from the email! Along with the reminders, SysKit Point creates **Lifecycle Management tasks for site owners**. It allows SysKit Point Admins to monitor the owners’ response by providing essential metrics on the **Lifecycle Management Overview screen**. Use the following links to learn:
  * [how to enable and configure Lifecycle Management Automation](../installation-and-configuration/enable-lifecycle-management.md),
  * [more about the Lifecycle Management process](../common-tasks/lifecycle-management.md), and
  * [which subscription plans include the Lifecycle Management Automation feature.](https://www.syskit.com/products/point/pricing/)
* **New lifecycle management actions** are available! Along with the Lifecycle Management Automation feature, we introduce further actions – **Keep**, **Archive**, **Delete**, and **Restore** – to help you manage your Microsoft 365 resources. These actions are closely related to the Lifecycle Management Automation tasks but are also available in case the automation is not enabled. [To learn more about lifecycle management actions, read this article.](../common-tasks/lifecycle-management-actions.md)

## Improvements & Bug Fixes

* **Auto discover sync improved**! SysKit Point is now able to distinguish between kept, archived, and deleted resources. This information is preserved in Microsoft 365 and will be recognized by SysKit Point, even if the database changes. Moreover, additional data is now synced - Microsoft Teams and Microsoft 365 Group description – and displayed as a part of the lifecycle management tasks.
* **Permissions Review improved**! Permissions reviews got a facelift in the new version of SysKit Point. Additional columns were added to related reports and various UX improvements made to simplify the permissions review process for site owners and admins. User Activity report was also changed to enable site owners and admins to see all activity on their sites, even for users they are not the manager of.
* **Remove Access action improved**! The action will now show more precise messages in various cases:
  * when removing users with access to content given through a companywide sharing link. 
  * when trying to remove a Primary admin
  * when trying to remove access for a blocked user
  * when trying to remove access for multiple users in case the removal fails for a single user

    Action dialog description was also changed to improve readability.
* **External user’s management improved**! Site owners and admins can now view reports for external users that have access to their sites. Before, site owners needed to be the external user's manager to see such information, which often resulted in insufficient data for most site owners.
* **Sign-in flow is improved**! Before, SysKit Point would always redirect to the Home screen after a user signed in, even though they opened a link with a specified target screen from a Permissions Review email. Now, the defined target screen opens after the sign-in and enables a user to continue where he left off.
* **Various UX/UI improvements and minor fixes available.**
* **Fixed an issue** where the Change Owners and Change Admins actions would result in duplicate permissions review tasks.
* **Fixed a bug** where, after long periods of inactivity, SysKit Point Service would result in the following error: `SysKit.SecurityManager.SPO.Graph.GraphException: DeltaLink older than 30 days is not supported.`
* **Fixed an issue** with the database upgrade that appeared when upgrading SysKit Point to a new major version and resulted in a timeout exception.

