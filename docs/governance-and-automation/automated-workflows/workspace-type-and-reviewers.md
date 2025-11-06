---

description: This article explains which workspace types can have which policies applied and who can be selected as a reviewer.

---

# Policies: Workspace Types and Reviewers

Before applying the policies you've created or enabled in Syskit Point, it's useful to know which workspaces policies can be applied to and who can be selected as reviewers. 

Below you can find details on:

* **Which types of workspaces** (Microsoft Teams, Microsoft 365 Groups, SharePoint Sites, etc.) are supported by each policy

* **Which users can be assigned as reviewers** to complete tasks created by the policy


:::info

**Please note**, policies that are user-centered do not have specific workspaces they can be applied to as they are applied to users in your tenant. 

:::


| Policy Name | Workspace Type | Reviewer |
| ----- | ----- | ----- |
| Blocked Users with Assigned Licenses | N/A | Syskit Point Administrators? |
| Inactive Guest Users | N/A | Manager of Guest User, Syskit Point Administrators, Custom Recipients |
| Inactive Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Workspace Owners |
| Minimum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Workspace Owners, (if the workspace owners do not resolve the task, it can be reassigned to: Manager of Guest User, Syskit Point Administrators, Custom Recipients) |
| Maximum Number of Owners | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Workspace Owners, (if the workspace owners do not resolve the task, it can be reassigned to: Manager of Guest User, Syskit Point Administrators, Custom Recipients) |
| Orphaned Workspaces | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Specific Users, Members, (new member approval can be given by: Syskit Point Administrators, Custom Recepients) |
| Orphaned Users | N/A | Syskit Point Administrators? |
| Maximum Number of Members | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Syskit Point Admin? |
| Workspaces with Shadow Users | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site | Syskit Point Admin? |
| Private Workspaces Shared with Everyone | Microsoft Teams, Microsoft 365 Group, SharePoint Site | Syskit Point Admin? |
| Workspaces Without a Sensitivity Label | Microsoft Teams, Microsoft 365 Group, Viva Engage Community, SharePoint Site  | Sysit Point Admin? |



