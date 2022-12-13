---
description: >-
  This article describes how SysKit Point enables you to track Microsoft Teams
  activity in your tenant.
---

# Enable Microsoft Teams Activity Tracking

**SysKit Point** enables you to easily **discover which of your Microsoft Teams are not being actively used**.

This provides regular insight on when a workspace should be assessed to determine any possible value for the future with options to **keep, archive or delete the workspace**. These reviews can be **automated** and will be sent to owners when SysKit Point detects a workspace is inactive.

To start collecting all the necessary data, first, the SysKit Point Admin has to **send a request to access Protected APIs in Microsoft Teams**. Protected APIs make it possible for SysKit Point to **detect inactive Microsoft Teams based on the date of the last message.**

{% hint style="warning" %}
**Please note!**\
**SysKit Point does not read or store Microsoft Teams' chat messages** while collecting activity data. **Only the date and time data is collected and stored** in the SysKit Point database.
{% endhint %}

To learn more about Protected APIs in Microsoft Teams, read the [following article](https://docs.microsoft.com/en-us/graph/teams-protected-apis).

## Sending the Access Request Form

**After you log in to SysKit Point** with a SysKit Point Admin account, you’ll **receive a message** on the bottom of the Home screen, notifying you about the **newly available feature**.\
Click the **Configure Now** link to proceed with the initial configuration.


![Home Screen - Detect Inactive Teams message](<../.gitbook/assets/teams\_activity-admin\_message (1) (4) (4) (2) (1) (2).png>)

The **Settings** > **Governance** > **Lifecycle Management** **settings page** opens. Here, you can find the current **Status** **(1)** information, the **Show Information button (2)**, which will give you all data to successfully fill the Microsoft Access Request form, and the **Fill Microsoft Request button (3)** that opens the before mentioned Microsoft Access Request form.

![SysKit Point Settings - Lifecycle Management page](../.gitbook/assets/teams\_activity-settings.png)

In case the Access Request was not yet approved, the following status is displayed:\
`Approval From Microsoft Needed`

{% hint style="warning" %}
**Please note!**\
The status will not change after you fill in the Access request form; it will change automatically after the Access Request is approved.
{% endhint %}

Click the **Show Information button**. A dialog is displayed, giving you all the information needed to fill out the Access Request form.

* Click the **Fill Microsoft Request button (1)**; this will **open the Request Access form in a new tab (3)**.
* Return to SysKit Point for information needed to fill out the form.
  * Click the **Copy link (2)** available next to each value.
  * **Paste it in the corresponding text field within the Access Request form (4)**.
* Once you fill out the Access Request form, click the **Submit button (5)** to send.

![Prepared information in SysKit Point & Access Request Form](../.gitbook/assets/microsoft-teams-activity\_information-and-form.png)

{% hint style="warning" %}
**Please note!**\
It may take up to 10 days for Microsoft to review your request.
{% endhint %}

## Getting Access to Protected APIs

Once the access to Microsoft Teams protected APIs has been approved, you will receive an email.


![Access approval email](<../.gitbook/assets/teams\_activity-approval\_email (3) (3) (3) (1).png>)

**From now onward**, when SysKit Point collects activity data, **Microsoft Teams activity data will also be collected**. This happens **every day after working hours** in order to reduce the load on your Microsoft 365 environment. You will also notice that the **Detect inactive Teams message is no longer visible** after you log in to SysKit Point with a SysKit Point Admin account. On the **Settings** > **Governance** > **Lifecycle Management** screen, the **Microsoft Teams status is now set to Detecting Activity**.

![Microsoft Teams - Detecting Activity status](../.gitbook/assets/microsoft-teams-activity\_detecting-activity.png)

To learn where to find activity information in SysKit Point, continue to the [Identify Inactive Content article](../governance-and-automation/lifecycle-management/inactive-content.md).

To learn more about protected APIs in Microsoft Teams, [click here](https://docs.microsoft.com/en-us/graph/teams-protected-apis).
