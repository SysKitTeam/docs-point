---
description: >-
  This article discusses permission requirements that are necessary to deploy
  and use SysKit Point successfully.
---

# Permission Requirements

## Microsoft 365

When [connecting to your Microsoft 365 tenant](../installation/connect-to-tenant.md), it is **required for you to connect with a Global Administrator account**.

{% hint style="warning" %}
**Please note!**\
Microsoft 365 Global Admin credentials are only needed when connecting for the first time.
{% endhint %}

Below, the reasons for such requirements are described in greater detail.

## Global Administrator

When [connecting to a Microsoft 365 tenant](../set-up-data-center/installation/connect-to-tenant.md) for the first time, **you must connect with a Global Administrator account.**

**The first time you connect to your Microsoft 365 tenant, you will be prompted to consent** to a set of permissions that SysKit Point requires to function correctly. Additional prompts may show up in the future when installing a newer version of SysKit Point because of new functionality, and in consequence, potentially new required permissions.

![Microsoft 365 Global Admin Consent](../.gitbook/assets/permission\_requirements\_ga\_consent.png)

## SysKit Point App Permissions

{% hint style="warning" %}
**Please note!**\
Permissions described below are automatically granted to SysKit Point by giving consent during the initial connection process.
{% endhint %}

To achieve its functionality, SysKit Point is registered as an **Enterprise Application in Azure Active Directory.** The permissions model is based on OAuth and OpenID Connect flows. This enables SysKit Point to consume all of the APIs provided by Microsoft in a standard and well-defined way. It also allows the use of modern authentication, including Multi-Factor Authentication.\
SysKit Point requires permissions to access several Microsoft APIs. There are two types of required permissions:

* **Application permissions** - define what SysKit Point can do without a signed-in user.
* **Delegated permissions** - define what SysKit Point can do in the name of the signed-in user.

The following permissions are required for **SysKit Point Installer** Enterprise Application:

**Microsoft Graph**

| Permissions                              | Type      | Reason                                                                                                                     |
| ---------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| Read all users' full profiles            | Delegated | Allows SysKit Point to read your users' profiles and show you reports based on that data.                                  |
| Access directory as the signed-in user   | Delegated | Allows SysKit Point to access your directory.                                                                              |
| Read directory data                      | Delegated | Allows SysKit Point to autodiscover your sites, groups, and users.                                                         |
| Sign users in                            | Delegated | Allows SysKit Point to scan your environment as a signed-in user                                                           |
| View users' basic profile                | Delegated | Allows SysKit Point Microsoft Teams application to show users basic data and allow secure communication with SysKit Point. |
| **Windows Azure Service Management API** |           |                                                                                                                            |

| Permissions                                           | Type      | Reason                                                                                        |
| ----------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| Access Azure Service Management as organization users | Delegated | Allows SysKit Point to create an additional application in your tenant for safer data access. |

To allow safer access to your Microsoft 365 tenant data and optimize the data sync process, additional app registrations are created during the [initial connect](../set-up-data-center/installation/connect-to-tenant.md) process:

* **SysKit Point Service**
* **SysKit Point Client**
* **SysKit Point Permissions Loader**
* **SysKit Point API** - currently in Beta stage and not being used by default

### SysKit Point Service

**SysKit Point Service** app registration is used for [data Sync](../get-to-know-syskit-point/collect-office-365-data.md), [audit log collection](../configuration/customize-audit-logs-collection.md), and sending emails. The following permissions enable SysKit Point to perform these actions:

**Microsoft Graph**

