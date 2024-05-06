---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.3.48.11
---

# May 09, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## New Features

* **New policy available:** Private Workspaces Shared with Everyone

  * **Private Workspaces Shared with Everyone** are private workspaces that have given access to a large number of users or groups. 

  * A violation is detected when:
  
    * **Access is given to dynamic security groups that are shared with a large number of people**: Everyone / Everyone except external users / All Users. 

    * **A public workspace is changed to private** and a large number of people still have access or the workspace is still set to providing access to Everyone / Everyone except external users / All User

  * The violation can be resolved either by the admin accepting the risk or by removing access to security groups shared with Everyone / Everyone except external users / All User

  * [For more details about the Private Workspaces Shared with Everyone policy settings, read this article.](../../governance-and-automation/automated-workflows/private-workspaces-shared-with-everyone-admin.md)

  * [To find out more on how to resolve the detected vulnerability, read the related Security & Compliance report article](../../governance-and-automation/security-compliance-checks/private-workspaces-shared-with-everyone.md)



## Improvements & Bug Fixes

* **Improvements made to Provisioning!**

  * **When creating or editing provisioning templates** admins can now add security groups and mail-enabled security groups to the Additional Site Collection Admins section.

  * **The SharePoint Site Provisioning template** now includes the option to Select a Language from the dropdown menu of available languages.
  
  * **Fixed an issue** that prevented all policies from being logged when applying policies on Provisioning templates. 

* **Improved the display** of used storage data for each workspace to reflect the most accurate data. 

* **Optimized compliance** with WAF default rules, which improved report generation, metadata editing, rule generation, and editing lifecycle management options.

* **Added new columns** to the Security and Compliance section of the Govern feature: **Number of owners and Number of members**.

* **Improved the Tenant Storage vulnerability email** to include the following storage-related data: defined storage tenant limit percentage, percentage, and size of used storage, and the total amount of available tenant storage.

* **Fixed an issue** that showed workspace type icons as too large when using the old Outlook browser to access Security and Compliance vulnerability emails.

* **Various improvements and minor UX and UI fixes are available**.