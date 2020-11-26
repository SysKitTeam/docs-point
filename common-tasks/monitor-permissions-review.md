---
description: >-
  This article provides a full overview of the automated permissions review
  process for SysKit Point Admins.
---

# Monitor Permissions Review in SysKit Point

{% hint style="warning" %}
**Please note!**  
First, make sure to check how to [enable and configure the Automated Permissions Review in SysKit Point](../installation-and-configuration/enable-permissions-review.md).
{% endhint %}

**Permissions review**, in the context of the Office 365 environment, is an activity where a person responsible for an Office 365 resource - be it Communication site, Microsoft Team, Office 365 Group, or OneDrive - checks whether permissions, given to users inside \(internal\) and outside \(external\) of company, comply with the organizational rules and guidelines. The **permissions review task is usually performed by a site owner** and includes:

* **checking if all users - internal and external - have access to the right resources, be it through directly given permissions, or group memberships**
* **identify unwanted permissions changes** by checking the audit logs 
* **checking if only necessary content is externally shared**
* **performing correcting actions** to mitigate errors discovered in previous steps

**SysKit Point** provides the tools the site owners need to perform these tasks.

The permissions review in SysKit Point can be viewed from two different roles:

* **SysKit Point Admin user**, as described in this article
* [SysKit Point Collaborator user](permissions-review.md)

When working with permissions review, SysKit Point Admin users can:

* **define permissions review settings**
* **decide what resources are reviewed**
* **monitor permissions review progress**

On the other hand, SysKit Point Collaborators can **perform the permissions review on resources where they are an owner or admin**.

These two roles will have a **different set of reports and actions available** before and during the permissions review and will receive a different kind of emails.

Here, we will describe how **SysKit Point Admin** can monitor the progress of an active permissions review.

## Admin Reminder for the Upcoming Permissions Review

Three workdays before the start of automated permissions review, SysKit Point Admin users will receive a reminder email with the most important information about the upcoming permissions review:

* **start date** of permissions review
* **number of site owners** that will be asked to perform a permissions review
* **the number of resources** - Microsoft Teams, Office 365 Groups, sites, and OneDrive - included in the upcoming permissions review
* **modify \(1\)** link
* **Resolve Now \(2\)** button

![Permissions review reminder email](../.gitbook/assets/permissions-review_reminder-before.png)

Click the **Modify** link if you need to change the settings for the permissions review. When logged in to SysKit Point, this link opens the Permissions Review Settings screen.

If you are already signed in to SysKit Point, clicking the **Resolve Now** button opens the **Permissions Review – Preview** report with the preselected **Orphaned Sites view \(2\)**. Here, you can **select a site \(3\)** and add active users as site owners with the help of the **Change Owners action \(4\)**.

![Permissions Review &#x2014; Preview - Orphaned Sites](../.gitbook/assets/monitor-permissions-review_preview-orphaned.png)

{% hint style="warning" %}
**Please note!**  
To ensure that all sites have an owner responsible for the upcoming permissions review, set active users as site owners for all orphaned sites.
{% endhint %}

## Governance - Permissions Review

On the start date of the automated permissions review, **permissions review tasks are created in SysKit Point**, and **email requests sent to site owners**. **Each site owner gets one permissions review task** and **that task includes all sites where the said user is the site owner**.

To **track the progress** of the currently active permissions review, SysKit Point Admins can **use the Governance screen**. To access it, **click the Governance tile** on the Home screen.

![Home screen - Governance tile](../.gitbook/assets/monitor-permissions-review_home-screen.png)

When clicked, the Governance screen opens, giving a summary for the active automated Permissions Review. Here, the following is displayed:

* **Review categories (1)**
  * **Scheduled (automated) permissions review** - selected by default
  * **Manually Requested Reviews**
  * **History** - overview of all completed reviews (- )automated and manually requested)
* **visual representation and the percentage of permissions review tasks completed \(2\)**
* **start and end date of the permissions review \(3\)**
* **number of completed review tasks \(4\)**
* **number of completed reviews by site type \(5\)**
* **See Review Details** button \(6\) which opens the **Permissions Review** report

