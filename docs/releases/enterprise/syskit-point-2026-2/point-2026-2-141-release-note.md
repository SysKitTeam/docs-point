---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.141
---

# Syskit Point 2026.2.141

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.141

**Build number:** 1

**Release date:** May 20, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.136](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-136-41%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).
   


## New Features 

### Security & Compliance

* **The Accept Risk action is now available for Risky Workspaces.**
   * Use the **Accept Risk** action on the Risky Workspaces report on the Security & Compliance screen to acknowledge a known risk on a specific workspace.
     * The accepted risk(s) are then excluded from the workspace's risk score.
   * When accepting a risk, you can **select the time frame** for how long the risk should be accepted.
     * Once that time passes, the **risk is automatically re-evaluated and will reappear** if it is still present.
  * [See the Risky Workspaces article for more details](../../../governance-and-automation/security-compliance-checks/risky-workspaces.md)

### Configuration

* **E-mail templates can now be managed in Syskit Point settings.**
  * A new **E-mail Templates** section is available in the Point E-mail Settings, where you can download, upload, or reset the email templates used by Syskit Point.
     * Use the **Download Templates** option to download a zip file with all of your templates.
     * Use the **Upload Templates** option to upload your modified templates as a zip file.
       * Modified templates take effect immediately for all subsequent emails.
     * Use the **Reset All to Default** option to remove all customizations and revert to the default templates.
  * [Find more information about E-mail templates in the E-mail customization article](../../../configuration/customize-emails#e-mail-templates)


## Improvements & Bug Fixes

### Storage

* **Improvements made to** the Site Storage Metrics report.
  * The State column on sites that are locked or archived now shows the following:
    * Files that are in **read-only or no-access sites** are shown as **Site Locked**
    * Files on archived sites are shown as **Site Archived**
  * File-level actions are no longer shown for files in either of these states.

### Reporting

* **Improvements made to Audit Logs Reports.**
  * The **Details column** on **all Audit Logs reports** has been **renamed to Additional Info**.
  * The following changes were made for exporting on audit logs reports: 
     * The **Export All** action has now been renamed to **Export with details**.
     * The **default** export now **excludes detailed data**.
     * The two options available are: 
        * **Export with details**, which includes detailed data, or 
        * **Export without details**, which does not include detailed data and is the default export method.
     * **Scheduled** reports now **follow the default export behavior** and will not include details.

* **Fixed an issue** where the Permissions Matrix report did not display Department and Job Title information for users with direct permissions on SharePoint objects, such as files and folders.

* **Fixed a critical audit log issue** caused by the same user appearing with a different username casing in audit logs.
  * Processing would fail with the following error:
  ```
  "Violation of PRIMARY KEY constraint 'PK_SiteVisits'. Cannot insert duplicate key in object 'Analytics.SiteVisits'."
  ```
  * Due to the issue, audit collection starts lagging, meaning more audit logs are being produced than Syskit Point can process. The existing "audit collection lagging" message does not appear to end-users, making this issue even harder to discover.
  * The issue prevented site-visit metrics from being successfully saved to the database. Additionally, the last login information was not updated for users.
  * User deduplication in site visitor aggregation now works regardless of Microsoft audit log username variation. This ensures accurate counts and stable reports.

* **Added support** for collecting file archive and file restore action events in audit logs.

### Security & Compliance

* **Improvements made to** the Risky Workspaces view on the Security & Compliance screen.
  * Report performance has been increased by **optimizing how site metrics are loaded** and ensuring they load only when selected.

* **Fixed a bug** that caused an action in the Inactive Workspaces report on the Security & Compliance screen to appear as text instead of a clickable action button. 

### Governance

* **Added the option** to restrict alert configuration for collaborators to the Manage Access settings.
  * When enabled, **alert configuration for collaborators is restricted**.
  * Exceptions can be added by **selecting collaborators** who can configure alerts regardless of the restriction.
  * [See the updated article on managing access to Syskit Point for more information](../../../configuration/enable-role-based-access.md#syskit-point-collaborators)

* **Fixed an issue** where other workspace owners did not receive an e-mail notification when one owner completed a Workspace Review, even when the policy was configured to notify all owners.

* **Fixed an issue** where Workspace Review policies could be saved without entering required reviewers. 
  * Now, at least one reviewer must be specified for each workspace type before saving.

### Access Management

* **Fixed a bug** where users with Full Control access could not remove users from workspaces. 

* **Fixed an issue** where mail-enabled security groups could not be added as exceptions when completing the Restrict Site Access action on a workspace.
  * Mail-enabled security groups can now be selected when configuring site access restrictions. 

### Sync & Performance

* **Fixed an issue** with the *Next automatic content and permissions sync* where the time of the sync did not reflect the previously configured threshold settings. 

* **Improved site synchronization stability** to reduce delays and ensure consistent performance.

* **Various improvements, including UX and UI fixes, are available.**

