---
description: >-
  This article lists Azure Virtual Machine requirements that are necessary to install
  and configure SysKit Point in Azure environment.
---

# Azure Virtual Machine

We recommend installing SysKit Point on a Windows Server machine to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing the Virtual machine image, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.5 or higher is required**

After you create an Azure Virtual Machine, ensure the following:

* **Network Security Group is assigned to the Azure Virtual Machine**
* **Public IP address \(static\) is set for the Azure Virtual Machine** 

## Requirements per Subscription Plan

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

| Server/Resource | Instance | vCPU | Memory (GB) | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D2 v3 | 2 | 8 | 6GB-12GB per month for 1000 users |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D4 v3 | 4 | 16 | 6GB-12GB per month for 1000 users |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D8 v3 | 8 cores | 32 | 6GB-12GB per month for 1000 users |

## Permission Requirements

### User Installing SysKit Point

**User installing SysKit Point** needs to be granted the following privilege on the Azure Virtual Machine where SysKit Point will be installed:

* **Local Administrator** 

{% hint style="warning" %}
Once installed, SysKit Point web-app can be accessed and used with a non-privileged user account.
{% endhint %}

### Service Account

A [service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts) is a user account that is created explicitly to provide a security context for Services running on Windows Server operating systems. The security context determined the Service’s ability to access local and network resources. The Windows operating systems rely on Services to run various features. These Services can be configured through the applications, the Services snap-in, or Task Manager, or by using Windows PowerShell.

**The Service account used to run SysKit Point Service needs to have the following privileges** to be able to [collect Office 365 data](../../how-to/collect-office-365-data.md) and run other associated jobs:

* **local administrator** privileges on the Azure Virtual Machine with UAC control disabled so that we can verify your credentials
* **db\_owner** privileges on the created SysKit Point dedicated Azure SQL database
* **log on as Service** rights configured

{% hint style="info" %}
If the service account is outside your domain the account name must be typed in the down-level logon name format: **domain\accountname**
{% endhint %}

## Office 365 Global Administrator

**When connecting to an Office 365 tenant** during the configuration process, **you need to connect with a Global Administrator account.**

**The first time you connect to your Office 365 tenant, you will be prompted to consent** to a set of permissions that SysKit Point requires to function correctly. Additional prompts may show up in the future when installing a newer version of SysKit Point because of new functionality, and in consequence, potentially new required permissions.

![Office 365 Global Admin Consent](../../.gitbook/assets/permission_requirements_global_administrator_consent_without_steps.png)

For a complete overview of individual permissions used by SysKit Point, please refer to the [following article](../../requirements/permission-requirements.md#syskit-point-app-permissions).

## Related Topics

* [Create Azure SQL Database](create-azure-sql-database.md)
* [Install SysKit Point on Azure VM](../install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](../allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).