---
description: >-
  This article provides a full overview of the automated permissions
  review process in SysKit Point from a site owner's perspective.
---

# Perform Permissions Review in SysKit Point

**Permissions review**, in the context of Office 365 environment, is an activity where a person responsible for an Office 365 resource - be it Communication site, Microsoft Team, Office 365 Group or OneDrive - checks whether permissions, given to users inside \(internal\) and outside \(external\) of company, comply with the organizational rules and guidelines. The **permissions review task is usually performed by a site owner** and includes:

* **checking if all users - internal and external - have access to right resources, be it through directly given permissions, or group memberships**
* **identify unwanted permissions changes** by checking the audit logs 
* **checking if only necessary content is externally shared**
* **performing correcting actions** to mitigate errors discovered in previous steps

**SysKit Point** provides the tools the site owners need to perform these tasks.

The permissions review in SysKit Point can be viewed from two different roles:

* ** SysKit Point Collaborator user**, as described in this article
* [SysKit Point Admin user](../common-tasks/monitor-permissions-review.md)

When working with permissions review, SysKit Point Collaborators can **perform the permissions review on resources where they are an owner or admin**.

For a site owner or admin assigned to the SysKit Point Collaborators role, the permissions review process begins with an email.

## Permissions Review Email Request

When the Automated Permissions Review starts, site owners receive an email request to review permissions on their site\(s\). The email contains the following important data:

* **number of sites an owner needs to review \(1\)**; grouped by site type
* **due date of the permissions review \(2\)**
* **Review Now button \(3\)**

![Permissions review request email](../.gitbook/assets/permissions-review_request.png)

The **Review Now** button opens the **Permissions Review Task** screen once clicked. On this screen, you can find:

* **sites they are the owner of and need to review**; displayed in the grid
* **information regarding the permissions review task \(1\)** 

![Permissions Review Task screen](../.gitbook/assets/permissions-review_task.png)

From here, you can continue and review a site by clicking the **link in the Task column \(2\)**, or **selecting a row \(3\)** and clicking the **Review action \(4\)**. You can access the same screen from within SysKit Point from the **My Tasks** screen.

## My Tasks

On the Home screen, you can notice the **My Tasks** tile and a notification bubble displaying the number of tasks you need to address. It is set to one because a single permissions review task was created by SysKit Point and assigned to you. The **persona** button shows the same notification bubble. To view your tasks, click the **My Tasks tile** on the Home screen, or the **My Tasks section** in the persona drop-down menu.

![My Tasks tile](../.gitbook/assets/permissions-review_my-tasks-tile.png)

**My Tasks** screen displays the active permissions review task with the most important information:

* **requested date**
* **due date**
* **completion progress**
* **Review** button

![My Tasks tile](../.gitbook/assets/permissions-review_my-tasks.png)

Click **Review** to continue. The **Permissions Review Task** screen opens - the same screen that you accessed from email in the previous section where we stopped. From here, you can continue and review a site by clicking the **link in the Task column**. The **Task Details** screen opens.

## Permissions Review Task Details

The Task Details screen you information, reports, and actions needed to perform a permissions review. The following is available on the screen:

* **Site owners list & Change Owners action \(1\)**
* **All Users and External Users tile \(2\)**
* **Permission Changes tile \(3\)**
* **Shared Files and Externally Shared Files tile \(4\)**
* **Permissions Matrix report link \(5\)**
* **Complete Review button \(6\)**

![Permissions Review Task Details](../.gitbook/assets/permissions-review_task-details.png)

Use the **Change Owners** action to remove existing owners by clicking the x sign next to the user, or add new owners by typing their name. Click **Change** to confirm.

![Change Owners action](../.gitbook/assets/permissions-review_change-owners.png)

Click the **All Users** tile to access the **Users report**. Here, you can:

* **see all users** that have access to your site and **granted permissions**
* **grant access \(1\)** to additional users
* **add owners and members \(2\)** 
* **select users \(3\)** and **remove their access \(4\)** on the site.

