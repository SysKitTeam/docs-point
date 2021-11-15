
---
description: This article explains how to create Access Review policies and apply them to your Microsoft Teams, Microsoft 365 Groups, sites and OneDrive in SysKit Point.
---


# Create and Apply Access Review Policies**

Access Review in SysKit Point is enabled through Access Review policies applied to Microsoft Teams, Microsoft 365 Groups, sites and OneDrive in SysKit Point.

Access Review policies in SysKit Point enable you to define the following settings of an Access Review:
* **the scope of the Access Review** - you can choose to review content or membership, or both, decide if you're only interested in shared content and guest users, or maybe want to only see the content down to the folder level
* **who should perform the review** - depending on the workspace type, you can select between various groups of users that have privileged access; for example, team owners, site admins, primary administrator, etc.
* **the Access Review recurrence frequency** - not all workspaces in an Microsoft 365 environment are equally important, therefore you can choose to repeat the Access Review process once for the most important workspaces, or up to once in a year for the workspaces that are not frequently changed or used, or simply don't contain sensitive data

Once created, **policies need to be applied to Microsoft Teams**, **Microsoft 365 Groups**, **sites** and **OneDrive**, in order **to start the automated Access Review proces in SysKit Point**.

In the sections bellow, you can find detailed instructions on how to create and apply the Access Review policies in SysKit Point.

## Create Access Review Policy

**To start creating Access Review policies**, navigate to **Settings** > **Governance** > **Automated Workflows**.

By default, SysKit Point offers a predefined Access Review policy - **All users and shared files \(1\)**. 
This policy is not applied to any resources and will not trigger an automated Access Review.
Here you can choose to:
* **edit the policy \(2\)** or
* **delete the Policy \(3\)** 

![Automated Workflows - Default Access Review Policy](../../.gitbook/assets/create-access-review-policies_default-policy.png)

#TODO: CONTINUE HERE

Let's edit the existing predefined policy. After clicking the **Edit Policy link \(2\)**, the **Editing Policy** dialog opens. The following review policy settings can be defined here:

* **Policy Name \(1\)**
* **Memberships to review \(2\)** - you can choose between two options:
  * **All**
  * **Guests Only**
* **Content to review \(3\)** - you can choose between two options:
  * **All** 
  * **External Only**
* **Recurrence \(4\)** - set how often the review should be performed
* **Content level to be reviewed \(5\)** - you can choose between the following options:
  * **subsites**
  * **document libraries & lists**
  * **folders**
  * **files & folders**

![Automated Access Review Setup - Editing Policy](../../.gitbook/assets/enable-permissions-review_editing-policy.png)

Depending on your selection of what should be reviewed, the **descriptions \(6\)** on the right side of the dialog will change. Click **Save \(7\)** when you are done editing the policy.

You can also **create a new review policy by clicking the Create Policy action \(1\)** in the right-side panel. The **New Access Review Policy dialog \(2\)** opens, giving you the possibility to define review policy options as described when editing.

![Automated Access Review Setup - New Policy](../../.gitbook/assets/enable-permissions-review_new-policy.png)

To continue to the next step, click the **Next** button.

### **Apply Policies**

On the **Apply Policies step**, you can apply created policies to your **Microsoft Teams**, **Microsoft 365 Groups**, **OneDrive**, and **sites**. To do so:

* **select \(1\)** one or multiple resources; you can easily filter them by applied policies with the help of **top tiles \(2\)**
* **click the Apply Policy action \(3\)**

![Automated Access Review Setup - Apply Policy](../../.gitbook/assets/enable-permissions-review_apply-policies.png)

The **Apply Access Review Policy** dialog opens where you can:

* **choose one of your review policies \(3\)**
* **confirm your selection by clicking the Save button \(4\)**

![Automated Access Review Setup - Apply Policy](../../.gitbook/assets/enable-permissions-review_apply-policy-dialog.png)

Once you're done assigning policies to **Microsoft Teams**, **Microsoft 365 Groups**, **OneDrive**, and **sites,** click the **Next** button to continue to the next step.

### **Manage Reviewers**

The **Manage Reviewers step** enables you to define users responsible for the Access Review of a **Microsoft Team**, **Microsoft 365 Group**, **OneDrive**, or a **site**. Here, you can:

* **Select one or multiple users \(1\)**
* **Remove one or multiple users from reviewers \(2\)**
* **Manage Admins or Owners \(3\)**
* **Filter out resources without reviewers \(4\)** or otherwise filter the grid with the help of top tiles
* **Switch the view \(5\)** - choose between two options:
  * **Show by Content** - root node is a resource with all reviewers shown as child nodes
  * **Show by Users** - root node is a user, with all resources where he is a reviewer shown as child nodes
* **Find the number of active reviewers \(6\)** on all **Microsoft Teams**, **Microsoft 365 Groups**, **OneDrive**, and **sites**
* **View users removed from reviewers \(7\)** - you can recognize them by the **Not Reviewing** status

![Automated Access Review Setup - Manage Reviewers](../../.gitbook/assets/enable-permissions-review_manage-reviewers.png)

Click **Next \(8\)** to navigate to the next step.

### **Review Options**

{% hint style="warning" %}
**Please note!** Review options will apply to all resources included in the Automated Access Review, regardless of the applied policy.
{% endhint %}

Here you can:

* **Set a default policy that SysKit Point will apply \(1\)** when a new **Microsoft Team**, **Microsoft 365 Group**, **OneDrive**, or a **site** is created
* **Define the starting date for Automated Access Review \(2\)**
* **Set the number of workdays \(3\)** a reviewer has to complete the Access Review task
* **Enable or disable \(4\)** sending of e-mail reminders to reviewers three workdays before the Access Review task's due date

![Automated Access Review Setup - Review Options](../../.gitbook/assets/enable-permissions-review_review-options.png)

Click the **Next** button to navigate to the **Summary step**.

### **Summary**

The last step gives you an overview of:

* **applied policies \(1\)**
* **selected resources \(2\)**
* **selected reviewers \(3\)**
* **defined review options \(4\)**

![Automated Access Review Setup - Summary](../../.gitbook/assets/enable-permissions-review_summary.png)

Click the **Finish button \(5\)** to close the Access Review Setup wizard.

{% hint style="success" %}
Once you complete the Access Review Wizard, you can **access all of the above-mentioned reports and Access Review options from the Access Review Settings screen** and customize them further to fit your specific needs.
{% endhint %}

Now that everything is defined, the Access Review will start automatically. To learn all about the Automated Access Review in SysKit Point, visit the [following article](permissions-review.md).

