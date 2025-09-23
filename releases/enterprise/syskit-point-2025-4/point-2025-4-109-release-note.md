---
description: This article lists improvements and bug fixes in Syskit Point version 2025.4.109
---

# Syskit Point 2025.4.109

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.4.109

**Build number:** XX

**Release date:** September 23, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).


## Improvements & Bug Fixes

* **Improvements were made to the Orphaned Workspaces policy.**
  * **The default Orphaned Workspaces policy** will automatically apply to SharePoint Sites after the next Auto Discover sync.
  * **The user-defined Orphaned Workspaces policy** can also be applied to SharePoint Sites by setting up rules or manually applying the policy to specific sites. 
  * **The [Orphaned Workspaces report](../../../reporting/cleanup-and-health-reports.md#orphaned-workspaces)** has been modified to reflect the updated policy.
  * [For more details on the Orphaned Workspaces policy, read this article.](../../../governance-and-automation/automated-workflows/orphaned-resources-admin.md)

* **Improvements made to handling user permissions for Orphaned Workspaces tasks.**
  * Syskit Point now correctly recognizes which assigned users have the necessary permissions to vote on or approve Orphaned Workspaces policy tasks.
  * Actions such as archive, delete, or promote to owner are now functioning correctly. 
  * Approvers can complete Orphaned Workspaces tasks if they are Point Admins, even without being a Global Admin.

* **A new metric was added** to the column chooser on the **Sites Overview screen**: Number of items shared externally.
  * This metric helps you keep track of external sharing by counting items (files, folders, etc.) to which external users have either direct access or received access through a sharing link.

* **Improved the logging** for the Accept Risk action in Audit logs, which now accurately shows whether the action was successfully completed or failed.

* **Added the Accept risk option** to the Maximum Number of Owners policy for Site owners. 
  * The Accept Risk option can be configured by selecting it in the settings for the policy and is only available as an action if it is enabled.

* **Fixed an issue** where the Change Owners action did not execute correctly when resolving a Maximum Number of Owners policy task. 

* **Fixed an issue** that caused the number of owners and members to be incorrectly displayed in certain reports and tasks, such as the Too Many Members policy task and the Orphaned Workspaces report.

* **Fixed a bug** that caused incorrect values for the Last Activity date for Sites in Syskit Point compared to the Microsoft 365 SharePoint Admin Center data. 

* **Fixed a bug** with the Point Teams app, where workspace provisioning requests could be created despite not being compliant with the ownership policy constraints defined in the provisioning template. 
  * The validation now correctly prevents creating requests with insufficient or excessive owners defined, or with an undefined Primary admin.

* **Fixed an issue** that prevented Site Owners from being able to complete the Inactive Workspace review unless they were also Admins.

* **Fixed an issue** that prevented a workspace member who is also the Manager of an inactive guest user from successfully resolving the Inactive Guest Users tasks.

* **Fixed an issue** where collaborators who were not admins or owners of a workspace could not perform the Archive or Delete actions when resolving the Orphaned Workspaces task. 

* **Fixed an issue** that caused an error when collaborators tried to remove inactive guest users while resolving a task.

* **Various improvements and minor UX and UI fixes are available**.