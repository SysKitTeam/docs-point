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

Below, you can find hardware requirements based on your SysKit Point subscription plan and your environment's size.

{% hint style="warning" %}
**Please note!  
Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to run SysKit Point smoothly.
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

{% hint style="info" %}
**Learn more!**
You can find Microsoft hardware and software recommendations on the following links: [SQL Server 2016 and 2017](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-ver15), [SQL Server 2019](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-ver15?view=sql-server-ver15).
{% endhint %}