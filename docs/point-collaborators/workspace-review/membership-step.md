---
description: This article provides an overview of the Workspace Review Wizard Membership step from a workspace owner's perspective.
---

# Membership Step

The first screen on the Membership step is the task overview. Here, you can find information on what is expected of you for this step:

* You will be asked to **review the list of users who have access to workspace content**, which is critical to ensuring workspace security, maintaining appropriate permissions, and streamlining collaboration within the team. 

* Explanation of how many sections this step has: **Review All members (1)**

* **Review button (2)** you can click when you are ready to start your review.

![Workspace Review - Membership Step - Overview](../../../static/img/workspace-review-membership-step-overview.png)

After clicking the Review button, the Membership Review screen opens. On this screen, the following information and actions are available:

* At the top right corner, there is a **Add Owners/Members button (1)**
  * Clicking this opens the Add Owners/Members dialog, where you can add more members or owners to the workspace

* On the left side, there are three **filters (2)** you can use to view the list with:
* **All** users 
* **Owners** only 
* **Members** only 

* The columns available are: 
  * **Name (3)** - the name of the user
  * **Username (4)** - the e-mail for the user
  * **Role (5)** - the role of the user in the workspace
  * **Last Tenant Logged In (6)** - last date the tenant with the user was logged in
  * **Department (7)** - the department of the user
  * **Recommendation (8)** - this section provides a recommendation from Syskit Point on what actions should be taken if any notable recommendations can be made. The following recommendations could be suggested:
    * **Remove Blocked Members** - a blocked member is someone whose sign-in access has been disabled by an admin. Blocked members cannot log in, and you can safely remove them from your workspace. 
    * **Remove Inactive Guests** - An inactive guest user is someone outside your organization who was inactive during the period defined in the Inactive Guest Users policy. 
* **Promote to Owner (9)** action
  * Clicking this action promotes the user from member status to owner status
* **Change to Member (10)** action
  * Clicking this action promotes the user from owner status to member status
* **Remove from Group (11)** action
  * Clicking this action removes the user from the workspace

**Selecting more than one workspace** lets you perform these two actions on multiple workspaces at once

![Workspace Review - Membership Step](../../../static/img/workspace-review-membership-step.png)

:::warning
* If the [Minimum Number of Owners](../resolve-governance-tasks/minimum-number-of-owners.md) and/or [Maximum Number of Owners](../resolve-governance-tasks/maximum-number-of-owners.md) policies were assigned as part of the Workspace Review by the Administrator, and a vulnerability on the workspace was detected, you will not be able to move forward without resolving the vulnerability. 
:::

Once you have completed the actions you decide to take, clicking Next takes you to the next step, [Shadow Users](shadow-users-step.md).

:::info
**Please note!** 

If you are unsure of what to do at any point and want to **consult your co-reviewers, you can start a chat with them by clicking the Microsoft Teams icon in the top right corner** of the Syskit Point app. 

:::
