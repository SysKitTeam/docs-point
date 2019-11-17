---
description: This article explains how to configure SysKit Point
---

# Configure SysKit Point

Once the installation is completed, by default, **SysKit Point - Configuration Wizard** starts automatically. Alternatively, you can start it manually at any time by running it from the installation folder. The default location is: **C:\ProgramFiles\SysKit\Point\Host\Configuration.exe**.

## Prerequisites

In the Configuration Wizard, you will need to provide the following information:

* **MS SQL server and SQL database**
* **Local service account**
* **Office 365 Global admin account**
* **SSL Certificate** \(we can provide you with a self-signed one, but for production we recommend you use full SSL certificate\).

{% hint style="warning" %}
For a detailed overview of the **SysKit Point system and permission requirements**, [navigate to the Requirements section](../requirements-1/).
{% endhint %}

## Configuration Steps

### Database

First, you need to choose between the following two options: 

* **Create new database** – use this when configuring SysKit Point for the first time, and if the account running the Configuration Wizard has proper privileges on the SQL server to create new databases. 
* **Use existing database** – if you have your SQL database pre-created by your SQL administrator, or if you already configured SysKit Point and are just upgrading to a newer version of SysKit Point, or modifying settings. 

### Database Configuration

Provide SQL database server name and database name.

{% hint style="warning" %}
**How to enter the server name?** 

* if you are using the default instance type “servername”, or “servername.yourdomain.loc” 
* if you are using a named instance type “servername\instancename”, or “servername. Yourdomain.loc\instancenameˇ  
* if your SQL Server is on a non-standard port \(different from 1433\), type “servername,port” or “servername\instance,port”. \(FQDN formats are also supported\) 
{% endhint %}

 Choose the type of authentication to this SQL server and database: 

* **Windows Authentication** \(recommended\)  
* **SQL Authentication** 

To make sure that you will be able to use this server and database, click the **Test Connection** button.  
If everything is configured properly, an Info window appears with the message:  
  
**`Successfully connected to the SQL Server`** 

Click **OK** to close the Info window, and **Next &gt;** to continue to the next step. 

{% hint style="warning" %}
Check the supported SQLServer versions and requirements [here](../requirements-1/system-requirements.md).
{% endhint %}

### Service Settings

Provide local service account that will be used for running the automatic actions performed by SysKit Point, such as:  

* **Office 365 auto discovery and data crawl** 
* **Writing the collected data to a specified SQL database**  
* **Writing down collected Audit data to the Index location** 

Supported service account formats: 

* `machine_name\username`
* `.\username`

After you've entered the credentials click the **Validate Account** button. If the account has all [proper privileges](../requirements-1/permission-requirements.md), a Success window appears with the message:   
  
`This account can be used to run SysKit Point!` 

Click **OK** to close the Success window, and **Next &gt;** to continue to the next step. 

### Connect to Office 365

Connect your Office 365 tenant by providing Office 365 global admin account. This account will be used for collecting all the data from your environment and for the continuous auto discovery of new resources.   

\*\*SysKit Point uses modern authentication methods and does not store any passwords or accounts that you present here. 

Please note that this can be any global admin account; it doesn’t have to be the account you will use in the future to log in to the application. 

Why do I need to provide global admin account? \(link na drugi clanak\) 

### Application Scope

Choose which information would you like to collect when it comes to your Office 365 environment: 

1. Autodiscovery – allow the application to continuously monitor all updates and changes from the environment and present you with the latest data. 
2. Audit Logs - collect all audit logs to monitor internal and external user activities and changes 
3. OneDrive Accounts - collect information and report on user OneDrive activity, content and sharing 

You can change this selection at any point of time under Settings \(link na setttings\). 

### Web Application

 The default URL for the web interface is [https://machine-name](https://machine-name/) and port 443. You can customize this URL as you wish at any point in time, but make sure to configure DNS for the customized URL to correctly resolve the target address.   
   
Use this URL to log in to SysKit Point web interface.   
 

### Certificate

Choose the certificate type to ensure secure connection between SysKit Point machine and web interface in browser: 

* Self-signed certificate – will be provided automatically by SysKit and will work for testing purposes. Since this certificate is not signed by a certificate authority, you will receive security warnings when you try to open the web application in browser from other machines \(other the one where the tool is installed\). 
* Import SSL certificate – recommended for the production usage and it needs to be performed by the customer.  \(link na how to configure SSL certificate?\) 

SysKit Point application will open in the default browser once that you finish all steps of the Configuration Wizard and you are ready to go. 







