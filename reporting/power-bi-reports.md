---
description: Power BI reports provide insight into the state of your Power BI resources.
---

# Power BI Reports

This article contains information on eight access reports available through the **Report Center**:

* [Power BI Inventory Report](#power-bi-inventory-report)
* [Power BI Workspaces Report](#power-bi-workspaces-report)
* [Power BI Permissions Report](#power-bi-permissions-report)



## Power BI Inventory Report

The Power BI Inventory report gives insight into the Power BI resources inside of your environment, such as dashboards, datasets, dataflows and reports.

It allows you to view the resources based on their classification and see which respource is located under which workspace.

### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Inventory report tile** to be redirected to the Selection screen.

After clicking the **Power BI Inventory** report tile, the Selection step opens where you can:
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Select the resource types** that should be included in the report.
  * The choice includes dashboards, datasets, dataflows and reports.
* **Click the Run Report button** once the selected parameters have been set.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource
* **Dataset/Datasource**
* **Created By**
* **Created On**
      
The additional columns available in the **column chooser**, located in the top right corner of the report, are:
      
* **Type**
* **Report**
* **Modified By**
* **Modified On**
* **Endorsement**
* **Endorsed By**

The Power BI Inventory report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Power BI Workspaces Report

The Power BI Workspaces report gives insight into the Power BI workspaces inside of your environment and lets you manage their access.

### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Workspaces report tile** to be redirected to the Selection screen.

After clicking the **Power BI Workspaces** report tile, the Selection step opens where you can:
* **Select the resources** you want to manage
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Click the Remove Access button** that will show on the right side of the screen

A **Remove User Access pop-up** will appear that will explain that the action to remove access will result in removing users from:
 * All SharePoint groups and connected Microsoft 365 groups
 * Private Channels 
 * Site owners
 * Secure shaking links
 * Directly assigned permissions 

However, the remove access action will now:
 * Change security groups membership
 * Remove the primary site owner
 * Remove access to Shared Channels or Power BI Workspaces 

To proceed with removing access, you will need to **type REMOVE and click the remove button**. 

The Power BI Workspaces overview report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Power BI Permissions Report

The Power BI Permissions report gives insight into the permissions given within the Power BI resources inside your environment, such as dashboards, datasets, dataflows and reports. 

### Generate Report

* **Click the Reports tile**; it is located on the SysKit Point home screen.
* **Select Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Permissions report tile** to be redirected to the Selection screen.

After clicking the **Power BI Permissions** report tile, the Selection step opens where you can:
* **Select the resources** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more resources. 
* **Select the resource types** that should be included in the report.
  * The choice includes dashboards, datasets, dataflows and reports.
* **Click the Run Report button** once the selected parameters have been set.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource as well as the name of the users with permissions in that resource
* **Type** of resource or user that is within the resource
* **Users Permissions** shows the type of permission a user has within the resource - Admin, Member or Contributor
* **External**

The Power BI Permissions report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.