---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2023.1.
--- 

# SysKit Point 2023.1

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.1

**Build number:** 

**Release date:** Feb 7, 2023

## Get the Latest Version

### SysKit Point

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

### Configuration Inventory Module
* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

* **Already using the Configuration Inventory module?** Upgrade to the latest version. <br/>
[![](../.gitbook/assets/deployconfigurationinventory.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2FCimVersionUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade the Configuration Inventory module in the [Configuration Inventory upgrade article](../configuration-inventory/configuration-inventory-upgrade.md).


## Features

{% hint style="warning" %}
**Please note!**  
Global admin re-consent is required after the upgrade to the 2023.1 version. [Learn more about permission changes here](../requirements/permission-requirements-change-log.md#syskit-point-20231).

[SysKit Point Teams app upgrade](../governance-and-automation/syskit-point-teams-app.md#upgrade-syskit-point-teams-app) is required after upgrading to the 2023.1 version. 
{% endhint %}

* **Access Request policy** has been added to Automated Workflows. 
  * Access Request policies can be **added to Microsoft Teams & Groups**.
  * **Admins can create** and edit access request policies.
* **Users can request to join a specific Workspace.** 
  * **Workspace Owners, Managers, and Admins** can approve requests when users ask to join a workspace or a new workspace request is created; emails are sent to notify when these actions occur. 
  * **My Workspaces and All Workspaces** screens are shown in the Microsoft Teams app if they are set as Public and depending on the assigned Access Request policy. 
* **SysKit Point can now be purchased directly through the [subscription portal](https://www.syskit.com/products/point/pricing/)** once the free trial period has expired.
  * When the SysKit Point free trial is activated **, the admin will receive an email**. 
  * **Subscriptions portal can be accessed through SysKit Point** by going to Settings > Point license > Manage Subscriptions. 


## Improvements & Bug Fixes

* **Microsoft Teams & Groups Overview** now shows additional group types: Security Groups, Exchange Groups, and Distribution Lists. 
  * **Group Access reports** will provide information on owners and members for Distribution Lists and Security Groups.
* SysKit Point now has the option to **enable or disable provisioning**.
* **SysKit Point trial** no longer has a 5k limit for documents and libraries, and the 1M items limit has been increased. [Read more about the trial here.](../activation/trial.md)
* **Optimized Power BI views in the SysKit Point database.** Before, large sets of data would allocate all available space for temporary SQL objects, which would, in the end, cause issues when syncing the Power BI model. 
* **Improved responsiveness of the SysKit Point Teams app.** The Teams app now better scales on smaller screens, avoiding the overflow of interface elements. 
* **Improved the date format in SysKit Point generated emails**. Emails now show the long date format; for example, **Monday, January 3, 2023.**; thus avoiding the confusion of different day/month formats. Issues with emails showing the UTC were fixed. 
* **Improved the experience and usability** of the Select Policy drop-down menu in the Manage Policies dialog by adding a tooltip showing the complete Policy name on hover.
* **Fixed a bug** where provisioning templates were unavailable to security group members, although the security group availability was specified in the provisioning template settings.
* **Fixed an issue** where policy violation emails (for example, Minimum number of owners and Maximum number of owners policy violation) displayed erroneous information regarding the task reassignment. The email would state the task was reassigned to managers instead of SysKit Point administrators or custom recipients, depending on the policy setup. 
* **Fixed a bug** where the Users with privileged access report would erroneously show users with Full Control permissions on child objects (for example, documents on a site). Only users with Full Control access to the site objects are displayed in the report now.
* **Fixed an issue** with the Manage Reviewers report where the report didn't show SharePoint sites and OneDrive, although they had an Access Review policy assigned.
* **Fixed an issue** with column filters on the Teams & Groups and other inventory reports where excluding blank cells wasn't applied to the displayed results.
* **Fixed a bug** with the Change metadata action that was not visible to workspace owners on the Sites overview screen.
* **Various UX/UI improvements and minor fixes are available**. 



