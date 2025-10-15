---
description: >-
  This article provides a full overview of the automated access review process
  for Syskit Point Admins.
---

# Monitor Access Review in Syskit Point

:::warning

**Automated Access Review is evolving into [Workspace Review](../workspace-review/setup-workspace-review.md)**, a more powerful solution that covers not only access but also ownership, privacy, sensitivity, and overall workspace security. 

**⚠️ Note: Access Review will be retired in January 2027**. For a richer governance experience, we recommend completing your current reviews and then moving to Workspace Review. 

Learn more in the [Workspace Review documentation](../workspace-review/).
:::

:::warning
**Please note!**\
First, make sure to check how to [enable and configure the Automated Access Review in Syskit Point](enable-permissions-review.md).
:::

**Access review**, in the context of the Microsoft 365 environment, is an activity where a person responsible for a Microsoft 365 workspace - be it a Communication site, Microsoft Team, Microsoft 365 Group, or OneDrive - checks whether permissions given to users inside (internal) and outside (external) of company, comply with the organizational rules and guidelines.

The **Access Review task is usually performed by a site owner** and includes:

* **Checking if all users** - internal and external - **have access to the right workspaces**, be it through directly given permissions, or group memberships
* **Identify unwanted permissions changes** by checking the audit logs
* **Checking if only necessary content is externally shared**
* **Performing correcting actions** to mitigate errors discovered in previous steps

**Syskit Point** provides site owners with the tools to perform these tasks.

The Access Review in Syskit Point can be viewed from two different roles:

* **Syskit Point Admin user**, as described in this article
* [Syskit Point Collaborator user](../../point-collaborators/resolve-governance-tasks/access-review.mdx)

When working with Access Review, Syskit Point Admin users can:

* **Define Access Review settings**
* **Decide what workspaces are reviewed**
* **Monitor Access Review progress**

On the other hand, Syskit Point Collaborators can **perform the Access Review on workspaces where they are an owner or admin**.

These two roles will have **different reports and actions available** before and during the Access Review and receive different emails.

Here, we will describe how **Syskit Point Admin** can monitor the progress of an active Access Review.

## Admin Reminder for the Upcoming Access Review

Three workdays before the start of automated Access Review, Syskit Point Admin users will receive a reminder email with the most important information about the upcoming Access Review:

* **Start date** of the upcoming Access Review
* **The number of workspaces** - Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive - included in the upcoming Access Review
* **Resolve Now (1)** in case some workspaces don't have active owners who will be responsible for performing the Access Review
  * Clicking the Resolve Now button in the e-mail opens the Manage Reviewers report in Syskit Point where you can add active owners to workspaces by running the Change Owners action

![Access Review reminder email](../../../static/img/monitor-access-review-reminder-email.png)

:::warning
**Please note!**\
To ensure that all sites have an owner responsible for the upcoming Access Review, set active users as site owners for all orphaned sites.
:::

## Governance - Access Review

On the start date of the automated Access Review, **Access Review tasks are created in Syskit Point**, and **email requests are sent to site owners**.

**Each site owner gets one Access Review task**, and that task includes **all sites where the said user is the site owner**.

To **track the currently active Access Review** **progress**, Syskit Point Admins can **use the Governance screen**. To access it, **click the Governance button** on the left side of the screen.

![Home screen - Governance tile](../../../static/img/monitor-permissions-review-home-screen.png)

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

![Governance - Access Review](../../../static/img/monitor-permissions-review-governance.png)

The Access Review report gives Syskit Point Admins the following information:

