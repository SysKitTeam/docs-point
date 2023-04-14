---
description: >-
  This article explains how to upgrade SysKit Point to the latest version
  available.
---

# Upgrade SysKit Point

Since **SysKit Point** is frequently getting new features, we highly recommend deploying the latest available version to use its maximum potential.

{% hint style="warning" %}
**Please note!**\
This article **describes SysKit Point upgrades from version 20 onwards**.

* **If you are using SysKit Point 19**, [contact us](https://www.syskit.com/company/contact-us/) to arrange a guided migration to the latest version due to changes in SysKit Point's architecture.
{% endhint %}

## Checking for Updates

**SysKit Point automatically checks for updates** every day, outside of working hours. **In case a new update is available, every SysKit Point user** **receives a popup message** at the bottom of the Home screen when they open the web application.

![Home screen - New Update Available](<../.gitbook/assets/upgrade-syskit-point\_new-update-available (1) (4) (3) (1) (1) (1) (1).png>)

The **Read What's New** **link (1)** opens a new tab in your browser at the [Releases](../releases/) section in SysKit Point documentation, where you can find out about new features, improvements, and bug fixes by each product version.

Clicking the **Download Latest Version (2)** link will redirect you to the latest **Release Note page** displaying the **Deploy to Azure** button.

**To hide the Update message**, **click the Close link (3)** visible on the right side. The message will stay hidden until the next time you log in to SysKit Point.

## Upgrading to the Latest Version

After you **open the latest Release note**, **click** the **Deploy to Azure button (1)**. ![Deploy to Azure Button](../.gitbook/assets/upgrade-syskit-point\_deploy-button.png)

{% hint style="warning" %}
**Please note!** When entering the App service name, **make sure NOT to enter the app service name ending with '-BE'**. **Entering the backend app service name in the upgrade process results in an invalid upgrade and SysKit Point not working correctly.**
{% endhint %}

The **Custom deployment** screen in Azure Portal opens. Here you need to:

* **Select the Resource group (1)** wherein the current SysKit Point version is deployed
* **Select Region (2)** - use the location of your currently deployed SysKit Point resources
* **Enter App service Name (3)** - enter the App Service resource Name; you can **find the App Service name (5)** by navigating to the Overview screen of SysKit Point resource group
* **Click Next: Review + create > (4)** - Review + create screen opens showing entered data; check that the entered data is correct and click **Create**

![Azure Portal - Custom Deployment](../.gitbook/assets/upgrade-syskit-point\_custom-deployment.png)

![Resource Group - App Service Name](../.gitbook/assets/upgrade-syskit-point\_app-service-name.png)

## Next Steps

After the deployment is completed, you can:

* **Access the SysKit Point web app**
* [Check if a re-consent is needed after the upgrade](../requirements/permission-requirements-change-log.md)

{% hint style="info" %}
**Hint!**\
Use the [What's new](https://www.syskit.com/products/point/whats-new/) page as an additional source of information on new features available in the latest version of SysKit Point.
{% endhint %}
