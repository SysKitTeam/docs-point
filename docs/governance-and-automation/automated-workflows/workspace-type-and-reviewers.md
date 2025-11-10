---

description: This article explains which workspace types can have which policies applied and who can be selected as a reviewer.

---

# Policies: Workspace Types and Reviewers

Before applying the policies you've created or enabled in Syskit Point, it's useful to know which workspaces policies can be applied to and who can be selected as reviewers. 

Below you can find details on:

* **Which types of workspaces** (Microsoft Teams, Microsoft 365 Groups, SharePoint Sites, etc.) are supported by each policy

* **Which users can be assigned as reviewers** to complete tasks created by the policy


:::info

**Please note the following**: 

* Policies that are user-centered do not have specific workspaces they can be applied to as they are applied to users in your tenant. 
* For certain policies with task delegation enabled, when a task is not resolved by workspace owners, you can select secondary reviewers. If workspace owners do not complete the task, it will be reassigned to the secondary reviewers you have chosen.
* Policies that do not have task delegation available, do not have active tasks to resolve, and no e-mail are sent.
  * Syskit Point Administrators can monitor and complete actions for those policies on the [Security & Compliance Checks](../security-compliance-checks/overview.md) screen, when a vulnerability is detected.

:::




| Policy Name | Workspace Type | Task Delegation | Default Reviewer |Secondary Reviewers |
| ----- | ----- | ----- | ----- | ----- |
| Blocked Users with Assigned Licenses | N/A | Not available | Syskit Point Admin | N/A |
| Inactive Guest Users | N/A | Available | Manager of Guest User, Syskit Point Administrators, Custom Recipients | N/A |
| Inactive Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | N/A |
| Minimum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners  | Manager of Guest User, Syskit Point Administrators, Custom Recipients |
| Maximum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Workspace Owners | Manager of Guest User, Syskit Point Administrators, Custom Recipients |
| Orphaned Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Available | Specific Users, Members | New member approval can be given by: Syskit Point Administrators, Custom Recepients |
| Orphaned Users | N/A | Not available | Syskit Point Admin | N/A |
| Maximum Number of Members | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Syskit Point Admin | N/A |
| Workspaces with Shadow Users | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Not Available | Syskit Point Admin | N/A |
| Private Workspaces Shared with Everyone | Microsoft Teams, Microsoft 365 Group, SharePoint Site | Not Available | Syskit Point Admin | N/A |
| Workspaces Without a Sensitivity Label | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site  | Not Available | Sysit Point Admin | N/A |



