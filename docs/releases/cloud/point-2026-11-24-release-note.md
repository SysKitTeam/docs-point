---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.4.169.1
---

# November 24, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to Workspace Review.**
  * **The Overview step now shows when an inactive workspace had activity after it was detected as inactive.**
    * Instead of only stating that the workspace is inactive, the step now explains that activity was detected afterward.
    * The **Archive** and **Delete** dialogs in the Overview step also show the date of the latest activity, so you can check whether the workspace is still needed before you continue.

* **Improvements made to sharing link management.**
  * **Main link audit events now show what changed** in the **Additional Info** column of audit reports, such as **Audit Overview**, **User Activity**, and **Permission Changes**.
    * This includes events for when a main link is used, created, or updated, and when its permission scope changes.
  * **The Restrict Link Access action is now logged under its own name** in action logs, for example, in the **Actions Performed** list of the Workspace Review summary.
    * Previously, the action was logged as **Remove Organization Link** or **Remove Anonymous Link**, even though the link wasn't removed.
  * **Site details screens now show the Default Main Link Setting** in the **General Info** tile.
    * A new **Default Main Link Setting** column has also been added to the **All Sites** report. The column is hidden by default but can be selected from the column chooser.
  * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)

* **Improvements made to Stale Files policies.**
  * **New operators are available for the Sensitivity label and Retention label conditions.**
    * For example, use **is not set** to exclude files that have a retention label from being marked as stale.
    * The **is not one of** operator also matches files that have no label.
  * For more details, [please take a look at the Stale Files article.](../../governance-and-automation/stale-files/stale-files-admin.md#step-1---conditions)

* **The `Directory.AccessAsUser.All` permission is now classified as high privilege.**
  * This Microsoft Graph permission lets an app perform any directory operation the signed-in user can perform, such as creating users, resetting passwords, or assigning admin roles.
  * Apps and agents with this permission are now marked with the **High Privileged** insight.

* **Reports now keep your layout when you open the results of an action.**
  * After you run an action from a report, clicking **See the result** in the notification takes you back to the report as you left it.
  * Added or hidden columns, column width and order, sorting, grouping, search, and filters are kept.

* **Access to the Swagger API documentation now requires signing in.**
  * Users who aren't signed in are redirected to the sign-in page, and only Syskit Point admins can open the documentation.

* **Fixed an issue** where SharePoint sites provisioned through the Syskit Point API didn't have the requested user set as the primary site admin.

* **Fixed an issue** where the **Actions Overview** report could fail to load in environments with a large number of actions.

* **Fixed an issue** where provisioning a team based on an existing team could fail if the source team had no photo.
  * The team is now provisioned, and a warning shows that the source team's photo couldn't be copied.

* **Fixed an issue** where the option to restrict content discoverability was shown on sites where the user can't manage it.
  * The option is now shown only to Syskit Point admins and to site admins of that site.

* **Various improvements, including UX and UI fixes, have been implemented.**
