---
description: >-
  This article lists MS SQL Server requirements that are necessary to install and configure SysKit Point On-Premises.
---

# SysKit Point Database

SysKit Point requires a dedicated **SQL Server database** for storing data collected from Office 365. 


## Prepare a database for SysKit Point

First you need to prepare a SQL Server with accorandce to the [**minimum requirements**](hardware-software-requirements.md#sql-server-requirements). We **recommend you use a dedicated virtual machine** for your SQL Server.

Once the SQL Server is ready you have **2 options** how to prepare for SysKit Point setup:
* **Pre-create an empty database SysKit Point will use**
* **Let SysKit Point create a new database during the SysKit Point Configuration Wizard**

### Use a pre-created database
* **User running SysKit Point installation will need to be granted the** db\_owner **rights** on the Syskit Point database
* **Service account needs to have db\_owner privileges** on the SysKit Point database
### Point will create a database

When creating the database, ensure the following:

* **User running SysKit Point installation will need to be granted the** db\_owner **rights** on the Syskit Point database
* **Service account needs to have db\_owner privileges** on the SysKit Point database

## Output

For SysKit Point configuration, prepare the following information:

* **SQL Server name**
* **Database name** - if an empty database was pre-created



## Related Topics

* [Install SysKit Point On-Premises](overview.md) 

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

