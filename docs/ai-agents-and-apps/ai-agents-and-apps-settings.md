---
description: This article explains how to set up AI Agents in Syskit Point to start discovering the Microsoft agents and Entra apps that can access your Microsoft 365 data.
---

# Configure AI Agents

In order to start discovering the **Microsoft agents and Entra apps that can access your Microsoft 365 data**, you need to first set up **AI Agents** in Syskit Point. During the setup, you connect a service account, register Syskit Point as a Power Platform management application, and grant the permissions Syskit Point needs to read the agents across your tenant. This helps you keep track of the agents and Entra apps in one place through the [Agents Inventory](reports/ai-agents-reports.md#agents-inventory-report) and [Apps Inventory](reports/entra-apps-reports.md#apps-inventory-report) reports.

In this article, you can find details on:

* [Prerequisites](#prerequisites)
* [Setup Requirements by Agent Type](#setup-requirements-by-agent-type)
* [Set Up AI Agents](#set-up-ai-agents)
* [Service Account Explained](#service-account-explained)

## Prerequisites

To set up AI Agents:

* You need the **Global Administrator** role.
* To discover **Agent Builder agents**, you need a **service account** with the **AI Reader** or **Power Platform Administrator** role assigned. Syskit Point accepts only these two roles.
  * **We recommend the AI Reader role**, as it gives read-only access to your agents.
  * The **Power Platform Administrator** role is required only if you want to use the [Ownerless agents automation](ai-agents-and-apps-automation.md).
  * The service account doesn't need the Global Administrator role.
* Discovering **Copilot Studio agents** doesn't require a service account. **SharePoint agents** and **Entra apps** sync by default with no additional setup.

## Setup Requirements by Agent Type

The setup steps you need to complete depend on the agents you want to discover:

| Agent type | Requirements |
| --- | --- |
| Copilot Studio agents | Syskit Point [registered in Power Platform](#register-syskit-point-in-power-platform) as a management application |
| Agent Builder agents | A [connected service account](#connect-service-account) with the **AI Reader** or **Power Platform Administrator** role, and the [permissions to discover Agent Builder agents](#grant-permissions) |
| SharePoint agents | No additional setup |
| Entra apps | No additional setup |

If the setup is only partially completed:

* **Without a connected service account**, Copilot Studio and SharePoint agents still sync. The Agent Builder part of the sync fails, and the sync ends as **completed with errors**. Agent Builder agents, their **Blocked** state, and their knowledge sources are missing from Syskit Point.
* **Without registering Syskit Point in Power Platform**, Copilot Studio agents aren't discovered.
* **Without a permission**, you can't use what that permission allows. For example, without the **CopilotStudio.AdminActions.Invoke** permission, you can't block, unblock, or reassign agents in Syskit Point.

## Set Up AI Agents

To set up AI Agents, go to **Settings** and select the **AI Agents section (1)** under **General**.

* **Turn on the Agent inventory toggle (2)**
  * When turned on, Syskit Point syncs the AI agents across your tenant, shows them in the Agents Inventory report, and makes them available for reporting.

Once the toggle is turned on, the **Copilot Studio and Agent Builder setup** section appears. The rest of the AI Agents settings is available only while the Agent inventory toggle is turned on. The setup section guides you through three steps:

1. [Connect a service account](#connect-service-account)
2. [Register Syskit Point in Power Platform](#register-syskit-point-in-power-platform)
3. [Grant permissions](#grant-permissions)

The section header shows your progress, for example, **3 of 3 steps complete**.

![AI Agents - Settings - Enable](../../static/img/ai-agents-apps-setup-settings.png)

### Connect Service Account

Syskit Point signs in with the **service account** connected in the AI Agents settings to read Agent Builder agents across your tenant. The account **must have the AI Reader or Power Platform Administrator role**, and **we recommend the AI Reader role**.

* **We recommend connecting a service account dedicated to AI Agents**, separate from the service account Syskit Point uses to collect the rest of your tenant data.
  * This way, each service account has a single purpose, which is often required by company security policies.
* **Click Connect account** and sign in with the service account.
  * The sign-in is completed without leaving the Settings screen.
* Once connected, the step shows the **connected account** and its **assigned role**.
  * **Click Compare roles (3)** to see what each role allows:
    * **AI Reader** - lets you view agents in Syskit Point reports and perform manual actions on them
    * **Power Platform Administrator** - everything the AI Reader role allows, plus automated actions, such as the [Ownerless agents automation](ai-agents-and-apps-automation.md)
  * If the account has neither role, the step shows **Missing role**, with a link to assign the role in Microsoft Entra.
* **Click Remove account (4)** to disconnect the service account from AI Agents.
  * Once removed, Agent Builder agents, their **Blocked** state, and their knowledge sources stop syncing. Copilot Studio and SharePoint agents continue to sync.
  * The service account connected in the **Connected Tenant** section of Settings is not affected.

:::info

**Already using AI Agents?** You don't need to connect a new service account. The service account you previously connected is automatically used for AI Agents, and your agent data continues to sync without interruption.

:::

![AI Agents - Settings - Service Account](../../static/img/ai-agents-apps-setup-settings-service.png)

### Register Syskit Point in Power Platform

Registering Syskit Point as a **Power Platform management application** lets Syskit Point read Copilot Studio agents across your tenant. A Global Administrator must approve the registration.

* Once registered, the step shows the **Registered** status with a green checkmark next to it.

### Grant Permissions

Grant the permissions for what you want Syskit Point to do with your agents. You can choose which permissions to grant. Without a permission, you can't use what that permission allows. The step shows how many permissions are granted, for example, **4 of 4 permissions granted**.

**To discover Agent Builder agents**, grant the following permissions:

* **Power Platform API/ResourceQuery.Resources.Read** - lets Syskit Point query Agent Builder agents across your tenant
* **Power Platform API/CopilotStudio.MinimalBot.ReadWrite** - lets Syskit Point read the knowledge sources of Agent Builder agents

**To complete [agent actions](ai-agents-and-apps-actions.md)** in Syskit Point, grant the following permissions:

* **Dynamics CRM/user_impersonation** - lets Syskit Point delete Copilot Studio agents
* **Power Platform API/CopilotStudio.AdminActions.Invoke** - lets Syskit Point block, unblock, reassign, and delete agents

**Click Save** to store your preferences.

[Take a look at the Permission Requirements article for more details on why each permission is needed.](../requirements/permission-requirements.md#ai-agents)

Once AI Agents is configured, the first **AI Agents & apps data sync** starts, and the first agents appear in the Agents Inventory report within 24 hours. When the sync is completed, the summary data shows on the [AI & app governance Dashboard tile](ai-agents-and-apps-dashboard-tile.md). From there, you can drill down to the Agents Inventory and Apps Inventory reports for a detailed overview of the agents and Entra apps in your tenant.

## Service Account Explained

**Agent Builder agents can't be read with the application-only access** that Syskit Point uses for the rest of your Microsoft 365 data. The permissions used to read them, **ResourceQuery.Resources.Read** and **CopilotStudio.MinimalBot.ReadWrite**, are delegated permissions, which work only in the context of a signed-in user with the required role. That's why Syskit Point signs in with a dedicated service account to read them. Copilot Studio agents don't have this limitation, so registering Syskit Point as a Power Platform management application is enough to discover them.

**The service account is the only way to discover Agent Builder agents.** Registering Syskit Point as a Power Platform management application doesn't cover Agent Builder agents, and there is no application-only alternative for reading them.

### Collected Data

**Through the service account, Syskit Point collects:**

* **Agent Builder agent inventory** - name, identifier, owner and creator, creation and modification dates, and status, including the **Blocked** state
* **Knowledge sources of Agent Builder agents** - for example, the SharePoint sites and files an agent is grounded on, so the Agents Inventory report can show what content each agent can reach

**Syskit Point doesn't collect:**

* User conversations or chat content
* The content of the knowledge sources; Syskit Point only records which sources an agent references

### Least Privilege Recommendations

To follow the principle of least privilege:

* **Assign the AI Reader role** to the service account. This role is read-only.
* **Use a dedicated account** that isn't used for interactive sign-ins. For details on multifactor authentication, take a look at the [Connect Service Account](../configuration/connect-service-account.md) article.
* Syskit Point uses the service account **only for the agent data sync** and, if turned on, **for the [Ownerless agents automation](ai-agents-and-apps-automation.md)**.
* **Grant only the permissions you need.** [Agent actions](ai-agents-and-apps-actions.md), such as block, unblock, reassign, and delete, become available once you grant the **CopilotStudio.AdminActions.Invoke** permission. The **Dynamics CRM/user_impersonation** permission lets Syskit Point delete Copilot Studio agents.
  * Agent actions run with the rights of the Syskit Point user who completes them.

## Related Articles

* [AI Agents Overview](ai-agents-and-apps-overview.md)
* [AI & app governance Dashboard tile](ai-agents-and-apps-dashboard-tile.md)
* [AI Agents Reports](reports/ai-agents-reports.md)
* [Entra Apps Reports](reports/entra-apps-reports.md)
* [AI Agents Actions](ai-agents-and-apps-actions.md)
* [Ownerless Agents Automation](ai-agents-and-apps-automation.md)
* [Connect Service Account](../configuration/connect-service-account.md)
* [Permission Requirements](../requirements/permission-requirements.md#ai-agents)
* [Permission Requirements Change Log](../requirements/permission-requirements-change-log.md)