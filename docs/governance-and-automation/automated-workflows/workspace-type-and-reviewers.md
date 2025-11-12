---
description: This article explains which workspace types can have which policies applied and who can be selected as a reviewer.
---

# Policies: Workspace Types and Reviewers

Before applying the policies you've created or enabled in Syskit Point, it's useful to know which workspace policies can be applied to and who can be selected as reviewers.

Below you can find details on:

* **Which types of workspaces** (Microsoft Teams, Microsoft 365 Groups, SharePoint Sites, etc.) are supported by each policy
* **Which users can be defined as reviewers** to complete tasks when the delegation option is enabled
* **Which policies can be delegated** 


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
| Inactive Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Not available |
| Minimum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Manager of Reviewer, Syskit Point Administrators, Custom Recipients |
| Maximum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Manager of Reviewer, Syskit Point Administrators, Custom Recipients |
| Orphaned Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Members or Specific Users suggest new owners, Point Administrators or Custom recipients approve new owners | Not available |
| Tenant Storage Limit | Tenant-Wide | Available | Syskit Point Administrators, Custom recipients |	Not available	|
| Orphaned Users | Tenant-Wide | Not available | Not applicable | Not applicable |
| Maximum Number of Members | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Not applicable | Not applicable |
| Workspaces with Shadow Users | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Not applicable | Not applicable |
| Private Workspaces Shared with Everyone | Microsoft Teams, Microsoft 365 Group, SharePoint Site | Not Available | Not applicable | Not applicable |
| Workspaces Without a Sensitivity Label | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site  | Not Available | Not applicable | Not applicable |







