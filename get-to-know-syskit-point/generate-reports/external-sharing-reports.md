---
description: External sharing reports provide information about the external users and their access to your tenant resources.
---

# External Sharing Reports

This category contains three reports that you can access through **Report Center**.

Use the **dropdown filter**, as shown below in the picture, and select the **External Sharing** category.

![Report Center – External sharing reports](../../\.gitbook/assets/external-sharing-reports_report-center-external-sharing-reports.png)
## Externally Shared Content Report

This report shows you external users who have access to your content via sharing links or are granted access directly.

### Generate Report

You can access this report from:

*	Sites Overview screen and Microsoft Teams & Groups Overview screen - select the resource and click on the proper action in the side panel
*	detail screen of specific resource
*	the Report Center
*	some other reports available in SysKit Point - for example, Permissions Matrix report

### Report Data

Default columns displayed in the report are:
		
* **Name** of the resource
* several **permissions levels** depending on availability in your environment; for example - **Full Control, Design, Edit, Contribute, Read, Restricted View**

![Externally Shared Content report](../../../.gitbook/assets/external-sharing-reports_externally-shared-content-report.png)
		
There are also additional columns in the **column chooser (1)**:
		
* **URL**
* **Object Type**
* **Email**
* **Principal Type**
* **Is External User**
* **Is Deleted**
* **Is Licensed**
* **Sign-in Status**

![Externally Shared Content report – column chooser](../../../.gitbook/assets/external-sharing-reports_externally-shared-content-report-available-columns.png)


### Report Actions

Here you can remove and manage users' access directly from this report. Select the item or user and choose the available action from the side panel.

Some of the actions are:

*	**Remove sharing link**
*	**Remove user access**
*	**edit user permissions**

This report can be exported (PDF and XLSX) and scheduled.

## External Users Report

This report contains all external users (registered in your tenant and outside your tenant) who have access to sites, Microsoft 365 Groups, Microsoft Teams, OneDrive, and Private Channels.

### Generate Report

You can access this report from:

*	the Report Center

### Report Data

Default columns displayed in the report are:
		
* **Name** of the user
* **Site Name**
* **Email**
* **Username**
* **Domain**
* **Last Logged In** time

![External Users report](../../../.gitbook/assets/external-sharing-reports_external-users-report.png)
		
There is one additional column in the column chooser:
		
* **Site Type** - shows the type of workspace for resource


### Report Actions

Here you can:

*	**Remove user access from a resource**
*	**see when the user last logged in**
*	**from which domain they are coming from**

This report can be exported (PDF and XLSX) and scheduled.


## Sharing Links report

This report helps you identify all the files and folders and their sharing links. 

This way, external users can be located and removed easily.

### Generate Report

You can access this report from:

*	detail screen of specific resource - Sharing Links tile
*	the Report Center
*	some other reports available in SysKit Point - for example, Permissions Matrix report, Externally Shared Content report, Unique Permissions report

### Report Data

Default columns displayed in the report are:
		
* **Name** of the resource
* **URL**
* **Link**
* **Link Type**
* **Created On**
* **Expiration Date**

![Sharing Links report](../../../.gitbook/assets/external-sharing-reports_sharing-links-report.png)

An external user can be identified if you look for the color of the user icon. If it's a **green-blue color**, it's an **external user**.

### Report Actions

You can perform these actions:
*	**Remove sharing link**
*	**Remove user access**

This report can be exported (PDF and XLSX) and scheduled.
