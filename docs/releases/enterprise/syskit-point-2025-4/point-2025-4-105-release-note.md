---
description: This article lists improvements and bug fixes in Syskit Point version 2025.4.105
---

# Syskit Point 2025.4.105

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.4.105

**Build number:** 45

**Release date:** August 26, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

:::warning
**Please note!**

**This update continues the transition toward a more scalable platform**.  

**When upgrading from Point versions older than 2025.2.91**, database migration is performed, which must finish before you can use the new version.
The migration progress is displayed when you open the Syskit Point web app.

**If you upgraded to Point version 2025.2.91 before this upgrade**, you can expect the upgrade completion without any significant downtime.

**Regular updates help prevent delays caused by skipping versions**. 

:::

## Improvements & Bug Fixes

* **Fixed an issue** that caused the drill down for security groups to be missing after performing the Change Owner actions.
    * You can now drill into security groups correctly from both the Task Result and Action Log when a security group is set as the workspace owner.

* **Fixed a bug** that caused the tooltips to appear empty when hovering over column headers in the Manually Apply Policies section.

* **Fixed an issue** that caused inconsistent spacing between task types in the Completed section for Tasks. 
  * Components such as the See Task button will now stay in the same position when switching between any task types. 

* **Fixed an issue** where completing the Ask Members action could cause Syskit Point to crash if the workspace for which the action was performed had no members. 

* **Fixed an issue** that caused some Sensitivity Review tasks to be generated incorrectly, which resulted in an error when trying to resolve the review task.

* **Fixed an issue** that caused storing audit logs for some Power BI-related events to fail due to the following error: `Failed to process content blob
System.ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection.`

* **Various improvements and minor UX and UI fixes are available**.
