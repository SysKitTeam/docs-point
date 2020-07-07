---
description: >-
  This article lists Azure resource requirements that are necessary to
  install and use SysKit Point in Azure environment.
---

# Azure Resource Requirements

When deploying SysKit Point in the Azure cloud environment, two necessary components are required:
* **Azure Virtual Machine** where SysKit Point will be installed
* **Azure SQL database** where SysKit Point will store its data 

Depending on the size of your Office 365 tenant, the Azure virtual Machine size and the SQL Service tier will vary accordingly.

{% hint style="warning" %}
**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

## Azure Virtual Machine

We recommend installing SysKit Point on a Windows Server machine to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing the Virtual machine image, please note the following:

* **Windows Server 2012 or newer is required** 
* **Microsoft .NET Framework 4.5 or higher is required**

## Requirements per Subscription Plan

Here is the list of recommended Azure resources based on your license type and your environment's size.

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users.

| Server/Resource | Instance | vCPU | Memory | Disk | 
| :--- | :--- | :--- | :--- | :--- | 
| Point Server | General purpose D2 v3 | 64-bit CPU, 2 cores | 8GB RAM | 6GB-12GB per month for 1000 users |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk | 
| :--- | :--- | :--- | :--- | :--- |
| Point Server | General purpose D4 v3 | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users.

| Server/Resource | Instance | vCPU | Memory | Disk |
| :--- | :--- | :--- | :--- | :--- | 
| Point Server | General purpose D8 v3 | 64-bit CPU, 8 cores | 32GB RAM | 6GB-12GB per month for 1000 users |

## Azure SQL

SysKit Point requires an **Azure SQL database** for storing data collected from Office 365. When creating a SQL database, it is recommended to use the following SQL Service tier:   
* **Standard S0 - 10DTUs, 250GB storage**

## Related Topics

* [SysKit Point Permission Requirements](../installation-and-configuration/deploy-to-azure/permission-requirements.md)
* [Install SysKit Point on Azure VM](../installation-and-configuration/deploy-to-azure/install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../installation-and-configuration/deploy-to-azure/configure-syskit-point-on-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/). 