---
description: This article explains how to enable and set up Power Platform data collection for Syskit Point. 
---

# Power Platform for Syskit Point

In order to start **collecting and monitoring Power Apps, Power Flows, Power Platform Environments,** you need to first connect your Power Platform to Syskit Point. This helps you keep track of your Power Platform resources in one place to manage them more effectively. 

In this article, you can find details on how to:

* [Enable Power Platform Data Collection](#enable-power-platform-data-collection)
* [Configure Reporting Limits](#configure-reporting-limits)
* [Assign Syskit Point Power Platform Admins](#syskit-point-power-platform-admins)


{% hint style="info" %}
**Please Note!** Power Platform is **now available as an add-on** purchase to your Syskit Point subscription. 

To enable the use of Power Platform for Syskit Point, [please contact us](https://www.syskit.com/contact-us/).

{% endhint %}

## Enable Power Platform Data Collection

Configuring the Power Platform feature in Syskit Point starts the Power Platform data collection, which enables you to generate Power Platform reports for a detailed overview of your Power Platform resources.

To enable the Power Platform data collection in Syskit Point, complete the following:

* Before the set up, the **Power Platform tile (1)** on the Dashboard shows the **Configure Now button (2)**

![Dashboard tile - Configure Now](../.gitbook/assets/power-platform-tile-configure.png)

* Clicking the button redirects you to the **Power Platform section of Settings (1)** 
* Under Power Apps and Power Automate, **select the checkbox** next to **Collect Power Apps and Power Automate data (2)**

To collect Power Platform data, you need to **consent** for Syskit Point to start collecting it.

* **Click the Login with Microsoft Authentication flow (3)** button and **log in with the Global Administrator account**
  * The confirmation modal appears, listing the permissions required for the Power Platform data collection
  * **Select the 'Consent on behalf of your organization' checkbox (4)** to provide Syskit Point with access to the specified resources
  * Note that the Power Platform data will not be collected until consented
  * For more information about the permissions, check the [Permission Requirements Change Log article](../requirements/permission-requirements-change-log.md#syskit-point-cloud-2025177)
* **Click Accept (5)** to start collecting Power Platform data in Syskit Point

![Configure Power Platform](../.gitbook/assets/power-platform-configuration.png)

![Configure Power Platform - Consent](../.gitbook/assets/power-platform-configuration-consent.png)

* [For details on how to enable Power BI data collection, take a look at this article.](../power-platform/enable-powerBI-data-collection.md)

Once the permissions are granted, you can see the **Status** in the Settings change to **Collecting Data** with a **green** checkbox next to it. 

If the box is unchecked, the Status shows the 'Please Enable Data Collection Above to Continue' warning message.

Once this is enabled, the first Power Platform data sync starts. When completed, summary data will show on the Power Platform dashboard tile. From there, you can drill to open specific reports, which provide more details about selected Power Platform resources.
For more details, [take a look at the Power Platform reports article](../power-platform/power-platform-reports/README.md)

{% hint style="information" %}
To stop the Power Platform data collection, uncheck the Collect Power Apps and Power Automate Data checkbox and save the change.
{% endhint %}

## Configure Reporting Limits

After **enabling the Power Platform data collection (1)**, additional settings are displayed, which affect the Power Platform reports and dashboard tile.

* You can set **Reporting Limits (2)** for how long environments, flows, or apps must be inactive before being flagged as such in the reports. The following can be set:
  * Inactive environments that don't have any activities in the last XX days
  * Inactive flows that haven't been run in the last XX days
  * Inactive apps that haven't been launched in the last XX days
* **Enter the number of days (3)** in the designated space
  * The number of days selected here is **reflected when showing data on the Power Platform reports** and the Power Platform **Dashboard tile**
  * The default/minimum number of days set as the inactivity period is 30 days
* **Click Save (4)** to store your preferences

![Power Apps and Power Automate](../.gitbook/assets/power-platform-power-point-reports.png)
 
## Power Platform Sync Limits

Syskit Point collects data for the following Power Platform resources:
* Power apps
  * Canvas (Standard & SharePoint Form)
* Cloud flows 
  * Automated
  * Instant
  * Scheduled

{% hint style="warning" %}
Solutions, Model-driven apps, and Desktop flows are not supported.
{% endhint %}


## Syskit Point Power Platform Admins

In Syskit Point, **role-based access ensures that users can only see and manage the resources they are responsible for**. To manage Power Platform resources in Point, you need to **enable access for Power Platform admins**. 

{% hint style="warning" %}
**Please note!**

* Assigning the **Power Platform Admin role in Syskit Point** to users **does not grant the Power Platform Administrator role in Entra ID** 
* **To successfully run actions** on Power Platform environments, apps, and flows, **Power Platform Admins in Syskit Point must have the Power Platform Administrator role assigned in Entra ID**
{% endhint %}

When signed in to Syskit Point, Syskit Point Power Platform Admins can:
* **Access all data related to Power Platform environments, apps, and flows**
* **Perform actions on Power Platform environments, apps, and flows, given they have the Power Platform Administrator role assigned in Entra ID**

The **Syskit Point Power Platform Admins** role enables users to:

* **View and manage Power Platform Settings** in Syskit Point
* **Access Syskit Point Power Platform reports**
* **Schedule Power Platform reports**
* **Perform Power Platform actions** on environments, apps, and flows
    * Note that the Power Platform Administrator Entra ID role must be assigned to successfully run actions on Power Platform environments, apps, and flows
* **Have access to the Power Platform Dashboard tile**
