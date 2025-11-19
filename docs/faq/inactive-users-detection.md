---
description: This article explains how Inactive Users are detected and defined within Syskit Point.
---

# Inactive Users Detection

**Inactive Users** across your Microsoft 365 environment are **detected to help you optimize your license usage** and maintain a **safe and healthy environment**. 

This article explains **how a user's activity is determined based on the user type** and how you can define any available **inactivity thresholds in Syskit Point's Settings**. 

## Determining a User's Activity

Syskit Point determines a user's last activity based on **sign-in data from Microsoft 365 and Entra ID, depending on the user type**. 

:::info
**Please note!** For Syskit Point to track Inactive Users in your environment, please ensure you meet all of **the requirements** as [explained in this Microsoft article.](https://learn.microsoft.com/en-us/entra/identity/monitoring-health/howto-manage-inactive-user-accounts?tabs=admin-center)

:::


### Internal (Organization) Users

For **Internal Users**, activity is determined using the **Unified Audit Log**, including the events UserLoggedIn and MailboxLogin which show **the last date the user logged into their Microsoft 365 account or e-mail**.

This **applies to regular and external users that still appear in your organization's Entra ID**. 

### Guest Users

For **Guest Users**, who do not appear in the Unified Audit Log (e.x. Teams-only guests), activity is **determined by querying Microsoft Entra ID sign-in logs using the Microsoft Graph API**, which tracks the sign-in activity for the resource. 
 
* Syskit Point takes into account **the last time a user signed in interactively** (e.x. by using their credentials) and the **last time a non-interactive sign-in is logged**, meaning a service accessed the account on behalf of the user. 

* After collecting the data, **Syskit Point takes the most recent of the two values** in order to determine the guest user's last activity. 

[For more details on this, take a look at the Customize Audit Logs Collection article.](../configuration/customize-audit-logs-collection.md#sign-in-logs-from-microsoft-entra-id)

:::info
**Please note!** 
* This method is required as certain guest users, such as those using only Microsoft Teams, may not generate typical audit log entries. 
* Some users may not generate any login records if they haven't interacted with your tenant in a way that gets logged. This is a limitation of Microsoft logs and APIs, not Syskit Point. 

:::

## The Inactivity Threshold

In Syskit Point, you can **configure how many days of inactivity qualify** a user as inactive in two places: **for governance policies and license reports**. 

To configure inactivity for license reports: 
* Go to **Settings > License reports**
* Under **Inactive Licenses**, define the **number of days since the last login after which a user is considered inactive**

[For detailed instructions on how to customize your license reports, take a look at the Customize License Reports article.](../configuration/customize-license-reports.md)

**Users are considered as inactive** if there has been no recorded activity for the user **in the last 30 days**. Currently, the 30-day time frame is fixed and cannot be altered.  

To configure inactivity for Governance policies: 
* Go to **Settings > Governance > Policies > Inactive Guest Users policy**
* When editing the **Inactive Guest Users policy**, you can define the **number of days after which a user is considered inactive**

[For detailed instructions on how to modify the inactive guest users policy, take a look at the Inactive Guest Users policy article.](../governance-and-automation/automated-workflows/inactive-guest-users-admin.md)
