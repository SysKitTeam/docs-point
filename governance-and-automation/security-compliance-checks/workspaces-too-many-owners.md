---
description: This article provides information on the Workspaces with Too Many Owners report.
---


# Workspaces With Too Many Owners

{% hint style="information" %}
Security and Complaince checks for Workspaces with Too Many Owners are available in the XXXX plan and above. 
{% endhint %}

On the Security & Compliance Checks section dashboard, click the **Workspaces with too many owners** button to see the report.

The Workspaces with Not Enough Owners screen opens, showing a list of all **workspaces with too many owners assigned** to them.

Above the report, you can see the number of:
 * All workspaces with a policy violation
 * Microsoft Teams with a policy violation
 * Microsoft Groups with a policy violation

The report itself provides information on:
  * **Workspace (1)** name
  * **Detected (2)** - when the policy violation was detected
  * **Owners (3)** - the number of owners the workspace has
  * **Policy (4)** - the policy assigned to the workspace
  * **Rule (5)** - for the policy applied
  * **Status (5)** - status of the policy violation
    * If a policy was detected, the status shows as *Detected*
    * If a policy was automated, it shows the status in the automation process, for example *Awaiting response*
  * **Assigned to (7)** - who the policy violation is assigned to for a resolution

Additionally, you can complete the following actions for the policy violation:
  * **Accept risk (8)** - this means you will close the policy violation task without making any changes to the current state of the workspace
  * **Send reminder (9)** - this sends a reminder to the person responsible for resolving this task
  * **Ask Owners (10)** - this action shows if the policy wasn't automated but was detected
  
![Teams and Groups With Only 1 Owner](../../.gitbook/assets/security-compliance-checks_workspaces-too-many-owners.png)

By **selecting all (1)** or more than one workspace, you can perform the bulk action for **Ask Owners (2)**, **Send reminder (3)** and **Accept risk (4)**. 

![Teams and Groups With Only 1 Owner - Change Owners](../../.gitbook/assets/security-compliance-checks_workspaces-too-many-owners-bulk.png)

To get more details on a specific workspace further, **click the name of the workspace on the report**.
  * This opens the screen that shows more details about the workspace

Here you can find the following information: 
 * **Severity level (1)**
 * **Vulnerability (2)**
 * **Detected (3)**
 * **Policy Type (4)**
 * **Rule (5)**
 * **Category (6)**

 You can also perform the actions to **Accept Risk (7)** and **Change Owners (8)**. 

![Workspaces with Not Enough Owners - More Details](../../.gitbook/assets/security-compliance-checks_workspaces-too-many-owners-details.png)
