---
description: This article lists new features, improvements, and bug fixes in SysKit Point version 2022.5.
--- 

# SysKit Point 2022.5

[Schedule a demo](https://www.syskit.com/products/point/request-a-demo/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2022.5

**Build number:** xxx

**Release date:** Oct 15, 2022

## Get the Latest Version

### SysKit Point

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
    Find all steps described in detail in the [deployment article](../installation/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../installation/upgrade-syskit-point.md).

### Configuration Inventory Module
* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

* **Already using the Configuration Inventory module?** Upgrade to the latest version. <br/>
[![](../.gitbook/assets/deployconfigurationinventory.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2FCimVersionUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Configuration Inventory module in the [Configuration Inventory upgrade article](../configuration-inventory/configuration-inventory-upgrade.md).


## Features

{% hint style="warning" %}
**Please note!**  
Global admin re-consent is required after the upgrade to the 2022.5 version. [Learn more about permission changes here](../requirements/permission-requirements-change-log.md#syskit-point-20225).

{% endhint %}




## Improvements & Bug Fixes

* **Configuration Inventory error handling was improved** to simplify troubleshooting in case something goes wrong during a snapshot. Additionally, a bug was fixed where the Configuration Inventory snapshot would result in a `NullReferenceException` error when collecting Conditional Access Policies and Anti-Phish Policies information. 