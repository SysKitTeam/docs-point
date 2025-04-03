---
description: This article provides information about the actions you can take on your Power Platform resources through Syskit Point.
---

# Power Platform Actions

{% hint style="success" %}
**Power Platform actions** are currently available as a free preview, allowing you to explore its benefits at no cost.
{% endhint %}

Many organizations use Power Platform to build apps, automate workflows, and analyze data. Through Syskit Point, you can generate detailed reports for your Power Platform resources. 

To help you manage these resources, Syskit Point is introducing new Power Platform actions:

* [Change Owners](#change-owners)
* [Add Co-Owners](#add-co-owners)
* [Delete Environment](#delete-environment)

These actions help manage access and reduce the risk of orphaned resources.

* [Take a look at the Power Platform Reports article for more details on all the available Power Platform reports.](../reporting/power-platform-reports.md)

{% hint style="warning" %}

Please note that the Power Platform actions can only be completed by the Syskit Point Global Admins.  

{% endhint %}


## Change Owners

The Change Owners action can be completed for Flows and Apps on the Power Automate Inventory and Power Apps Inventory report screens. 

{% hint style="warning" %}

Please note that the Change Owner action cannot currently be performed to change the Primary Owner of Power Platform Flows; only the co-owners can be modified. The Primary Owner selection for Flows is currently disabled. 

{% endhint %}

You can access the Apps report by:
* **Clicking the number of apps** on the Power Platform Dashboard tile
* **Click the Reports button** located on the left side of the screen, **selecting the Power Platform category** in the filter in the upper left corner
  * **Click the Power Apps Inventory report tile** to generate the report, select one or more environments to create the report for, and click the **Run Report** button to generate

Once the Power Apps Inventory report is generated: 

* **Selecting one App** lets you complete **the Change Owners action**. 
* **Clicking the Change Owners action (1)** opens the confirmation modal that lets you add:
  * **Primary Owner (2)** - you can select one primary owner by typing the name or email of the user you want to set as the primary owner
  * **Co-Owners (3)** - you can select one or more co-owners by typing the name or email of the users you want to set as co-owner(s)
  * **Click the Change button (4)** to complete the action and set the new App owners

![Power Platform - Actions](../.gitbook/assets/power-platform-actions-change-owners-apps.png)

![Power Platform - Change Owners - Apps](../.gitbook/assets/power-platform-actions-change-owners-apps-confirmation.png)

You can access the Flows report by:

* **Clicking the number of flows** on the Power Platform Dashboard tile
* **Click the Reports button** located on the left side of the screen, **selecting the Power Platform category** in the filter in the upper left corner
  * **Click the Power Automate Inventory report tile** to generate the report, select one or more environments to create the report for, and click the **Run Report** button to generate

Once the Power Automate Inventory report is generated: 

* **Selecting one Flow** lets you complete **the Change Owners action**. 
* **Clicking the Change Owners action (1)** opens the confirmation modal that lets you add:
  * **Primary Owner (2)** - currently, selecting and changing the Primary Owners for Flows is not possible
  * **Co-Owners (3)** - you can select one or more co-owners by typing the name or email of the users you want to set as co-owner(s)
  * **Click the Change button (4)** to complete the action and set the new Flow owners

![Power Platform - Actions](../.gitbook/assets/power-platform-actions-change-owners-flow.png)

![Power Platform - Change Owners - Flows](../.gitbook/assets/power-platform-actions-change-owners-flow-confirmation.png)

## Add Co-Owners

The Add Co-Owners action can be completed for Flows and Apps on the Power Automate Inventory and Power Apps Inventory report screens. 

You can access the Apps report by:
* **Clicking the number of apps** on the Power Platform Dashboard tile
* **Click the Reports button** located on the left side of the screen, **selecting the Power Platform category** in the filter in the upper left corner
  * **Click the Power Apps Inventory report tile** to generate the report, select one or more environments to create the report for, and click the **Run Report** button to generate

Once the Power Apps Inventory report is generated: 

**Selecting one or more Apps** lets you complete **the Add Co-owners action**. 
* **Clicking the Add Co-owners action (1)** opens the confirmation modal that lets you:
  * **Select one or more co-owners (2)** by typing the name or email of the users you want to set as the co-owner(s)
  * **Click the Change button (3)** to complete the action and set the new Apps co-owners

![Power Platform - Actions](../.gitbook/assets/power-platform-actions-add-co-owners-apps.png)

![Power Platform - Add Co-Owners - Apps](../.gitbook/assets/power-platform-actions-add-co-owners-apps-confirmation.png)

You can access the Flows report by:

* **Clicking the number of flows** on the Power Platform Dashboard tile
* **Click the Reports button** located on the left side of the screen, **selecting the Power Platform category** in the filter in the upper left corner
  * **Click the Power Automate Inventory report tile** to generate the report, select one or more environments to create the report for, and click the **Run Report** button to generate

Once the Power Automate Inventory report is generated:

**Selecting one or more Flows** lets you complete **the Add Co-owners action**. 
* **Clicking the Add Co-owners action (1)** opens the confirmation modal that lets you:
  * **Select one or more co-owners (2)** by typing the name or email of the users you want to set as the co-owner(s)
  * **Click the Change button (3)** to complete the action and set the new Flows co-owners

![Power Platform - Actions](../.gitbook/assets/power-platform-actions-add-co-owners-flow.png)

![Power Platform - Add Co-Owners - Apps](../.gitbook/assets/power-platform-actions-add-co-owners-flow-confirm.png)


## Delete Environment

The Delete Environment action can be completed for Environments on the Power Platform Environments report.

You can access the report by:
* **Clicking the number of environments** on the Power Platform Dashboard tile
* **Click the Reports button** located on the left side of the screen, **select the Power Platform category** in the filter in the upper left corner, and **click the Power Platform Environments report tile** to generate the report.

Once the Power Platform Environments report is generated: 

* **Selecting one or more environments** lets you complete **the Delete Environment action**. 
* **Clicking the Delete Environment action (1)** opens the confirmation modal that states that performing this action means:
  * The environments resources and backups will be deleted, including dataverse, apps, and data
  * Administrators of environments will have 7 days to recover it by going to the main Microsoft environments page
* **Type Delete (2) in the confirmation bar and click the Delete button (3)** to complete the action

![Power Platform - Actions](../.gitbook/assets/power-platform-actions-delete-environment.png)

![Power Platform - Change Owners - Apps](../.gitbook/assets/power-platform-actions-delete-environment-confirm.png)


{% hint style="warning" %}

To generate the [Power Platform reports](../configuration/enable-role-based-access.md) and complete the Power Platform actions, please ensure [you have enabled Power Platform data collection](../configuration/power-platform.md).

{% endhint %}



