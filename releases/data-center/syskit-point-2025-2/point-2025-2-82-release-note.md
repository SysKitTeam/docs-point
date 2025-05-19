---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.82
---

# Syskit Point 2025.2.82

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.82

**Build number:** 57

**Release date:** March 04, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../setup/set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../setup/set-up-point-data-center/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

* **Added the option to export audit reports** without including the details section.
  * This option is available on all Audit reports by clicking the arrow next to Export > Export without details.   

* **Improvements made to Security and Compliance Checks**: Inactive Workspaces.
  * **Clicking the ellipsis (three dots)** next to the *Send Reminder* button opens a dropdown menu with the following actions: **Change Admins, Keep, Delete, Archive**. 
  * Hovering over the ellipsis now displays a *More Actions* tooltip. 

* **Improved the error message** that is shown when removing Sharing Links. 
  * When removing a sharing link from the Permissions Copied section on the Permissions Matrix report or Matrix report and Access Review task, the action would fail with the following error message: 'Incorrect associated SharePoint object for this link.'
  * The message has been updated and states that the link can only be removed from the parent object. 

* **Improvements made to Provisioning.**
  * Fixed an issue where Outlook & E-mail Settings properties were not correctly applied when Provisioning a workspace.
  * Fixed an issue where Provisioning requests failed with the following error: `Error happened while resolving teamAsyncOperation`.

* **Added a new column** to the Power Automate Inventory report, which can be selected from the column chooser: **Premium License**.

* **Fixed an issue** where the expiration dates for the Share with Specific People links were not synced correctly.

* **Fixed an issue** where users falsely appeared as shadow users on the security & compliance report, although they are members of the workspace's unified group. This happened if the same members also had access given via a sharing link.

* **Fixed an issue** with Power Platform sync, which occurred when trying to sync an environment disabled due to inactivity. Inactive environments are no longer synced. 
  * Find the inactive environments in the Power Platform Environments report by selecting the Inactive Environments view.

* **Fixed an issue** that caused scheduled jobs to always run in the UTC Time zone instead of the one selected when connecting the tenant.

* **Fixed an issue** with the Change Owners action on the Inactive Workspaces policy screen of the Security and Compliance dashboard.
  * Due to the issue, the Change Owners action could not be completed when a Site did not have a group connected.  

* **Fixed an issue** that caused the following Storage sync error: `Violation of PRIMARY KEY constraint 'PK_Crawl_AmrApiJobListMapping'. Cannot insert duplicate key in object 'Crawl.AmrApiJobListMapping'.` 

* **Various improvements and minor UX and UI fixes are available**.
