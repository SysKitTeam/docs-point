---
description: >-
  This article lists the requirements necessary to successfully deploy and use
  the Configuration Inventory module in SysKit Point.
---

# Configuration Inventory Requirements

{% hint style="info" %}
**Configuration Inventory** is available in the Data Center plan. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## Connect Service Account

To collect Microsoft Teams-related data, you need to **connect a service account in SysKit Point**.

When preparing the service account, consider the following requirements:

* **service account should have the Teams Administrator Azure AD role assigned**

Learn how to connect the service account in SysKit Point by following the instructions from [this article](../configuration/connect-service-account.md#enter-credentials).

{% hint style="warning" %}
**Please note!**\
Use the [Enter credentials](../configuration/connect-service-account.md#enter-credentials) option when connecting the service account to collect Configuration Inventory data. \
**The Configuration Inventory module currently does not support a service account with multi-factor authentication enabled.**
{% endhint %}

## Access Configuration Inventory Settings & Reports

**Configuration Inventory Settings & Reports are available to SysKit Point Administrators only**.

## Configuration Inventory App Permissions

{% hint style="warning" %}
**Please note!**\
Permissions described below are automatically granted to SysKit Point by giving consent during the tenant connection process. Permissions are granted only if the Configuration Inventory module is deployed with SysKit Point deployment.
{% endhint %}

[For more information on Configuration Inventory deployment, use this link](../installation/deploy-syskit-point.md).

If the Configuration Inventory module is deployed, SysKit Point creates an Azure AD Application named **SysKit Point Configuration Inventory** when establishing a [connection](../installation/connect-to-tenant.md) to your tenant.

SysKit Point and the Configuration Inventory module use two types of permissions to access several Microsoft APIs:

* **Application permissions** - define what SysKit Point and the Configuration Inventory module can do without a signed-in user.
* **Delegated permissions** - define what SysKit Point and the Configuration Inventory module can do in the name of the signed-in user.

The following permissions are required for the SysKit Point Configuration Inventory app registration:

**Microsoft Graph**

| Permissions                                             | Type        | Reason                                                                                                                                        |
| ------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all administrative units                           | Application | Allows SysKit Point to read administrative units and administrative unit membership.                                                          |
| Read Microsoft Intune apps                              | Application | Allows SysKit Point to read Intune apps.                                                                                                      |
| Read Microsoft Intune device configuration and policies | Application | Allows SysKit Point to read Intune device configuration and policies.                                                                         |
| Read Microsoft Intune devices                           | Application | Allows SysKit Point to read Intune devices.                                                                                                   |
| Read Microsoft Intune configuration                     | Application | Allows SysKit Point to read Intune configuration.                                                                                             |
| Read directory data                                     | Application | Allows SysKit Point to read directory data.                                                                                                   |
| Read all groups                                         | Application | Allows SysKit Point to read group properties.                                                                                                 |
| Read all groups                                         | Delegated   | Allows SysKit Point to read group properties as a signed-in user. Required for Planner.                                                       |
| Read all group memberships                              | Application | Allows SysKit Point to read group memberships.                                                                                                |
| Send mail as any user                                   | Application | Allows SysKit Point to send emails so you can be notified, for example, when a snapshot finishes.                                             |
| Read your organization's policies                       | Application | Allows SysKit Point to read policies.                                                                                                         |
| Have full control of all site collections               | Application | Allows SysKit Point to collect data from SharePoint. Unfortunately, full control is required, and it will not work with the read permissions. |
| Sign users in                                           | Delegated   | Allows SysKit Point to collect data from your environment as the signed-in user.                                                              |
| Read all users' full profiles                           | Delegated   | Allows SysKit Point to read your users' profiles and show you reports based on that data.                                                     |

**Azure Active Directory Graph**

| Permissions                 | Type        | Reason                                                                                                 |
| --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| Read directory data         | Application | Allows SysKit Point to read data in your company or school directory, such as users, groups, and apps. |
| Read all hidden memberships | Application | Allows SysKit Point to read the memberships of hidden groups and administrative units.                 |

**SharePoint**

| Permissions                               | Type        | Reason                                                                                                                                        |
| ----------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Have full control of all site collections | Application | Allows SysKit Point to collect data from SharePoint. Unfortunately, full control is required, and it will not work with the read permissions. |
| Read user profiles                        | Application | Allows SysKit Point to read user profile properties.                                                                                          |

**Skype and Teams Tenant Admin API**

| Permissions                                                              | Type      | Reason                                                                                  |
| ------------------------------------------------------------------------ | --------- | --------------------------------------------------------------------------------------- |
| Access Microsoft Teams and Skype for Business data as the signed-in user | Delegated | Allows SysKit Point to collect Skype for Business data on behalf of the signed-in user. |

**PowerApps Service**

| Permissions                      | Type      | Reason                                                                                   |
| -------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| Access the PowerApps Service API | Delegated | Allows SysKit Point to access the PowerApps Service API on behalf of the signed-in user. |

**Azure Service Management**

| Permissions                                           | Type      | Reason                                               |
| ----------------------------------------------------- | --------- | ---------------------------------------------------- |
| Access Azure Service Management as organization users | Delegated | Allows SysKit Point to collect data about PowerApps. |

**Office 365 Exchange Online**

| Permissions                    | Type        | Reason                                          |
| ------------------------------ | ----------- | ----------------------------------------------- |
| Manage Exchange As Application | Application | Allows SysKit Point to read data from Exchange. |

{% hint style="warning" %}
**Please note!**\
The SysKit Point service principal will also be added to the Exchange Administrators role to support the data collection. The Microsoft documentation (found [here](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps#step-5-assign-azure-ad-roles-to-the-application)) states that it's possible with other roles, but from our experience, only the Exchange Administrators role worked for collecting all of the data.
{% endhint %}
