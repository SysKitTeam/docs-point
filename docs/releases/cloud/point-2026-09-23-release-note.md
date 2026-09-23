---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2026.3.160.77
---

# September 23, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Restricted Content Discovery (RCD) can now be managed by site admins**, in addition to Syskit Point admins, when your organization has enabled delegated RCD management.

* **Improvements made to Reports.**
  * **Org-wide and Anonymous default sharing links are now reported before they are used.** Syskit Point detects default (hero) links shared with your entire organization or with anyone and shows them on the Sharing Links report, and on the Anonymous Access Links report for Anyone links, even before SharePoint has fully registered them.
  * **Fixed an issue** where a report view could not be created when it contained too many filters.

* **Fixed an issue** where some sites could be labeled with an incorrect site template when their actual template could not be determined during sync.

* **Fixed a bug** where Point failed to send emails with attachments larger than 3MB when the Exchange Online send method was selected. 
  * This could occur when PDF reports or multiple XLSX reports were sent in the same email.

* **Fixed an issue** where emails sent using the SMTP method could time out before being sent.

* **Various improvements, including UX and UI fixes, have been implemented.**
