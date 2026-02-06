---
description: This article provides information on the Orphaned Workspaces report.
---

# Orphaned Workspaces

Syskit Point detects workspaces that don't have active owners, which helps you ensure there is always someone responsible for access and content management for your workspaces. 

When the task delegation option is enabled for the Orphaned Workspaces policy, Syskit Point creates tasks and sends emails to users as defined in the policy settings. To learn more, take a look at the [Orphaned Workspaces policy article](../../governance-and-automation/automated-workflows/orphaned-resources-admin.md). 

By default, task delegation is turned off for this policy, but the orphaned workspaces **are still detected** and visible on the Security and Compliance dashboard. **This means that Syskit Point detects a vulnerability in a workspace** based on the applied policy, but it does not create tasks or send any emails to workspace owners. 

The purpose of this is to assist Syskit Point admins by
bringing awareness of potential issues in their Microsoft 365 environment. 

On the Security & Compliance dashboard, click the **Orphaned Workspaces** button to see the report.

The Orphaned Workspaces screen opens, showing a list of all **workspaces that don't have active owners**.

Above the report, you can see the number of:
* All workspaces with a policy vulnerability
* Microsoft Teams with a policy vulnerability
* Microsoft Groups with a policy vulnerability
* SharePoint Sites with a policy vulnerability

The report itself provides information on:
* **Workspace (1)** name
* **Detected (2)** - when the policy vulnerability was detected
* **Blocked Owners (3)** - the names of workspace owners that have been blocked
* **Status (4)** - status of the policy vulnerability
  * If a vulnerability was detected, the status shows as *Detected*
  * If task delegation is enabled for the policy, it shows the task status, for example, *Awaiting response* from members
* **Members (5)** - the number of members in the workspace
* **Assigned to (6)** - who the policy vulnerability is assigned to for a resolution
* **Last Activity Date (7)** - the date and time when activity was last logged on the workspace

Additionally, you can complete the following actions for the policy vulnerability:
* **Ask Members (8)** - this action requests that the workspace members select new workspace owners
  * For more details on the Ask Members action, [please check out the section below](#ask-members-action)
* **The Ellipsis (more options) Menu (9)** - clicking the 3 dots next to the Ask Members button provides the option to complete the following actions:
  * **Archive** - this action archives the workspace
  * **Delete** - this action deletes the workspace
  * **Add Owners** - this action lets you manually add additional owners to the workspace to resolve the task yourself
  * **Accept Risk** - this action means you will close the policy vulnerability task without making any changes to the current state of the workspace

If task delegation is not enabled in the policy settings, instead of sending a reminder, you will have the option to **Ask Owners**. This will send emails and create tasks for the users responsible for resolving them.

By **selecting all (10)** or more than one workspace, you can perform the bulk action for **Archive (11)**, **Delete (12)**, **Add Owners (13)**, **Send reminder (14)**, and **Accept risk (15)**. 


![Orphaned Workspaces](../../../static/img/security-compliance-checks-orphaned-workspaces.png)

![Orphaned Workspaces - Bulk](../../../static/img/security-compliance-checks-orphaned-workspaces-bulk.png)


To get more details on a specific workspace, **click the name of the workspace on the report**.
* This opens the screen that shows more details about the workspace

Here you can find the following information: 
* **Severity level (1)**
* **Vulnerability (2)**
* **Detected (3)**
* **Policy Type (4)**
* **Rule (5)**
* **Category (6)**

 You can also perform the actions to **Accept Risk (7)** and **Add Owners (8)**. 

![Orphaned Workspaces - More Details](../../../static/img/security-compliance-checks-orphaned-workspaces-details.png)


:::info

**Please note:**
* **Nested group members are counted** when resolving a policy.
  * If the required number of members has not been added or removed, including those within nested groups, the Resolve button remains disabled until that condition is met.
* **Site Owners are determined by the SharePoint Owners group.**
  * Only users who are part of the SharePoint Owners group are considered Site Owners and can resolve tasks. **Site Admins cannot resolve tasks** and are not considered Site Owners.

:::

## Ask Members Action

The **Ask Members action** helps resolve orphaned workspace tasks by **asking workspace members to suggest new owners when no active owners exist**. 

The Ask Members action is a two-stage process:

* **Stage One - Members suggest new owners**
  * When the Ask Members action is triggered, e-mails and tasks are sent to all members of the workspace
  * Members are asked to suggest one or more users as new owners
  * Members can resolve the task directly from the e-mail they receive
  * The suggestions are stored as members resolve their tasks, and stage one stays active until all members resolve their tasks

:::warning

**Please note:**

**If the team has no members**, this action cannot be completed. In that case, the admins have to resolve the vulnerability by using one of the following actions;
  * Add Owners
  * Archive Workspace
  * Delete Workspace

:::


* **Stage 2 - Resolving the task**
  * After all members tasks are completed, a new task is created for admins or [designated reviewers](#designated-reviewers) to take one of the following actions:
    * **Add Owners**, by approving the suggestions made by members or deciding on an owner yourself
    * Archive the workspace
    * Delete the workspace

:::info

For more details, on **how the Ask Members task resolution looks like from the perspective of members that receive the task**, [**take a look at the Resolve Orphaned Workspaces Tasks.**](../../point-collaborators/resolve-governance-tasks/orphaned-resources.md#members-suggest-new-owners)

:::

The **policy vulnerability is closed only after the second stage is resolved**. Collecting suggestions alone from members does not close the vulnerability. 

:::info

**Tasks are sent to all workspace members**, if a Guest User is a member, they will receive the task as well and can submit suggestions.

**Users have 15 days to resolve Tasks**, after 15 days the second stage is triggered and the approval task is created.

**Users cannot become owners based on suggestions alone**, this decision needs to be approved during stage 2 by either a Point Admin or a specified designated reviewer.

:::

## Designated Reviewers

**Designated reviewers for Stage 2 are determined** using the following:
  * Point tries to use the currently defined reviewers and respects existing policy settings 
  * If specific reviewers are selected as custom recipients in the policy settings, the task is sent to them
  * If the reviewer type is set to anything other than Point Admins or custom recipients, the task is sent to Point Admins