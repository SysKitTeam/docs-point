---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.78
---

# Syskit Point 2025.2.78

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.78

**Build number:** 60

**Release date:** February 06, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

* **Power Platform inventory available in Syskit Point!**
  * You can now enable Power Platform data collection and generate reports that show the state of your Power Platform environments, apps, flows, and connections.
  * [Find more details on how to configure Power Platform data collection in this article.](../../../configuration/power-platform.md)
  * [For information on all the Power Platform reports available in Syskit Point, take a look at this article.](../../../reporting/power-platform-reports.md)

* **New Archive method available!**
  * With the introduction of Microsoft 365 Archive, Syskit Point now provides an additional option for archiving workspaces:
    * **Microsoft 365 Archive** - archives the site through Microsoft 365 and moves it into a cold storage tier for archived sites. 
    * The standard Syskit Point archiving method has been renamed into **In-place Archive** - this method places the workspace into a read-only state.
  * [More details on archiving are available in the Resolve Inactive Workspaces Tasks article.](../../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md)
  * [For information on the Inactive Workspaces policy, take a look at this article.](../../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)

## Improvements & Bug Fixes

* **Groups endpoint added to Syskit Point API!**
  * You can now retrieve all groups collected by Syskit Point via API call. You can also get data for specific group types or a single group by providing the group name.
  * Additionally, you can get information about group memberships for all groups.
  * [You can find more details in the Syskit Point API article.](../../../integrations/syskit-point-api.md)

* **Added new actions** to the workspace details screen.
  * The **Manage Privacy action** was added to the Manage section on the right sidebar and includes the following actions:
    * Change Privacy 
    * Remove Privacy
    * Ask Owners
  * The **Manage Policy action** was added to the Manage section of the right sidebar. 

* **New columns have been added to reports.**
  * On the **Access Review > Sharing step**, the **Job Title** column can now be selected from the column chooser.
  * On the **Permission Matrix report**, the **Job Title** and **Department** columns can be selected from the column chooser. 
  * **The External User Type** column has been added and can be selected from the column chooser. 
  * On the **Govern > Provisioning report**, the **Resolved By** column can now be selected from the column chooser.

* **Improvements made to the Activity column** on the Inactive Sites view on the Sites overview screen and Inactive Groups view on the Teams & Groups overview screen. 
  * Activity is determined by the usage of SharePoint, Exchange, Teams, and Yammer within the timeframe specified in the Inactive Workspaces policy. 

* **The Settings icon and User icon** placements have now been updated.
  * The Settings icon has been moved to the top-right corner of Syskit Point, and the User icon has been moved to the far right corner for better accessibility. 

* **Syskit Point now collects additional audit events** for SharePoint versioning.
  * Seven new audit events have been added: _File version trimming setting on site for new libraries is changed_, _File version trimming setting on tenant for new libraries is changed_, _Started bulk deleting file versions_, _Started bulk expiring file versions by using a schedule file_, _Started generating file version expiration export_, _Started updating version settings on all document libraries on the site_, _Updated expiration date of a file version_
  * These help you track changes to version limits at the tenant, site, or list level. 

* **The date format in emails** has been updated.
  * The date now shows in the format of MMMM, D, YYYY (ex. June 5, 2025)
  * The emails no longer show an exact time next to the date.  

* **Improvements made to the Syskit Point app for Microsoft Teams**. 
  * The Requests screen now has default sorting and **the Requested On column** is automatically sorted in descending order, displaying the most recent requests at the top.
  * **Fixed a bug** that caused the app to show incorrect users as Approvers (Active and Resolved) in **the Sent To column**. 
  * **Fixed an issue** where Teams archived via the Teams Admin Center were not recognized as archived by Syskit Point.

* **The Automatic Versioning policy** now ignores Deleted, Archived, Read-only, and Locked workspaces. 

* **Extension Attributes** were added to the Users Overview report.

* **Improvements made to Provisioning.**
  * **When copying** Structure or Structure & Content from an existing workspace using a Provisioning template, the site logo is also copied. 
  * **When creating a Provisioning Template**, you can now select Inactive Workspaces from the list of available policies.

* **Fixed an issue** where the default settings for the storage limit and time zones were not applied when provisioning new sites. 
  * Provisioned sites now respect the default settings configured in the SharePoint Admin center. 

* **Fixed an issue** where custom metadata that was not defined in Syskit Point did not show a red warning in the column, leaving that space empty instead. 
  * Custom metadata must be defined in Point before the correct metadata value is shown in the column. 

* **Fixed an issue** on the Tenant Storage Metrics report, where the storage trend was not refreshed when switching between report views (Last 180 Days, Last 30 Days, etc.).

* **Fixed an issue** where Tree reports, such as the Unique Permission report, did not filter files correctly when a filter was applied to a column. 

* **Fixed an issue** where the Shared with Everyone policy was incorrectly resolved when it was set to resolve automatically. 

* **Fixed a bug** that made the Request Review action visible for Collaborators on the Access Reviews report. 

* **Fixed an issue** where the Remove Sharing Link and Remove All Sharing Links actions on the Sharing Links report failed with the following error:  `An exception occurred while removing shared link from a file. 
System.Exception: Incorrect associated SharePoint object for this link.`

* **Fixed a bug** on the Settings > Acess Review Options > Manage Reviewers screen, which incorrectly showed Shared Channels on the list of reviewers. 

* **Fixed an issue** where the Rule Preview showed Private and Shared Channels as having Access Review policies applied.
  * Instead of applying the policy directly to Private Channels and Shared Channels, the policy is applied to parent Teams workspace. 
  * Private Channels Access Review tasks are created depending on the Access Review policy settings applied to the parent Teams workspace.
  * Shared Channels cannot be included in the Access Review.

* **Fixed an issue** where user sync failed for users whose usernames started with the `$` symbol.

* **Fixed an issue** where applying Sensitivity Labels when Provisioning a workspace failed with the following error: `SysKit.Point.SPO.Model.ClientSite+SetIsSiteAdminException: Error while trying to add SiteAdmin role for user.`

* **Fixed an issue** where editing Provisioning templates resulted in the site picker loading indefinitely when copying content or structure from an archived or deleted workspace. 
  * Error messages have also been improved to better handle and explain such scenarios. 

* **Fixed a bug** that caused the Site Sync to fail due to a SharePoint Object's URL being too long.

* **Fixed an issue** where adding users when Resolving Access Requests for Exchange Groups (mail-enabled security groups & distribution lists) did not update the members list until the next sync.
  * Now, the change is immediately applied, and after refreshing the workspace, the added users can be found in the members list.

* **Fixed a bug** on the Users with Privileged Access report that caused the report to crash with the following error: `Error while exporting report: {ReportName} 
System.Collections.Generic.KeyNotFoundException: The given key 'principal_ExtensionAttribute1' was not present in the dictionary.`

* **Various improvements and minor UX and UI fixes are available**.
