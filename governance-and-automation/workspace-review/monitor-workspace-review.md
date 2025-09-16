---
description: >-
  This article provides a full overview of the workspace review process for Syskit Point Admins.
---

# Monitor Workspace Review in Syskit Point

{% hint style="warning" %}
**Please note!**\
In order to monitor workspace reviews, please make sure you have [enabled and configured at least one Workspace Review policy](setup-workspace-review.md).
{% endhint %}

The Workspace Review policy helps organizations maintain and secure their Microsoft 365 environment by enabling regular, structured and recommendation-driven review of the most important workspace settings. It provides automated tasks for workspace owners to review and resolve policy violations related to access, privacy and sensitivity. 

Unlike Access Review, which focuses on reviewing users' access, the Workspace Review includes additional governance checks such as: 

* **Inactive Workspaces** - reviewers can archive or delete workspaces that are no longer in use
* **Minimum Number of Owners** - reviewers can ensure that each workspace has enough active owners
* **Maximum Number of Owners** - reviewers can ensure that workspaces do not have too many owners
* **Privacy and Sensitivity Reviews** - reviewers can ensure that workspaces comply with organizational policies and are correctly labeled

Once you've [created your Workspace Review policies](setup-workspace-review.md), based on your selected settings, reviewers receive tasks to regulatly review and ensure the safety of their workspace.  

The Workspace Review in Syskit Point can be viewed from two different roles:

* **Syskit Point Admin user**, as described in this article
* [Syskit Point Collaborator user](../../point-collaborators/resolve-governance-tasks/access-review.md)

When working with Workspace Review, Syskit Point Admin users can:

* **Define Workspace Review settings**
* **Decide which workspaces the policy applies to**
* **Monitor Workspace Review progress**

While Syskit Point Collaborators can **perform the Workspace Review on workspaces where they are an owner or admin**.

These two roles have **different reports and actions available** before and during the Workspace Review and receive different emails.

In this article you can find our  how **Syskit Point Admin** can monitor the progress of an active Access Review.

## Workspace Review - Governance

On the start date of the automated Workspace Review, **Workspace Review tasks are created in Syskit Point**, and **e-mail requests are sent to reviewers**.

**Each reviewer gets one Workspace Review task**, and that task includes **all workspaces where the said user is an owner or admin**, based on the [how reviewers were defined for that Workspace Review policy](../../governance-and-automation/workspace-review/setup-workspace-review.md).

To **track the progress** of currently active Workspace Reviews, **request a workspace Reviews** for workspaces **manually**, or **cancel an existing review**, Syskit Point Admins can **use the Governance screen**. 

To access the Governance screen, **click the Govern button** on the left side of the screen.

