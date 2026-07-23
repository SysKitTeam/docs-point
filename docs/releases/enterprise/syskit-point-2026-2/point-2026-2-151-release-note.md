---
description: This article lists new features, improvements, and bug fixes in Syskit Point version 2026.2.151
---

# Syskit Point 2026.2.151

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.2.151

**Build number:** 1

**Release date:** July 28, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.151](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-151-1%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


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
  * On manually applied policies, you can complete the **Exclude from Policy** action which removes the policy from the selected workspace(s).
  * The report supports filtering and PDF or XLSX exports.
  * [For more details, take a look at the Policy Impact report article.](../../../governance-and-automation/automated-workflows/policy-impact-report.md)


## Improvements & Bug Fixes

### Security & Compliance

* **The Risky Workspaces report** can now be accessed directly from the Copilot Readiness Dashboard tile by clicking the number of Risky Workspaces.

* **You can now remove a previously accepted risk** from a workspace by running the **Manage Risks** action on the **Risky Workspaces** screen with the **Show by Workspace** view applied.
  * The **Manage Risks** dialog shows all previously accepted risks, who accepted them, and until when they are accepted.
  * When deselecting an accepted risk, a message is displayed indicating that the risk will be calculated again toward the risk score on save.
  * Once removed, the workspace's risk score is recalculated immediately.

### Governance

* **Improvements made to Workspace Review.**
  * You can now configure the Workspace Review policy to **require reviewers to set a sensitivity label on the reviewed workspace** before completing the review.

### Reporting & Settings

* **Improvements made to Reports.**
  * **The following improvements were made to the Sharing Links report:**
    * **The filters step now includes** the **Privacy**, **Number of Company-wide Links**, and **Number of Anonymous Links** columns.
    * A new **Sites with Sharing Links view** is available.
    * **Fixed a bug** that caused the **Created By** and **Created On** columns to not display data on the Sharing Links report.
  * **Fixed an issue** where the **Last Logged In** column was lacking data on the External Users report.

### Sync & Performance

* **Fixed an issue** that caused the OneDrive sync to take longer than expected on tenants with a large number of OneDrive sites.

* **Fixed an issue** where restoring the permission inheritance would fail for large lists.

* **Fixed an issue** where calculating stale files could time out on tenants with a large number of files.

* **Various improvements, including UX and UI fixes, have been implemented.**
