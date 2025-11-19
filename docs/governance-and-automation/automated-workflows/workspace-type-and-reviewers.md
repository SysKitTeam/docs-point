---
description: This article explains which workspace types can have which policies applied and who can be selected as a reviewer.
---

# Policies: Workspace Types and Reviewers

Before applying the policies you've created or enabled in Syskit Point, it is useful to know which workspace the policies can be applied to, who can be selected as a reviewer, and who receives tasks and emails if the delegation option is enabled.

Below you can find details on:

* **Types of workspaces** (Microsoft Teams, Microsoft 365 Groups, SharePoint Sites, etc.) supported by each policy
* **Delegation option availability** for policies 
* **Which users you can define as reviewers** who complete tasks when the delegation option is enabled
* **Who are the users considered as workspace owners** for each workspace type


:::warning
**Please note the following**: 

* **Policies that do not have task delegation available do not have active tasks to resolve, there are no reviewers, and no e-mails are sent.**
  * Syskit Point Administrators can monitor and complete actions for those policies on the [Security & Compliance Checks](../security-compliance-checks/overview.md) screen when a vulnerability is detected.
* For certain policies with task delegation enabled, when workspace owners don't resolve their tasks on time, you can select who the task will be reassigned to. If workspace owners do not complete the task, it will be reassigned to the reviewers you choose.
* Policies that are user-centered do not have specific workspaces they can be applied to, as they are applied tenant-wide.

:::


| Policy Name | Workspace Type | Task Delegation | Reviewers | Reassign to|
| ----- | ----- | ----- | ----- | ----- |
| Blocked Users with Assigned Licenses | Tenant-Wide | Not available | Not applicable | Not applicable |
| Inactive Guest Users | Tenant-Wide | Available | Manager of Guest User, Syskit Point Administrators, Custom Recipients | Not available |
| Inactive Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners or Site Admins (for nongroup connected sites) | Not available |
| Minimum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Manager of Reviewer, Syskit Point Administrators, Custom Recipients |
| Maximum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Manager of Reviewer, Syskit Point Administrators, Custom Recipients |
| Orphaned Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Members or Specific Users suggest new owners, Point Administrators or Custom recipients approve new owners | Not available |
| Tenant Storage Limit | Tenant-Wide | Available | Syskit Point Administrators, Custom recipients |	Not available	|
| Orphaned Users | Tenant-Wide | Not available | Not applicable | Not applicable |
| Maximum Number of Members | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Not applicable | Not applicable |
| Workspaces with Shadow Users | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Not applicable | Not applicable |
| Private Workspaces Shared with Everyone | Microsoft Teams, Microsoft 365 Group, SharePoint Site | Not Available | Not applicable | Not applicable |
| Workspaces Without a Sensitivity Label | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site  | Not Available | Not applicable | Not applicable |

| Workspace Type | Workspace Owners |
| ---| --- |
| Microsoft Teams | Owners of the connected Microsoft 365 Group |
| Microsoft 365 Group | Owners of the connected Microsoft 365 Group | 
| Viva Engage Community | Owners of the connected Microsoft 365 Group |
| SharePoint Site | **For the Inactive Workspaces Policy, Site admins are cosidered workspace owners** - this is due to the fact the Site admin role is needed in case reviewers want to delete the site in the assigned task <br/> **For Minimum Number of Owners, Maximum Number of Owners, and Orphaned Workspaces policies, users in the Owners SharePoint group are considered workspace owners** - the Owners SharePoint group is created by default with the site creation and has the following naming pattern: `<SharePointSiteName> Owners`; for example, SharePoint Site named `Sales` has the `Sales Owners` SharePoint group <br/> **Remaining policies** are either tenant-wide or have no delegation option, so the workspace ownership logic is not being used to define reviewers |