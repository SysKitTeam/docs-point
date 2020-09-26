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
  * Ask your **Azure team** to create a dedicated VM according to this  [**article**](create-azure-vm.md) and check the [**minimum requirements**](hardware-software-requirements.md#azure-virtual-machine-requirements) 
  * After the VM has been created and your **Azure team** provided you with the **RDP conenction** info and **Windows login account** you need to connect to the VM and **perform additional configuration** steps:
    * You need to [**configure Internet Options**](internet-explorer-settings.md) to add the **Office 365 login page to Trusted sites** and **enable JavaScript execution** inside Internet Explorer
    * You need to [**allow network traffic through**](additional-vm-configuration.md)  the Windows Firewall on port 443 (default port for https) 
    * You need to [**install a compatibile browser**](additional-vm-configuration.md) so SysKit Point can be accessed localy from the VM
* **Azure SQL database** where SysKit Point will store its data 
    * Ask your **Azure team** to [**create a dedicated Azure SQL database**](create-azure-sql-database.md) in accordance with the [**minimum requirements**](hardware-software-requirements.md#azure-sql-database-requirements) and provide you with a **SQL login** account which has **db owner** permissions  
* **Decide which URL are you going to use for SysKit Point web application** and prepare an **SSL certificate** required to make a **secure https conenctions** from the browser
  * Obtain a SSL certificate from a **publicly trusted certificate provider**, check instructions at article [**deploy SysKit Point to a production environment**](ssl-certificate.md#deploy-syskit-point-to-a-production-environment)
  * For testing environemnts the application will generate a self-signed certificate, check instructions at article [**deploy SysKit Point to a test environment**](ssl-certificate.md#deploy-syskit-point-to-a-test-environment)
* [**Global Administrator**]( global-admin-consent.md) will be asked to login and provide application consent during the setup
  * Please note: Global admin account is only necessary during the initial configuration, later the application can be used with other non-privileged accounts

Click the appropriate link to learn more about requirements for each of the mentioned resources.

If you run into any issues when preparing your environment, please [contact us](https://www.syskit.com/contact-us/).


## SysKit Point Installation & Configuration
Once you went through all the requirements above and prepared all the necessary  resources you are ready to install SyKit Point.
* Download installation package
* Install SysKit Point
* Run Configuration Wizard

## First Steps After Installation SysKit Point
* Request access to Microsoft Teams Protected API
* Setup initial RBS options
* Setup Audit logs data retention

