---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  version 2023.1.
---

# Syskit Point 2023.1

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.1.0

**Build number:** 33

**Release date:** Feb 7, 2023

## Get the Latest Version

### Syskit Point

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../setup/set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../setup/set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

{% hint style="warning" %}
**Please note!**\
Global admin re-consent is required after the upgrade to the 2023.1 version. Global admins can expect to receive an email with the subject **Syskit Point – Global Admin consent needed**. Consent is required due to permission changes added for the new Access Requests feature. [Learn more about permission changes here](../../../setup/requirements/permission-requirements-change-log.md#syskit-point-20231).

[Syskit Point Teams app upgrade](../../../governance-and-automation/syskit-point-teams-app.md#upgrade-syskit-point-teams-app) is required after upgrading to the 2023.1 version.
{% endhint %}

* **Access Request feature** is now available! Syskit Point admins can now:
  * [Create Access Request policies](../../../governance-and-automation/access-requests/create-access-requests-policy.md) where they can specify the level of access that can be requested, as well as the desired approval process.
  * [Apply the policies](../../../governance-and-automation/access-requests/apply-access-requests-policy.md) to **Microsoft Teams**, **Microsoft 365 groups**, **distribution lists**, **mail-enabled security groups**, **security groups**, and **SharePoint sites**. [Use the Access Requests setup article to guide through the initial setup process](../../../governance-and-automation/access-requests/set-up-access-requests.md). End-users can utilize the Syskit Point Teams app to:
  * [Request to join a specific workspace](../../../point-collaborators/manage-workspaces/request-workspace-access.md) and **approve requests** when users ask to join a workspace; emails are sent to notify when these actions occur.
  * **Discover All Workspaces in their environment** and **workspaces they have joined, listed under My Workspaces**.

{% hint style="info" %}
**Access Requests** are available in the Governance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## Improvements & Bug Fixes

* **Microsoft Teams & Groups Overview** now shows additional group types: Security Groups, Exchange Groups, and Distribution Lists.
  * **Group Access reports** will provide information on owners and members for Distribution Lists and Security Groups.
* Syskit Point now has the option to **enable or disable provisioning**.
* **Syskit Point trial** no longer has a 5k limit for documents and libraries, and the 1M items limit has been increased. [Read more about the trial here.](../../../setup/set-up-point-cloud/free-trial.md)
* **Optimized Power BI views in the Syskit Point database.** Before, large sets of data would allocate all available space for temporary SQL objects, which would, in the end, cause issues when syncing the Power BI model.
* **Improved responsiveness of the Syskit Point Teams app.** The Teams app now better scales on smaller screens, avoiding the overflow of interface elements.
* **Improved the date format in Syskit Point generated emails**. Emails now show the long date format; for example, **Monday, January 3, 2023.**; thus avoiding the confusion of different day/month formats. Issues with emails showing the UTC were fixed.
* **Improved the experience and usability** of the Select Policy drop-down menu in the Manage Policies dialog by adding a tooltip showing the complete Policy name on hover.
* **Fixed a bug** where provisioning templates were unavailable to security group members, although the security group availability was specified in the provisioning template settings.
* **Fixed an issue** where **policy vulnerability emails** (for example, Minimum number of owners and Maximum number of owners policy vulnerability) displayed erroneous information regarding the task reassignment. The email would state the task was reassigned to managers instead of Syskit Point administrators or custom recipients, depending on the policy setup. Additionally, fixed an issue where emails were sent for inactive policies in some cases.
* **Fixed a bug** where the Users with privileged access report would erroneously show users with Full Control permissions on child objects (for example, documents on a site). Only users with Full Control access to the site objects are displayed in the report now.
* **Fixed an issue** with the Manage Reviewers report where the report didn't show SharePoint sites and OneDrive, although they had an Access Review policy assigned.
* **Fixed an issue** with column filters on the Teams & Groups and other inventory reports where excluding blank cells wasn't applied to the displayed results.
* **Fixed a bug** with the Change metadata action that was not visible to workspace owners on the Sites overview screen.
* **Various UX/UI improvements and minor fixes are available**.
