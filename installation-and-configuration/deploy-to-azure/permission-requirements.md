---
description: >-
  This article discusses permission requirements that are necessary to
  successfully install, configure and use SysKit Point on Azure cloud environment.
---

# Permission Requirements

To successfully install and configure SysKit Point, various permissions need to be granted by the following administrator roles in your environment:
* **Azure administrator**
* **Azure SQL administrator**
* **Office 365 Global administrator**

Let's take a look at each of them in more detail:

## Azure administrator

When deploying SysKit Point to your Azure environment, we can distinguish two main user accounts in Azure Active Directory:
* **User installing SysKit Point**
* **Service account running SysKit Point Service**

### User Installing SysKit Point

**User installing SysKit Point** needs to be granted the following privilege on the Azure Virtual Machine where SysKit Point will be installed:
* **Local Administrator** 

{% hint style="warning" %}
Once installed, SysKit Point web-app can be accessed and used with a non-privileged user account.
{% endhint %}

### Service Account

A [service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts) is a user account that is created explicitly to provide a security context for services running on Windows Server operating systems. The security context determined the service’s ability to access local and network resources. The Windows operating systems rely on services to run various features. These services can be configured through the applications, the Services snap-in, or Task Manager, or by using Windows PowerShell.

**The service account used to run SysKit Point Service needs to have the following privileges** to be able to [collect Office 365 data](../how-to/collect-office-365-data.md) and run other associated jobs:
* **local administrator** privileges on the Azure Virtual Machine with UAC control disabled so we can verify your credentials
* **db\_owner** privileges on the created SysKit Point dedicated Azure SQL database
* **log on as Service** rights configured

{% hint style="info" %}
If the service account is outside your domain the account name must be typed in the down-level logon name format: **domain\accountname**
{% endhint %}

## Azure SQL Administrator

After SysKit Point is installed on an Azure Virtual Machine, SysKit Point Configuration Wizard will require connection to an Azure SQL database.
Azure SQL Administrator should ensure the following is met:
* **SysKit Point dedicated Azure SQL database is created**
* **User account running the configuration wizard has db\_owner rights on Azure SQL database**
* **SysKit Point Service account has db\_owner rights on Azure SQL database**

## Office 365 Global Administrator

**When connecting to an Office 365 tenant** during the [configuration](../installation-and-configuration/configure-syskit-point.md#connect-to-office-365) process, **you need to connect with a Global Administrator account.**

**The first time you connect to your Office 365 tenant, you will be prompted to give consent** to a set of permissions that SysKit Point requires to function correctly. Additional prompts may show up in the future when installing a newer version of SysKit Point because of new functionality, and in consequence, potentially new required permissions.

![Office 365 Global Admin Consent](../.gitbook/assets/permission_requirements_global_administrator_consent_without_steps.png)

For a complete overview of individual permissions used by SysKit Point, please refer to the [following article](../requirements/permission-requirements#syskit-point-app-permissions).