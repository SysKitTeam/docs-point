---
description: >-
  This article provides a full overview of the automated access review process
  for Syskit Point Admins.
---

# Monitor Access Review in Syskit Point

{% hint style="warning" %}
**Please note!**\
First, make sure to check how to [enable and configure the Automated Access Review in Syskit Point](enable-permissions-review.md).
{% endhint %}

**Access review**, in the context of the Microsoft 365 environment, is an activity where a person responsible for a Microsoft 365 workspace - be it a Communication site, Microsoft Team, Microsoft 365 Group, or OneDrive - checks whether permissions given to users inside (internal) and outside (external) of company, comply with the organizational rules and guidelines.

The **Access Review task is usually performed by a site owner** and includes:

* **Checking if all users** - internal and external - **have access to the right workspaces**, be it through directly given permissions, or group memberships
* **Identify unwanted permissions changes** by checking the audit logs
* **Checking if only necessary content is externally shared**
* **Performing correcting actions** to mitigate errors discovered in previous steps

**Syskit Point** provides site owners with the tools to perform these tasks.

The Access Review in Syskit Point can be viewed from two different roles:

* **Syskit Point Admin user**, as described in this article
* [Syskit Point Collaborator user](../../point-collaborators/resolve-governance-tasks/access-review.md)

When working with Access Review, Syskit Point Admin users can:

* **Define Access Review settings**
* **Decide what workspaces are reviewed**
* **Monitor Access Review progress**

On the other hand, Syskit Point Collaborators can **perform the Access Review on workspaces where they are an owner or admin**.

These two roles will have **different reports and actions available** before and during the Access Review and receive different emails.

Here, we will describe how **Syskit Point Admin** can monitor the progress of an active Access Review.

## Admin Reminder for the Upcoming Access Review

Three workdays before the start of automated Access Review, Syskit Point Admin users will receive a reminder email with the most important information about the upcoming Access Review:

* **Start date** of the Access Review
* **Number of site owners** that will be asked to perform an Access Review
* **The number of workspaces** - Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive - included in the upcoming Access Review
* **Modify (1)** link
* **Resolve Now (2)** button

![Access Review reminder email](../../.gitbook/assets/permissions-review\_reminder-before.png)

Click the **Modify** link if you need to change the settings for the Access Review. When logged in to Syskit Point, this link opens the Access Review Settings screen.

If you are already signed in to Syskit Point, clicking the **Resolve Now** button opens the **Access Review – Preview** report with the preselected **Orphaned Sites view (2)**. Here, you can **select a site (3)** and add active users as site owners with the **Change Owners action (4)**.

![Access Review - Preview Orphaned Sites](../../.gitbook/assets/monitor-permissions-review\_preview-orphaned.png)

{% hint style="warning" %}
**Please note!**\
To ensure that all sites have an owner responsible for the upcoming Access Review, set active users as site owners for all orphaned sites.
{% endhint %}

## Governance - Access Review

On the start date of the automated Access Review, **Access Review tasks are created in Syskit Point**, and **email requests are sent to site owners**.

**Each site owner gets one Access Review task**, and that task includes **all sites where the said user is the site owner**.

To **track the currently active Access Review** **progress**, Syskit Point Admins can **use the Governance screen**. To access it, **click the Governance button** on the left side of the screen.

![Home screen - Governance tile](../../.gitbook/assets/monitor-permissions-review_home-screen.png)

When clicked, the Governance screen opens, providing a summary of the active automated Access Review. Here, the following is displayed:

* **Review categories (1)**
  * **Scheduled (automated) Access Review** - selected by default
  * **Manually Requested Reviews**
  * **History** - overview of all completed reviews (automated and manually requested)
* **Visual representation and the percentage of Access Review tasks completed (2)**
* **Start and end date of the Access Review (3)**
* **Number of completed Access Review tasks (4)**
* **Number of completed Access Reviews by site type (5)**
* **See Review Details** **button (6)**, which opens the **Access Review** report

![Governance - Access Review](../../.gitbook/assets/monitor-permissions-review_governance.png)