* **Request date**, **due date**, **progress**, and **date when the automatic reminder will be sent to site owners (1)**
* **Reviewer(s) (2)**; blocked or deleted owners are displayed in **gray color**
* **Review status (3)** for each site included in the Access Review; can be **Pending** or **Completed**
* **Comments (4)** provided by site owners when completing the review
* **Remind Owners action (5)** to send the reminder email to site owners manually
* **When a workspace is selected (6)**, two actions are available in the side panel:
  * **Review (7)** - only available if Syskit Point Admin is also the owner of the selected workspace
  * **View Details (8)** - available when one or multiple workspaces are selected; opens the [**Access Review - Summary**](monitor-permissions-review.md#access-review---summary) report

![Governance - Access Review](../../../static/img/monitor-permissions-review-permissions-review.png)

Use the **Remind Owners action** to send a reminder email to site owners regarding the ongoing Access Review. You can use this action **once a day**, whenever you think appropriate, **as long as the Access Review is active**. **Only site owners with pending tasks will receive an email**.

:::warning
**Please note!**\
Access Review has, by default, a duration of **ten days**. In this time frame, site owners should be able to complete the Access Review on their sites. By default, **three days before the Access Review end date**, Syskit Point sends an automatic **email reminder to all site owners with pending tasks**.
:::

## Access Review Completion

The Access Review is automatically marked as completed ten days after the start. Syskit Point also sends summary emails regarding the completed review to all Syskit Point Admin users. The email contains the following information:

* **Total number of workspaces per workspace type** for which the Access Review was completed
* **Total number of workspaces** where Access Review was not completed
* **View Uncompleted Tasks (1)** button 
  * Clicking the button in the e-mail opens the Access Review report in Syskit Point, where you can see all workspaces in the completed Access Review
  * Except via e-mail, you can find the completed Access Review by clicking the **Govern** button, located on the left side of the screen. 

![Email - Access Review completed](../../../static/img/monitor-access-review-email-completed.png)

To see the progress of an ongoing Access Review, click the **Scheduled Review (1)** button located under the Access Review section. 

This screen contains information on:

* **The percentage** of your environment that has been secured
* **The date** when the active Access Review was started
* **The remaining time** left to complete the Access review
* **The last date** that the Access Review should be completed by
* **The number of Access Reviews** completed compared t0 how many are left to complete

You can also see an **overview of the workspaces and how many reviews per workspace were completed** out of how many are still left to complete. 

**Click the See Review Details button (2)** to be redirected to the Access Review report.

Here, you are able to:

* **See that all tasks where the Access Review was not completed have the status set to Pending (1)**
* **Select one or multiple workspaces (2)**
* **Generate the** [**Access Review - Summary report**](monitor-permissions-review.md#access-review---summary) **(3)**

Syskit Point changes the status automatically when the Access Review ends.

![Access Review - Overdue tasks](../../../static/img/monitor-access-review-overdue.png)

If you take a step back and look at the Governance screen, you can see the following:

* **Scheduled Review (1)** category is displaying the **No active Access Review (2)** message
* **History (3)** category has a new entry - **the completed Access review (4)**
* **See Details (5)** button is visible on the completed Access Review tile

The **See Details** button opens the **Access Review** report, already described in this section.

![Governance - Scheduled Review category](../../../static/img/monitor-access-review-no-active.png)

![Governance - History category](../../../static/img/monitor-access-review-history.png)

For more information on the **Manually Requested Reviews category**, [read the following article](manually-request-permissions-review.md).

## Access Review - Summary

The Access Review - Summary report offers a complete overview of actions performed during an Access Review. To generate the report:

* **Open the Access Review screen**; you can open this screen for an active Access Review or a completed one
* **Select one or more workspaces (1)** for which you want to see what was done during the Access Review
* **Click the View Details link (2)**

![Access Review - View Details](../../../static/img/monitor-access-review-view-details.png)

The generated **Access Review - Summary** report shows the following information:

* **Workspace Name (1)**
* **Action (2)**
* **URL - external link to the said workspace (3)**
* **Who performed the action (4)**
* **When the action was performed (5)**
* **Action details (6)** that provides all information about performed actions
* **Export button (7)** that generates an XLSX file with all data visible in the Syskit Point interface

![Access Review - Summary report](../../../static/img/monitor-access-review-summary.png)

With that, we finish the Access Review overview for Syskit Point Admin users.
