---
description: This article explains how to activate the Inactive Guest Users policy. 
---

# Inactive Guest Users

Syskit Point provides a predefined **Inactive Guest Users policy** that is applied tenant-wide. 

To activate the policy, navigate to the Policies settings screen and **click the Edit Policy (1)** icon.

![Inactive Guest Users - Edit Policy](../../.gitbook/assets/set_up_automated_workflows-guest_users_edit.png)

The **Edit Policy** dialog opens where you can:
* **Enable the policy (1)** by clicking the toggle next to the policy name; this policy is disabled by default.
* **Select when a user us considered inactive (2)** by choosing the amount of days that need to pass
* **Select the severity level (3)** for the policy
* **Enable automation (4)** by clicking the toggle next to it
  * **Select who will validate guest users:**
     * **Manager of Guest User (5)**; when the option is selected, **the person responsible for the validation, in case the Guest User does not have a defined manager, needs to be chosen**
     * **Syskit Point Administrators (6)**; this option is selected by defaut
     * **Custom Recipients (7)**; when selected, use the input field to select custom users that will be responsible for the validation of Guest Users
* Click **Save (8)** once you are done with the policy configuration.   

![Edit Policy Dialog](../../.gitbook/assets/set_up_automated_workflows-guest_users_edit_dialog.png)
Based on your configuration, **Syskit Point will start the automated workflow when an inactive Guest User is detected**. 

{% hint style="warning" %}
**Please note!**
**You should have at least one user in your tenant with the Azure AD Premium P1 license assigned to detect sign-in times for guest users accurately.**
{% endhint %}

For details on how collaborators can [**resolve Inactive Guest Users  tasks** navigate to the following article](../../point-collaborators/resolve-governance-tasks/guest-users-expiration.md).