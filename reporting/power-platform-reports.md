---
description: Power Platform reports provide insight into the state of your Power Platform environments.
---

# Power Platform Reports

This article contains information on six Power Platform reports available through the **Report Center**:

* [Power Platform Environments Report](#power-platform-environments-report)
* [Power Apps Inventory Report](#power-apps-inventory-report)
* [Power Automate Inventory Report](#power-automate-inventory-report)
* [Power Platform Connections Report](#power-platform-connections-report)
* [Power Automate Permissions Report](#power-automate-permissions-report)
* [Power App Permissions Report](#power-app-permissions-report)

You can also find the Power BI reports under the Power Platform filter. For more information on those reports, [take a look at the Power BI reports article](../reporting/power-bi-reports.md).

{% hint style="success" %}
**Power Platform Reports** are currently available as a free preview. After a certain amount of time has passed, this feature will be available as an add-on to your current subscription. 
{% endhint %}

## Power Platform Environments Report

The Power Platform Environments report provides a complete overview of your Power Platform environments and gives summarized data about their users and content. 

### Generate Report

* **Click the Reports button**; located on the left side of the screen.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Platform Environments report tile** to be redirected to the Selection screen.

### Report Data

On the **Power Platform Environments** report, the default columns displayed are:
      
* **Name** of the Power Platform environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

The Power Platform Environments report can be **exported as PDF and XLSX files**. The option to **schedule the report** is also available.


## Power Apps Inventory Report

The Power Apps Inventory report gives a complete overview of all your Power Apps across every environment.

### Generate Report

 * **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Apps Inventory report tile** to be redirected to the Selection screen.

### Report Data

The **Power Platform Environments** report opens, where the default columns displayed are:
      
* **Name** of the environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

**Selecting one or more environments** provides the **Run Report button**. This generates the Power Apps Inventory report for the selected workspaces. 

Here, you can find the following information in the columns:

* **Name** of the app
* **Environment** - which environment the app belongs to
* **App Type** - the number of apps contained within the environment
* **Bypass Consent** 
* **Primary Owner** - shows who is the primary owner of the app 
* **Created By** - shows who the app was created by
* **Created On** - shows when the app was created on
* **Modified On** - shows the last time the app was modified
* **Last Launched** - when the app was last launched
* **License Designation** - what license is assigned to the app
* **Owners** - the owners of the app
* **Shared With** - who the app is shared with
* **Shared With Everyone** - if the app is shared publicly
* **External Users** - what external users have access to the app
* **Used Flows** - number of used flows for the app
* **Versions** - number of app versions
* **Published Version** - the name of the version that was published
* **Description** - the description for the app
* **Open App URL** - the link to the app
* **Unique Users in Last 30 Days** - number of unique users in the last 30 days
* **Launches in 30 Days** - number of times the app was launched in the last 30 days

In the top left corner, you can also select a specific view for the report:
* **All Apps**
* **Inactive Apps**
* **Orphaned Apps**

The additional columns available in the **column chooser**, located in the top right corner of the report, are:

* **App ID**
* **Maker Region**
* **Active Owners**
* **Unique Users in Last 7 Days**
* **Launches in the Last 7 Days**
* **Unique Users in Last 90 Days**
* **Launches in the Last 90 Days**
* **Unique Users in Last 180 Days**
* **Launches in the Last 180 Days**
* **Active**

## Power Automate Inventory Report

The Power Automate Inventory report provides a complete overview of all your Power Automate Flows across every environment.

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Flow Inventory report tile** to be redirected to the Selection screen.

### Report Data

The **Power Platform Environments** report opens, where the default columns displayed are:
      
* **Name** of the environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

**Selecting one or more environments** provides the **Run Report button**. This generates the Flow Inventory report for the selected workspaces. 

Here, you can find the following information in the columns:

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

## Power Platform Connections Report

The Power Platform Connections report provides a complete overview of all your Power Platform Connections across every environment. 

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power Platform Connections report tile** to be redirected to the Selection screen.

### Report Data

The **Power Platform Environments** report opens, where the default columns displayed are:
      
* **Name** of the environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

**Selecting one or more environments** provides the **Run Report button**. This generates the Power Platform Connections report for the selected workspaces. 

Here, you can find the following information in the columns:

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


## Power Automate Permissions Report

The Flow Permissions report gives insight into the permissions granted to Power Automate Flows.

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Flow Permissions report tile** to be redirected to the Selection screen.

### Report Data

The **Power Platform Environments** report opens, where the default columns displayed are:
      
* **Name** of the environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

**Selecting one or more environments** provides the **Run Report button**. This generates the Flow Permissions report for the selected workspaces. 

Here, you can find the following information in the columns:

* **Name** of the environment and flow
* **Type** - the type of Power Platform service it is
* **User Permissions**
* **External** 

The additional columns available in the **column chooser**, located in the top right corner of the report, are:

* **E-mail**
* **Username**
* **Sign-in Status**


## Power App Permissions Report

The Power App Permissions report gives insight into the permissions granted to Power Platform Apps.

### Generate Report

* **Click the Reports button** on the screen's left side.
* **Select the Power Platform category in the filter** in the upper left corner.
* **Click the Power App Permissions report tile** to be redirected to the Selection screen.

### Report Data

The **Power Platform Environments** report opens, where the default columns displayed are:
      
* **Name** of the environment
* **Type** of environment it is
* **Created By** - who created the environment
* **Created On** - which date and year the environment was created on
* **Apps** - the number of apps contained within the environment
* **Flows** - the number of flows contained within the environment
* **Connectors** - the number of connectors contained within the environment
* **External Users** - the number of external users in the environment

The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **State**
* **Dataverse**
* **Release Cycle**
* **Environment ID**

**Selecting one or more environments** provides the **Run Report button**. This generates the Power App Permissions report for the selected workspaces. 

Here, you can find the following information in the columns:

* **Name** of the environment and app
* **User Permissions** 
* **Type** - the type of Power Platform service it is
* **External** 

The additional columns available in the **column chooser**, located in the top right corner of the report, are:

* **E-mail**
* **Username**
* **Sign-in Status**