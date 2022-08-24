---
description: This article provides a full overview of the automated Access Review process in SysKit Point from a site owner's perspective.
---

# Complete Access Review Tasks in SysKit Point


* **Watch this short video for a quick start on Access Review tasks in SysKit Point**.
<iframe title="vimeo-player" src="https://player.vimeo.com/video/731363189?h=a68fb4c8a2" width="640" height="360" frameborder="0" allowfullscreen></iframe>
<br/>
<br/>

* **Continue with the article to find detailed information** on how to complete Access Review tasks in SysKit Point.
<br/>
<br/>

## Access Review Tasks

**Access review**, in the context of the Microsoft 365 environment, is an activity where a person responsible for a Microsoft 365 workspace verifies whether permissions are given to users inside \(internal\) and outside \(external\) of the company, comply with the organizational rules and guidelines.

Some examples of such Microsoft 365 workspaces are: 
 * Communication site
 * Microsoft Team
 * Microsoft 365 Group
 * OneDrive

The **Access Review task is usually performed by a site owner** and includes:

* **Checking if all users** - internal and external - **have access to the right workspaces.**
  * Either through being given permissions directly or through group memberships.
* **Identify unwanted permissions changes** by checking the audit logs.
* **Checking if only necessary content is externally shared.**
* **Performing correcting actions** to mitigate errors discovered in previous steps.

**SysKit Point** provides the tools the site owners need to perform these tasks.

Two different roles can view The Access Review in SysKit Point:

* **Site Owner with the SysKit Point Collaborator** role assigned in SysKit Point, as described in this article
* [SysKit Point Admin user](../governance-and-automation/permissions-review/monitor-permissions-review.md)

When working with Access Review, SysKit Point Collaborators can **perform the Access Review on workspaces where they are an owner or admin**.

For a site owner or admin assigned to the SysKit Point Collaborators role, the Access Review process begins with an email.

## Access Review Email Request

When the Automated Access Review starts, site owners receive an email request to review permissions on their site\(s\). The email contains the following important data:

* **Number of sites an owner needs to review \(1\)**; grouped by site type
* **Due date of the Access Review \(2\)**
* **Review Now button \(3\)**

![Access Review request email](../.gitbook/assets/permissions-review_request.png)

The **Review Now** button opens the **Access Review Task** screen once clicked. On this screen, you can find:

* **Sites you are the owner of and need to review**; displayed in the grid.
* **Information regarding the Access Review task \(1\)** 

![Access Review Task screen](../.gitbook/assets/access-review_task.png)

From here, you can continue and review a site by clicking the **link in the Task column \(2\)**, or **selecting a row \(3\)** and clicking the **Review action \(4\)**. 

This screen can also be accessed from within SysKit Point by selecting **My Tasks**.

## My Tasks

The **My Tasks** tile is located on the Home screen, and a notification bubble displays the number of tasks that need to be reviewed. 

It is set to one because a single Access Review task was created by SysKit Point and assigned to you. The **user profile** button shows the same notification bubble. 

To view tasks assigned to you, click the **My Tasks tile** on the Home screen or the **My Tasks section** in the user profile menu.

![My Tasks tile](../.gitbook/assets/permissions-review_my-tasks-tile.png)

**My Tasks** screen displays the active Access Review task with the most important information:

* **Requested date \(1\)**
* **Due date \(2\)**
* **Completion progress \(3\)**
* **Review button \(4\)**
* **Task categories \(5\)**
* **Completed tasks categories \(6\)**

![My Tasks screen](../.gitbook/assets/access-review_my-tasks.png)

Click **Review** to continue. The **Access Review Task** screen opens - the same screen that can be accessed from email, as explained in the previous section. 

On the screen that opens, click the **link in the Task column** to continue and review a site.

The next screen is the **Access Review Wizard**, which guides you through the Access Review process.

## Access Review Wizard

The **Access Review Wizard** has three steps when reviewing OneDrive, and four steps when reviewing Microsoft 365 Groups, Microsoft Teams, or sites. 

The following steps are available:

* **Overview**
* **Members** \(for Microsoft 365 Groups and Microsoft Teams\), or **Users** \(for sites\) 
  * This step is not available for OneDrive.
* **Sharing**
* **Summary**

These steps are explained in further detail below.

### Overview Step

This step provides general information about the workspace that you are about to review. The following is displayed:

