---
description: >
  This article discusses the permission requirements necessary to run Syskit Point successfully.
---

# Permission Requirements

## Microsoft 365

When [connecting to your Microsoft 365 tenant](../set-up-point-enterprise/deployment/connect-to-tenant.md), it is **required for you to connect with a Global Administrator account**.

:::warning
**Please note!**\
Microsoft 365 Global Admin credentials are only needed when connecting for the first time.
:::

Below, the reasons for such requirements are described in greater detail.

## Global Administrator

When [connecting to a Microsoft 365 tenant](../set-up-point-enterprise/deployment/connect-to-tenant.md) for the first time, **you must connect with a Global Administrator account.**

**The first time you connect to your Microsoft 365 tenant, you will be prompted to consent** to a set of permissions that Syskit Point requires to function correctly. Additional prompts may appear in the future when installing a newer version of Syskit Point because of new functionality and, consequently, new permissions required.

![Microsoft 365 Global Admin Consent](../../static/img/permission-requirements-ga-consent.png)

## Syskit Point App Permissions

:::warning
**Please note!**\
Permissions described below are automatically granted to Syskit Point by giving consent during the initial connection process.
:::

To achieve its functionality, Syskit Point is registered as an **Enterprise Application in Microsoft Entra ID.** The permissions model is based on OAuth and OpenID Connect flows. This enables Syskit Point to consume all of the APIs provided by Microsoft in a standard and well-defined way. It also allows the use of modern authentication, including Multi-Factor Authentication.\
Syskit Point requires permissions to access several Microsoft APIs. There are two types of required permissions:

* **Application permissions** - define what Syskit Point can do without a signed-in user.
* **Delegated permissions** - define what Syskit Point can do in the name of the signed-in user.

Each permission is listed by the name displayed on the Microsoft consent screen, followed by its technical name. Where available, the technical name links to the Microsoft documentation for that permission.

The following permissions are required for **Syskit Point Installer** Enterprise Application:

**Microsoft Graph**

| Permission | Description | Type | Reason |
| --- | --- | --- | --- |
| [User.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadall) | Read all users' full profiles | Delegated | Allows Syskit Point to read your users' profiles and show you reports based on that data. |

