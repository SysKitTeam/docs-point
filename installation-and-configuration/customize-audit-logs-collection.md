---
description: >-
  This section describes how to customize the Audit Logs collection using SysKit
  Point.
---

# Customize Audit Logs Collection

Audit logs can provide you with **insights into all activities** related to user and administration activities in your Office 365 environment.‌

Users that are assigned **SysKit Point Admin role** can configure activities that are going to be collected in these locations:

* SysKit Point Configuration Wizard
* Audit Logs section in Settings

## SysKit Point Configuration Wizard

### Audit Logs

When configuring **SysKit Point** in **Configuration Wizard**, you have the **option to turn the storage of Audit Logs on/off**. The setting is available on the screen shown below, which appears after you enter the Office 365 Global admin credentials on the Configuration Wizard's **Connect to Office 365** step. By default, the **Store audit logs** option is enabled, meaning that SysKit Point will process and store the audit logs to your local disk, by default in the **C:\ProgramData\SysKit\Point\AuditIndex** folder.

![Store audit logs setting in the Configuration Wizard](../.gitbook/assets/customize_audit_logs_collection_store_audit_logs_settings.png)

{% hint style="warning" %}
**Please note!**  
Regardless of your selection to store or not to store them, audit logs are **regularly** **processed by SysKit Point** to track changes and activity in your Office 365 environment. Storing audit logs gives you the possibility to access audit data for longer periods than available in Office 365.
{% endhint %}

### User privacy option

This option is by default turned off.

When turned on, it will not show all the information in the application regarding user activity such as file and permissions changes.

{% hint style="info" %}
**Hint!**                                                                                                                                                     Information is collected and stored and will be hidden and protected from Administrator supervision.
{% endhint %}

The option can be defined for each tenant that is connected with SysKit Point.

{% hint style="warning" %}
**Please note!**                                                                                                                                              Protect user privacy option is disabled automatically if storing audit logs is turned off.
{% endhint %}

## Audit Logs section in Settings

Audit log settings can also be configured after the initial configuration of **SysKit Point**. To do so, open the **Settings** screen, and navigate to the **Audit** &gt; **Audit Logs** page. Here, you can turn the storage of Audit Logs on or off, as well as configure the **Audit Index storage location**. The information about **Index** **Size** and the **number** **of** **events** in the Audit Index is provided here too.

![Audit Logs page \(1\) in Settings - Store Audit Logs option \(2\), Audit Index storage location \(3\), and link to manage Audit activities that are collected \(4\)](../.gitbook/assets/audit-logs-activities-2.png)

Audit logs activities that are being collected can be found by clicking the **Select activities to collect** link.

![Select activities to collect screen](../.gitbook/assets/customize-audit-logs-collection_select-activities-to-collect.png)

In the new window, all categories and activities are shown:

* Sharing and access request activities
* Application administration activities
* Exchange admin activities
* Exchange mailbox activities
* User administration activities
* Directory administration activities
* Azure AD group administration activities
* Role administration activities
* Site permissions activities
* Site administration activities
* Microsoft Teams activities
* File and page activities
* Synchronization activities
* Folder activities
* Data governance
* SharePoint list events
* User activities.

You can **adjust which activities are going to be collected by clicking the checkbox** next to categories. If you need only specific activities to be collected within one category, mark those activities and click **OK**. Save your changes by clicking the **Save** button on the **Audit Logs** screen.

The last section available on the Audit Logs screen to configure is the **Data Retention** section. **By default, this option is turned off.** **When enabled, SysKit Point will delete audit logs older than specified.**

### Exchange Logs

SysKit Point doesn't collect exchange logs by default - they have to be selected among audit activities as shown in the picture above.

After you select exchange activities, wait around 15-20 minutes until Syskit Point collects the data.

You can now go to Reports Center and open **Exchange Logs report** that will show exchange logs in your environment.

In the **Options screen**, you can choose which period and which specific activities you want to generate in the report.

Also, you can search for logs for a specific user mailbox if you need to.

![Options screen for Exchange Logs report](../.gitbook/assets/customize_audit_logs_collection-options_screen_for_exchange_logs_report.png)

![Exchange Logs report](../.gitbook/assets/customize-audit-logs-collection_exchange-logs-report.png)

