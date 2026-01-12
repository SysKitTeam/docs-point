---
description: This article provides information on the Orphaned Users report.
---

# Orphaned Users

Syskit Point detects users who have been blocked from signing in or deleted from Microsoft Entra ID but still have access to SharePoint content, which could lead to security risks if they become active again. 

Orphaned users are **all the users who have been blocked or deleted from Microsoft Entra ID** and:
  * Have access to workspace content, or
  * Had access to workspace content and visited the SharePoint site containing that content, but lost access in the meantime

 [For more details on Orphaned Users in Syskit Point, take a look at the FAQ article.](../../faq/orphaned-users.md)

## Orphaned Users Policy 

The Orphaned Users policy is **a tenant-wide policy, and it cannot have task delegation enabled**. That means that no tasks are created to resolve this policy vulnerability, and no emails are sent to collaborators.

The Orphaned Users policy vulnerability **is still detected** and shown on the Security and Compliance dashboard. **This means that Syskit Point detects the vulnerability in a workspace** based on the policy, but it does not create tasks or send any emails to collaborators. 

There are 2 options on how to resolve the detected vulnerability:
* **Manually** - admins remove orphaned users from the Orphaned Users report accessed from the Security & Compliance dashboard.
* **Automatically** - Syskit Point removes orphaned users from workspaces; admins can define if blocked, deleted, or both types of orphaned users are removed.

[Use this link to find more information on the Orphaned Users Policy.](../automated-workflows/orphaned-users-admin.md)

## Orphaned Users Report

Here, you can find more details if you decide to manually resolve the Orphaned Users vulnerability.

On the Security & Compliance dashboard, click the **Orphaned Users** vulnerability to open the report.

The Orphaned Users screen opens, showing a list of all **users who have the sign-in blocked or are deleted from Microsoft Entra ID** without having their SharePoint permissions revoked.

The report itself provides information on:
  * **User (1)** name
  * **Detected (2)** - when the policy vulnerability was detected
  * **Username (3)** - the username of the orphaned user
  * **Status (4)** - vulnerability status
  * **Manager (5)** - the name of the person who manages the orphaned user
  * **User Status (6)** - status of the user (deleted or blocked)
  * **Workspaces (7)** - the number of workspaces this user has access to

Additionally, you can add the Email column by enabling it in the Column Chooser.   

You can complete the following actions for the policy vulnerability:
* **Click the workspaces number (8)** to open the Orphaned Users report, showing a list of workspaces where the orphaned user still has access.
* **Accept Risk (9)** - This means you will close the policy vulnerability without making any changes to the current state of the workspace.
* **Remove User (10)** - this will remove the user from the SharePoint site and connected groups, and resolve the policy vulnerability.

Here, you can also:
* **View History (11)** of all resolved vulnerabilities
  * For each user, you can see details about the performed removal actions and the policy vulnerability resolution.
* **Set Up Automation (12)** for the Orphaned Users policy.
  * Click the button to open the Orphaned Users policy settings and select from one of the available automation options.
  * Syskit Point can automatically remove deleted, blocked, or both types of orphaned users.

:::info
* **Policy vulnerability is not detected for OneDrive workspaces where the Primary admin is blocked or deleted**, as this is expected during user offboarding and similar scenarios.
* **Primary admins cannot be deleted from a workspace** automatically. This requires manual intervention and replacing the deleted or blocked Primary admin with an active user. 
:::



![Orphaned Users](../../../static/img/security-compliance-checks-orphaned-users.png)

By **selecting multiple or all users**, you can perform Remove User or Accept Risk actions in bulk.

**Clicking the Remove User** action opens the Remove User dialogue. 
  * To replace the user as Primary Admin, **select the checkbox (1)** that states *If the user is a Primary Admin replace them with*.
    * If the selected user is a Primary Admin on chosen sites/OneDrive, Microsoft does not allow their removal. In order to remove them, they have to be replaced as Primary Admin with an active user.
  * Once selected, a space is provided where you should **type the name or email of the user (2)** you want as the new Primary Admin.
* **Type REMOVE (3)** in the space provided and **click Remove (4)** to finalize your decision. 

![Orphaned Users - Remove User Action](../../../static/img/security-compliance-checks-orphaned-users-remove-user.png)