* **List of owners**, along with the **Change Owners action \(1\)**
* **General workspace information \(2\)** 
  * **Description** 
  * **Creation date and time**
  * **Privacy** 
  * **Sharing Policy** 
  * **Workspace URL** 
  * **Last Activity**
* When the workspace was **last reviewed and by whom \(3\)**
* **Who else got this task? information \(4\)** 
  * This is located in the top right corner. Hover over it to see the full list of users that received the Access Review task.
* **Close & Continue Later action \(6\)**
  * Clicking this will close the wizard. It can be accessed again through the My Tasks tile.
* **Start Review button \(7\)**
  * Clicking this continues the process to next step of the Access Review Wizard.

![Access Review wizard - Overview step](../.gitbook/assets/access-review_wizard-overview.png)

The **Close & Continue Later** option is available on all steps on the left-bottom and enables you to leave the Access Review wizard.

{% hint style="success" %}
**Hint!**  
If you choose to leave the Access Review Wizard all performed actions take effect immediately and will be visible in the Summary step at the end of the Access Review.
{% endhint %}

### Members/Users Step

The **Members step** is the second one that shows **when reviewing Microsoft 365 Groups or Microsoft Teams**. 

The following options are available:

* **Top filters \(1\)**; they are helpful when viewing a specific group of users in the workspace:
  * **Added users**
  * **Removed users**
  * **Owners**
  * **Members**
  * **Guests**
* **When a user is selected \(2\)**, several options are available:
  * **Actions \(3\)**; remove members or owners, promote members to owners, or change owners to members.
  * **User Activity report \(4\)**; see all audit logs for the selected user.
  * **Additional information \(5\)**; see user's latest activity and when it happened.
* When no users are selected, the **Add Owners/Members** action is available.
* **Click Next \(6\)** to continue to the next step of the Access Review Wizard.

![Access Review wizard - Members step](../.gitbook/assets/access-review_members.png)

The **Users step** is available **when reviewing sites**. The following options are available here:

* **Top filters \(1\)**; choose to view only a certain type of users on site:
  * **Administrators**
  * **Users with permissions on the site level** 
  * **External Users**
* **When a principal - user, SharePoint group, or a security group - is selected \(2\)**; additional options are available:
  * **Actions \(3\)**; based on the type of the selected principal, various actions are available.
    * Remove Access
    * Edit Permissions 
    * Delete SharePoint Group
    * Change Admins
  * **User Activity report \(4\)**; see all audit logs for the selected user
    * Please note that **administrators can limit the visibility** of audit reports.
  * **Additional information \(5\)**; see the user's latest activity and when it happened
* The **Grant Access** action is available when no users are selected
* **Click Next \(6\)** to continue to the next step of the Access Review Wizard

![Access Review wizard - Users step](../.gitbook/assets/permissions-review_users%20%282%29%20%282%29%20%283%29%20%284%29%20%284%29%20%284%29%20%283%29%20%282%29.png)

{% hint style="warning" %}
**Please note!**  
Members/Users step is not available when reviewing permissions for OneDrive.
{% endhint %}

### Sharing Step

The **Sharing step** provides a simple yet detailed overview of all shared content. Multiple filters and views enable you to find shared content that you want to review.

* **Top filters \(1\)** enable you to filter content by sharing type:
  * **All Shared Content**; shows content that has been shared via sharing links or through direct access. 
    * Use this when wanting to see everything that was shared.
  * **Shared Outside the Group**; selected by default.
    * Use it to find content shared with users that are not a part of the Microsoft 365 Group or Microsoft Team you are reviewing.
  * **Shared Externally**; shows content shared with specific people outside the organization.
  * **Shared With Anyone**; shows content shared with anyone via sharing links. 
    * Make sure to examine this content carefully to avoid potential security risks. 
* **Views \(2\)** enables sharing from two different perspectives; it can be grouped by:
  * **Content**
  * **Users**
* **Advanced Filters \(3\)**; by default, only the content with unique permissions is visible down to the document level. With the help of the **Advanced Filters**, you can choose to:
  * **View content without unique permissions**
  * **View content down to a specific level** 
    * For example, down to the document library or list level.
* **When a row is selected \(4\)**, available actions are displayed in the **side panel \(5\)**.
* **When no rows are selected**, the **Permissions Changes report link** is visible.
* **Click Next \(6\)** to continue to the final step of the Access Review Wizard.

![Access Review wizard - Sharing step](../.gitbook/assets/access-review_wizard-sharing.png)

