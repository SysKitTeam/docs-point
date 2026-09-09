---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.153
---

# Syskit Point 2026.2.153

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.153

**Build number:** 41

**Release date:** August 11, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.153](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-153-41%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

### Governance

* **Improvements made to the Inactive Workspaces Policy.**
  * Workspaces with recent activity are now correctly displayed as active on the **Sites Overview** and **Groups Overview** reports, even if a previous policy vulnerability existed.

* **Improved the Applied To drill-down in Rules** by replacing the full rule evaluation with a dedicated report that queries applied policies directly.
  * This resolves timeout issues that could occur on tenants with a large number of workspaces.

* **Fixed an issue** with the **Stale Files** policy where **Collaborators** were unable to see the rule definition in the tooltip on the **Site Storage** screen.

* **Fixed a timeout issue** that could occur during stale files evaluation on large tenants.

* **Fixed an issue** where **private** and **shared** channel icons were missing in **Workspace Review** email notifications.

* **Fixed an issue** in the **Rule Engine Applied To** report that could cause an error when generating the report.

### Reporting

* **New total-count metrics** for **Sharing Links** and **Unique Permissions** are now available as columns in the **Sites Overview** report.
  * Enable them from the **Column Chooser**.

* **Fixed a bug** on the **Permissions Matrix** report where the recommendation node was missing the broken permission inheritance icon.

### Configuration

* **A Syskit Academy link has been added** to the **Help & Support** menu, providing direct access to self-paced onboarding and training resources.

* **Fixed an issue** where managed identity failures could cause excessive logging.

### Sync & Performance

* **Fixed an issue** where **Storage Sync** could fail due to an incorrect change token being sent for folder synchronization.

* **Fixed an issue** that could occur during Autodiscover if a team or group was not provisioned correctly.

* **Various improvements, including UX and UI fixes, have been implemented.**
