---
description: >-
  This article explains how to set up the Minimum Number of Owners policy in
  Syskit Point.
---

# Minimum Number of Owners

Syskit Point detects workspaces that don't have enough owners, which can make your workspaces less secure and difficult to manage.

A predefined policy - **Minimum 2 Owners** - is located on the Policies screen. Click the **Edit (1)** icon to view all defined options for the policy.

![Minimum Number of Owners - Edit Policy](../../.gitbook/assets/set-up-automated-workflows-min-owners-edit.png)

The **Edit Policy** dialog opens where you can:

* **Define the policy name (1)**
* **Define the maximum number of allowed owners (2)**; this is set to 5 by default
* **Choose the severity level (3)**; this option is enabled by default
*
  * **Enable Task Delegation (4)** by clicking the toggle next to it and selecting your task delegation preferences:  \* **Send reminder to reviewers (5)** 3 work days before due date; this option is enabled by default  \* **Choose what to do if owners don't resolve the policy vulnerability until the due date (6)**. The following options are available:   \* **Reassign Task**; when selected, you can define who will get the task - **Manager of the Reviewer**, **Syskit Point Administrators**, or **custom recipients**; this option is selected by default, and the tasks are reassigned to Manager of Reviewer   \* **Automatically Remove Owners**; if selected, **Syskit Point will remove existing owners starting from users with the oldest sign-in date** until the defined maximum number of owners is reached to comply with the policy  \* **Click the checkbox to allow owners to accept risk for the policy (7)**
* Click **Save (8)** once you are done with the policy configuration.&#x20;

![Edit Policy Dialog](../../.gitbook/assets/set-up-automated-workflows-min-owners-dialog.png)

{% hint style="info" %}
**Please note:** By default, the Minimum Number of Owners Orphaned policy vulnerability is detected when there are less than 2 active owners assigned to a workspace. If there are no active owners assigned to a workspace, the [Orphaned Workspaces](orphaned-resources-admin.md) vulnerability is detected instead.

If 1 owner is assigned to a workspace when resolving the Orphaned Workspaces vulnerability, Syskit Point will then detect the Minimum Number of Owners vulnerability.
{% endhint %}

For details on how collaborators can [**resolve Minimum Number of Owners policy vulnerability tasks**, navigate to the following article](../../point-collaborators/resolve-governance-tasks/minimum-number-of-owners.md).
