---
description: >-
  This article lists Azure SQL Database requirements that are necessary to install
  and configure SysKit Point in the Azure environment.
---

## Azure SQL Database

SysKit Point requires an **Azure SQL database** for storing data collected from Office 365. When creating an Azure SQL database, it is recommended to use the following SQL Service tier:

* **Standard S0 - 10DTUs, 250GB storage**

## Prepare for Installation & Configuration

**A dedicated Azure SQL database needs to be created for SysKit Point.**

For SysKit Point configuration, the following information is required:

* **Database server**
* **Database name**
* **Server admin login**
* **Server admin password**

{% hint style="warning" %}
**Please note!**  
If you have provisioned **separate Azure Virtual Machines** for Azure SQL database and SysKit Point installation, **make sure that they are deployed to the same Virtual Network** and the SysKit Point server **can establish a connection to the SQL Server** by following the [guidelines](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sql/virtual-machines-windows-sql-connect#connect-to-sql-server-within-a-virtual-network) from Microsoft.
{% endhint %}

## Related Topics

* [Create Azure Virtual Machine](create-azure-vm.md)
* [Install SysKit Point on Azure VM](../install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](../configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](../allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).