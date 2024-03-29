---
description: >-
  This article describes the new features and improvements in Syskit Point
  version 20.
---

# Syskit Point 20

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 20.0.0

**Build number:** 38

**Release date:** Jul 8, 2021

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** [Contact us](https://www.syskit.com/company/contact-us/) to arrange a guided migration to the latest version due to changes in Syskit Point's architecture.

## Features

* **The Provisioning feature is available**! It enables you to define a provisioning process that fits your company’s needs, and at the same time, ensure that all newly created workspaces are compliant with defined governance policies. In Syskit Point, you can now:
  * **Create provisioning templates** – predefined workspace types which end-users can request
  * **Create approval processes** – you can define one-stage or multi-stage approval processes
  * **Deploy Syskit Point Teams application to end-users** Within the new [Syskit Point Teams app](../../governance-and-automation/syskit-point-teams-app.md), users will be able to:
  * **Request new workspaces**
  * **Approve or reject requests**
  * **Manage all their requests through time** [You can find all provisioning-related articles in the Provisioning section](../../governance-and-automation/provisioning/).
* **The new Change Security Group Owner action is available**! You can find it on the Group Access report when a security group is selected.

## Improvements & Bug Fixes

* **New Access Review Policy Options available**! For each Access Review policy, you can now define who are the default reviewers for different workspaces. You can choose between:
  * Primary Admin / Owner
  * Site Admins Group
  * Site Owners
  * Team/Group Owners
  * Channel Owners
* **Improved lifecycle management actions**! It is now possible to delete workspaces that are already archived without the need to restore them first.
* **Improved error handling for Autodiscover, User, and Teams & Groups sync**.
* **Various UX/UI improvements and minor fixes available**.
* **Fixed an issue** where restoring an archived team with private channels would fail with the following error: `An exception occurred while trying to restore <team_name> from archived state. SysKit.SecurityManager.SPO.Graph.GraphException: Failed to execute backend request.`
