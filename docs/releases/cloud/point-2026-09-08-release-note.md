---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.158
---

# September 8, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes

* **Improvements made to the Sync Status report view.** (#75249)
  * Metadata columns can now be added to the **Sync Status** report through the column chooser.
  * These columns are hidden by default, and can be selected from the column chooser.

* **Fixed an issue** where archived and deleted storage was overcounted in storage ROI calculations. (#75312)
  * An upgrade corrects the affected historical data, so the impacted categories are reset to accurate values.

* **Fixed an issue** in the **Stale Files** settings where the file extension dropdown could become unresponsive when a large number of extensions existed. (#75435)
  * The dropdown now shows the 20 most common file extensions, and up to 50 matching extensions when you search.

* **Fixed a bug** where a policy assignment rule condition reset when you changed the condition field while a multi-select **is set to** dropdown was open. (#75045)

* **Fixed an issue** where progress notifications for actions could be duplicated, so action metrics now recalculate correctly without duplicated entries. (#74572)

* **Various improvements, including UX and UI fixes, have been implemented.**
