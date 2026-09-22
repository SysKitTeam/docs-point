---
description: This article lists improvements and bug fixes in Syskit Point version 2026.3.159
---

# Syskit Point 2026.3.159

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.3.159

**Build number:** XX

**Release date:** September 22, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.3.159](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-3-159-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


:::warning
**Please note!**

* **Syskit Point now runs on .NET 10, which requires an App Service runtime stack change.**

* If you use the **standard Syskit Point upgrade path or ARM template**, **no action is required** — the runtime stack is updated for you.

* If you **maintain your own custom deployment**, update the **runtime stack** setting for **both Point App Services (Frontend and Backend)**:
  * Set `netFrameworkVersion` to `v10.0`

* [For more information on upgrading Syskit Point, see the upgrade article.](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md)

:::


## New Features

* **Syskit Point AI is now available in Early Access.**
  * Syskit Point now uses AI to turn your governance data into faster answers and clearer priorities.
  * Features that use large language models are off by default and must be enabled by a Syskit Point admin, while the new machine learning-supported report is available to everyone with no setup.
  * [Explore what Syskit Point AI can do in this section.](../../../ai-in-syskit-point/README.md)

* **New inventory of AI Agents and Apps is now available!**
  * Syskit Point now provides a unified inventory of the Microsoft agents and apps that can access your Microsoft 365 data.
  * The new **AI Agents** dashboard tile shows how many AI agents and Entra apps are present in your environment and lets you drill into the underlying reports directly from the tile or the Report Center.
  * The **Agents Inventory** report covers custom SharePoint agents, Copilot agents, and Agent Builder, while the **Apps Inventory** report covers Entra ID app registrations, enterprise applications, and service principals that can reach your Microsoft 365 data.
  * This feature is in early access and is still being expanded.
  * For more details, [please take a look at the AI Agents overview article.](../../../ai-agents-and-apps/ai-agents-and-apps-overview.md)

* **New automation and insights are now available for Cleanup Opportunities.**
  * **Automated cleanup is now available for Leftover Anyone Links on the Cleanup Opportunities tile.**
    * Syskit Point can now remove leftover anyone links automatically, instead of you having to resolve them manually.
    * When enabled, Syskit Point detects leftover anyone links that no longer comply with your external sharing policy and removes them.
    * Every removed link is recorded in the action history, so you can track what was changed and when.
    * By default, automation is turned off.
    * For more details, [please take a look at the Leftover Anyone Links section of the Cleanup Opportunities article.](../../../microsoft365-inventory/cleanup-opportunities.md#leftover-anyone-links)
  * **Automated cleanup is now available for Leftover External Users.**
    * Syskit Point can now remove leftover external users automatically, instead of you having to resolve them manually.
    * When enabled, Syskit Point detects external users whose access no longer complies with your external sharing settings and removes it.
      * You can still resolve leftover external users manually from the Cleanup Opportunities tile.
    * Every removed access is recorded in the action history, so you can track what was changed and when.
    * Automated cleanup is turned off by default and is available only with a licensed subscription.
    * For more details, [take a look at the Leftover External Users section of the Cleanup Opportunities article.](../../../microsoft365-inventory/cleanup-opportunities.md#leftover-external-users)
  * **A new Cleanup Opportunities Insights report is available.**
    * You can find the report in the **Governance** area, under the **Security & Compliance** section, and it provides an overview of all completed and pending cleanup actions taken from the Cleanup Opportunities tile.
    * The Cleanup Opportunities Insights report tracks the cleanup opportunities that have been resolved or are currently pending, split into **Automated** and **Manual** cleanup.
    * The Cleanup Trend graph is cumulative and shows the total number of resolved items as it changes over time.
    * For more details, [please take a look at the Cleanup Opportunities Insights section of the Cleanup Opportunities article.](../../../microsoft365-inventory/cleanup-opportunities.md#cleanup-opportunities-insights)
  * **Cleanup automations are available only with a licensed subscription and cannot be accessed during your free trial.**
    * During the free trial, you can still review your cleanup opportunities and resolve them manually, but automated cleanup cannot be turned on.



## Improvements & Bug Fixes

### Access Management

* **Syskit Point now supports Microsoft's new Hero Links sharing experience!**
  * Microsoft is moving SharePoint and OneDrive sharing to a single link per file, referred to as Hero Links.
  * **A new Hero Link column is now available on link-based reports.**
    * The column is available on all reports that list individual sharing links, including the **Sharing Links** and **User Access** reports, as well as the Workspace Review wizard steps for All Shared Content, Anyone Links, Company-Wide Links, Unused Links, and User Access.
    * It identifies Microsoft's default per-item sharing links and distinguishes them from classic sharing links.
  * **The Remove Sharing Link and Remove Access actions now work on hero links.**
    * Since SharePoint does not allow deleting a hero link, the Remove Sharing Link action switches its audience to Specific people instead.

### Security & Compliance

* **The redundant unique permissions recommendation is no longer shown** for items that still have an active sharing link, since removing the unique permissions there could affect that sharing.

### Governance

* **Fixed a bug** in policy assignment **Rules** where changing a condition's property cleared the values you had already selected from the **is set to** dropdown.

### Reporting

* **Improvements made to the Sync Status report.**
  * The **Sync Status** report, located in the top right corner of Syskit Point when on the Sites Overview and Teams & Groups Overview screens, lets you review each site's sync state and trigger a manual sync.
  * You can now **add metadata columns** to filter and sync sites by their metadata.
    * These columns are hidden by default and can be selected from the column chooser.

* **Fixed an issue** where the progress notification shown while an action was running could appear more than once.
  * These duplicate notifications also affected action metrics, which now recalculate correctly without the extra entries.

### Storage

* **Fixed an issue** where archived and deleted storage was overcounted when calculating how much storage you've saved over time.
  * The Storage Saved metric on the Dashboard now correctly shows how much storage you've freed up by archiving and deleting content.

* **Improved the performance of the stale files dialogs.**
  * The top 20 extensions are now displayed by default, with the option to search all of the available extensions by name.

### Configuration

* **Fixed a bug** where a point of contact email address was not saved when moving focus to another field unless you first pressed Enter.

* **Various improvements, including UX and UI fixes, have been implemented.**
