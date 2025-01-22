---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.1.77.35
---

# January 22, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will start rolling out with this announcement and is expected to reach all customers in the upcoming days.

## New Features

* **Power Platform inventory available in Syskit Point!**
    * You can now enable Power Platform data collection and generate reports that show the state of your Power Platform environments, apps, flows, and connections.
    * [Find more details on how to configure Power Platform data collection in this article.](../../configuration/power-platform.md)
    * [For information on all the Power Platform reports available in Syskit Point, take a look at this article.](../../reporting/power-platform-reports.md)

## Improvements & Bug Fixes

* **Added new actions** to the workspace details screen.
    * The **Manage Privacy action** was added to the Manage section on the right sidebar and includes the following actions:
        * Change Privacy 
        * Remove Privacy
        * Ask Owners
    * The **Manage Policy action** was added to the Manage section of the right sidebar. 

* **Added new columns to the column chooser.**
    * On the **Access Review > Sharing step**, the **Job Title** column can now be selected from the column chooser.
    * On the **Permission Matrix report**, the **Job Title** and **Department** columns can be selected from the column chooser. 

* **Fixed a bug** on the Settings > Acess Review Options > Manage Reviewers screen, which incorrectly showed Shared Channels on the list of reviewers. 

* **Fixed an issue** where the Rule Preview showed Private and Shared Channels as having Access Review policies applied.
    * Instead of applying the policy directly to Private Channels and Shared Channels, the policy is applied to parent Teams workspace. 
    * Private Channels Access Review tasks are created depending on the Access Review policy settings applied to the parent Teams workspace.
    * Shared Channels cannot be included in the Access Review.

* **Fixed an issue** where Tree reports, such as the Unique Permission report, did not filter files correctly when a filter was applied to a column. 

* **Fixed an issue** where the default settings for the storage limit and time zones were not applied when provisioning new sites. 
    * Provisioned sites now respect the default settings configured in the SharePoint Admin center. 

* **Fixed an issue** where user sync failed for users whose usernames started with the `$` symbol.

* **Fixed an issue** where the Remove Sharing Link and Remove All Sharing Links actions on the Sharing Links report failed with the following error:  `An exception occurred while removing shared link from a file. 
System.Exception: Incorrect associated SharePoint object for this link.`

* **Fixed an issue** where applying Sensitivity Labels when Provisioning a workspace failed with the following error: `SysKit.Point.SPO.Model.ClientSite+SetIsSiteAdminException: Error while trying to add SiteAdmin role for user.`

* **Various improvements, including UX and UI fixes, are available**.