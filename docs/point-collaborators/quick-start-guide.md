---
description: This article introduces Syskit Point for workspace owners, explaining how to access it, the tasks you may be asked to complete and why they matter, and where to find detailed instructions for each area.
---

# Quick Start Guide for Collaborators

**Syskit Point** is a management and governance platform for Microsoft 365 that helps you keep the sites, teams, and groups you own secure, organized, and up to date. This article introduces what you can do as a workspace owner, team owner, or manager, and links to the detailed guides for each area.

As a workspace owner, Syskit Point lets you:

* See what you are responsible for in Microsoft 365 at a glance
* Complete short review tasks that keep your workspaces healthy
* Manage who has access to your sites, teams, and groups
* Report on activity and sharing across your workspaces

Most of your work happens through guided tasks and clear screens with straightforward instructions.

## Access Syskit Point

Syskit Point e-mails you whenever there's something for you to do, and every e-mail includes a button such as **Review Now**, **Resolve**, or **Review Workspace**, that opens the relevant screen in Syskit Point. This is the most common way you'll open it.

You can also use the **Syskit Point app in Microsoft Teams** to request a new workspace or request access to an existing one. If you don't see the app, click the three dots in the Teams side panel, search for **Syskit Point**, and select it. To keep it visible, right-click the app icon and select **Pin**.

## The Home Screen

When you open Syskit Point, the **Home** screen gives you access to everything relevant to you as an owner:

* **Sites** - all SharePoint sites you own
* **Microsoft Teams & Groups** - all teams and groups you own
* **Users** - users you manage
* **Dashboard** - a visual summary of your workspaces, users, external sharing, and storage
* **Reports** - pre-built reports you can generate and export
* **My Tasks** - tasks waiting for you to review or resolve
* **Scheduled Reports** - reports that arrive in your inbox automatically
* **Alerts** - notifications about important changes in your workspaces

You only see the data for the workspaces and users you're responsible for.

## Resolve Governance Tasks

Your organization defines governance policies, such as how many owners a team should have or how long a workspace can stay inactive before it's reviewed.

Syskit Point turns those policies into short, guided tasks and assigns them to you in **My Tasks** on the Home screen, where a notification bubble shows how many are waiting.

Completing these tasks on time keeps the workspaces you own secure and compliant, and it means your admins don't need to follow up with you. Each task walks you through exactly what to do.

Your most common tasks include:

| Task Type | What You Need to Do |
| --- | --- |
| **[Inactive Workspace](resolve-governance-tasks/inactive-workspaces.md)** | A workspace you own hasn't been used in a while. Decide whether to keep, archive, or delete it. |
| **[Inactive Guest Users](resolve-governance-tasks/guest-users-expiration.md)** | A guest user hasn't been active. Revalidate their access by removing it, which deletes the guest in Microsoft Entra ID, or keeping it. |
| **[Minimum Number of Owners](resolve-governance-tasks/minimum-number-of-owners.md)** | Your workspace has too few owners. Promote an existing member to owner or add a new owner. |
| **[Maximum Number of Owners](resolve-governance-tasks/maximum-number-of-owners.md)** | Your workspace has too many owners. Change some owners to members to meet the policy. |
| **[Orphaned Workspace](resolve-governance-tasks/orphaned-resources.md)** | A Microsoft Team or Microsoft 365 Group has no active owner. Promote a member, add a new owner, or archive or delete it. |
| **[Metadata Review](resolve-governance-tasks/metadata-review.md)** | Add or update the workspace metadata an admin has asked you to review. |
| **[Privacy Review](resolve-governance-tasks/privacy-review.md)** | Review and, if needed, adjust the workspace's privacy level. |
| **[Sensitivity Review](resolve-governance-tasks/sensitivity-review.md)** | Review and, if needed, adjust the workspace's sensitivity label. |

When you're not sure where to start, open **[My Tasks](resolve-governance-tasks/my-tasks.md)**, which lists everything assigned to you in one place. For the full set of task types, see the [Resolve Governance Tasks](resolve-governance-tasks/README.md) section.

:::info

When you resolve or complete a task, you enter a comment describing the action you took. Add a clear note so administrators and other owners can understand your decision later.

:::

## Complete Workspace Reviews

A **Workspace Review** is a scheduled check your admin sets up to confirm that each workspace still follows your organization's policies. When a review is due, you receive an e-mail with a **Review Workspace** button that opens a guided wizard in Syskit Point.

Over time, workspaces gather members, guests, and shared files. A review keeps that in check, so sensitive content isn't shared more widely than it should be, and it gives your organization a record that its Microsoft 365 environment is being maintained.

During a review, you may be asked to:

* Confirm or update the **owners and members**
* Review **guest access and external sharing**
* Check **files and folders** that are shared widely
* Resolve any **policy vulnerabilities** flagged by Syskit Point
* Decide whether the workspace should be **kept or removed**

The wizard guides you through each step. For a full walkthrough, see the [Workspace Review Overview](workspace-review/workspace-review-overview.md).

:::info


* If you're unsure at any point, you can start a chat with your co-reviewers using the Microsoft Teams icon in the top-right corner.

* The **Summary** step lists every action you took during the review. Some actions may still be processing when you reach it, and they'll finish even after you click **Complete Review**. 

:::

## Manage Access to Your Workspaces

You can manage who has access to the sites, teams, and groups you own directly from Syskit Point. Keeping access limited to the right people is the simplest way to reduce risk. When someone changes teams or leaves a project, you can remove their access in a few clicks.

From the **Sites**, **Microsoft Teams & Groups**, or **Users** screen, you can:

* **[Add or remove owners and members](manage-workspaces/manage-workspace-access.md)** and adjust their permissions
* **[Manage the users you're responsible for](manage-access/manage-users.md)**, including adding them to groups or removing their access
* **[Manage external sharing](manage-access/manage-external-sharing.md)** and guest users
* **[Request a new workspace](manage-workspaces/request-new-workspace.md)** when you're starting a new project
* **[Request access](manage-workspaces/request-workspace-access.md)** to a workspace you don't yet own

Any change you make in Syskit Point is applied to Microsoft 365 automatically.

:::info

Aim for at least two owners on every team or group. If one owner leaves, the workspace still has someone in charge, and you avoid an Orphaned Workspace task later.

:::

## Generate Reports

The **Reports** section provides ready-made reports for the workspaces you own, such as who has access, what's being shared externally, and how storage is used. Reports give you a clear picture of your environment, so you can spot any issues early.

From a report, you can:

* **Export** it to Excel or PDF
* **[Schedule](reporting/schedule-reports.md)** it to be sent to you by e-mail on a regular basis
* **Filter** the report to focus on the data that matters

You can also **[set up alerts](reporting/alerts.md)** to be notified automatically when something important changes. For everything available, see the [Reporting](reporting/README.md) section.

:::info

Schedule the reports you rely on most, such as external sharing or access, to arrive in your inbox each month, so you stay informed without having to check manually.

:::

## E-mail Notifications

Syskit Point sends you an e-mail only when there's something for you to do. The most common notifications are:

* **Task assigned** - a new task is waiting in My Tasks
* **Workspace Review request** - it's time to review one or more of your workspaces
* **Reminder** - a task or review is approaching its due date
* **Scheduled report** - a report you scheduled is ready

Every e-mail includes a button that takes you straight to the relevant screen in Syskit Point.

## Where to Find Help

For step-by-step instructions on any feature, take a look at the full [Syskit Point documentation](https://docs.syskit.com/point/). For questions about access, policies, or a specific workspace, contact your Syskit Point administrator.
