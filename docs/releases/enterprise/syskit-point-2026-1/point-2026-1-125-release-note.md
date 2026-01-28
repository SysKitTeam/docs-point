---
description: This article lists improvements and bug fixes in Syskit Point version 2026.1.125
---

# Syskit Point 2026.1.125

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.1.125

**Build number:** 54

**Release date:** January 27, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


:::warning
**Please note!**

* For new deployments, the **RoleManagement.ReadWrite.Directory permission is no longer requested** or added during consent.  
  
* For an **already deployed Point**, this permission is **not removed automatically** and will remain until manually removed. You can choose to remove this permission if you **do not need to manage security groups with allowed role assignments**.

* If managing role-based security groups is required, after deploying Point for the first time, you will have to manually add this permission, as it is not included by default in new deployments. 

* [For more information about permission requirements changes, see the change log.](../../../requirements/permission-requirements-change-log.md#syskit-point-enterprise-20261125)

:::

## New Features


* **New add-on available**: License Optimization
  * [To get the new License Optimization add-on, please contact us](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button). 
  * The License Optimization add-on contains:
      * New license reports
      * Enhanced current license reports
      * Help with cost optimization upon your license renewals 
      * Insight into redundant licenses or unused add-on licenses
      * Overview of the state of your Licenses from the Dashboard tile
  * Current Syskit Point users will receive access to the License Optimization add-on for a trial period of 3 months. After this period ends, a separate add-on will be required to access licensing features.
  * [For details on License reports, take a look at this article.](../../../reporting/licenses-reports.md) 

* **New policy available**: Workspaces with Expired Sharing Links
    * This policy helps you detect workspaces that contain expired sharing links.
    * **You can fully automate the removal of expired sharing links in Syskit Point by selecting the Resolve Automatically option in the policy settings**. 
        * [For more details about the Workspaces with expired sharing links policy, read this article.](../../../governance-and-automation/automated-workflows/workspaces-with-expired-sharing-links-admin.md)
    * Once a workspace with expired sharing links is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
        * [To find out more about the Security & Compliance report and the detected vulnerability, read the related Security & Compliance report article.](../../../governance-and-automation/security-compliance-checks/workspaces-with-expired-sharing-links.md)

* **New Security & Compliance view available**: Workspaces
  * The new Workspaces view in the Security & Compliance checks highlights risky workspaces, which are identified based on various health factors.
  * [For more details about the new Risky Workspaces view and how the risk factor is determined, take a look at this article.](../../../governance-and-automation/security-compliance-checks/risky-workspaces.md)

* **New steps added to the Workspace Review**.
    * **Remove Blocked Members** and **Remove Inactive Guests** added to the Membership step.
    * **Remove Blocked Shadow Users** and **Remove Inactive External Shadow Users** added to the Shadow Users step.
    * **Stop Sharing Content with Large Everyone Groups** step added.
    * **Remove Expired Links**, **Remove Unused Links**, and **Review All Shared Content** added to the Sharing Step.
    * [You can enable the added steps by editing the Workspace Review policy.](../../../governance-and-automation/workspace-review/setup-workspace-review.md)
    * [More details on additional steps and options on each of them are described in the Resolve Workspace Review articles.](../../../point-collaborators/workspace-review/README.md)


## Improvements & Bug Fixes

* **Improvements made to the Orphaned Users policy.**
  * **Added automation options** to the Orphaned Users policy, enabling easier resolution when vulnerabilities are detected.
  * When automatic policy resolution is enabled, you can specify which types of orphaned users should be **automatically removed** from the workspace:
    * **Deleted orphaned users**
    * **Disabled orphaned users**
    * **All orphaned users**
  * For more details on this new option, [take a look at the Orphaned Users policy article](../../../governance-and-automation/automated-workflows/orphaned-users-admin.md).

* **Improved the License Reports settings screen.**
  * Licenses are now grouped into tiles: **Microsoft 365 Core and Enterprise Plans**, **Add-ons**, and **Other**.

* **Improvements made to Workspace Review.**
  * When a Workspace Review is manually requested for a workspace without the policy assigned, a dialog appears informing the admin that one or more selected workspaces do not have a Workspace Review policy applied.
  * A drop-down menu is provided with a list of available Workspace Review policies, and after selecting one, you can click the Request Review button. 
  * **Added PDF and XLSX export options** to Workspace Review screens showing performed actions. 

* **Fixed an issue** where recently deleted or archived workspaces were included when restarting a Workspace Review.
  * If a Workspace Review was partially completed, canceled, and then requested again, workspaces that were deleted or archived during the partial review would appear as if they were still active when the Workspace Review was requested again.

* **Improved the performance of the tenant-wide Storage Metrics report**, preventing timeouts on tenants with a large number of workspaces. 

* **Fixed an issue** where the Tenant-Wide Storage report took longer to generate or timed out when switching views.

* **Added Job Title and Company** columns to the Group Memberships report. These columns are not displayed by default. Use the Column Chooser to enable them. They are also visible in the generated Excel file when exporting to XLSX.

* **Fixed an issue** where clicking the Resolve button for a task on the Tasks screen resulted in an error. The issue was limited to groups with a large number of members.

* **Fixed an issue** with Provisioning-related emails where certain images were not displayed correctly in older versions of desktop Outlook. 

* **Fixed an issue** where OneDrive sync would fail with the following error:
  ```
  Microsoft.Kiota.Abstractions.ApiException: The server returned an unexpected status code and no error factory is registered for this code: 410
  ```

* **Fixed a bug** with Users sync that failed for users with unexpected characters in various user properties. The sync would fail with the following error:
  ```
  SysKit.Point.SPO.Graph.GraphException : There was an unexpected error performing the graph batch request. System.Text.Json.JsonReaderException : '0x0D' is invalid within a JSON string. The string should be correctly escaped.
  ```

* **Fixed a bug** where Teams provisioning failed with the following error:
  ```
  System.Exception: Team with group id <groupID> was not created. <n> attempts made.
  ```

* **Various improvements, including UX and UI fixes, are available.**
  * **Fixed the date format** visible in the Start Date field and the first Workspace Review start date information visible on the Create New Policy dialog when creating a new Workspace Review policy.
  * **The Apply policy dialog is now automatically displayed after the policy is created**. It shows 2 options for applying the created policy: Apply Automatically with Rules (Recommended) and Manually Apply Policies.