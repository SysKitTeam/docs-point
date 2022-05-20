---
description: This article discusses permission requirements that are necessary to successfully install and use SysKit Trace.
---

# Permission Requirements

### SysKit Trace App Permissions

{% hint style="warning" %}
**Please note!**  
Permissions described bellow are automatically granted to SysKit Trace by giving consent during the configuration process.
{% endhint %}

SysKit Trace will create an Azure AD Application when establishing a [connection](../installation-and-configuration/office-365-connection-details.md) to your tenant.  
SysKit Trace requires permissions to access several Microsoft APIs. There are two types of required permissions:

* **Application permissions** - define what SysKit Trace can do without a signed in user.
* **Delegated permissions** - define what SysKit Trace can do in the name of the signed in user.

The following permissions are required for the SysKit Trace Azure AD Application:

**Microsoft Graph**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Read all administrative units | Application | Allows SysKit Trace to read administrative units and administrative unit membership. |
| Read Microsoft Intune apps | Application | Allows SysKit Trace to read Intune apps. |
| Read Microsoft Intune device configuratin and policies | Application | Allows SysKit Trace to read Intune device configuration and policies. |
| Read Microsoft Intune devices | Application | Allows SysKit Trace to read Intune devices. |
| Read Microsoft Intune configuration | Application | Allows SysKit Trace to read Intune configuration. |
| Read directory data | Application | Allows SysKit Trace to read directory data. |
| Read all groups | Application | Allows SysKit Trace to read group properties. |
| Read all groups | Delegated | Allows SysKit Trace to read group properties as signed in user. Required for Planner. |
| Read all group memberships | Application | Allows SysKit Trace to read group memberships. |
| Send mail as any user | Application | Allows SysKit Point to send emails so you can be notified ie. when a snapshot finishes. |
| Read your organization's policies | Application | Allows SysKit Trace to read policies. |
| Have full control of all site collections | Application | Allows SysKit Trace to collect data from SharePoint. Unfortunately full control is required and it will not work with read permissions. |
| Sign users in | Delegated | Allows SysKit Trace to collect data from your environment as signed in user. |
| Read all users' full profiles | Delegated | Allows SysKit Trace to read your users profiles and show you reports based on that data. |

**Azure Active Directory Graph**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Read directory data | Application | Allows SysKit Trace to read data in your company or school directory, such as users, groups, and apps. |
| Read all hidden memberships | Application | Allows SysKit Trace to read the memberships of hidden groups and administrative units. |

**SharePoint**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Have full control of all site collections | Application | Allows SysKit Trace to collect data from SharePoint. Unfortunately full control is required and it will not work with read permissions. |
| Read user profiles | Application | Allows SysKit Trace to read user profile properties. |

**Skype and Teams Tenant Admin API**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Access Microsoft Teams and Skype for Business data as the signed in user | Delegated | Allow SysKit Trace to collect Skype for Business data on behalf of the signed-in user. |

**PowerApps Service**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Access the PowerApps Service API | Delegated | Allows SysKit Trace to access the PowerApps Service API on behalf  of the signed-in user. |

**Azure Service Management**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Access Azure Service Management as organization users | Delegated | Allows SysKit Trace to collect data about PowerApps. |

**Exchange**

| Permissions | Type | Reason |
| :--- | :--- | :--- |
| Manage Exchange As Application | Application | Allows SysKit Trace to read data from Exchange. |

{% hint style="warning" %}  
**Please note!**  
The SysKit Trace service principal will also be added to the Exchange Administrators role to support the data collection. The Microsoft documentation (found [here](https://docs.microsoft.com/en-us/powershell/exchange/app-only-auth-powershell-v2?view=exchange-ps#step-5-assign-azure-ad-roles-to-the-application)) states that it's possible with other roles, but from our experience, only the Exchange Administrators role worked for collecting all of the data.  
{% endhint %}
