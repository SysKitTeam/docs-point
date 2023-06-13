---
description: >-
  This article lists the requirements necessary to successfully deploy and use
  the Configuration Inventory module in Syskit Point.
---

# Configuration Inventory Requirements

{% hint style="info" %}
**Configuration Inventory** is available in the Data Center plan. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## Connect Service Account

To collect Microsoft Teams-related data, you need to **connect a service account in Syskit Point**.

When preparing the service account, consider the following requirements:

* **service account should have the Teams Administrator Azure AD role assigned**

Learn how to connect the service account in Syskit Point by following the instructions from [this article](../configuration/connect-service-account.md#enter-credentials).

{% hint style="warning" %}
**Please note!**\
Use the [Enter credentials](../configuration/connect-service-account.md#enter-credentials) option when connecting the service account to collect Configuration Inventory data. \
**The Configuration Inventory module currently does not support a service account with multi-factor authentication enabled.**
{% endhint %}

## Access Configuration Inventory Settings & Reports

**Configuration Inventory Settings & Reports are available to Syskit Point Administrators only**.

## Configuration Inventory App Permissions

{% hint style="warning" %}
**Please note!**\
Permissions described below are automatically granted to Syskit Point by giving consent during the tenant connection process. Permissions are granted only if the Configuration Inventory module is deployed with Syskit Point deployment.
{% endhint %}

[For more information on Configuration Inventory deployment, use this link](../set-up-point-data-center/deployment/deploy-syskit-point.md).

If the Configuration Inventory module is deployed, Syskit Point creates an Azure AD Application named **Syskit Point Configuration Inventory** when establishing a [connection](../set-up-point-data-center/deployment/connect-to-tenant.md) to your tenant.

Syskit Point and the Configuration Inventory module use two types of permissions to access several Microsoft APIs:

* **Application permissions** - define what Syskit Point and the Configuration Inventory module can do without a signed-in user.
* **Delegated permissions** - define what Syskit Point and the Configuration Inventory module can do in the name of the signed-in user.

The following permissions are required for the Syskit Point Configuration Inventory app registration:

**Microsoft Graph**

| Permissions                                             | Type        | Reason                                                                                                                                        |
| ------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all administrative units                           | Application | Allows Syskit Point to read administrative units and administrative unit membership.                                                          |
| Read Microsoft Intune apps                              | Application | Allows Syskit Point to read Intune apps.                                                                                                      |
| Read Microsoft Intune device configuration and policies | Application | Allows Syskit Point to read Intune device configuration and policies.                                                                         |
| Read Microsoft Intune devices                           | Application | Allows Syskit Point to read Intune devices.                                                                                                   |
| Read Microsoft Intune configuration                     | Application | Allows Syskit Point to read Intune configuration.                                                                                             |
| Read directory data                                     | Application | Allows Syskit Point to read directory data.                                                                                                   |
| Read all groups                                         | Application | Allows Syskit Point to read group properties.                                                                                                 |
| Read all groups                                         | Delegated   | Allows Syskit Point to read group properties as a signed-in user. Required for Planner.                                                       |
| Read all group memberships                              | Application | Allows Syskit Point to read group memberships.                                                                                                |
| Send mail as any user                                   | Application | Allows Syskit Point to send emails so you can be notified, for example, when a snapshot finishes.                                             |
| Read your organization's policies                       | Application | Allows Syskit Point to read policies.                                                                                                         |
| Have full control of all site collections               | Application | Allows Syskit Point to collect data from SharePoint. Unfortunately, full control is required, and it will not work with the read permissions. |
| Sign users in                                           | Delegated   | Allows Syskit Point to collect data from your environment as the signed-in user.                                                              |
| Read all users' full profiles                           | Delegated   | Allows Syskit Point to read your users' profiles and show you reports based on that data.                                                     |

**Azure Active Directory Graph**

| Permissions                 | Type        | Reason                                                                                                 |
| --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| Read directory data         | Application | Allows Syskit Point to read data in your company or school directory, such as users, groups, and apps. |
| Read all hidden memberships | Application | Allows Syskit Point to read the memberships of hidden groups and administrative units.                 |

**SharePoint**

| Permissions                               | Type        | Reason                                                                                                                                        |
| ----------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Have full control of all site collections | Application | Allows Syskit Point to collect data from SharePoint. Unfortunately, full control is required, and it will not work with the read permissions. |
| Read user profiles                        | Application | Allows Syskit Point to read user profile properties.                                                                                          |

**Skype and Teams Tenant Admin API**

| Permissions                                                              | Type      | Reason                                                                                  |
| ------------------------------------------------------------------------ | --------- | --------------------------------------------------------------------------------------- |
| Access Microsoft Teams and Skype for Business data as the signed-in user | Delegated | Allows Syskit Point to collect Skype for Business data on behalf of the signed-in user. |

**PowerApps Service**

| Permissions                      | Type      | Reason                                                                                   |
| -------------------------------- | --------- | ---------------------------------------------------------------------------------------- |
| Access the PowerApps Service API | Delegated | Allows Syskit Point to access the PowerApps Service API on behalf of the signed-in user. |

**Azure Service Management**

| Permissions                                           | Type      | Reason                                               |
| ----------------------------------------------------- | --------- | ---------------------------------------------------- |
| Access Azure Service Management as organization users | Delegated | Allows Syskit Point to collect data about PowerApps. |

**Office 365 Exchange Online**

| Permissions                    | Type        | Reason                                          |
| ------------------------------ | ----------- | ----------------------------------------------- |
| Manage Exchange As Application | Application | Allows Syskit Point to read data from Exchange. |

{% hint style="warning" %}
**Please note!**\
The Syskit Point service principal will also be added to the Exchange Administrators role to support the data collection. The Microsoft documentation (found [here](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps#step-5-assign-azure-ad-roles-to-the-application)) states that it's possible with other roles, but from our experience, only the Exchange Administrators role worked for collecting all of the data.
{% endhint %}
