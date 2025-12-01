---
description: This article lists improvements and bug fixes in Syskit Point version 2025.5.119
---

# Syskit Point 2025.5.119

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.5.119

**Build number:** 52

**Release date:** December 01, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Improvements made to Workspace Review.**
  * A new report view is now available on the Govern > Workspace Review > Overview > View Details screen. 
  * Access the new report view by enabling the Show Reviewers per Workspace toggle icon in the report toolbar for a detailed breakdown of reviewers assigned to each workspace. 
  * The report lists all reviewers for each workspace, including the designated manager and that manager’s email address.

* **Added a banner** to the Inactive Licenses, License Overview, and License Distribution reports.
  * The banner appears whenever licenses are missing information, like the price or default price.
  * The banner includes a link that directs users to the Settings screen, where pricing information can be included. 

* **Added an option** for creating modern SharePoint Sites through **Provisioning templates**.

* **Fixed an issue** where changes made on a SharePoint workspace did not trigger the full content & permission sync as expected which caused the workspace to only update after a manual sync. 

* **Fixed an issue** on the Shared Channel Details screen that caused the wrong Microsoft Team to be opened when navigating to the teams level. 

* **Fixed an issue** that caused a 403 error when workspace owners tried to complete their assigned Inactive Workspace tasks. 
  * The issue affected Microsoft Teams and Microsoft 365 Group owners who were not Site Admins of the connected SharePoint site. 
  * Workspace Owners can now complete all inactive workspace task actions: Keep, Delete, and Archive.

* **Fixed an issue** that prevented archiving Sites that contain subsites, with the following unauthorized access error: `An exception occurred while trying to archive [workspace name]. System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.`

* **Fixed an issue** where the site URL was missing from the Orphaned Workspaces report when exported as an XLSX file.
  * The site URL is now included in Excel exports for the report, and the URL column is available in the column chooser. 

* **Various improvements and minor UX and UI fixes are available**.