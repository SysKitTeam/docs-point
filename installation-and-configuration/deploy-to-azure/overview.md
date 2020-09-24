---
description: This article is an index of content that provides guidance for installing SysKit Point on an Azure Virtual Machine.
---

# Install SysKit Point on Azure Virtual Machine

This article is an index of content that provides guidance for **installing SysKit Point on an Azure Virtual Machine.**

## Getting started
The following conditions needs to be met before you can start SysKit Point installation:

* **Review hardware and software installation requirements** for SysKit Point. SysKit Point has two main components which have their own requirements:
    * [**Azure Virtual Machine requirements**](hardware-software-requirements.md#azure-virtual-machine-requirements) - host the data collection service and the Point web application
    * [**Azure SQL Database requirements**](hardware-software-requirements.md#azure-sql-database-requirements) - stores data collected by Point
* **Azure Virtual Machine** where SysKit Point will be installed
  * Ask your azure team to create a dedicated VM according to this  [**article**](create-azure-vm.md) and check the [**minimum requirements**](hardware-software-requirements.md#azure-virtual-machine-requirements) 
  * After the VM has been created additional configuration steps are require before SysKit Point deployment:
    * You need to [**configure Internet Options**](internet-explorer-settings.md) to add the Office 365 login page to Trusted sites and enable JavaScript execution inside Internet Explorer
    * You need to [**allow network traffic through**](additional-vm-configuration.md)  the Windows Firewall on port 443 (default port for https) 
    * You need to [**install a compatibile browser**](additional-vm-configuration.md) so SysKit Point can be accessed localy from the VM
* [**Azure SQL database**](create-azure-sql-database.md) where SysKit Point will store its data 
* SSL certificate required to make a secure https conenctions with the SysKit Point web application
  * During trial the application can generate a self-signed certificate 
  * For production use we recommend you obtain a trusted certificate
* [**Global Administrator**]( global-admin-consent.md) will be asked to login and provide application consent during the setup
  * Please note: Global admin account is only necessary during the initial configuration, later the application can be used with non-privileged accounts

Click the appropriate link to learn more about requirements for each of the mentioned resources.

If you run into any issues when preparing your environment, please [contact us](https://www.syskit.com/contact-us/).


## SysKit Point Installation & Configuration

## SysKit Point Configuration