![Users report](../.gitbook/assets/permissions-review_users-report-actions.png)

Click the **External Users** tile to access the **External Users report**. Here, you can:

* **view all external users**
* **select users \(1\)** and **remove their access \(2\)** 
* **find additional information**, such as when and by whom the external user was added

![External Users report](../.gitbook/assets/permissions-review_external-users-report-actions.png)

Click the **Permissions Changes** tile if you want to see audit logs for events that occurred since the last permissions review. **Site Permissions Changes** report opens, with custom date filter values preselected \(1\). You can click the date filter \(2\) and change the dates if needed. The report gives you the following information:

* **Activity date**
* **Activity**
* **User who performed the permission change**
* **object where the change was done**
* **target user of the permissions change**

![Site Permissions Changes report](../.gitbook/assets/permissions-review_site-permissions-changes-report.png)

Click the **Shared Files** tile to open the **Sharing Links** report, where you can:

* **see information about all sharing links on your site**
* **select \(1\)** and **remove sharing links \(2\)**
* **find out who created the sharing link \(3\)**

![Site Permissions Changes report](../.gitbook/assets/permissions-review_sharing-links-report.png)

Click the Externally Shared Files to open the **Externally Shared Content** report. Here, you can:

* **see sharing links** that give access to external users, for example, **anonymous links \(1\)**
* **remove sharing links** by **selecting a link \(2\)** and clicking the **Remove Sharing Link \(3\)** action 
* **view external users and their permissions \(4\)**; permissions given directly to external users are also visible here
* **Remove external users' access** by **selecting a user \(5\)** and clicking the **Remove from Group \(6\)** action

![Externally Shared Content report](../.gitbook/assets/permissions-review_externally-shared-content-report-actions.png)

For more details, click the **Permissions Matrix link**, which gives you a complete overview of permissions on your site.

## Complete Permissions Review Task

When you are done with the review, and have made sure that your site is secure, **Complete the permissions review**. To do so:

* **click the Complete Review button \(1\)** on the bottom of the Task Details screen; the **Complete Review dialog opens**
* **leave a comment**; here, you can describe what kind of changes were made to ensure that the site is secured; the comment is visible to all site owners
* **type CONFIRM \(3\)** in the appropriate field
* **click the Confirm button \(4\)**

{% hint style="warning" %}
**Please note!** You cannot undo or edit the **Complete Review** action.
{% endhint %}

![Complete Review dialog](../.gitbook/assets/permissions-review_complete-review.png)

After you complete the permissions review for a site, the **Review Completed** dialog opens confirming the completion. Click the **Close Review** button to leave the screen and navigate to the Permissions Review screen, where you can find sites that you need to review.

![Review Completed dialog](../.gitbook/assets/permissions-review_review-completed.png)

When you complete permissions reviews for all sites you are the owner of, your **Permissions Review task is completed.** On **My Tasks** screen, under **Active Permissions Review \(1\)**, the **No Tasks \(2\)** message is displayed. You can find your **completed permissions review task \(3\)** in the **Completed section \(4\)**, and access task details by clicking the **See Task \(5\)** button.

![My Tasks - Active and completed](../.gitbook/assets/permissions-review_task-active-completed.png)

## Overdue Reviews

After ten days, the permissions review cycle ends. SysKit Point automatically changes the status of all uncompleted site reviews to **Overdue**. You can find them on the **Permissions Review** task screen.

![Permissions Review - Overdue](../.gitbook/assets/permissions-review_overdue-reviews.png)

After the permissions review completion, you can still access the **Task Details screen**, however, you cannot complete the permissions review. An **appropriate message is displayed** instead of the Complete Review button.

![Task details message](../.gitbook/assets/permissions-review_overdue-details.png)

**With that, the first permissions review cycle is completed**. The cycle will repeat per schedule, as defined by SysKit Point Admin, giving you the same reports and actions to make this process as easy as possible.

