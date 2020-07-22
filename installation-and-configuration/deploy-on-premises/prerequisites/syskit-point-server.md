---
description: >-
  This article lists Azure Virtual Machine requirements that are necessary to
  install and configure SysKit Point in Azure environment.
---

# SysKit Point Server

## Software Requirements

We recommend installing SysKit Point on a Windows Server machine to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing an existing or provisioning a new Windows Server, please note the following:

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

Below, you can find hardware requirements based on your SysKit Point subscription plan and your environment's size.

{% hint style="info" %}
Hardware requirements for the SQL Server installed on a separate machine are listed [here](syskit-point-database).
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



