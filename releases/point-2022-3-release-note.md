---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.3.
--- 

# SysKit Point 2022.3

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.3.0

**Build number:** 22

**Release date:** May 23, 2022

## Get the Latest Version

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

## Features
* **SysKit Point now enables the creation, management, and provisioning of custom metadata on Microsoft Teams, Microsoft 365 Groups, sites and OneDrive**! SysKit Point admins can now:
  * [Create new custom metadata in SysKit Point](../governance-and-automation/manage-custom-metadata.md#create-custom-metadata)
  * [Change metadata on Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive](../governance-and-automation/manage-custom-metadata.md#change-custom-metadata)
  * [Define custom metadata in provisioning templates](../governance-and-automation/provisioning/templates.md#create-a-new-provisioning-template )
  * [Filter reports by custom metadata](../governance-and-automation/manage-custom-metadata.md#filter-workspaces-by-metadata)
  <br/><br/>

* **Configuration Inventory module is now a part of SysKit Point**! Formerly known as SysKit Trace, this solution for documenting Microsoft 365 tenant configuration settings is now integrated into SysKit Point. Use the following links to:
  * [learn more about Configuration Inventory requirements](../configuration-inventory/configuration-inventory-requirements.md)
  * learn how to [create a snapshot](../configuration-inventory/get-to-know/create-snapshot.md) or [enable automatic snapshots](../configuration-inventory/get-to-know/enable-automatic-snapshots.md)
  * [view all available Configuration Inventory reports](../configuration-inventory/report-overview/README.md)

{% hint style="warning" %}
**Please note!**  
Global admin re-consent is required after the upgrade to the 2022.3 version. 
[Learn more about permission changes here](../requirements/permission-requirements-change-log.md#syskit-point-20223).
{% endhint %}

* **Service accounts can be added to an ignore list**. Setting up an ignored service account means:
    * The Service Account page hits and views **will be ignored when detecting any workspace activity**
    * The Service Account audit logs **won’t be stored**
    * The Service Account changes **will be ignored and won’t trigger alerts** <br/>
    Learn [how to Ignore Service accounts here](../configuration/ignore-service-account-activity-tracking.md).
     <br/><br/>


## Improvements & Bug Fixes

* **Added the ability to remove All Sharing links** on the Sharing Links report. Select All option available for removing all links created on a selected site.
* **Improved the loading speed** for Access Review Options, **improved the functionality** of the preview email and dialogue on **the Access Review Options page**.
* **Improved performance** for Privileged Identity Management (PIM).
    * **Privileged Identity Management (PIM)** allows some users to assign themselves Global Admin rights for a limited amount of time.
    * **Global Admin sync** improved to occur every 4 minutes. 
    * **Fixed a bug** where AAD groups weren’t taken into account for PIM if some members of those groups had administrative roles assigned.
* **Improved speed and performance** for the OneDrive tile when accessing through User details.
* **Optimized speed and performance** when loading the Lifecycle Management details screen.
* **Improved speed** for loading the Overview tile when accessing the Private Channel details screen.
* **Improved Access Review feature** to include exact dates when accessing the Access Review History Details Overview.
  * Names of columns changed to include Status, Performed On and Performed By.
    * Status bar states whether the action was Completed or Expired, and hovering above it provides information on who completed the task.
* **Improved speed** for accessing the Lifecycle Management Email Preview.
* **Fixed an issue** with the {groupName} variable used in the Lifecycle Management e-mail subject. If the subject line was customized, the variable was not resolved properly.
* **Fixed a bug** where the New Update Available ribbon was showing even after updating SysKit Point to the newest version.
* **Fixed a bug** where the loading screen was cut off when generating a Site’s Access Review details report.
    * Once loading was completed, the report would be unresponsive when trying to select lines.
* **Fixed an issue** where a `Bad Request` error message was shown after opening the Details screen on Alerts.
* **Fixed an issue** where removing members from a Group or Team through Microsoft 365 portal doesn’t sync properly.
    * When all members from a group or team are removed, and the group or team is empty after syncing, SysKit Point didn’t update that action and left all the members that were there from the previous sync.
* **Fixed a bug** where the number of workdays was not visible on the Access Review Options screen when viewed on a 2K resolution display.
    * When setting up the Access Review and entering the number of workdays allowed to complete the request, the number wouldn’t show in the selection box when using 2k resolution (2560x1440).
* **Fixed an issue** where the Group Sync would fail in environments with more than 1000 deleted Security Groups.
* **Fixed a bug** where the Users overview showed additional users that no longer existed in the Azure Active Directory.
    * Users overview would show Orphaned users that were not detected as permanently deleted.
* **Fixed an issue** where Sites Overview showed deleted sites as Active.
* **Fixed an issue** with OneDrive sync, resulting in erroneously displaying items as having unique permissions.
    * After sync, all items in a folder would show as having unique permissions, even though that was not their actual state in OneDrive.
* **Fixed a bug** where exporting a report for All Sites as an XLSX file failed due to invalid characters.
* **Fixed an issue** where the provisioning of Microsoft Teams and Microsoft 365 Groups would fail if specific characters - for example, &,!,@, or # - were used as a part of the Team/ Group Name when requesting a new workspace in the SysKit Point Teams app.
* **Fixed an issue** when trying to change admins for OneDrive by going to Users > Sites > User Access didn’t show current admins, and the only option was to cancel the action.
* **Various UX/UI improvements and minor fixes** are available.
