---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2024.1.41
---

# Syskit Point 2024.1.41

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.1.41

**Build number:** 74

**Release date:** February 1, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

* **New updates added to the Storage Management feature**!
    * When the storage cleanup actions take a while to complete, the progress can now be tracked. 
    * Collaborators can now access Storage Metrics reports for their workspaces. 


## Improvements & Bug Fixes

* The ability to **manage sensitivity labels on Shared and Private channel sites** was added. 

* **Additional columns were added** to Reports in the Access Review tasks. When reviewing a SharePoint site, you can now find the Email, Last Logged In, and Sign-in status on the Users step.

* **A new column has been added** to the Site Analytics report that shows the **Type** of the workspaces.

* When selecting workspaces in the **Access section of the User details screen**, you can now open the **User Access report** from the side panel.

* **Additional features and optimizations added to the User Access report.**
  * **The User Access report has additional columns** available to select from the column chooser: Sensitivity Label, Created On, Last Logged In.
  * **The Delete User action was added** and is available only to Syskit Point admins.

* **Site Storage Metrics report** now has two types of data structure: the Files Only view, which is the default, and the Site Structure view.
  * To change the structure view for your report, click the *Show by* button located at the top right of the report.

* **The Details column was updated in the Audit Logs Overview report** to show all the recipients for the activities: Shared Power BI Report and Shared Power BI Dashboard.

* **Security Groups and Distribution lists have a details screen** added that enables the completion of member-related actions and provides the ability to drill down to view the Group Access report.  

* **The Site Storage Metrics Report has been optimized** for better support to large sites.  

* **Collaborators can no longer configure alerts** for users when the option *"Give collaborators access to subordinate user activities"* is disabled.

* **Improved the messaging** in the Policies settings to include more information about actions being taken. 

* **Improved the position of the Reconsent banner** to prevent issues accessing the sidebar navigation. 

* **Improved the description** for the Inactive Guest Users policy email and task screen.

* **Improved provisioning** by increasing the sturdiness of Syskit Point when applying Outlook properties to workspaces. 

* **Fixed an issue** where SHAREPOINT\\system account activity was used when calculating the Last activity of a workspace, even though the account was added to the list of Ignored Service Accounts. 

* **Fixed a bug** where Sensitivity Labels for Private channel sites were not being synced correctly. 

* **Fixed a bug** where deleted shared channels were not synced correctly. After sync, they would still be visible on the Teams details screen.

* **Fixed an issue** where task resolvers who were removed from their resolver position would still receive emails when someone else resolved their past Security & Compliance check violations.

* **Fixed bug** when generating the Preview Report for Rules that resulted in a "Bad Request" error when no workspaces were affected by the rule.
  * **Improved overall performance** when generating the Rule Preview Report. 

* **Fixed a bug** for the User Access report where exporting to XLSX wasn't showing Power BI workspaces.
  * The report now includes the name and type of resource for Power BI workspaces. 

* **Fixed the bug** where the Delete User action could not be completed for the Inactive Guest Users check. 

* **Fixed an issue** where the wrong email was sent during the provisioning process when Outlook properties failed.

* **Fixed a bug** that caused the owners of inactive workspaces to be able to keep their workspace indefinitely even when an admin had previously set a maximum time period for keeping an inactive workspace. 

* **Fixed an issue** where metadata sync was not properly functioning for external INT and DateTime values. 

* **Various improvements and minor fixes are available**.

## Security Updates

* **Replaced the System.IdentityModel.Tokens.Jwt with Microsoft.IdentityModel.JsonWebTokens NuGet**. 
  * Adressed security advisory - [CVE-2024-21319](https://github.com/advisories/GHSA-8g9c-28fc-mcx2).

* **Updated the Microsoft.Data.SqlClient NuGet**.
  * Adressed security advisory - [CVE-2024-0056](https://msrc.microsoft.com/update-guide/vulnerability/CVE-2024-0056).