---
description: This article explains how to enable and configure the Automated Access Review in Syskit Point.
---

# Workspace Review

The Workspace Review policy helps you maintain control over your Microsoft 365 workspaces by regularly asking workspace owners to confirm the importance, access, activity, and security of their workspaces. This policy includes a privacy and sensitivity review, broader governance policies, and introduces smarter, recommendation-driven tasks. 

Admins can define custom policies that trigger review cycles at regular intervals, ensuring each workspace is evaluated based on criteria like inactivity, sensitivity labels, ownership, or missing classification data.

Here's a quick overview of what you can expect from the Workspace Review policy: 

* **Admins configure Workspace Review policies**
  * Set the schedule, define the review scope, and select which workspaces should be included based on filters like inactivity or sensitivity labels
* **Workspace owners complete reviews**
  * When a review is due, owners receive a task in Syskit Point along with an email notification. Tasks include workspace details and suggested actions (for example, archive, change owner, update label) to simplify your decision-making
* **Admins monitor the review progress**
  * From the Workspace Review dashboard, admins can track which workspaces have been reviewed, see completed actions, and gain insights into the effectiveness of each review cycle 

## Configure Workspace Review Policies

With Workspace Review, you can ask site owners to perform regular Workspace Reviews on their workspaces as well as have more than one Workspace Review active with different Settings. 

To set up your Workspace Review, navigate to **Settings > Policies**. 

* **Click the Create New Policy button**
* **Select Workspace Review** from the list of available policies
* **Choose between using a template or building your own** Workspace Review from scratch:
  * **Memberships** - a tmplate to review only workspace members and owners
  * **External Sharing** - a template to review external users, guests, and shared content only
  * **Full Review** - a template to review all users and sharing type during one review 
  * **Start From Scratch** - configure a custom review policy to fit your team's needs. 

While **the steps for the policy setup are the same** for all of the above options, when one of the **template options** are selected and depending on the template, **certain steps are automatically enabled**. These steps can always be turned off while editing the policy.

### Policy Steps

As an example, for this article we will select the Membership template for the Workspace Review policy. 

Selecting the Memberships template gives you the following options:
* **Define the policy name (1)**
* **Choose what to review**:
  * Internal and External Access - reviewers will be asked to check both internal and external access
  * External Access Only - reviewers will be asked to check external access
* **Select the Review start date and time**
  * The first Workspace Review with these settings will start at the date and time you select here
* **Choose the Recurrance pattern** 
  * Select how often this review should repeat
* **Select the number of work days** reviewers have to complete the task 
  * **Click the checkmark** if you want to:
     * Send a reminder 3 work days before the due date
     * Receive completion e-mails - selecting this sends an e-mail every time a reviewer finishes the workspace review
* **Choose what you want the reviewers to check** regarding the workspace's activity status, privacy settings and sensitivity review
  * **Inactive Workspace** - reviewers will be able to archive or delete workspace. Archiving or deleting the workspace will complete the workspace review
  * **Privacy Settings** - reviewers will be able to change the privacy settings of the workspace
  * **Sensitivity label** - reviewers will be able to change the sensitivity label of the workspace
* For this template, the **Membership toggle is automatically switche on**, however, clicking the toggle turn this step off
  * Here, you **choose what you want the reviewers to check** regarding users who will have access to the workspace as members
    * The **All Members checkbox is automatically selected** as it is a default part of the Membership step and will always be visible in any review where Membership is enabled
    * In this step you can also **add recommendations that help ensure compliance** with the Minimum Number or Owners and Maximum Number of Owners policies assigned to the workspace
       * Not Enough Owners - reviewers will see prompt if their workspace has too few owners
       * Too Many Owners - reviewers will see prompt if their workspace has too many owners
* Next, **you can turn on Shadow Users by clicking the toggle next to it** if you want reviewers to check on **users that have access to workspace content but are not official members**
  * If you click the toggle and turn the option on, you can find the **Review All Shadow Users** checkbox - with this, reviewers can review all shadow users and remove those who no lonher need access
    * The checkbox will be automatically selected as it is a default part of the step
* **Turn on Sharing by clicking the toggle next to it** if you want reviewers to choose what you would like reviewers to check regarding **content that has been shared from the workspace**
  * If you click the toggle and turn the option on, the following options are available:
    * **Shared with Anyone** - clicking the checkbox lets reviewers view usage and remove links shared with anyone
    * **Shared with People in Your Organization** - clicking the checkbox lets reviewers view usage and remove links shared with people in your organization
    * **Define Unused Links** - this section lets you **define the number of days** a link must remain unused (meaning no activity has occurred on it) for it to be classified as an unused link
* Finally, **define the reviewers** by deciding who will be performing workspace reviews on each workspace where this policy is applied: 
  * For SharePoint Sites
    * Primary Admin/Owner
    * Site Admins Group
    * Site Owners
  * For Microsoft 365 Groups and Microsoft Teams
    * Team Ownetrs
    * Site Admins Groups
  * For OneDrive
    * Primary Admin/Owner
    * Site Admins Group
  * For Private Channels
    * Team Owners
    * Channel Owners
    
* Click **Finish** once you are done with the policy configuration 


![Orphaned Workspaces - Edit Policy](../../.gitbook/assets/set-up-automated-workflows-orphaned-edit.png)



{% hint style="info" %}

**Please note:** [Minimum Number of Owners policy](../../point-collaborators/resolve-governance-tasks/minimum-number-of-owners.md) 

{% endhint %}


## Next Steps

Once you are finished with the e-mail and Collaborators role configuration, continue to the [Create and Apply Access Review Policies](create-apply-access-review-policies.md) article.

For information on Syskit Point Collaborators completing Access Review tasks, take a look at the [Perform Access Review Tasks article](../../point-collaborators/resolve-governance-tasks/access-review.md).
