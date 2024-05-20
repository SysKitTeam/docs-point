---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2024.3.48 
---

# Syskit Point 2024.3.48 

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.3.48 

**Build number:** XX

**Release date:** May 21, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point). \
Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).

* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

* **New policy available:** Private Workspaces Shared with Everyone
  * **Private Workspaces Shared with Everyone** are private workspaces shared with a large number of users through Everyone / Everyone except external users / All Users security groups. 
  * A vulnerability is detected when:
    * **Access is given to dynamic security groups that are shared with a large number of users**: Everyone / Everyone except external users / All Users. 
    * **A public workspace is changed to private**, and a large number of users still have access, meaning the workspace provides access via Everyone / Everyone except external users / All Users security groups.
    * The vulnerability can be resolved by the admin accepting the risk or removing access from Everyone / Everyone except external users / All Users security groups.
    * [For more details about the Private Workspaces Shared with Everyone policy settings, read this article.](../../../governance-and-automation/automated-workflows/private-workspaces-shared-with-everyone-admin.md)
    * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article](../../../governance-and-automation/security-compliance-checks/private-workspaces-shared-with-everyone.md)
  

* **New options for integrating 3rd party apps and Syskit Point are available!**
  * Syskit Point offers 2 types of integration: **Syskit Point API and Webhooks**.
  * **Syskit Point API** is an interface that enables 3rd party apps to **access data available in Syskit Point** and **trigger operations in Syskit Point**.
  * **Webhooks** are messages that Syskit Point **sends to another defined application when an important event occurs**.
  * [For more details, please read through the articles listed in Integrations.](../../../integrations/README.md)


## Improvements & Bug Fixes

* **Improvements made to Reports!**
  * **Added the total number of unique external users in the workspace** to the Power BI Workspaces report.
    * The Power BI Permissions report can now be filtered by user type: internal or external.

  * **Added a new column** to the Scheduled Reports screen: Last Manual Run.
    * The column shows information on when the Send Now action was last executed.
  * **The Storage Metrics report** can now be exported and scheduled.

* **Improvements made to Provisioning!**
  * **When creating or editing provisioning templates** admins can now add security groups and mail-enabled security groups in the Additional Site Collection Admins section.
  * **The SharePoint Site Provisioning template** now includes the option to Select a Language from the dropdown menu of available languages.
    * **Please note!** After the upgrade, a message requesting you to edit the template shows next to the existing SharePoint Site provisioning templates. Under Manage, find the Edit Template action and verify that the correct language is selected. Continue to the last step and, click the Update Template button to complete the update, and remove the displayed warning message. 
  * **Fixed an issue** where the provisioning template dialog didn't correctly display previously selected governance policies.
  * **Fixed an issue** that caused localization errors when trying to create a new SharePoint template from the Provisioning feature in Syskit Point.
  * **Fixed an issue** that prevented editing of existing Provisioning templates.

* **Planner activity detection added to workspaces!**
  * You can find the **Planner Activity column on the Inactive Workspaces report**, and it shows the last Planner activity for any inactive workspaces. 
  * **When determining whether a workspace is inactive in the Lifecycle Management** automation feature, the Planner activity is taken into account, so if there is Planner activity in a workspace, it is not considered inactive.

* **Improvements made to policies!**
  * **Improved functionality** of the Workspaces with too Many Members policy.
  * **The Shadow users policy** can now only be applied to Teams, Groups, and Yammer workspaces.
    * All users who have permissions on a site but are not part of the Members or Owners group of that workspace are now considered Shadow Users.

* **The Add Owners/Members action** now allows you to add a user just as an owner without adding them to the group as a member.

* **Added new columns** to the Security and Compliance section of the Govern feature: **Number of owners and Number of members**.

* **The Rule Preview report** has a new Manual Overrides filter that contains the following: Manually Applied and Priority Override.

* **Admin accounts with no mailbox** can now be added as admins to Orphaned Resourced and resolve delegated Tasks when there is no manager or manager response.

* **Improved the Tenant Storage vulnerability email** to include the following storage-related data: defined storage tenant limit percentage, used percentage, size of the used storage, and the total amount of available tenant storage.

* **Improved the display** of used storage data for each workspace to reflect the most accurate data. 

* **Fixed an issue** that showed workspace type icons as too large when using the old Outlook browser to view Security and Compliance vulnerability emails.

* **Fixed a bug** that caused the same policy violation to be logged as completed multiple times, along with sending duplicate Policy Resolved emails. 

* **Fixed an issue** that caused an interruption in delivery of regularly set up scheduled reports if a scheduled report is requested manually.

* **Fixed an issue** that showed restored workspaces as deleted.
  * If a site was soft deleted and restored to active status, the workspace would still show as deleted when clicking on it. 

* **Fixed an issue** with the Access Review that caused a problem loading users on workspaces with a large number of users.
 
* **Fixed an issue** where retry attempts on Provisioning for Microsoft Teams caused the following error: 
`SysKit.Point.Provisioning.Infrastructure.Clients.MicrosoftGraph.MicrosoftGraphClientException: Failed to execute Templates backend request CreateTeamFromGroupWithTemplateRequest.`

* **Fixed an issue** with GCC High environments using the People Picker for the Syskit Point Teams App.

* **Fixed a bug** that caused the Power BI Workspaces and Inventory reports to show the wrong name for Personal Workspaces. 

* **Various improvements and minor UX and UI fixes are available**.
