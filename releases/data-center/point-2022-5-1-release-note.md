---
description: >-
  This article lists new features, improvements, and bug fixes in SysKit Point
  version 2022.5.1
---

# SysKit Point 2022.5.1

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.5.1

**Build number:** 33

**Release date:** Dec 14, 2022

## Get the Latest Version

### SysKit Point

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

### Configuration Inventory Module

* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).
* **Already using the Configuration Inventory module?** Upgrade to the latest version.\
  [![](../../.gitbook/assets/deployconfigurationinventory.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FCimUpdateVersion.json)

See detailed step-by-step instructions on how to upgrade the Configuration Inventory module in the [Configuration Inventory upgrade article](../../configuration-inventory/configuration-inventory-upgrade.md).

## Improvements & Bug Fixes

{% hint style="warning" %}
**Please note!**\
Please [upgrade the Configuration Inventory module](../../configuration-inventory/configuration-inventory-upgrade.md) to get the latest improvements and bug fixes delivered in the latest version.
{% endhint %}

* **Configuration Inventory was improved to support connecting to SQL database using a managed identity.** This method enables the Configuration Inventory module to securely connect to the SQL database without needing a username and password.
* **Fixed an issue** where SharePoint site owners were not able to archive sites, Microsoft 365 Groups, and Microsoft Teams. The following error would show: `Error: Code: Authorization_RequestDenied Message: Insufficient privileges to complete the operation.`
* **Fixed a bug** where the SysKit Point teams app would not show a notification to the requester in case the approver rejected the provisioning request.
