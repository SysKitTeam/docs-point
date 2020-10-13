---
description: This article explains how to use a SSL certificate with SysKit Point.
---

# Configure URL for Point Web Application

Decide which **URL are you going to use for SysKit Point web application** and prepare an SSL certificate required to make a secure https connection from the browser. This is the URL your users will use to access SysKit Point through one of the [supported browsers](../../requirements/system-requirements.md#supported-browsers).

You have different options available depending whether on which environment you are deploying SysKit Point:

* **Production environment** where SysKit Point is connected to your **Production** tenant
* **Test environment** where SysKit Point is connected to your **QA/Test/DEV** tenant

## Deploy SysKit Point to a production environment

In a production environment, **it is recommended to use** an **SSL certificate obtained from a publicly trusted SSL certificate provider** and the **URL which will be recognisable by your users**. You can choose from **two options** for your URL:

* **Recommended** - Use a **Custom domain** for SysKit Point web application URL, for example,  `https://point.YourCompanyDomain.com`
* Use an **Azure default domain** for SysKit Point web application URL, for example, `https://AzureVmName.eastus.cloudapp.azure.com`

### Use a custom domain for SysKit Point

To use SysKit Point with a custom domain perform the following steps:

* On a **public DNS provider** create a **DNS A record** for your **custom domain** pointing to the **Point Virtual Machine's public IP address**
  * VM **Static IP Address** is obtained during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup
* Obtain an **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the custom domain used in the SysKit Point web application URL

### Use an Azure default domain for SysKit Point

To use SysKit Point with an Azure default domain perform the following steps:

* Check what is the full **DNS name** of the Azure Virtual Machine the **Azure team** provided you. Visible in the **RDP Connection file** or inside the [**Azure portal**](https://portal.azure.com).
  * VM **DNS name** is configured during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup
  * It should look like `https://AzureVmName.eastus.cloudapp.azure.com`
* Obtain an **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the full DNS name of the Azure Virtual Machine used for the SysKit Point web application URL

## Deploy SysKit Point to a test environment

To simplify SysKit Point installation on a **test environment** we recommend you use an **Azure default domain** `cloudapp.azure.com` for the SysKit Point web application URL. In this case it is **not required** to obtain a publicly trusted SSL certificate and there is **no additional configuration on a DNS server**.

* Check what is the full **DNS name** of the Azure Virtual Machine the **Azure team** provided you. Visible in the **RDP Connection file** or inside the [**Azure portal**](https://portal.azure.com). 
  * VM **DNS name** is configured during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup
  * It should look like `https://AzureVmName.eastus.cloudapp.azure.com`
* **Self-signed certificate will be created by SysKit Point**

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

## Output

For SysKit Point configuration, prepare the following information:

* **URL** for the SysKit Point web application
* **SSL certificate** file in one of the standard formats \(.pfx, .p12, .pem\)
  * Not needed for test environments

## Related Topics

* [Install SysKit Point on Azure Virtual Machine](overview.md)
* [Create Azure Virtual Machine](create-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

