---
description: This article explains how to modify license report options available in Syskit Point.
---

# Customize License Reports

:::info
Options described in this article are available only for users with the Syskit Point Admin role assigned. 
:::

License reports can be used to discover assigned, unassigned, or inactive Microsoft 365 licenses, as well as check their overall cost. This helps optimize the use of licenses by identifying which ones are underutilized. 


This article shows you how to:
* **Define the number of days after which users will be considered inactive**
* **Specify monthly license price per user**
* **Show/hide license reports for users with the assigned Syskit Point Collaborators role**

:::info

**License Reports** are available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.

:::

## License Reports Settings

To modify license report settings, navigate to **Settings** &gt; **License Reports (1)**.
Here, you can:
* **Define the number of days after which users will be considered inactive (2)** – the value is used in the Inactive Users with Assigned Licenses and Licenses Usage by Service reports; by default, this is set to 30 days
* **Define the number of days an add-on license must remain unused to be considered an unused license (3)** – the value is used in the Inactive Users with Assigned Licenses and Licenses Usage by Service reports; by default, this is set to 30 days
* **Show resource users in reports and policies toggle (4)**
  * Resource users are non-human accounts used for shared resources such as rooms, equipment
  * When enabled, **resource users** (e.g., rooms and equipment accounts) with assigned licenses are **included in license reports** (Inactive users with assigned licenses and Unused add-on licenses) **and in the Blocked Users with Assigned Licenses policy**
  * When disabled, **resource users are excluded** from these reports and policies
* **Define monthly license price per user for (5)**:
  * **Microsoft 365 Core and Enterprise Plans** licenses
  * **Microsoft Add-on** licenses
  * **Other** licenses
  * Prices entered here are used to calculate total costs on the Licenses Overview and License Distribution reports
  * If some licenses are missing prices, a warning bubble appears informing you that a license does not currently have a value assigned
  
Once you are finished with the modifications, **click Save (6)**.

![License Reports Settings](../../static/img/customize-license-reports-settings.png)

## License Reports Visibility

:::info
By default, **license reports in Syskit Point are only visible for Syskit Point Admin users**. 
:::

To make the License reports visible for Syskit Point Collaborators : 
* **Navigate to Settings** > **Security** > **Manage Access (1)**
* **Check** the **Give users access to license reports option (2)** under Syskit Point Collaborators role 
* **Click Save (3)**

![License Reports Visibility](../../static/img/customize-license-reports-collaborators.png)

:::warning
**Please note!**  
When the **Give users access to license reports option (2)** option is enabled, Syskit Point Collaborators can access the following reports: 
* **Licenses Usage by Service**
* **License Distribution**
* **Inactive Licenses**

A signed-in Syskit Point Collaborator can view license data only for users they manage. They do not have access to license data for users who are managed by others.   
:::