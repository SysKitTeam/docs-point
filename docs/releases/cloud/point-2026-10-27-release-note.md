---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.3.165.1
---

# October 27, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to Reports.**
  * **Main links are now easier to recognize** on the Permissions Matrix and Externally Shared Content reports.
    * Main links have a new icon, are named **Main Link (Anyone)** or **Main Link (People in your org)**, and are always listed first under their file or folder.
    * The **Hero Link Setting** column has been renamed to **Main link setting**, and its values now match the ones on the **Sharing Links** report.
    * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)
  * **The Sharing link type column replaces the Hero Link column** on the User Access report and in the Workspace Review Sharing step.
    * The column shows whether a link is the main link of a file or folder or another type of link.
    * The column is hidden by default but can be selected from the column chooser.
  * **Fixed an issue** where the Externally Shared Content report did not show all Anyone links.
    * All Anyone links, including links that nobody has used yet, are now shown.
  * **Fixed an issue** where links that let people in your organization upload files to a folder, such as links created by Microsoft Forms, were shown as a different link type.
    * These links are now shown as *People in company with the link can upload files to the folder* and are counted as company-wide links.

* **The Restrict Sharing action has been renamed to Restrict Link Access.**
  * The confirmation dialog now shows who can access the item through the main link before and after the change.
  * The action is now also available for main links on the Externally Shared Content report.

* **Inactive agents are now identified** in the Agents inventory.
  * Use the new **Inactive** insight and view to find agents that are no longer being used and decide whether they are still needed.
  * The number of inactive agents is also **shown on the Agents Inventory report and the AI & app governance dashboard tile**.

* **Various improvements, including UX and UI fixes, have been implemented.**
