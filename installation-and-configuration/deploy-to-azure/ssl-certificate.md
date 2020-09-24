---
description: >-
  This article explains how to use a SSL certificate with SysKit Point.
---

# SSL Certificate

### SSL Certificate

**In a production environment**, **it is recommended to use**:

* **Custom Domain used in SysKit Point Web App URL**; for example, `https://point.mycustomdomain.com`
* **SSL certificate obtained from a publicly trusted SSL certificate provider**

When using such setup, make sure to:

* **Associate the SSL certificate with the custom domain used in the SysKit Point Web App URL**
* **Add a public DNS A record on your custom domain pointing to Point Virtual Machine's public IP address** 

**When configuring SysKit Point in a test environment**, you can use:

* **Azure default domain** `cloudapp.azure.com` **in SysKit Point Web App URL**; for example, `https://azurevmname.eastus.cloudapp.azure.com`
* **Self-signed certificate created by SysKit Point**

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

**To use the Azure default domain**, you need to configure a DNS name in the Azure Portal. To do so:

* **Open** [Azure portal](https://portal.azure.com)
* **Navigate to your Azure Virtual Machine**
* **Click Configure \(1\)** next to the DNS name label on the Overview screen
* **Define the DNS name label \(2\)**
* **Save your changes \(3\)**

![](../../.gitbook/assets/azure-vm_dns-name_01.png)

![Azure - DNS Name configuration](../../.gitbook/assets/azure-vm_dns-name_02.png)