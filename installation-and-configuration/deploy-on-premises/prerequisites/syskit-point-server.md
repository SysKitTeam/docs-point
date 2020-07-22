---
description: >-
  This article lists Windows Server requirements that are necessary to install
  and configure SysKit Point on-premises.
---

# SysKit Point Server

## Software Requirements

We recommend installing SysKit Point on a Windows Server machine to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing an existing or provisioning a new Windows Server, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.5 or higher is required**

## Hardware Requirements per Subscription Plan

Based on the size of your Office 365 environment, SysKit Point comes with three different subscription plans:

* **Professional**
* **Team**
* **Enterprise**

{% hint style="info" %}
**Learn more!**  
To learn more about available SysKit Point subscription plans and included features, continue to the [Pricing page.](https://www.syskit.com/products/point/pricing/)
{% endhint %}

Below, you can find SQL server hardware requirements based on your SysKit Point subscription plan and your environment's size.

{% hint style="warning" %}
**Please note!**  
**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment**. The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

{% hint style="success" %}
**For smaller Office 365 environments**, SQL Server can be installed on the same physical machine as SysKit Point. If you decided to install SQL Server on a separate machine, you can find the SQL Server hardware requirements listed [here](syskit-point-database.md)
{% endhint %}

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 2 cores | 8GB RAM | 6GB-12GB per month for 1000 users | - | - |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Express and better | MS SQL Server 2012 and newer |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | - | - |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Web and better | MS SQL Server 2012 and newer |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | - | - |
| Point & SQL on the same machine | Not recommended | Not recommended | Not recommended | Not recommended | Not recommended |

## Prepare for Installation & Configuration

After you choose or provision a Windows Server where to install SysKit Point, ensure the following:

* **User installing SysKit Point is a Local Administrator** on the Windows Server
* **Office 365 Global Administrator** credentials and consent are needed when configuring SysKit Point for the first time
* **A service account with Local Administrator privileges** on the Windows Server is required to run SysKit Point Service

Additionally, the following is needed for SysKit Point configuration:

* **Domain used in SysKit Point Web App URL**
* **SSL certificate**

{% hint style="warning" %}
**Please note!**

* **Once installed and configured, SysKit Point web-app can be accessed and used with a non-privileged user account.**
* **Office 365 Global Admin credentials are only needed when configuring SysKit Point for the first time.**
{% endhint %}

### Service Account

A Service account is used for running the automatic actions performed by SysKit Point, such as:

* **Office 365 auto-discovery and data crawl** 
* **Writing the collected data to a specified SQL database**  
* **Writing down collected Audit data to the Index location** 

Supported service account formats are as follows:

* `machine_name\username`
* `.\username`
* `domain\username`

**The Service account used to run SysKit Point Service needs to have the following privileges** to be able to [collect Office 365 data](../../../how-to/collect-office-365-data.md) and run other associated jobs:

* **local administrator** privileges on the Windows Server

### Office 365 Global Administrator

**When connecting to an Office 365 tenant** during the configuration process, **you need to connect with a Global Administrator account.**

**The first time you connect to your Office 365 tenant, you will be prompted to consent** to a set of permissions that SysKit Point requires to function correctly. Additional prompts may show up in the future when installing a newer version of SysKit Point because of new functionality, and in consequence, potentially new required permissions.

![Office 365 Global Admin Consent](../../../.gitbook/assets/permission_requirements_global_administrator_consent_without_steps.png)

For a complete overview of individual permissions used by SysKit Point, please refer to the [following article](../../../requirements/permission-requirements.md#syskit-point-app-permissions).

### SSL Certificate

**In a production environment**, **it is recommended to use**:

* **Custom Domain used in SysKit Point Web App URL**; for example, `https://point.mycustomdomain.com`
* **SSL certificate obtained from a publicly trusted SSL certificate provider**

When using such setup, make sure to:

* **Associate the SSL certificate with the custom domain used in the SysKit Point Web App URL**
* **Add a public DNS A record on your custom domain pointing to Windows Server public IP address** 

**When configuring SysKit Point in a test environment**, you can use:

* **FQDN of the Windows Server in SysKit Point Web App URL**; for example, `https://pointserver.contoso.com`
* **Self-signed certificate created by SysKit Point**

{% hint style="success" %}
**When configuring**, SysKit Point will, by default, automatically set up the **Web App URL** and the **Self-signed certificate** so there is no additional configuration needed on your side.
{% endhint %}

{% hint style="warning" %}
**Please note!**  
**Self-signed certificates are by default not publicly trusted**; therefore, your connection to Point application may be marked as not private in the browser when accessing SysKit Point URL.
{% endhint %}

## Related Topics

* [SysKit Point SQL Database](syskit-point-database.md)
* [Install SysKit Point On-Premises](https://github.com/SysKitTeam/docs-point/tree/3ab833c5801d06f9a677db7f226f8ce276776822/installation-and-configuration/deploy-on-premises/prerequisites/install-syskit-point-on-premises.md) 
* [Configure SysKit Point On-Premises](https://github.com/SysKitTeam/docs-point/tree/3ab833c5801d06f9a677db7f226f8ce276776822/installation-and-configuration/deploy-on-premises/prerequisites/configure-syskit-point-on-premises.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

