---
description: This article explains how to edit the Inactive Workspaces policy. 
---

# Inactive Workspaces

Syskit Point provides a predefined **Inactive Workspaces policy** that is applied tenant-wide. This policy helps you clean up inactive workspaces to save storage space and keep your environment running smoothly. Once an inactive workspace is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.

To activate the policy, navigate to the Policies settings screen and **click the Edit Policy (1)** icon.

![Inactive Guest Users - Edit Policy](../../.gitbook/assets/inactive-workspaces-admin-edit.png)

The **Edit Policy** dialog opens where you can:
* **Edit the policy name (1)**
* **Select the severity level (2)** for the policy
* **Select the time period (3)** after which the workspaces are marked as inactive
* **Select the time period (4)** for how long a workspace can be **Kept**
* **Enable Set Naming Rule (5)** by clicking the toggle next to it
  * This lets you **apply the naming rule to your workspaces** to let you know they are archived
  * You can select to:
    * Add Prefix
    * Add Suffix
* **Enable Remove Access (6)** by clicking the toggle next to it
  * Selecting this removes access for members and owners of archived workspaces
  * You can choose to remove access for:
    * Members
    * Owners
* **Select to hide the archived workspace's group (7)** from your organization's global address list
* **Enable Task Delegation (8)** by clicking the toggle next to it
  * **Select the actions that owners can perform when they receive a task (9)**:
    * **Keep**
      * This action is visible by default, and if the workspace is kept, it won't be marked as inactive for the period defined in the first step
    * **Archive**
      * If this action is selected and the workspace is archived, it can still be restored later
    * **Delete**
      * If this action is selected, and a workspace is deleted, it can be restored from the recycle bin within 93 days, after which it is deleted for good
  * **Enter the number of total work days reviewers have to complete the task (10)**:
    * **Click the checkbox if you want a reminder sent (11)** 3 work days before the due date 
  * **Select what Syskit Point should do if owners do not resolve this task until due date (12)**:
    * Perform no action
    * Automatically Archive
    * Automatically Delete
* Click **Finish (13)** once you are done with the policy configuration   

![Edit Policy Dialog - Step 1](../../.gitbook/assets/inactive-workspaces-admin-edit-step-1.png)

![Edit Policy Dialog - Step 2](../../.gitbook/assets/inactive-workspaces-admin-edit-step-2.png)

![Edit Policy Dialog - Step 3](../../.gitbook/assets/inactive-workspaces-admin-edit-step-3.png)

**Syskit Point will start the task delegation workflow based on your configuration when an inactive workspace is detected**. 

For details on how collaborators can [**resolve Inactive Workspaces tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md).

## Detection for Inactive Workspaces

To decide whether something is inactive in your Microsoft 365 environment, we collect activity data for **SharePoint, Exchange, Yammer, and Microsoft Teams**. If any kind of activity is detected, the workspace will not be declared inactive. The amount of time that needs to pass for a workspace to be considered inactive is determined by administrators when creating or editing the Inactive Workspaces policy. 

The following type of activity is checked to determine if a workspace is inactive:

* **SharePoint activity** - collected via Microsoft 365 audit logs. **The last activity is based on the latest date when a file was viewed, edited, or downloaded**.
* **Exchange activity** - collected via Microsoft 365 Groups activity report available in the Microsoft 365 admin center. **The last activity is based on the latest date when an email was delivered to a group**.
* **Yammer activity** - the collection is also accomplished through the Microsoft 365 admin center usage report for Yammer groups activity. **The last activity is based on the latest date a message was read, posted, or liked by the group**.
* **Microsoft Teams** - activity is collected using protected APIs in Microsoft Graph. **The last activity is based on the latest date when a message was posted or replied to**.


The following conditions also have to be met:
 
* **Violations are NOT raised for the first 10 days** after Syskit Point is first connected to your tenant.
* **Only Alive workspaces are checked** (Archived and Deleted workspaces are ignored)
* **Violations are NOT raised for sites that have not been fully synced** (discovered by Autodiscover but not synced by Site sync) 
* **Audit logs collection needs to be working** without any issues 
* **Violations are NOT raised for recently created sites**
 

{% hint style="warning" %}
**Please note!**  
Activity is being monitored from the Syskit Point installation onward! This applies to SharePoint and Exchange workloads since historical data for these workloads is unavailable in usage reports.
{% endhint %}