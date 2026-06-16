---
description: This article explains how to activate the Inactive Guest Users policy. 
---

# Inactive Guest Users

Syskit Point provides a predefined **Inactive Guest Users policy** that is applied tenant-wide. 

To activate the policy, navigate to the Policies settings screen and **click the Edit Policy (1)** icon.

![Inactive Guest Users - Edit Policy](../../../static/img/set-up-automated-workflows-guest-users-edit.png)

The **Edit Policy** dialog opens, where you can:
* **Select when a user is considered inactive (1)** by choosing the number of days that need to pass
* **Select the severity level (2)** for the policy
* **Enter ignored domains (3)** in the designated space
  * Here, you can define a list of e-mail domains to exclude from the Inactive Guest Users policy
  * The guest users belonging to those domains are not affected when a policy vulnerability is detected, nor do they trigger the policy
* **Enable Task Delegation (4)** by clicking the toggle next to it
  * **Select who will validate guest users (5):**
     * **Manager of Guest User**; when the option is selected, **the person responsible for the validation, in case the Guest User does not have a defined manager, needs to be chosen**
     * **Syskit Point Administrators**; this option is selected by default
     * **Custom Recipients**; when selected, use the input field to select custom users who will be responsible for the validation of Guest Users
  * **Select what Syskit Point should do if there is no validation response(6)**:
    * Automatically disable guest user
    * Automatically delete guest user
    * Perform no action
  * **Click the checkbox if you want a reminder sent (7)** 3 workdays before the due date 
* Click **Save (8)** once you are done with the policy configuration.   

![Edit Policy Dialog](../../../static/img/set-up-automated-workflows-guest-users-edit-dialog-1.png)


![Edit Policy Dialog](../../../static/img/set-up-automated-workflows-guest-users-edit-dialog-2.png)

Based on your configuration, **Syskit Point will start the task delegation workflow when an inactive Guest User is detected**. 

:::warning
**Please note!**
**You should have at least one user in your tenant with the Azure AD Premium P1 license assigned to detect sign-in times for guest users accurately.**
:::

For details on how collaborators can [**resolve Inactive Guest Users tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/guest-users-expiration.md).