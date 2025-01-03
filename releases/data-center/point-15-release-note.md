---
description: This article describes the new features and improvements in Syskit Point version 15.
---

# Syskit Point 15

**Syskit Point 15 is here**!

Before you sail into the vacation, check out what we have prepared for you in the brand-new version of Syskit Point.

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 15.0.0  
**Build number:** 932  
**Release date:** Jul 27, 2020

## Features

* **Exchange audit logs support added**! Syskit Point can now collect Exchange audit logs. To view the logs, a new Exchange Logs report was added to the Report Center. As with other audit reports, you can narrow your search using date, activity, and mailbox filters. [Learn how to enable Exchange audit logs collection here](../../configuration/customize-audit-logs-collection.md#exchange-logs).
* **Syskit Point Exchange Admin role added**! Assign the Exchange Admin role to users to give them access to the Exchange Logs report exclusively. For this role, all other reports and content are hidden from the user interface and protected by the integrated Role-Based Security. [Navigate here to learn how to assign Exchange Admin role to users](../../configuration/enable-role-based-access.md).
* **Privacy settings added to Syskit Point**! To protect user privacy, **OneDrive content can be excluded from Syskit Point data collection**, making only general information about user’s OneDrive available to Syskit Point Administrators. **User activity reports can also be hidden to ensure user privacy**. The user’s activity is processed in the background and can be made available in case of a security incident. [Learn how to configure privacy settings here](../../set-up-point-cloud/free-trial.md#connect-your-tenant).
* **Manually Requested Access Review is available**! In case of a security incident or other urgencies in Microsoft 365, you might find yourself needing to review permissions for a workspace right there on the spot. Syskit Point has you covered by enabling manual, on-demand Access Reviews that immediately start for the workspaces you select. [Learn how to manually Request a Review here](../../governance-and-automation/permissions-review/manually-request-permissions-review.md).
* **E-mail customization is available**! You can now customize e-mails that Syskit Point sends as a part of the Access Review and Lifecycle Management automation. [Learn how to add company Logo and custom messages to e-mails here](../../configuration/customize-emails.md).
* **Azure SQL database support added**! To deploy Syskit Point in your Cloud environment, you can now use the Azure SQL database. [Find more information on how to configure your Azure SQL database here](../../set-up-point-cloud/free-trial.md#connect-your-tenant).

## Improvements & Bug Fixes

* **Lifecycle Management emails are improved**. Clearer subject and email messages were defined for Lifecycle Management emails. Additionally, site admins of an Microsoft 365 Group or Microsoft Team will no longer receive Lifecycle Management tasks, since they cannot perform all Lifecycle Management actions. **Tasks are now sent to owners of an Microsoft 365 Group or Microsoft Team only**.
* **Changing the number of workdays to complete tasks supported**. You can define the number of workdays to complete Access Review and Lifecycle Management tasks separately in Governance settings.
* **Site and Group details screen now shows additional information** about active and past Access Review and Lifecycle Management tasks, making it easy to see who, when, and why completed the task.
* **Object Type column added** to Permissions Matrix and Externally Shared Content report. Enable the column in the column chooser to display it in the mentioned reports.
* **Microsoft 365 Data Sync improved**. Changes in the site and tenant URLs no longer cause duplicate entries in Syskit Point.
* **Fixed a bug** with the Lifecycle Management tasks, where the request date was incorrectly set to `today – 1 day` when the task was created. Additionally, when calculating the due date of a task, a change was made to set it to workdays only.
* **Fixed an issue** with the User Access report that would result in an error when opened from the External Users report by selecting multiple rows with the same external user. The following error would show: `System.Collections.Generic.KeyNotFoundException: The given key was not present in the dictionary.`
* **Fixed a bug** where the Access Review summary e-mail would not be sent if the Access Review had been completed before the defined due date.
* **Fixed a bug** with the View Uncompleted Tasks button within the e-mail sent when an Access Review is completed. When clicked, the button now opens a correct link.
* **Fixed an issue** where the User Access report would erroneously show permanently deleted sites.
* **Fixed a bug** where the E-mail Preview would show the e-mail of the currently signed-in user in the From field, instead of the e-mail defined in E-mail settings.
* **Various UX/UI improvements and minor fixes** available.

