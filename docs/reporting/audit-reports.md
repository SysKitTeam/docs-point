---
description: Audit reports provide a detailed overview of all activities in your environment collected from Microsoft 365 unified audit logs.
---

# Audit Logs Reports

In this article, there is information on five audit logs reports available through the **Report Center**:

* [Audit Logs Overview Report](#audit-logs-overview-report)
* [Exchange Logs Report](#exchange-logs-report)
* [Site Permissions Changes Report](#site-permissions-changes-report)
* [User Activity Report](#user-activity-report)
* [File and Page Activities Report](#file-and-page-activities-report)


These reports can be accessed in the Report section by selecting the **Audit Logs** category from the dropdown filter.

:::info
**Audit Logs Reports** are available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

:::info
**Please note!**  
You can save custom views for your reports based on your needs and preferences. [For more details on this, take a look at the Save Custom Views article.](../configuration/custom-views.md)
:::

## Audit Logs Overview Report

This report provides a detailed **overview of all logs collected from your Microsoft 365 environment**. 

Quickly detect and troubleshoot potential issues, security breaches, or suspicious behavior. 

### Generate Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Audit Logs Overview report** to generate the report.

### Filtering Options
The following filtering options are available:
* **timeframe selection**; choose from the following options to show events from:
  * Today
  * Yesterday
  * Last 7 Days  - selected by default
  * Last 30 Days
  * Custom - which enables you to select specific start and end dates for events to be shown
* **activities filter**
  * All activities - selected by default
  * Specific activities - select activities you want to see on the generated report

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns available in the **column chooser**.

To see more details, **expand each row** by clicking the arrow next to the date column. Here, you will find **all properties for the selected event**.

### Report Actions

The Audit Logs Overview report can be **exported as an XLSX file**. **Clicking the arrow symbol** next to Export provides two options: **Export all** and **Export without details**. Selecting Export without details means that the exported report **won't include the details section**.  

There is also the **option to schedule the report**. **A scheduled report includes the details section**. The Export without details action cannot be scheduled. 

There are no additional actions available for this report.

## Exchange Logs Report

Use this report to **see all Exchange-related activity in your environment**. 

### Generate Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Exchange Logs report** to generate the report.

:::warning Please note!
By default, Exchange logs are not collected; at least one Exchange activity must be selected for Syskit Point to collect and store Exchange log data. :::

Click [here](../configuration/customize-audit-logs-collection.md) to learn more about customizing the Exchange logs collection.

### Filtering Options
The following filtering options are available:
* **timeframe selection**; choose from the following options to show events from:
  * Today
  * Yesterday
  * Last 7 Days  - selected by default
  * Last 30 Days
  * Custom - which enables you to select specific start and end dates for events to be shown
* **activities filter**
  * All activities - selected by default
  * Specific activities - select activities you want to see on the generated report
* **filter by specific mailboxes**

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details, **expand each row** by clicking the arrow next to the date column. Here, you will find **all properties for the selected event**.


### Report Actions

The Exchange Logs report can be **exported as an XLSX file**. **Clicking the arrow symbol** next to Export provides two options: **Export all** and **Export without details**. Selecting Export without details means that the exported report **won't include the details section**.  

There is also the **option to schedule the report**. 

There are no additional actions available for this report. **A scheduled report includes the details section**. The Export without details action cannot be scheduled. 

## Site Permissions Changes Report

This report provides insight into details for any permissions changes on selected site(s). 
* For example, if somebody shares a file or creates a sharing link, you can see it here.


### Generate Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the Site Permissions Changes report** to generate the report.

### Selection & Filters
After clicking the **Site Permissions Changes Report** tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, OneDrive, and shared or private channels) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Show events from**:
  * Today
  * Yesterday
  * Last 7 Days  - selected by default
  * Last 30 Days
  * Custom - which enables you to select specific start and end dates for events to be shown
* **Select activities to show**:
  * All sharing activities- selected by default
  * External sharing activities only
  * Specific activities - select activities you want to see on the generated report


### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**

There are no additional columns available in the **column chooser**.

To see more details, **expand each row** by clicking the arrow next to the date column. Here, you will find **all properties for the selected event**.

### Report Actions

The Site Permissions Changes report can be **exported as an XLSX file**. **Clicking the arrow symbol** next to Export provides two options: **Export all** and **Export without details**. Selecting Export without details means that the exported report **won't include the details section**.  

There is also the **option to schedule the report**. 

There are no additional actions available for this report. **A scheduled report includes the details section**. The Export without details action cannot be scheduled. 


## User Activity Report

This report shows all actions performed by internal or external users in your environment. 

Selecting a single user provides insight into what they have been doing in the environment, from logging in to viewing a file. 
* If the admin or manager added or removed permissions for a particular user, this would also be shown in this report.


### Generate Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the User Activity report** to generate the report.

### Selection & Filters
After clicking the **User Activity** report tile, a selection step opens where you can:
* **Select one or multiple users** 
* **Show events from**:
  * Today
  * Yesterday
  * Last 7 Days  - selected by default
  * Last 30 Days
  * Custom - which enables you to select specific start and end dates for events to be shown
* **Select activities to show**:
  * All activities- selected by default
  * All sharing activities
  * All external sharing activities
  * File and page activities
  * Specific activities - select activities you want to see on the generated report

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details, **expand each row** by clicking the arrow next to the date column. Here, you will find **all properties for the selected event**.

### Report Actions

The User Activity report can be **exported as an XLSX file**. **Clicking the arrown symbol** next to Export provides two options: **Export all** and **Export without details**. Selecting Export without details means that the exported report **won't include the details section**.  

There is also the **option to schedule the report**. 

There are no additional actions available for this report. **A scheduled report includes the details section**. The Export without details action cannot be scheduled. 


## File and Page Activities Report

View who accessed and edited files/folders in your environment, as well as who visited your sites and when.

### Generate Report

* **Click the Reports button**; it is located on the left side of your Syskit Point.
* **Select Audit Logs in the filter**; it can be found in the upper left corner.
* **Click the File and Page Activities report** to generate the report.

### Selection & Filters
After clicking the **Site Permissions Changes Report** tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, OneDrive, and shared or private channels) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Show events from**:
  * Today
  * Yesterday
  * Last 7 Days  - selected by default
  * Last 30 Days
  * Custom - which enables you to select specific start and end dates for events to be shown
* **Select activities to show**:
  * All activities- selected by default
  * Specific activities - select activities you want to see on the generated report
* **Performed by**:
  * All users - selected by default
  * Only internal users
  * Only external users
  * Specific - select users whose events you want to see  

### Report Data

The default columns displayed in the report are:
    
* **Date**
* **Activity** type
* **Performed By**
* **IP Address**
* **Item**
* **Details**
    
There are no additional columns in the **column chooser**.

To see more details, **expand each row** by clicking the arrow next to the date column. Here, you will find **all properties for the selected event**.

### Report Actions

The File and Page Activities report can be **exported as an XLSX file**. **Clicking the arrow symbol** next to Export provides two options: **Export all** and **Export without details**. Selecting Export without details means that the exported report **won't include the details section**.  

There is also the **option to schedule the report**. 

There are no additional actions available for this report. **A scheduled report includes the details section**. The Export without details action cannot be scheduled. 