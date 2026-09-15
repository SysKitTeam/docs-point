---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.3.159
---

# September 15, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.


## New Features

* **New inventory of AI Agents and Apps is now available!**
  * Syskit Point now provides a unified inventory of the Microsoft agents and apps that can access your Microsoft 365 data.
  * The new **AI Agents** dashboard tile shows how many AI agents and Entra apps are present in your environment and lets you drill into the underlying reports directly from the tile or the Report Center.
  * The **Agents Inventory** report covers custom SharePoint agents and Copilot agents, while the **Apps Inventory** report covers Entra ID app registrations, enterprise applications, and service principals that can reach your Microsoft 365 data.
  * This feature is in early access and still being expanded.
  * For more details, [please take a look at the AI Agents overview article.](../../ai-agents-and-apps/ai-agents-and-apps-overview.md)

* **Automated cleanup is now available for Leftover External Users!**
  * Syskit Point can now remove leftover external users automatically, instead of you having to resolve them manually.
  * When enabled, Syskit Point detects external users whose access no longer complies with your external sharing settings and removes it. 
    * You can still resolve leftover external users manually from the Cleanup Opportunities tile.
  * Every removed access is recorded in the action history, so you can track what was changed and when.
  * Automated cleanup is turned off by default and is available only with a licensed subscription.
  * For more details, [take a look at the Leftover External Users section of the Cleanup Opportunities article.](../../microsoft365-inventory/cleanup-opportunities.md#leftover-external-users)

## Improvements & Bug Fixes

* **Improvements made to the Sharing Links report!**
  * **Non-materialized organization-wide and anonymous hero links are now displayed** on the Sharing Links report and other related reports, giving you a complete view of how content is shared.
  * **The Default Link column has been renamed to Hero Link** to better reflect what it represents.
  * **The Hero Link column has been removed** from the Group Access report and other group-based reports where it did not apply.

* **Fixed a bug** where a points of contact email address was not saved when moving focus to another field unless you first pressed Enter.

* **Fixed a bug** where the stale files dialogs listed every file extension.
  * They now show only the top 20 extensions.

* **The redundant unique permissions recommendation is no longer shown** for items that still have an active sharing link, since removing the unique permissions there could affect that sharing.

* **Various improvements and minor UX and UI fixes are available.**
