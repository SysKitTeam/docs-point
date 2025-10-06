---
description: This article lists features, improvements, and bug fixes in Syskit Point version 2025.3.95
sidebar_position: 8
---

# Syskit Point 2025.3.95

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.3.95

**Build number:** 52

**Release date:** June 17, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## New Feature

* **New role** added to Syskit Point: **Syskit Point Power Platform Admins**
  * Users assigned to this role have access to all reports showing data related to Power Platform environments, apps, and flows
  * They can also perform actions on Power Platform environments, apps, and flows if they have the Power Platform Administrator role assigned in Entra ID
  * [For more details on the new role and the access it provides, take a look at this article.](../../../configuration/enable-role-based-access.md#syskit-point-power-platform-admins)


## Improvements & Bug Fixes 

* **The following improvements** to provisioning have been made:
  * **Users are now prevented** from adding guest users as group or team owners when provisioning a workspace. 
  * **The maximum allowed length** for group or team e-mails has been restricted to avoid provisioning failure.
  * **Fixed the missing error message** when provisioning fails, so it no longer shows as `null`.
  * **Fixed the issue** that caused provisioning to fail when the same user is assigned as both the primary and secondary contact.

* **Added a warning** when a Microsoft 365 Group associated with a SharePoint Site has been permanently deleted or vice versa.  
  * The following warning will appear on the Group or Site details screen: `The connected group/site has been deleted. As a result, you cannot perform any actions.`

* **Fixed layout issues** when displaying long workspace names in the Point Teams App and e-mails related to provisioning requests. 

* **Various improvements and minor UX and UI fixes are available**.
