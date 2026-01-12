---
description: This article provides an overview of the Workspace Review Wizard Shadow Users step from a workspace owner's perspective.
---

# Workspace Review Shadow Users

The first screen on the Shadow Users step is the task overview. Here, you can find information on what is expected of you for this step:

* You will be asked to **review the list of shadow users connected to the workspace**. 
  * Shadow users are users who are not group members, but they have access to some content within your workspace.
  * Review all the shadow users and make sure there is no unwanted access. Reviewing shadow users helps prevent unauthorized access and data exposure. By ensuring only the right people have access, you maintain workspace security, protect sensitive information, and keep permissions clear and compliant.

* Explanation of how many sections this step has: 
  * [**Blocked Shadow Users (1)**](#remove-blocked-shadow-users) - this section is only available if the admin selected it when [setting up the Workspace Review policy](../../governance-and-automation/workspace-review/setup-workspace-review.md)
  * [**Inactive External Shadow Users (2)**](#remove-inactive-external-shadow-users) - this section is only available if the admin selected it when [setting up the Workspace Review policy](../../governance-and-automation/workspace-review/setup-workspace-review.md)
  * [**Review All Shadow Users (3)**](#review-all-shadow-users)

* **Review button (4)** you can click when ready to start your review.

![Workspace Review - Shadow Users Step - Overview](../../../static/img/workspace-review-shadow-users-step-overview.png)

## Remove Blocked Shadow Users

If the Blocked Shadow Users option was selected for this policy, after clicking the Review button, the Remove Blocked Shadow Users section opens, where you can:

* **Remove All (1)** action button next to the name of the workspace, which removes all blocked shadow users in bulk

* On the left side, there are two **filters (2)** you can use to view the list with:
  * **All** users 
  * **Internal** only 

* The columns available are: 
  * **Name (3)** - the name of the user
  * **Username (4)** - the e-mail for the user
  * **Department (5)** - the department of the user
  * **Is Deleted (6)** - whether the user was deleted
  * **Recommendation (7)** - this section provides a recommendation from Syskit Point on what actions should be taken if any notable recommendations can be made. The following recommendations could be suggested:
    * **Remove Blocked User** - a blocked user is someone whose sign-in access has been disabled by an admin. Blocked users cannot log in, and you can safely remove them from your workspace 
* **View Access (8)** action
  * Clicking this action opens the Access Details screen for this user, where you can:
    * **Remove User Access**
    * **Edit Permissions**
* **Remove Access (9)** action
  * Clicking this action removes the user's access to the workspace

**Selecting more than one workspace** lets you perform these two actions on multiple users at once.

![Workspace Review - Blocked Shadow Users Step](../../../static/img/workspace-review-shadow-users-step-blocked-section.png)

## Remove Inactive External Shadow Users

If the Inactive External Shadow Users option was selected for this policy, after clicking Next, the Remove Inactive External Shadow Users section opens, where you can:

* **Remove All (1)** action button next to the name of the workspace, which removes all inactive external shadow users in bulk

* On the left side, there are two **filters (2)** you can use to view the list with:
  * **All** users 
  * **Internal** only 

* The columns available are: 
  * **Name (3)** - the name of the user
  * **Username (4)** - the e-mail for the user
  * **Department (7)** - the department of the user
  * **Is Deleted (6)** - whether the user was deleted
  * **Recommendation (8)** - this section provides a recommendation from Syskit Point on what actions should be taken if any notable recommendations can be made. The following recommendations could be suggested:
    * **Remove Inactive External User** - an inactive external user is a shadow user outside your organization without any activity in the last 2 days
* **View Access (9)** action
  * Clicking this action opens the Access Details screen for this external user, where you can **Remove User Access**
* **Remove Access (11)** action
  * Clicking this action removes the user's access to the workspace

**Selecting more than one workspace** lets you perform these two actions on multiple guests at once.

![Workspace Review - Inactive External Shadow Users Step](../../../static/img/workspace-review-shadow-users-step-inactive-external.png)

## Review All Shadow Users

Clicking Next opens the **Review All Shadow Users** section. On this screen, the following information and actions are available:

* On the left side, there are three **filters (1)** you can use to view the list with:
  * **All**
  * **Inactive External**
  * **Internal** 
  * **Blocked**
  * **Orphaned**

* The columns available are: 
  * **Name (2)** - the name of the shadow user or workspace the shadow user is a part of
  * **Username (3)** - the e-mail for the shadow user or workspace
  * **Department (4)** - the department of the shadow user
  * **Is deleted (5)** - whether the user or workspace is deleted
  * **Recommendation (6)** - this section provides a recommendation from Syskit Point on what actions should be taken if there are any notable recommendations to be made. The following recommendations could be suggested:
    * **Remove Blocked Users** - these are shadow users whose sign-in has been disabled by an admin. They cannot log in, but you should remove their access to the workspace content to maintain a clean environment. 
    * **Remove Deleted Users** - these are shadow users who are deleted by an admin. They cannot log in, but you should remove their access to the workspace content to maintain a clean environment. 
    * **Remove Inactive External Users** - these are shadow users outside your organization who have not been active in the last 90 days. 
* **View Access (7)** action
  * Clicking this action opens the Action Details screen for the user, which shows where exactly (on which files or folders) the selected user has access to across the workspace, with the following columns:
    * **Name** of the workspace
    * **Access**, shows the type of access given
    * **Details**, shows where the user got the permission from
    * **Given Through**, shows where the permission was given through
    * **Sensitivity label**, shows which sensitivity label, if any, is assigned to the workspace
    * **Remove Access button**, which removes the access for the shadow user
* **Remove Access (8)** action
  * Clicking this action opens the Remove Group Access modal, where you have to confirm the removal of the access for the shadow user

Once you have completed the actions you decide to take, clicking Next takes you to the next step, [Sharing](sharing-step.md).

![Workspace Review - Shadow Users Step](../../../static/img/workspace-review-shadow-users-step.png)

:::info
**Please note!** 

If you are unsure of what to do at any point and want to **consult your co-reviewers, you can start a chat with them by clicking the Microsoft Teams icon in the top right corner** of the Syskit Point app. 

:::