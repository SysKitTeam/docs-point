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

In a production environment, **it is recommended to use** a **SSL certificate obtained from a publicly trusted SSL certificate provider** and the **URL which will be recognisable by your users**. You can choose from **two options** for your URL:

* **Recommended** - Use a **Custom domain** for SysKit Point web application URL, for example,  `https://point.YourCompanyDomain.com`
* Use an **Azure default domain** for SysKit Point web application URL, for example, `https://AzureVmName.eastus.cloudapp.azure.com`

### Use a custom domain for SysKit Point
To use SysKit Point with a custom domain perform the following steps:
* **Add a public DNS A record** on your **custom domain** pointing to **Point Virtual Machine's public IP address** 
  * VM **Static IP Address** is obtained during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup

* Obtain a **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the custom domain used in the SysKit Point web application URL


### Use an Azure default domain for SysKit Point
To use SysKit Point with an Azure default domain perform the following steps:
* **Add a public DNS A record** on your **custom domain** pointing to **Point Virtual Machine's public IP address** 
  * VM **DNS name** is obtained during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup

* Obtain a **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the custom domain used in the SysKit Point web application URL

## Deploy SysKit Point to a test environment

To use SysKit Point on a **test environment** perform the following steps:

* **Azure default domain** `cloudapp.azure.com` **in SysKit Point Web App URL**; for example, `https://azurevmname.eastus.cloudapp.azure.com`
  * VM **DNS name** is obtained during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup
* **Self-signed certificate will be created by SysKit Point**

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

### Output

For SysKit Point configuration, prepare the following information:

* **URL** for the SysKit Point web application
* **SSL certificate** file in one of the standard formats (.pfx, .p12, .pem)
  * Not needed for test environments


## Related Topics

* [Install SysKit Point on Azure Virtual Machine](overview.md)
* [Create Azure Virtual Machine](create-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).