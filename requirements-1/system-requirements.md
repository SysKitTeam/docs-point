---
description: >-
  This article lists hardware and software requirements that are necessary to
  install and use SysKit Point.
---

# System Requirements

## Software

We recommend installing SysKit Point on a Windows Server machine, to allow SysKit Point Service to crawl your Office 365 environment continuously. 

* **Windows Server 2012 and newer are supported** 
* **Microsoft .NET Framework 4.5 or higher** 

### Microsoft SQL Server and Database

SysKit Point requires Microsoft SQL Server for storing data collected from Office 365. 

* **Microsoft SQL Server 2012 and never are supported**
* **SQL Express can be used for demo or trial purposes only**

Permission requirements for the account used to connect to the SQL server are listed [here](permission-requirements.md).

## Hardware

**Hardware requirements highly depend on the Office 365 activity, number of users and the amount of data in your environment.** The larger the environment, the more resources will be required to smoothly run SysKit Point. 

SysKit Point requires a server where SysKit Point will be installed and a SQL server for the database \(for smaller Office 365 environments this can be the same server\). 

Here is the list of recommended hardware requirements based on the size of your environment. 

**TODO - ubaciti sliku?**

{% hint style="warning" %}
**Please note!**   
****If you do not own On-Premises servers, you can use Azure Virtual Machine with the installed SQL server on it as well. Have in mind the requirements recommendation when creating this virtual machine.
{% endhint %}

