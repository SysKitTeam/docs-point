---
description: >-
  This article lists all requirements that are necessary to install and use
  SysKit Point.
---

# System Requirements

No matter where you want to deploy SysKit Point - **Cloud** or **on-premises** - you will need to ensure all requirements are met. To make the process easier, all information is divided into several articles grouped by the mentioned deployment type.

{% hint style="warning" %}
**Please note!**  
**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment**. The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

## Cloud

When deploying SysKit Point to Cloud you will be dealing with Azure resources instead of physical machines. Two types of Azure resources are required to successfully install and configure SysKit Point:

* [**Azure Virtual Machine**](../installation-and-configuration/deploy-to-azure/prerequisites/create-azure-vm.md#resource-requirements-per-subscription-plan) where SysKit Point will be installed
* [**Azure SQL database**](../installation-and-configuration/deploy-to-azure/prerequisites/create-azure-sql-database.md#resource-requirements-per-subscription-plan) where SysKit Point will store its data 

Click the appropriate link to learn more about the requirements for each of the mentioned resources.

## On-Premises

When deploying SysKit Point on-premises, two things are required to successfully install and configure SysKit Point:

* [**Windows Server**](../installation-and-configuration/deploy-on-premises/prerequisites/syskit-point-server.md#hardware-requirements-per-subscription-plan) where SysKit Point will be installed
* [**SQL database**](../installation-and-configuration/deploy-on-premises/prerequisites/syskit-point-database.md#hardware-requirements-per-subscription-plan) where SysKit Point will store its data 

Click the appropriate link to learn more about the requirements for each of the mentioned resources.

## Supported Browsers

Once **SysKit Point** is installed and configured, you can access the SysKit Point web-app by using the following browsers:

* **Google Chrome** \(recommended\)
* **Firefox**
* **Opera**
* **Microsoft Edge** \(Chromium-based\)

{% hint style="warning" %}
**Please note!**  
**Internet Explorer is not supported.**
{% endhint %}

## Related Topics

* [Permission Requirements](permission-requirements.md)
* [Deploy SysKit Point to Cloud](../installation-and-configuration/deploy-to-azure/)
* [Deploy SysKit Point On-Premises](../installation-and-configuration/deploy-on-premises/)

