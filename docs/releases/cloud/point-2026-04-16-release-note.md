---
description: This article lists fixes in the Syskit Point Cloud hotfix version 2026.2.137.83
---

# April 16, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

:::warning
**Please note!** This is a critical hotfix release. The issue was observed in a subset of customer environments, with no clear pattern by Azure region or other tenant properties, and appears to have been triggered by unexpected changes in Microsoft audit log data that adversely affected Syskit Point audit log processing. We recommend upgrading to the latest version for all customers to avoid audit collection lag.
:::

## Improvements & Bug Fixes

* **Fixed a critical audit log issue** caused by the same user appearing with a different username casing in audit logs.
  * Processing would fail with the following error:
  ```
  "Violation of PRIMARY KEY constraint 'PK_SiteVisits'. Cannot insert duplicate key in object 'Analytics.SiteVisits'."
  ```
  * Due to the issue, audit collection starts lagging, meaning more audit logs are being produced than Syskit Point can process. The existing "audit collection lagging" message does not appear to end-users, making this issue even harder to discover.
  * The issue prevented site-visit metrics from being successfully saved to the database. Additionally, the last login information was not updated for users.
  * User deduplication in site visitor aggregation now works regardless of Microsoft audit log username variation. This ensures accurate counts and stable reports.
