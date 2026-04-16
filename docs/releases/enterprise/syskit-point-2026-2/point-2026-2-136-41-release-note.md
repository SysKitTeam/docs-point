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
This is a critical hotfix release. We recommend upgrading as soon as possible if you have Site Analytics reports in use.
:::

## Improvements & Bug Fixes

* **Fixed a critical issue** in audit log processing caused by the same user appearing in audit logs with different username casing.
  * Processing would fail with the following error:
  ```
  "Violation of PRIMARY KEY constraint 'PK_SiteVisits'. Cannot insert duplicate key in object 'Analytics.SiteVisits'."
  ```
  * This prevented site visits metrics from being saved in the database. Additionally, last login information was not updated for users.
  * Site visitor aggregation now correctly deduplicates users regardless of how Microsoft audit logs represent their usernames. This ensures accurate visitor counts and stable report generation.

* **Various improvements, including UX and UI fixes, have been implemented.**
