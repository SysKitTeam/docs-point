---
description: >-
  This article explains how to use a SSL certificate with SysKit Point.
---

# Determine URL for SysKit Point web application
Decide which URL are you going to use for SysKit Point web application and prepare an SSL certificate required to make a secure https conenctions from the browser

You have different options available wether depending on which environment you are deploying SysKit Point:
* Production environment where SysKit Point is connected to your **Production** tenant
* Test environemnt where SysKit Point is connected to your **QA/Test/DEV** tenant


## Deploy SysKit Point to a production environment

**In a production environment**, **it is recommended to use**:

* **Custom Domain used in SysKit Point Web App URL**; for example, `https://point.mycustomdomain.com`
* **SSL certificate obtained from a publicly trusted SSL certificate provider**

When using such setup, make sure to:

* **Associate the SSL certificate with the custom domain used in the SysKit Point Web App URL**
* **Add a public DNS A record on your custom domain pointing to Point Virtual Machine's public IP address** 

## Deploy SysKit Point to a test environment

When configuring SysKit Point in a **test environment** you can use:

* **Azure default domain** `cloudapp.azure.com` **in SysKit Point Web App URL**; for example, `https://azurevmname.eastus.cloudapp.azure.com`
* **Self-signed certificate created by SysKit Point**

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}