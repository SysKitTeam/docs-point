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

## Related Topics

* [Create Azure SQL Database](create-azure-sql-database.md)
* [Install SysKit Point on Azure VM](../install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](../allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).