---
description: This article explains how to set up custom domain and ssl certificate.
---

# SysKit Point App Service Custom Domain and SSL Certificate Setup

Here are the instructions on how to make your SysKit Point web application publicly available on a custom domain and how to configure a secure access connection by setting up an SSL certificate.

## Prerequisites 

* SysKit Point app deployed as App Service in Azure 

* Custom domain added to your Azure Active Directory 

* Access to your public DNS hosting provider 

* SSL certificate  

## Steps 

1. Navigate to your newly deployed SysKit Point App Service in Azure, select __Custom domains (1)__ in the left-hand navigation  and make a record of the default __assigned custom domain (2)__ for that App Service. 

2. On your public __DNS registrar__ create a __CNAME__ record with a desired name that points to the default custom domain name recorded in the previous step. This is what it might look like in Cloudflare DNS. 

3. Go back to the Azure Custom domains page and select __Add custom domain (1)__. Enter the fully qualified domain name as __Custom domain (2)__ and click __Validate__. After a few seconds you should get two green checkmarks at the bottom which means you may proceed with clicking the __Add custom domain (3)__ button. 

4. A new entry will be added under the Custom Domains, from where you can select __Add binding (1)__ to add an SSL certificate for a secure connection to SysKit Point app. You can choose between uploading your __.pfx certificate__ or importing an __App Service Certificate__ if you have one. If you already have some __certificates in Azure__, you will be able to __choose one from there (2)__. Also, choose the __SNI SSL (3)__ type and click __Add Binding (4)__. 

5. Once the binding is created, the __SSL state becomes secured (1)__, and you should be able to access your SysKit Point app through a __secure URL connection (2)__ - https://point-test.syskit.com in this example. 

6. For Single Sign-on (SSO) to work we need to add the new URL to the Redirect URIs of the SysKit Point Client app registration. To do that navigate to __Azure Portal > App Registrations__. Find the __SysKit Point Client__ app registration and click on it, under __Manage > Authentication__ add a new redirect URI in the format __hostname + /auth__, in this example it would be https://point-test.syskit.com/auth. 

 