On the Governance screen, the **Workspace Review** is divided into two sections:
* [Overview](#overview)
* [Insights](#insights)

![Home screen - Governance tile](../../.gitbook/assets/monitor-permissions-review-home-scren.png)

### Overview

The Overview screen provides a quick look at the state of your Workspace Review.

* The filter in the top left corner lets you select between the view you want applied, with the following options available:
  * All Reviews
  * In Progress
  * Future
  * Not Applied
  * Policy Disabled

Each workspace review contains the following: 
* Name of the review and the current state of the review (example. requested, in progress)

* Date the review was started
  * The Manage Reviewers button is located under the date, in case you want to remove or add reviewers to a workspace
* Time left to complete the review 
* Number of workspaces included in this workspace review 
* Percentage of tasks complete and number of workspaces where the review was completed out of the number of workspaces where it was requested
* Cancel Review button - clicking this opens the confirmation dialog where you need to confirm the cancelation
* View Details - clicking this opens the review details screen for that workspace review policy

After clicking the View Details button, the Workspace Review details screen appears where the following can be found:

* Review Information which includes:
  * Click the Manage button to edit the Workspace Review Policy
  * Name of the review and the current status
  * Date the review was requested
  * Due date by which the review should be completed on
  * Amount of days when an automatic reminder is sent
  * Recurrence time, which shows how often the workspace review is repeated
  * A list of what this workspace review includes out of the following options:
    * Full Access
    * Sensitivity Review
    * Shadow Users
    * Privacy Review
    * Membership
    * Sharing

* Most Used Actions, which shows the top actions that were performed by end users in this review

* Completion Rate, which shows the percentage of review completion as well as the number of workspaces the review was completed on out of the number of workspaces the review was requested on

* Review Activity, which shows the number of actions taken during this workspace review

* Workspaces Included, which provides a list and overview of all workspaces included in the review with the following columns available:

  * Workspace - name of the workspace
  * URL - URL for the workspace
  * Status - the current status of the review for that workspace
  * Reviewer(s) - list of reviewers responsible for that workspace
  * Performed by - shows who the review was performed by
  * Performed on - shows the date when the review was performed
  * Number of Actions - the number of actions taken on the workspace as part of the workspace review
  * Remind Owners action - in the top left corner, clicking this sends an e-mail reminder to reviewers  
  * Review Now action - lets you complete the review on that workspace by yourself 


![overnance - Access Review](../../.gitbook/assets/monitor-permissions-review-governanc.png)


### Insights

The Insights screen provides a more details into the state of your Workspace Review across a period of time.

* The filter in the top left corner lets you choose the time frame you want to generate the information for, with the following options available:
  * Last 3 Months
  * Last 6 Months
  * Last 12 Months
  * This Year
  * Custom

* The Most Used Actions shows the list of the most user actions for the workspace review, as well as graphs that indicate the number of time an action was performed 

* Completion Rate, which shows the percentage of review completion as well as the number of workspaces the review was completed on out of the number of workspaces the review was requested on, for the duration you selected

* Review Activity, which shows the number of actions taken for the workspace review for the duration you selected

There is also an overview of workspaces that the review was requested on, which can be viewed in two ways

* When shown by Workspace, the following information is included: 
  * Workspace - name of the workspace
  * Reviewed in Period - shows whether the workspace was reviewed in the time frame you selected
  * Last Review - shows when the last review was performed on the workspace
  * Reviews Completed - the number of reviews in the selected time period, showing as N/M, with N being the number of completed reviews, and M the number of requested reviews
  * Number of Actions - the number of actions taken on the workspace as part of the workspace review
  * In Progress - whether a workspace review is currently active for the workspace
  * Review Now action - lets you complete the review on that workspace by yourself 

* When shown by Review, the following information is included: 
  * Policy Name - the name of the Workspace Review policy that was applied
  * Status - the current status of the review for that workspace
  * Requested Date - the date the review was requested on 
  * Completed Date - the date the review was completed on
  * Number of Actions - the number of actions taken as part of the workspace review
  * View Details button - clicking this opens the review details screen for that workspace review policy, as was explained earlier in the [Overview section of the article](#overview)

The Insights screen can be be **exported as PDF and XLSX files**.

## Workspace Review - Completion Summary

When at least one workspace has their workspace review task completed, you can view the **Actions Performed** screen. Here's how you'll **get a summary of your workspace reviews per workspace**. 

On the **Govern > Overview screen**, scroll to the Workspaces Included section and from the left side filter select **Completed**. 

This lists the workspaces for which the review was completed, and by clicking the **View Details button**, the Actions Performed screen opens for that workspace. 

On the **Actions Performed** screen, the following is available:

* **About This Workspace Review section** that contains information on:
  * **Status** of the review 
  * **Reviewed By** shows who reviewed the workspace and when
  * **Workspace Name** shows the name of the workspace
  * **URL** shows a clickable URL for the workspace
  * **Comments** shows any comments left by reviewers while resolving the workspace review task for the workspace

* **Actions Performed filter**, which lists all the actions performed on the workspace, along with the number of times it was performed
  * Clicking on an action filters the actions report below to reflect only information for the action selected

* **Actions Performed report** with the following columns:
  * **Action** shows what action was performed
  * **Performed By** shows who performed the action
  * **Performed On** shows when the action was performed
  * **Status** shows the status of the action, and whether it was performed successfully
  * **Details** shows more details about the action performed

* The additional columns available from the column chooser are:
  * **Scope**
  * **Execution End Time**
  * **Name**
  * **URL**
  * **Error**

* At the bottom, you can find information on who completed the review and when, along with a **Close button**. 
  * Clicking on the Close button brings you back to the Workspace Review Overview screen. 

![Access Review - View Details](../../.gitbook/assets/monitor-access-review-view-details.png)


## Workspace Review Completion


INFO ABOUT HOW EMAILS WORK FOR WORKSPACE REVIEW

The Access Review is automatically marked as completed ten days after the start. Syskit Point also sends summary emails regarding the completed review to all Syskit Point Admin users. The email contains the following information:

* **Total number of workspaces per workspace type** for which the Access Review was completed
* **Total number of workspaces** where Access Review was not completed
* **View Uncompleted Tasks (1)** button 
  * Clicking the button in the e-mail opens the Access Review report in Syskit Point, where you can see all workspaces in the completed Access Review
  * Except via e-mail, you can find the completed Access Review by clicking the **Govern** button, located on the left side of the screen. 

![Email - Access Review completed](../../.gitbook/assets/monitor-access-review-email-completed.png)

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

![Access Review - Overdue tasks](../../.gitbook/assets/monitor-access-review-overdue.png)

If you take a step back and look at the Governance screen, you can see the following:

* **Scheduled Review (1)** category is displaying the **No active Access Review (2)** message
* **History (3)** category has a new entry - **the completed Access review (4)**
* **See Details (5)** button is visible on the completed Access Review tile

The **See Details** button opens the **Access Review** report, already described in this section.

![Governance - Scheduled Review category](../../.gitbook/assets/monitor-access-review-no-active.png)

![Governance - History category](../../.gitbook/assets/monitor-access-review-history.png)

For more information on the **Manually Requested Reviews category**, [read the following article](manually-request-permissions-review.md).


## Admin Reminder for Workspace Reviews

Three workdays before the start of automated Access Review, Syskit Point Admin users will receive a reminder email with the most important information about the upcoming Access Review:

* **Start date** of the upcoming Access Review
* **The number of workspaces** - Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive - included in the upcoming Access Review
* **Resolve Now (1)** in case some workspaces don't have active owners who will be responsible for performing the Access Review
  * Clicking the Resolve Now button in the e-mail opens the Manage Reviewers report in Syskit Point where you can add active owners to workspaces by running the Change Owners action

![Access Review reminder email](../../.gitbook/assets/monitor-access-review-reminder-email.png)

{% hint style="warning" %}
**Please note!**\
To ensure that all sites have an owner responsible for the upcoming Access Review, set active users as site owners for all orphaned sites.
{% endhint %}

