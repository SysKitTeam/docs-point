---
description: >-
  This article lists MS SQL Server requirements that are necessary to install
  and configure SysKit Point on-premises.
---

# SysKit Point Database

SysKit Point requires a dedicated **SQL Server database** for storing data collected from Office 365. In this article, you can find recommendations to follow when choosing the appropriate **MS SQL Server**, where the SysKit Point database is created.

{% hint style="success" %}
Before continuing, please ensure that you read the [following article](syskit-point-server.md) listing all requirements for the Windows Server, where SysKit Point will be installed.
{% endhint %}

## Software Requirements

Please note the following software requirements:

* **Microsoft SQL Server 2012 and newer are supported**
* **SQL Express can be used for demo or trial purposes only**

## Hardware Requirements per Subscription Plan

Based on the size of your Office 365 environment, SysKit Point comes with three different subscription plans:

* **Professional**
* **Team**
* **Enterprise**

{% hint style="info" %}
**Learn more!**  
To learn more about available SysKit Point subscription plans and included features, continue to the [Pricing page.](https://www.syskit.com/products/point/pricing/)
{% endhint %}

Below, you can find MS SQL Server recommendations based on your SysKit Point subscription plan and your environment's size.

{% hint style="warning" %}
**Please note!** **Requirements highly depend on the Office 365 activity, the number of users, and the amount of data in your environment**. The larger the environment, the more resources will be required to run SysKit Point smoothly.
{% endhint %}

{% hint style="success" %}
**For smaller Office 365 environments**, MS SQL Server can be installed on the same physical machine as SysKit Point.
{% endhint %}

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

### Professional Subscription

Recommended for Office 365 environments with up to 1000 users and sites.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dedicated SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Express and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 16GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Express and better | MS SQL Server 2012 and newer |

### Team Subscription

Recommended for Office 365 environments with up to 10000 users and sites.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dedicated SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Web and better | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | 64-bit CPU, 4 cores | 32GB RAM | 6GB-12GB per month for 1000 users | MS SQL Server Web and better | MS SQL Server 2012 and newer |

### Enterprise Subscription

Recommended for Office 365 environments with more than 10000 users and sites.

| Server/Resource | CPU | Memory | Disk | SQL Edition | SQL Version |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Dedicated SQL Server | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Recommended System Requirements or better | MS SQL Server Enterprise | MS SQL Server 2012 and newer |
| Point & SQL on the same machine | Not recommended | Not recommended | Not recommended | Not recommended | Not recommended |

{% hint style="info" %}
**Learn more!**  
You can find Microsoft hardware and software recommendations on the following links: [MS SQL Server 2016 and 2017](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server?view=sql-server-ver15), [MS SQL Server 2019](https://docs.microsoft.com/en-us/sql/sql-server/install/hardware-and-software-requirements-for-installing-sql-server-ver15?view=sql-server-ver15).
{% endhint %}

## Prepare for Installation & Configuration

When creating the database, ensure the following:

* [**Resource recommendations are met**](syskit-point-database.md#hardware-requirements-per-subscription-plan)
* **A dedicated SQL Server database is created for SysKit Point**
* **Windows Server**, where SysKit Point will be installed, **has access to the SQL Server database**
* **User running SysKit Point installation will need to be granted the** db\_owner **rights** on the Syskit Point database
* **Service account needs to have db\_owner privileges** on the SysKit Point database

## Related Topics

* [SysKit Point Server](syskit-point-server.md)
* [Install SysKit Point On-Premises](../install-syskit-point-on-premises.md) 
* [Configure SysKit Point On-Premises](../configure-syskit-point-on-premises.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

