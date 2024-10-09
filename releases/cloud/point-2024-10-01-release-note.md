---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.5.64.2
---

# October 01, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## New Features

* **New feature enables workspace owners to perform Metadata Review.**
  * Administrators can decide which metadata workspace owners can review. 
    * [For more details on this, take a look at the Manage Metadata Review article.](../../governance-and-automation/metadata-review/manage-metadata-review.md)
  * When a Metadata Review is requested, workspace owners receive an e-mail notifying them of which metadata should be reviewed and on which workspace(s). 
    * [For more details on this, take a look at the Request Metadata Review article.](../../governance-and-automation/metadata-review/request-metadata-review.md)
  * When a review is requested, workspace owners can enter new information or modify existing metadata.
    * [For more details on this, take a look at the Resolve Metadata Review article.](../../point-collaborators/resolve-governance-tasks/metadata-review.md) 


## Improvements & Bug Fixes

* **Sensitivity Labels** can now be marked as sensitive by administrators in the Settings of Syskit Point. 
  * Content marked with such label(s) will be shown in reports that display sensitive content.
  * The Sensitivity Label with the highest priority rating is automatically set as sensitive.
  * Administrators can find the list of Sensitivity Labels in settings and define which should be registered as sensitive.

* **New Reassign to Manager e-mail** is sent when owners do not resolve the Minimum Number of Owners and Maximum Number of Owners vulnerability tasks, and the reassign option is enabled in the policies.
  * If the task is not completed by the due date, the defined users will receive an e-mail stating that the task has been reassigned to them as it was not completed by the owner(s).
  * Learn more about this in the [Resolve Minimum Number of Owners Tasks](../../point-collaborators/resolve-governance-tasks/minimum-number-of-owners.md) and [Resolve Maximum Number of Owners Tasks](../../point-collaborators/resolve-governance-tasks/maximum-number-of-owners.md) articles. 

* **The Site Type** column was added to the following reports: Site Overview, Storage Metrics, Site Storage Metrics. You can show the column by enabling it in the column chooser.

* **Improved detection** of the Shadow Users policy.

* **Various improvements, including UX and UI fixes, are available**.