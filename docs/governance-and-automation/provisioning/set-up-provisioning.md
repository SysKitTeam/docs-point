---
description: This article explains how to get started with provisioning in Syskit Point. Provisioning workflow helps you streamline workspace creation and prevent uncontrolled growth. 
---

# Set up Provisioning 

{% hint style="information" %}
**Provisioning** is available in the Governance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

## Admins 

To set up a complete provisioning process that fits your company's needs, there are a couple of things that will require your attention: 

1) **Provisioning Templates** – you need to specify which types of workspaces end-users can request. Navigate to the [following article](templates.md) to learn more about templates.

2) **Approval Processes** – define a set of rules each new workspace request needs to go through to be approved. See the [article](approval-processes.md) for more information.

3) **Teams Application** – deploy Syskit Point teams application to request and approve new workspaces. Click [here](../syskit-point-teams-app.md) to find out more.

4) **Microsoft 365 group creation** - by default, all users can create Microsoft 365 groups and the workspaces that rely on groups for access. To limit the creation of workspaces to the Syskit Point Teams app, additional configuration is needed. Learn how to [manage who can create Microsoft 365 groups here](restrict-group-creation.md).

5) **Enable/Disable Feature** - by default, Provisioning is set as enabled but can be disabled without losing any of the existing provisioning requests. In case Provisioning is disabled, existing provisioning requests can still be completed but no new provisioning requests can be created by end-users. [Read more on Enabling and Disabling Provisioning here](enable-disable-provisioning.md).

6) **Customize who will receive notifications in case of a provisioning failure** - by default, Syskit Point admins will get an email in case the creation of a new workspace fails, or a sensitivity label cannot be applied. In such cases, Syskit Point will notify specified users or groups that can troubleshoot and resolve the issue manually. [Learn more about available notification options here](configure-provisioning-failure-notifications.md).

## End-users 

Learn how to: 

1) [Request a new workspace](../../point-collaborators/manage-workspaces/request-new-workspace.md) 

2) [Approve/reject new requests](approve-reject-requests.md) 

3) [Manage requests through time](manage-requests.md)
