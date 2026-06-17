---
description: This article explains which e-mail template is used for each policy and review, and whether each e-mail is sent to workspace owners or admins.
---

# E-mail Templates Overview

Syskit Point sends automated e-mails to workspace owners and admins as part of its governance policies. Each e-mail is built from a specific HTML template.

Use this article to find which templates a policy uses, who receives each e-mail, and what the template file is called so you know which file to customize.

The following policies are included in the article:

* [Workspace Review](#workspace-review)
* [Too Many Owners](#too-many-owners)
* [Not Enough Owners](#not-enough-owners)
* [Orphaned Workspaces](#orphaned-workspaces)
* [Inactive Workspaces](#inactive-workspaces)
* [Metadata, Privacy, and Sensitivity Review](#metadata-privacy-and-sensitivity-review)


:::info
**Customized E-mails** are available in the Security & Compliance plan and higher tiers. See the [customize e-mails article](customize-emails.md) for instructions on modifying logos, banners, subjects, and custom templates.

:::


## Workspace Review

When active, the Workspace Review policy asks workspace owners to periodically confirm that their Microsoft 365 workspace is still active, accurately described, and properly managed. Owners receive an e-mail asking them to review the workspace and either confirm it should remain as-is or take action to update or remove it.


| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Workspace Review – Admin Reminder | `AdminReviewReminderTemplate` | All admins | Before the scheduled Workspace Review starts |
| Workspace Review – Task Created & Reminder | `WorkspaceReviewOwnerTasksCreatedTemplate` | Workspace owners | Workspace Review starts; also used for reminders |
| Workspace Review – Completed | `AdminReviewCompletedTemplate` | All admins | Workspace Review ends (summary of results) |
| Escalations | `ReviewEscalationReminderTemplate` | Workspace owners | Owner does not complete the review task on time |

You can create a **custom e-mail subject, banner and message for owners** by configuring it in **Settings** > **E-mail** > **Customize Workspace Review E-mail**. For more details, [take a look at the Customize E-mails article](customize-emails.md).

Co-reviewers receive a separate e-mail (`CoReviewersReviewTaskCompletedTemplate.html`) after their Workspace Review task is completed.


## Not Enough Owners

The Not Enough Owners policy is triggered when workspaces have fewer owners than required by your governance policies, depending on how it was set up. A workspace with too few owners can become difficult to manage, especially if the sole owner leaves the organization. Owners or administrators receive an e-mail prompting them to assign additional owners to the workspace.

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |


## Too Many Owners

The Too Many Owners policy is triggered when workspaces have more owners than allowed, depending on the number used when setting up the policy. Having too many owners can lead to unclear accountability and increased security risk. When this policy is triggered, the relevant owners or administrators receive an e-mail asking them to reduce the number of owners.

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |


## Orphaned Workspaces

The Orphaned Workspaces policy is triggered when workspaces no longer have any active owners, usually because all owners have left the organization. Without an active owner, these workspaces cannot be properly governed or maintained. Administrators receive an e-mail notifying them of the orphaned workspace so they can assign a new owner or decide whether to archive or delete it.

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Automatically Assign New Owners | `GroupByNewOwnerTemplate` | Newly assigned owners | New owners are automatically assigned to a workspace |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |

The **Automatically Assign New Owners** e-mail is sent only when the **Automatically Assign New Owners** option is enabled in the [Orphaned Workspaces policy](../governance-and-automation/automated-workflows/orphaned-resources-admin.md). Recipients are the managers of inactive owners, or custom recipients if no manager exists. The e-mail lists up to 20 workspaces per recipient. If a user is assigned to more than 20 workspaces, they receive multiple e-mails.



## Inactive Workspaces

The Inactive Workspaces policy detects workspaces that have had no activity for a defined period. Unused workspaces take up storage space, accumulate redundant content, and pose a security risk if left unmanaged. Owners or administrators receive an e-mail asking them to confirm whether the workspace is still needed, should be archived, or deleted.

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Initial detection; vulnerability resolved |
| Inactive Workspaces Reminder | `SiteOwnerInactiveContentTemplate` | Workspace owners | 3 business days before due date; 1 business day before due date |

You can create a **custom e-mail subject, banner and message** by configuring it in **Settings** > **E-mail** > **Customize Inactive Workspaces E-mail** > **Customize e-mail** to change the subject, banner, and custom message. For more details, [take a look at the Customize E-mails article](customize-emails.md).


## Metadata, Privacy, and Sensitivity Review

The Metadata, Privacy, and Sensitivity Review policies ensure that workspaces have accurate metadata, appropriate privacy settings (public or private), and the correct sensitivity label applied. Keeping this information up to date helps enforce data governance and compliance requirements across your organization. Owners receive an e-mail asking them to review and update these workspace properties as needed.

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Ask Owners – Review Tasks | `ReviewOwnerTasksCreatedTemplate` | Workspace owners | Admin requests a metadata, privacy, or sensitivity review |
| Review Completed | `AdminReviewCompletedTemplate` | All admins | Review is completed or overdue |

