---
description: This article provides information on available Copilot Agents reports.
---

# Copilot Agents Reports

{% hint style="info" %}
**Please Note!** Power Platform is **now available as an add-on** purchase to your Syskit Point subscription. 

To enable the use of Power Platform for Syskit Point, [please contact us](https://www.syskit.com/contact-us-power-platform/).

{% endhint %}

This article contains information on two Copilot Agents reports available through the Report Center:
* [Copilot Agents Inventory Report](#copilot-agents-inventory-report)
* [Copilot Agent Knowledge Sources](#copilot-agent-knowledge-sources)

## Copilot Agents Inventory Report

The Copilot Agents Inventory report helps you discover and monitor all Copilot Agents in your organization. 

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the AI Agents category in the filter** in the upper left corner.
* **Click the Copilot Agents Inventory report tile** to be redirected to the Selection screen.

When generating the Copilot Agents Inventory report, the first step is the **selection screen** which opens as a list of [Power Platform Environments](power-platform-environments-reports.md) containing Copilot agents. This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Copilot Agents Inventory report** for the selected environments. 

### Report Data

On the Copilot Agents Inventory report, you can find the following information in the columns:

* **Name** of the Copilot Agent
* **Environment** - the name of the environment where the Copilot Agent is located
* **Number of sources** - the number of sources the copilot agent utilizes
* **Sources with sensitive data** - the number of sources utilized with sensitive data
* **Created by** - shows who created the Copilot Agent
* **Created on** - shows the date when the Copilot Agent was created
* **Owner** - shows the name of the owner for the Copilot Agent
* **Modified by** shows who last modified the Copilot Agent
* **Modified On** shows when the Copilot agent was last modified

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **Active Owners** shows the number of agent owners who are not deleted or blocked

The report provides the following views, which you can find in the top left dropdown:
* **Orphaned Copilot Agents** - shows Copilot agents with no active owners
* **Sensitive Agents** - shows Copilot agents with sensitive knowledge sources

The Copilot Agents Inventory report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

**By selecting one or more Copilot agents in the report**, the **Knowledge Sources report** action becomes available in the Go to Report section on the right-hand side. Click the action to generate the Copilot Agent Knowledge Sources report.

## Copilot Agent Knowledge Sources

The Copilot Agent Knowledge Sources report helps you discover all knowledge sources for one or multiple Copilot Agents.

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the AI Agents category in the filter** in the upper left corner.
* **Click the Copilot Agent Knowledge Sources** to be redirected to the Selection screen.

When generating the Copilot Agent Knowledge Sources report, the first step is the **selection screen**, which opens as a list of [Power Platform Environments](power-platform-environments-reports.md) containing Copilot agents. This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Copilot Agent Knowledge Sources report** for the selected environments. 

### Report Data

On the Copilot Agent Knowledge Sources report, you can find the following information in the columns:

* **Agent** - shows the name of the Copilot agent
    * Note that the report is grouped by Copilot agent column to easily see all of the knowledge sources belonging to a Copilot agent
    * To remove the grouping, drag the Agent filter from the top left to the grid, which will insert the Agent column in the report
* **Name** of the knowledge source
* **Last Modified** - shows when the knowledge source was last modified
* **Type** - shows the type of the knowledge source, e.g., Dataverse, Files, SharePoint, Public Website
* **Sensitive Content** - shows whether the knowledge source has a sensitivity label applied, which is marked as sensitive in Syskit Point; check = sensitive, empty = not sensitive
* **Sensitivity Label** - Shows the sensitivity label applied to the knowledge source

The Copilot Agent Knowledge Sources report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.