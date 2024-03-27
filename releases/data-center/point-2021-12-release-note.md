---
description: This article lists improvements and bug fixes in Syskit Point version 2021.12.
---

# Syskit Point 2021.12

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2021.12.21

**Build number:** 3

**Release date:** Dec 21, 2021

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

* **You can now define the availability of provisioning templates for users and groups**! You can define your templates to be **visible only for certain users or groups**, be it **based on an Azure Active Directory property** or **by selecting wanted users and groups**. Multiple conditions can be applied to ensure that the right users will have access to a specific provisioning template.
* **Additional site sharing options added to provisioning templates**! Syskit Point Admins can now choose how users share content in a provisioned site and how access requests work. The following options are available in the Sharing Permissions section in all provisioning templates:
  * **Site owners and members can share files, folders, and the site. People with edit permissions can share files and folders.**
  * **Site owners and members, and people with Edit permissions can share files and folders, but only site owners can share the site.**
  * **Only site owners can share files, folders, and the site.** The access request section enables Syskit Point admins to:
  * **Turn access request on or off**
  * **Choose who will receive access requests for the site**:
    * **Site owners**
    * **Specific email** All mentioned options can be accessed and changed in SharePoint site settings.
* **Additional Group settings added to provisioning templates**! Teams, M365 Group, and Yammer templates enable you to now choose from the following 3 options:
  * **Allow external senders to email this group**
  * **Send copies of group conversations and events to group members**
  * **Hide from my organization's global address list** Listed options are also available in the Microsoft Admin center for all Teams, M365 Groups, and Yammer groups.
* **Support for sensitivity sub-labels added to provisioning templates**.
* **New automatic action - Disabling Guest user in Azure AD - added as an option when resolving Guest Users Expiration policy vulnerability**. Suppose guest users are not verified in time. In that case, Syskit Point will automatically disable the guest user in Azure AD to secure your environment and ensure that unverified guest users don't access shared content.

## Improvements & Bug Fixes

* **Improved descriptions for policy vulnerabilities automatically resolved by Syskit Point** are available. A detailed log of all actions performed by Syskit Point is now visible on all resolved policy vulnerability tasks.
* **Improved how user's last sign-in time is calculated in Syskit Point**. If the Exchange audit logs are collected in Syskit Point, the **User singed in to mailbox** event is now being considered in the calculation.
* **Fixed an issue** where the Last Modified date was erroneously calculated.
* **Remove Licenses action** now requires confirmation to avoid accidental bulk removal of licenses.
* **Various UX/UI improvements and minor fixes are available**.
