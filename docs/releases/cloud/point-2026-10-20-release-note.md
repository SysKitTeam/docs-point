---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.3.164.43
---

# October 20, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **The Syskit Point MCP Server has been updated.**
  * Connecting an AI tool is now simpler: add the server URL, sign in to Syskit Point, and approve access. Admin-issued credentials are no longer needed.
  * Admins choose which capabilities are available, including the new **Governance** and **Licensing** capabilities, and can allow Point collaborators to use the MCP Server.
    * Collaborators see only the data they have access to in Syskit Point.
  * For more details, [please take a look at the MCP Server article.](../../ai-in-syskit-point/features/mcp-server.md)

* **Improvements made to Reports.**
  * **The Sharing Links report now shows more clearly who can use a link and what they can do with it.**
    * The **Accessible to** and **Access level** columns are now shown by default.
    * The new **Sharing link type** column replaces the **Hero Link** column and shows whether a link is the main link of a file or folder or another type of link.
      * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)
    * The **Link Type** column is now hidden by default but can still be selected from the column chooser.
    * The default column order is now **Name**, **Accessible to**, **Access level**, **Recommendation**, **Sharing link type**, **Created On**, **Created By**, and **Link**.
  * **Security & Compliance data can now be exported.**
    * Export the full list of detected vulnerabilities from the **By Vulnerabilities** and **By Workspaces** reports, or the results of an individual policy.
    * The data can be exported in PDF, Excel, or CSV format.
  * **Fixed an issue** where scrolling through large reports was slow and rows flickered when hovering over the **Recommendation** column if it contained actions.
  * **Fixed a bug** where the **Email** column on the **SharePoint Groups** report was always empty.

* **New conditions are available in Rules.**
  * Target policies at exactly the workspaces you want, without workarounds:
    * **Workspace Type** now supports private channels.
    * **Risk severity** lets you target workspaces by their risk level, for example, to focus policies on higher-risk workspaces.
    * **Last review date** lets you target workspaces by when they were last reviewed.
      * In addition to the existing date operators, the new **within last** and **not within last** operators let you set up recurring review campaigns, for example, for workspaces not reviewed in the last year.
    * **Owners** lets you target workspaces where any, none, or all of the selected users are owners.
      * Owners are determined the same way as on the **Inactive Workspaces** report, with OneDrive primary admins counted as owners of OneDrive sites and channel owners counted as owners of private channels.
  * For more details, [please take a look at the Conditions section of the Rules article.](../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **Improvements made to Workspace Review.**
  * The review wizard now refreshes step counts more efficiently.
    * Refreshing pauses while the browser tab is in the background, and the periodic refresh runs less often.
  * **Links without Last Used data now have a new recommendation** in the **Unused Links** step, and a tooltip in the **Last Used** column explains why the date is missing.
  * **Fixed an issue** in the **Review All Shared Files** step where groups given access directly on a file or folder couldn't be removed.
    * These groups now have the **Remove Access** action, the same as directly assigned users and SharePoint groups.
  * **Fixed an issue** where the **Actions Summary** report showed a generic error when a user didn't have access to the selected workspace or the workspace no longer existed.
    * A clear message now explains that the user doesn't have access to the workspace or that it no longer exists.

* **Syskit Point now runs a full user sync once a week.**
  * Regular user syncs pick up only recent changes.
  * The weekly full sync makes sure that Syskit Point has complete and up-to-date user data, such as license assignments, even if Microsoft didn't report a change.

* **Fixed a bug** where Power Platform sync could fail when Microsoft returned incomplete metadata for an environment, for example, for a deleted environment.

* **Various improvements, including UX and UI fixes, have been implemented.**