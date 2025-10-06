---
description: This article lists improvements and bug fixes in Syskit Point version 2024.6.71
sidebar_position: 18
---

# Syskit Point 2024.6.71

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.6.71

**Build number:** 65

**Release date:** December 02, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

* **Fixed an issue** that caused a timeout when clicking the View All Actions button and loading the Actions Report.
  * New views were added to the report with the default time set as 7 days.  

* **Fixed issues with Provisioning.**
  * When provisioning a new site by using the "Copy from existing site" option, provisioning would fail when copying content types with fields that do not exist in the destination site. 
  * Provisioning would fail when copying theme options if certain colors were used.
  * Provisioning did not apply metadata correctly; instead, it showed the following error: `SysKit.Point.SPO.Graph.Exceptions.MicrosoftGraphClientException: Error happened while resolving teamAsyncOperation at SysKit.Point.SPO.Graph.GraphGroupManager.innerResolveAsyncTeamOperation(Guid teamId, Guid operationId, Int32 resolveRetryCount, Int32 retryCount, Int32 timeoutInSeconds, Nullable'1 remainingRetryCount)`

* **Fixed a bug** that caused the Site Details screen to crash for those without the Governance License for their Syskit Point.

* **Various improvements and minor UX and UI fixes are available**.
