---
description: The Sensitivity Labels report provides an overview of your sensitivity labels.
---

# Sensitivity Labels Reports

In this article, you can locate information on the following reports:

* [Sensitivity Labels Report](#sensitivity-labels-report)
* [Sensitivity Labels Inventory Report](#sensitivity-labels-inventory-report)

These reports can be used to **ensure sensitive data is properly labeled and assigned** to the correct number of resources, **identify gaps in data security**, and **maintain compliance** with company policies.

To access sensitivity label reports, complete the following steps:

* **Click the Reports tile** located on the Syskit Point home screen.
* **Select the Sensitivity Labels category in the filter** in the upper left corner.
* **Click the Sensitivity Labels or Sensitivity Labels Inventory report tile**; this will generate that specific report.

:::info
**Please note!**  
You can save custom views for your reports based on your needs and preferences. [For more details on this, take a look at the Save Custom Views article.](../configuration/custom-views.md)
:::

## Sensitivity Labels Report

The Sensitivity Labels report provides a complete overview of your Sensitivity Labels and summarized data about the number of workspaces and files where the sensitivity labels are applied.


### Generate Report

* **Click the Reports button** located on the left side of the screen.
* **Select the Sensitivity Labels category in the filter** you can find in the upper left corner.
* **Click the Sensitivity Labels report tile** to be redirected to the Selection screen.

After clicking the **Sensitivity Labels** report tile, the Sensitivity Labels report, which contains the summarized data, is generated.

### Report Data

The default columns displayed in the report are:    

* **Name** of the sensitivity labels
* **Priority** shows the level of priority for the label, with 0 being the lowest and 1 being the highest
* **Status** shows the current status of the label, whether it is applied to workspaces or not
* **Scope** shows a list of resources the sensitivity label can be applied to (e.g., File, Email, Site, Unified Group, Schematized data assets)
* **Workspaces Affected** shows the number of workspaces that the sensitivity label is applied to
* **Files Affected** shows the number of files the sensitivity label is applied to       


The additional columns available in the **column chooser**, located in the top right corner of the report, are:   
* **Parent Label**
* **Description**

The Sensitivity Labels report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Sensitivity Labels Inventory Report

The Sensitivity Labels Inventory report lets you find workspaces and files where a specific sensitivity label is applied.


### Generate Report

* **Click the Reports button** located on the left side of the screen.
* **Select the Sensitivity Labels category in the filter** you can find in the upper left corner.
* **Click the Sensitivity Labels Inventory report tile** to be redirected to the Selection screen.

The report can be generated from the Sensitivity Labels report as well. Select a label and click the Sensitivity Labels Inventory report action in the Go to Report side menu.

### Selection & Filters

The selection screen shows information available on the Sensitivity Labels report:  

* **Name** of the sensitivity labels
* **Priority** shows the level of priority for the label, with 0 being the lowest and 1 being the highest
* **Status** shows the current status of the label, whether it is applied to workspaces or not
* **Scope** shows a list of resources the sensitivity label can be applied to (e.g., File, Email, Site, Unified Group, Schematized data assets)
* **Workspaces Affected** shows the number of workspaces that the sensitivity label is applied to
* **Files Affected** shows the number of files the sensitivity label is applied to       

The additional columns available in the **column chooser**, located in the top right corner of the report, are:  
* **Parent Label**
* **Description**

**Selecting one or more sensitivity labels** from the list lets you generate a report that shows **where the sensitivity labels are applied down to the file level**.  Click the Run Report button after selection to generate the report.

### Report Data

The report shows the following:

* **Name** of the label, workspaces, and files the label is applied to
* **Object Type** shows what type the object is (Ex. Microsoft Team, List Item, etc.)
* **Workspaces Name** shows the names of workspaces that the sensitivity label is applied to
* **Path** shows the URL path for the workspace or file
    * Clicking the link for the workspace object opens the workspace SharePoint site; clicking the file link opens the file in case the file is supported for web view; otherwise, you can download the file

The additional columns available in the **column chooser**, located in the top right corner of the report, are:  
* **Workspace Privacy**

The Sensitivity Labels Inventory report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.
