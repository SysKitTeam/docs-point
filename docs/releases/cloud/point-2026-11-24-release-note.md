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
  * **The Overview step now shows when an inactive workspace had activity after it was marked as inactive.**
    * Instead of only stating that the workspace is inactive, the step explains that activity was detected afterward, and the **Last activity** value shows the date of the latest activity.
    * The **Archive** and **Delete** dialogs also show when the latest activity happened, so you can check whether the workspace is still needed before you continue.

* **Improvements made to sharing link management.**
  * **Syskit Point now collects audit events for main links**, such as when a main link is used or when its setting is updated.
  * **The Restrict Link Access action is now listed under its own name** in the **Actions performed** list of the Workspace Review summary.
    * Previously, the action was listed as **Remove Organization Link** or **Remove Anonymous Link**, even though the link wasn't removed.
  * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)

* **Improvements made to Stale Files policies.**
  * **New operators are available for the Sensitivity label and Retention label conditions.**
    * You can now use **is not set** and **is not one of**, for example, to exclude files that have a retention label from being marked as stale.
  * For more details, [please take a look at the Stale Files article.](../../governance-and-automation/stale-files/stale-files-admin.md#step-1---conditions)

* **The Directory.AccessAsUser.All permission is now classified as high privilege.**
  * This Microsoft Graph permission lets an app perform any directory operation the signed-in user can perform, such as creating users, resetting passwords, or assigning admin roles.
  * Apps and agents with this permission are now marked with the **High Privileged** insight.

* **Reports now keep your layout when you open the results of an action.**
  * After you run an action from a report, clicking **see the result** in the notification takes you back to the report as you left it.
  * Added or hidden columns, column width and order, sorting, grouping, search, and filters are kept.

* **Access to the Swagger API documentation now requires signing in.**
  * Users who aren't signed in are redirected to the sign-in page, and only Syskit Point admins can open the documentation.
  * For more details, [please take a look at the Integrations Overview article.](../../integrations/overview.md#swagger-documentation)

* **Fixed an issue** where SharePoint sites provisioned through the Syskit Point API didn't have the requested user set as the primary site admin.

* **Fixed an issue** where the **Actions Overview** report could fail to load in environments with a large number of actions.

* **Fixed an issue** where the option to restrict content discoverability was shown to site owners who aren't site admins.
  * In SharePoint, only site admins can restrict content discoverability, so the option is now shown only to them.

* **Various improvements, including UX and UI fixes, have been implemented.**
