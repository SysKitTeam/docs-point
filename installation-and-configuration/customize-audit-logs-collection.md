---
description: >-
  This section describes how to customize Audit Logs collection using SysKit
  Point.
---

# Customize Audit Logs Collection

Audit logs can provide you insights into all activities related to user and administration activities in your Office 365 organization.

You have the option to turn storage of Audit Logs on or off while you are configuring **SysKit Point** in **Configuration Wizard**.

You can do this action while entering your tenant with the Office 365 Global admin account.

After you successfully entered your credentials, a new window will open.

Here you can mark or unmark checkbox for storing Audit Logs, depending on whether you need it or not.

![Configuration wizard - Audit Logs settings](../.gitbook/assets/customize-audit-logs-collection_store-audit-logs-settings.png)

{% hint style="info" %}
Regardless of your selection to store or not to store **Audit Logs** locally to your disk, they are still regularly **processed by SysKit Point**.
{% endhint %}

Audit Logs are by default marked for storing.

If you choose to collect Audit Logs, they will be stored to your local disk storage with the default path set to **C:\ProgramData\SysKit\Point\AuditIndex**.

In the **SysKit Point** application, you can open **Settings** and under section **Audit** -&gt; **Audit Logs**, manage some options.

Here, you can turn the storage of Audit Logs on or off, and configure **Audit Index storage location**.

The information about **Index** **Size** and the **number** **of** **events** in the Audit Index is provided here too.

![Audit Logs tab \(1\) in Settings - Store Audit Logs option \(2\), Audit Index storage location \(3\) and link to manage Audit activities that are collected \(4\)  ](../.gitbook/assets/customize_audit_logs_collection_settings_audit_logs_options.png)

Audit Logs collected activities can be found if you click on the blue link **Select activities to collect**.

![](../.gitbook/assets/customize_audit_logs_collection_select_activities_to_collect.png)

In the new window there will be categories of all activities:

* Sharing and access request activities
* Application administration activities
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

You can adjust which activities are going to be collected by clicking the checkbox next to categories.

If you need only specific activities to be collected within one category, just mark those activities and click **OK** and then **Save** button in **Audit Logs** screen.

The last option in the Audit Logs screen is **Data Retention**.

By default, this option is turned off.

When enabled, you can set a time frame in the number of days, weeks, or months for the application to delete older Audit Logs folders than the specified date.