| Permissions                                                      | Type        | Reason                                                                                                                                                                                                                       |
| ---------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all audit log data                                          | Application | Enables SysKit Point to access data used to determine the time of the last sign-in for guest users.                                                                                                                          |
| Read the members of all channels                                 | Application | Allows SysKit Point to collect membership data for private and shared channels.                                                                                                                                              |
| Read directory data                                              | Application | Allows SysKit Point to autodiscover your sites, groups, and users.                                                                                                                                                           |
| Read files in all site collections                               | Application | Enables SysKit Point to perform partial site syncs containing changed files only.                                                                                                                                            |
| Read and write all groups                                        | Application | Allows SysKit Point to read Microsoft 365 Group data and show you reports based on that data. Additionally, it allows you to manage your groups from SysKit Point.                                                           |
| Read all published labels and label policies for an organization | Application | Enables SysKit Point to sync published sensitivity labels and store them in the database.                                                                                                                                    |
| Read and write mail in all mailboxes                             | Application | Allows SysKit Point to send emails as a part of the Access Review, Lifecycle Management, Scheduled Reports, Alerts, and other features.                                                                                      |
| Send mail as any user                                            | Application | Allows SysKit Point to send emails as a part of the Access Review, Lifecycle Management, Scheduled Reports, Alerts, and other features.                                                                                      |
| Read all usage reports                                           | Application | Allows SysKit Point to read usage reports generated by Microsoft.                                                                                                                                                            |
| Read and write users' full profiles                              | Application | Allows SysKit Point to read your users' profiles and show you reports based on that data. Additionally, it allows SysKit Point to automatically remove inactive guest users if defined in the Guest Users Expiration policy. |

**Microsoft 365 Exchange Online**

| Permissions                    | Type        | Reason                                                                            |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------- |
| Manage Exchange as application | Application | Allows SysKit Point to sync distribution lists and email enabled security groups. |

**Microsoft 365 Management APIs**

| Permissions                                           | Type                   | Reason                                                      |
| ----------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| Read activity data for your organization              | Delegated, Application | Allows SysKit Point to read your organization's audit logs. |
| Read service health information for your organization | Delegated, Application | Allows SysKit Point to read your organization's audit logs. |

**SharePoint**

| Permissions                    | Type        | Reason                                                                                                                |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Have full control on all sites | Application | Allows SysKit Point to read documents and list items in all site collections and show you reports based on that data. |

### SysKit Point Client

The second app registration, **SysKit Point Client**, enables users to securely sign in to SysKit Point and perform actions they are entitled to, based on their permissions in Microsoft 365 environment. The following permissions are used:

**Microsoft Graph**

| Permissions                                                 | Type      | Reason                                                                                                                                                             |
| ----------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Add and remove members from channels                        | Delegated | Enables users to manage private channels in SysKit Point.                                                                                                          |
| Access directory as the signed-in user                      | Delegated | Allows SysKit Point to access your directory.                                                                                                                      |
| Read and write directory data                               | Delegated | Allows SysKit Point to autodiscover your sites, groups, and users; allows license management actions to be performed.                                              |
| View users' email address                                   | Delegated | Allows SysKit Point to log users in Microsoft Teams application.                                                                                                   |
| Read and write all groups                                   | Delegated | Allows SysKit Point to read Microsoft 365 Group data and show you reports based on that data. Additionally, it allows you to manage your groups from SysKit Point. |
| Maintain access to data you have given it access to         | Delegated | Allows SysKit Point always to show you the latest data about your environment.                                                                                     |
| Sign users in                                               | Delegated | Allows SysKit Point to scan your environment as the signed-in user.                                                                                                |
| Read all users' relevant people lists                       | Delegated | Allows SysKit Point to display users' relevant people lists in People Picker within SysKit Point Teams app.                                                        |
| Read presence information of all users in your organization | Delegated | Allows SysKit Point Microsoft Teams application to show the status of users.                                                                                       |
| View users' basic profile                                   | Delegated | Allows SysKit Point Microsoft Teams application to show users basic data and allow secure communication with SysKit Point.                                         |
| Send a teamwork activity to any user                        | Delegated | Allows SysKit Point Microsoft Teams application to send notifications to users.                                                                                    |
| Read and write all users' full profiles                     | Delegated | Allows SysKit Point to read your users' profiles and show you reports based on that data; allows license management actions to be performed.                       |

When using Microsoft Authentication Flow to connect a service account, the following Microsoft Graph permissions are added to the SysKit Point Client app registration:

| Permissions                                                      | Type      | Reason                                                        |
| ---------------------------------------------------------------- | --------- | ------------------------------------------------------------- |
| Read all published labels and label policies for an organization | Delegated | Enables service account to read published sensitivity labels. |
| Read users' full profiles                                        | Delegated | Allows service account to read your users' profiles.          |

