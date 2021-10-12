---
description: This article describes the new features and improvements in SysKit Point version 2021.10.
--- 

# SysKit Point 2021.10

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2021.10.14 

**Build number:** 1

**Release date:** Oct 14, 2021

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point 20?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

[Regular link](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

## Features

* **Provisioning of SharePoint sites**, **Yammer communities**, and **Microsoft 365 groups is now available in SysKit Point**! Besides Microsoft Teams, **you can now create provisioning templates for Microsoft 365 groups**, **Yammer communities**, and **SharePoint sites**, right from SysKit Point.
[Click here to learn how to configure SysKit Point to start creating Yammer provisioning templates](../governance-and-automation/provisioning/register-yammer-app.md). 
[To learn more about template settings available for each type of workspace, use this link](../governance-and-automation/provisioning/templates.md).
* **Metadata definition is now available in provisioning**! When creating provisioning templates, you can now define the following metadata for workspaces:
    * **Primary Contact**
    * **Secondary Contact**
    * **Department** – you can choose from departments already defined in your Azure AD
    * **Terms & Conditions** – inform the users requesting workspace creation on terms and conditions and provide a policy link to provide more information on the matter
**After a provisioning request is approved**, **SysKit Point automatically creates a workspace along with the defined metadata**. 
Afterward, you can **find the metadata in SysKit Point overview reports and use it to filter** out the wanted workspaces.
[Click here to learn how to define metadata when creating provisioning templates](../governance-and-automation/provisioning/templates.md). 

* **Sensitivity label assignment is now a part of provisioning**! When creating provisioning templates, **you can now assign sensitivity labels to all types of workspaces**. **After a provisioning request is approved**, **SysKit Point automatically creates a workspace and assigns the selected sensitivity label**.
Afterward, you can **find the assigned sensitivity labels in the SysKit Point overview and details reports and use them to filter** out the wanted workspaces.
[Use the following article to learn how to configure your tenant and SysKit Point to start using sensitivity labels](../governance-and-automation/provisioning/enable-sensitivity-labels.md).

* **External sharing setting selection added to provisioning templates**! When defining provisioning templates, **you can now choose the external sharing setting to be applied to a workspace created after the approval process**. 

* **SysKit Point Power BI Companion is available**! **Power BI Companion** is a complimentary app that **enables you to create your reports on top of existing SysKit Point data**, **customize and change chart types**, and **define how you want to present the data**.
[Follow this link to learn how to deploy and connect SysKit Point Power BI Companion](../power-bi-app/requirements.md).

* **New Privacy change alerts are available**! **Get notified when the privacy of Teams or Groups changes from private to public** and keep your content secure. 
You can **enable the alerts to watch over your whole environment** or select specific workspaces.

* **SysKit Point now supports Sharing Links with review mode enabled**. You can **discover the new type of sharing links in SysKit Point reports** and, if needed, easily remove them with the help of the provided Remove action. 

## Improvements & Bug Fixes

* **SysKit Point sync was optimized**! SysKit Point now only syncs OD files, group channels and settings, and users based on changes detected with the help of delta links, thus **saving valuable time and resources**.
* **Overview screens in SysKit Point are now faster**! **Sites**, **Microsoft Teams and Groups**, and **Users** screens are faster, even **when dealing with large data sets** (we are talking in millions here), and provide an improved user experience. All the data, filters, and views look and feel the same; you will only **get the results faster**.
* **All group types with e-mail are now supported when configuring alerts**, **creating provisioning templates**, or **setting up automated workflow policies**. 
You can now **select distribution lists**, **Microsoft 365 groups**, or **e-mail enabled security groups**, ensuring that the tasks and e-mails are sent to the wanted group of users. 
* **Improved how SysKit Point calculates the Last Modified and Last Activity data**. With this improvement, SysKit Point will always fill the Last activity date and that the Last Modified date is older than or equal to Created on date.
* **Improved Access Review notifications**, **naming**, **and actions are available**. The following has changed:
    * **SysKit Point will now send an e-mail to all owners once the Access Review is completed** on their resources
    * **Overdue tasks were renamed Expired**
    * **SysKit Point admins can now request a new Access Review for expired tasks** from the Access Review Summary screen
    * **You can now select the Access Review policy when manually requesting an Access Review** for workspaces without an assigned policy. 
* **Various UX/UI improvements and minor fixes are available**. As you probably noticed, **SysKit Point 2021.10 switched to new versioning**, containing the date when the version was released. This was done to make it easier for you to detect if you’re running an older version of SysKit Point, which would mean that you’re missing out on all the awesome new features we are regularly releasing. **To make the most out of SysKit Point**, **make sure to upgrade to the latest version now**!
* **Fixed an issue with the Inactive Licenses report**, where Licenses assigned to soft deleted users were displayed as inactive.
* **Fixed a bug on the Licenses Usage by Service report**, where sorting by the Days Since Last Usage column would work incorrectly. 
* **Fixed an issue where the Users overview report would show duplicate users**. 
* **Fixed a bug with the Archive action**, which resulted in Teams being archived, and the connected site staying active. This would then trigger another cycle of lifecycle management tasks where users could not perform the archive action. The issue is now resolved.
* **Fixed a bug** where e-mail settings defaulted to the singed in user when reconnecting the tenant and giving Global Admin consent.
* **Fixed an issue** with the Policy violation resolved e-mail for the Orphaned Teams & Groups Policy. The sent e-mail displayed the wrong user under the Resolved by value when a policy was resolved. 
* **Fixed issues with Analytics reports**. When generating the reports, the following error occurred: `System.ArgumentException: An item with the same key has already been added.`

