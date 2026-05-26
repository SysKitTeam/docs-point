---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.143.2
---

# May 26, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to Power Platform sync.**
  * When syncing Flows that have **pending runs**, such as approvals waiting for a response, Syskit Point now **only checks those specific runs on subsequent syncs**, rather than re-scanning all previous runs. 
    * This makes sync faster and more accurate.
  * **Fixed an issue** where syncing failed with errors when a Power Platform environment had been removed in Microsoft 365 but was still tracked in Syskit Point.

* **The license expiration notification banner** is now displayed again to administrators when their subscription is approaching its renewal date.
  * The banner includes a link to the **Settings** > **Point License** page for reviewing subscription details.
  * Clicking the link dismisses the banner until the next login.

* **Fixed an issue** where the SharePoint sync on larger tenants could get stuck repeatedly stopping and restarting instead of completing.
  * Long-running site syncs now complete without being interrupted.

* **Various improvements, including UX and UI fixes, have been implemented.**