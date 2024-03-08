---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.1.44.1
---

# March 12, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Improvements & Bug Fixes

* **Rules now have a new Created On condition** that can be selected when creating a rule for auto-applying policies.
   * You can choose parameters such as - after, before, and between.
   * For more details about this, take a look at the [conditions section of the Rules article.](../../governance-and-automation/automated-workflows/policy-automation.md#conditions)

* **When setting Rule Conditions** for Metadata, the data can now be String, Number, and Bool types. 

* **Two new columns were added** to the Storage Metrics report and can be selected from the column chooser: **Potential Savings (Old Versions)** and **Potential Savings (Number of Versions)**.

* **The E-mail settings** now include a Weekly Vulnerabilities summary section, and you can configure which users will receive summary e-mails. 

* **Security & Compliance e-mails** are no longer sent for each policy violation separately and are now grouped into one daily e-mail. 

* **The File Type tile** on the Site Storage Metrics Report is now drillable, which means you can now click and browse files by their type. 

* **The option to replace an orphaned user** was added to the remove user action dialog. 
  * This option should be used if the orphaned user is also the primary admin of a site, as a user cannot be deleted before being replaced with another user as a primary admin.

* **Views were added** to the Storage Metrics report and Site Storage Metrics report for both the Files Only and Site Structure versions. 

* **Externally Shared Content report*** has a new 'Show items with unique permissions' filter. 

* **Fixed an issue** with filtering by Users and Activity on the Audit Logs Overview report.

* **Fixed an issue** where the Clean Up File Versions action on the Site Storage Metrics report would fail. 

* **Various improvements and minor UX fixes are available**.