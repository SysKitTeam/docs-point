---
description: This article provides a full overview of the manual access review process in SysKit Point.
---

# Manually Request Access Review in SysKit Point

**Access review**, in the context of the Microsoft 365 environment, is an activity where a person responsible for an Microsoft 365 resource - be it Communication site, Microsoft Team, Microsoft 365 Group, or OneDrive - checks whether permissions, given to users inside \(internal\) and outside \(external\) of company, comply with the organizational rules and guidelines.

While the **Automated Access Review** was introduced in SysKit Point 14, SysKit Point 15 brings the **Manually Requested Access Review** to the table.

{% hint style="warning" %}
**Please note!**  
Manual Access Review is available only in the Enterprise subscription plan.
{% endhint %}

{% hint style="success" %}
Use **Manual Access Review** in situations **when you need a fast response on an urgent issue**, such as sudden offboarding of a user, or unauthorized external sharing, where you want a resource to be checked as soon as possible.  
You can also **use the Manual Access Review to test and prepare** your users for the **Automated Access Review**.
{% endhint %}

{% hint style="info" %}
**Learn more!**  
To find more about the Automated Access Review, visit the [following article](permissions-review.md).
{% endhint %}

## Request Review

To manually create an Access Review, use the **Request Review action**, **available for SysKit Point Admin users** on the following screens:

* **Sites overview**
* **Microsoft Teams & Groups overview**
* **Site or Group details**

{% hint style="warning" %}
**Please note!**  
You must be signed in to SysKit Point with a SysKit Point Admin account to see the Request Review action.
{% endhint %}

To manually request an Access Review, do the following:

* **Open the Sites Overview screen**
* **Select the desired resource \(1\)**; you can also select multiple resources at once
* **Click the Request Review Action \(2\)** available in the side panel

![Request Review action](../../.gitbook/assets/manually-request-permissions-review_request-review.png)

Request Access Review dialog will appear.

![Request Access Review dialog](../../.gitbook/assets/manually-request-permissions-review_request-review-dialog.png)

After confirming the request, you will be redirected to the Access Review overview screen, where you can:

* **Select a site, Microsoft 365 Group, or Microsoft Team \(1\)**; you can also select multiple resources at once
* **Review the resource \(2\)** - only available for owners and administrators when a single resource is selected
* **View the Access Review Details \(3\)** 

![Access Review overview screen](../../.gitbook/assets/manually-request-permissions-review_review-overview.png)

To see all Manually Requested Reviews, follow these steps:

* **From the Home screen, click the Governance tile**; the Governance screen opens
* **click the Manually Requested Reviews category \(1\)**
* **click the See Details button \(2\)** to open the Access Review report 

![Governance - Manually Requested Reviews](../../.gitbook/assets/manually-request-permissions-review_governance.png)

The Access Review report for manually requested reviews offers the same capabilities as for the automated Access Review. You can find more information on how to [monitor the progress of the created Access Reviews here](monitor-permissions-review.md).

## Resource Owners

After the manual Access Review request was sent, **the resource owners receive an Access Review request e-mail** in their mailbox.

![Access Review email](../../.gitbook/assets/manually-request-permissions-review_email.png)

The link in the email leads you directly to the Access Review task in SysKit Point. Here, you can:

* **select a resource \(1\)**
* **perform the Access Review \(2\)**

![Access Review task screen](../../.gitbook/assets/manually-request-permissions-review_task.png)

The **Access Review wizard** opens, where you can **perform actions**, **check permission changes**, and, in the end, **complete the Access Review** for a resource. Actions and reports available here are the **same as in the Automated Access Review** tasks. You can find them all described in greater detail [here](permissions-review.md#permissions-review-task-details).

![Access Review wizard](../../.gitbook/assets/manually-request-permissions-review_wizard.png)

If a resource has an Access Review active, you can access the Access Review details screen from the overview screen by clicking the **Review Now \(1\)** action link, visible when the resource is selected.

![Review Now action](../../.gitbook/assets/manually-request-permissions-review_review-now.png)

