---
description: This article lists improvements and bug fixes in Syskit Point version 2026.1.127
---

# Syskit Point 2026.1.127

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.1.127

**Build number:** 27

**Release date:** February 10, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

* **Automation for orphaned users** can now be set up directly from the Orphaned Users report in the Reports Center.
  * For more details, [take a look at the Orphaned Users article. ](../../../reporting/cleanup-and-health-reports.md#orphaned-users)

* **Added a column** to the Sharing Links report: **Recommendations** 
  * The column can include the Expired Link recommendation, making it easier to spot links that can be removed at a glance. 

* **Improved the performance** of storage reports for larger customers by speeding up data processing and report generation.

* **Fixed an issue** where sharing links could not be removed for files with a # symbol in the file name, which caused an error when selecting the Remove Sharing Link action from the Sharing Links report.

* **Fixed an issue** where SharePoint sites remained in Point even after their geo-location was removed, which caused sync failures. 
  * Syskit Point now detects geo-locations that no longer exist in Microsoft 365 and automatically deletes affected sites.

* **Fixed an issue** where OneDrive sites that were deleted more than 93 days ago were shown as *Deleted* but still incorrectly marked as *Can Be Restored*.
  * OneDrive sites that were deleted more than 93 days ago are now correctly detected as hard-deleted during autodiscovery and sync. 

* **Fixed an issue** where certain folders were missing from sync due to invalid or incomplete sharing link data, and would show the following error: 
  ```
  System.InvalidOperationException: There is an error in XML document (1, 55567).
  invitedOnField is nullable and can accept empty value 
  ```

* **Various improvements, including UX and UI fixes, are available.**
