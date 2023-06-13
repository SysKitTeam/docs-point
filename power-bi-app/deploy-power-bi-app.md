---
description: This article shows how to deploy Syskit Point - Power BI Companion app.
---

# Deploy Syskit Point Power BI App

{% hint style="success" %}
Before you deploy Syskit Point Power BI app, prepare the following
* **Syskit Point Azure SQL Server Name**
* **Power BI database user credentials**
{% endhint %}

## Deploy

{% hint style="warning" %}
**Please note!**
Installation, customization, and distribution of the Syskit Point Power BI Companion app require a Power BI Pro or Premium Per User license.
{% endhint %}

To deploy Syskit Point Power BI app:

* **Open [Power BI](https://app.powerbi.com/)**
* **Navigate to Apps**
* **Click Get apps**
* **Find Syskit Point - Power BI Companion**
* **Click Get it now**

After deployment, the following is available:
* **Syskit Point Power BI Application** - Syskit Point Reports with details for Microsoft 365 Governance and Security
* **Syskit Point Workspace** - location of Syskit Point Reports and Syskit Point Dataset

{% hint style="warning" %}
**Please note!**
Deployed application is a **template application** and comes with example data. When first used, you will be required to **connect to the Syskit Point database to import your tenant data**.
{% endhint %}

## Connect to Your Tenant

To show data from your tenant, Syskit Point Power BI app needs to be connected to your tenant. 
To connect the app, do the following:
* **Click the Connect your data link** in the warning ribbon
* **Enter Syskit Point database parameters:**
    * **Syskit Point SQL Server**
    * **Syskit Point Database** - enter `SysKitPointDB`
* **Click Next**

{% hint style="warning" %}
**Please note!**
Prepare SQL login credentials to enter in the next step.
[Read this article to learn how to create the SQL login and allow access to the Azure SQL server](requirements.md). 
{% endhint %}

On the next screen, follow these steps:
* **Enter User Name** - enter `powerbireader`
* **Enter Password** - enter **password for the powerbireader database user**
* **Click Sign in and connect**

{% hint style="warning" %}
**Please note!** Refresh can take up to 30 minutes.
{% endhint %}

