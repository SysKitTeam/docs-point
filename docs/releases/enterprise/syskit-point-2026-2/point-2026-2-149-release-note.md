---
description: This article lists new features, improvements, and bug fixes in Syskit Point version 2026.2.149
---

# Syskit Point 2026.2.149

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.149

**Build number:** 20

**Release date:** July 14, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.149](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-149-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## New Feature

* **New Stale Files Policies are available in Syskit Point.**
  * Using the Stale Files Policy, you can identify inactive files across your tenant and take action to reduce storage growth.
  * You can configure your Stale Files Policies in the Stale Files section of Syskit Point Settings.
  * The new Archive Stale Files action is available and can be found:
    * Under the Manage section on the Storage Metrics report, when using the Stale Files view.
    * On the Site Storage Metrics report, the Storage Optimization tile provides an easy way to perform a bulk archive action on stale files.
  * [For more details, take a look at the Stale Files Policy article.](../../../governance-and-automation/stale-files/stale-files-admin.md)


## Improvements & Bug Fixes

### Security & Compliance

* **Improvements made to Cleanup Opportunities.**
  * Two new views are available on reports: **Sites with Inactive Unique Permissions** and **Sites with Redundant Unique Permissions**.
  * The **Resolve Manually** option on the **Inactive Unique Permissions** and **Redundant Unique Permissions** tiles now navigates to the corresponding view on the Permissions Matrix report.

* **Fixed an issue** with Cleanup Opportunities where the dashboard tile showed a count for leftover anyone links or leftover external users, while the related drill-down view appeared empty.

* **Fixed a bug** where the Orphaned Workspaces report on the Security & Compliance screen continued to display deleted sites, causing them to show up as unresolved policy vulnerabilities.

### Access Management

* **Support for Microsoft Entra Agent Users is now available in Syskit Point.**
  * Agent Users are automatically identified during sync and can be found on the:
    * **Users Overview** report - the Agent User column is available in the column chooser, and Agent Users are displayed with a distinct icon.
    * **User Details** screen - an **Agent User** tag is shown next to the user's name.

* **Sponsor information is now available** on the **User Details** screen and as a default column in the **External Users Report**.

* **Fixed an issue** where a Site Admin performing an action on a workspace they are not the owner of received a generic error when the action failed due to insufficient access.
  * A more descriptive message is now shown, explaining why the action could not be completed.

### Reporting & Settings

* **Fixed an issue** where audit logs collection could fail due to gateway timeout errors, as the collection was not retried.

* The **Collaborator support link** settings have been moved from **Settings > Appearance** to **Settings > Manage access**, under the **Collaborators** section.

### Sync & Performance

* **Improvements made to Sync Status visibility for large SharePoint lists.**
  * The default threshold for automatically excluding lists, document libraries and folders has been set to **1,000,000 items**.
  * When anything is excluded due to size, you now see a clear notification on the **Site details**, **Team & Group details**, and **Sync Status** screens, along with a **View Details** action that shows exactly what was excluded.

* **Fixed a bug** where user sync could fail because of an unsupported SharePoint guest user identifier format.

* **Various improvements, including UX and UI fixes, have been implemented.**