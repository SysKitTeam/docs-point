---
description: This article shows how to deploy SysKit Point - Power BI Companion app
---

# Deploy SysKit Point Power BI App

{% hint style="success" %}
Before you deploy SysKit Point Power BI app, prepare the following
* **SysKit Point Azure SQL Server Name**
* **Power BI database user credentials**
{% endhint %}

## Deploy

{% hint style="warning" %}
**Please note!**
Installation, customization, and distribution of the SysKit Point Power BI Companion app require a Power BI Pro or Premium Per User license.
{% endhint %}

To deploy SysKit Point Power BI app:

* **Open [Power BI](https://app.powerbi.com/)**
* **Navigate to Apps**
* **Click Get apps**
* **Find SysKit Point - Power BI Companion**
* **Click Get it now**

After deployment, the following is available:
* **SysKit Point Power BI Application** - SysKit Point Reports with details for Microsoft 365 Governance and Security
* **SysKit Point Workspace** - location of SysKit Point Reports and SysKit Point Dataset

{% hint style="warning" %}
**Please note!**
Deployed application is a **template application** and comes with example data. When first used, you will be required to **connect to the SysKit Point database to import your tenant data**.
{% endhint %}

## Connect to Your Tenant
To show data from your tenant, SysKit Point Power BI app needs to be connected to your tenant. 
To connect the app, do the following:
* **Click the Connect your data link** in the warning ribbon
* **Enter SysKit Point database parameters:**
    * **SysKit Point SQL Server**
    * **SysKit Point Database** - enter `SysKitPointDB`
* **Click Next**

On the next screen, follow these steps:
* **Enter User Name** - enter `powerbireader`
* **Enter Password** - enter **password for the powerbireader database user**
* **Click Sign in and connect**

{% hint style="warning" %}
**Please note!** Refresh can take up to 30 minutes.
{% endhint %}

