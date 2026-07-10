---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.2.150.
---

# July 14, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **Sponsor support is now available for the Inactive Guest Users Policy.** 
  * Sponsors can be assigned as reviewers for the Inactive Guest Users Policy tasks. 
    * With Sponsors, the review is delegated to the person directly responsible for the guest instead of an administrator or workspace owner.  
  * External users are prevented from receiving sponsor tasks, which means reviews stay within your organization.
  * The **Users Overview** report now includes a **Sponsors** column, available from the column chooser.
    * This lets you see who is sponsoring each user at a glance.

* **New Policy Impact reports are now available in Policies.**
  * The **Policy Impact** report can be accessed by clicking the number of workspaces associated with a policy in Settings. 
  * The Policy Impact report can be sorted **by Workspaces** and, when task delegation is enabled, **by Reviewers** 
    * The report shows which workspaces and reviewers are covered by your active policies.
  * On manually applied policies, you can complete the **Exclude from Policy** action.
  * The report supports filtering and PDF or XLSX exports.

## Improvements & Bug Fixes

* **Improvements made to Workspace Review.**
  * You can now configure the Workspace Review policy to **require reviewers to set a sensitivity label on the reviewed workspace** before completing the review.

* **The Risky Workspaces report** can now be accessed directly from the Security & Compliance Dashboard tile by clicking the number of Risky Workspaces.

* **Fixed an issue** that caused the OneDrive sync to run for a longer than expected time on tenants with a large number of OneDrive sites.

* **Fixed an issue** where the permissions sync could fail with the following error on tenants with a large number of permission changes: 
```
{""assembly"":""SysKit.Point.Repository, Version=2026.2.143.2, Culture=neutral, PublicKeyToken=null"",""method"":""SysKit.Point.Repository.SharePointObjectsRepository+
```

* **Various improvements, including UX and UI fixes, have been implemented.**