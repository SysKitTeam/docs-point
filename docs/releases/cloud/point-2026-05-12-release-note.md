---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.141.1
---

# May 12, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.


## New Feature

* **The Accept Risk action is now available for Risky Workspaces.**
   * Use the **Accept Risk** action on the Risky Workspaces report on the Security & Compliance screen to acknowledge a known risk on a specific workspace.
     * The accepted risk(s) are then excluded from the workspace's risk score.
   * When accepting a risk, you can **select the time frame** for how long the risk should be accepted.
     * Once that time passes, the **risk is automatically re-evaluated and will reappear** if it is still present.
  * [See the Risky Workspaces article for more details](../../governance-and-automation/security-compliance-checks/risky-workspaces.md)

* **E-mail templates can now be managed in Syskit Point settings.**
  * A new **E-mail Templates** section is available in the Point E-mail Settings, where you can download, upload, or reset the email templates used by Syskit Point.
     * Use the **Download Templates** option to download a zip file with all of your templates.
     * Use the **Upload Templates** option to upload your modified templates as a zip file.
       * Modified templates take effect immediately for all subsequent emails.
     * Use the **Reset All to Default** option to remove all customizations and revert to the default templates.
  * [Find more information about E-mail templates in the E-mail customization article](../../configuration/customize-emails.md/#e-mail-templates)

## Improvements & Bug Fixes

* **Improvements made to** the Site Storage Metrics report.
  * The State column on sites that are locked or archived now shows the following:
    * Files that are in **read-only or no-access sites** are shown as **Site Locked**
    * Files on archived sites are shown as **Site Archived**
  * File-level actions are no longer shown for files in either of these states.

* **Fixed an issue** where the Permissions Matrix report did not display Department and Job Title information for users with direct permissions on SharePoint objects, such as files and folders.

* **Fixed an issue** where other workspace owners did not receive an e-mail notification when one owner completed a Workspace Review, even when the policy was configured to notify all owners.

* **Various improvements, including UX and UI fixes, have been implemented.**