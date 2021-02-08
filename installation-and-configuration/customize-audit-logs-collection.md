---
description: >-
  This section describes how to customize the Audit Logs collection using SysKit
  Point.
---

# Customize Audit Logs Collection

Audit logs can provide you with **insights into all activities** related to the user and administration activities in your Microsoft 365 environment.‌

Users that are assigned **SysKit Point Admin role** can configure activities that are going to be collected in these locations:

* **SysKit Point Configuration Wizard**
* **Audit Logs section in Settings**

## SysKit Point Configuration Wizard

When configuring **SysKit Point**, on the **Connect to Microsoft 365** step, you have the following audit options on disposal:

* **Store audit logs \(1\)**
* **Protect user privacy \(2\)**

![SysKit Point Configuration - Audit logs options](../.gitbook/assets/customize-audit-logs-collection-01-audit-options.png)

### Store Audit Logs Option

By default, the **Store audit logs** option is enabled, meaning that SysKit Point will process and store the audit logs to your local disk, by default in the **C:\ProgramData\SysKit\Point\AuditIndex** folder.

{% hint style="warning" %}
**Please note!**  
Regardless of your selection to store them or not, audit logs are **regularly processed by SysKit Point** to track changes and activity in your Microsoft 365 environment. Storing audit logs gives you the possibility to access audit data for more extended periods than available in Microsoft 365.
{% endhint %}

### Protect User Privacy Option

Turning this option on results in the following:

* **User activity data**, such as file and permissions changes, **will be hidden and protected from Administrator supervision** 
  * **User Activity report will be hidden from SysKit Point user interface**
  * **Access to the File and Page Activities report will be hidden**
  * **Summary data in the Analytics & Usage tile will remain visible, but cannot be drilled to access data for a specific user**
* **User activity** data will, however, be collected and stored

{% hint style="warning" %}
**Please note!**  
User activity data continues to be collected and stored, to be readily available if needed, in case of a security incident.
{% endhint %}

The following rules apply regarding the User Privacy option:

* **By default, this option is turned off**
* **The option can be set for each tenant connected with SysKit Point independently**
* **Changing the option is only possible through the SysKit Point Configuration Wizard**

{% hint style="warning" %}
**Please note!**  
The **Protect user privacy** option is disabled automatically if the **Store audit logs option** is turned off.
{% endhint %}

## Audit Logs Settings

Audit log settings can also be configured after the initial configuration of **SysKit Point**. To do so:

* Open the **Settings** screen
* Navigate to the **Audit** &gt; **Audit Logs \(1\)** page

Here, you can:

* **Turn the storage of Audit Logs on or off \(2\)**
* **View the Index Size \(3\)** information
* **View the number of events \(4\)** in the Audit Index
* **Configure the Audit Index storage location \(5\)**
* **Select activities to collect \(6\)**
* **Enable and set up audit logs data retention \(7\)** - by default, this option is turned off; when enabled, SysKit Point will delete audit logs older than specified

![Audit Logs Settings](../.gitbook/assets/customize-audit-logs-collection-02-audit-settings.png)

Audit logs activities that are being collected can be found by clicking the **Select activities to collect \(6\)** link.

A new dialog opens, showing all audit log categories and activities available in SysKit Point. Here you can:

* **Adjust which audit log categories will be collected by clicking the checkbox \(1\)** next to a category
* **Expand categories \(2\)**
* **Mark only specific activities within a category to be collected \(3\)**
* **Reset Selection \(4\)** to default
* **Confirm your changes** by clicking the **OK button \(5\)** on the **Audit Logs** screen.

![Select activities to collect screen](../.gitbook/assets/customize-audit-logs-collection-03-select-activities.png)

Available audit log categories:

* **Sharing and access request activities**
* **Application administration activities**
* **Exchange admin activities**
* **Exchange mailbox activities**
* **User administration activities**
* **Directory administration activities**
* **Azure AD group administration activities**
* **Role administration activities**
* **Site permissions activities**
* **Site administration activities**
* **Microsoft Teams activities**
* **File and page activities**
* **Synchronization activities**
* **Folder activities**
* **Data governance**
* **SharePoint list events**
* **User activities**

### Exchange Logs

{% hint style="warning" %}
**Please note!**  
By default, Exchange logs are **not collected**; at least one Exchange activity must be selected for SysKit Point to start collecting and storing Exchange log data.
{% endhint %}

To select Exchange activities:

* **Open the Select activities to collect dialog in Audit settings**
* **Choose from two available categories:**
  * **Exchange admin activities \(1\)**
  * **Exchange mailbox activities \(2\)**
* **Click OK** to confirm

![Exchange log categories](../.gitbook/assets/customize-audit-logs-collection-04-exchange-categories.png)

{% hint style="success" %}
**Please note!** It can take up to 30 minutes for Syskit Point to collect Exchange log data.
{% endhint %}

To view collected Exchange logs, use the **Exchange Logs report** available in the Report Center.

