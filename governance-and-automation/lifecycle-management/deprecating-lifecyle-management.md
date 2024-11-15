---
description: This article explains why Lifecycle Management is getting deprecated and what will replace it in Syskit Point.
---

# Lifecycle Management - Deprecated

**The Lifecycle Management feature will soon be deprecated and replaced by the new [Inactive Workspaces policy](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)**. 

This updated policy provides better flexibility with the option to disable or enable task delegation for managing inactive workspaces. 

Even if task delegation is not enabled, inactive workspaces are still detected and displayed on the Security and Compliance Dashboard. This helps administrators stay informed of inactive workspaces and allows them to manage them without involving workspace owners. 

Below is information on what will happen as we prepare to deprecate Lifecycle Management. 

* Lifecycle Management will be shown as `[Deprecated]`
* Workspace owners will still be able to [resolve existing Lifecycle Management tasks](../../point-collaborators/resolve-governance-tasks/lifecycle-management.md)
* Lifecycle Management will no longer send e-mails and tasks to workspace owners, but admins will still see active and resolved tasks
* The existing Lifecycle Management tile on the dashboard will be replaced with the Inactive Workspaces tile, which will use data from the Inactive Workspaces policy


Once Lifecycle Management is completely removed, the following happens:

* The History for resolved Lifecycle Management tasks will be transferred to Inactive Workspaces and located in the Completed section
    * This way, you can still see how many archived, deleted, or kept workspaces you have
* Lifecycle Management will be removed from navigation in Govern, Tasks, and Settings


## Inactive Workspaces Articles

Here are relevant links you can use to learn more about the Inactive Workspaces policy:

* [Inactive Workspaces policy settings](../../governance-and-automation/automated-workflows/inactive-workspaces-admin.md)
* [Inactive Workspaces Security & Compliance check](../../governance-and-automation/security-compliance-checks/inactive-workspaces.md)
* [Resolve Inactive Workspaces tasks](../../point-collaborators/resolve-governance-tasks/inactive-workspaces.md)