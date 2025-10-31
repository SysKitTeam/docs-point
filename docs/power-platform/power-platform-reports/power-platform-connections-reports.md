---
description: Power Connections reports provide insight into the state of your Power Platform connections.
---

# Power Platform Connections

:::info
**Please Note!** Power Platform is **now available as an add-on** purchase to your Syskit Point subscription. 

To enable the use of Power Platform for Syskit Point, [please contact us](https://www.syskit.com/contact-us-power-platform/).

:::

The Power Platform Connections report provides a complete overview of all your Power Platform Connections across every environment. 

:::info
[Read this article to learn which types of Power Platform resources are synced in Syskit Point.](../enable-power-platform.md#power-platform-sync-limits)
:::

## Step 1: Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Platform Connections report tile** to be redirected to the Selection screen.

When generating the Power Platform Connections report, the first step is the **selection screen** which opens as a list of available [Power Platform Environments](power-platform-environments-reports.md). This step allows you to **select which environments you want included** in the report.

* **Selecting one or more environments** provides the **Run Report button**. This generates the **Power Platform Connections report** for the selected environments. 

:::info

**Please Note!** Syskit Point **displays all existing connections** but can only **show relationships between connections and flows**. Relationship data for apps is not available due to Microsoft API limitations. 

:::


## Step 2: Report Data

On the Power Platform Connections report, you can find the following information in the columns:

* **Name** of the environment and the Power Platform Connections within the environment
* **Status** - of the connection
* **Type** - the type of the Power Platform service it is
* **Error Status Message** - what error status message the connection has
* **Created By** - shows who the connection was created by
* **Created On** - shows when the connection was created on
* **Modified On** - shows the last time the connection was modified
* **Expires on** - the date and time on which the connection expires
* **Connection Type** - the type of connection it is
* **Tier** - the tier the connection belongs to 

The additional column available in the **column chooser**, located in the top right corner of the report, is the **Creator Sign-in Status**.
