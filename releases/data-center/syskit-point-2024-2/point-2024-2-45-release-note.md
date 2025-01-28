---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2024.2.45
---

# Syskit Point 2024.2.45

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2024.2.45

**Build number:** 79

**Release date:** April 10, 2024

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## New Features

{% hint style="warning" %}
**Please note!**\
The upgrade to this Syskit Point version may take longer to complete, so we kindly ask for your patience while upgrading. 

After upgrading to the latest version, sites need to be synced for data to show on the Storage Metrics report due to performance optimization changes introduced.
The first site sync after the upgrade will be a full site sync instead of a partial one, which is required for the optimization changes to take effect.
{% endhint %}

* **Storage Management for SharePoint Online gets new improvements!**
  * **Views were added** to the Storage Metrics report:
    * **Largest Sites** view sorts the report based on site size.
    * **Potential Savings - Number of Versions** view sorts the report based on the amount of saved storage you can achieve with the Clean Up action, keeping the [defined number of file versions](../../../configuration/configure-storage-management.md).
    * **Potential Saving - Old Versions** view sorts the report based on the amount of saved storage you get if running the Clean Up action, deleting file versions older than you defined in [Storage Management settings](../../../configuration/configure-storage-management.md). 
  * **Two new columns were added** to the Storage Metrics report and can be selected from the column chooser: **Potential Savings (Old Versions)** and **Potential Savings (Number of Versions)**.
  * **The Clean Up File Versions** action is now available on the Storage Metrics report when bulk selecting multiple workspaces! 
    * You can now select up to 500 workspaces at a time, run the Clean Up action, and free up your tenant storage even faster.
    * The following options are available when running the Clean Up action:
      * **Old File Versions**
      * **Number Of Versions** 
      * **All But The Last File Version**
    * [Learn how to use the Clean Up storage action in the Free Up Storage article.](../../../storage-management/free-up-storage.md#clean-up-action-on-storage-metrics-report)
  * **Improved the Storage Metrics report** with a new Potential Savings tile that includes information on how much storage could be saved by removing all file versions older than X months or removing all file versions except for the last Y file versions.
    * Clicking on either value on the tile filters the report to show the workspaces where the Clean Up action can be performed.
    * The tile also includes a button that takes you directly to Settings, where you can change the default Storage Management options.
  * **Replaced the Add Storage button** on the Tenant Storage Limit Security & Compliance check with the Clean Up action.
    * This action now leads to the Site Storage Metrics report, where you can free up storage and clean up your file versions. 
  * **Improved the Storage tile on the Dashboard**, which now includes information on how much storage you already saved by performing the Clean Up action as well as how much storage you can still potentially save. 
    * Clicking the Clean Up action takes you to the Storage Metrics report. 
  * **Added columns to the Storage Metrics report** that show site growth for the last 7, 30, 90, and 180 Days. 
    * By default, the Last 180 Days column is shown on the report
    * Corresponding Views are available on the Storage Metrics report as well:
      * Largest Growth in last 7 days
      * Largest Growth in last 30 days
      * Largest Growth in last 90 days
      * Largest Growth in last 180 days
    * The columns show growth in MB/GB for the specific period, an arrow that represents the growth trend for the workspace size during that period - a red arrow representing an increase in size, and a green arrow a decrease - as well as the percentage of change that can be seen when hovering over the number.
  * **The Site Storage Metrics report** includes the name of the site for which the report was generated in the top left tile of the report. 
  * **Views were added to the Site Storage Metrics report** for both the Files Only and Site Structure layout:
    * **Largest Files** view sorts the report by file size descending.
    * **File Type Views - Office files, Video, Photos, and Other files** help you filter and show the files by their type.
  * **The File Type tile** on the Site Storage Metrics Report is now drillable; when you click one of the displayed categories - Office, Videos, Photos, and Other - the report shows the selected file types. 
  * **Optimized** the Site Storage Metrics report when working with large sites.
  * [Learn more about the Storage Management feature by reading articles in this section.](../../../storage-management/)

* **Rules were improved and now support several custom metadata types!**
  * Custom metadata, which you create and apply to your workspaces in Syskit Point or via third-party tools, can now be used in rule conditions.
  * The following custom metadata types are supported: **Dropdown**, **People**, **Text**, **Number**, **Date**, and **Boolean (Yes/No)**.
  * New predefined property is available - **Created On** - enabling you to utilize rules to apply governance policies to workspaces based on their creation date. 
  * [For more details about conditions, available properties, and operators, take a look at the conditions section of the Rules article.](../../../governance-and-automation/automated-workflows/policy-automation.md#conditions) 

## Improvements & Bug Fixes

* **Syskit Point now sends summarized daily e-mails for detected policy vulnerabilities!** 
  * This means you will **get fewer e-mails but still get important information about policy vulnerabilities detected in your workspaces**.
  * Before, owners, managers, or admins responsible for resolving a vulnerability got a separate e-mail for each workspace where the vulnerability was detected.
  * Now, you can expect **1 email per policy type**. 
  * For example, if you have multiple policies of the Minimum number of owners policy type, you will get one e-mail showing information about all policy vulnerabilities for each policy of the Minimum number of owners policy type. 
  * Top 10 workspaces with vulnerabilities are displayed in the e-mail for each policy, and a total number of workspaces with vulnerabilities is given, as well as the link to navigate to Syskit Point from the e-mail. 
  * **Reminder e-mails are also grouped following the same logic as detection e-mails**.
  * **E-mails sent when Syskit Point resolves the vulnerabilities with a defined automatic action are also grouped.**
  * [Learn more about governance policies in the following article.](../../../governance-and-automation/automated-workflows/set-up-policies.md)

* **The E-mail settings** now include a Weekly Vulnerabilities summary section, where you can configure which users will receive summary e-mails or turn sending of summary e-mails off. 

* **When creating new custom metadata**, there is a new checkbox that, when selected, includes this metadata in the SharePoint search index. 
  * Selecting this checkbox ensures that editing or provisioning the metadata through Syskit Point results in an indexed property bag value.
  * [Learn how to create and manage custom metadata in Syskit Point in the following article.](../../../governance-and-automation/metadata/manage-custom-metadata.md)

* **Additional actions added for workspaces** when solving Security & Compliance checks: Archive and Delete. 
  * This can be accessed by clicking the Govern button on the left sidebar, navigating to the Security & Compliance section, and clicking on Active Tasks or History. 
  * Note that the Govern screen is only available to Syskit Point Administrators.

* **Improved the Reassign to Manager option on the Minimum Owners and Maximum Owners policies** to include the ability to select a different user to whom the task should be assigned in case there is no Manager for the user in question. 
 
* **The option to replace an orphaned user** was added to the remove user action dialog. 
  * This option should be used if the orphaned user is also the primary admin of a site, as a user cannot be deleted before being replaced with another user as a primary admin.

* **Show items with unique permissions** filter was added to the **Externally Shared Content report**. 

* **Fixed an issue** with filtering by Users and Activity on the Audit Logs Overview report.

* **Fixed an issue** where the Clean Up File Versions action on the Site Storage Metrics report would fail with the following error: `An exception occurred while deleting the file versions for the file: <guid>. Microsoft.SharePoint.Client.ServerException: Versions of this item cannot be deleted because it is on hold or retention policy.`

* **Various improvements and minor UX fixes are available**.