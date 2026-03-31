---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.135.1
---

# March 31, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **Rule Engine now supports conditioning based on metrics.**
  * You can now configure rules that evaluate metric values as conditions, enabling more targeted and flexible automation.
  * [Find the added metrics listed in the Conditions sections of the Rules article.](../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **The Risk Score column was added to the Sites and Teams & Groups overview screens, along with the new Risky Sites/Groups & Teams view.**
  * The Risk Score column is now visible on the Sites and Teams & Groups overview screens
  * High-risk workspaces are marked with a red circle in the Risk Score column
  * Medium-risk workspaces are marked orange
  * Low-risk workspaces are marked yellow
  * Healthy workspaces are marked green
  * A grey circle is displayed for the workspaces where the risk score has not yet been calculated 
  * Added views show the Risk Score column and sort the data by Risk Score from highest to lowest

## Improvements & Bug Fixes

* **Improvements made to the Inactive Workspaces workflow.**
  * The Summary step is now displayed when you [create or edit an Inactive Workspaces policy](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md). It displays all important information about the policy configuration, as well as the outcomes when you enable task delegation or make any changes to the policy configuration.
  * The 'Detected' column was renamed to 'Inactivity Detected' to better describe the data it displays.

* **Workspace Health improvements.**
  * Performance of the Workspace Health job has been significantly improved for large tenants.
  * Texts on the Overview step have been updated for improved clarity.

* **Licensing improvements.**
  * The Remove License dialog has been improved to show important information and link to the related group details screen when trying to remove group and on-prem group assigned licenses.
  * **Fixed an issue** with license removal for mail-enabled security groups and distribution lists.

* **Fixed an issue** with the Provisioning templates where date-based custom metadata fields did not persist the "Let your end users (requesters) decide" option when editing a template.

* **Fixed an issue** with Provisioning where a content type that referenced a non-existing parent content type caused provisioning to fail.

* **Fixed an issue** where the New Rule dialog returned a `500 Internal server` error when a custom metadata dropdown field contained duplicate values.

* **Fixed an issue** where the site info screen displayed an infinite loading indicator in the metadata section in specific subscription plans.

* **Fixed an issue** where new list items were not synced correctly due to a problem with the title property.

* **Various improvements, including UX and UI fixes, have been implemented.**
  * **Fixed an issue** where the Request Review button overflowed its container.
  * **Banner improvements have been made** for a better overall user experience.