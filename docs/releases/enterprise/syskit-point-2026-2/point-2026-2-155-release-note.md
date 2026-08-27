---
description: This article lists improvements and bug fixes in Syskit Point version 2026.2.155
---

# Syskit Point 2026.2.155

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.155

**Build number:** 68

**Release date:** August 27, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.155](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-155-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

### Security & Compliance

* **Fixed a security vulnerability** in a third-party component used to process HTML content.

* **Fixed an issue** where the number of unlabeled sites did not match across the **Dashboard Overview**, **Security & Compliance**, and **Sites Overview** screens.

### Governance

* **Fixed an issue** in **Workspace Review** where an **Archive** or **Delete** action that failed was still marked as completed, and where these actions were shown for private and shared channels even though they cannot be archived or deleted.

* **Fixed an issue** in **Workspace Review** where starting a chat behaved differently depending on whether it was opened from the task's workspace list or the review overview.

### Access Management

* **Fixed an issue** where a user requesting access to a public Teams workspace was not added as a member.

### Reporting

* **Fixed an issue** in the **Orphaned Users** report where the **Site Type** column was empty, and the **Site** column displayed an incorrect icon.

* **Fixed an issue** in the **Sharing Links** report where some sharing links were not resolved correctly when SharePoint created two separate access grants for the same type of link.

### Storage

* **The Clean Up File Versions action for Storage** now lets you choose how many file versions to keep.
  * On the Clean Up File Versions modal, you can choose whether to keep only the latest version or **enter the number of most recent versions** you want to keep, and older versions are removed to free up storage.

### Power Platform

* **Fixed a bug** where some **Power Platform** data could fail to sync.

### Licensing

* **Improvements made to license management**, including clearer names for some Microsoft licenses and updated categorization for newer license plans.

### Sync & Performance

* **Fixed an issue** on the **Sites** screen where the **Next Automatic Sync** time was calculated using an incorrect threshold.

* **Various improvements, including UX and UI fixes, have been implemented.**
