---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.136
---

# Syskit Point 2026.2.136

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.136

**Build number:** 39

**Release date:** April 14, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.136](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-136-39%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).
   


## New Features 

* **Escalations added to Workspace Review.**
  * Escalations help you set up additional actions when Workspace Reviews become overdue. 
  * The following types of escalations are available: 
    * Add manager to CC
    * Add specific people or groups to CC
    * E-mail to task owners
    * Archive the workspace
    * Restrict site access
    * Restrict Copilot content discoverability
  * [For more details, take a look at the Escalations article.](../../../governance-and-automation/workspace-review/reminders-and-escalations.md#escalations)
   
* **New file-level action** available: **Archive Files**
  * The Archive Files action allows you to **move inactive files to Microsoft 365 Archive** directly from the Storage Metrics report, which helps **reduce active SharePoint storage usage** while keeping files available.
  * This feature **relies on a Microsoft functionality that is currently in Public Preview**.
  * [For more details on archiving files, take a look at this article.](../../../storage-management/free-up-storage.md#archive-files)

* **New Risky Workspaces action available** on the Security & Compliance screen: **Resolve All**
  * Admins can now resolve risks for workspaces directly from the report.
  * [For more details, please take a look at the Risky Workspaces article.](../../../governance-and-automation/security-compliance-checks/risky-workspaces.md)

* **Rule Engine now supports conditioning based on metrics.**
  * You can now configure rules that evaluate metric values as conditions, enabling more targeted and flexible automation.
  * [Find the added metrics listed in the Conditions sections of the Rules article.](../../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **The Risk Score column was added to the Sites and Teams & Groups overview screens, along with the new Risky Sites/Groups & Teams view.**
  * The Risk Score column is now visible on the Sites and Teams & Groups overview screens
  * High-risk workspaces are marked with a red circle in the Risk Score column
  * Medium-risk workspaces are marked orange
  * Low-risk workspaces are marked yellow
  * Healthy workspaces are marked green
  * A grey circle is displayed for the workspaces where the risk score has not yet been calculated 
  * Added views show the Risk Score column and sort the data by Risk Score from highest to lowest


## Improvements & Bug Fixes

* **Actions added to the Risky Workspaces view** on the Security & Compliance screen: **Restrict Content from M365 Copilot and Restrict Site Access**
  * These actions allow you to manage access and discoverability restrictions directly from the report.
  * For more details on restrictions, [take a look at the Edit Restrictions article](../../../access-management/restrictions.md).

* **Improvements made to the Inactive Workspaces workflow.**
  * The Summary step is now displayed when you [create or edit an Inactive Workspaces policy](../../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md). It displays all important information about the policy configuration, as well as the outcomes when you enable task delegation or make any changes to the policy configuration.
  * The 'Detected' column was renamed to 'Inactivity Detected' to better describe the data it displays.

* **Licensing improvements.**
  * The Remove License dialog has been improved to show important information and link to the related group details screen when trying to remove group and on-prem group assigned licenses.
  * **Fixed an issue** with license removal for mail-enabled security groups and distribution lists.

* **Improvements made to** the Inactive Workspaces policy inactivity threshold. 
  * Once the inactivity threshold is changed for a Inactive Workspaces policy, existing vulnerabilities are now closed if they no longer meet the updated inactivity threshold. 
  * Added a message with information that changes are applied within 24 hours.

* **Workspace Health improvements.**
  * Performance of the Workspace Health job has been significantly improved for large tenants.
  * Texts on the Overview step have been updated for improved clarity.

* **Improved the alert** for Sensitivity Labels, which is now triggered even when sensitivity labels are changed through Microsoft Teams or the Admin Center. 

* **Improvements made to Provisioning.**
  * **Fixed an issue** with the Provisioning templates where date-based custom metadata fields did not persist the "Let your end users (requesters) decide" option when editing a template.
  * **Fixed an issue** with Provisioning where a content type that referenced a non-existing parent content type caused provisioning to fail.
  * **Fixed an issue** that caused Microsoft 365 Groups to occasionally fail during provisioning.

* **Fixed an issue** where a Group Membership sync could fail due to SQL timeouts. 

* **Fixed an issue** where new list items were not synced correctly due to a problem with the title property.

* **Fixed an issue** that caused sharing links to be duplicated in the Sharing Links report. 

* **Fixed an issue** where the site info screen displayed an infinite loading indicator in the metadata section in specific subscription plans.

* **Fixed an issue** where the New Rule dialog returned a `500 Internal server` error when a custom metadata dropdown field contained duplicate values.

* **Fixed an issue** where the Keep action for Inactive Workspaces was not available for all license types and would trigger the *LicensingFeatureNotAvailableException* error.

* **Fixed an issue** where Delete files action failed due to missing permissions.
  * Attempting to delete files without access caused the following error: 
   ```
  System.UnauthorizedAccessException: Attempted to perform an unauthorized operation.
   ```

* **Various improvements, including UX and UI fixes, are available.**
  * **Fixed an issue** where the Request Review button overflowed its container.
  * **Banner improvements have been made** for a better overall user experience.
