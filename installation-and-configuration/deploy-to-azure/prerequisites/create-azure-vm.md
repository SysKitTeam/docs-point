---
description: >-
  This article lists Azure Virtual Machine requirements that are necessary to
  install and configure SysKit Point in Azure environment.
---

# Create Azure Virtual Machine

## Software Requirements

We recommend installing SysKit Point on a Windows Server machine to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing the Virtual machine image, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.5 or higher is required**

## Resource Requirements per Subscription Plan

Based on the size of your Office 365 environment, SysKit Point comes with three different subscription plans:

* **Professional**
* **Team**
* **Enterprise**

{% hint style="info" %}
To learn more about available SysKit Point subscription plans and included features, continue to the [Pricing page.](https://www.syskit.com/products/point/pricing/)
{% endhint %}

Below, you can find Azure Virtual Machine requirements based on your SysKit Point subscription plan and your environment's size.

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D2 v3 | 2 | 8GB | 6GB-12GB per month for 1000 users |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D4 v3 | 4 | 16GB | 6GB-12GB per month for 1000 users |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D8 v3 | 8 cores | 32GB | 6GB-12GB per month for 1000 users |

## Prepare for Installation & Configuration

After you create an Azure Virtual Machine, ensure the following:

* **Network Security Group is assigned** to the Azure Virtual Machine
* **Public IP address \(static\)** is set for the Azure Virtual Machine
* **RDP connection \(port 3389\)** that allows access to the Azure Virtual Machine is enabled
* **User installing SysKit Point is a Local Administrator** on the Azure Virtual Machine
* **A service account with Local Administrator** on the Azure Virtual Machine is needed to run SysKit Point Service
* **Office 365 Global Administrator** credentials and consent are needed when configuring SysKit Point for the first time

Additionally, the following is needed for SysKit Point configuration:

* **Domain used in SysKit Point Web App URL**
* **SSL certificate**

{% hint style="warning" %}
**Please note!**

* **Once installed and configured, SysKit Point web-app can be accessed and used with a non-privileged user account.**
* **After the SysKit Point configuration is completed, the inbound rule allowing RDP connections can be removed.**
* **Office 365 Global Admin credentials are only needed when configuring SysKit Point for the first time.**
{% endhint %}

{% hint style="success" %}
* The Public IP address defined here is needed when [allowing access to Azure SQL database](create-azure-sql-database.md#allowing-access-to-azure-sql-database), so make sure to have it at hand.
{% endhint %}

### Service Account

A Service account is used for running the automatic actions performed by SysKit Point, such as:

* **Office 365 auto discovery and data crawl** 
* **Writing the collected data to a specified Azure SQL database**  
* **Writing down collected Audit data to the Index location** 

Supported service account formats are as follows:

* `machine_name\username`
* `.\username`
* `domain\username`

**The Service account used to run SysKit Point Service needs to have the following privileges** to be able to [collect Office 365 data](../../../how-to/collect-office-365-data.md) and run other associated jobs:

* **Local Administrator** privileges on the Azure Virtual Machine

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

![](../../../.gitbook/assets/azure-vm_dns-name_01.png)

![Azure - DNS Name configuration](../../../.gitbook/assets/azure-vm_dns-name_02.png)

## Related Topics

* [Create Azure SQL Database](create-azure-sql-database.md)
* [Install SysKit Point on Azure VM](../install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](../allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

