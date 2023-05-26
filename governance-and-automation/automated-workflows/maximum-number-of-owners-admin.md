---
description: This article explains how to set up the Maximum Number of Owners policy for Automated Workflows in SysKit Point.
---

# Maximum Number of Owners

A predefined policy - set as **Maximum 5 Owners** - is located on the Automated Workflows screen. 

Click the **Edit (1)** icon to view all defined options for the policy. 

![Maximum Number of Owners - Edit Policy](../../.gitbook/assets/set_up_automated_workflows-max_owners_edit.png)

The **Edit Policy** dialog opens where you can:
* **Enable or disable the policy (1)**; this policy is enabled by default but not applied to any resources
* **Define the policy name (2)**
* **Define the maximum number of allowed owners (3)**; this is set to 5 by default
* **Choose whether SysKit Point will send a reminder 3 workdays before the due date (4)**; this option is enabled by default
* **Choose what to do if owners don't resolve the policy violation until the due date**. The following options are available:
    * **Reassign Task (5)**; when selected, you can define who will get the task - **Manager of the Reviewer**, **SysKit Point Administrators**, or **custom recipients**; this option is selected by default, and the tasks are reassigned to Manager of Reviewer
    * **Automatically Remove Owners (6)**; if selected, **SysKit Point will remove existing owners starting from users with the oldest sign-in date** until the defined maximum number of owners is reached to comply with the policy

![Edit Policy Dialog](../../.gitbook/assets/set_up_automated_workflows-max_owners_dialog.png)

Click **Save (7)** once you are done with the policy configuration.  

For details on how collaborators can [**resolve Maximum Number of Owners policy violation tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/maximum-number-of-owners.md).