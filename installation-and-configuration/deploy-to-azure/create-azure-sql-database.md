---
description: >-
  This article lists Azure SQL database requirements that are necessary to
  install and configure SysKit Point in an Azure environment.
---

# Create Azure SQL Database

Your **Azure team** needs to create an **Azure SQL database** for storing data which SysKit Point collects from Office 365. In this article, you can find recommendations to follow when creating this resource.

{% hint style="success" %}
Before continuing, make sure to [create and configure an Azure Virtual Machine](create-azure-vm.md) where SysKit Point will be installed.
{% endhint %}

## Prepare for Installation & Configuration

When creating the database, ensure the following:

* Create a dedicated **Azure SQL database** for SysKit Point and be sure to meet the [**minimum Azure SQL Database requirements**](hardware-software-requirements.md#azure-sql-database-requirements)
  * This database can be empty, Point will create the necessary database tables during its setup
* You need to configure your **Azure SQL database to allow access from your Azure Virtual Machine**, where SysKit Point will be installed 
  * Make sure you already completed the previous installation step [**Create an Azure Virtual Machine**](create-azure-vm.md), and obtained a **Static IP** for that VM

### Allowing Access to Azure SQL Database

After the Azure SQL database is created, you need to allow your Azure Virtual Machine, where SysKit Point will be installed, to access it. To do so, you must **create** a new **IP firewall rule**, as described in the steps below:

* Open the [Azure portal](https://portal.azure.com)
* **Navigate** to your **Azure SQL server**
* **Select** the **Firewalls and virtual networks \(1\)** option in the **Security** section
* **Define a Rule name \(2\)**
* **Input the IP Address** of the Azure Virtual Machine where SysKit Point will be installed into the **Start IP \(3\)** and **End IP \(4\)** fields
* **Save** the changes

![Azure SQL - Adding a firewall rule](../../.gitbook/assets/create-azure-sql-database_allow-access.png)

{% hint style="info" %}
**Hint!**  
There are a couple of options when it comes to allowing access to the Azure SQL database. [You can find them all here](https://docs.microsoft.com/en-us/azure/azure-sql/database/network-access-controls-overview).
{% endhint %}

### Output

For the configuration of SysKit Point, prepare the following information:

* **Azure SQL server**
* **Azure SQL database name**
* **SQL account** - needs to have **db_owner** permissions on the database

## Related Topics

* [Overview - Install SysKit Point on Azure Virtual Machine](overview.md) 
* [Hardware and Software Requirements](hardware-software-requirements.md)
* [Create Azure Virtual Machine](create-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

