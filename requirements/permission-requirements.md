---
description: >-
  This article discusses permission requirements that are necessary to
  successfully install and use SysKit Point.
---

# Permission Requirements

## Installation

To install SysKit Point, you need to have **Local Administrator** privileges on the target installation computer. Once installed, SysKit Point can be used with a non-privileged user account.

### SQL Database

#### Creating a new database

To be able to create a new SysKit Point dedicated database, the **user account running the installation and configuration wizard should have the following rights** on the preferred SQL server:

* **dbcreator** 
* **securityadmin**

This allows the account to create a new database and to assign proper privileges after database creation. The install account will be automatically given **db\_owner** privileges on the newly created database, if possible. Otherwise, it is advised that the account is given that privilege manually, as it is needed for upgrading the database.

#### Using the existing database

User running SysKit Security Manager will need to be granted the **db\_datareader** rights on the existing Syskit Security Manager database.

### Service Account

