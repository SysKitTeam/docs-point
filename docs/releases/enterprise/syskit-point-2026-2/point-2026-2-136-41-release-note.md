---
description: Syskit Point Enterprise 2026.2.136.41 hotfix - fixes Site Analytics critical bug
---

# Syskit Point 2026.2.136.41

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.2.136.41](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-2-136-41%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

:::warning
**Please note!** This is a critical hotfix release. The issue was observed in a subset of customer environments, with no clear pattern by Azure region or other tenant properties, and appears to have been triggered by unexpected changes in Microsoft audit log data that adversely affected Syskit Point audit log processing. We recommend upgrading to the latest version for all customers to avoid audit collection lag.
:::

## Improvements & Bug Fixes

* **Fixed a critical audit log issue** caused by the same user appearing with a different username casing in audit logs.
  * Processing would fail with the following error:
  ```
  "Violation of PRIMARY KEY constraint 'PK_SiteVisits'. Cannot insert duplicate key in object 'Analytics.SiteVisits'."
  ```
  * Due to the issue, audit collection starts lagging, meaning more audit logs are being produced than Syskit Point can process. The existing "audit collection lagging" message does not appear to end-users, making this issue even harder to discover.
  * The issue prevented site-visit metrics from being successfully saved to the database. Additionally, the last login information was not updated for users.
  * User deduplication in site visitor aggregation now works regardless of Microsoft audit log username variation. This ensures accurate counts and stable reports.
