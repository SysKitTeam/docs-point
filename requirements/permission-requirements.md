---
description: >-
  This article discusses permission requirements that are necessary to
  successfully install and use SysKit Point.
---

# Permission Requirements

## Installation

To install SysKit Point, you need to have **Local Administrator** privileges on the target installation computer. Once installed, SysKit Point can be used with a non-privileged user account.

## SQL Database

### Creating a new database

To be able to create a new SysKit Point dedicated database, the **user account running the installation and configuration wizard should have the following rights** on the preferred SQL server:

* **dbcreator** 
* **securityadmin**

This allows the account to create a new database and to assign proper privileges after database creation. The install account will be automatically given **db\_owner** privileges on the newly created database, if possible. Otherwise, it is advised that the account is given that privilege manually, as it is needed for upgrading the database.

### Using the existing database

User running SysKit Security Manager will need to be granted the **db\_datareader** rights on the existing Syskit Security Manager database.

## Service Account

**Service Settings** page in Configuration Wizard requires appropriate [service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts) details.

A service account is a user account that is created explicitly to provide a security context for services running on Windows Server operating systems. The security context determined the service’s ability to access local and network resources. The Windows operating systems rely on services to run various features. These services can be configured through the applications, the Services snap-in, or Task Manager, or by using Windows PowerShell.

**The service account needs to have the following privileges** to be able to run the service, collect Office 365 data and run other associated jobs:

* **local administrator** privileges on the installation computer with UAC control disabled so we can verify your credentials
* **db\_owner** privileges on the created SysKit Point dedicated database
* **log on as Service** rights configured

{% hint style="info" %}
If the service account is outside your domain the account name must be typed in the down-level logon name format: **domain\accountname**
{% endhint %}

