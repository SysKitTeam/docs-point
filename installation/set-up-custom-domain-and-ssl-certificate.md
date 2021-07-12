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

1. Navigate to your newly deployed SysKit Point App Service in Azure, select Custom domains in the left-hand navigation (1) and make a record of the default assigned custom domain (2) for that App Service. 

 

2. On your public DNS registrar create a CNAME record with a desired name that points to the default custom domain name recorded in the previous step. This is what it might look like in Cloudflare DNS. 

 

3. Go back to the Azure Custom domains page and select Add custom domain (1). Enter the fully qualified domain name as Custom domain (2) and click Validate. After a few seconds you should get two green checkmarks at the bottom which means you may proceed with clicking the Add custom domain button (3). 

 

4. A new entry will be added under the Custom Domains, from where you can select Add binding (1) to add an SSL certificate for a secure connection to SysKit Point app. You can choose between uploading your .pfx certificate or importing an App Service Certificate if you have one. If you already have some certificates in Azure, you will be able to choose one from there (2). Also, choose the SNI SSL (3) type and click Add Binding (4). 

 

5. Once the binding is created, the SSL state becomes secured (1), and you should be able to access your SysKit Point app through a secure URL connection (2) - https://point-test.syskit.com in this example. 

 

 

6. For Single Sign-on (SSO) to work we need to add the new URL to the Redirect URIs of the SysKit Point Client app registration. To do that navigate to Azure Portal > App Registrations. Find the SysKit Point Client app registration and click on it, under Manage > Authentication add a new redirect URI in the format hostname + /auth, in this example it would be https://point-test.syskit.com/auth. 

 