---
description: This article is an index of content that provides guidance for installing SysKit Point on an Azure Virtual Machine.
---

# Overview

To successfully deploy SysKit Point in the Azure cloud environment, the following resources are needed:

* **Azure Virtual Machine**
* **Azure SQL Database**

Configuration steps provided in this article result in the Cloud environment setup shown in the picture below.

![SysKit Point - Cloud Setup](../../.gitbook/assets/deploy-to-azure_architecture-diagram.png)
## Getting started

These are the 4 most important requirements to get you started:

1. An **Azure Virtual Machine \(VM\)** where SysKit Point will be installed
   * Ask your **Azure team** to create a dedicated VM according to this [**article**](create-azure-vm.md) and check the [**minimum requirements**](hardware-software-requirements.md#azure-virtual-machine-requirements) 
   * After the VM has been created and your **Azure team** provided you with the **RDP connection** info and a **Windows login account** you need to connect to the VM and **perform additional configuration** steps:
     * [**Prepare a service account**](additional-vm-configuration.md#service-account) to run the SysKit Point windows service. This windows service will host the Point web application and requires the **Local Administrator** role on the Azure Virtual Machine.
     * [**Configure Internet Explorer settings**](additional-vm-configuration.md#configure-internet-explorer-settings) to add the **Microsoft 365 login page to Trusted sites** and **enable JavaScript execution** inside Internet Explorer
     * [**Allow network traffic through**](additional-vm-configuration.md#configure-windows-firewall) the Windows Firewall on port 443 \(default port for HTTPS\) 
     * [**Install a compatible browser**](additional-vm-configuration.md#install-a-compatible-browser) so SysKit Point can be accessed locally from the VM
2. **Azure SQL database** where SysKit Point will store its data
   * Ask your **Azure team** to [**create a dedicated Azure SQL database**](create-azure-sql-database.md) in accordance with the [**minimum requirements**](hardware-software-requirements.md#azure-sql-database-requirements) and provide you with a **SQL login** account which has **db\_owner** permissions  
3. **Decide which URL are you going to use for the SysKit Point web application** and prepare an **SSL certificate** required to make a **secure HTTPS connection** from the browser
   * Obtain a SSL certificate from a **publicly trusted certificate provider**, check the following article for instructions on how to [**deploy SysKit Point to a production environment**](ssl-certificate.md#deploy-syskit-point-to-a-production-environment) and perform **DNS server** configuration if necessary    
   * For testing environments, the application will generate a self-signed certificate, check the following article for instructions on how to [**deploy SysKit Point to a test environment**](ssl-certificate.md#deploy-syskit-point-to-a-test-environment)
4. A **Global Administrator** will be asked to log in and [**provide application consent**](../../requirements/permission-requirements.md#global-administrator) during the setup
   * Please note: the Global admin account is only necessary during the initial configuration, later the application can be used with other non-privileged accounts

Click the appropriate link to learn more about the requirements for each of the mentioned resources.

If you run into any issues when preparing your environment, please [contact us](https://www.syskit.com/contact-us/).

## SysKit Point Installation & Configuration

Once you went through all the requirements above and prepared all the necessary resources you are ready to install SyKit Point. Use RDP to connect to the Virtual Machine where SysKit Point will be installed and perform the following:

* Download the SysKit Point installation package to the virtual machine
  * **New customers** will receive the download link from our support team
  * **Existing customers** can find the link on our [**Customers portal**](https://my.syskit.com/)
* [**Install SysKit Point**](https://docs.syskit.com/point/installation-and-configuration/deploy-to-azure/install-syskit-point-on-azure-vm#install-syskit-point) on the virtual machine
* [**Run the SysKit Point Configuration Wizard**](https://docs.syskit.com/point/installation-and-configuration/deploy-to-azure/install-syskit-point-on-azure-vm#configure-syskit-point) to perform the initial setup

## First steps with SysKit Point

By now, your SysKit Point is up and running. You can log in to the Point web application and it will continuously collect data from Microsoft 365. There are a few important considerations to make to complete the setup and secure your Point web application:

* [**Request access to Protected APIs in Microsoft Teams**](../../common-tasks/microsoft-teams-activity.md) - Point needs **additional approval from Microsoft** in order to be able to **detect inactive Teams**
* [**Manage who can access Point**](../enable-role-based-access.md) - by default only **Global Administrators** and **SharePoint admins** have the rights to log in to the Point web application
* [**Setup data retention for Audit logs**](../customize-audit-logs-collection.md#audit-logs-settings) - depending on your company policy and available disk space, set the data retention policy for Microsoft 365 audit logs stored locally
