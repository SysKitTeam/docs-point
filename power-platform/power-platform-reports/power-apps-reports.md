---
description: Power Apps reports provide insight into the state of your Power Platform apps.
---

# Power Apps Reports

This article contains information on two Power Platform reports available through the **Report Center**:

* [Power Apps Inventory Report](#power-apps-inventory-report)
* [Power App Permissions Report](#power-app-permissions-report)


{% hint style="information" %}
Syskit Point collects data for the following Power Platform resources:
* Power apps
  * Canvas (Standard & SharePoint Form)
* Cloud flows 
  * Automated
  * Instant
  * Scheduled
{% endhint %}

{% hint style="warning" %}
Solutions, Model-driven apps, and Desktop flows are not supported.
{% endhint %}

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

**Selecting one App** lets you complete **the Change Owners action**. 
* **Clicking the Change Owners action** opens the confirmation modal that lets you add:
  * Primary Owner - you can select one primary owner by typing the name or email of the user you want to set as the primary owner
  * Co-Owners - you can select one or more co-owners by typing the name or email of the users you want to set as co-owner(s)
* **Click the Change button** to complete the action and set the new App owners

**Selecting one or more Apps** lets you complete **the Add Co-owners action**. 
* **Clicking the Add Co-owners action** opens the confirmation modal that lets you:
  * **Select one or more co-owners** by typing the name or email of the users you want to set as the co-owner(s)
* **Click the Change button** to complete the action and set the new App co-owners

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