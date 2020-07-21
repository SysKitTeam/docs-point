---
description: >-
  This article provides a full overview of the manual permissions review process
  in SysKit Point.
---

# Manually Request Permissions Review in SysKit Point

**Permissions review**, in the context of Office 365 environment, is an activity where a person responsible for an Office 365 resource - be it Communication site, Microsoft Team, Office 365 Group or OneDrive - checks whether permissions, given to users inside \(internal\) and outside \(external\) of company, comply with the organizational rules and guidelines.

While the **Automated Permissions Review** was introduced in SysKit Point 14, SysKit Point 15 brings the **Manually Requested Permissions Review** to the table.

{% hint style="warning" %}
**Please note!**  
Manual Permissions Review is available only in the Enterprise subscription plan.
{% endhint %}

To use the manually requested Permissions Review, first, ensure the [**Automated Permissions Review is enabled**](../installation-and-configuration/enable-permissions-review.md).

{% hint style="success" %}
Use **Manual Permissions Review** in situations **when you need fast response on an urgent issue**, such as sudden offboarding of a user, or unauthorized external sharing, where you want a resource to be checked as soon as possible.  
You can also **use the Manual Permissions Review to test and prepare** your users for the **Automated Permissions Review**.
{% endhint %}

{% hint style="info" %}
**Learn more!**  
To find more about the Automated Permissions Review, visit the [following article](permissions-review.md).
{% endhint %}

## Request Review

To manually create a Permissions Review, use the **Request Review action**, **available for SysKit Point Admin users** on the following screens:

* **Sites overview**
* **Microsoft Teams & Groups overview**
* **Site or Group details**

{% hint style="warning" %}
**Please note!**  
You must be signed in to SysKit Point with a SysKit Point Admin account to see the Request Review action.
{% endhint %}

To manually request a Permissions Review, do the following:

* **Open the Sites Overview screen**
* **Select the desired resource \(1\)**; you can also select multiple resources at once
* **Click the Request Review Action \(2\)** available in the side panel

![Request Review action](../.gitbook/assets/manually-request-permissions-review_2.png)

Request Permissions Review dialog will appear.

![Request Permissions Review dialog](../.gitbook/assets/manually-request-permissions-review_3.png)

After confirming the request, you will be redirected to the Permissions Review overview screen, where you can [monitor the progress](monitor-permissions-review.md) of the created Permissions Review.

![Permissions Review overview screen](../.gitbook/assets/manually-request-permissions-review_4.png)

## Resource Owners Flow

After the manual permissions review request was sent, **the resource owners receive a Permissions Review request e-mail** in their mailbox. 

![Permissions Review email](../.gitbook/assets/manually-request-permissions-review_5.png)

Link in the email leads you directly to the Permissions Review task in SysKit Point. Here, you can:
* **select the resource \(1\)**
* **perform the Permissions Review \(2\)**

![Permissions Review task screen](../.gitbook/assets/manually-request-permissions-review_6.png)

The Permission Review details screen opens, where you can perform actions, check permission changes, and, in the end, complete the Permissions Review. Actions and reports available here are the same as in the Automated Permissions Review tasks. You can find them all described in greater detail [here](permissions-review.md#permissions-review-task-details).

![Permissions Review task screen](../.gitbook/assets/manually-request-permissions-review_7.png)

If a resource has a Permissions Review active, you can access the Permissions Review details screen from the Overview screen by clicking the **Review Now \(1\)** action link, visible when the resource is selected. This opens the Permissions Review details screen.

![Permissions Review task screen](../.gitbook/assets/manually-request-permissions-review_10.png)

