---
description: External sharing reports provide information about the external users and their access to your tenant resources.
---

# External Sharing Reports

This category contains the following reports:
* **Externally Shared Content**
* **External Users**
* **Sharing Links**

To generate a report:
* **Navigate to the Report Center** by clicking the Reports tile on the Home screen
* **Select the External Sharing category (1)** from the left hand filter
* **Click a report tile (3)** of he report you want to generate

## Externally Shared Content

This report shows content shared with external users via sharing links or by granting the access directly.

### Selection & Filters

After clicking the **Externally Shared Content** report tile, a selection step opens where you can:
* **Filter displayed workspaces** by **changing the view (1)**, **selecting the workspace type (2)**, or **searching (3)**   
* **Select one or multiple workspaces (4)**
* **Select content level to be shown (5)**; choose between the following options:
    * **subsites**
    * **document libraries & lists**
    * **folders**
    * **files & folders**
* **Click the Run Report button(6)** to generate the report
### Report Data

The generated report displays all externally shared content based on the workspace and filter selection :
		
* **Name** of the resource
* several **permissions levels** depending on availability in your environment; for example - **Full Control, Design, Edit, Contribute, Read, Restricted View**

![Externally Shared Content report](../../\.gitbook/assets/external-sharing-reports_externally-shared-content-report.png)
		
There are also additional columns in the **column chooser (1)**:
		
* **URL**
* **Object Type**
* **Email**
* **Principal Type**
* **Is External User**
* **Is Deleted**
* **Is Licensed**
* **Sign-in Status**

![Externally Shared Content report – column chooser](../../\.gitbook/assets/external-sharing-reports_externally-shared-content-report-available-columns.png)


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

![External Users report](../../\.gitbook/../.gitbook/assets/external-sharing-reports_external-users-report.png)
		
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

![Sharing Links report](../../\.gitbook/assets/external-sharing-reports_sharing-links-report.png)

An external user can be identified if you look for the color of the user icon. If it's a **green-blue color**, it's an **external user**.

### Report Actions

You can perform these actions:
*	**Remove sharing link**
*	**Remove user access**

This report can be exported (PDF and XLSX) and scheduled.
