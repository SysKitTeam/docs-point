---
description: This article explains how to use a SSL certificate with SysKit Point.
---

# Configure URL for Point Web Application

Decide which **URL are you going to use for the SysKit Point web application** and prepare a SSL certificate required to make a secure HTTPS connection from the browser. This is the URL your users will use to access SysKit Point through one of the [supported browsers](../../requirements/system-requirements.md#supported-browsers).

You have different options available depending on which environment you are deploying SysKit Point:

* A **Production environment** where SysKit Point is connected to your **Production** tenant
* A **Test environment** where SysKit Point is connected to your **QA/Test/DEV** tenant

## Deploy SysKit Point to a Production Environment

In a production environment, **it is recommended to use** a **SSL certificate obtained from a publicly trusted SSL certificate provider** and a **URL which will be recognisable by your users**. We **recommend** you use a **Custom domain** for the SysKit Point web application URL, for example: `https://point.contoso.com`.

### Use a Custom Domain for SysKit Point

To use SysKit Point with a custom domain perform the following steps:

* On a **public DNS provider** create a **DNS A record** for your **custom domain** pointing to the **Point Virtual Machine's public IP address**
  * The VM's **Static IP Address** is obtained during the previous configuration step \([**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup\)
* Obtain a **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the custom domain used for the SysKit Point web application URL

## Deploy SysKit Point to a Test Environment

To simplify the SysKit Point installation on a **test environment**, we recommend you use an **Azure default domain** `cloudapp.azure.com` for the SysKit Point web application URL. In this case, it is **not required** to obtain a publicly trusted SSL certificate and there is **no additional configuration on a DNS server**.

* Check what is the full **DNS name** of the Azure Virtual Machine provided by your **Azure team**. It is visible in the **RDP Connection file** or inside the [**Azure portal**](https://portal.azure.com). 
  * The VM **DNS name** is configured during the previous configuration step \([**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup\)
  * It should look like `https://AzureVmName.eastus.cloudapp.azure.com`
* A **Self-signed certificate will be created by SysKit Point**

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

## Output

For the SysKit Point configuration, prepare the following information:

* A **URL** for the SysKit Point web application
* A **SSL certificate** file in one of the standard formats \(.pfx, .p12, .pem\)
  * Not needed for test environments

## Related Topics

* [Install SysKit Point on Azure Virtual Machine](overview.md)
* [Create Azure Virtual Machine](create-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