| Permissions                              | Type      | Reason                                                                                                                     |
| ---------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| Access directory as the signed-in user ([Directory.AccessAsUser.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)) | Delegated | Allows Syskit Point to access your directory.                                                                              |
| Read directory data ([Directory.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadall)) | Delegated | Allows Syskit Point to autodiscover your sites, groups, and users.                                                         |
| Sign users in ([openid](https://learn.microsoft.com/en-us/graph/permissions-reference#openid)) | Delegated | Allows Syskit Point to scan your environment as a signed-in user                                                           |
| View users' basic profile ([profile](https://learn.microsoft.com/en-us/graph/permissions-reference#profile)) | Delegated | Allows Syskit Point Microsoft Teams application to show users basic data and allow secure communication with Syskit Point. |

**Windows Azure Service Management API**

| Permissions                                           | Type      | Reason                                                                                        |
| ----------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------- |
| Access Azure Service Management as organization users (`user_impersonation`) | Delegated | Allows Syskit Point to create an additional application in your tenant for safer data access. |

To allow safer access to your Microsoft 365 tenant data and optimize the data sync process, additional app registrations are created during the [initial connect](../set-up-point-enterprise/deployment/connect-to-tenant.md) process:

* **Syskit Point Service**
* **Syskit Point Client**
* **Syskit Point Permissions Loader**
* **Syskit Point API** - currently in Beta stage and not being used by default

### Syskit Point Service

**Syskit Point Service** app registration is used for [data Sync](../get-to-know-syskit-point/collect-office-365-data.md), [audit log collection](../configuration/customize-audit-logs-collection.md), and sending emails. The following permissions enable Syskit Point to perform these actions:

**Microsoft Graph**

| Permissions | Type | Reason |
| ---------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all audit log data ([AuditLog.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#auditlogreadall)) | Application | Enables Syskit Point to retrieve last-sign-in information for users and sign-in records for service principals and managed identities. |
| Read the members of all channels ([ChannelMember.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#channelmemberreadall)) | Application | Allows Syskit Point to discover teams connected through shared channels and resolve channel membership records required by management actions. |
| Read all channel messages ([ChannelMessage.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#channelmessagereadall)) | Application | Enables Syskit Point to calculate Teams activity based on the latest channel message date. |
| Read and write all Viva Engage communities ([Community.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#communityreadwriteall)) | Application | Allows Syskit Point to provision Viva Engage communities. |
| Read directory data ([Directory.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadall)) | Application | Allows Syskit Point to discover and synchronize the tenant directory data required for Microsoft 365 inventory and governance. |
| Read files in all site collections ([Files.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#filesreadall)) | Application | Enables Syskit Point to perform partial site syncs containing changed files only by using the Graph delta queries. |
| Read and write all groups ([Group.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#groupreadwriteall)) | Application | Allows Syskit Point to read Microsoft 365 Group data and show you reports based on that data. Additionally, it allows you to manage your groups from Syskit Point.                                                           |
| Read and write all group memberships ([GroupMember.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)) | Application | Allows Syskit Point to add or remove group members in the access request process after the request is approved. |
| Read all published labels and label policies for an organization ([InformationProtectionPolicy.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#informationprotectionpolicyreadall)) | Application | Enables Syskit Point to sync published sensitivity labels and store them in the database.                                                                                                                                    |
| Read and write mail in all mailboxes ([Mail.ReadWrite](https://learn.microsoft.com/en-us/graph/permissions-reference#mailreadwrite)) | Application | Allows Syskit Point to create and manage temporary draft messages and attachments used by the Microsoft Graph email-delivery path. |
| Send mail as any user ([Mail.Send](https://learn.microsoft.com/en-us/graph/permissions-reference#mailsend)) | Application | Allows Syskit Point to send emails for Access Reviews, Workspace Reviews, Inactive Workspace policies, Scheduled Reports, Alerts, and related features. |
| Read all usage reports ([Reports.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#reportsreadall)) | Application | Allows Syskit Point to read usage reports generated by Microsoft.                                                                                                                                                            |
| Read and write all users' full profiles ([User.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)) | Application | Allows Syskit Point to read your users' profiles and show you reports based on that data. Additionally, it allows Syskit Point to automatically remove inactive guest users if defined in the Inactive Guest Users policy. |
| Read all user mailbox settings ([MailboxSettings.Read](https://learn.microsoft.com/en-us/graph/permissions-reference#mailboxsettingsread)) | Application | Allows Syskit Point to read user's mailbox settings without a signed-in user. This does not grant Syskit Point the ability to read or send emails. The permission is used solely to read mailbox settings in order to detect the user type (user, equipment, or room) shown on License reports.  |




**Microsoft 365 Exchange Online**

| Permissions                    | Type        | Reason                                                                            |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------- |
| Manage Exchange as application ([Exchange.ManageAsApp](https://learn.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2)) | Application | Allows Syskit Point to synchronize distribution lists and mail-enabled security groups. |

**Microsoft 365 Management APIs**

| Permissions                                           | Type                   | Reason                                                      |
| ----------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| Read activity data for your organization ([ActivityFeed.Read](https://learn.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis)) | Delegated, Application | Allows Syskit Point to subscribe to and collect Microsoft 365 audit events through the Microsoft 365 Management Activity API. |

**SharePoint**

| Permissions                    | Type        | Reason                                                                                                                |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Have full control on all sites ([Sites.FullControl.All](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)) | Application | Required for the core SharePoint and OneDrive permission inventory. Although permission inventory is read-only, SharePoint's app-only CSOM authorization model requires `Sites.FullControl.All` to enumerate the detailed permissions and administrative metadata that Syskit Point reports. |



:::info

**Please note:** The Syskit Point Service Principal is also added to the Exchange Administrator; this enables syncing the distribution list and email-enabled security group owners and running management actions for such groups in Syskit Point.

:::


### Syskit Point Client

The second app registration, **Syskit Point Client**, enables users to securely sign in to Syskit Point and perform actions they are entitled to, based on their permissions in Microsoft 365 environment. The following permissions are used:

**Microsoft Graph**

| Permissions                                                 | Type      | Reason                                                                                                                                                             |
| ----------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Add and remove members from channels ([ChannelMember.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#channelmemberreadwriteall)) | Delegated | Allows Syskit Point to manage private and shared channel members and owners during an interactive session. |
| Access directory as the signed-in user ([Directory.AccessAsUser.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryaccessasuserall)) | Delegated | Allows directory operations to run with the combined authority of the application and the signed-in user during delegated tenant setup and administration flows. |
| Read and write directory data ([Directory.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadwriteall)) | Delegated | Allows signed-in admins to complete supported directory and Teams app catalog operations from Syskit Point. |
| View users' email address ([email](https://learn.microsoft.com/en-us/graph/permissions-reference#email)) | Delegated | Allows Syskit Point to log users in Microsoft Teams application.                                                                                                   |
| Read and write all groups ([Group.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#groupreadwriteall)) | Delegated | Allows signed-in users to perform supported lifecycle actions on existing Microsoft 365 Groups and Teams from Syskit Point. |
| Maintain access to data you have given it access to ([offline_access](https://learn.microsoft.com/en-us/graph/permissions-reference#offline_access)) | Delegated | Allows Syskit Point always to show you the latest data about your environment.                                                                                     |
| Sign users in ([openid](https://learn.microsoft.com/en-us/graph/permissions-reference#openid)) | Delegated | Allows Syskit Point to scan your environment as the signed-in user.                                                                                                |
| Read all users' relevant people lists ([People.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#peoplereadall)) | Delegated | Allows the Syskit Point Teams app to show relevant people and relationship information in person-card experiences. |
| Read presence information of all users in your organization ([Presence.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#presencereadall)) | Delegated | Allows the Syskit Point Teams app to show Microsoft Teams presence in person and people components. |
| View users' basic profile ([profile](https://learn.microsoft.com/en-us/graph/permissions-reference#profile)) | Delegated | Allows Syskit Point Microsoft Teams application to show users basic data and allow secure communication with Syskit Point.                                         |
| Add and remove members from teams ([TeamMember.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#teammemberreadwriteall)) | Delegated | Allows signed-in users to manage members and owners of Teams teams from Syskit Point. |
| Send a teamwork activity to any user ([TeamsActivity.Send](https://learn.microsoft.com/en-us/graph/permissions-reference#teamsactivitysend)) | Application | Allows Syskit Point to send activity-feed notifications through its installed Microsoft Teams application. |
| Read and write all users' full profiles ([User.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)) | Delegated | Allows signed-in admins to complete supported user management actions from Syskit Point. |

When using Microsoft Authentication Flow to connect a service account, the following Microsoft Graph permissions are added to the Syskit Point Client app registration:

| Permissions                                                      | Type      | Reason                                                        |
| ---------------------------------------------------------------- | --------- | ------------------------------------------------------------- |
| Read user sensitivity labels and label policies ([InformationProtectionPolicy.Read](https://learn.microsoft.com/en-us/graph/permissions-reference#informationprotectionpolicyread)) | Delegated | Enables service account to read published sensitivity labels. |
| Read all users' full profiles ([User.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadall)) | Delegated | Allows service account to read your users' profiles.          |

**Microsoft 365 Exchange Online**

| Permissions                   | Type      | Reason                                                                                                          |
| ----------------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| Manage Exchange configuration (`Exchange.Manage`) | Delegated | Allows Syskit Point users to manage owners and members in distribution lists and email enabled security groups. |

**SharePoint**

| Permissions                               | Type      | Reason                                                                 |
| ----------------------------------------- | --------- | ---------------------------------------------------------------------- |
| Have full control of all site collections ([AllSites.FullControl](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)) | Delegated | Allows you to manage your Site Collections directly from Syskit Point. |

**Power Platform**

:::info
By default, the following permissions are not added during the initial connection to your tenant.
Permissions are added when Power Apps and Power Automate data collection is enabled. 
:::

**When Power Apps and Power Automate data collection is configured**, new permissions are added to the following app registrations when the Global Administrator provides consent.

| App Registration | Permission Name | Reason |
| --- | --- | --- |
| Syskit Point Client | [PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/new-powerappmanagementapp) | Allows Syskit Point to access the PowerApps Service API and collect Power Platform resources data.  |
| Syskit Point Power Platform | [PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/new-powerappmanagementapp) | Allows Syskit Point to access the PowerApps Service API and collect Power Platform resources data. |


:::warning
**Please note!**  
Added permissions for Power Apps and Power Automate data collection are not visible in the Microsoft Entra interface. 
To manage the permissions, you can run the related PowerShell cmdlets described in the following articles:
* [Get-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/get-powerappmanagementapp?view=pa-ps-latest)
* [Remove-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/remove-powerappmanagementapp?view=pa-ps-latest)
:::

**With introduction of Power Platform Actions in Point Cloud v2025.2.88, reconsent is required from the Global Administrator.** With reconsent, the following permission is added:

| API/Permissions Name                     | Permission                        | Type      | Reason                                                                                         |
| ---------------------------------------- | --------------------------------- | --------- | ---------------------------------------------------------------------------------------------- |
| PowerApps Service/[User](https://learn.microsoft.com/en-us/power-platform/admin/programmability-authentication#api-permissions) | Access the PowerApps Service API | Delegated | Allows you to run Power Platform actions in Syskit Point. |
| Graph/[Application.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#applicationreadwriteall) | Read and write all applications | Delegated | Enables Syskit Point to update the Syskit Point Client app registration on behalf of the signed-in user. |

:::warning
**Please note!**
The Application.ReadWrite.All permission is used only once to update the Syskit Point Client app registration with the required PowerApps Service/User permission. After the permission is added, you can remove the Application.ReadWrite.All permission from the Syskit Point Client enterprise app.
:::

### Syskit Point Permissions Loader

**Syskit Point Permissions Loader** app registration is used for optimized [data Sync](../get-to-know-syskit-point/collect-office-365-data.md) for SharePoint and OneDrive data paired with the Syskit Point Service app registration. The following permissions enable Syskit Point to perform these actions:

**Microsoft Graph**

| Permissions                                                      | Type        | Reason                                                                                                                                                                                                                       |
| ---------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Read all audit log data ([AuditLog.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#auditlogreadall)) | Application | Enables Syskit Point to retrieve last-sign-in information for users and sign-in records for service principals and managed identities. |
| Read the members of all channels ([ChannelMember.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#channelmemberreadall)) | Application | Allows Syskit Point to discover teams connected through shared channels and resolve channel membership records required by management actions. |
| Read all channel messages ([ChannelMessage.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#channelmessagereadall)) | Application | Enables Syskit Point to calculate Teams activity based on the latest channel message date. |
| Read and write all Viva Engage communities ([Community.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#communityreadwriteall)) | Application | Allows Syskit Point to provision Viva Engage communities. |
| Read directory data ([Directory.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#directoryreadall)) | Application | Allows Syskit Point to discover and synchronize the tenant directory data required for Microsoft 365 inventory and governance. |
| Read files in all site collections ([Files.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#filesreadall)) | Application | Enables Syskit Point to perform partial site syncs containing changed files only by using the Graph delta queries. |
| Read and write all groups ([Group.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#groupreadwriteall)) | Application | Allows Syskit Point to read Microsoft 365 Group data and show you reports based on that data. Additionally, it allows you to manage your groups from Syskit Point.                                                           |
| Read and write all group memberships ([GroupMember.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#groupmemberreadwriteall)) | Application | Allows Syskit Point to add or remove group members in the access request process after the request is approved. |
| Read all published labels and label policies for an organization ([InformationProtectionPolicy.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#informationprotectionpolicyreadall)) | Application | Enables Syskit Point to sync published sensitivity labels and store them in the database.                                                                                                                                    |
| Read and write mail in all mailboxes ([Mail.ReadWrite](https://learn.microsoft.com/en-us/graph/permissions-reference#mailreadwrite)) | Application | Allows Syskit Point to create and manage temporary draft messages and attachments used by the Microsoft Graph email-delivery path. |
| Send mail as any user ([Mail.Send](https://learn.microsoft.com/en-us/graph/permissions-reference#mailsend)) | Application | Allows Syskit Point to send emails for Access Reviews, Workspace Reviews, Inactive Workspace policies, Scheduled Reports, Alerts, and related features. |
| Read all usage reports ([Reports.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#reportsreadall)) | Application | Allows Syskit Point to read usage reports generated by Microsoft.                                                                                                                                                            |
| Read and write all users' full profiles ([User.ReadWrite.All](https://learn.microsoft.com/en-us/graph/permissions-reference#userreadwriteall)) | Application | Allows Syskit Point to read your users' profiles and show you reports based on that data. Additionally, it allows Syskit Point to automatically remove inactive guest users if defined in the Inactive Guest Users policy. |
| Read all user mailbox settings ([MailboxSettings.Read](https://learn.microsoft.com/en-us/graph/permissions-reference#mailboxsettingsread)) | Application | Allows Syskit Point to read user's mailbox settings without a signed-in user. This does not grant Syskit Point the ability to read or send emails. The permission is used solely to read mailbox settings in order to detect the user type (user, equipment, or room) shown on License reports.  |

**Microsoft 365 Exchange Online**

| Permissions                    | Type        | Reason                                                                            |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------- |
| Manage Exchange as application ([Exchange.ManageAsApp](https://learn.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2)) | Application | Allows Syskit Point to synchronize distribution lists and mail-enabled security groups. |

**Microsoft 365 Management APIs**

| Permissions                                           | Type                   | Reason                                                      |
| ----------------------------------------------------- | ---------------------- | ----------------------------------------------------------- |
| Read activity data for your organization ([ActivityFeed.Read](https://learn.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis)) | Delegated, Application | Allows Syskit Point to subscribe to and collect Microsoft 365 audit events through the Microsoft 365 Management Activity API. |


**SharePoint**

| Permissions                    | Type        | Reason                                                                                                                |
| ------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------- |
| Have full control on all sites ([Sites.FullControl.All](https://learn.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azuread)) | Application | Required for the core SharePoint and OneDrive permission inventory. Although permission inventory is read-only, SharePoint's app-only CSOM authorization model requires `Sites.FullControl.All` to enumerate the detailed permissions and administrative metadata that Syskit Point reports. |


:::info

**Please note:** The Syskit Point Permissions Loader Principal is also added to the Exchange Administrator role; this enables syncing the distribution list and email-enabled security group owners and running management actions for such groups in Syskit Point.

:::

### Syskit Point Power Platform

:::info
By default, no permissions are added during the initial connection to your tenant.
Permissions are added when Power BI or Power Apps and Power Automate data collection is enabled. 
:::

**Power BI**

**If Power BI data collection is configured**, the following Admin API permissions are given through a specified security group:

* read-only access to all the information available through Power BI admin APIs; for example, user names and emails, dataset and report detailed metadata
* read-only access to detailed metadata about Power BI items; for example, responses from GetScanResult APIs will contain the names of dataset tables and columns

[Read the following article to learn how to enable Power BI data collection in Syskit Point.](../power-platform/enable-powerbi-data-collection.md)

**Power Apps and Power Automate**

**When Power Apps and Power Automate data collection is configured**, new permissions are added to the following app registrations when the Global Administrator provides consent.

| App Registration | Permission Name | Reason |
| --- | --- | --- |
| Syskit Point Client | [PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/new-powerappmanagementapp) | Allows Syskit Point to access the PowerApps Service API and collect Power Platform resources data.  |
| Syskit Point Power Platform | [PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/new-powerappmanagementapp) | Allows Syskit Point to access the PowerApps Service API and collect Power Platform resources data. |

:::warning
**Please note!**  
Added permissions for Power Apps and Power Automate data collection are not visible in the Microsoft Entra interface. 
To manage the permissions, you can run the related PowerShell cmdlets described in the following articles:
* [Get-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/get-powerappmanagementapp?view=pa-ps-latest)
* [Remove-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/remove-powerappmanagementapp?view=pa-ps-latest)
:::

[See the following article to learn how to enable Power Apps and Power Automate data collection in Syskit Point.](../power-platform/enable-power-platform.md)

### AI Agents

:::info
By default, the following permissions are not added during the initial connection to your tenant.
Permissions are added when AI Agents is configured in Syskit Point settings.
:::

**When AI Agents is configured**, Syskit Point is registered as a Power Platform management application, and new delegated permissions are added to the **Syskit Point Client** app registration when the Global Administrator grants access in the AI Agents settings. Syskit Point uses these permissions with the connected **service account**, which must have the **Power Platform Administrator** role.

| App Registration | Permission Name | Reason |
| --- | --- | --- |
| Syskit Point Client | [PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/new-powerappmanagementapp) | Registers Syskit Point as a Power Platform management application, which allows Syskit Point to read Copilot Studio and Agent Builder agents across your tenant. |
| Syskit Point Client | Dynamics CRM/[user_impersonation](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/walkthrough-register-app-azure-active-directory) | Allows Syskit Point to read Copilot Studio agents across your tenant. |
| Syskit Point Client | Power Platform API/[ResourceQuery.Resources.Read](https://learn.microsoft.com/en-us/power-platform/admin/programmability-permission-reference) | Allows Syskit Point to query Agent Builder agents across your tenant. |
| Syskit Point Client | Power Platform API/CopilotStudio.MinimalBot.ReadWrite | Allows Syskit Point to read and write minimal bot resources for Copilot Studio agents across your tenant. Additionally, it allows Syskit Point to load Agent Builder agent components, such as knowledge sources. |

**With the introduction of AI agent actions in Point Cloud v2026.3.162, a Global Administrator needs to grant the new permission in the AI Agents settings.** With the grant, the following permission is added:

| App Registration | Permission Name | Reason |
| --- | --- | --- |
| Syskit Point Client | Power Platform API/[CopilotStudio.AdminActions.Invoke](https://learn.microsoft.com/en-us/power-platform/admin/programmability-permission-reference) | Allows you to block, unblock, reassign, and delete Copilot Studio and Agent Builder agents in Syskit Point. |

:::warning

**Please note!**
* Syskit Point uses the **CopilotStudio.MinimalBot.ReadWrite** permission **solely to read agent data**, such as agent components and knowledge sources. **Syskit Point does not change your agents** with this permission.
* The **CopilotStudio.AdminActions.Invoke** permission is used **only when you run an agent action** in Syskit Point. Agent actions run with the signed-in user's own rights, Syskit Point does not increase them.
* The PowerAppManagementApp registration is not visible in the Microsoft Entra interface. To manage it, you can run the related PowerShell cmdlets described in the following articles:
  * [Get-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/get-powerappmanagementapp?view=pa-ps-latest)
  * [Remove-PowerAppManagementApp](https://learn.microsoft.com/en-us/powershell/module/microsoft.powerapps.administration.powershell/remove-powerappmanagementapp?view=pa-ps-latest)

:::

**SharePoint agents** and **Entra apps** are synced and managed with the existing Syskit Point app registration permissions described above and don't require any additional consent.

[Take a look at the following article to learn how to configure AI Agents in Syskit Point.](../ai-agents-and-apps/ai-agents-and-apps-settings.md)

### Syskit Point API

**Syskit Point API** app registration is used for third-party app integration, meaning you can get Syskit Point data via Syskit Point API and use it in other business applications and web services.\
**This feature is currently in the Beta stage**.

By default, the **app registration has no permissions added**.

## Related Topics

* [System Requirements for Point Enterprise](../set-up-point-enterprise/deployment/system-requirements.md)
* [Deploy Syskit Point for Point Enterprise](../set-up-point-enterprise/deployment/deploy-syskit-point.md)
