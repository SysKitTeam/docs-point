---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud hotfix version 2026.2.137.83
---

# April 16, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Fixed a critical issue** in audit log processing caused by the same user appearing in audit logs with different username casing.
  * Processing would fail with the following error:
  ```
  "Violation of PRIMARY KEY constraint 'PK_SiteVisits'. Cannot insert duplicate key in object 'Analytics.SiteVisits'."
  ```
  * This prevented site visits metrics from being saved in the database. Additionally, last login information was not updated for users.
  * Site visitor aggregation now correctly deduplicates users regardless of how Microsoft audit logs represent their usernames. This ensures accurate visitor counts and stable report generation.

* **Various improvements, including UX and UI fixes, have been implemented.**
