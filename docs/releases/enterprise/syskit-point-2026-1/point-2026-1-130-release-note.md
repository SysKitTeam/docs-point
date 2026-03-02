---
description: This article lists improvements and bug fixes in Syskit Point version 2026.1.130
---

# Syskit Point 2026.1.130

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.1.130

**Build number:** 26

**Release date:** March 03, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).



:::warning
**Please note!**

* **Reconsent is required after updating to the latest version** due to permission changes introduced by collecting data related to the User Type (user, equipment, room) visible on License reports.

* The following **permission is added** to the existing Syskit Point app registrations:
  * **MailboxSettings.Read** – allows Syskit Point to read users' mailbox settings without a signed-in user. This does not include permission to send emails.

* For **new deployments**, the **MailboxSettings.Read permission is automatically added** during consent.
  
* For an **already deployed Point**, this permission is **not added automatically**. Syskit Point admins will **receive a reconsent prompt** to grant the required permission.

* [For more information about permission requirements changes, see the change log.](../../../requirements/permission-requirements-change-log.md#syskit-point-enterprise-20261130)

:::
   

## Improvements & Bug Fixes

* **New option added to Licenses settings.**
  * A new toggle, ***Show resource users in reports and policies***, was added to the Licenses settings.
  * When enabled, **resource users** (e.g., rooms and equipment accounts) with assigned licenses are **included in license reports and in the Blocked Users with Assigned Licenses policy**.
  * When disabled, **resource users are excluded** from these reports and policies.

* **Improvements made to the following License Reports**: Inactive Users with Assigned Licenses, Redundant Licenses, and Unused Add-on Licenses.
  * The **Assignment Type** column was added, showing whether a license is assigned directly, via group, on-premises group, or dynamic group. This column is visible by default.
  * The **Assigned Group** column was added, showing the related group(s) when applicable. This column is not visible by default and can be selected from the column chooser. 

* **Improvements made to Audit Logs settings:** Audit Log Advanced Filters.
  * Added configuration for **new Audit Ignore options** in the Audit Logs settings. 
  * Configure the audit log advanced filters to exclude specific events, accounts, or sources from workspace activity detection. 
    * This allows you to ignore system-generated or low-value activities in audit log processing.
  * The following Audit Ignore options are available:
    * Ignore Service Accounts
    * Ignore OneDrive Synchronization Activities
    * Ignore User Agents
    * Ignore Workloads
    * Ignore Record Types
    * Ignore Sites
    * Ignore Service Principal IDs (AnyEvent)
    * Ignore Service Principal IDs (AppOnlyEvent)
    * Ignore Service Principal Names (AnyEvent)
    * Define Criteria Collection 
  * [Find more details in the related article](../../../configuration/customize-audit-logs-collection.md#audit-log-advanced-filters)

* **Improvements made to the Sites Overview screen.** 
   * **New column added to the Sites Overview screen:** Restrictions.
     * The new Restrictions column is hidden by default and can be selected from the column chooser.
     * Displays whether a site has: 
        * **Restricted Access**, if access to the site is restricted to members of whitelisted groups. 
        * **Restricted Content Discoverability**, if site content is exempt from Microsoft 365 Copilot.
        * **Restricted Access and Restricted Content Discoverability**, in case both restrictions are applied to the site.
        * **No Restrictions**, if no access restrictions are applied to the site.
   * **New action added:** Edit Restrictions
     * This action lets you edit restrictions placed on a site and choose whether you want to restrict access to content, restrict content discoverability, or neither.
   * [Learn more about the Edit Restrictions action in this article](../../../access-management/restrictions.md)

* **Added a new setting** for managing access in Syskit Point: **Restrict access to private channels not owned by the team owner**.
  * This setting can be found by going to **Settings > Manage Access > Syskit Point Collaborators**. 
  * This setting **controls whether Team Owners can access private channels they do not own**.
  * The setting is **enabled by default and restricts access to private channel details** unless the Team Owner is also the channel owner.
  * **When enabled**, Team Owners cannot be selected as reviewers for private channels in the Workspace Review policy wizard.
  * **When disabled**, Team Owners can view private channel details and can be selected as reviewers.

* **Improvements made to the Workspace Review policy for SharePoint sites.**
  * Added a **new Change SharePoint Owners action** that retrieves and displays members of the default SharePoint Owners group. 
  * Refined the reviewer type and action labels displayed on the Workspace Review Overview step.

* **Improvements were made to the Manually Apply Policies** screen.
  * Admins can now **apply Workspace Review policies to Private Channels**.
  * **Fixed an issue** where the Site Type column was empty, and filtering the report by Site Type resulted in an error.

* **E-mail column names were unified across Point**:
  * Email column renamed to E-mail on the Orphaned Users report.
  * E-Mail column renamed to E-mail on the Inactive Users with Assigned Licenses report and the Users overview screen.

* **Improved the default currency setup** for new customers.
  * For new deployments, the default currency is now set based on the region (USD, EUR, AUD).
  * Default exchange rate values are initialized during the connect.

* **Improved user synchronization** by retrieving the Last Successful Sign-In time for both internal and external users during tenant sync, instead of relying only on audit data.

* **Fixed an issue** where Syskit Point reported successfully adding unlicensed users to mail-enabled security groups, even though the action failed in Microsoft 365.
  * It is now clearly indicated that the action has failed due to missing licenses when performed by users who are not admins.

* **Fixed an issue** where Power Platform actions would stop working after a period of time due to an expired access token, requiring users to restart Syskit Point.

* **Fixed an issue** where currency information was not displayed in PDF exports of license reports. It is now clearly shown in the generated PDF reports.

* **Various improvements, including UX and UI fixes, are available.**
