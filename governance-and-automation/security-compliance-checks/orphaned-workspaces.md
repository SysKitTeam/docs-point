---
description: This article provides information on the Orphaned Workspaces report.
---


# Orphaned Workspaces

Syskit Point detects workspaces that don't have active owners, which helps you ensure there is always someone responsible for access and content management for your workspaces. 

The Orphaned Workspaces policy can be automated, and when automation is enabled, Syskit Point creates tasks and sends emails to users as defined in the policy settings. To learn more, take a look at the [Orphaned Workspaces policy article](../../governance-and-automation/automated-workflows/orphaned-resources-admin.md). 

By default, the automation is turned off for this policy, but the orphaned workspaces **are still detected** and visible on the Security and Compliance dashboard. **This means that Syskit Point detects a vulnerability on a workspace** based on the applied policy, but it does not create tasks or send any emails to workspace owners. 

The purpose of this is to assist Syskit Point admins by
bringing awareness of potential issues in their Microsoft 365 environment. 

On the Security & Compliance dashboard, click the **Orphaned Workspaces** button to see the report.

The Orphaned Workspaces screen opens, showing a list of all **workspaces that don't have active owners**.

Above the report, you can see the number of:
 * All workspaces with a policy violation
 * Microsoft Teams with a policy violation
 * Microsoft Groups with a policy violation

The report itself provides information on:
  * **Workspace (1)** name
  * **Detected (2)** - when the policy violation was detected
  * **Policy (3)** - the policy assigned to the workspace
  * **Rule (4)** - for the policy applied
  * **Status (5)** - status of the policy violation
    * If a vulnerability was detected, the status shows as *Detected*
    * If automation is enabled for the policy, it shows the status in the automation process, for example *Awaiting response* from members
  * **Assigned to (6)** - who the policy violation is assigned to for a resolution

Additionally, you can complete the following actions for the policy violation:
  * **Accept risk (7)** - this means you will close the policy violation task without making any changes to the current state of the workspace
  * **Send reminder (8)** - this sends a reminder to the person responsible for resolving this task

If the automation is not enabled in policy settings, instead of sending a reminder you will have the option to **Ask Owners**. This will send emails and create tasks for users responsible for resolving the task.

By **selecting all (9)** or more than one workspace, you can perform the bulk action for **Send reminder (10)** and **Accept risk (11)**. 


![Orphaned Workspaces](../../.gitbook/assets/security-compliance-checks_orphaned-workspaces.png)
![Orphaned Workspaces - Bulk](../../.gitbook/assets/security-compliance-checks_orphaned-workspaces-bulk.png)


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

![Orphaned Workspaces - More Details](../../.gitbook/assets/security-compliance-checks_orphaned-workspaces-details.png)
