---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.90
---

# Syskit Point 2025.2.90

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.90

**Build number:** 31

**Release date:** May 06, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2Fv2025-2-91%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

{% hint style="information" %}
The 2025.2.90 release brings important improvements to Syskit Point’s backend architecture, which is part of our **ongoing commitment to ensuring the platform remains highly scalable**. The migration percentage for this process will reset with this update. **This is expected** and serves to continue delivering improvements.
{% endhint %}

{% hint style="warning" %}
**Please note!**\
Global admin re-consent is required after the upgrade to the latest version due to changes in APIs used to [detect Teams chat activity](../../../configuration/microsoft-teams-activity.md) and if you enabled Power Platform data collection in one of the previous versions.
Consent is required due to permission change introduced to enable [running Power Platform actions](../../../power-platform/power-platform-actions.md) in Syskit Point. [Learn more about permission changes here](../../../requirements/permission-requirements-change-log.md)
{% endhint %}

## New Features

* **New Power Platform actions are available.**
  * You can now complete the following actions on Power Platform reports:
    * **Change Owners**
      * This action can be completed for Flows on the Power Automate Inventory and Permissions reports, as well as Apps on the Power Apps Inventory and Permissions reports
      * On the reports, select a single App or Flow and modify the Primary owner and Co-owners
      * Note that the Primary owner cannot be changed for the non-solution Flows currently synced in Syskit Point
      * Note that the Change Owners action cannot be run on SharePoint Form apps
    * **Add Co-Owners**
      * This action can be completed for Flows on the Power Automate Inventory report and Apps on the Power Apps Inventory report
      * On the reports, select one or multiple Apps or Flows and add additional Co-owners, which can come in handy when trying to define Co-owners on multiple orphaned Flows
    * **Delete Environment**
      * This action helps you remove unused environments and can be completed on the Power Platform Environments report
  * [For more details, please take a look at the Power Platform actions article.](../../../power-platform/power-platform-actions.md)

## Improvements & Bug Fixes

* **Introduced multiple Power Platform improvements and fixes**:
  * Improved error handling in Power Platform sync.
  * Improved error handling and action log messaging for Power Platform actions.
  * Fixed an issue where SharePoint Form apps were incorrectly shown as orphaned. 
  * Other UX/UI improvements.

* **Improved the Sync job in Syskit Point to handle sites with high subsite count better**. 

* **The Permission Matrix report** can now be generated for specific document libraries or folders. 
  * Folder and library drill-downs were added to the Permission Matrix selection step, which allows users to generate detailed reports even on large sites with many files. 
  * Drill down by clicking the workspace or document library name on the selection step.

* **Added the Company Name column** to the Users Overview screen. 
  * The Company Name is now retrieved during the user sync and can be selected from the column chooser on the Users Overview screen. 

* **Improved the visibility of Sensitivity Labels** on the Workspace Details screen. 
  * Sites with sub-labels now show both the parent and sublabel names. 

* **Fixed a bug** where the Manage Sensitivity action was erroneously available for Private and Shared channels, and running the action resulted in an error. 
  * Private and Shared channels inherit the sensitivity label applied to the parent team workspace. Apply the label to the parent team to get the desired outcome.

* **Improvements made to action tracking for the Action Log details screen.**
  * When you remove sharing links, update group membership, or change workspace privacy settings, the system categorizes and shows what actions were taken. 

* **Improved the handling and logging** for AMR API events during Storage sync. 
  * New types of events, such as job errors, cancellations, and warnings, are now properly logged. 

* **Fixed an issue** with custom dropdown metadata in the Change Metadata dialog. 

* **Fixed an issue** which caused the Site Sync to fail with the following error: `Violation of PRIMARY KEY constraint 'PK_SharePointSharingLinks'. Cannot insert duplicate key in object 'dbo.SharePointSharingLinks'`

* **Fixed an issue** with audit log processing where the audit log collection was incorrectly stopped due to a high load.

* **Fixed an issue** with the User sync where some special characters would cause failure to perform a complete user sync.

* **Fixed an issue** where storage sync would fail with the following error: `Violation of PRIMARY KEY constraint 'PK_FileInfos'. Cannot insert duplicate key in object 'Storage.FileInfos'.`

* **Fixed a bug** that caused missing filters in Provisioning Request reports. 
  * When the Provisioning Requests report had no results, filters (e.g., Date) were not visible, but now the filters can be found even when the report is empty. 

* **Fixed the Microsoft 365 Archive action** for Microsoft 365 Groups.
  * Users with the SharePoint Admin role can now successfully archive Microsoft 365 Groups even when not listed as group owners. 

* **Fixed an issue** that didn't include the Details and Error columns on the Actions report when exporting it to Excel. 

* **Fixed an issue** where Microsoft Team Owners who were not also Site Admins could not perform the expected actions in Syskit Point to resolve security & compliance vulnerabilities.
  * The **Add users with Full Control** setting needs to be enabled for the Syskit Point Collaborators role to ensure that collaborators who are Team owners can access Syskit Point and resolve their tasks. 

* **Fixed the issue** where the Storage sync job would sync storage data based on the last sync time instead of when the sync was last successful.

* **Fixed a bug** with the File Storage Details report that caused the File Details columns to not load data correctly when viewing files Older than 6 months. 

* **Fixed the bug** that caused deleted policies to appear in the filter for the Applied Policies column on the Overview screen reports.

* **Syskit Point now automatically assigns tasks to Syskit Point Admins** if a defined fallback user is no longer active.
  * **For example**, a fallback user can be defined when a user doesn't have a manager. Still, the specified user can be deleted or blocked from his sign-in.  In that case, Syskit Point admins will be assigned to unresolved tasks to ensure task completion.

* **Fixed an issue** that caused the export action to not work on the Manage Reviewers screen. 

* **Fixed an issue** where the Remove All Sharing Links action removed all links instead of only the selected ones. 
  * This option has been changed, and the updated action now removes only the selected links. 

* **Fixed an issue** where the service account was erroneously removed from being Site Admin when applying a sensitivity label or applying the versioning limit policy via rule. 
  * The service account will no longer be removed if it is set as Site Admin before running the actions.

* **Various improvements and minor UX and UI fixes are available**.
