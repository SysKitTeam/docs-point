---
description: Power BI reports provide insight into the state of your Power BI workspaces.
---

# Power BI Reports

This article contains information on three Power BI reports available through the **Report Center**:

* [Power BI Inventory Report](#power-bi-inventory-report)
* [Power BI Workspaces Report](#power-bi-workspaces-report)
* [Power BI Permissions Report](#power-bi-permissions-report)


{% hint style="warning" %}
**Please note**: Power BI reports will soon become a part of the Power Platform add-on and an additional license will be required to access them. For more details, please feel free to [contact us](https://www.syskit.com/contact-us/).
{% endhint %}

## Power BI Inventory Report

The Power BI Inventory reports give insight into the Power BI workspaces inside of your environment and the dashboards, datasets, dataflows, and reports within the workspaces.

It allows you to view the Power BI resources based on their classification and see which resource is located under which workspace.

### Generate Report

 * **Click the Reports button**; located on the left side of the screen.
* **Select the Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Inventory report tile** to be redirected to the Selection screen.

After clicking the **Power BI Inventory** report tile, the Selection step opens where you can:
* **Select the workspaces** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more workspaces. 
* **Select the resource types** that should be included in the report.
  * The choice includes dashboards, datasets, dataflows, and reports.
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

The Power BI Workspaces report gives insight into the Power BI workspaces inside of your environment.

### Generate Report

 * **Click the Reports button**; located on the left side of the screen.
* **Select the Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Workspaces report tile** to be redirected to the Selection screen.

After clicking the **Power BI Workspaces** report tile, the Selection step opens where you can:
* **Selecting a workspace** will provide the option to generate the following related reports: 
   * Power BI Inventory
   * Power BI Permissions

The Power BI Workspaces overview report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Power BI Permissions Report

The Power BI Permissions report gives insight into the permissions given within the Power BI resources inside your environment, such as dashboards, datasets, dataflows, and reports. 

### Generate Report

 * **Click the Reports button**; located on the left side of the screen.
* **Select the Power BI category in the filter** you can find in the upper left corner.
* **Click the Power BI Permissions report tile** to be redirected to the Selection screen.

After clicking the **Power BI Permissions** report tile, the Selection step opens where you can:
* **Select the workspaces** for which the report should be generated.
   * Click the checkboxes on the screen's left side to select one or more workspaces. 
* **Select the resource types** that should be included in the report.
  * The choice includes dashboards, datasets, dataflows, and reports.
* **Click the Run Report button** once the selected parameters have been set.

### Report Data

The default columns displayed in the report are:
      
* **Name** of the resource as well as the name of the users with permissions in that resource
* **Type** of resource or user that is within the resource
* **Users Permissions** shows the type of permission a user has within the resource - Admin, Member, or Contributor
* **External**

Once the report is generated, on the right side under the section **Go to Report**, you have the option to directly generate the **Power BI Inventory report**. 

The Power BI Permissions report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.