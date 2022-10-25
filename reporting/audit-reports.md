---
description: Audit reports provide a detailed overview of the users' activities in your environment by searching Microsoft 365 audit logs.
---

# Access Reports

In this article, there is information on five audit reports available through the **Report Center**:

* [Audit Logs Overview Report](#audit-logs-overview-report)
* [Exchange Logs Report](#exchange-logs-report)
* [Site Permissions Changes Report](#site-permissions-changes-report)
* [User Activity Report](#user-activity-report)
* [File and Page Activities Report](#file-and-page-activities-report)


These reports can be accessed in the Report section by selecting the **Audit Logs** category from the dropdown filter.

## Audit Logs Overview Report

To view user and administrator activity in your environment, search the Microsoft 365 unified audit log data. This report provides a **detailed overview of all users' activities** in the environment. 

Quickly detect and troubleshoot potential issues, security breaches, or suspicious behavior. 

### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Audit Logs Overview report** to generate the report.

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns available in the **column chooser**.

To see more details, **expand each row** by clicking on the arrow next to the date column. 


### Report Actions

The Audit Logs Overview report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.

## Exchange Logs Report

For Exchange activity in your environment, search the Microsoft 365 logs. 
  * The search can be done per **every mailbox in your Exchange Online**.


### Generate Report


 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Exchange Logs report** to generate the report.

{% hint style="warning" %} Please note!
By default, Exchange logs are not collected; at least one Exchange activity must be selected for SysKit Point to collect and store Exchange log data. {% endhint %}

Click [here](../../configuration/customize-audit-logs-collection.md) to find out more about customizing the Exchange logs collection.


### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

For specific mailboxes, filter this report in the initial **Options screen** before generating the report.
  * To see more details, **expand each row** by clicking on the arrow next to the date column. 


### Report Actions

The Exchange Logs report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.

## Site Permissions Changes Report

This report provides insight into details for any permissions changes on selected site(s). 
   * If somebody removed a member from a Team or broke sharing inheritance, you can see it here.


### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the Site Permissions Changes report** to generate the report.

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**

There are no additional columns available in the **column chooser**.

To see more details on specific sites, select the individual site(s) or mark them all, select the amount of days the report should cover and click **Run Report** to generate.


### Report Actions

The Site Permissions Changes report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.



## User Activity Report

This report shows all actions performed by internal and external users in your environment. 

Selecting a single user provides insight into what they have been doing in the environment, from logging in to viewing a file. 
   * If the admin or manager added or removed permissions for a particular user, this would also be shown in this report.


### Generate Report

 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the User Activity report** to generate the report.

### Report Data

Default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details on specific users, select the individual user(s) or mark them all, select the amount of days the report should cover and click **Run Report** to generate.


### Report Actions

The User Activity report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.


## File and Page Activities Report

View who accessed and edited files/folders in your environment, as well as who visited your sites and when.

### Generate Report


 * **Click the Reports tile**; it is located on the SysKit Point home screen.
 * **Select Audit Logs in the filter**; it can be found in the upper left corner.
 * **Click the File and Page Activities report** to generate the report.

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

    
There are no additional columns in the **column chooser**.

To see more details on specific users, select the individual user(s) or mark them all, select the amount of day the report should cover, set the other preferred parameters, and click **Run Report** to generate.


### Report Actions

The File and Page Activities report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

There are no additional actions available for this report.