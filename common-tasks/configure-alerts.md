---
description: This article describes how to handle alerts in SysKit Point.
---

# Configure Alerts

**Alerts** feature in SysKit Point **allows you to track many events** that are collected within **Microsoft 365 audit logs**.  

**SysKit Point Admins** and **SysKit Point Collaborators** \(site owners and full control users\) can configure alerts. Point Admins can manage all created alerts regardless of who created them. 

You can enable alerts on the following screens:

* **Sites Overview** 
* **Microsoft Teams & Groups Overview** 
* **Users Overview** 

You can configure alerts on a **global level** of your tenant or individually for a **specific site or user**.

## Tenant wide alerts

These tenant wide alerts can be configured on Overview screens.

{% hint style="warning" %}
**Please note!** Tenant wide alerts on the **Sites Overview** screen and **Microsoft Teams & Groups Overview** screen are the same because they are focused on sites.
{% endhint %}

For **sites**, there are four alert categories:

* **External Collaboration** 
* **Sharing Activities** 
* **Site Administration Activities** 
* **Microsoft Teams Activities** 

For **users**, there are two alert categories:

* **User Activities** 
* **User & Role Administration Activities** 

## Specific alerts for site or user

Specific alerts for the site or user can also be created. On Overview screens, select one site/user and click on **Configure Alert** action in the side panel. 

For **sites**, there can be a maximum of seven alert categories to choose from, depending on the resource that you selected. These categories are:

* **External Collaboration** 
* **Sharing Activities** 
* **Site Administration Activities** 
* **File & Folder Activities** 
* **SharePoint List Activities** 
* **Microsoft Teams & Groups Membership Changes** 
* **Microsoft Teams Activities** 

For **users**, there is only one alert category **User Activities** with two alerts - **User Logged in**, **User Login Failed**.

## Enabling alerts

In the side panel of the Sites Overview screen, you will notice the link **Configure Tenant Wide Alerts \(1\)**.

![Sites Overview &#x2013; Configure Tenant Wide Alerts action](../.gitbook/assets/configure-alerts_sites-overview-configure-tenant-wide-alerts-action.png)

A dialog screen will open when you click on it.  

You will see few alert categories on the left side.  

To start editing one alert, switch the state of **toggle button next to the title \(1\)**.  

When you have an active alert already, a **green notification \(2\)** will be present next to the appropriate alert category. 

![Configure Alerts dialog](../.gitbook/assets/configure-alerts_configure-alerts-dialog.png)

In total, there can be three sections in defining an alert:

* **Notifications \(1\)** 
* **Filters \(2\)** 
* **Event Type \(3\)** 

First, you must **define recipients** - choose between SysKit Point Admins and/or custom recipients. 

Notification limits that are sending daily can be set from the dropdown menu. 

![Configure Alerts dialog - sections](../.gitbook/assets/configure-alerts_configure-alerts-dialog-sections.png)

In the **Filters** section, you can define which **users** and **IP ranges** will trigger the alert. 

There are many combinations for you to set up. You can set the alert only for external users or some specific one. 

![Configure Alerts dialog &#x2013; Filters section](../.gitbook/assets/configure-alerts_configure-alerts-dialog-filters-section.png)

For some alerts, you can even choose the users on which the events were performed on. 

If there are more events related to the alert, the **Event Type** section will also be present. 

You can turn off certain events if you like. 

![Configure Alerts dialog &#x2013; Event Type section](../.gitbook/assets/configure-alerts_configure-alerts-dialog-event-type-section.png)

When the alert is created, and later event is performed and collected by audit logs, an e-mail will be sent to recipients that you defined while configuring the alert. 

In the picture below is the example of an e-mail. You can access the alert details screen by clicking on the **View Alerts Details** link. 

![Alert E-mail](../.gitbook/assets/configure-alerts_alert-email.png)

## Editing alerts

**Edit Alert** action is available on two screens - **Alerts Overview** and **Alert Details**.

![Alerts Overview &#x2013; Edit Alert action dialog](../.gitbook/assets/configure-alerts_alerts-overview-edit-alert-action-dialog.png)

You can always edit alerts on Overview screens where you created them - both tenant wide and specific site/user alert.

## Accessing alert reports

When you login into SysKit Point as Point admin, you will see tile **Alerts** in the lower part of the screen.

![Welcome Home &#x2013; Alerts tile](../.gitbook/assets/configure-alerts_welcome-home-alerts-tile.png)

If you click on the tile, the **Alerts Overview** report will open. Here you can see all alerts that are created and currently active.

{% hint style="info" %}
**Hint!** You can also access the **Alerts Overview** screen from the **persona icon** in the upper right corner of every screen in the application.
{% endhint %}

![Persona dropdown &#x2013; Alerts Overview link ](../.gitbook/assets/configure-alerts_persona-dropdown-alerts-overview-link.png)

On the **Alerts Overview** screen you can:

* switch the view between **alert and scope \(1\)** 
* select additional columns in **column chooser \(2\)** 
* find two actions - **Disable Alert** and **Edit Alert \(3\)** when you select one row 

![Alerts Overview screen](../.gitbook/assets/configure-alerts_alerts-overview-screen.png)

{% hint style="info" %}
**Hint!** **Disable alert** action allows multiple row selections.
{% endhint %}

When you haven't selected anything on the screen, in the side panel, there is an action **Add Alert \(2\)**. With this, you can define tenant wide alerts for sites.  

Here is also a link to the **Alerts History \(1\)** screen which shows all triggered alerts in your environment.

![Alerts Overview screen &#x2013; no row selection ](../.gitbook/assets/configure-alerts_alerts-overview-screen-no-row-selection.png)

On the **Alerts History** screen you can:

* select one or multiple rows and **mark alerts as resolved and write a comment \(1\)** 
* open **details screen for a single alert** **\(2\)** 

![Alerts History screen](../.gitbook/assets/configure-alerts_alerts-history-screen.png)

**Alert Details** screen allows you to see additional information about the alert and here you can:

* **mark alert as resolved \(1\)** 
* **edit settings for the alert \(2\)** 
* **expand the More Details \(3\)** section - here are all audit logs for this alert 
* **export** both sections - **triggered alerts and alert audit details \(4\)** 

![Alert Details screen](../.gitbook/assets/configure-alerts_alert-detials-screen.png)

{% hint style="info" %}
**Hint!** When you open the **Notifications dropdown** from the upper right menu on every screen within the application, you can: 

* click on the **View Details link \(1\)** to open the **Alert Details** screen for a specific alert 
* click on **View All Alerts link \(2\)** to open the **Alerts History** screen 
{% endhint %}

![Notifications dropdown ](../.gitbook/assets/configure-alerts_notifications-dropdown.png)

