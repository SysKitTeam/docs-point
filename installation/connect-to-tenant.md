---
description: This article explains how you can connect to your tenant and start using SysKit Point. 
---

1. Navigate to the Register SysKit Point page by clicking __Web App URL__. 

2. Click the __Open Azure Active Directory__ button from the first step which will navigate you to the Azure Active Directory __App registrations__. 

3. In the Azure Active Directory App registrations page click __New registrations__ to register SysKit Point.  

4. For the __Name__ enter the SysKit Point installer. 

5. For the __Supported account types__ select __Accounts in this organizational directory only (Single tenant)__ 
 
6. In the __Redirect URI__ section select __Single-page Application (SPA)__ and paste the URL copied from the second step in the Register SysKit Point page.  

7. Click __Register__. 

8. Once you registered the app, copy the __Application ID__ (client ID) and __Directory ID__ (tenant ID) and paste them to the input fields in the third step in the Register SysKit Point page. 

9. Click the __Register__ button on the Register SysKit Point Page. 

You need to provide a Microsoft 365 __Global Admin__ account. This account will be used only for the initial setup; Point does not store any passwords you enter here. 

When you first connect to your tenant, SysKit Point will request permissions to collect data from your Microsoft 365 environment. 