---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.5.
--- 

# SysKit Point 2022.5

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.5.0

**Build number:** 114

**Release date:** Oct 26, 2022

## Get the Latest Version

### SysKit Point

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../set-up-point-data-center/deployment/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../set-up-point-data-center/deployment/upgrade-syskit-point.md).

### Configuration Inventory Module
* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

* **Already using the Configuration Inventory module?** Upgrade to the latest version. <br/>
[![](../.gitbook/assets/deployconfigurationinventory.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FCimUpdateVersion.json)

See detailed step-by-step instructions on how to upgrade Configuration Inventory module in the [Configuration Inventory upgrade article](../configuration-inventory/configuration-inventory-upgrade.md).


## Features

* **SysKit Point now supports connecting to SQL database using a managed identity**! This  method enables SysKit Point to securely connect to the SQL database without needing a username and password. Keep in mind the following:
    * **If you are a new user** [deploying SysKit Point for the first time](../installation/deploy-syskit-point.md), **managed identity is used by default**.
    * **If you are an existing user**, **SysKit Point continues to use the SQL authentication after the upgrade to the latest version**. [To switch to the managed identity option, please read the following article](../configuration/upgrade-SQL-to-managed-identity-authentication.md).
    * **If you are using the Power BI companion app**, [discover how to set up Power BI data sync wit SQL authentication here](../power-bi-app/requirements.md).

* **SysKit Point now supports Microsoft Authentication Flow to connect a service account with multifactor authentication enabled**! [Check out the following article to learn more about requirements and how to connect the service account in SysKit Point](../configuration/connect-service-account.md).

## Improvements & Bug Fixes

{% hint style="warning" %}
**Please note!**  
Please [upgrade the Configuration Inventory module](../configuration-inventory/configuration-inventory-upgrade.md) to get the latest improvements and bug fixes delivered in the latest version.
{% endhint %}

* **Configuration Inventory error handling was improved** to simplify troubleshooting in case something goes wrong during a snapshot. Additionally, a bug was fixed where the Configuration Inventory snapshot would result in a `NullReferenceException` error when collecting Conditional Access Policies and Anti-Phish Policies information. 

{% hint style="warning" %}
**Please note!**  
Global admin re-consent is required after the upgrade to the 2022.5 version due to changes in APIs used to send emails. [Learn more about permission changes here](../requirements/permission-requirements-change-log.md#syskit-point-20225).
{% endhint %}

* **SysKit Point now uses Microsoft Graph API to send on-demand and automatic emails**.
The switch was done due to the Outlook REST APIs being fully decommissioned on November 30, 2022.
[To learn more about the permission changes performed because of this, open the Permission Requirements Change Log article](../requirements/permission-requirements-change-log.md).

* **Multiple improvements are available for User sync**. 
    * **Improved handling of various user types and user roles** during User sync.
    * **Fixed an issue where duplicate users could appear** in the SysKit Point database, which would cause degradation in SysKit Point performance.

* **Point 2022.5 comes with improved error handling for delta links**. Delta links are used to optimize data sync and collect only the latest changes. Various syncs now better handle cases with expired delta links older than 30 days.

* **SysKit Point Teams app is optimized to work faster in all environments**, small or large. Besides the **increased speed when loading the Teams app and Governance screens for SysKit Point admins**, **validation errors when creating a request are now clearer and emphasized** not to be missed by requesters.

* **The Audit log collector job was improved** to better handle exceptions and retry audit log collection after failure.

* **Remove Access action on the User Access report is improved**. When removing a user from multiple workspaces, you can now **select multiple workspaces and run the action**; even if you select Power BI workspaces or Shared Channels where the action is not supported, the action removes the user from all workspaces where possible. For all others, an appropriate message is visible in the detailed action log.

* **Fixed an issue** where Point didn’t send Access Review emails if partially synced private channels were found in the SysKit Point database. Such occurrences would cause the Access Review Notifier job to fail with the following error:
`Access Review Notifier Job failed on step: ReviewStartEmail. Error parsing column 0 (ConnectedSiteID=<null>) Null object cannot be converted to a value type.`

* **Fixed an issue** where running the Keep action on an inactive workspace would result in the following error: 
`Error: Cannot keep site because the amount of time selected is higher than your defined maximum of X month/s.`

* **Fixed a bug** where owners couldn’t remove users from a SharePoint group when resolving an Access Review task created for a SharePoint Site. When an owner selected a user inside a SharePoint Group, the side panel showed the ‘No actions available’ message instead of the Remove from Group action.

* **Fixed a bug** where fetching activity for recently deleted Teams or channels would result in an error. The following exception was thrown:
`SysKit.Point.SPO.Graph.GraphException: There was an unexpected failure status code during execution of a batch request (teams/<teamID>/channels/channelID/messages?$top=1, status code (410).`

* **Fixed an issue** where actions would fail if run on a large set of objects, for example, when archiving many inactive workspaces or deleting many users. Due to the long action run time, an authentication token would expire, and subsequent actions would result in the following error visible in logs:
`Microsoft.Identity.Client.MsalUiRequiredException: AADSTS500133: Assertion is not within its valid time range. Ensure that the access token is not expired before using it for user assertion, or request a new token.`

* **Channel details screen fixed** to work with channels containing no folders. Before, the channel details screen for such channels would load indefinitely.

* **Various UX/UI improvements and minor fixes are available**. 
    * **Access Review** and **Lifecycle Management emails now show a link to an instructional video** to help first-time users complete their tasks.
    * SysKit Point now has **improved support for users utilizing the browser translation tools**.
    * **Fixed an issue** where the upgrade banner showing that a new SysKit Point version is available would not show in newer SysKit Point versions after once being closed.
    * **Fixed a bug** where the Licenses Overview report would always show USD currency instead of the currency defined in License Reports settings.
    * **Fixed a bug** where people picker would incorrectly show M365 Group icon for Microsoft Teams. 
    * **Fixed an issue** where the number of inactive workspaces displayed on the Dashboard would differ from the one shown in the Inactive Content report.
    * **Fixed a bug** where Global Viewers would get an Internal Server Error instead of the Access Denied message when accessing the Settings screen. 



