---
description: This article describes how to enable and customize alerts in SysKit Point.
---

# Configure Alerts

**Alerts** feature in SysKit Point **allows you to track many events** that are collected within **Microsoft 365 audit logs**.  

**SysKit Point Admins** and **SysKit Point Collaborators** \(site admins, Microsoft Teams and Microsoft 365 Group owners, and full control users\) can configure alerts. Point Admins can manage all created alerts regardless of who created them. 

You can **enable alerts on the following screens**:

* **Sites overview screen** 
* **Microsoft Teams & Groups overview screen** 
* **Users overview screen** 

You can **enable alerts on the following scopes and objects**:
* **tenant-wide** - to monitor events regardless of which site they come from or who caused them
* **specific SharePoint site** - to monitor events that occurred on the selected site; additionally, when exploring site content, you can define alerts on the following objects:
    * **subsite**
    * **document library**
    * **folder**
    * **document**
* **specific user** - to monitor events caused by a specific user

## Alert Types and Categories
This section describes all alert types and lists all available alerts for each type.
### Tenant Wide Alerts

You can enable and configure tenant wide alerts on the following overview screens:
 * **Sites**
 * **Microsoft Teams & Groups**
 * **Users**

 The **Configure Tenant Wide Alerts action (1)** is available in the right-side panel on all of the listed screens.

 ![Sites - Configure Tenant Wide Alerts action](../.gitbook/assets/configure-alerts_configure-tenant-wide-alerts.png)

{% hint style="warning" %}
**Please note!** 
Tenant-wide alerts available on the **Sites overview screen** and **Microsoft Teams & Groups overview screen** are identical because they monitor the same SharePoint events; therefore, changes on one screen will also be visible on the other.
{% endhint %}

The following **tenant wide alert categories and alerts are available** for Microsoft Teams, Microsoft 365 Groups, OneDrive, and sites:
| Alert Category | Alerts | Overview screen |
| :--- | :--- | :--- |
| External Collaboration | Shared File or Folder Externally | Sites, Microsoft Teams & Groups |
| Sharing Activities | Shared File or Folder, Shared With Everyone | Sites, Microsoft Teams & Groups |
| Site Administration Activities | Site Administrators Changed, Changed Sharing Policy, Created Site Collection, Deleted Site, Renamed Site | Sites, Microsoft Teams & Groups |
| Microsoft Teams Activities | Created Team, Deleted Team | Sites, Microsoft Teams & Groups |
| User Activities | User Logged in, User Login Failed | Users |
| User & Role Administration Activities | Added User, Deleted User, Added User to Role, Removed User from Role | Users |

### Site-Specific Alerts

You can enable site-specific alerts from the following screens:
* **Sites overview screen** by selecting a site
* **Microsoft Teams & Groups overview screen** by selecting a Microsoft Team or a Microsoft 365 Group 
* **Site details screen** - as mentioned, you can configure alerts for specific SharePoint objects:
    * **subsite**
    * **document library**
    * **folder**
    * **document**
* **Microsoft Teams and Microsoft 365 Group details screen**

The **Configure Alerts action (1)** is available in the right-side panel.

 ![Sites - Configure Alerts action](../.gitbook/assets/configure-alerts_configure-alerts.png)

The following table shows **availability of alerts per scope**:

| Alert Category | Alerts | Resource / Scope |
| :--- | :--- | :--- |
| External Collaboration | Shared File or Folder Externally | Microsoft Teams, Microsoft 365 Groups, OneDrive, sites |
| Sharing Activities | Shared File or Folder, Shared With Everyone | Microsoft Teams, Microsoft 365 Groups, OneDrive, sites |
| Site Administration Activities | Site Administrators Changed, Added User or Group to SharePoint Group, Changed Sharing Policy, Deleted Site, Renamed Site, Created SharePoint Group, Deleted SharePoint Group, Updated SharePoint Group | Microsoft Teams, Microsoft 365 Groups, OneDrive, sites |
| File & Folder Activities | Accessed File, Checked In File, Checked Out File, Copied File, Detected Malware in File, Downloaded File, Moved File, Uploaded File, Created Folder, Changed File or Folder| Microsoft Teams, Microsoft 365 Groups, OneDrive, sites |
| SharePoint List Activities | Created List, Deleted List | Microsoft Teams, Microsoft 365 Groups, OneDrive, sites |
| Microsoft Teams & Groups Membership Changes | Added Member, Removed Member | Microsoft Teams, Microsoft 365 Groups |

### User-Specific Alerts

User-specific alerts can be enabled on the following screens:
* **Users overview screen** by selecting a user
* **User details screen**

The **Configure Alerts action (1)** is available in the right-side panel.

 ![Users - Configure Alerts action](../.gitbook/assets/configure-alerts_configure-user-alerts.png)

The following **alert categories and alerts are available for a specific user**:
| Alert Category | Alerts |
| :--- | :--- |
| User Activities | User Logged in, User Login Failed | 

## Enabling and Customizing Alerts

{% hint style="warning" %}
**Please note!** 
The following section explains how to enable and customize an alert on a specific site. 
The same principles from this example also apply when dealing with alerts for other types of resources - Microsoft Teams, Microsoft 365 Groups, OneDrive, users, or SharePoint objects such as document libraries or folders.
{% endhint %}

To enable alerts for a specific site:
* **navigate to the Sites overview screen**
* **select a site (1)**
* **click the **Configure Alerts \(2\)** link

 ![Sites overview screen - Configure Alerts action](../.gitbook/assets/configure-alerts_configure-alerts.png)

The **Configure Alerts** dialog opens. Here, the following is available:
* **alert categories (1)**
* **alerts (2)** grouped by categories
* **search (3)**
* **alert state toggle (4)**
* **alert options section (5)** - section is inactive untill the alert is enabled

