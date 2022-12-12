---
description: >-
  This article explains how to enable and configure the Automated Access Review
  in SysKit Point.
---

# Enable Automated Access Review

To use the advantages of Automated Access Review in SysKit Point, first, you need to:

* **set up e-mail settings**
* **enable SysKit Point Collaborators role**

{% hint style="warning" %}
**Please note!**\
Only users assigned to the **SysKit Point Admin** role can access and configure Settings in SysKit Point.
{% endhint %}

To start with the configuration, open the **Settings** > **Governance** > **Access Review** screen. Initially, you may find the Access Review settings screen displaying the following warnings:

![Settings - Access Review screen](../../.gitbook/assets/enable-permissions-review\_settings.png)

Clicking the tiles in the **Additional Actions Required** section redirects to the appropriate settings screen.

## Set Up E-Mail

As a part of the Automated Access Review process, e-mails are sent to SysKit Point Admin and SysKit Point Collaborator users. For SysKit Point to be able to send e-mails, you need to configure the sending method. Two options are available:

* **Exchange Online**
* **SMTP** - Simple Mail Transfer Protocol

{% hint style="warning" %}
**Please Note!**\
The e-mail address set up in this section will appear in the **Sent from** field in all e-mails sent from SysKit Point.
{% endhint %}

### Exchange Online Settings

{% hint style="warning" %}
**Please Note!**\
Exchange Online has a sending limit of 10000 e-mails per day.
{% endhint %}

The Exchange Online method enables you to use an existing Exchange account in your Microsoft 365 tenant to send e-mails from SysKit Point. Here, you can:

* **enter a valid e-mail address in the Sent from field (1)**
* **choose whether to save e-mails sent by SysKit Point to the Sent items folder (2)**; by default, this option is turned on, meaning that all e-mails sent from SysKit Point will be stored in the **Sent** mailbox folder of the entered Exchange account
* **Send a test e-mail (3)** to check if the entered e-mail address is working properly

![Exchange Online e-mail Settings screen](../../.gitbook/assets/enable-permissions-review\_exchange-online-settings.png)

After clicking the **Send test e-mail** button, the **Sent test e-mail** dialog opens. Here, **enter the e-mail address to which you want to send** the test e-mail. After a moment, you should receive an e-mail like the one pictured below.

![Test e-mail](<../../.gitbook/assets/enable-permissions-review\_test-email (1) (2) (2) (3) (4) (4) (4) (6) (8) (2) (1).png>)

Click the **Save** button to store your e-mail settings.

### SMTP Settings

Select the **SMTP method** if you are using an **SMTP** server in your environment. Here, you can enter the SMTP properties:

* **Outgoing Server**
* **Port**
* **Sent from** e-mail
*   **Username** and **Password**; in case the **Require Authentication** option is enabled

    You can also choose whether to **Use Encrypted Connection (SSL)**.

![SMTP e-mail Settings screen](../../.gitbook/assets/enable-permissions-review\_smtp-settings.png)

You can check if the entered data is correct by **sending a test e-mail**.

Click the **Save** button once you confirm you received the test e-mail.

## Enable SysKit Point Collaborators

To enable Teams and Groups owners and site administrators to perform the Access Review on their sites, you need to enable them to access SysKit Point. To do so, navigate to the **Settings** > **Security** > **Manage Access** screen. Here you should:

* **click the toggle to enable the SysKit Point Collaborators role (1)** - this will allow Teams owners, Group owners, and site administrators to access SysKit Point and to manage their workspaces
* **check the Add users with Full Control option (2)** if you want to enable users with full control privileges to access SysKit Point; **this is needed in case you want to enable users in the Site Owners SharePoint group to perform access reviews**

![Manage Access Settings screen](../../.gitbook/assets/enable-permissions-review\_manage-access-settings.png)

For more information about role-based access in SysKit Point, go to the [following article](../../configuration/enable-role-based-access.md).

## Next Steps

Once you are finished with the e-mail and Collaborators role configuration, continue to the [Create and Apply Access Review Policies](create-apply-access-review-policies.md) article.

For information on SysKit Point Collaborators completing Access Review tasks, take a look at the [Perform Access Review Tasks article](../../point-collaborators/access-review.md).
