---
description: This article lists improvements and bug fixes in Syskit Point version 2025.2.91
---

# Syskit Point 2025.2.91

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.2.91

**Build number:** XX //TODO

**Release date:** May 16, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2Fv2025-2-90%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).


{% hint style="warning" %}
**Please note!**

**This update continues the transition toward a more scalable platform**.  

Although not mandatory, **we strongly recommend installing this version before future upgrades**. **Please expect a longer upgrade time for this release**, especially in larger environments, where it may take up to an hour. 

**The migration percentage for this process may reset with this update**. This is expected and serves to continue delivering improvements. 

**Regular updates help prevent delays caused by skipping versions**. 

{% endhint %}

## New Features

* **New Power Platform actions are available.**
  * You can now complete the following actions on Power Platform reports:
    * **Delete Flow**
      * This action helps you remove unused flows and can be completed on the Power Automate Inventory report
      * On the report, you can select one or multiple Flows to delete them, however please ensure you have canceled any pending runs to prevent data loss before deleting any Flows
    * **Delete App**
      * This action helps you remove unused apps and can be completed on the Power Apps Inventory report

  * [For more details, please take a look at the Power Platform actions article.](../../../access-management/power-platform-actions.md)

* **New policy available**: Workspaces Without a Sensitivity Label
  * This policy helps you detect workspaces that don't have a sensitivity label attached and could pose a security risk.
    * [For more details about the Workspaces without a Sensitivity Label policy, read this article.](../../../governance-and-automation/automated-workflows/workspaces-no-sensitivity-admin.md)
  * Once a workspace without a sensitivity label is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
    * [To find out more about actions available to Syskit Point admins and how they can resolve the detected vulnerability, read the related Security & Compliance report article.](../../../governance-and-automation/security-compliance-checks/workspaces-without-sensitivity.md)
    * [Learn how workspace owners can resolve the Sensitivity review tasks in the following article.](../../../point-collaborators/resolve-governance-tasks/sensitivity-review.md)
  * Clicking the **Unlabeled Workspaces** button on the Dashboard Workspace Sensitivity tile now redirects to the Security & Compliance checks screen for the Workspaces Without a Sensitivity Label policy.


## Improvements & Bug Fixes

* **Fixed an issue** where the Remove All Sharing Links action removed all links instead of only the selected ones. 
  * This option has been changed, and the updated action now removes only the selected links. 

* **Various improvements and minor UX and UI fixes are available**.
