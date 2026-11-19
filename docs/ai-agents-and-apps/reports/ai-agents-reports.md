---
description: AI Agents reports provide an overview of the Microsoft agents across your tenant, including their knowledge sources, tools, topics, activity, and configuration changes.
---

# AI Agents Reports

In this article, there is information on the following AI Agents reports:

* [Agents Inventory Report](#agents-inventory-report)
* [Agent Knowledge Sources Report](#agent-knowledge-sources-report)
* [Agent Tools Report](#agent-tools-report)
* [Agent Topics Report](#agent-topics-report)
* [Agent Activity Report](#agent-activity-report)
* [Agent Configuration Changes Report](#agent-configuration-changes-report)

These reports can be accessed in the Report Center by selecting the **AI Agents** category in the filter. The Agent Knowledge Sources, Agent Tools, Agent Topics, Agent Activity, and Agent Configuration Changes reports can also be opened from the Agents Inventory report by selecting one or more agents.

* [For reports on Entra apps, take a look at the Entra Apps Reports article.](entra-apps-reports.md)
* [For the permissions granted to agents and apps, take a look at the Permissions and Consent Report article.](permissions-and-consent-report.md)
* [For actions you can take on agents, such as Block, Reassign, and Delete, take a look at the AI Agents Actions article.](../ai-agents-and-apps-actions.md#agent-actions)

## Agents Inventory Report

The **Agents Inventory** report gives you an overview of the **Microsoft agents across your tenant**. It provides details on SharePoint agents, Copilot Studio agents, and Agent Builder agents, including their **type, ownership, and access**. 

### Generate Report

You can open the Agents Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agents Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI & app governance Dashboard tile](../ai-agents-and-apps-dashboard-tile.md) and click **View all agents** to open the full report, or click any of the counts on the tile to open the report filtered to that view. 

### Report Data

Once the report is generated successfully, two tiles at the top summarize the state of your agents:

* **The Overview tile** shows the total number of **agents deployed across your tenant**, with a breakdown by type (Copilot Studio, SharePoint agents, and Agent Builder).
* **The Needs Attention tile** highlights the agents that may require action, with numbers showing the amount for the following:
  * **Sensitive agents** - agents that reference sensitive content through their knowledge sources (see the [Sensitive Agents](#sensitive-agents) section below)
  * **Ownerless agents** - agents that do not have an active owner
    * Clicking **Set up automation** lets you set up the [Ownerless agents automation](../ai-agents-and-apps-automation.md), which automatically assigns a new owner to ownerless agents
    * If the automation is already turned on, the button is called **Manage automation**
  * **Shared** - agents shared with at least one other person
  * **Shared with everyone** - agents shared with everyone in the organization
  * **Inactive agents** - agents that are no longer being used

The report grid shows the following columns:

* **Name** of the agent
* **Agent Type** - Copilot, SharePoint, or Agent Builder
* **Owner** - the user who owns the agent
* **Status** - for example, Published, Draft, Approved, or Not approved
* **Access** - whether the agent is Private, Shared, or available to Everyone
* **Insights** - highlights such as Ownerless, Blocked, Sensitive, or Inactive

Use the **Inactive** view to find agents that are no longer being used and decide whether they are still needed.

The additional columns available in the column chooser are:

* Site Name
* Environment
* Number of sources
* Sources with sensitive data
* Users
* Groups
* Channels
* Active Users
* Retention Label
* Entra Agent Blueprint
* Entra Agent Id
* Created On
* Created By
* Modified On
* Modified By
* Published On
* URL

### Sensitive Agents

An agent is flagged as **Sensitive** when it references sensitive content through its knowledge sources. A knowledge source is considered sensitive when:

* The agent references a **site** that has a sensitivity label applied.
* The agent references a **file** that has a sensitivity label applied.
* The agent references an **unlabeled file** that is located in a workspace considered sensitive.

This applies to all agent types - SharePoint agents, Copilot Studio agents, and Agent Builder agents.

To control which sensitivity labels are treated as sensitive content, [see how to view and manage sensitive content in the Settings](../../microsoft365-inventory/copilot-readiness.md#sensitive-files).

### Agent Details

The agent details screen brings together all the key information about a single agent, along with the actions you can take on it.

To open the agent details screen, **click the agent name** on the Agents Inventory report.

The agent details screen is available for **Copilot Studio** and **Agent Builder** agents. SharePoint agents continue to use their existing details screen.

The agent details screen contains the following tiles:

* **The General Info tile** shows the key information about the agent. The tile header shows whether it is a Copilot Studio Agent or an Agent Builder Agent. The following information is available on the tile:

  * **Agent type**
  * **Location** - the Power Platform environment where the agent is located
  * **Created** - when and by whom the agent was created
  * **Last modified** - when and by whom the agent was last modified
  * **Published** - whether the agent is published, and the publishing date
  * **Agent identity** - whether the agent has an agent identity
  * **Owners** and **Sponsors** - shown as links you can click to drill down
  * **Access** - whether the agent is Private, Shared, or available to Everyone
  * **Users & groups** - the number of users and groups the agent is shared with, or Everyone if the agent is shared with the entire organization
  * **Last used** - date when the agent was last used
  * **Blocked** - whether the agent is blocked
  * If a value is not available for the agent, the tile shows **Not available**
* **The Insights tile** shows the same highlights as the **Insights** column on the Agents Inventory report, with slightly more detail, showcasing any potential issues
* **The Active users** tile shows the number and list of active users that have utilized the agent in the last 30 days
* **The Knowledge Sources tile** lists the knowledge sources the agent uses, with the **Name**, **Type**, **Location**, and **Sensitivity Label** of each source.
* **The Tools tile** lists the tools the agent uses, with the **Tool**, **Type**, and whether the tool is **Enabled**
  * The tile header shows the number of tools and how many of them are enabled
  * Clicking **Explore** opens the full list of the agent's tools
* **The Topics tile** lists the topics the agent uses, with the **Topic**, **Trigger**, **Type**, and whether the topic is **Enabled**
  * The tile header shows the number of topics and how many of them are custom
  * Clicking **Explore** opens the full list of the agent's topics

From the agent details screen, you can also complete the **Block** or **Unblock**, **Reassign**, and **Delete** actions for that agent.
* [Take a look at the AI Agents Actions article for more details.](../ai-agents-and-apps-actions.md#agent-actions)

### Report Actions

The Agents Inventory report can be **exported as PDF, CSV and XLSX files**. There is also the **option to schedule the report**.

Selecting one or more agents in the report lets you:

* **Complete agent actions**, such as Block, Unblock, Reassign, and Delete
  * [Take a look at the AI Agents Actions article for more details on all the available agent actions.](../ai-agents-and-apps-actions.md#agent-actions)
* **Open the following reports** for the selected agents:
  * [Agent Knowledge Sources](#agent-knowledge-sources-report)
  * [Agent Tools](#agent-tools-report)
  * [Agent Topics](#agent-topics-report)
  * [Agent Activity](#agent-activity-report)
  * [Agent Configuration Changes](#agent-configuration-changes-report)

## Agent Knowledge Sources Report

The **Agent Knowledge Sources** report helps you discover all the **knowledge sources the selected agents use**.

### Generate Report

You can open the Agent Knowledge Sources report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agent Knowledge Sources report tile** to open the selection screen with the list of agents from the Agents Inventory.
  * **Select the agents** you want to include in the report to generate it.
* From the **Agents Inventory report**:
  * **Select one or more agents** and **click the Knowledge Sources action**.

### Report Data

The default columns displayed in the report are:

* **Name** of the knowledge source
* **Type** of the knowledge source
* **Location** of the knowledge source
* **Sensitivity Label** applied to the knowledge source

## Agent Tools Report

The **Agent Tools** report helps you discover all the **tools the selected agents use**, grouped by agent.

### Generate Report

You can open the Agent Tools report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agent Tools report tile** to open the selection screen with the list of agents from the Agents Inventory.
  * **Select the agents** you want to include in the report to generate it.
* From the **Agents Inventory report**:
  * **Select one or more agents** and **click the Tools action**.

### Report Data

The default columns displayed in the report are:

* **Tool** - the name of the tool
* **Type** - for example, Connector, Model Context Protocol, or Agent
* **Enabled** - whether the tool is enabled

## Agent Topics Report

The **Agent Topics** report helps you discover all the **topics the selected agents use**, grouped by agent.

### Generate Report

You can open the Agent Topics report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agent Topics report tile** to open the selection screen with the list of agents from the Agents Inventory.
  * **Select the agents** you want to include in the report to generate it.
* From the **Agents Inventory report**:
  * **Select one or more agents** and **click the Topics action**.

### Report Data

The default columns displayed in the report are:

* **Topic** - the name of the topic
* **Trigger** - for example, Phrases or System
* **Type** - Custom or System
* **Enabled** - whether the topic is enabled

## Agent Activity Report

:::info
**The Agent Activity report** is available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

The **Agent Activity** report shows **how users interact with the selected agents**, for example, **Interacted with Copilot**.

### Generate Report

You can open the Agent Activity report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agent Activity report tile** to open the selection screen with the list of agents from the Agents Inventory.
  * **Select the agents** you want to include in the report to generate it.
* From the **Agents Inventory report**:
  * **Select one or more agents** and **click the Agent Activity action**.

### Report Data

The report opens on the **Last 30 Days** view. The default columns displayed in the report are:

* **Date**
* **Activity**
* **Agent**
* **Performed By**
* **Item**
* **IP Address**
* **Additional Info**

To see more details, **expand each row**.

### Report Actions

The Agent Activity report can be **exported as PDF, XLSX, and CSV files**. There is also the **option to schedule the report**.

## Agent Configuration Changes Report

:::info
**The Agent Configuration Changes report** is available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

The **Agent Configuration Changes** report shows **the changes made to the selected agents**, such as **Blocked agent** and **Unblocked agent**, together with the changes made to the agent's identity in Microsoft Entra, such as **Updated service principal**.

### Generate Report

You can open the Agent Configuration Changes report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Agent Configuration Changes report tile** to open the selection screen with the list of agents from the Agents Inventory.
  * **Select the agents** you want to include in the report to generate it.
* From the **Agents Inventory report**:
  * **Select one or more agents** and **click the Agent Configuration Changes action**.

### Report Data

The report opens on the **Last 30 Days** view. The default columns displayed in the report are:

* **Date**
* **Activity**
* **Agent**
* **Performed By**
* **IP Address**
* **Additional Info**

To see more details, **expand each row**.

### Report Actions

The Agent Configuration Changes report can be **exported as PDF, XLSX, and CSV files**. There is also the **option to schedule the report**.

## Related Articles

* [AI Agents Overview](../ai-agents-and-apps-overview.md)
* [Configure AI Agents](../ai-agents-and-apps-settings.md)
* [AI & app governance Dashboard tile](../ai-agents-and-apps-dashboard-tile.md)
* [Entra Apps Reports](entra-apps-reports.md)
* [Permissions and Consent Report](permissions-and-consent-report.md)
* [AI Agents Actions](../ai-agents-and-apps-actions.md)
* [Ownerless Agents Automation](../ai-agents-and-apps-automation.md)