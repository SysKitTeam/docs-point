---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.157
---

# Syskit Point 2026.2.157

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.157

**Build number:** 87

**Release date:** September 8, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.157](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-157-87%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


:::warning
**Please note!**

* **Syskit Point now runs on .NET 10, which requires an App Service runtime stack change.**

* If you use the **standard Syskit Point upgrade path or ARM template**, **no action is required** — the runtime stack is updated for you.

* If you **maintain your own custom deployment**, update the **runtime stack** setting for **both Point App Services (Frontend and Backend)**:
  * Set `netFrameworkVersion` to `v10.0`

* [For more information on upgrading Syskit Point, see the upgrade article.](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md)

:::


## New Features

* **Automated cleanup is now available for Redundant Unique Permissions on the Cleanup Opportunities tile.**
  * Syskit Point can now resolve redundant unique permissions automatically, instead of you having to fix them manually.
  * When enabled, Syskit Point detects redundant unique permissions and removes them without changing anyone's access.
  * Every cleaned object is recorded in the action history, so you can track what was changed and when.
  * By default, automation is turned off.

* **Point of Contact details are now collected in Syskit Point.**
  * After your Syskit Point license is applied, a Point Admin is asked to provide the account's point of contact, so the right people can be reached about your subscription.
  * You can review and update these contacts at any time in **Settings**.
  * If you skip this step, a reminder stays visible until the contact details are provided.

## Improvements & Bug Fixes

### Governance

* **Fixed a bug** in **Workspace Review** where a review task was not reassigned when a workspace owner was changed to a member.

* **Fixed an issue** in the **Workspace Review** admin details export where the **Reviewer Name** column was missing from the exported file.

* **Fixed an issue** where newly created teams were temporarily not visible in the Teams admin center after provisioning.

### Reporting

* **Improvements made to the Site Details screen.**
  * A new report is available when you drill into the **Items Shared Externally** metric, listing every externally shared item the metric counts.
    * This ensures the number shown by the metric and the items listed in the report always match.

### Storage

* **Improvements made to Storage Metrics.**
  * The **Storage Metrics** report and **Dashboard** now clearly separate **Active** storage that counts toward your SharePoint quota from **Microsoft 365 Archive** storage.
  * Active and archived storage are now presented consistently across reports, the dashboard, exports, and the **Tenant Storage Limit** check, so the numbers you see always match.
  * Storage trends now show Active versus Archived storage over time, making it easier to understand how archiving affects your quota and billing.

### Sync & Performance

* **Fixed a bug** where metadata column values that were removed outside Syskit Point, for example through a PowerShell script, could still appear in Syskit Point instead of reflecting the removal.

* **Various improvements, including UX and UI fixes, have been implemented.**
