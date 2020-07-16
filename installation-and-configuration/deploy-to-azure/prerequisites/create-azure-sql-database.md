---
description: >-
  This article lists Azure SQL database requirements that are necessary to
  install and configure SysKit Point in the Azure environment.
---

# Create Azure SQL Database

SysKit Point requires an **Azure SQL database** for storing data collected from Office 365. In this article, you can find recommendations to follow when creating this resource.

{% hint style="success" %}
Before continuing, make sure to [create and configure an Azure Virtual Machine](create-azure-vm.md) where SysKit Point will be installed.
{% endhint %}

## Resource Recommendations per Subscription Plan

Based on the size of your Office 365 environment, SysKit Point comes with three different subscription plans:

* **Professional**
* **Team**
* **Enterprise**

{% hint style="info" %}
**Learn more!**  
To learn more about available SysKit Point subscription plans and included features, continue to the [Pricing page.](https://www.syskit.com/products/point/pricing/)
{% endhint %}

Below, you can find Azure SQL database recommendations based on your SysKit Point subscription plan and your environment's size.

{% hint style="warning" %}
**Please note!**
Here, we recommend you to create Azure SQL resources by selecting the [DTU-based](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-dtu) purchase model. If you find the [vCore-base](https://docs.microsoft.com/en-us/azure/azure-sql/database/service-tiers-vcore?tabs=azure-portal) model will better suit your needs, you can migrate from the DTU-based model to the vCore-based model, and vice-versa, with minimal downtime, as described [here](https://docs.microsoft.com/en-us/azure/azure-sql/database/migrate-dtu-to-vcore#migrate-a-database).
{% endhint %}

If you have additional questions or concerns regarding the purchase models, please [contact us](https://www.syskit.com/contact-us/).

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users and sites.

| Server/Resource | Service tier | DTU | Included storage \(GB\) |
| :--- | :--- | :--- | :--- |
| Azure SQL database | S1 | 20 | 250 \(HDD-based\) |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users and sites.

| Server/Resource | Service tier | DTU | Included storage \(GB\) |
| :--- | :--- | :--- | :--- |
| Azure SQL database | S2 | 50 | 250 \(HDD-based\) |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users and sites.

| Server/Resource | Service tier | DTU | Included storage \(GB\) |
| :--- | :--- | :--- | :--- |
| Azure SQL database | S3 | 100 | 250 \(SSD-based\) |

## Prepare for Installation & Configuration

When creating the database, ensure the following:

* [**resource recommendations are met**](create-azure-sql-database.md#resource-recommendations-per-subscription-plan)
* **a dedicated Azure SQL database is created for SysKit Point**
* **Azure Virtual Machine**, where SysKit Point will be installed, **has access to Azure SQL database**

### Allowing Access to Azure SQL Database

After the Azure SQL database is created, you need to allow Azure Virtual Machine, where SysKit Point will be installed, to access it. To do so, you must create a new IP firewall rule, as described in the steps below:

* **Open** [Azure portal](https://portal.azure.com)
* **Navigate to your Azure SQL server**
* **Select** the **Firewalls and virtual networks \(1\)** option in the **Security** section
* **Define a Rule name \(2\)**
* **Input the IP Address** of the Azure Virtual Machine where SysKit Point will be installed into the **Start IP \(3\)** and **End IP \(4\)** fields
* **Save** changes

![Azure SQL - Adding a firewall rule](../../../.gitbook/assets/create-azure-sql-database_allow-access.png)

{% hint style="info" %}
**Hint!**   
There are a couple of options when it comes to allowing access to the Azure SQL database. [You can find them all here](https://docs.microsoft.com/en-us/azure/azure-sql/database/network-access-controls-overview).
{% endhint %}

### Credentials

For SysKit Point configuration, prepare the following information:

* **Azure SQL server**
* **Azure SQL database name**
* **Azure SQL server admin login**
* **Azure SQL server admin password**

## Related Topics

* [Create Azure Virtual Machine](create-azure-vm.md)
* [Install SysKit Point on Azure VM](../install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](../allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

