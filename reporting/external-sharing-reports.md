---
description: External Sharing Reports provide information about the external users and their access to your tenant workspaces.
---

# External Sharing Reports

In this article, you can locate information on the following external sharing reports:
* [Externally Shared Content](#externally-shared-content)
* [External Users](#external-users-report)
* [Sharing Links](#sharing-links)

These reports can be used to **optimize and keep track of externally shared content, links, and external users with access to your Microsoft 365 workspaces and content**. 

To access an external sharing report, complete the following steps:

 * **Click the Reports tile**; located on the Syskit Point home screen.
 * **Select the External Sharing category in the filter** located in the upper left corner.
 * **Click the Externally Shared Content, External Users, or Sharing Links report tile**; this will generate that specific report.

## Externally Shared Content

This report shows content shared with external users via sharing links or by granting them direct access.

### Selection & Filters

After clicking the **Externally Shared Content** report tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, OneDrive, or shared channels) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Choose the content level to be shown** once prompted.
  * The option to select between the following options will appear:
    * **subsites**
    * **document libraries & lists**
    * **folders**
    * **files & folders**
* **Click the Run Report button** to generate the report.

### Report Data

The generated report displays all externally shared content based on the workspace and filter selection. 

The following columns are visible:    
* **Name**; the workspace, content, groups, and external users are shown in the tree grid.
* **Permission levels**; the level of access for external users over the content. 
  * For example: **Full Control**, **Design**, **Read**, **Edit**, **Contribute** or custom permission levels
    
Find and display additional columns in the **column chooser**, located in the top right corner, next to the search bar.

The options available to select are:

* **URL**
* **Object Type**
* **Email**
* **Principal Type**
* **Is External User**
* **Is Deleted**
* **Is Licensed**
* **Sign-in Status**
* **option to hide or show a specific permission level**

### Report Actions

When the report is displayed, the following actions can be completed by clicking the corresponding link from the right-side panel:

* **Schedule the Report**; set up a recurring delivery
* **Export the report** as an **XLSX** or a **PDF file**
* **Open related reports**

**Access can be managed directly from the report** by selecting an object or a user and choosing one of the available actions from the side panel.

The following access management actions can be performed:
* **Change Owners/Admins**
* **Remove Sharing Links**
* **Grant**, **Remove**, and **Edit** user access
* **Break** and **Restore** permission inheritance
* **Add** users to groups, **Remove** users from groups, and **Delete** SharePoint groups

## External Users Report

This report contains all external users (registered in your tenant and outside your tenant) who have access to sites, Microsoft 365 Groups, Microsoft Teams, OneDrive, and shared or private channels.

### Generate Report

**Access this report from the Report Center**:

 * **Click the Reports button**; it is located on left side of your Syskit Point.
 * **Select the External Sharing category in the filter** located in the upper left corner.
 * **Click the External Users tile** to generate the report.

 The report generates immediately without a Selection step.

### Report Data

The default columns displayed in the report are:
    
* **Name** of the user
* **Site Name**
* **Email**
* **Username**
* **Domain**
* **Last Logged In** DateTime
    
There is one additional column available in the column chooser.
  * **Site Type**; shows the type of workspace

{% hint style="information" %}
**Please note!**  
You can save custom views for your reports based on your needs and preferences. [For more details on this, take a look at the Save Custom Views article.](../setup/configuration/customize/custom-views.md)
{% endhint %}

### Report Actions

The actions that can be taken here are the following:

* **Remove access for users** from a workspace
* **Generate User Access and User Activity reports**
* **View additional information about who added the external user inside your Microsoft 365 environment**

The External Users report can be **exported as a PDF or XLSX file**. There is also the **option to schedule the report**.


## Sharing Links 

The Sharing Links report helps **identify all the shared files and folders along with their sharing links**. 

Use this to **locate and remove sharing links** when necessary.

### Generate Report

This report can be accessed from:

* The **details screen of specific workspace** by clicking the **Sharing Links tile**
* The **Report Center**
* **Other reports** available in Syskit Point 
  * For example, **Permissions Matrix report, Externally Shared Content report, and Unique Permissions report**

To generate this report from the Report Center:
* **Click the Reports button**; it is located on left side of your Syskit Point.
 * **Select the External Sharing category in the filter** located in the upper left corner.
 * **Click the Sharing Links tile** to generate the report.

### Selection & Filters

After clicking the **Sharing Links** report tile, a selection step opens where you can:
* **Use the top filter** to show only a specific type of workspace.
* **Select one or multiple workspaces** (sites, Microsoft Teams, Microsoft 365 Groups, OneDrive, and shared or private channels) for which the report should be generated.
* **Use the search option** for any specific site inquiries. 
* **Choose the link type to show** on the generated report.
  * You can choose between the following link types:
    * **people in company can view**
    * **people in company can edit**
    * **anyone can view**
    * **anyone can edit**
    * **specific people can view or edit**
* **Select which sensitivity labels to show**:
  * **Any** - the generated report shows links for files with and without applied sensitivity labels
  * **No label** - the generated report shows sharing links for files with no sensitivity labels applied
  * **Specific label(s)** - depending on the selected label(s), the generated report shows links for files with the selected sensitivity labels applied

* **Click the Run Report button** to generate the report.

### Report Data

There are default columns displayed in the report which list the following:
    
* **Name** of the workspace
* **URL**
* **Link**
* **Link Type**
* **Created On**
* **Expiration Date**

### Report Actions

The following actions can be performed within the report:
* **Remove sharing link**
* **Remove user access**
* **Open related reports**

The Sharing Links report can be **exported as a PDF or XLSX file**. There is also the **option to schedule the report**.
