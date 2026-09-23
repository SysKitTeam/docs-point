---
description: The Agents Inventory report provides an overview of the Microsoft agents across your tenant.
---

# Agents Inventory Report

The **Agents Inventory** report gives you an overview of the **Microsoft agents across your tenant**. It provides details on SharePoint agents, Copilot Studio agents, and Agent Builder agents, including their **type, ownership, and access**. 

:::info

**AI Agents in Syskit Point is currently in Early Access** and free to use while the feature is in active development. Feature behavior and scope may change as new capabilities are released.

:::

## Generate Report

You can open the Agents Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agents Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI Agents tile](ai-agents-and-apps-dashboard-tile.md) and click **View all agents** to open the full report, or click any of the counts on the tile to open the report filtered to that view. 


## Report Data

Once the report is generated successfully, two tiles at the top summarize the state of your agents:

* **The Overview tile** shows the total number of **agents deployed across your tenant**, with a breakdown by type (Copilot Studio, SharePoint agents, and Agent Builder).
* **The Needs Attention tile** highlights the agents that may require action, with numbers showing the amount for the following:
  * **Sensitive agents** - agents that reference sensitive content through their knowledge sources (see the [Sensitive Agents](#sensitive-agents) section below)
  * **Orphaned agents** - agents that do not have an active owner
  * **Shared** - agents shared with at least one other person
  * **Shared with everyone** - agents shared with everyone in the organization

The report grid shows the following columns:

* **Name** of the agent
* **Agent Type** - Copilot, SharePoint, or Agent Builder
* **Owner** - the user who owns the agent
* **Status** - for example, Published, Draft, Approved, or Not approved
* **Access** - whether the agent is Private, Shared, or available to Everyone
* **Insights** - highlights such as Orphaned, Blocked, or Sensitive

The additional columns available in the column chooser are:

* Site Name
* Environment
* Number of sources
* Sources with sensitive data
* Users
* Groups
* Channels
* Retention Label
* Entra Agent Blueprint
* Entra Agent Id
* Created On
* Created By
* Modified On
* Modified By
* Published On
* URL

The Agents Inventory report can be **exported as PDF, CSV and XLSX files**. There is also the **option to schedule the report**.

## Sensitive Agents

An agent is flagged as **Sensitive** when it references sensitive content through its knowledge sources. A knowledge source is considered sensitive when:

* The agent references a **site** that has a sensitivity label applied.
* The agent references a **file** that has a sensitivity label applied.
* The agent references an **unlabeled file** that is located in a workspace considered sensitive.

This applies to all agent types - SharePoint agents, Copilot Studio agents, and Agent Builder agents.


To control which sensitivity labels are treated as sensitive content, [see how to view and manage sensitive content in the Settings](../microsoft365-inventory/copilot-readiness.md#sensitive-files).

## Related Articles

* [AI Agents Overview](ai-agents-and-apps-overview.md)
* [Configure AI Agents](ai-agents-and-apps-settings.md)
* [AI Agents Dashboard](ai-agents-and-apps-dashboard-tile.md)
* [Apps Inventory Report](ai-agents-and-apps-apps-inventory.md)
* [AI Agents Reports](../reporting/ai-agents-reports.md)
