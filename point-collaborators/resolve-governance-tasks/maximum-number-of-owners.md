---
description: This article explains how to resolve the Maximum number of Owners policy violation.
---

# Maximum Number of Owners

**This article shows how Microsoft Teams and Microsoft 365 Group owners can resolve a policy violation regarding the maximum number of owners** allowed by the organization’s policy defined in Syskit Point.

This task helps you identify which sites, teams or groups have more than 5 owners. To avoid risks associated with having too many owners assigned, it's important to stay up to date with all current owners. 

{% hint style="success" %}
By default, **Syskit Point suggests that Microsoft Teams and Microsoft 365 Groups should have no more than 5 owners** since no one feels accountable for access and content management if there are too many owners.
[Syskit Point Administrators can change the maximum number of allowed owners to fit the organization’s policies.](set-up-policies.md)
{% endhint %}

When Syskit Point detects that Microsoft Teams or Microsoft 365 Groups, which you are the owner of, have too many owners, **you will receive an e-mail to resolve the policy violation**.

## Policy Violation E-mail

**Syskit Point sends an e-mail to existing owners** when there are Microsoft Teams or Microsoft 365 Groups that have more than the maximum number of owners assigned, as defined in the policy settings. The e-mail includes a list with all of the workspaces where the policy violation was detected.

You can find the following information in the e-mail:
* **Due date to resolve the policy violation (1)**; you have 15 workdays to resolve the policy violation
* **Microsoft Teams** or **Microsoft 365 Group where the policy violation was detected (2)**
* **Resolve button (3) that takes you to Syskit Point**, where you can resolve the policy violation

![Policy Violation E-mail](../../.gitbook/assets/maximum-number-of-owners-email.png)

**Click the Resolve button to open the policy violation task** in Syskit Point.

## Policy Violation Task

Along with the e-mail, Syskit Point creates a policy violation task that provides you with all information and actions needed to resolve the policy violation. 
The following is available on the task screen:
* **Search (1)**, which can help you to find existing owners
* **Change to Member action (2)**; once clicked, an appropriate **message appears next to the former owner along with the Undo action (3)** 
* **Let other owners decide button (4)**, which will **result in you staying an owner and completing your policy violation task** while **leaving the task for other owners** to decide whether they want to renounce their ownership or change other owners to members
* **Resolve button (5)** that gets **enabled when you change owners to members to comply with the company policy** regarding the maximum number of owners; **once clicked, a dialog opens, enabling you to input a comment and resolve the policy violation**

![Policy Violation Task](../../.gitbook/assets/maximum-number-of-owners-policy-violation-task.png)

{% hint style="warning" %}
**Please note!**  
**When you click an action within the policy violation task, think of it as a preview** of what will happen after resolving the policy violation.
**All actions that change users' access are performed after you click the Resolve button**. 
{% endhint %}

## Policy Violation Resolved 

**After you resolve the policy violation, the History screen opens**, giving you an overview of all actions performed within the workflow.

![Policy Violation History Screen](../../.gitbook/assets/maximum-number-of-owners-workflow-history.png)

**After you resolve the policy violation, a confirmation e-mail is also sent to owners**, showing the following information:
* **Microsoft Teams or Microsoft 365 Group where an owner resolved the policy violation (1)**
* **Who and when (2) resolved the policy violation**
* **View Details button (3)** that **opens the History screen** in Syskit Point, showing all the activities that were performed within the workflow

![Policy Violation Resolved - E-mail](../../.gitbook/assets/maximum-number-of-owners-resolved-email.png)
