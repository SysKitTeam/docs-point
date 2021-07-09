---
description: This article explains how you can connect to your tenant and start using SysKit Point. 
---

Follow the instructions to connect to tenant and start using SysKit Point.

1. Navigate to the __Register SysKit Point__ page by clicking __Web App URL__. 

2. Click the __Open Azure Active Directory__ button from the first step which will navigate you to the Azure Active Directory __App registrations__. 

3. In the Azure Active Directory App registrations page click __New registrations__ to register SysKit Point.  

4. For the __Name__ enter the SysKit Point installer. 

5. For the __Supported account types__ select __Accounts in this organizational directory only (Single tenant)__.
 
6. In the __Redirect URI__ section select __Single-page Application (SPA)__ and paste the __URL__ copied from the second step in the Register SysKit Point page.  

7. Click __Register__. 

8. Once you registered the app, copy the __Application ID__ (client ID) and __Directory ID__ (tenant ID) and paste them to the input fields in the third step in the Register SysKit Point page. 

9. Click the __Register__ button on the Register SysKit Point Page. 

You need to provide a Microsoft 365 __Global Admin__ account. This account will be used only for the initial setup; Point does not store any passwords you enter here. SysKit Point upgrades don't need Global Admin account.

When you first connect to your tenant, SysKit Point will request permissions to collect data from your Microsoft 365 environment.

To continue, check the __Consent on behalf of your organization option (1)__, and click the __Accept button (2)__. A new page opens where you can choose which information would you like to collect when it comes to your Microsoft 365 environment:

* __Automatic Discovery__ – by default, SysKit Point continuously monitors your Microsoft 365 environment and shows you the latest data. SharePoint Online sites and Microsoft 365 Groups data will always be monitored. This setting cannot be modified.
* __Autodiscover OneDrive (1)__ – by default, SysKit Point will collect information and report on the users' OneDrive activity, content, and sharing. To stop collecting OneDrive data, uncheck this option.
* __Protect OneDrive privacy (2)__ – When enabled, SysKit Point will only show general information about the user's OneDrive, such as used storage. SysKit Point Admins won't be able to access any OneDrive content and personal data. By default, this option is disabled.
__Store audit logs (3)__ – SysKit Point will also collect all audit logs to monitor internal and external user activities and changes and store them on a hard drive. To stop storing audit logs, uncheck this option.
* __Protect user privacy (4)__ - When enabled, user activity data will be hidden from SysKit Point and protected from Administrator supervision. By default, this option is disabled.

{% hint style="success" %}
You can change these options anytime by going to __Settings - General – Connected Tenant – Manage Connection__ in SysKit Point application.
{% endhint %}

{% hint style="warning" %}
**Please note!**  
For SysKit Point to collect, process, and save audit logs, auditing has to be enabled in your tenant. [Navigate here to find out how to turn on auditing.](../../faq/turn-on-auditing.md)
{% endhint %}

{% hint style="warning" %}
**Why do I need to provide a global admin account?**  
You can find answers in the [following article](../../requirements/permission-requirements.md#microsoft-365).
{% endhint %}

10. Click the __Connect__ button and wait for the app to initialize. This could take a while. Do not refresh the page.  

After the app initialization is completed, you’ll be redirected to the __Welcome Home__ page. 

 