---
description: >-
  This article is an explains what are the hardware and sofware requirements for
  installing SysKit Point On-Premises.
---

# Hardware and Software Requirements

SysKit Point has two main components which have their own requirements:

* **Virtual Machine** - host the data collection service and the Point web application
* **SQL Server Database** - stores data collected by Point

{% hint style="success" %}
**For smaller Office 365 environments**, MS SQL Server can be installed on the same physical machine as SysKit Point. If you decided to install MS SQL Server on a separate machine, you can find the MS SQL Server hardware requirements listed [here](syskit-point-database.md)
{% endhint %}

## Virtual Machine Requirements

### Software Requirements

We recommend installing SysKit Point on a **dedicated Windows Server** machine to allow SysKit Point to scan your Office 365 environment continuously. When creating a new virtual machine, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.5 or higher is required**

### Hardware Requirements

Below, you can find the Virtual Machine **minimum requirements** based on your environment's size.

| Office 365 Environment | CPU | Memory | Disk |
| :--- | :--- | :--- | :--- |
| **Up to 1000 users/sites** | 64-bit CPU, 2 cores | 8GB RAM | 6GB-12GB per month for 1000 users |
| **Up to 10 000 users/sites** | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users
| **More than 10 000 users/sites** | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users |

{% hint style="warning" %}
**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

## SQL Server Requirements

We recommend using a **dedicated SQL Server** for SysKit Point to store its data collected from your Office 365 environment. When creating a new SQL Server, please note the following:
* **MS SQL Server Web edition or better is required**
* **MS SQL Server 2012 version or newer is required**

We recommended that you use a **dedicated virtual machine for the SQL Server** and **not to install SysKit Point on the same machine**. Below, you can find the **minimum** virtual machine recommendations where your SQL Server is installed based on your environment's size.

| Office 365 Environment | CPU | Memory | Disk |
| :--- | :--- | :--- | :--- |
| **Up to 1000 users/sites** | 64-bit CPU, 2 cores | 8GB RAM | 20GB |
| **Up to 10 000 users/sites** | 64-bit CPU, 4 cores | 16GB RAM | 50GB
| **More than 10 000 users/sites** | 64-bit CPU, 4 cores | 32GB RAM | 100GB |

### Using SysKit Point and SQL Server on the same Virtual Machine
It is **not recommended** to install SysKit Point and SQL Server on the same virtual machine. If you have limited resources and just want to test the application, you can do it, but SysKit Point's **performance will be downgraded**. **SQL Server Express** edition is only allowed if you have a small Office 365 Environment with up to 500 users/sites.

Below, you can find the Virtual Machine **minimum requirements** if you install both SysKit Point and SQL Server on that VM based on your environment's size.

| Office 365 Environment | CPU | Memory | Disk |
| :--- | :--- | :--- | :--- |
| **Up to 1000 users/sites** | 64-bit CPU, 4 cores | 16GB RAM | 20GB + 6GB-12GB per month for 1000 users |
| **Up to 10 000 users/sites** | 64-bit CPU, 4 cores | 32GB RAM | 50GB + 6GB-12GB per month for 1000 users
| **More than 10 000 users/sites** | Not recommended | Not recommended | Not recommended |

{% hint style="warning" %}
**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

## Related Topics

* [Install SysKit Point On-Premises](overview.md) 

