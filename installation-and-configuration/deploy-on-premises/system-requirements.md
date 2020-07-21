---
description: >-
  This article lists hardware and software requirements that are necessary to
  install and use SysKit Point.
---

# System Requirements

When deploying SysKit Point in your environment, two necessary components are required:

* **Server** where SysKit Point will be installed
* **SQL server and database** where SysKit Point will store its data 

## SysKit Point Server

We recommend installing SysKit Point on a Windows Server machine, to allow SysKit Point Service to crawl your Office 365 environment continuously. When choosing an existing server in your environment or provisioning a new one, please note the following:

* **Windows Server 2012 and newer are supported** 
* **Microsoft .NET Framework 4.5 or higher**

## SQL Server

SysKit Point requires Microsoft SQL Server database for storing data collected from Office 365. Please note the following requirements:

* **Microsoft SQL Server 2012 and newer are supported**
* **SQL Express can be used for demo or trial purposes only**

## Requirements per Subscription Plan

**Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment.** The larger the environment, the more resources will be required to smoothly run SysKit Point.

SysKit Point requires a server where SysKit Point will be installed and a SQL server for the database \(for smaller Office 365 environments this can be the same server\).

Here is the list of recommended hardware requirements based on your license type and the size of your environment.

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 2 cores | 8GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Express and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Express and better | MS SQL Server 2012 and newer |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Web and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Web and better | MS SQL Server 2012 and newer |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Point Server | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | - | - |
| SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Enterprise | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | Not recommended | Not recommended | Not recommended | Not recommended | Not recommended |

