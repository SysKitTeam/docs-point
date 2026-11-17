---
description: This article lists new features, improvements, and bug fixes in Syskit Point version 2026.4.167
---

# Syskit Point 2026.4.167

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.4.167

**Build number:** 42

**Release date:** November 17, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.4.167](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-4-167-42%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## New Features

* **Automation is now available for ownerless agents on the Agents Inventory report!**
  * Syskit Point can now automatically assign a new owner to Copilot Studio and Agent Builder agents whose owner is no longer an active user.
  * You can choose whether the new owner is the previous owner's manager or the agent's sponsor.
  * Every change is recorded in the new [**Ownerless Agents History**](../../../ai-agents-and-apps/ai-agents-and-apps-automation.md#ownerless-agents-history-report) report.
  * The automation requires the AI Agents service account to have the **Power Platform Administrator** role.
  * For more details, [please take a look at the Ownerless Agents Automation article.](../../../ai-agents-and-apps/ai-agents-and-apps-automation.md)

* **New Agent Activity and Agent Configuration Changes reports are available.**
  * You can open both reports from the **Agents Inventory** report and the agent details screen.
  * The **Agent Activity** report shows how users interact with agents in Microsoft 365 Copilot.
  * The **Agent Configuration Changes** report shows administrative and configuration changes made to agents, such as blocking, reassigning, or deleting an agent.
  * For more details, [please take a look at the AI Agents Actions article.](../../../ai-agents-and-apps/ai-agents-and-apps-actions.md#agent-activity)

## Improvements & Bug Fixes

### Security & Compliance

* **Fixed a bug** where Point collaborators couldn't apply sensitivity labels to sites that aren't connected to a Microsoft 365 group, such as communication sites and classic sites.

### AI Agents & Apps

* **AI Agents & Apps in Syskit Point is no longer in early access.**
  * The **Early Access** label has been replaced with the **New** label on all AI Agents screens.
  * AI Agents & Apps features are now available according to your Syskit Point plan:
    * **The Agents Inventory and Apps Inventory reports** are available in the Management plan and higher tiers.
    * **The Agent Activity and Agent Configuration Changes reports** are available in the Security & Compliance plan and higher tiers.
    * **The Ownerless agents automation** is available in the Governance plan and higher tiers.
    * See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
  * For more details, [please take a look at the AI Agents Overview article.](../../../ai-agents-and-apps/ai-agents-and-apps-overview.md)

* **Improvements made to the AI Agents setup.**
  * **AI Agents now uses a dedicated service account**, separate from the service account Syskit Point uses to collect other data.
    * If you have already set up AI Agents, your current service account is used automatically, and no action is needed.
  * **The whole setup can now be completed** on the AI Agents settings screen.
  * **The AI Reader role is now sufficient to discover and sync agents.**
    * The **Power Platform Administrator** role is required only if you want to use agent automation.
  * For more details, [please take a look at the AI Agents Settings article.](../../../ai-agents-and-apps/ai-agents-and-apps-settings.md)

* **Improvements made to AI Agents.**
  * **Inactive agents are now identified** in the Agents inventory.
    * Use the new **Inactive** insight and view to find agents that are no longer being used and decide whether they are still needed.
    * The number of inactive agents is also **shown on the Agents Inventory report and the AI & app governance Dashboard tile**.
  * **Orphaned agents have been renamed to ownerless agents** across Syskit Point, including insights, views, and email notifications.
  * **Tools and Topics tiles have been added** to the agent details screen.
  * **The AI & app governance Dashboard tile** now shows the agent data sync status.
    * For more details, [please take a look at the AI & app governance Dashboard article.](../../../ai-agents-and-apps/ai-agents-and-apps-dashboard-tile.md)
  * **The app details screen now has a more compact design**, making key information easier to find.

### Governance

* **Improvements made to Workspace Review.**
  * **The Unused Links and Expired Links steps** now show who can use each link.
    * A new **Accessible to** column has been added, and the **Link Type** column has been renamed to **Access**.
  * **Main links are now marked** in the Review All Shared Files step and are always listed first under their file or folder.

* **Fixed issues in provisioning.**
  * Fixed an issue where the service account could remain an owner of a workspace when a sensitivity label was applied during provisioning.
  * Fixed an issue where some provisioning requests could fail to complete.

### Access Management

* **Improvements made to sharing link management.**
  * **The Restrict Sharing action has been renamed to Restrict Link Access.**
    * The confirmation dialog now shows who can access the item through the main link before and after the change.
    * The action is now also available for main links on the Externally Shared Content report.
  * **The Restrict Link Access action is now available on file and folder rows** on the **Sharing Links** and **Permissions Matrix** reports.
    * The action is available when the main link setting is **Anyone** or **People in your organization**.
  * **The Sharing Links tile on the site, list, and library details screens is now full width.**
    * The **Access** and **Sharing link type** columns are now shown without horizontal scrolling.
  * **The Restrict Link Access and Remove Sharing Link buttons now look the same** in all Workspace Review sharing steps.
  * **Fixed an issue** where the **Anonymous Access Links** report did not show the **Remove Sharing Link** and **Restrict Link Access** actions.

### Reporting

* **Improvements made to Reports.**
  * **Main links are now easier to recognize** on the Permissions Matrix and Externally Shared Content reports.
    * Main links have a new icon, are named **Main Link (Anyone)** or **Main Link (People in your org)**, and are always listed first under their file or folder.
    * The **Hero Link Setting** column has been renamed to **Main link setting**, and its values now match the ones on the **Sharing Links** report.
    * For more details, [please take a look at the Hero Links article.](../../../reporting/hero-links.md)
  * **The Sharing link type column replaces the Hero Link column** on the User Access report and in the Workspace Review Sharing step.
    * The column shows whether a link is the main link of a file or folder or another type of link.
    * The column is hidden by default but can be selected from the column chooser.
  * **The User Access report** now shows when a user's access comes from a main link.
    * The main link is shown in the **Details** column, for example, **Main Link (People in your org)**, as well as in exported reports and Workspace Review tasks.
  * **Extension Attribute columns can now be filtered and sorted** on the Users Overview report.
  * **Fixed an issue** where the Externally Shared Content report did not show all Anyone links.
    * All Anyone links, including links that nobody has used yet, are now shown.
  * **Fixed an issue** where links that let people in your organization upload files to a folder, such as links created by Microsoft Forms, were shown as a different link type.
    * These links are now shown as *People in company with the link can upload files to the folder* and are counted as company-wide links.

* **Fixed an issue** where the Site Details screen stopped working when hovering over **More Info** on sites with multiple metadata values applied.

### Sync & Performance

* **Fixed an issue** where app sign-in data could fail to collect in larger environments.

* **Fixed a bug** where Power Platform sync could fail for environments with missing metadata.

* **Various improvements, including UX and UI fixes, have been implemented.**
