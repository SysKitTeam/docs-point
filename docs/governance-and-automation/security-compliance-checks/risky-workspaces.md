--- 
description: This article provides information on the Risky Workspaces view for Security and Compliance checks.
---


# Risky Workspaces

Syskit Point detects workspaces that are considered risky based on various workspace health factors. The Risky Workspaces view can be accessed from the Security & Compliance checks screen.

You can locate the Risky Workspaces view for Security and Compliance checks by:

* **Clicking the number of Risky Workspaces** on the Security & Compliance Dashboard tile
* **Navigating to the Security and Compliance** screen and selecting **Show by: Workspace (1)**

Here, you can find:
* The **top filters (2)** allow you to filter the report to show the following:
  * **All** risky workspaces
  * **High** risk workspaces
  * **Medium** risk workspaces
  * **Low** risk workspaces

The risky workspaces report provides information on:

* **Time (3)** when the workspace risk factor was last calculated
  * This is recalculated automatically every few hours
* **Name (4)** of the workspace
* **Risk Score (5)** - shows a numerical score for the risk assessment, calculated based on various health factors
* **Risk Severity (6)** - shows the level of severity for the risky workspace 
* **Risk Factors (7)** - shows all of the potential vulnerabilities that were detected on the risky workspace
* **Clicking the ellipsis (8)** in the right corner of each workspace provides options for generating reports that highlight the vulnerabilities for that workspace.

![Risky Workspaces View](../../../static/img/risky-workspaces-view.png)

## Workspace Risk Assessment 

| Risk Factor | Severity | Description | Workspace Types | 
| :--- | :--- | :--- | :--- | 
| Sensitive files shared with anyone  | High | This workspace contains sensitive files that have sharing links accessible to anyone, posing a high data exposure risk  | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels | 
| Sensitive files shared company-wide  | High | Sensitive files in this workspace are shared with all internal users in the organization, increasing oversharing risk | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |   
| No active owners | High | There are no active owners assigned to this workspace, risking proper governance and accountability | SharePoint Site, M365 Group, Teams, Private Channels |  
| Sensitive files in public groups  | High | There are sensitive files stored in this public group with open membership, posing a significant confidentiality risk | M365 Groups and Teams |  
| Items shared with everyone | High | This workspace contains files shared with everyone in the organization, posing a potential data exposure risk | SharePoint Site, M365 Group, Teams |  
| Files shared with anyone  | Medium | Files in this workspace are shared through anonymous links, allowing unrestricted external access | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |  
| Private workspace files shared company-wide | Medium | Files from this private workspace are shared broadly across the organization, increasing the risk of unwanted access | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |  
| Too many external users | Medium | There are too many external or guest users in this workspace, increasing the risk of data leakage | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |  
| Not enough owners | Low | This workspace doesn't have enough owners, risking loss of accountability if existing one(s) become unavailable | SharePoint Site, M365 Group, Teams, Private Channels |  
| Too many owners | Low | There are too many owners in this workspace, which can reduce accountability and control | SharePoint Site, M365 Group, Teams, Private Channels |  
| Inactive | Low | This workspace has been inactive for over 90 days and should be reviewed to determine if it’s needed | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |  
| Too many external shares | Medium | This workspace includes too many files or folders shared with external users, increasing exposure risk | SharePoint Site, M365 Group, Teams, OneDrive, Private Channels, Shared Channels |