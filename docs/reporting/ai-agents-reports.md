---
description: The AI Agents reports provide an overview of your AI agents with the Custom SharePoint Agents Inventory report.
---

# AI Agents Reports

In this article, you can find information on the [Custom SharePoint Agents Inventory Report](#custom-sharepoint-agents-inventory-report).

:::info
Copilot Agents reports are a part of the Power Platform add-on. Navigate to the [Copilot Agents Reports article located in the Power Platform section to find more information on the available reports.](../power-platform/power-platform-reports/copilot-agents-reports.md)
:::

**The Custom SharePoint Agents Inventory** report can be used to identify all custom SharePoint agents, their locations, and approval statuses, among other details. The report also enables you to **navigate to the Agent Details screen for the selected agent, where you can find all of the agent's knowledge sources**.

## Custom SharePoint Agents Inventory Report

The Custom SharePoint Agents Inventory report helps you discover and monitor all custom-built SharePoint Agents in your organization. 

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the AI Agents category in the filter** in the upper left corner.
* **Click the Custom SharePoint Agents Inventory report tile** to be redirected to the Selection screen.

When generating the report, the first step is the **selection screen**, which shows a list of workspaces with custom SharePoint agents. This step allows you to select which workspaces, and their custom SharePoint agents, you want included in the report.
On the selection step, the following workspace data is available
* **Name** of the workspace with Custom SharePoint Agents
* **URL** of the workspace
* **Last Modified** shows the date the workspace was last modified
* **Custom SharePoint Agents** shows the number of Custom SharePoint Agents for the workspace


* **Selecting one or more workspaces provides the Run Report button.** This generates the Custom SharePoint Agents Inventory report for the selected workspaces.

### Report Data

Clicking the **Run Report** button generates the Custom SharePoint Agents Inventory report. The default columns displayed in the report are:    

* **Agent Name** of the custom SharePoint agent
    * **Clicking the Agent Name opens the Agent Details screen** where you can **find all of the agent's knowledge sources** listed in the separate tile
* **URL** shows the link to the custom SharePoint agent 
* **Site Name** shows the name of the workspace that contains the Custom SharePoint agent
* **Created By** shows the user who created the custom SharePoint agent
* **Created On** shows when the custom SharePoint agent was created
* **Modified By** shows the user who last modified the custom SharePoint agent 
* **Modified On** shows when the custom SharePoint agent was last modified
* **Is Approved** shows whether the Custom SharePoint Agent was approved by showing a green checkbox in the column
* **Retention Label** shows which, if any, retention label is applied

The Custom SharePoint Agents Inventory report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.



