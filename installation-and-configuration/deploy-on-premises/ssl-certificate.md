---
description: This article explains how to use a SSL certificate with SysKit Point.
---

# Configure URL for Point Web Application

Decide which **URL are you going to use for SysKit Point web application** and prepare an SSL certificate required to make a secure https conenctions from the browser. This is the URL your users will use to access SysKit Point through their browsers.

You have different options available depending wether on which environment you are deploying SysKit Point:

* **Production environment** where SysKit Point is connected to your **Production** tenant
* **Test environment** where SysKit Point is connected to your **QA/Test/DEV** tenant

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

* Check what is the full **DNS name** of the Azure Virtual Machine the **Azure team** provided you. Visible in the **RDP Connection file** or inside the [**Azure portal**](https://portal.azure.com).
  * VM **DNS name** is configured during the previous configuration step [**Configure a DNS Name**](create-azure-vm.md#configure-a-dns-name) during the Virtual Machine setup
  * It should look like `https://AzureVmName.eastus.cloudapp.azure.com`
* Obtain a **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the full DNS name of the Azure Virtual Machine used for the SysKit Point web application URL

## Deploy SysKit Point to a test environment

To simplify SysKit Point installation on a **test environment** we recommend you use an **Azure default domain** `cloudapp.azure.com` for the SysKit Point web application URL. In this case it is **not required** to obtain a certificate from a publicly trusted SSL certificate provider and there is **no additional configuration on your DNS server**.

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


The default URL for the web interface of SysKit Point is set to `https://fully-qualified-domain-name` and port to `443`. You can customize these values as you wish at any point in time, but make sure to also configure your DNS for the customized URL to correctly resolve the target address.

Use this URL to log in to the SysKit Point web interface by using the [supported browsers](../../requirements/system-requirements.md#supported-browsers).

#### SSL Certificates

**If you decide to configure SysKit Point web-app be reachable from the public internet**, **the following is recommended**:

* **Use a Custom Domain mapped to SysKit Point Web App**; for example, `https://point.mycustomdomain.com`
* **Use an SSL certificate obtained from a publicly trusted SSL certificate provider**

When using such setup, make sure to:

* **Associate the SSL certificate with the FQDN used in the SysKit Point Web App URL**
* **Add a public DNS A record on your custom domain pointing to SysKit Point server's public IP address** 

**When configuring SysKit Point to be used inside your company or in a test environment**, you can use:

* **FQDN of the Windows Server as SysKit Point Web App URL**; for example, `https://pointserver.contoso.com`
* **Internally-signed certificate or Self-signed certificate created by SysKit Point**

Choose the certificate type to ensure a secure connection between SysKit Point machine and web interface in the browser:

* **Import SSL certificate** – recommended for the production usage and it needs to be created by the end-user/customer
* **Use self-signed certificate** – this is a certificate provided automatically by SysKit Point, and will work for testing purposes. Since this certificate is not signed by a certification authority, you will receive security warnings when you try to open the web application in the browser from other machines \(other than the one where SysKit Point is installed\). 

{% hint style="info" %}
Learn how to [configure the SSL certificate by using your internal CA here.](../../common-tasks/configure-ssl-certificate.md)
{% endhint %}

{% hint style="success" %}
**When configuring**, SysKit Point will, by default, automatically set up the **Web App URL** and the **Self-signed certificate** so there is no additional configuration needed on your side.
{% endhint %}

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

## Related Topics

* [Install SysKit Point On-Premises](overview.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

