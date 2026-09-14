---
description: The Apps Inventory report provides an overview of the apps in your tenant and shows which ones can access your Microsoft 365 data.
---

# Apps Inventory Report

The **Apps Inventory** report gives you an overview of the **Entra ID app registrations, enterprise applications, and service principals** in your tenant, with their **usage, ownership, and permissions**. It helps you see which apps can access your Microsoft 365 data and identify the ones that need attention.

:::info

**AI Agents & Apps is currently in Early Access** and still in further development. Due to that changes are still possible. 

:::

## Generate Report

You can open the Apps Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Apps Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI Agents tile](ai-agents-and-apps-dashboard-tile.md) and in the Entra Apps section, click **View all apps** to open the Apps Inventory report. 

## Report Data

Once the report is generated successfully, tiles at the top give you a quick overview:

* **The Overview tile shows** the total number of **apps found in your tenant**, with a breakdown by classification (AI assistants, Agent Identity, Microsoft first-party, and Other).
* **The Needs Attention tile highlights** the apps that may require action,  with numbers showing the amount for the following:
  * **High Privileged**
  * **Unverified Publisher**
  * **Inactive Apps**
  * **Accessed Sensitive Data**
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
* Application/service principačl type
* Interactions (90 days)
* Last Content Activity
* Service principal object ID
* Sign-in audience
* Publisher 
* Sensitive data access

The Apps Inventory report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

