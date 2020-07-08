---
description: This article guides you through the SysKit Point installation.
---

# Install SysKit Point

**SysKit Point** is a **web application** that can be installed on a Windows machine or server in your environment.

{% hint style="success" %}
Before continuing, please check the [Azure resource requirements](azure-resource-requirements.md) and [permission requirements](permission-requirements.md).
{% endhint %}

## Installation Steps

{% hint style="warning" %}
**Please note!**  
To install SysKit Point, make sure that the **RDP connection \(port 3389\)** that allows you to access your virtual machine is enabled. After the configuration, the inbound rule allowing RDP connections can be removed.
{% endhint %}

1. **Connect to the Azure Virtual Machine** using RDP connection
2. [Download the SysKit Point setup file](https://my.syskit.com/).
3. **Unpack and run the setup file** - **SysKitPointSetup.exe**. The wizard will guide you through the installation steps.
4. Check the **I Accept the terms of the license agreement** option to accept the [EULA](https://www.syskit.com/eula/) and click **Next &gt;** to proceed.
5. By default, the installation folder is set to **C:\Program Files\SysKit\Point**. You can modify it by clicking the **Change** button. Once selected, click **Next &gt;** to proceed. 
65. By default, the **Run Configuration Wizard now** option is selected. **SysKit Point Configuration Wizard** will, therefore, automatically start when you click the **Finish** button. Alternatively, you can always start the Configuration Wizard manually by running it from the installation folder. The default location is: **C:\ProgramFiles\SysKit\Point\Host\Configuration.exe**.

To continue with SysKit Point configuration, proceed to the [configuration article](configure-syskit-point-on-azure-vm.md).

## Related Topics

* [Azure Resource Requirements](azure-resource-requirements.md)
* [Permission Requirements](permission-requirements.md)
* [Configure SysKit Point on Azure VM](configure-syskit-point-on-azure-vm.md)

If you have additional questions or concerns, please [contact us](https://www.syskit.com/contact-us/). 