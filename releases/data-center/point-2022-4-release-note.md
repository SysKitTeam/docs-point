---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  version 2022.4.
---

# Syskit Point 2022.4

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.4.0

**Build number:** 9

**Release date:** July 18, 2022

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

## Features

{% hint style="warning" %}
**Please note!**\
Global admin re-consent is required after the upgrade to the 2022.4 version. [Learn more about permission changes here](../../requirements/permission-requirements-change-log.md#syskit-point-20224).

[Syskit Point Teams app upgrade](../../governance-and-automation/syskit-point-teams-app.md#upgrade-syskit-point-teams-app) is required after the upgrade to the 2022.4 version.
{% endhint %}

* **Power Platform data sync can now be enabled for Syskit Point.** Collect Power BI data and utilize it for **Access Reports**.
* Enabling Power BI data collection provides:
  * **List of all Power BI workspaces** and ability to explore all workspaces with a list of **reports, dashboards, datasets, and dataflows**, including information on **who created them, who the owner is, when it was last modified**, and more!
  * Option to check which **users have access to Power BI workspaces and reports** and their level of access.
  * Get insight into **users with a Power BI Pro license** assigned to them, the date **when the Power BI Pro license was assigned**, and when the **license was last used**. Data is available in the [new version of Syskit Point Power BI companion app](../../power-bi-app/releases/power-bi-app-25-release-note.md).
  * The following **Power BI reports** have been added:
    * Power BI Inventory
    * Power BI Workspaces
    * Power BI Permissions
  * Learn [how to enable Power BI data collection here](../../configuration/enable-powerBI-data-collection.md).
* **Syskit Point now supports Shared Channels**, and they can be found under the Microsoft Teams & Groups Inventory.
  * Find out which **internal and external members have access to Shared Channels**, their domain and content, and see whether any Team was added to a specific shared channel.
* Admins for private channels can now **remove, add or change owners and members** or promote members to owners directly in Syskit Point.
  * Learn more about [how to Manage Private Channels Access here](../../access-management/manage-private-channels.md).
* Syskit Point admins can now set up whether Collaborators can change metadata!
  * **Collaborators** can change the metadata when the checkbox **‘Allow collaborators to change this metadata value’** has been enabled for specified metadata.
  * It can be enabled for every custom metadata created in Syskit Point.
* **The External User Type** column is included in Syskit Point and provides **insight into users outside of an organization** who have access to content.
  * It allows differentiating whether a user is a guest, ad hoc guest or shared channel user.
  * This information is available on the Users Overview screen and needs to be selected from the Column Chooser.

## Improvements & Bug Fixes

* **Fixed a bug** where Group Memberships showed permanently deleted resources when accessing the User details report.
* **Fixed an issue** where the Sharing Links report was incorrectly throttled when running the report for a large number of sites.
* **Fixed a bug** that prevented selecting which activities to collect from the Unified Audit Log.
* **Fixed a bug** where Syskit Point’s Microsoft Teams app interface was not updated after deploying a new Syskit Point version.
* **Fixed an issue** where archived workspaces were still sent out as a part of the Access Review.
* **Various UX/UI improvements and other minor fixes** were made.
