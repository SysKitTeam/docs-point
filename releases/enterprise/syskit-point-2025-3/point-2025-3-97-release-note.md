---
description: This article lists features, improvements, and bug fixes in Syskit Point version 2025.3.97
---

# Syskit Point 2025.3.97

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.3.97

**Build number:** 34

**Release date:** July 01, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## New Features

* **Microsoft Power Platform is now available as an add-on to Syskit Point**.
  * This add-on provides visibility into your Power Apps, Power Flows, and Power Platform environments through detailed reports and helps you manage your resources through additional actions. 
  * [To get the additional license needed for Power Platform, contact our team for more details.](https://www.syskit.com/company/contact-us/)
  * [For more details on Power Platform for Syskit Point, please look through this section.](../../../power-platform/README.md)

* **Syskit Point now syncs custom SharePoint Agents!**
  * **New report is available**: **Custom SharePoint Agents Inventory**
    * The Custom SharePoint Agents Inventory report lets you **discover all custom-built SharePoint Agents** in your organization.
    * [For more details on the new report, take a look at the AI Agents report article.](../../../reporting/ai-agents-reports.md)
    * **Note** that SharePoint Agent files are synced gradually when changes are detected on your SharePoint sites. To sync them immediately, navigate to the site details screen and run the sync manually for your site of interest. 

## Improvements & Bug Fixes 

* **Improvements made to policies**: Maximum Number of Owners and Minimum Number of Owners.
  * **Default policies** will automatically apply to SharePoint Sites after the next Auto Discover sync.
  * **User-defined policies** can also be applied to SharePoint Sites by setting up rules or manually applying the policy to specific sites. 
  * [For more details on the Maximum Number of Owners policy, read this article.](../../../governance-and-automation/automated-workflows/maximum-number-of-owners-admin.md)
  * [For more details on the Minimum Number of Owners policy, take a look here.](../../../governance-and-automation/automated-workflows/minimum-number-of-owners-admin.md)

* **Added tooltips to Sensitivity Labels.**
  * When hovering above a sensitivity label, it now displays the user descriptions attached to the label. 
  * The tooltips can be found on the following screens:
    * Manage Sensitivity action on the Workspaces Overview
    * Sensitivity Review
    * Settings under General and Provisioning

* **Fixed an issue** that caused missing data for the Number of Owners and Number of Admins columns when exporting the Sites Overview. 

* **Fixed issues** with exporting the Users Overview screen. 
  * Fixed a bug that caused exporting filtered views for the Users Overview to include all users instead of the selected view. 
  * The exported Excel file now properly reflects column values and filters, as shown in Syskit Point.
  * The Company Name column was added to the export report.

* **Various improvements and minor UX and UI fixes are available**.
