---
description: This article lists improvements and bug fixes in SysKit Point version 2023.1.3.
--- 

# SysKit Point 2023.1.3

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.1.3

**Build number:** 6

**Release date:** Mar 27, 2023

## Get the Latest Version

### SysKit Point

* **New to SysKit Point?** Get the latest SysKit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point).<br/>
   Find all steps described in detail in the [deployment article](../set-up-point-data-center/deployment/deploy-syskit-point.md).
    
* **Already using SysKit Point?** Upgrade to the latest SysKit Point version. <br/>
[![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FUpdateFilesARM%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade SysKit Point in the [upgrade article](../set-up-point-data-center/deployment/upgrade-syskit-point.md).

### Configuration Inventory Module
* **Want to try out the Configuration Inventory module?** [Contact us](https://www.syskit.com/contact-us/).

* **Already using the Configuration Inventory module?** Upgrade to the latest version. <br/>
[![](../.gitbook/assets/deployconfigurationinventory.png)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2FCimVersionUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade the Configuration Inventory module in the [Configuration Inventory upgrade article](../configuration-inventory/configuration-inventory-upgrade.md).

## Improvements & Bug Fixes
* **Optimized and improved the Manage Policies screen**. The report now loads a large number of workspaces faster. Additionally, custom metadata columns are now visible on the report to help with searching and filtering. The Owners column was also added to the report. It shows the number of owners per workspace, which can be useful when applying ownership-related policies.
* **Improved the responsiveness of the Automated Workflows screen**. The screen now better handles devices that use scaling.
* **Fixed a bug** where running the Add to Groups action from the User details screen would fail. 
* **Fixed an issue** where the My/All Workspaces screen in SysKit Point Teams app would erroneously show duplicate workspace rows for workspaces with multiple policies assigned.

### Configuration Inventory Module
* **Fixed an issue** with Named Locations and Conditional Access Policies reports where comparison would not work if there are multiple locations or conditional access policies with the same name. 
* **Fixed an issue** where Sensitivity labels data was not correctly synced due to breaking changes in Microsoft API response. 

{% hint style="warning" %}
**Please note!** 
Due to breaking changes in data sync and reports required to support API response changes and multiple objects (for example, conditional access policies) having the same name, expect the following behavior when comparing snapshots created with the new version of Configuration Inventory Module with older snapshots: 
* Comparing two new snapshots is expected to work in all cases.
* Comparing new and old snapshots is expected to work in case there are no objects with the same name in both snapshots.
* Comparing new and old snapshots if they contain objects with the same name in either of the snapshots is expected to fail and result in an error due to breaking changes.
{% endhint %}