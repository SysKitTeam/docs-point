---
description: >-
  This article explains how to change privacy settings to fix issues with
  analytics and usage reports in Syskit Point.
---

# Analytics and Usage Report Issues

## Problem

On September 1st, Microsoft changed to **Microsoft 365 usage analytics** and **pseudonymized user-level information by default**. [To see a complete list of affected products and APIs, visit this link.](https://techcommunity.microsoft.com/t5/microsoft-365-blog/privacy-changes-to-microsoft-365-usage-analytics/ba-p/2694137) **Changes in the default behavior of the products mentioned above also affected a subset of Syskit Point reports.**

## Affected Reports

The **following components will stop working in Syskit Point** as a result of pseudonymization of user-level information:

* **Licenses Usage by Service report**
* **Viva Engage, Exchange, and Microsoft Teams last activity detection**

## Solution

To restore complete reporting functionality in Syskit Point, revert the change to show identifiable user information. To do so:

* **Open** [**Microsoft 365 admin center**](https://admin.microsoft.com/)
* **Navigate to Settings** > **Org settings** > **Services**
* **Find and click Reports**
* **Deselect the 'Display concealed user, group, and site names in all reports' option**
* **Click Save**

:::warning
**Please note!** It can take up to 24 hours for the data to be available.
:::
