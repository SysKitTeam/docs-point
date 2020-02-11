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

## SQL Server

SysKit Point requires Microsoft SQL Server database for storing data collected from Office 365.

* **Microsoft SQL Server 2012 and newer are supported**
* **SQL Express can be used for demo or trial purposes only**

Permission requirements for the account used to connect to the SQL server are listed [here](permission-requirements.md).

## Hardware

**Hardware requirements highly depend on the Office 365 activity, number of users and the amount of data in your environment.** The larger the environment, the more resources will be required to smoothly run SysKit Point.

SysKit Point requires a server where SysKit Point will be installed and a SQL server for the database \(for smaller Office 365 environments this can be the same server\).

Here is the list of recommended hardware requirements based on your license type and the size of your environment.

### Professional Subscription

For Office 365 environments with up to 1000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 2 cores | 8GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Express and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Express and better | MS SQL Server 2012 and newer |

### Team Subscription

For Office 365 environments with up to 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Web and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Web and better | MS SQL Server 2012 and newer |

### Enterprise Subscription

For Office 365 environments with more than 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Enterprise | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | Not recommended | Not recommended | Not recommended | Not recommended | Not recommended |

{% hint style="warning" %}
**Please note!**  
If you do not own On-Premises servers, you can use Azure Virtual Machine with the installed SQL server on it as well. Have in mind the requirements recommendation when creating this virtual machine.
{% endhint %}

## Supported Browsers

**SysKit Point** web-app can be used in the following browsers:

* **Google Chrome** \(recommended\)
* **Firefox**
* **Opera**
* **Microsoft Edge** \(Beta - version 79.0.309.25 and newer\)

**Internet Explorer is not supported.**

