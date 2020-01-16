---
description: This article explains how to configure SysKit Point.
---

# Configure SysKit Point

Once the installation is completed, by default, **SysKit Point - Configuration Wizard** starts automatically. Alternatively, you can start it manually at any time by running it from the installation folder. The default location is: **C:\ProgramFiles\SysKit\Point\Host\Configuration.exe**.

## Prerequisites

In the Configuration Wizard, you will need to provide the following information:

* **MS SQL server and SQL database**
* **Local service account**
* **Office 365 Global admin account**
* **SSL Certificate** \(we can provide you with a self-signed one, but for production we recommend you use full SSL certificate\).

{% hint style="info" %}
For a detailed overview of the **SysKit Point system and permission requirements**, [navigate to the Requirements section](../requirements/).
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

{% hint style="info" %}
Check the supported SQLServer versions and requirements [here](../requirements/system-requirements.md).
{% endhint %}

### Service Settings

Provide local service account that will be used for running the automatic actions performed by SysKit Point, such as:

* **Office 365 auto discovery and data crawl** 
* **Writing the collected data to a specified SQL database**  
* **Writing down collected Audit data to the Index location** 

Supported service account formats:

* `machine_name\username`
* `.\username`

After you've entered the credentials click the **Validate Account** button. If the account has all [proper privileges](../requirements/permission-requirements.md), a Success window appears with the message:

`This account can be used to run SysKit Point!`

Click **OK** to close the Success window, and **Next &gt;** to continue to the next step.

### Connect to Office 365

Click the **Connect to your tenant** link to connect SysKit Point to your Office 365 tenant. **You need to provide the Office 365 global admin account.** This account will be used for collecting all the data from your environment and for the continuous auto discovery of new resources.

**Please note that this can be any global admin account**; it doesn’t have to be the account you will use in the future to log in to the application.

{% hint style="success" %}
**SysKit Point** uses modern authentication methods and **does not store any passwords or accounts** that you present here.
{% endhint %}

When you first connect to your tenant, SysKit Point will request permissions needed to collect data from your Office 365 environment.

![Global Administrator Consent](../.gitbook/assets/configure-syskit-point_global_administrator_consent.png)

To continue, click the **Accept** button. A new window opens where you can choose which information would you like to collect when it comes to your Office 365 environment:

* **Automatic Discovery** – by default, SysKit Point continuously monitors your Office 365 environment and shows you the latest data. SharePoint Online sites and Office 365 Groups data will always be monitored. This setting cannot be modified.
* **OneDrive** - by default, SysKit Point will collect information and report on user OneDrive activity, content and sharing. To stop collecting OneDrive data, uncheck this option.
* **Audit Logs** - SysKit Point will also collect all audit logs to monitor internal and external user activities and changes and Store them to the hard drive. To stop storing audit logs, uncheck this option. 

You can change these options anytime by navigating to **Settings** in SysKit Point.

{% hint style="warning" %}
**Please note!**  
For SysKit Point to be able to collect, process, and save audit logs, the auditing has to be enabled in your tenant. [Navigate here to find out how to turn on auditing.](../faq/turn-on-auditing.md)
{% endhint %}

{% hint style="warning" %}
**Why do I need to provide a global admin account?**  
You can find answers in the [following article](../requirements/permission-requirements.md).
{% endhint %}

### Web Application Settings

The default URL for the web interface of SysKit Point is set to `https://fully-qualified-domain-name` and port to `443`. You can customize these values as you wish at any point in time, but make sure to also configure your DNS for the customized URL to correctly resolve the target address.

Use this URL to log in to the SysKit Point web interface from the web browser of your choice.

#### SSL Certificates

Choose the certificate type to ensure a secure connection between SysKit Point machine and web interface in the browser:

* **Import SSL certificate** – recommended for the production usage and it needs to be created by the end-user/customer. Learn how to [configure the SSL certificate here.](../common-tasks/configure-ssl-certificate.md)
* **Use self-signed certificate** – this is a certificate provided automatically by SysKit, and will work for testing purposes. Since this certificate is not signed by a certification authority, you will receive security warnings when you try to open the web application in the browser from other machines \(other than the one where SysKit Point is installed\). 

### Finish

The last step shows the status of all operations that are done before you can access SysKit Point. If the configuration was successful, all steps are marked with green checkmarks, and SysKit Point URL is shown.

Click the **Finish** button to open SysKit Point in the default browser, and you are ready to go.

To get started with SysKit Point, [read the Quick Start Guide article.](../how-to/syskit-point-quick-start-guide.md)

