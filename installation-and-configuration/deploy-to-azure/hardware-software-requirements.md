---
description: This article lists the hardware and software requirements for installing SysKit Point in an Azure environment.
---

# Hardware and Software Requirements

SysKit Point has two main components that have their requirements:

* **Azure Virtual Machine** - hosts the data collection service and the Point web application
* **Azure SQL Database** - stores the data collected by Point

## Azure Virtual Machine Requirements

### Software Requirements

We recommend installing SysKit Point on a **Windows Server** machine to allow SysKit Point to scan your Microsoft 365 environment continuously. When choosing the Virtual machine image, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.7.2. or higher is required**

### Hardware Requirements

Below, you can find Azure Virtual Machine **minimum requirements** based on your environment's size.

| Microsoft 365 Environment | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- |
| **Up to 1000 users/sites** | General purpose D2 v3 | 2 cores | 8GB | 6GB-12GB per month for 1000 users |
| **Up to 10 000 users/sites** | General purpose D4 v3 | 4 cores | 16GB | 6GB-12GB per month for 1000 users |
| **More than 10 000 users/sites** | General purpose D8 v3 | 8 cores | 32GB | 6GB-12GB per month for 1000 users |

{% hint style="warning" %}
**Requirements highly depend on the Microsoft 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources SysKit Point will require to run smoothly.
{% endhint %}

## Azure SQL Database Requirements

{% hint style="warning" %}
**Please note!**  
We recommend creating Azure SQL resources for smaller environments by selecting the [DTU-based](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-dtu) purchase model. For bigger environments, we recommend the [vCore-based](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-vcore?tabs=azure-portal) model, which will better suit your needs. It is possible to migrate from the DTU-based model to the vCore-based model, and vice-versa, with minimal downtime, as described [here](https://docs.microsoft.com/en-us/azure/azure-sql/database/migrate-dtu-to-vcore#migrate-a-database).
{% endhint %}

If you have additional questions or concerns regarding the purchase models, please [contact us](https://www.syskit.com/contact-us/).

Below, you can find **minimum** Azure SQL database recommendations based on your environment's size.

| Microsoft 365 Environment | Pricing model | Included storage \(GB\) |
| :--- | :--- | :--- |
| **Up to 1000 users/sites** | DTU model S1 - 20 DTU | 50 |
| **Up to 10 000 users/sites** | General Purpose 2 vCores \(Provisioned\) | 100 |
| **More than 10 000 users/sites** | General Purpose 4+ vCores \(Provisioned\) | 250 |

{% hint style="warning" %}
**Requirements highly depend on the Microsoft 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

## Related Topics

* [Overview - Install SysKit Point on Azure Virtual Machine](overview.md) 

