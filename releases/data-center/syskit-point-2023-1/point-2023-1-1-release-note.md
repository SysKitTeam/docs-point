---
description: >-
  This article lists new features, improvements, and bug fixes in Syskit Point
  version 2023.1.1.
---

# Syskit Point 2023.1.1

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.1.1

**Build number:** 31

**Release date:** Feb 15, 2023

## Get the Latest Version

### Syskit Point

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Improvements & Bug Fixes

* **Microsoft Teams & Groups** screen was optimized to handle a large number of Distribution lists and Security groups.
* **Fixed an issue** where Autodiscover sync would fail with the following error: `Error converting value {null} to type 'System.Boolean'. Path 'value[154].IsGroupConnected', line <integer>, position <integer>.`
* **Fixed an issue** where Autodiscover sync would erroneously set the status of some sites to Hard-deleted, although the sites are active. This issue affected Multi-Geo tenants only.
* **Fixed a bug** with E-mail settings where a specific SMTP configuration would result in an error when sending the test e-mail.
