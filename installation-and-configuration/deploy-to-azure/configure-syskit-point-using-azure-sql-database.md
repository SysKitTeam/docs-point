---
description: This article describes how to connect the SysKit Point to Azure SQL database
---

# Configure SysKit Point Using Azure SQL Database

{% hint style="warning" %}
**Please note** – for this option to work you need to have an **SQL database created** on your **Azure portal**, and you must use **SysKit Point v14.1** or **newer**.
{% endhint %}

## Connect to Azure SQL Database

### Configuration Step – Database

When the [installation of SysKit Point](https://docs.syskit.com/point/installation-and-configuration/install-syskit-point) is complete, proceed to the **SysKit Point Configuration**, click on **Create new database\(1\)** option and then click on **Next\(2\)**

![SysKit Point Configuration - Database](../.gitbook/assets/0%20%283%29.png)

### Configuration Step – Database Configuration

{% hint style="warning" %}
**Please note** – use the name and server you see in your Azure Portal.
{% endhint %}

The **Database server** should look like `<name_of_your_server>.database.windows.net`, while for the **Database name**, it will be anything you named your database on your **Azure SQL server**.

You can find the **Database serve**r and **name** if you go to your **Azure portal**:

* Click on your Azure SQL database, go to **Settings** and click on **Connection Strings**\(1\)
* You can see the **Database server and name**\(2\) in a connection string box.

![Azure Portal SQL database settings page - Connection strings](../.gitbook/assets/1%20%283%29.png)

On database configuration step you will be required to enter the:

* **Database server**\(1\)
* **Database name**\(2\)

Select the option **Use SQL authentication**\(3\) to access the database and use the **credentials** of the **Server Administrator** on your **Azure SQL server**.

Click **Test Connection**\(4\) to see if **SysKit Point** can connect to the desired database.

![SysKit Point Configuration - Database Configuration](../.gitbook/assets/2%20%283%29.png)

If the connection is successful, click **Next** to proceed.

### Configuration Step – Service Settings

On the Service Settings tab, use a [Service Account](https://docs.syskit.com/point/requirements/permission-requirements#service-account/) credentials to proceed further.

![SysKit Point Configuration - Service Settings](../.gitbook/assets/3%20%283%29.png)

### Configuration Step – Connect to Office 365

On this step click on to **Connect to your tenant**\(1\)

![SysKit Point Configuration - Connect to Office 365](../.gitbook/assets/4%20%283%29.png)

and when the Microsoft login prompt appears, enter the credentials of the **Global Administrator** in your **Office 365 environment**, after completion, the screen should look like this, click next to proceed further.

![SysKit Point Configuration - Connect to Office 365 connection added](../.gitbook/assets/5%20%283%29.png)

### Configuration Step – Web Application Settings

The default URL for the web interface of SysKit Point is set to `https://fully-qualified-domain-name` and port to `443`. You can customize these values as you wish at any point in time, but make sure to also configure your DNS for the customized URL to correctly resolve the target address.

![SysKit Point Configuration - Web Application Settings](../.gitbook/assets/6%20%283%29.png)

Click next to start the configuration.

### Configuration Step – Finish

When the configuration is completed, if everything was configured correctly the screen will look like this.

![SysKit Point Configuration - Finish](../.gitbook/assets/7%20%281%29.png)

And you are now able to log into the SysKit Point using your Office 365 Credentials.

