---
description: This article provides information on the Workspaces with Not Enough Owners report.
---


# Workspaces with Not Enough Owners

Syskit Point detects workspaces that don't have enough owners predefined by your organization's policies, which can make your workspaces less secure. 

When the task delegation option is enabled for the Minimum Number of Owners policy, Syskit Point creates tasks and sends emails to users as defined in the policy settings.
To learn more, take a look at the [Minimum Number of Owners policy article](../../governance-and-automation/automated-workflows/minimum-number-of-owners-admin.md). 

By default, task delegation is turned off for this policy, but workspaces with not enough owners **are still detected** and shown on the Security and Compliance dashboard. **This means that Syskit Point detects a vulnerability on a workspace** based on the applied policy, but it does not create tasks or send any emails to workspace owners. 

The purpose of this is to assist Syskit Point admins by
bringing awareness of potential issues across their Microsoft 365 workspaces, including Microsoft Teams, Microsoft Groups, and SharePoint Sites. 

On the Security & Compliance dashboard, click the **Workspaces with not enough owners** button to see the report.

The Workspaces with Not Enough Owners screen opens, showing a list of all **workspaces with not enough owners assigned** to them.

Above the report, you can see the number of:
* All workspaces with a policy vulnerability
* Microsoft Teams with a policy vulnerability
* Microsoft Groups with a policy vulnerability
* SharePoint Sites with a policy vulnerability

The report itself provides information on:
  * **Workspace (1)** name
  * **Detected (2)** - when the policy vulnerability was detected
  * **Owners (3)** - the number of owners the workspace has
  * **Policy (4)** - the policy assigned to the workspace
  * **Rule (5)** - for the policy applied
  * **Status (6)** - status of the policy vulnerability
    * If a vulnerability was detected, the status shows as *Detected*
    * If task delegation is enabled for the policy, it shows the task status, for example, *Awaiting response* from owners
  * **Assigned to (7)** - who the policy vulnerability is assigned to for a resolution

Additionally, you can complete the following actions for the policy vulnerability:
  * **Accept risk (8)** - this means you will close the policy vulnerability task without making any changes to the current state of the workspace
  * **Send reminder (9)** - this sends a reminder to the person responsible for resolving this task

If the policy is set up without task delegation being enabled, instead of sending a reminder you will have the option to **Ask Owners (10)**.

By **selecting all (11)** or more than one workspaces, you can perform the bulk action for **Send reminder (12)** and **Accept risk (13)**, or if the task delegation is not enabled, **Ask Owners (14)**. 

![Workspaces with Not Enough Owners](../../.gitbook/assets/security-compliance-checks-workspaces-not-enough-owners.png)

![Workspaces with Not Enough Owners - Bulk](../../.gitbook/assets/security-compliance-checks-workspaces-not-enough-owners-bulk.png)


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

![Workspaces with Not Enough Owners - More Details](../../.gitbook/assets/security-compliance-checks-workspaces-not-enough-owners-details.png)
