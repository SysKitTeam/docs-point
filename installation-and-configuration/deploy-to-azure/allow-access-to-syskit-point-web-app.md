---
description: >-
  This article describes steps to take when you want to make SysKit Point available
  to site owners and admins outside the Azure Virtual Machine.
---

# Allow Access to SysKit Point

To make SysKit Point accessible for other users outside the Azure Virtual Machine, you need to:

* **Allow inbound traffic on the Azure Virtual Machine** where SysKit Point is installed
* **Allow inbound traffic for the Network Security Group** associated with the Point Virtual Machine

## Azure Virtual Machine

To allow inbound traffic on the Azure Virtual Machine, follow these steps:

* **Sign in to Azure Virtual Machine**
* **Open Windows Firewall with Advanced Security on Local Computer**
* **Select Inbound Rules \(1\)**
* **Click New Rule action \(2\)**

![Windows Firewall - Adding a new inbound rule](../../.gitbook/assets/azure-vm_azure-vm-firewall.png)

New Inbound Rule Wizard opens that enables you to create an inbound rule for TCP protocol on port 443.

## Network Security Group

To allow inbound security rule for the Network Security Group associated with the Azure Virtual Machine, follow these steps:

* **Open** [Azure portal](https://portal.azure.com)
* **Navigate to your Azure Virtual Machine** 
* **Click Networking** in the Settings section
* **Click Add inbound port rule button \(1\) to add a rule for TCP protocol with destination port 443 \(2\)**

![](../../.gitbook/assets/azure-vm_networking_01.png)

![Azure - Adding inbound port rule](../../.gitbook/assets/azure-vm_networking_02.png)

After the inbound rule is created, you can continue and test access to the SysKit Point web application.

## Test Access to SysKit Point

You can test the connection to SysKit Point deployed on the Azure Virtual Machine now that the configuration is finished. To do so, use the following PowerShell cmdlet from any computer connected to the Internet: `Test-NetConnection -Port Point_port -ComputerName PointDNSName`

Here, the `-Port` parameter should be set to 443 and `-ComputerName` to the DNS name of the Point web application you specified as the URL in the SysKit Point Configuration Wizard. For example: `Test-NetConnection -Port 443 -ComputerName point.mycustomdomain.`

After all the steps are done, you can access the SysKit Point web application from anywhere on the Internet by opening the defined URL in your web browser. For example, `https://point.mycustomdomain.com`. If everything is set up correctly, the SysKit Point Sign in page opens.

## Related Topics

* [Create Azure Virtual Machine](prerequisites/create-azure-vm.md)
* [Create Azure SQL Database](prerequisites/create-azure-sql-database.md)
* [Install SysKit Point on Azure VM](install-syskit-point-on-azure-vm.md) 
* [Configure SysKit Point on Azure VM](configure-syskit-point-on-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).