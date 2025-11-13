---
description: This article lists improvements and bug fixes in Syskit Point version 2025.5.117
---

# Syskit Point 2025.5.117

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.5.117

**Build number:** XX

**Release date:** November 19, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2025-5-115-47%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Improvements made to Provisioning.**
  * An option was added when creating a Provisioning template that allows you to limit the maximum number of characters allowed in workspace URLs.
    * When this option is enabled, any URL exceeding the limit will be automatically shortened and the finished URL is shown for an overview of how it looks. 
    * This option is automatically disabled, and the checkbox needs to be selected to enable it.
    * The minimum number of characters required is 1 and the maximum number allowed is 256.
  * If the option to Hide workspace name from URL is selected, a message will inform users that the final URL will be masked when provisioning from that template. 

* **Improvements made to the License Distribution report.**
  * New filter was added to the selection step: **Country or Region**.
  * The Inactive Licenses column has been renamed to Inactive Users with Assigned Licenses for improved clarity.

* **Fixed an issue** where Access Review tasks were not created and Access Review e-mail were not sent out due to the following error: `Access Review Notifier Job failed on step: ReviewStartEmail.
Microsoft.Data.SqlClient.SqlException: The INSERT statement conflicted with the FOREIGN KEY constraint "FK_UserPermissionReview_SitePermissionReview".`

* **Fixed a bug** where workspace owners with the Syskit Point Global Viewer role couldn't complete the Workspace Review tasks. The completion attempt would result in the following error: `There was an error while executing user action System.InvalidOperationException: Action not allowed.` 
  * Workspace owners with the Global Viewer role can now complete the Workspace Review tasks for their workspaces. 

* **Fixed an issue** where nested security groups were not synced properly.
  * Only users, not nested security groups, were shown as members of parent groups in reports such as the Permissions Matrix, Group Memberships, or Group Access.

* **Fixed an issue** where the Power BI data sync failed due to the wrong authentication token being used during the sync process. 

* **Fixed an issue** where the Power BI sync would result in an error.

* **Fixed an issue** on the Sharing Links report where the bulk removal of sharing links did not remove all selected links. 

* **Various improvements and minor UX and UI fixes are available**.