**Microsoft 365 Exchange Online**

| Permissions                   | Type      | Reason                                                                                                          |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| Manage Exchange configuration | Delegated | Allows SysKit Point users to manage owners and members in distribution lists and email enabled security groups. |

**SharePoint**

| Permissions                               | Type      | Reason                                                                 |
| ----------------------------------------- | --------- | ---------------------------------------------------------------------- |
| Have full control of all site collections | Delegated | Allows you to manage your Site Collections directly from SysKit Point. |

### SysKit Point Permissions Loader

**SysKit Point Permissions Loader** app registration is used for optimized [data Sync](../get-to-know-syskit-point/collect-office-365-data.md) for SharePoint and OneDrive data paired with the SysKit Point Service app registration. The following permissions enable SysKit Point to perform these actions:

**Microsoft Graph**

| Permissions                                                      | Type        | Reason                                                                                                                                                                                                                       |
| ---------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all audit log data                                          | Application | Enables SysKit Point to access data used to determine the exact time of the last sign-in for guest users.                                                                                                                    |
| Read the members of all channels                                 | Application | Allows SysKit Point to collect membership data for private and shared channels.                                                                                                                                              |
| Read directory data                                              | Application | Allows SysKit Point to autodiscover your sites, groups, and users.                                                                                                                                                           |
| Read files in all site collections                               | Application | Enables SysKit Point to perform partial site syncs, containing changed files only.                                                                                                                                           |
| Read and write all groups                                        | Application | Allows SysKit Point to read Microsoft 365 Group data and show you reports based on that data. Additionally, it allows you to manage your groups from SysKit Point.                                                           |
| Read all published labels and label policies for an organization | Application | Enables SysKit Point to sync published sensitivity labels and store them in the database.                                                                                                                                    |
| Read all usage reports                                           | Application | Allows SysKit Point to read usage reports generated by Microsoft.                                                                                                                                                            |
| Read and write users' full profiles                              | Application | Allows SysKit Point to read your users' profiles and show you reports based on that data. Additionally, it allows SysKit Point to automatically remove inactive guest users if defined in the Guest Users Expiration policy. |

**Microsoft 365 Exchange Online**

| Permissions                    | Type        | Reason                                                                            |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------- |
| Manage Exchange as application | Application | Allows SysKit Point to sync distribution lists and email enabled security groups. |

**Microsoft 365 Management APIs**

| Permissions                                           | Type                   | Reason                                                      |
| ----------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| Read activity data for your organization              | Delegated, Application | Allows SysKit Point to read your organization's audit logs. |
| Read service health information for your organization | Delegated, Application | Allows SysKit Point to read your organization's audit logs. |

**SharePoint**

| Permissions                    | Type        | Reason                                                                                                                |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Have full control on all sites | Application | Allows SysKit Point to read documents and list items in all site collections and show you reports based on that data. |

### SysKit Point Power Platform

By default, no permissions are added. If Power BI data collection is configured, the following Admin API permissions are given through a specified security group:

* read-only access to all the information available through Power BI admin APIs; for example, user names and emails, dataset and report detailed metadata
* read-only access to detailed metadata about Power BI items; for example, responses from GetScanResult APIs will contain the names of dataset tables and columns

[Read the following article to learn how to enable Power BI data collection in SysKit Point](../configuration/enable-powerBI-data-collection.md)

### Configuration Inventory Module

If the Configuration Inventory module is deployed, SysKit Point creates an Azure AD Application named **SysKit Point Configuration Inventory** when establishing a [connection](../set-up-data-center/installation/connect-to-tenant.md) to your tenant.

[Open this article to see all permissions granted to SysKit Point Configuration Inventory app registration](../configuration-inventory/configuration-inventory-requirements.md).

### SysKit Point API

**SysKit Point API** app registration is used for third-party app integration, meaning you can get SysKit Point data via SysKit Point API and use it in other business applications and web services.\
**This feature is currently in the Beta stage**.

By default, the **app registration has no permissions added**.

## Related Topics

* [System Requirements for Data Center](../set-up-data-center/requirements/system-requirements.md)
* [Deploy SysKit Point for Data Center](../set-up-data-center/installation/deploy-syskit-point.md)
