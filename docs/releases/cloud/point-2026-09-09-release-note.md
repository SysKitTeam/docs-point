---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.158.10
---

# September 9, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **Automated cleanup is now available for Leftover Anyone Links on the Cleanup Opportunities tile.**
  * Syskit Point can now remove leftover anyone links automatically, instead of you having to resolve them manually.
  * When enabled, Syskit Point detects leftover anyone links that no longer comply with your external sharing policy and removes them.
  * Every removed link is recorded in the action history, so you can track what was changed and when.
  * By default, automation is turned off.

* **A new Cleanup Opportunities Insights report is available.**
  * You can find the report in the **Governance** area, under the **Security & Compliance** section, and it provides an overview of all completed and pending cleanup actions taken from the Cleanup Opportunities tile.
  * The Cleanup Opportunities Insights report tracks the cleanup opportunities that have been resolved or are currently pending, split into **Automated** and **Manual** cleanup.
  * The Cleanup Trend graph is cumulative and shows the total number of resolved items as it changes over time.

## Improvements & Bug Fixes

* **Cleanup automations are now available only with a licensed subscription and cannot be accessed during your free trial.**
  * During the free trial, you can still review your cleanup opportunities and resolve them manually, but automated cleanup cannot be turned on.

* **Improvements made to the Sync Status report.**
  * The **Sync Status** report, located in the top right corner of Syskit Point when on the Sites Overview and Teams & Groups Overview screens, lets you review each site's sync state and trigger a manual sync.
  * You can now **add metadata columns** to filter and sync sites by their metadata.
    * These columns are hidden by default and can be selected from the column chooser.

* **Fixed an issue** where archived and deleted storage was overcounted when calculating how much storage you've saved over time.
  * The Storage Saved metric on the Dashboard now correctly shows how much storage you've freed up by archiving and deleting content.

* **Fixed a bug** in policy assignment Rules where changing a condition's property cleared the values you had already selected from the **is set to** dropdown.

* **Fixed an issue** where the progress notification shown while an action was running could appear more than once.
  * These duplicate notifications also affected action metrics, which now recalculate correctly without the extra entries.

* **Various improvements, including UX and UI fixes, have been implemented.**
