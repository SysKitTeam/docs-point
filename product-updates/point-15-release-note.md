---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 15.
---

# SysKit Point 15

**SysKit Point 15 is here**! Before you sail into the vacation, check out what we have prepared for you in the brand-new version of SysKit Point.

[Try SysKit Point trial](https://www.syskit.com/products/point/request-a-free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 15.0.0  
**Build number:** 932  
**Release date:** Jul 27, 2020

## Features

* **Exchange audit logs support added**! SysKit Point can now collect Exchange audit logs. To view the logs, a new Exchange Logs report was added to the Report Center. As with other audit reports, you can narrow your search using date, activity, and mailbox filters. [Learn how to enable Exchange audit logs collection here](../installation-and-configuration/customize-audit-logs-collection.md#exchange-logs).
* **SysKit Point Exchange Admin role added**! Assign the Exchange Admin role to users to give them access to the Exchange Logs report exclusively. For this role, all other reports and content are hidden from the user interface and protected by the integrated Role-Based Security. [Navigate here to learn how to assign Exchange Admin role to users](../installation-and-configuration/enable-role-based-access.md#enterprise-license).
* **Privacy settings added to SysKit Point**! To protect user privacy, **OneDrive content can be excluded from SysKit Point data collection**, making only general information about user’s OneDrive available to SysKit Point Administrators. **User activity reports can also be hidden to ensure user privacy**. The user’s activity is processed in the background and can be made available in case of a security incident. [Learn how to configure privacy settings here](https://github.com/SysKitTeam/docs-point/tree/6713516f971220e326f929bcd4f13d814993cb08/installation-and-configuration/deploy-on-premises/configure-syskit-point-on-premises/README.md#connect-to-office-365).
* **Manually Requested Permissions Review is available**! In case of a security incident or other urgencies in Office 365, you might find yourself needing to review permissions for a resource right there on the spot. SysKit Point has you covered by enabling manual, on-demand Permissions Reviews that immediately start for the resources you select. [Learn how to manually Request a Review here](../common-tasks/manually-request-permissions-review.md).
* **E-mail customization is available**! You can now customize e-mails that SysKit Point sends as a part of the Permissions Review and Lifecycle Management automation. [Learn how to add company Logo and custom messages to e-mails here](../installation-and-configuration/customize-emails.md).
* **Azure SQL database support added**! To deploy SysKit Point in your Cloud environment, you can now use the Azure SQL database. [Find more information on how to configure your Azure SQL database here](../installation-and-configuration/deploy-to-azure/prerequisites/create-azure-sql-database.md).

## Improvements & Bug Fixes

* **Lifecycle Management emails are improved**. Clearer subject and email messages were defined for Lifecycle Management emails. Additionally, site admins of an Office 365 group or Microsoft Team will no longer receive Lifecycle Management tasks, since they cannot perform all Lifecycle Management actions. **Tasks are now sent to owners of an Office 365 group or Microsoft Team only**.
* **Changing the number of workdays to complete tasks supported**. You can define the number of workdays to complete Permissions Review and Lifecycle Manage tasks separately in Governance settings.
* **Site and Group details screen now shows additional information** about active and past Permissions Review and Lifecycle Management tasks, making it easy to see who, when, and why completed the task.
* **Object Type column added** to Permissions Matrix and Externally Shared Content report. Enable the column in the column chooser to display it in the mentioned reports.
* **Office 365 Data Sync improved**. Changes in the site and tenant URLs no longer cause duplicate entries in SysKit Point.
* **Fixed a bug** with the Lifecycle Management tasks, where the request date was incorrectly set to `today – 1 day` when the task was created. Additionally, when calculating the due date of a task, a change was made to set it to workdays only.
* **Fixed an issue** with the User Access report that would result in an error when opened from the External Users report by selecting multiple rows with the same external user. The following error would show: `System.Collections.Generic.KeyNotFoundException: The given key was not present in the dictionary.`
* **Fixed a bug** where the Permissions Review summary e-mail would not be sent if the Permissions Review had been completed before the defined due date.
* **Fixed a bug** with the View Uncompleted Tasks button within the e-mail sent when a Permissions Review is completed. When clicked, the button now opens a correct link.
* **Fixed an issue** where the User Access report would erroneously show permanently deleted sites.
* **Fixed a bug** where the E-mail Preview would show the e-mail of the currently signed-in user in the From field, instead of the e-mail defined in E-mail settings.
* **Various UX/UI improvements and minor fixes** available.

