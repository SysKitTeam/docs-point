---
description: This article explains how to activate the Orphaned Users policy. 
---

# Orphaned Users

Syskit Point provides a predefined **Orphaned Users policy** that is applied tenant-wide and cannot be deleted. 

This policy helps you identify and remove users who may pose risks or complications when managing workspaces.

To edit the policy, go to the Policies settings screen and **click the Edit Policy icon**.

![Blocked Users with Assigned Licenses - Edit Policy](../../../static/img/orphaned-users-admin-edit-policy.png)

The **Edit Policy** dialog opens, where you can:
* Select the **Severity level (1)**.
   * The default severity level for this policy is **Medium**.
   * You can choose from **three levels of severity**:
     * High
     * Medium
     * Low
* Choose how you want to **resolve the policy when a new vulnerability is detected**: 
  * **Resolve Manually (2)** - selecting this option means the vulnerability is flagged on the Security & Compliance Dashboard, where you or other admins can take manual actions to resolve it.
  * **Resolve Automatically (3)** - selecting this option means Syskit Point automatically removes orphaned users to resolve the vulnerability when it is detected.
  * You can select which type of orphaned users should be automatically deleted by choosing one of three options:
    * **Deleted Users** - selecting this removes all deleted users from your workspaces.
    * **Users with Blocked Sign-in** - selecting this removes all blocked users from your workspaces.
    * **All Orphaned Users** - selecting this removes both blocked and deleted users from your workspaces.

Once you've selected the options that best suit your needs for this policy, **click the Save button (4)** to store your preferences.

![Blocked Users with Assigned Licenses - Severity](../../../static/img/orphaned-users-admin-policy.png)

:::info
* **Policy vulnerability is not detected for OneDrive workspaces where the Primary admin is blocked or deleted**, as this is expected during user offboarding and similar scenarios.
* **Primary admins cannot be deleted from a workspace** automatically. This requires manual intervention and replacing the deleted or blocked Primary admin with an active user. 
:::