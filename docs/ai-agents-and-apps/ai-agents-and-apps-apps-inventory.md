---
description: The Apps Inventory report provides an overview of the Entra apps in your tenant and shows which ones can access your Microsoft 365 data.
---

# Apps Inventory Report

The **Apps Inventory** report gives you an overview of the **Entra ID app registrations, enterprise applications, and service principals** in your tenant, with their **usage, ownership, and permissions**. It helps you see which Entra apps can access your Microsoft 365 data and identify the ones that need attention.

:::info

**AI Agents in Syskit Point is currently in Early Access** and free to use while the feature is in active development. Feature behavior and scope may change as new capabilities are released.

:::

## Generate Report

You can open the Apps Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Apps Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI Agents tile](ai-agents-and-apps-dashboard-tile.md) and in the Entra Apps section, click **View all apps** to open the full report, or click any of the counts on the tile to open the report filtered to that view. 

## Report Data

Once the report is generated successfully, tiles at the top give you a quick overview:

* **The Overview tile shows** the total number of **apps found in your tenant**, with a breakdown by classification (AI assistants, Agent Identity, Microsoft first-party, and Other). Take a look at the [App Classification](#app-classification) section for what each classification means.
* **The Needs Attention tile highlights** the apps that may require action, with numbers showing the amount for each insight:
  * **High Privileged** - means the app holds a granted delegated permission or application role that matches Syskit Point's maintained catalog of high-privilege permissions. 
    * Examples include tenant-wide role and consent management, broad directory writes, full SharePoint control, and high-impact mail or Teams writes. 
    * These permissions can enable privilege escalation, broad data changes, or tenant-wide actions.
  * **Unverified Publisher** - means the app comes from an external source and has no verified publisher (no verified MPN ID). 
    * Built-in tenant and Microsoft first-party apps are excluded. 
    * This highlights third-party and gallery apps whose publisher identity Microsoft has not verified.
  * **Inactive Apps** - means the app's latest known successful sign-in is more than 90 days old. 
    * Old consent and credentials remain an attack surface even when the app is no longer used.
  * **Accessed Sensitive Data** - means that Syskit Point observed the app access SharePoint or OneDrive content that is currently covered by a sensitivity label marked as sensitive. 
    * This combines the potential access implied by permissions with evidence of actual content access.

* **The Most Active Apps tile lists** the apps with the most active users over the last 90 days.

The report grid shows the following columns:

* **Name** of the app
* **Classification** - for example, AI assistant or Agent Identity
* **Origin** - where the app comes from, for example Third party (multi-tenant)
* **State** - for example, Activated
* **Permissions** - the number of application and delegated permissions the app holds
* **Insights** - highlights such as High Privileged, Accessed Sensitive Data, or Unverified Publisher


The additional columns available in the column chooser are:

* M365 Data Access
* Owners
* Sponsors
* Created On
* Read/Write
* Active Users
* Last Activity
* Application ID
* Application/service principal type
* Interactions (90 days)
* Last Content Activity
* Service principal object ID
* Sign-in audience
* Publisher
* Sensitive data access

The Apps Inventory report can be **exported as PDF, CSV and XLSX files**. There is also the **option to schedule the report**.

## App Classification

A typical tenant contains hundreds of apps, and most of them are Microsoft's own first-party apps and internal tooling that don't need active governance. Syskit Point classifies every app so you can filter out that noise and focus on the apps that matter most, above all the AI assistants that reach Microsoft 365 data through an app registration.

Each app is assigned one of the following classifications:

* **AI Assistant** - surfaces AI tools, such as Claude, ChatGPT, or Copilot extensions, even when they otherwise look like ordinary enterprise apps.
* **Agent Identity** - apps that act as an agent identity, tying the app inventory to the AI-agent world.
* **Microsoft First-Party** - apps published by Microsoft. These are classified so you can filter them out of the default view.
* **Other** - apps that matched none of the above.

## Related Articles

* [AI Agents Overview](ai-agents-and-apps-overview.md)
* [Configure AI Agents](ai-agents-and-apps-settings.md)
* [AI Agents Dashboard](ai-agents-and-apps-dashboard-tile.md)
* [Agents Inventory Report](ai-agents-and-apps-agents-inventory.md)
* [AI Agents Reports](../reporting/ai-agents-reports.md)


