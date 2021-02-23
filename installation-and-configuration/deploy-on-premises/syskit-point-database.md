---
description: This article lists MS SQL Server requirements that are necessary to install and configure SysKit Point On-Premises.
---

# Create SQL Database

SysKit Point requires a dedicated **SQL Server database** for storing data collected from Microsoft 365.

## Prepare a database for SysKit Point

First you need to prepare a SQL Server in accordance with the [**minimum requirements**](hardware-software-requirements.md#sql-server-requirements). We **recommend you use a dedicated virtual machine** for your SQL Server.

## SQL Permissions

To authenticate on the SQL Server SysKit Point can use the following options:

* **Windows authentication \(recommended\)** - **windows account running the SysKit Point Configuration Wizard** and the [**service account**](additional-vm-configuration.md#service-account) **running the SysKit Point service** need to be assigned permissions
* **SQL Server authentication** - create a SQL account and assign permissions

The instructions below are written for the recommended scenario with windows authentication but if you decide to use SQL Server authentication the requirements for the SQL account are the same as for the windows accounts.

### Option 1: Use a pre-created database

If you decided to **manually pre-create an empty database** for SysKit Point using SQL Server Management Studio here are the minimum privileges that need to be assigned:

* **Grant db\_owner database-level role** to the **user running SysKit Point Configuration Wizard** on the pre-create database
* **Grant  db\_owner database-level role** to the **SysKit Point** [**Service Account**](additional-vm-configuration.md#service-account) on the pre-create database

### Option 2: Point will create a new database

**SysKit Point will create a new database** during its Configuration Wizard. In this case it is important that you **assign proper SQL Server privileges** to the **user running SysKit Point Configuration Wizard**:

* **dbcreator server-level role** - to be able to create a new database
* **securityadmin server-level role** - to be able to assign permissions to the [**service account**](additional-vm-configuration.md#service-account) automatically during setup

## Output

For SysKit Point configuration, prepare the following information:

* **SQL Server name**
* **Database name\*** - if an empty database was pre-created what is its name
* **SQL account\*** - if you decide to use SQL Server authentication

## Related Topics

* [Install SysKit Point On-Premises](overview.md) 

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