![Governance - Permissions Review](../.gitbook/assets/monitor-permissions-review_governance.png)

The Permissions Review report gives SysKit Point Admins the following information:

* **request date**, **due date**, **progress**, and **date when the automatic reminder will be sent to site owners \(1\)**
* **review status \(2\)** for each site included in the permissions review; can be **Pending** or **Completed**
* **comments \(3\)** provided by site owners when completing the review
* **all site owners**; blocked or deleted owners are displayed in **gray color \(4\)**
* **Remind Owners action \(5\)** to manually send the reminder email to site owners
* **when a resource is selected (6)**, two actions are available in the side panel:
  * **Review (7)** - only available if SysKit Point Admin is also the owner of the selected resource
  * **View Details (8)** - available when one or multiple resources are selected; opens the **Permissions Review - Summary** report

![Governance - Permissions Review](../.gitbook/assets/monitor-permissions-review_permissions-review.png)

Use the **Remind Owners action** to send a reminder email to site owners regarding the ongoing permissions review. You can use this action **once a day**, whenever you think appropriate, **as long as the permissions review is active**. **Only site owners with pending tasks will receive an email**.

{% hint style="warning" %}
**Please note!** Permissions review has, by default, duration of **ten days**. In this time frame, site owners should be able to complete the permissions review on their sites. By default, **three days before the permissions review end date**, SysKit Point sends an automatic **email reminder to all site owners with pending tasks**.
{% endhint %}

## Permissions Review Completion

Ten days after the start, the permissions review is automatically marked as completed. SysKit Point also sends summary emails regarding the completed review to all SysKit Point Admin users. The email contains the following information:

* **number of sites where the permissions review was completed \(1\)**; grouped by site type
* **total number of sites where the permissions review was not completed \(2\)**
* **View Uncompleted Tasks \(3\)** button

![Email - Permissions Review completed](../.gitbook/assets/monitor-permissions-review_email-after.png)

To view sites where the permissions review was not completed, click the **View Uncompleted Tasks** button. If already signed in to SysKit Point, you will be redirected to the **Permissions Review** report. Here, you can:
* **see that all tasks where the permissions review was not completed have the status set to Overdue (1)** 
* **select one or multiple resources (2)**
* **generate the Permissions Review - Summary report (3)**

SysKit Point changes the status automatically when the permissions review ends.

![Permissions Review - Overdue tasks](../.gitbook/assets/monitor-permissions-review_overdue.png)

If you take a step back and look at the Governance screen, you can see the following:

* **Scheduled Review \(1\)** category is displaying the **No active Permissions Review \(2\)** message
* **History \(3\)** category has a new entry - **the completed permissions review \(4\)**
* **See Details \(5\)** button is visible on the completed permissions review tile

The **See Details** button opens the **Permissions Review** report, already described in this section.

![Governance - Scheduled Review category](../.gitbook/assets/monitor-permissions-review_no-active.png)

![Governance - History category](../.gitbook/assets/monitor-permissions-review_history.png)

For more information on the **Manually Requested Reviews category**, [read the following article](manually-request-permissions-review.md).

## Permissions Review - Summary

The Permissions Review - Summary report offers a complete overview of actions that were performed during a Permissions Review.
To generate the report:
* **open the Permissions Review screen**; you can open this screen for an active permissions review, or a completed one
* **select one or more resources (1)** for which you want to see what was done during the Permissions Review
* **click the View Details link (2)** 

![Permissions Review - View Details](../.gitbook/assets/monitor-permissions-review_view-details.png)

The generated Permissions Revie - Summary report shows the following information:
* **Resource Name (1)**
* **Action (2)**
* **URL - external link to the said resource (3)**
* **who performed the action (4)** 
* **when the action was performed (5)**
* **action details (6)** that provides all information about performed actions 
* **Export button** that generates an XLSX file with all data visible in the SysKit Point interface

With that, we finish the permissions review overview for SysKit Point Admin users.