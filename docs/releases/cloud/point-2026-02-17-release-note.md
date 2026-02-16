---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.129.1
---

# February 17, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

   
## Improvements & Bug Fixes 

* **New option added to Licenses settings.**
  * A new toggle, ***Show resource users in reports and policies***, was added to the Licenses settings.
  * When enabled, **resource users** (e.g., rooms and equipment accounts) with assigned licenses are **included in license reports and in the Blocked Users with Assigned Licenses policy**.
  * When disabled, **resource users are excluded** from these reports and policies.

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

* **New column added to the Sites Overview screen:** Restrictions.
  * The new Restrictions column is hidden by default and can be selected from the column chooser.
  * Displays whether a site has: 
    * **Restricted Access**, if access to the site is restricted to members of whitelisted groups 
    * **Restricted Content Discoverability**, if site content is exempt from Microsoft 365 Copilot
    * **Restricted Access and Restricted Content Discoverability**, in case both restrictions are applied the site
    * **No Restrictions**, if no access restrictions are applied to the site.

* **Improvements made to the Workspace Review policy for SharePoint sites.**
  * Added a **new Change SharePoint Owners action** that retrieves and displays members of the default SharePoint Owners group. 
  * Refined the reviewer type and action labels displayed on the Workspace Review Overview step.

* **Improvements made to the Manually Apply Policies** screen.
  * Admins can now **apply Workspace Review policies to Private Channels**.
  * **Fixed an issue** where the Site Type column was empty, and filtering the report by Site Type resulted in an error.

* **Fixed an issue** that caused policy violations to be triggered for already deleted sites. 

* **Various improvements, including UX and UI fixes, are available.**