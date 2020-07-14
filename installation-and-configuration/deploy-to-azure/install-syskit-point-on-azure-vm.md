---
description: This article guides you through the SysKit Point installation.
---

# Install SysKit Point on Azure Virtual Machine

**SysKit Point** is a **web application** that can be installed on an Azure Virtual Machine in your Azure cloud environment.

{% hint style="success" %}
Before continuing, please make sure that all [prerequisites](prerequisites/README.md) are met.
{% endhint %}

## Installation Steps

{% hint style="warning" %}
**Please note!**  
To install SysKit Point, make sure that the **RDP connection \(TCP port 3389\)** that allows you to access your virtual machine is enabled. After the configuration, the inbound rule allowing RDP connections can be removed.
{% endhint %}

1. **Connect to the Azure Virtual Machine** using RDP connection
2. [Download the SysKit Point setup file](https://my.syskit.com/).
3. **Unpack and run the setup file** - **SysKitPointSetup.exe**. The wizard will guide you through the installation steps.
4. Read and accept the license agreeement - [EULA](https://www.syskit.com/eula/) - click **Next &gt;** to proceed.
5. By default, the installation folder is set to **C:\Program Files\SysKit\Point**. You can modify it by clicking the **Change** button. Once selected, click **Next &gt;** to proceed. 
6. By default, the **Run Configuration Wizard now** option is selected. **SysKit Point Configuration Wizard** will, therefore, automatically start when you click the **Finish** button. Alternatively, you can always start the Configuration Wizard manually by running it from the installation folder. The default location is: **C:\ProgramFiles\SysKit\Point\Host\Configuration.exe**.

To continue with SysKit Point configuration, proceed to the [configuration article](configure-syskit-point-on-azure-vm.md).

## Related Topics

* [Create Azure Virtual Machine](prerequisites/create-azure-vm.md)
* [Create Azure SQL Database](prerequisites/create-azure-sql-database.md)
* [Configure SysKit Point on Azure VM](configure-syskit-point-on-azure-vm.md)
* [Allow Access to SysKit Point Web-App](allow-access-to-syskit-point-web-app.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/).

