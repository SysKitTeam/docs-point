---
description: Power Automate reports provide insight into the state of your Power Platform flows.
---

# Power Platform Automate

:::info
**Please Note!** Power Platform is **now available as an add-on** purchase to your Syskit Point subscription. 

To enable the use of Power Platform for Syskit Point, [please contact us](https://www.syskit.com/contact-us-power-platform/).

:::

This article contains information on two Power Platform reports available through the **Report Center**:

* [Power Automate Inventory Report](#power-automate-inventory-report)
* [Power Automate Permissions Report](#power-automate-permissions-report)

:::info
[Read this article to learn which types of Power Platform resources are synced in Syskit Point.](../enable-power-platform.md#power-platform-sync-limits)
:::

## Power Automate Inventory Report

The Power Automate Inventory report provides a complete overview of all your Power Automate Flows across every environment.

### Step 1: Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Automate Inventory report tile** to be redirected to the Selection screen.

When generating the Power Automate Inventory report, the first step is the **selection screen** which opens as a list of available [Power Platform Environments](power-platform-environments-reports.md). This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Power Automate Inventory report** for the selected environments. 

### Step 2: Report Data

On the Power Automate Inventory, you can find the following information in the columns:

* **Name** of the Power Automate Flow
* **Environment** - which environment the flow belongs to
* **Type** - the type the flow is
* **Primary Owner** - shows who is the primary owner of the flow 
* **Created By** - shows who the flow was created by
* **Created On** - shows when the flow was created on
* **Modified On** - shows the last time the flow was modified
* **Owners** - how many owners of the flow there are
* **External Users** - how many external users there are
* **Connectors** - how many connectors are in the flow
* **Used by Apps** - which apps use the flow
* **Number of Actions** - number of actions taken in the flow
* **Number of Triggers** - number of triggers in the flow
* **Runs in Last 30 Days** - number of runs for the flow in the last 30 days
* **Failed Runs in Last 30 Days** - number of failed runs
* **Last Run Date** - the last date the flow was ran
* **Last Run Duration** - how long the last flow run lasted
* **Status** - current status of the flow

In the top left corner, you can also select a specific view for the report:
* **All Flows**
* **Inactive Flows**
* **Orphaned Flows**

**Selecting one Flow** lets you complete **the Change Owners action**. 
* **Clicking the Change Owners action** opens the confirmation modal that lets you add:
  * Primary Owner - you can select one primary owner by typing the name or email of the user you want to set as the primary owner
  * Co-Owners - you can select one or more co-owners by typing the name or email of the users you want to set as co-owner(s)
* **Click the Change button** to complete the action and set the new Flow owners

**Selecting one or more Flows** lets you complete **the Add Co-owners action**. 
* **Clicking the Add Co-owners action** opens the confirmation modal that lets you:
  * **Select one or more co-owners** by typing the name or email of the users you want to set as the co-owner(s)
* **Click the Change button** to complete the action and set the new Flow co-owners

The additional columns available in the **column chooser**, located in the top right corner of the report, are:

* **Flow ID**
* **Runs in Last 7 Days**
* **Failed Runs in Last 7 Days**
* **Runs in Last 90 Days**
* **Failed Runs in Last 90 Days**
* **Runs in Last 180 Days**
* **Failed Runs in Last 180 Days**
* **Active Owners**
* **Active**


## Power Automate Permissions Report

The Power Automate Permissions report gives insight into the permissions granted to Power Automate Flows.

### Step 1: Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Automate Permissions report tile** to be redirected to the Selection screen.

When generating the Power Automate Permissions report, the first step is the **selection screen** which opens as a list of available [Power Platform Environments](power-platform-environments-reports.md). This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Power Automate Permissions report** for the selected environments. 

### Step 2: Report Data

On the Power Automate Permissions report, you can find the following information in the columns:

* **Name** of the environment and flow
* **Type** - the type of Power Platform service it is
* **User Permissions**
* **External** 

The additional columns available in the **column chooser**, located in the top right corner of the report, are:

* **E-mail**
* **Username**
* **Sign-in Status**
