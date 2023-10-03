---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2023.4.0.182
---

# October 3, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features
* **New Storage Metrics report is available!**
  * The Storage Metrics report shows your storage usage over time in your tenant to help you: 
    * [Manage and optimize content usage](../../governance-and-automation/optimize-storage.md)
    * Identify potentially unusual spikes
    * Determine whether you need additional storage options
* **There is a new tenant-wide policy - Tenant Storage Limits**.
  * You can modify the percentage of used tenant storage that, once reached, results in Syskit Point raising a check on the Security & Compliance dashboard. Find more details in the [Tenant Storage Limit policy article](../../governance-and-automation/automated-workflows/tenant-storage-admin.md).
  * You can find the Tenant Storage Limit check on the [Security & Compliance dashboard](../../governance-and-automation/security-compliance-checks/security-compliance-checks.md). For more information about the Tenant Storage Limit report, [take a look at this article](../../governance-and-automation/security-compliance-checks/tenant-storage.md).

## Improvements & Bug Fixes

* **Remove Access action was improved**. Point now better handles removing access for a user from workspaces that were deleted in the M365 environment without being synced in Syskit Point. A clear message is displayed in the Action log in such cases.
* **Fixed an issue** where provisioning would fail with the following error when applying sensitivity labels or setting Outlook properties:
`User does not have permissions to execute this action.`
* **Two new columns added to the Manage Reviewers report**. You can find the **E-mail** and **Tenant Domain** columns in the columns chooser. The Manage Reviewers report is located in Settings > Governance > Access Review Options > Manage Reviewers.

* **Various improvements and minor fixes are available**.
