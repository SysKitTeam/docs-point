---
description: The AI Agents reports provide an overview of the agents and apps in your tenant through the Agents Inventory, Apps Inventory, and Copilot Agent Knowledge Sources reports.
---

# AI Agents Reports

AI Reports in Syskit Point provide easy monitoring for AI usage across your tenant, which helps you track the agents and apps that can access your Microsoft 365 data. When you select the **AI Agents** category in the Report Center, the following reports are available:

* [Agents Inventory](../ai-agents-and-apps/ai-agents-and-apps-agents-inventory.md) - an overview of the Microsoft agents across your tenant, including their type, ownership, and access
* [Apps Inventory](../ai-agents-and-apps/ai-agents-and-apps-apps-inventory.md) - an overview of the Entra ID app registrations, enterprise applications, and service principals in your tenant
* [Copilot Agent Knowledge Sources](#copilot-agent-knowledge-sources) - an overview of the knowledge sources for one or more Copilot agents

The Agents Inventory and Apps Inventory reports each have a dedicated article. This article covers the **Copilot Agent Knowledge Sources** report.

## Copilot Agent Knowledge Sources

The Copilot Agent Knowledge Sources report helps you discover all knowledge sources for one or multiple Copilot agents.

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the AI Agents category in the filter** in the upper left corner.
* **Click the Copilot Agent Knowledge Sources** to be redirected to the Selection screen.

When generating the Copilot Agent Knowledge Sources report, the first step is the **selection screen**, which opens as a list of [Power Platform Environments](../power-platform/power-platform-reports/power-platform-environments-reports.md). By default, only Evironments with Copilot agents are shown. This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Copilot Agent Knowledge Sources report** for the selected environments. 

### Report Data

On the Copilot Agent Knowledge Sources report, you can find the following information in the columns:

* **Agent** - shows the name of the Copilot agent
    * Note that the report is grouped by Copilot agent column to easily see all of the knowledge sources belonging to a Copilot agent
    * To remove the grouping, drag the Agent filter from the top left to the grid, which will insert the Agent column in the report
    * Additionally, you can group by other columns by simply drag-and-dropping the wanted column to the top left corner above the report grid
* **Name** of the knowledge source
* **Last Modified** - shows when the knowledge source was last modified
* **Type** - shows the type of the knowledge source, e.g., Dataverse, Files, SharePoint, Public Website
* **Sensitive Content** - shows whether the knowledge source has a sensitivity label applied, which is marked as sensitive in Syskit Point; green checkmark is placed next to knowledge sources whose sensitivity label is considered sensitive content
    * [To see how to view and manage sensitivity labels defined as sensitive content, navigate to this section](https://docs.syskit.com/point/microsoft365-inventory/copilot-readiness#sensitive-files)
* **Sensitivity Label** - Shows the sensitivity label applied to the knowledge source

The Copilot Agent Knowledge Sources report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.