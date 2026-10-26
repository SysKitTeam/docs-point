---
description: This article lists improvements and bug fixes in Syskit Point version 2026.3.164
---

# Syskit Point 2026.3.164

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.3.164

**Build number:** XX

**Release date:** October 27, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.3.164](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-3-164-X%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

### Governance

* **New conditions are available in Rules.**
  * Target policies at exactly the workspaces you want, without workarounds:
    * **Workspace Type** now supports private channels.
    * **Risk severity** lets you target workspaces by their risk level, for example, to focus policies on higher-risk workspaces.
    * **Last review date** lets you target workspaces by when they were last reviewed.
      * In addition to the existing date operators, the new **within last** and **not within last** operators let you set up recurring review campaigns, for example, for workspaces not reviewed in the last year.
    * **Owners** lets you target workspaces where any, none, or all of the selected users are owners.
      * Owners are determined the same way as on the **Inactive Workspaces** report, with OneDrive primary admins counted as owners of OneDrive sites and channel owners counted as owners of private channels.
  * For more details, [please take a look at the Conditions section of the Rules article.](../../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **Improvements made to Workspace Review.**
  * The review wizard now refreshes step counts more efficiently.
    * Refreshing pauses while the browser tab is in the background, and the periodic refresh runs less often.
  * **Links without Last Used data now have a new recommendation** in the **Unused Links** step, and a tooltip in the **Last Used** column explains why the date is missing.
  * **Fixed an issue** in the **Review All Shared Files** step where groups given access directly on a file or folder couldn't be removed.
    * These groups now have the **Remove Access** action, the same as directly assigned users and SharePoint groups.
  * **Fixed an issue** where the **Actions Summary** report showed a generic error when a user didn't have access to the selected workspace or the workspace no longer existed.
    * A clear message now explains that the user doesn't have access to the workspace or that it no longer exists.

* **Fixed a bug** where escalation emails for overdue review tasks were not sent until the service was restarted after a temporary Microsoft certificate error.

### Reporting

* **The Group Access report can now include items with inherited permissions.**
  * Choose between showing items with unique permissions only (default) or all items, the same as on the **Permissions Matrix** report.

* **The Sharing Links report now shows more clearly who can use a link and what they can do with it.**
  * The **Accessible to** and **Access level** columns are now shown by default.
  * The new **Sharing link type** column replaces the **Hero Link** column and shows whether a link is the main link of a file or folder or another type of link.
    * For more details, [please take a look at the Hero Links article.](../../../reporting/hero-links.md)
  * The **Link Type** column is now hidden by default but can still be selected from the column chooser.
  * The default column order is now **Name**, **Accessible to**, **Access level**, **Recommendation**, **Sharing link type**, **Created On**, **Created By**, and **Link**.

* **Security & Compliance data can now be exported.**
  * Export the full list of detected vulnerabilities from the **By Vulnerabilities** and **By Workspaces** reports, or the results of an individual policy.
  * The data can be exported in PDF, Excel, or CSV format.

* **Fixed an issue** in the **Group Access** report that caused the **Sensitivity Label** filter to be ignored.

* **Fixed an issue** where some completed actions, such as deleting guest users without site permissions, were missing from the **Actions Overview** report.

* **Fixed an issue** where scrolling through large reports was slow and rows flickered when hovering over the **Recommendation** column if it contained actions.

* **Fixed a bug** where the **Email** column on the **SharePoint Groups** report was always empty.

### Configuration

* **High volume e-mails can now be enabled in the E-mail Settings.**
  * Enable high volume e-mails if Syskit Point may need to send more than 10,000 e-mails in a day.
  * The setting covers all e-mails sent to collaborators, including policy tasks, reminders, and escalations, as well as Workspace Reviews.
  * High volume e-mail is a paid Microsoft 365 service that you need to set up in your tenant first.
  * To learn more, see the [High Volume E-mails](../../../configuration/high-volume-emails.md) article.

### Power Platform

* **Fixed a bug** where Power Platform sync could fail when Microsoft returned incomplete metadata for an environment, for example, for a deleted environment.

### Sync & Performance

* **Syskit Point now runs a full user sync once a week.**
  * Regular user syncs pick up only recent changes.
  * The weekly full sync makes sure that Syskit Point has complete and up-to-date user data, such as license assignments, even if Microsoft didn't report a change.

* **Various improvements, including UX and UI fixes, have been implemented.**
