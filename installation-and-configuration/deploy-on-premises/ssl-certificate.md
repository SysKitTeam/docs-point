---
description: This article explains how to use a SSL certificate with SysKit Point.
---

# Configure URL for Point Web Application

Decide which **URL are you going to use for SysKit Point web application** and prepare an SSL certificate required to make a secure https connection from the browser. This is the URL your users will use to access SysKit Point through one of the [supported browsers](../../requirements/system-requirements.md#supported-browsers).

You have different options available depending whether on which environment you are deploying SysKit Point:

* **Production environment** where SysKit Point is connected to your **Production** tenant
* **Test environment** where SysKit Point is connected to your **QA/Test/DEV** tenant

## Deploy SysKit Point to a production environment

In a production environment, **it is recommended to use** an **SSL certificate obtained from a publicly trusted SSL certificate provider** and the **URL which will be recognisable by your users**. You can choose from **two options**:

* Use a **Custom domain** for SysKit Point web application URL which will be reachable from the **public internet**
* Use a **Custom domain** for SysKit Point web application URL which will be reachable from the **inside of your company**


### Use a public internet domain for SysKit Point

To use SysKit Point with a public internet domain (for example, `https://point.mycustomdomain.com`) perform the following steps:

* **Add a public DNS A record** on your **custom domain** pointing to **SysKit Point server's public IP address** 
* Obtain an **SSL certificate** from a **publicly trusted SSL certificate provider**
  * Associate the SSL certificate with the custom domain used in the SysKit Point web application URL
  
 

### Use an internal company domain for SysKit Point

To use SysKit Point with a **Custom domain** (for example, `https://point.contoso.com`) which will be reachable from the **inside of your company**:

* **Add a public DNS A record** on your **custom domain** pointing to **SysKit Point server's public IP address** 
  * This configuration needs to be done on your **local DNS server**
* Obtain an **internally signed SSL certificate** trusted by all domain joined devices
  * Associate the SSL certificate with the custom domain used in the SysKit Point web application URL

{% hint style="info" %}
Learn how to [configure the SSL certificate by using your internal CA here.](../../common-tasks/configure-ssl-certificate.md)
{% endhint %}


## Deploy SysKit Point to a test environment

To simplify SysKit Point installation on a **test environment** we recommend you use an **FQDN of the Windows Server** (for example, `https://pointserver.contoso.com`) for the SysKit Point web application URL. In this case it is **not required** to obtain a certificate from a publicly trusted SSL certificate provider and there is **no additional configuration on your DNS server**.

* **Self-signed certificate will be created by SysKit Point**

{% hint style="success" %}
**When configuring**, SysKit Point will, by default, automatically set up the **Web App URL** to the **FQDN of the Windows Server** and the **Self-signed certificate** so there is no additional configuration needed on your side.
{% endhint %}

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

* [Install SysKit Point On-Premises](overview.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

