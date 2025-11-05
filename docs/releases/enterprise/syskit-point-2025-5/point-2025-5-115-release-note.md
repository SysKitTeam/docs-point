---
description: This article lists improvements and bug fixes in Syskit Point version 2025.5.115
---

# Syskit Point 2025.5.115

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.5.115

**Build number:** 47

**Release date:** November 05, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Viva Engage (Yammer) provisioning** migrated to Graph API.
  * **Point Admins with existing Viva Engage provisioning templates will receive a reconsent prompt.**
  * **Point Admins who create their first Viva Engage provisioning template will receive a reconsent prompt.**
  * Point Admins who don't use Viva Engage provisioning templates will not receive any reconsent prompts and do not need to reconsent.
  * [Learn more about the added permission in the Permission Requirements Change Log article.](../../../requirements/permission-requirements-change-log.md#syskit-point-enterprise-20255115)

* **Improved the Teams app people picker** to no longer show users with blocked sign-in.

* **Fixed the following issues** when using Provisioning templates that copy content & structure from another workspace:
  * **Fixed an issue** where provisioning would fail when applying a template with the following error: `An error occurred while applying content and structure. Microsoft.SharePoint.Client.ServerException: Value does not fall within the expected range.` 
  * **Fixed an issue where** a site's appearance was not correctly copied when using the copy content & structure templates. 

* **Fixed an issue** where users could click the Archive action for Private and Shared Channel sites from the Storage Metrics report, which caused an error to occur.
  * The Archive action is now unavailable for private and shared channel sites, and they can only be archived as part of their parent Team.

* **Fixed an issue** where collaborators could not perform the File Version Cleanup action due to the following error: `System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.`

* **Fixed a bug** where Archived sites were incorrectly flagged for the Orphaned Workspace policy vulnerability. 

* **Fixed an issue**, which caused errors on the Channel Details page in certain situations. 

* **Various improvements and minor UX and UI fixes are available**.