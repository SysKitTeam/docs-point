---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.150
---

# July 14, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **Sponsor support is now available for the Inactive Guest Users Policy.**   
  * Sponsors can be assigned as reviewers for Inactive Guest Users Policy tasks, so the review is delegated to the person responsible for the guest instead of an administrator.   ← 74352
  * External users are prevented from receiving sponsor tasks, so reviews stay within your organization.   ← 74649
  * The **Users Overview** report now includes a **Sponsors** column, available in the column chooser, so you can see who is sponsoring each user at a glance.   ← 74685

* **New Policy Impact reports are now available in Syskit Point.**  
  * The **Policy Impact by Workspaces** and **Policy Impact by Reviewers** reports show which workspaces and reviewers are covered by your active policies.
  * Both reports support filtering, sorting, and PDF or XLSX export.
  * Available actions include **Email Reviewers** and **Exclude from Policy** for manually applied policies.

## Improvements & Bug Fixes

* **Improvements made to Workspace Review.** 
  * The Workspace Review policy can now be configured to require reviewers to set a sensitivity label on the reviewed workspace before completing the review. 
  * The Workspace Review summary layout has been refined to make the request details easier to scan.

* **Improvements made to Risky Workspaces.** 
  * The Risky Workspaces area is now easier to discover from the main navigation.

* **Fixed an issue** where the OneDrive structure sync query performed poorly on tenants with large OneDrive structures, due to a missing database index.  

* **Fixed a bug** where restoring permission inheritance could fail with an arithmetic overflow error on tenants with very large permission datasets.

* **Various improvements, including UX and UI fixes, have been implemented.**