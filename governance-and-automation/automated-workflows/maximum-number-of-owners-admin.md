---
description: This article explains how to set up the Maximum Number of Owners policy in Syskit Point.
---

# Maximum Number of Owners

A predefined policy - set as **Maximum 5 Owners** - is located on the Policies screen. 

Click the **Edit (1)** icon to view all defined options for the policy. 

![Maximum Number of Owners - Edit Policy](../../.gitbook/assets/set-up-automated-workflows-max-owners-edit.png)

The **Edit Policy** dialog opens where you can:
* **Define the policy name (1)**
* **Define the maximum number of allowed owners (2)**; this is set to 5 by default
* **Choose the severity level (3)**; this option is enabled by default
* * **Enable Task Delegation (4)** by clicking the toggle next to it and selecting your task delegation preferences:
  * **Send reminder to reviewers (5)** 3 work days before due date; this option is enabled by default
  * **Choose what to do if owners don't resolve the policy vulnerability until the due date (6)**. The following options are available:
    * **Reassign Task**; when selected, you can define who will get the task - **Manager of the Reviewer**, **Syskit Point Administrators**, or **custom recipients**; this option is selected by default, and the tasks are reassigned to Manager of Reviewer
    * **Automatically Remove Owners**; if selected, **Syskit Point will remove existing owners starting from users with the oldest sign-in date** until the defined maximum number of owners is reached to comply with the policy
* Click **Save (7)** once you are done with the policy configuration.  

![Edit Policy Dialog](../../.gitbook/assets/set-up-automated-workflows-max-owners-dialog.png)


For details on how collaborators can [**resolve Maximum Number of Owners policy vulnerability tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/maximum-number-of-owners.md).