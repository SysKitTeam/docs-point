---
description: This article explains how to set up e-mail settings in SysKit Point.
---

# Set Up E-Mail

**SysKit Point sends e-mails** to owners, administrators and, other users when automated workflows are enabled.
Here you can find all the information needed to successfully configure e-mail settings, which SysKit Point will use to send the e-mails.  

{% hint style="warning" %}
**Please note!**  
Only users assigned to the **SysKit Point Admin** role can access and configure Settings in SysKit Point.
{% endhint %}

For SysKit Point to be able to send e-mails, you need to configure the sending method. Two options are available:

* **Exchange Online** 
* **SMTP** - Simple Mail Transfer Protocol

{% hint style="warning" %}
**Please Note!**  
E-mail address set up in this section will appear in the **Sent from** field in all e-mails sent from SysKit Point.
{% endhint %}

## Exchange Online Settings

{% hint style="warning" %}
**Please Note!**  
Exchange Online has a sending limit of 10000 e-mails per day.
{% endhint %}

The Exchange Online method enables you to use an existing Exchange account in your Microsoft 365 tenant to send e-mails from SysKit Point. Here, you can:

* **enter a valid e-mail address in the Sent from field \(1\)**
* **choose whether to save e-mails sent by SysKit Point to the Sent items folder \(2\)**; by default, this option is turned on, meaning that all e-mails sent from SysKit Point will be stored in the **Sent** mailbox folder of the entered Exchange account
* **Send a test e-mail \(3\)** to check if the entered e-mail address is working properly

![Exchange Online e-mail Settings screen](../.gitbook/assets/enable-permissions-review_exchange-online-settings.png)

After you click the **Send test e-mail** button, the **Sent test e-mail** dialog opens. Here, **enter the e-mail address to which you want to send** the test e-mail. After a moment, you should receive an e-mail like the one pictured below.

![Test e-mail](../.gitbook/assets/enable-permissions-review_test-email%20%281%29%20%282%29%20%282%29%20%283%29%20%284%29%20%284%29%20%284%29%20%286%29%20%288%29%20%282%29%20%286%29.png)

Click the **Save** button to store your e-mail settings.

## SMTP Settings

Select the **SMTP method** if you are using an **SMTP** server in your environment. Here, you can enter the SMTP properties:

* **Outgoing Server**
* **Port**
* **Sent from** e-mail
* **Username** and **Password**; in case the **Require Authentication** option is enabled

  You can also choose whether to **Use Encrypted Connection \(SSL\)**.

![SMTP e-mail Settings screen](../.gitbook/assets/enable-permissions-review_smtp-settings.png)

You can check if the entered data is correct by **sending a test e-mail**.

Click the **Save** button once you confirm that the test e-mail was received.