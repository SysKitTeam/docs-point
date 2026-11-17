---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.4.168.1
---

# November 17, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to sharing link management.**
  * **File and folder details screens now show the main link setting** in the **General Info** tile.
    * If the main link setting is inherited from a parent folder, this is also shown.
  * **The Restrict Link Access action is now available on file and folder details screens** in the **Manage** menu.
    * The action is available when the file or folder has its own main link set to **Anyone** or **People in your organization**.
  * **Main links are now easier to recognize** in the permissions shown on details screens.
    * Main links have a new icon and are named **Main Link (Anyone)** or **Main Link (People in your org)**.
  * **The Main link setting column is now shown by default** on the **Permissions Matrix** and **Externally Shared Content** reports.
  * **A new Main link setting column has been added** to the **Unique Permissions** and **Site Structure** reports.
    * The column is hidden by default but can be selected from the column chooser.
  * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)

* **Improvements made to AI Agents.**
  * **All reports available from the Agents Inventory and Apps Inventory reports** can now also be generated from the **Report Center**.
  * **A new Active users column has been added** to the **Agents Inventory** report.
    * The column shows how many users have used the agent, and it can be sorted and filtered.
    * The column is hidden by default but can be selected from the column chooser.

* **Improvements made to Workspace Review.**
  * **Bulk actions are now hidden for Point collaborators with read-only access** in Workspace Review tasks.
    * When **Give users read-only access (disable actions)** is enabled, actions are now hidden when selecting multiple shadow users, the same as when selecting a single user.
    * The **Remove All** buttons and the **Archive**, **Delete**, **Keep**, and **Change Admins** buttons in the Overview step are also hidden.
  * **The Group owners and Members groups are now collapsed by default** in the Shadow Users step, making each user's access easier to review.
  * **Fixed an issue** where a recurring Workspace Review could fail to start at its scheduled time, for example, after the policy's schedule was changed.

* **Reports based on site structure now load faster** on sites with a large number of items.
  * This includes the **Permissions Matrix**, **Unique Permissions**, **Site Structure**, and **User Access** reports.

* **Fixed an issue** where archiving a site in place could fail if the site contained very large lists or libraries.
  * SharePoint doesn't allow resetting permissions on lists and libraries with more than 100,000 items.
  * Syskit Point now skips these lists and libraries and completes the archive action with a warning.

* **Fixed an issue** where app sign-in data could stop updating when Microsoft returned invalid sign-in dates.
  * Valid sign-in dates are now saved without interruption, and previously collected valid dates are kept.
  * For tenants without Microsoft Entra ID P1 or P2 licenses, Syskit Point now skips sign-in logs that require these licenses instead of repeatedly trying to collect them.

* **Various improvements, including UX and UI fixes, have been implemented.**