![Configure Alerts dialog](../.gitbook/assets/configure-alerts_configure-alerts.png)

To enable and start editing an alert, switch the **toggle next to the alert title \(4\)**.  

After you enable the alert, the alert options section is activated. Here you can customize alert options separated into the following tabs:
* **Notifications (1)**
* **Filters (2)**
* **Event Type (3)**

![Configure Alerts - Tabs](../.gitbook/assets/configure-alerts_configure-alerts-tabs.png)

{% hint style="warning" %}
**Please note!** 
Tabs and filters are displayed depending on the selected alert. For example, the **Event Type** tab is only available on alerts that monitor multiple events.
{% endhint %}

Let's examine options on each tab separately.

On the **Notifications** tab you can:
* **define email notification recipients (1)** - you can select on or multiple options options:
    * **Site Owners**
    * **SysKit Point Administrators**
    * **Custom Recipients** - select a user from your Azure AD
* **define notification limits (2)**  
    * **unlimited** - emails are sent regardless how many alerts are triggered daily
    * **selected number** - emails are no longer sent after the alert is triggered more than selected number of times

![Configure Alerts - Notifications tab](../.gitbook/assets/configure-alerts_notifications-tab.png)

In the **Filters** tab, you can limit the alerts to be triggered only when:
* **selected user(s) caused an event (1)** - the following filter options are available:
    * **All Users** - selected by default
    * **External Users**
    * **Internal Users**
    * **Any of These** - additional selection of users is required
    * **None of These** - additional selection of users is required
* **action was performed on selected user(s) (2)** - the following filter options are available:
    * **All Users** - selected by default
    * **External Users**
    * **Internal Users**
    * **Any of These** - additional selection of users is required
    * **None of These** - additional selection of users is required
* **event has come from the selected IP or IP range (3)** - the following filter options are available:
    * **Any IP Range** - selected by default
    * **Like Any of** - additional input of IPs / IP ranges is required
    * **Equals None of** - additional input of IPs / IP ranges is required

![Configure Alerts - Filters tab](../.gitbook/assets/configure-alerts_filters-tab.png)

In the **Events** tab, you can choose events for which SysKit Point will raise an alert. By default, all events are selected.
Click the checkbox to ignore the event.

![Configure Alerts - Events tab](../.gitbook/assets/configure-alerts_events-tab.png)

## Alert E-mail

When SysKit Point collects audit logs, if there is an event you decided to monitor by enabling an alert, an **e-mail** is sent to defined recipients. 

In the picture below is an example of such an e-mail. Click the **View Alerts Details** link to access the Alert details screen in SysKit Point. 

![Alert E-mail](../.gitbook/assets/configure-alerts_alert-email.png)

## Editing Alerts

The **Edit Alert** action is available on two screens - **Alerts overview screen** and **Alert Details**.

![Edit Alert dialog](../.gitbook/assets/configure-alerts_alerts-overview-edit-alert-action-dialog.png)


{% hint style="success" %}
**Please note!** 
You can edit all alerts on overview screens where you initially enabled them - both tenant-wide and site- or user-specific alerts.
{% endhint %}

## Alert Reports

When you login into SysKit Point as Point admin, you will see the **Alerts** tile in the lower part of the Home screen.

![Home screen - Alerts tile](../.gitbook/assets/configure-alerts_welcome-home-alerts-tile.png)

Click the tile to open the **Alerts** report. Here you can see all alerts that are currently enabled.

{% hint style="info" %}
**Hint!** 
You can also access the **Alerts** screen from the **user profile menu** in the upper right corner.
{% endhint %}

![Alerts report link](../.gitbook/assets/configure-alerts_persona-dropdown-alerts-overview-link.png)

On the **Alerts** overview screen you can:

* switch the view between **alert and scope \(1\)** 
* select additional columns in the **column chooser \(2\)** 
* find two actions - **Disable Alert** and **Edit Alert \(3\)** when you select a single row 

![Alerts overview screen](../.gitbook/assets/configure-alerts_alerts-overview-screen.png)

{% hint style="info" %}
**Hint!** 
**Disable alert** action allows selection of multiple rows.
{% endhint %}

When you haven't selected anything on the screen, there is an **Add Alert \(2\)** action visible in the side panel. With this, you can define tenant-wide alerts for sites.  

Here is also a link to the **Alerts History \(1\)** screen, which shows all triggered alerts in your environment.

![Alerts Overview screen &#x2013; no row selection ](../.gitbook/assets/configure-alerts_alerts-overview-screen-no-row-selection.png)

On the **Alerts History** screen, you can:

* select one or multiple rows and **mark alerts as resolved and write a comment \(1\)** 
* open **details screen for a single alert** **\(2\)** 

![Alerts History screen](../.gitbook/assets/configure-alerts_alerts-history-screen.png)

**Alert Details** screen allows you to see additional information about the alert. Here you can:

* **mark alert as resolved \(1\)** 
* **edit settings for the alert \(2\)** 
* **expand the More Details \(3\)** section - here, all audit logs related to this alert are listed
* **export** both sections - **triggered alerts and alert audit details \(4\)** 

![Alert Details screen](../.gitbook/assets/configure-alerts_alert-detials-screen.png)

{% hint style="info" %}
**Hint!** 
When you open the **Notifications dropdown** from the user profile menu, you can: 

* click the **View Details link \(1\)** to open the **Alert Details** screen for a specific alert 
* click the **View All Alerts link \(2\)** to open the **Alerts History** screen 
{% endhint %}

![Notifications dropdown ](../.gitbook/assets/configure-alerts_notifications-dropdown.png)

