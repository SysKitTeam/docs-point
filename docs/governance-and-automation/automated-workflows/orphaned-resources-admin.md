---
description: This article explains how to set up the Orphaned Workspaces policy in Syskit Point.
---

# Orphaned Workspaces

Syskit Point detects **workspaces that don't have active owners**, which helps you ensure there is always someone responsible for access and content management for your workspaces. 

:::warning
**Please note!** 
The default Orphaned Workspaces policy now also applies to SharePoint Sites. 
You can expect to see the changes after the next AutoDiscover sync following the upgrade to the latest Point version.
Custom Orphaned Workspaces policies created by Syskit Point admins can also be applied to SharePoint sites using Rules or manually.
:::

A predefined policy - **Orphaned Workspaces** - can be found on the Policies screen. 

Click the **Edit (1)** icon to view all defined options for the policy. 

![Orphaned Workspaces - Edit Policy](../../../static/img/set-up-automated-workflows-orphaned-edit.png)

The **Edit Policy** dialog opens, where you can:
* **Define the policy name (1)**
* **Choose the severity level (2)**; this option is enabled by default
* **Enable Task Delegation (3)** by clicking the toggle next to it and selecting your task delegation preferences:
  * **Select between the 3 available processes (4)**:
    * **Ask Specific Users to Assign New Owners**; this is a **1-stage process**, where selected users - Syskit Point Administrators and/or custom recipients - **get a task to assign new owners**
    * **Ask Members to Suggest New Owners**; this is a **2-stage process**, where members can suggest new owners, and afterward, the selected users - Syskit Point Administrators and/or custom recipients - **get a task to resolve the task based on the suggestions from owners**; by default, this option is selected
    * **Automatically Assign New Owners**; if selected, Syskit Point **automatically assigns the last owner's manager as a new owner**
      * If the manager cannot be found, Syskit Point escalates the task to the user you defined when creating the policy
* Click **Save (5)** once you are done with the policy configuration 

:::warning
**Please note!** 
When resolving the Orphaned Workspaces task by selecting the Automatically Assign New Owners option, Syskit Point tries to find the most appropriate owner by using the following logic:

* **Check for disabled or deleted owners** 
  * If the workspace had disabled or deleted owners, Point assigns ownership to the manager of one of those users.
    * The selected manager cannot be disabled or deleted and is chosen based on the most recent sign-in. 
  * If no disabled or deleted owners are found, Point checks audit logs for users who were removed as owners within the last 7 days.
    * If such users exists, ownership is assigned to the manager of one of those users while using the same criteria as mentioned above. 
* **Fallback to tasks**
  * If no suitable owner can be found during the above step, resolution tasks are assigned to the configured resolvers and an e-mail is sent to them.
  * If an owner is found, but assignment fails, tasks are assigned to Syskit Point Admins, without sending an e-mail notification. 

:::

![Edit Policy Dialog](../../../static/img/set-up-automated-workflows-orphaned-dialog.png)


:::info

**Please note the following:** 
* **The Orphaned Workspaces policy vulnerability is detected when there are 0 active owners assigned to a workspace.** 
  * If 1 owner is assigned to a workspace when resolving the Orphaned Workspaces vulnerability, Syskit Point will detect the [Minimum Number of Owners policy](../../point-collaborators/resolve-governance-tasks/minimum-number-of-owners.md) vulnerability, as the default requirement is to have at least 2 owners per workspace. 

* **Nested group members are counted** when resolving a policy.
  * If the required number of members, including those within nested groups, has not been added or removed, the Resolve button remains disabled until that condition is met.
* **Site Owners are determined by the SharePoint Owners group.**
  * Only users in the SharePoint Owners group are considered Site Owners and can resolve tasks. **Site Admins cannot resolve tasks** and are not considered Site Owners.

:::

For details on how collaborators can [**resolve Orphanes Workspaces policy vulnerability tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/orphaned-resources.md).

:::info
**Please note**, this policy can be applied to the following workspaces:
* **Microsoft Teams**
* **Microsoft 365 Group**
* **SharePoint Sites**
* **Viva Engage Community**

:::