---
description: This article lists improvements and bug fixes in Syskit Point version 2024.4.54
---

# Syskit Point 2024.4.60

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.4.60 

**Build number:** 56

**Release date:** September 10, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

* **New Sensitivity Labels report is now available!**
  * The Sensitivity Labels report **shows a complete overview of your Sensitivity Labels as well as summarized data about your workspaces and files**. 
  * The report shows the name of the sensitivity label, the priority, the status of the label, the scope it covers, the number of workspaces affected, and the number of files affected. 
  * The report **can be accessed through Reports** by finding and clicking the Sensitivity Labels report to generate it or by **selecting the Sensitivity Labels category from the Filter**. 
  * For more details on the report, [take a look at the Sensitivity Labels report article](../../../reporting/sensitivity-labels.md).

* **A new API endpoint was added enabling you to get user access data!**.
    * Use it to get information on which MS Teams, sites, M365 Groups, and OneDrive the user has access.
    * The following data is available in the response: Workspace Name, URL, Workspace Type, and the user's permission.
    * [Find more information about Syskit Point API in the related article.](../../../integrations/syskit-point-api.md)

## Improvements & Bug Fixes

* **New Sensitivity Label filter added to Sharing Links report!** 
  * After selecting an active sensitivity label from the filter, the Sharing Links report shows all Sharing Links with files containing the selected sensitivity label.   
  * If the no label option is selected, only the Sharing Links whose files do not contain a sensitivity label are shown.

* **Improved the Policy monitor job**, which is responsible for vulnerability detection. 
  * Timeouts were implemented to prevent the job from running indefinitely in case a single policy detection runs longer than expected due to many workspaces in the tenant.
  * Optimized the **detection** of policy vulnerabilities.
  * Improved the **performance** of the Private Workspaces Shared with Everyone policy.

* **The due date in the policy emails** has been changed to reflect only the date and not the time for when the task is due. 

* **The Syskit Point Teams app will now show the custom app name in the notifications panel** if the app appearance is customized. 

* **Improved the information message** when making changes to the Appearance and E-mail sections in Settings to include more details on the size and format of the logo and banner. 

* **Fixed an issue** that caused the Privacy column on the Group Access report to appear empty for some Microsoft 365 Groups and Teams. 

* **Fixed a bug** when generating the Externally Shared Content report that caused the report's description not to show correctly. 

* **Fixed an issue** where the Department dropdown would overflow on smaller screen sizes when defining conditions in the New/Edit Rule dialog.

* **Fixed an issue** when using the **Sensitivity Labels condition for Rule creation**, which caused the Preview Report not to load properly and not apply the rule to workspaces. 

* **Fixed a bug** that caused an auto-discover sync error when the setting for "Autodiscover and connect to your user's OneDrive" was disabled/unchecked and there were over 5,000 sites. 

* **Fixed an issue** with the License reports, where changing the currency in Settings did not reflect the new currency on the dashboard Licensing tile.

* **Various improvements and minor UX and UI fixes are available**.