The Access Review report gives Syskit Point Admins the following information:

* **Request date**, **due date**, **progress**, and **date when the automatic reminder will be sent to site owners (1)**
* **Reviewer(s) (2)**; blocked or deleted owners are displayed in **gray color**
* **Review status (3)** for each site included in the Access Review; can be **Pending** or **Completed**
* **Comments (4)** provided by site owners when completing the review
* **Remind Owners action (5)** to send the reminder email to site owners manually
* **When a workspace is selected (6)**, two actions are available in the side panel:
  * **Review (7)** - only available if Syskit Point Admin is also the owner of the selected workspace
  * **View Details (8)** - available when one or multiple workspaces are selected; opens the [**Access Review - Summary**](monitor-permissions-review.md#access-review---summary) report

![Governance - Access Review](../../.gitbook/assets/monitor-permissions-review_permissions-review.png)

Use the **Remind Owners action** to send a reminder email to site owners regarding the ongoing Access Review. You can use this action **once a day**, whenever you think appropriate, **as long as the Access Review is active**. **Only site owners with pending tasks will receive an email**.

{% hint style="warning" %}
**Please note!**\
Access Review has, by default, a duration of **ten days**. In this time frame, site owners should be able to complete the Access Review on their sites. By default, **three days before the Access Review end date**, Syskit Point sends an automatic **email reminder to all site owners with pending tasks**.
{% endhint %}

## Access Review Completion

The Access Review is automatically marked as completed ten days after the start. Syskit Point also sends summary emails regarding the completed review to all Syskit Point Admin users. The email contains the following information:

* **Number of sites where the Access Review was completed (1)**; grouped by site type
* **Total number of sites where the Access Review was not completed (2)**
* **View Uncompleted Tasks (3)** button

![Email - Access Review completed](<../../.gitbook/assets/monitor-permissions-review\_email-after (2) (2) (3) (2).png>)

To view sites where the Access Review was not completed, click the **View Uncompleted Tasks** button. If already signed in to Syskit Point, you will be redirected to the **Access Review** report. Here, you can:

* **See that all tasks where the Access Review was not completed have the status set to Overdue (1)**
* **Select one or multiple workspaces (2)**
* **Generate the** [**Access Review - Summary report**](monitor-permissions-review.md#access-review---summary) **(3)**

Syskit Point changes the status automatically when the Access Review ends.

![Access Review - Overdue tasks](../../.gitbook/assets/monitor-permissions-review\_overdue.png)

If you take a step back and look at the Governance screen, you can see the following:

* **Scheduled Review (1)** category is displaying the **No active Access Review (2)** message
* **History (3)** category has a new entry - **the completed Access review (4)**
* **See Details (5)** button is visible on the completed Access Review tile

The **See Details** button opens the **Access Review** report, already described in this section.

![Governance - Scheduled Review category](../../.gitbook/assets/monitor-permissions-review\_no-active.png)

![Governance - History category](../../.gitbook/assets/monitor-permissions-review\_history.png)

For more information on the **Manually Requested Reviews category**, [read the following article](manually-request-permissions-review.md).

## Access Review - Summary

The Access Review - Summary report offers a complete overview of actions performed during an Access Review. To generate the report:

* **Open the Access Review screen**; you can open this screen for an active Access Review, or a completed one
* **Select one or more workspaces (1)** for which you want to see what was done during the Access Review
* **Click the View Details link (2)**

![Access Review - View Details](../../.gitbook/assets/monitor-permissions-review\_view-details.png)

The generated **Access Review - Summary** report shows the following information:

* **Workspace Name (1)**
* **Action (2)**
* **URL - external link to the said workspace (3)**
* **Who performed the action (4)**
* **When the action was performed (5)**
* **Action details (6)** that provides all information about performed actions
* **Export button (7)** that generates an XLSX file with all data visible in the Syskit Point interface

![Access Review - Summary report](../../.gitbook/assets/monitor-permissions-review\_summary.png)

With that, we finish the Access Review overview for Syskit Point Admin users.
