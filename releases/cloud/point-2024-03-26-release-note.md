---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.2.45.37
---

# March 26, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Improvements & Bug Fixes

{% hint style="warning" %}
**Please note!**\
After upgrading to the latest version, sites need to be synced for data to show on the Storage Metrics report due to performance optimization changes introduced.
The first site sync after the upgrade will be a full site sync instead of a partial one, which is required for the optimization changes to take effect.
{% endhint %}

{% hint style="warning" %}
**Please note!**\
Summarized policy vulnerability emails will be gradually rolled out, beginning with the Point Cloud 2024.2.45 release.
You can expect to see the improved emails in the upcoming month.
{% endhint %}

* **Storage Management gets new improvements!**
  * **The Clean Up File Versions** action is now available on the Storage Metrics report when bulk selecting multiple workspaces! 
    * You can now select up to 500 workspaces at a time, run the Clean Up action, and free up your tenant storage even faster.
    * The following options are available when running the Clean Up action:
      * **Old File Versions**
      * **Number Of Versions** 
      * **All But The Last File Version**
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
  * **Optimized** the Site Storage Metrics report when working with large sites.
  * [Learn more about the Storage Management feature by reading articles in this section.](../../storage-management/)

  * **Rules support additional custom metadata types!**
  * Additional custom metadata types, which you create and apply to your workspaces in Syskit Point or via third-party tools, can now be used in rule conditions.
  * The following custom metadata types are now supported: **Dropdown** and **People**. 
  * [For more details about conditions, available properties, and operators, take a look at the conditions section of the Rules article.](../../governance-and-automation/automated-workflows/policy-automation.md#conditions)



* **Syskit Point now sends summarized daily emails for detected policy vulnerabilities!** 
  * This means you will **get fewer emails but still get important information about policy vulnerabilities detected in your workspaces**.
  * Before, owners, managers, or admins responsible for resolving a vulnerability got a separate email for each workspace where the vulnerability was detected.
  * Now, you can expect **1 email per policy type**. 
  * For example, if you have multiple policies of the Minimum number of owners policy type, you will get one email showing information about all policy vulnerabilities for each policy of the Minimum number of owners policy type. 
  * Top 10 workspaces with vulnerabilities are displayed in the email for each policy, and a total number of workspaces with vulnerabilities is given, as well as the link to navigate to Syskit Point from the email. 
  * **Reminder emails are also grouped following the same logic as detection emails**.
  * **Emails sent when Syskit Point resolves the vulnerabilities with a defined automatic action are also grouped.**
  * [Learn more about governance policies in the following article.](../../governance-and-automation/automated-workflows/set-up-policies.md)

* **When creating new custom metadata**, there is a new checkbox that, when selected, includes this metadata in the SharePoint search index. 
  * Selecting this checkbox ensures that editing or provisioning the metadata through Syskit Point results in an indexed property bag value.
  * [Learn how to create and manage custom metadata in Syskit Point in the following article.](../../governance-and-automation/manage-custom-metadata.md)

* **Additional actions added for workspaces** when solving Security & Compliance checks: Archive and Delete. 
  * This can be accessed by clicking the Govern button on the left sidebar, navigating to the Security & Compliance section, and clicking on Active Tasks or History. 
  * Note that the Govern screen is available to Syskit Point Administrators only.

* **Improved the Reassign to Manager option on the Minimum Owners and Maximum Owners policies** to include the ability to select a different user that the task should be assigned to in case there is no Manager for the user in question. 

* **Various improvements and minor UX and UI fixes are available**.