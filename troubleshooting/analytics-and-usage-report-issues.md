---
description: This article explains how to change privacy settings to fix issues with analytics and usage reports in SysKit Point.
---

# Analytics and Usage Report Issues

## Problem

On September 1st, Microsoft changed to **Microsoft 365 usage analytics** and **pseudonymized user-level information by default**. 
[To see a complete list of affected products and APIs, visit this link.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/privacy-changes-to-microsoft-365-usage-analytics/ba-p/2694137)
**Changes in the default behavior of the products mentioned above also affected a subset of SysKit Point reports.**

## Affected Reports
The **following components will stop working in SysKit Point** as a result of pseudonymization of user-level information:

* **Licenses Usage by Service report**
* **Yammer, Exchange, and Microsoft Teams last activity detection**  
* **Adoption metrics** and **Teams messages metrics** available on Dashboard

## Solution
To restore complete reporting functionality in SysKit Point, revert the change to show identifiable user information. 
To do so:
* **Open [Microsoft 365 admin center](https://admin.microsoft.com/)**
* **Navigate to Settings** > **Org settings** > **Services**
* **Find and click Reports**
* **Deselect the 'In all reports, display de-identified names for users, groups, and sites.' option**
* **Click Save**

{% hint style="warning" %}
**Please note!**
It can take up to 24 hours for the data to be available. 
{% endhint %}



