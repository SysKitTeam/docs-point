---
description: This article describes how SysKit Point enables you to track Microsoft Teams activity in your tenant.
---

# Enable Microsoft Teams Activity Tracking

**SysKit Point** gives you the possibility to **discover which of your Microsoft Teams are not being actively used**. To collect necessary data, first, SysKit Point Admin has to **send a request to access Protected APIs in Microsoft Teams**. Protected APIs make it possible for SysKit Point to **detect inactive Microsoft Teams based on the date of the last message.**

{% hint style="warning" %}
**Please note!  
SysKit Point does not read or store Microsoft Teams' chat messages** while collecting activity data. **Only the date and time data is collected and stored** in the SysKit Point database.
{% endhint %}

To learn more about Protected APIs in Microsoft Teams, read the [following article](https://docs.microsoft.com/en-us/graph/teams-protected-apis).

## Sending the Access Request Form

**After you log in to SysKit Point** with a SysKit Point Admin account, you’ll **receive a message** on the bottom of the Home screen, notifying you about the **newly available feature**.  
Click the **Configure Now** link to proceed with the initial configuration.

![Home Screen - Detect Inactive Teams message](../.gitbook/assets/teams_activity-admin_message%20%281%29%20%284%29%20%284%29%20%282%29%20%281%29%20%285%29.png)

The **Settings** &gt; **Governance** &gt; **Content Lifecycle** **settings page** opens. Here, you can find the current **Status** **\(1\)** information, the **Show Information button \(2\)** which will give you all data to successfully fill the Microsoft Access Request form, and the **Fill Microsoft Request button \(3\)** that opens the before mentioned Microsoft Access Request form.

![SysKit Point Settings - Content Lifecycle page](../.gitbook/assets/teams_activity-settings%20%283%29%20%283%29%20%281%29%20%284%29%20%283%29%20%284%29.png)

In case the Access Request was not yet approved, the following status is displayed:  
`Approval From Microsoft Needed`

{% hint style="warning" %}
**Please note!**  
The status will not change after you fill in the Access request form; it will change automatically after the Access Request is approved.
{% endhint %}

Click the **Show Information button**. A dialog is displayed giving you all the information needed to fill the Access Request form. Click the **Fill Microsoft Request button \(1\)** to **open the Request Access form in a new tab \(3\)**. In SysKit Point, click the **Copy link \(2\)** available next to each value, and **paste in the corresponding text field in the Access Request form \(4\)**. Once you fill the Access Request form, click the **Submit button \(5\)** to send.

![Prepared information in SysKit Point &amp; Access Request Form](../.gitbook/assets/microsoft-teams-activity_information-and-form%20%281%29%20%284%29%20%284%29%20%281%29%20%282%29.png)

{% hint style="warning" %}
**Please note!**  
It may take up to 10 days for Microsoft to review your request.
{% endhint %}

## Getting Access to Protected APIs

Once the access to Microsoft Teams protected APIs has been approved, you will receive an email.

![Access approval email ](../.gitbook/assets/teams_activity-approval_email%20%283%29%20%283%29%20%283%29%20%281%29.png)

**From now onward**, when SysKit Point collects activity data, **Microsoft Teams activity data will also be collected**. This happens **every day after working hours**, in order to reduce the load on your Microsoft 365 environment. You will also notice that the **Detect inactive Teams message is no longer visible** after you log in to SysKit Point with a SysKit Point Admin account. On the **Settings** &gt; **Governance** &gt; **Content Lifecycle** screen, the **Microsoft Teams status is now set to Detecting Activity**.

![Microsoft Teams - Detecting Activity status](../.gitbook/assets/microsoft-teams-activity_detecting-activity%20%283%29%20%283%29%20%281%29%20%284%29%20%282%29%20%281%29.png)

To learn where to find activity information in SysKit Point, continue to the [Identify Inactive Content article](inactive-content.md).

To learn more about protected APIs in Microsoft Teams, [click here](https://docs.microsoft.com/en-us/graph/teams-protected-apis).

