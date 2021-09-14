---
description: This article explains how to change privacy settings to fix issues with analytics and usage reports in SysKit Point.
---

# Analytics and Usage Report Issues

## Problem

On September 1st, Microsoft made changes to **Microsoft 365 usage analytics** and **is now pseudonymizing user-level information by default**. 
[To see a complete list of affected products and APIs, visit this link.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/privacy-changes-to-microsoft-365-usage-analytics/ba-p/2694137)

## Affected Reports
Changes in the default behavior of the products mentioned above also affect a subset of SysKit Point reports.
The **following reports will stop working** as a result of pseudonymization of user-level information:

* **Licenses Usage by Service**
* ****

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



