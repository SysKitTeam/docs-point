---
description: This article lists improvements and bug fixes in Syskit Point version 2024.5.64
---

# Syskit Point 2024.5.64

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.5.64 

**Build number:** XX

**Release date:** October 07, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

* **New feature added to Provisioning!**
  * New section available when creating or editing Templates: **Content & Structure**
  * The Content & Structure section provides three options:
    * **Start from scratch** - the new provisioned workspace is blank. 
    * **Use existing Microsoft Teams template** - when selected, predefined apps, channels, and tabs are created for the new provisioned workspace based on the template used. 
    * **Copy from existing team** - selecting this will copy channels, apps, tabs, and settings from the selected existing workspace to the new one being provisioned.   
  * [For more details, take a look at the Content & Structure article.](../../governance-and-automation/provisioning/content-and-structure.md)


## Improvements & Bug Fixes

* **Improvements made to reports.**
  * **The Sites Overview report and Teams & Groups Overview report** now have an additional column to select from the column chooser: **Last Reviewed**.  
     * This column provides information on the date and time when the last Access Review was performed on the workspace.
  *  **The Site Overview, Storage Metrics, Site Storage Metrics reports** have a new column available to select from the column chooser: **Site Type**
  * **The User Access and Group Access reports** now have additional columns: Sensitivity Label and Retention Label. 
  * **The Site Storage Metrics report** is now available in all Syskit Point Subscription plans. 

* **A new column** is available for workspaces in the Govern > Security & Compliance section: **Activity**.
  * The Activity column shows the current state of the workspace: 
    * If the light is **green**, the workspace is **active**.
    * If the light is **gray**, the workspace is **inactive**.
  * Activity is **based on usage** of SharePoint, Exchange, Teams and Yammer in **the last 90 days**.
  * This column is available for both **Active Tasks and History**. 

* **New Change Privacy action has been added** to the following reports: 
  * Teams & Groups Overview, Teams & Groups Details, Sites Overview (only for Microsoft Teams & Microsoft Groups)
  * The Change Privacy actions change the privacy of a workspace from Private to Public or vice versa. 

* **The Manage Sensitivity action** on workspaces can now also be completed by Collaborators.
  * Admins can decide which of the Manage Sensitivity actions are allowed for Collaborators: Apply, Remove, or both. 

* **Sensitivity Labels** can now be marked as sensitive by administrators in the Settings of Syskit Point. 
  * Content marked with such label(s) will be shown in reports that display sensitive content.
  * The Sensitivity Label with the highest priority rating is automatically set as sensitive.
  * Administrators can find the list of Sensitivity Labels in settings and define which should be registered as sensitive.

* **New Reassign to Manager e-mail** is sent when owners do not resolve the Minimum Number of Owners and Maximum Number of Owners vulnerability tasks, and the reassign option is enabled in the policies.
  * If the task is not completed by the due date, the defined users will receive an e-mail stating that the task has been reassigned to them as it was not completed by the owner(s).
  * Learn more about this in the [Resolve Minimum Number of Owners Tasks](../../point-collaborators/resolve-governance-tasks/minimum-number-of-owners.md) and [Resolve Maximum Number of Owners Tasks](../../point-collaborators/resolve-governance-tasks/maximum-number-of-owners.md) articles. 

* **Fixed an issue** where the link sent in the *task completed* e-mails, after completing an Access Review, would direct collaborators to the Govern screen of Syskit Point.
  * The link sent in the e-mail now directs collaborators to the completed Task in Syskit Point. 


* **Fixed an issue** that caused the prefix not to show properly when a workspace was archived or restored. 
  * The prefix [Archived] is added to the workspace name if a workspace is archived.
  * The prefix [Archived] is removed from the workspace name if a workspace is restored.  

* **Fixed an issue** where the policy vulnerability reminder e-mails were erroneously sent after a site sync was performed.

* **Fixed a bug** that caused the layout for the PDF file for tree reports not to show the indent that clearly indicates the relationship between files and workspaces. 

* **Fixed an issue** where the Sign Out button for Syskit Point did not work properly after the session had expired, preventing users from signing out. 

* **When a Security Group is added as a SharePoint Site Admin**, the Owners of the Security Group are no longer assigned as the SharePoint Site Admins.  

* **Fixed a bug** with the Advanced Options button on the Create/Edit Metadata dialog.

* **Improved detection** of the Shadow Users policy.

* **Various improvements and minor UX and UI fixes are available**.
