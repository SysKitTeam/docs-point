---
description: This article shows how to deploy SysKit Point - Power BI Companion app 
---

{% hint style="success" %}
Before you deploy SysKit Point Power BI app, prepare the following
* **SysKit Point Azure SQL Server Name**
* **Power BI database user credentials**
{% endhint %}

## Deploy

To deploy SysKit Point Power BI app:

* **Open [Power BI](https://app.powerbi.com/)**
* **Navigate to Apps**
* **Click Get apps**
* **Find SysKit Point - Power BI Companion**
* **Click Get it now**

The app is deployed but shows a set of example data in the reports. 

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

