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
* [Access Review](#access-review)


:::info
**Customized E-mails** are available in the Security & Compliance plan and higher tiers. See the [customize e-mails article](customize-e-mails.md) for instructions on modifying logos, banners, subjects, and custom messages.

To replace a template entirely with a custom HTML file, refer to the [Set Up E-mail article](set-up-e-mail.md).
:::


## Workspace Review

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Workspace Review – Admin Reminder | `AdminReviewReminderTemplate` | All admins | Before the scheduled Workspace Review starts |
| Workspace Review – Task Created & Reminder | `WorkspaceReviewOwnerTasksCreatedTemplate` | Workspace owners | Workspace Review starts; also used for reminders |
| Workspace Review – Completed | `AdminReviewCompletedTemplate` | All admins | Workspace Review ends (summary of results) |
| Escalations | `ReviewEscalationReminderTemplate` | Workspace owners | Owner does not complete the review task on time |

**Custom message for owners:** Configured in **Settings** > **E-mail** > **Customize Workspace Review E-mail**.

Co-reviewers receive a separate e-mail (`CoReviewersReviewTaskCompletedTemplate.html`) after their Workspace Review task is completed.


## Not Enough Owners

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |


## Too Many Owners

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |


## Orphaned Workspaces

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Task created; reminder sent; vulnerability resolved |
| Automatically Assign New Owners | `GroupByNewOwnerTemplate` | Newly assigned owners | New owners are automatically assigned to a workspace |
| Reassigned Tasks | `GroupByPolicyTypeWithSeparateReassigne-mailTemplate` | Users tasks are reassigned to | Tasks are reassigned |
| Accepted Risk | `GroupByPolicyTypeRiskAcceptedTemplate` | Workspace owners | Risk is accepted for an active vulnerability |

**Automatically Assign New Owners** is sent only when the **Automatically Assign New Owners** option is enabled in the Orphaned Workspaces policy. Recipients are the managers of inactive owners, or custom recipients if no manager exists. The e-mail lists up to 20 workspaces per recipient — if a user is assigned to more than 20 workspaces, they receive multiple e-mails.



## Inactive Workspaces

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Main Vulnerability Template | `GroupByResolverAndPolicyTypeTemplate` | Owners or admins (per policy settings) | Initial detection; vulnerability resolved |
| Inactive Workspaces Reminder | `SiteOwnerInactiveContentTemplate` | Workspace owners | 3 business days before due date; 1 business day before due date |

**Customizing the subject and message:** Navigate to **Settings** > **E-mail** > **Customize Inactive Workspaces E-mail** > **Customize e-mail** to change the subject, banner, and custom message.


## Metadata, Privacy, and Sensitivity Review

SHORT INTRO ABOUT POLICIES + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Ask Owners – Review Tasks | `ReviewOwnerTasksCreatedTemplate` | Workspace owners | Admin requests a metadata, privacy, or sensitivity review |
| Review Completed | `AdminReviewCompletedTemplate` | All admins | Review is completed or overdue |


## Access Review

SHORT INTRO ABOUT POLICY + LINK GOES HERE

| Template | File name | Sent to | Sent when |
|---|---|---|---|
| Access Review – Task Created | `SiteOwnerPermissionsReviewTemplate` | Workspace owners | Access Review task is created |
| Access Review – Owner Reminder | `SiteOwnerPermissionsReviewReminderTemplate` | Workspace owners | 3 days before the task due date |
| Access Review – Admin Reminder | `AdminPermissionsReviewReminderTemplate` | All admins | Before the scheduled Access Review starts |
| Access Review – Completed | `AdminReviewCompletedTemplate` | All admins | Review is completed |


**Custom message for owners:** A custom message can be added in **Settings** > **Access Review options** > **Customize e-mail**. This message appears in both the Task Created and Owner Reminder e-mails. It is not possible to set a different message for each.

**Scheduled start date:** The date shown in the Admin Reminder e-mail is defined in **Settings** > **Access Review options** > **Review Option** > **Start Access Review on**.

