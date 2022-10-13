---
description: This article explains how to connect a service account to SysKit Point. 
---

## Connect Service Account

**Service accounts** in SysKit Point are utilized for the Configuration Inventory module, using sensitivity labels in provisioning templates and other available features. 

To connect the service account in SysKit Point:
* **Navigate to Settings** > **General** > **Connected Tenant**
* **Switch the Connect Service Account (1) toggle on**

Once the Connect Service Account option is turned on, you can choose how to connect and authenticate your service account.

Two options are available:

* **Enter credentials (2)** option - service account should not have multi-factor authentication enabled
* **Login with Microsoft Authentication Flow (3)** - supports a service account with **Multi-factor authentication enabled** 

![Connect Service Account](../.gitbook/assets/connect-service-account_toggle.png)

  * To enable multi-factor authentication, follow the instructions in [this article](https://support.microsoft.com/en-us/office/set-up-your-microsoft-365-sign-in-for-multi-factor-authentication-ace1d096-61e5-449b-a875-58eb3d74de14).


If credentials are selected, additional fields are displayed where you can:
* **Enter service account email address (1)**
* **Enter service account password (2)**
* **Click the Connect button (3)** to finish

![Service Account Credentials](../.gitbook/assets/connect-service-account_credentials.png)

**After a successful connection, the connect button turns green and shows a checkmark (1).**

![Service Account Credentials](../.gitbook/assets/connect-service-account_checkmark.png)


If logging in with Microsoft Authentication Flow is selected, a pop-up will appear requesting the **sign-in information (1)** for the service account. 

![Service Account Credentials](../.gitbook/assets/connect-service-account_MFA.png)

Once the account is successfully connected, you will see the email listed stating it is a **Connected Account (2)**

![Service Account Credentials](../.gitbook/assets/connect-service-account_MFA-connected.png).