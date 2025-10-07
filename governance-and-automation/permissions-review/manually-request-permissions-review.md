---
description: This article provides a full overview of the manual access review process in Syskit Point.
---

# Manually Request Access Review in Syskit Point

{% hint style="warning" %}
 
With the introduction of the [Workspace Review](../workspace-review/setup-workspace-review.md) **we slowly begin fading out our Access Review**. The Syskit Point Workspace Review **lets workspace owners complete more than just an access review** on their workspace; depending on the configuration, you can **have owners check over the ownership, privacy, sensitivity and overall security of their workspaces as part of a Workspace Review**.
 
**Access Review will be fully removed from Syskit Point by January 2027.** Make sure you've finished all your Access Reviews by that point and created at least one Workspace Review policy. 
 
{% endhint %}

**Access review**, in the context of the Microsoft 365 environment, is an activity where a person responsible for a Microsoft 365 workspace - be it a Communication site, Microsoft Team, Microsoft 365 Group, or OneDrive - checks whether permissions given to users inside \(internal\) and outside \(external\) of company, comply with the organizational rules and guidelines.

While the **Automated Access Review** was introduced in Syskit Point 14, Syskit Point 15 brings the **Manually Requested Access Review** to the table.

{% hint style="success" %}
Use **Manual Access Review** in situations **when you need a fast response on an urgent issue**, such as sudden offboarding of a user, or unauthorized external sharing, where you want a workspace to be checked as soon as possible.  
You can also **use the Manual Access Review to test and prepare** your users for the **Automated Access Review**.
{% endhint %}

{% hint style="info" %}
**Learn more!**  
To find more about the Automated Access Review, visit the [following article](enable-permissions-review.md).
{% endhint %}

## Request Review

To manually create an Access Review, use the **Request Review action**, **available for Syskit Point Admin users** on the following screens:

* **Sites overview**
* **Microsoft Teams & Groups overview**
* **Site or Group details**

{% hint style="warning" %}
**Please note!**  
You must be signed in to Syskit Point with a Syskit Point Admin account to see the Request Review action.
{% endhint %}

To manually request an Access Review, do the following:

* **Open the Sites Overview screen**
* **Select the desired workspace \(1\)**; you can also select multiple workspaces at once
* **Click the Request Review Action \(2\)** available in the side panel

![Request Review action](../../.gitbook/assets/manually-request-permissions-review-request-review.png)

Request Access Review dialog will appear.

![Request Access Review dialog](../../.gitbook/assets/manually-request-permissions-review-request-review-dialog.png)

After confirming the request, you will be redirected to the Access Review overview screen, where you can:

* **Select a site, Microsoft 365 Group, or Microsoft Team \(1\)**; you can also select multiple workspaces at once
* **Review the workspace \(2\)** - only available for owners and administrators when a single workspace is selected
* **View the Access Review Details \(3\)** 

![Access Review overview screen](../../.gitbook/assets/manually-request-permissions-review-review-overview.png)

To see all Manually Requested Reviews, follow these steps:

* **Click the Governance tile** located on the left side of the screen; the Governance screen opens
* **Click the Manually Requested Reviews category \(1\)**
* **Click the See Details button \(2\)** to open the Access Review report 

![Governance - Manually Requested Reviews](../../.gitbook/assets/manually-request-permissions-review-governance.png)

The Access Review report for manually requested reviews offers the same capabilities as for the automated Access Review. You can find more information on how to [monitor the progress of the created Access Reviews here](monitor-permissions-review.md).

## Workspace Owners

After the manual Access Review request is sent, **the workspace owners will receive an Access Review request e-mail** in their mailbox.

![Access Review email](../../.gitbook/assets/manually-request-permissions-review-email.png)

The link in the email leads you directly to the Access Review task in Syskit Point. Here, you can:

* **select a workspace \(1\)**
* **perform the Access Review \(2\)**

![Access Review task screen](../../.gitbook/assets/manually-request-permissions-review-task.png)

The **Access Review wizard** opens, where you can **perform actions**, **check permission changes**, and, in the end, **complete the Access Review** for a workspace. Actions and reports available here are the **same as in the Automated Access Review** tasks. You can find them all described in greater detail [here](../../point-collaborators/resolve-governance-tasks/access-review.md#access-review-wizard).

![Access Review wizard](../../.gitbook/assets/manually-request-permissions-review-wizard.png)

If a workspace has an Access Review active, you can access the Access Review details screen from the overview screen by clicking the **Review Now \(1\)** action link, visible when the workspace is selected.

![Review Now action](../../.gitbook/assets/manually-request-permissions-review-review-now.png)

