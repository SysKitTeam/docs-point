---
description: This article describes all of the e-mails available in SysKit Point. 
---

# List of E-Mails in SysKit Point

With the many features available in SysKit Point, it also utilizes e-mails to help you keep track and stay up to date with what is happening in your environment. 

The e-mails are sent for various reasons and in diverse time frames, some of it depending on your own initial setup. In this article, you will find details on where a certain e-mail originates from, who the recipients will be, the frequency in which it's being sent, as well as the subject you can expect to see. 

For easy access to browse through all of the e-mails sent through SysKit Point, this article will outline them in the following categories: 

* [General Emails](#general-emails)
* [Access Review and Lifecycle Management](#access-review-and-lifecycle-management)
* [Policy Violations](#policy-violations)

## General Emails 

The e-mails in this list are those that provide a variety of general information regarding your SysKit Point and tenant, as well as those belonging to features that only require one e-mail to be sent. 

| E-mail | Origin | Configuration | Recipients | Sending frequency| E-mail subject text | 
| :--- | :--- | :--- | :--- | :--- | :--- |
| Test e-mail | E-mail Settings | Settings > General > E-mail> Test e-mail settings | defined by sender - SysKit Point administrator when testing the e-mail settings | On demand; triggered by SysKit Point admin manually | SysKit Point Test |
| Sync error e-mail | SysKit Point Sync | Cannot be changed  | all SysKit Point admins | When a sync issue is detected (audit collection, autodiscover, user sync, ga sync) |  |
| Scheduled Report e-mail | Scheduled Reports | Home > Scheduled Reports | defined in the subscription; can be set to single user, distribution group, M365 group,MS Team, e-mail enabled security group | defined in the subscription; can be set to daily, weekly, or monthly; can also be sent manually on demand | < SubscriptionName > |
| Alert e-mail | Alerts | Home > Alerts | defined in the alert; can be set to single user, distribution group, M365 group,MS Team, e-mail enabled security group | when SysKit Point detects activity that triggers an enabled alert | Alert: < AlertName > |
| Configuration Inventory Report | CIM settings | Settings > General > Configuration Inventory | defined in settings; can be set to a single user, distribution group, M365 group, MS Team, e-mail enabled security group | depending on the defined settings: after CIM snapshot or only when differences between snapshots are detected | Tenant Configuration Inventory Report |
| Orphaned Groups & Teams | Orphaned Resources | Settings > Governance > Automated Workflows > Orphaned Groups & Teams > Edit | defined in policy settings; workspace members, SysKit Point admins or custom recipients | when SysKit Point detects a workspace has no active owners | < TeamOrGroupName > has no owners |


## Access Review and Lifecycle Management

SysKit Point lets certain users in your tenant (site admins and owners) perform Access Review and Lifecycle Management tasks. These e-mails help you track the current status of any of the tasks needed for the upkeep of your Microsoft 365 environment. 

| E-mail | Origin | Configuration | Recipients | Sending frequency| E-mail subject text | 
| :--- | :--- | :--- | :--- | :--- | :--- |
| Access Review reminder for admin | automatic | Cannot be changed  | SysKit Point Administrators | 3 days before the start of automatic Access Review Process | Microsoft 365 Access Review reminder |
| Access Review Request | Manual/automatic | Sites, MS Teams & Groups > Request Review to request manually; Settings > Governance > Automated Workflows > Access Review policy type > Edit to define recurrence | defined in Access Review policy; SP Site - Primary Admin, owner, site admins group, site owners; M365 Group & Teams - Site Admins Group, Team Owners; OneDrive - Primary Admin/Owner, Site Admins Group; Private Channels - Team Owners, Channel Owners; additionally, specific users can be removed from Reviewers in Governance Settings > Access Review Options > Edit Reviewers | manual - on demand; defined in Access Review Policy for automatic; Recurrence - every 1-12 months  | Microsoft 365 Access Review |
| Access Review Request completed | Manual/automatic | Cannot be changed  | defined in Access Review policy | when an Owner/Admin completes the Access Review task | Microsoft 365 Access Review Task Completed |
| Access Review Reminder | Automatic | Settings > Governance > Access Review Options > Send reminder 3 work days before due date option | defined in Access Review policy| 3 days before the Access Review task due date | Reminder: Microsoft 365 Access Review due on < DueDate > |
| LM Request | Manual/automatic | Sites, MS Teams & Groups > Ask Owners to renew to request manually; automatically when a workspace is detected that is inactive longer than the defined number of days in Settings > Governance > Lifecycle Management > Inactive content > Number of days after which workspaces are considered inactive | Site admins, Teams and M365 group owners of an inactive workspace | manual - on demand; automatically when an inactive workspace is detected | < TeamGroupOrSiteName > is inactive |
| LM Request Reminder | Automatic | Settings > Governance > Lifecycle Management > Automation > Send automatic reminders for uncompleted tasks option | Site admins, Teams an M365 group owners of an inactive workspace | 3 days before the Lifecycle Management task due date | Reminder: < TeamGroupOrSiteName > is inactive - due < DueDate > |
| LM Admin Weekly Summary | Automatic | Cannot be changed  | SysKit Point Administrators | Once per week | Lifecycle Management - Weekly Summary |

## Policy Violations

The e-mails in this section will notify you when there have been any policy violations, for example, if the minimum or maximum number of owners has been exceeded or guest user access has expired. 


| E-mail | Origin | Configuration | Recipients | Sending frequency| E-mail subject text | 
| :--- | :--- | :--- | :--- | :--- | :--- |
| Guest Users Expiration Validation | Guest Users Expiration Policy | Settings > Governance > Automated Workflows > Guest Users Expiration > Edit | defined in policy settings; can be set to Manager of Guest User, SysKit Point Administrators or custom recipients | depending on the defined policy settings; when SysKit Point detects that a guest user is inactive or periodical validation of guest users (each 1-12 months) | Renew Access for Guest User < UserName > |
| Guest Users Expiration Validation Reminder | Guest Users Expiration Policy | Settings > Governance > Automated Workflows > Guest Users Expiration > Edit | defined in policy settings; can be turned off | 3 days before guest user validation task due date | Renew Access for Guest User < UserName > |
| Max number of owners Policy Violation Review | Maximum Number of Owners Policy | Settings > Governance > Automated Workflows > Maximum Number of Owners > Edit | workspace owners; if owners don't resolve the task, it is reassigned to Manager of Reviewer/SysKit Point Administrators/Custom Recipients | when SysKit Point detects a workspace violates the applied Maximum number of owners policy | < TeamOrGroupName > has exceeded the maximum number of owners |
| Max number of owners Policy Violation Reminder | Maximum Number of Owners Policy | Settings > Governance > Automated Workflows > Maximum Number of Owners > Edit | defined in policy settings; can be turned off | 3 days before max # of owners task due date | < TeamOrGroupName > has exceeded the maximum number of owners |
| Min number of owners Policy Violation Review | Minimum Number of Owners Policy | Settings > Governance > Automated Workflows > Minimum Number of Owners > Edit | workspace owners; if owners don't resolve the task, it is reassigned to Manager of Reviewer/SysKit Point Administrators/Custom Recipients | when SysKit Point detects a workspace violates the applied Minimum number of owners policy | < TeamOrGroupName > needs to have a minimum of N owners |
| Min number of owners Policy Violation Reminder | Minimum Number of Owners Policy | Settings > Governance > Automated Workflows > Minimum Number of Owners > Edit | defined in policy settings; can be turned off | 3 days before min x # of owners task due date | < TeamOrGroupName > needs to have a minimum of N owners |
| Policy Violation Task resolved  | Policy Violation Task | Cannot be changed  | workspace owners | when the policy violation task is resolved by an owner | Policy Violation Resolved for < TeamOrGroupName > |
| Policy Violation Task automatically resolved  | Policy Violation Task | Min number of owners policy - Automatically Archive or Delete; Guest Users Expiration - Automatically disable guest user, delete guest user, or perform no action (no e-mail is sent); Max number of owners policy - Automatically Remove owners; Orphaned Resources policy - automatically assign new owners | Min number - existing owners; Max number - existing owners; Guest Users - Managers or SysKit Point admins; Orphaned - New owners | when a policy violation task is resolved by SysKit Point| You are assigned as an owner in < TeamOrGroupName > |
| Policy Violation Task Reassigned | Policy Violation Task | Settings > Governance > Automated Workflows > Policy> Edit > If owners don't resolve this task until the due date option - reassign to Manager or reviewer, SysKit Point administrators, custom recipients | defined in policy settings | if owners don't resolve the policy violation task until the due date | same as initial title for each policy; additional information on why the task was reassigned available in the e-mail body |