**Actions displayed in the side panel depend on the type and state of the selected object (1)**.
A file with unique permissions is selected in the image below. 
The following **actions (2) are available** in that case:
* **Grant access**
* **Delete Unique Permissions**

If an **object with permission inheritance is selected**, the **Stop Inheriting Permissions action** is available in the side panel.

The following **reports (3) can be generated** regardless of the type of the selected object:
* **File and Page Activities**; please note that administrators can limit the visibility of audit reports.
* **Permissions Changes**

![Access Review wizard - Sharing step - Actions and reports](../.gitbook/assets/access-review_wizard-sharing-actions-reports.png)

By switching to the **Users view**, the **top filters** are changed accordingly and enable filtering out specific types of users. 

The descriptions for all filters can be found by **hovering your mouse over the filter tile \(1\)**.

![Access Review wizard - Sharing step - Users view](../.gitbook/assets/access-review_wizard-sharing-by-users.png)

In the example above, Microsoft Team was reviewed. 

**Filters will slightly differ when you review sites or OneDrive** since there is no Microsoft 365 Group involved whose members would have access by default. Due to that, the Users Outside the Group filter is not applicable. 

Instead, the **Access on Child Objects filter is given**, showing only users that don't have access on a site level but have access to a specific file or folder.

![Access Review wizard - Sharing step - Site](../.gitbook/assets/permissions-review_wizard-site-sharing-by-users.png)

### Summary Step

The **Summary step** gives a recap of all actions performed during the Access Review.

Here, the following is displayed:

* **Total number of performed actions grouped by action name \(1\)**.
* **Grid with all actions \(2\)**; includes information on who performed them, when, and other details.
* **Export button \(3\)**; exports the data in the grid into an XLSX file.
* **Complete Review button \(4\)** that opens the **Complete Review dialog**.

![Access Review wizard - Summary step](../.gitbook/assets/access-review_wizard-summary.png)

## Complete Access Review Task

When the review is completed and if you have detected no security risks to the site, **Complete the Access Review**. 

To complete the Access Review, take the following steps:

* **Click the Complete Review button \(1\)**; on the bottom of the Summary step, the **Complete Review dialog opens**.
* **Leave a comment**; the changes made to ensure the site is secure can be described here. 
  * The comment is visible to all site owners and SysKit Point Admins.
* **Type CONFIRM \(3\)** in the appropriate field.
* **Click the Confirm button \(4\)**.

{% hint style="warning" %}
**Please note!** The **Complete Review** action cannot be undone or edited.
{% endhint %}

![Complete Review dialog](../.gitbook/assets/access-review_complete-review.png)

After completing the Access Review for a site, the **Review Completed** dialog opens, confirming the completion. Click the **Close Review** button to leave the screen and navigate to the Access Review screen, where the sites needing review can be found.

![Review Completed dialog](../.gitbook/assets/permissions-review_review-completed.png)

When the Access Reviews for all sites you are the owner of have been finalized, the **Access Review task will be shown as completed.** 

On the **My Tasks** screen, under **Active Access Review \(1\)**, the **No Tasks \(2\)** message is displayed. 

The **completed Access Review task \(3\)** can be found in the **Completed section \(4\)**, and access task details by clicking the **See Task \(5\)** button.

![My Tasks - Active](../.gitbook/assets/access-review_no-task.png)

![My Tasks - Completed](../.gitbook/assets/access-review_task-completed.png)

This opens the Access Review screen for the completed Access Review, where these options are available:

* **Select a site \(1\)**
* **Click the Review button \(2\)** to open the **Review Summary report**

![My Tasks - Completed](../.gitbook/assets/access-review_completed-review.png)

The **Review Summary** report shows a detailed log of actions performed during the Access Review process and can be **exported to an XLSX file \(1\)**.

![Review Summary Report](../.gitbook/assets/access-review_review-summary.png)

## Expired Reviews

After ten days, the Access Review cycle ends. 

SysKit Point automatically changes the status of all uncompleted site reviews to **Expired**.

They can be found on the **Access Review** task screen.

![Access Review - Expired](../.gitbook/assets/access-review_expired-reviews.png)

After the Access Review is completed, expired tasks can no longer be finalized.

With that, **the first Access Review cycle is concluded**. 

The Access Review cycle will repeat based on the schedule defined by the SysKit Point Admin or when manually requested.

## Related Topics

For information on performing **Lifecycle Management tasks as a SysKit Point Collaborator** take a look at the following article:
  * [Perform Lifecycle Management Tasks](lifecycle-management.md)