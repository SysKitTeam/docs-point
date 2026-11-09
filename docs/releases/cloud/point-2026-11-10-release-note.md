---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.4.167.42
---

# November 10, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **Automation is now available for ownerless agents on the Agents Inventory report!**
  * Syskit Point can now automatically assign a new owner to Copilot Studio and Agent Builder agents whose owner is no longer an active user.
  * You can choose whether the new owner is the previous owner's manager or the agent's sponsor.
  * Every change is recorded in the new **Ownerless Agents History** report.
  * The automation requires the AI Agents service account to have the **Power Platform Administrator** role.

* **New Agent Activity and Agent Configuration Changes reports are available.**
  * You can open both reports from the **Agents Inventory** report and the agent details screen.
  * The **Agent Activity** report shows how users interact with agents in Microsoft 365 Copilot.
  * The **Agent Configuration Changes** report shows administrative and configuration changes made to agents, such as blocking, reassigning, or deleting an agent.

## Improvements & Bug Fixes

* **Improvements made to the AI Agents setup.**
  * **AI Agents now uses a dedicated service account**, separate from the service account Syskit Point uses to collect other data.
    * If you have already set up AI Agents, your current service account is used automatically, and no action is needed.
  * **The whole setup can now be completed** on the AI Agents settings screen.
  * **The AI Reader role is now sufficient to discover and sync agents.**
    * The **Power Platform Administrator** role is required only if you want to use agent automation.
  * For more details, [please take a look at the AI Agents Settings article.](../../ai-agents-and-apps/ai-agents-and-apps-settings.md)

* **Improvements made to AI Agents.**
  * **Orphaned agents have been renamed to ownerless agents** across Syskit Point, including insights, views, and email notifications.
  * **Tools and Topics tiles have been added** to the agent details screen.
  * **The AI & app governance Dashboard tile** now shows the agent data sync status.
  * **The app details screen now has a more compact design**, making key information easier to find.

* **AI Agents & Apps in Syskit Point is no longer in early access.**
  * The **Early Access** label has been replaced with the **New** label on all AI Agents screens.

* **Improvements made to sharing link management.**
  * **The Restrict Link Access action is now available on file and folder rows** on the **Sharing Links** and **Permissions Matrix** reports.
    * The action is available when the main link setting is **Anyone** or **People in your organization**.
    * For more details, [please take a look at the Hero Links article.](../../reporting/hero-links.md)
  * **The Sharing Links tile on the site, list, and library details screens is now full width.**
    * The **Access** and **Sharing link type** columns are now shown without horizontal scrolling.
  * **The Restrict Link Access and Remove Sharing Link buttons now look the same** in all Workspace Review sharing steps.
  * **Fixed an issue** where the **Anonymous Access Links** report did not show the **Remove Sharing Link** and **Restrict Link Access** actions.

* **Fixed issues in provisioning.**
  * Fixed an issue where the service account could remain an owner of a workspace when a sensitivity label was applied during provisioning.
  * Fixed an issue where some provisioning requests could fail to complete.

* **Fixed a bug** where Power Platform sync could fail for environments with missing metadata.

* **Various improvements, including UX and UI fixes, have been implemented.**
