---
description: This article explains how to create Access Review policies and apply them to your Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive in SysKit Point.
---


# Create and Apply Access Review Policies

Access Review in SysKit Point is enabled through Access Review policies applied to Microsoft Teams, Microsoft 365 Groups, sites, and OneDrive in SysKit Point.

Access Review policies in SysKit Point enable you to define the following settings of an Access Review:
* **the scope of the Access Review** - you can choose to review content or membership, or both, decide if you're only interested in shared content and guest users, or maybe want only to see the content down to the folder level
* **who should perform the review** - depending on the workspace type, you can select between various groups of users with privileged access, such as team owners, site admins, primary administrators, etc.
* **the Access Review recurrence frequency** - not all workspaces in a Microsoft 365 environment are equally important; therefore, you can choose to repeat the Access Review process once for the most important workspaces or up to once a year for the workspaces that are not frequently changed or used or don't contain sensitive data

Once created, **policies need to be applied to Microsoft Teams**, **Microsoft 365 Groups**, **sites**, and **OneDrive** in order **to start the automated Access Review process in SysKit Point**.

In the sections below, you can find detailed instructions on creating and applying the Access Review policies in SysKit Point.

## Create Access Review Policy

**To start creating Access Review policies**, navigate to **Settings** > **Governance** > **Automated Workflows**.

By default, SysKit Point offers a predefined Access Review policy - **All users and shared files (1)**. 

Here you can choose to:
* **Edit an existing policy (2)** or
* **Delete an existing policy (3)** 
* **Create a new policy (4)**
* **Manage existing policies (5)**

{% hint style="warning" %}
**Please note!** The predefined Access Review policy is not applied to any resources and will not trigger an automated Access Review.
{% endhint %}

![Automated Workflows Screen](../../.gitbook/assets/create-access-review-policies_default-policy.png)

Create a new Access Review policy by clicking the **Create New Policy button (4)**. 

The following dialog opens, providing the ability to **choose the policy type**. 

![Policy Type Selection](../../.gitbook/assets/create-access-review-policies_policy-type.png)
**Click Access Review \(1\)** to continue. 

The **Create New Policy** dialog opens where the following Access Review options can be defined: 
* **Policy Name (1)**
* **Access Review Recurrence Frequency (2)** - increments of 1 month are available, up to 12 months
* **Memberships (3)** - when enabled, you can choose to review:
  * **All Memberships** - Access Review shows all users from your organization as well as guest users
  * **Guest User Membership** - Access Review shows Guest users only
* **Content (4)** - when enabled, you can choose to review:
  * **All Content** - Access Review shows all content shared with internal and external users
  * **Externally Shared Content** - Access Review shows only the content shared with external users
  * **Content Level (5)** - choose content level to review:
    * **subsites**
    * **document libraries**
    * **folders**
    * **files & folders**
* **Description (6)** - shows summary info depending on selected options regarding memberships (3) and content (4)
* **Advanced Settings (7)** - define who will perform the access review 
* **Save (8)** - click to Save the Access Review Policy when done with the configuration

![Create New Policy Dialog](../../.gitbook/assets/create-access-review-policies_create-policy-dialog.png)

**Advanced Settings option (7)** enables you to define which groups of users are responsible for the Access Review. 

Here, the following groups can be defined and set up based on the workspace type:
* **SharePoint Site (1)**
  * **Primary Admin/Owner**
  * **Site Admins Group**
  * **Site Owners** SharePoint Group
* **Microsoft 365 Groups/Microsoft Teams (2)**
  * **Team/Group Owners**
  * **Site Admins Group**
* **OneDrive (3)**
  * **Primary Admin/Owner**
  * **Site Admins Group**
  
Select the checkbox to **Include private Microsoft Teams channels(4)**; the following can then be defined:
* **Microsoft Teams Private Channels (5)** 
  * **Team/Group Owners**
  * **Channel Owners**

Clicking the groups of users for each workspace shows **a checkbox next to each group**. 
  * The groups of users can be **selected or deselected** depending on what the Access Report policy being set up should include.

When finished, **click Confirm (6)** to store the preferences. 

![Advanced Settings](../../.gitbook/assets/create-access-review-policies_advanced-settings.png)

## Apply Policies

To apply created Access Review Policies, navigate to **Settings** > **Governance** > **Automated Workflows** and click the **Manage Policies button (1)**.

![Apply Policy Button](../../.gitbook/assets/create-access-review-policies_apply-policy-button.png)

The **Manage Policies report opens**, enabling you to apply created policies to your **Microsoft Teams**, **Microsoft 365 Groups**, **OneDrive**, and **sites**. To do so:

* **Select (1)** one or multiple resources; they can easily be filtered by applied policies with the help of the **top tiles (2)**
* Click on the arrow next to **Manage Policies (3)** to show the policy options available
  * **Select the Apply Policy action (3)**

![Apply Policy](../../.gitbook/assets/create-access-review-policies_apply-policy.png)

The **Apply Access Review Policy** dialog opens where you can:

* **Select the type of policy (1)**; the options available are:
  * Access Review
  * Minimum Number of Owners
  * Maximum Number of Owners
  * Orphaned Resources

![Apply Policy Dialog - Policy Type](../../.gitbook/assets/create-access-review-policies_apply-policy-dialog.png)

* After that, **select the policy (1)** that should be applied 
* **Confirm the selection by clicking the Save button (2)**

![Apply Policy Dialog - Policy](../../.gitbook/assets/create-access-review-policies_apply-policy-dialog-part-2.png)

## Next Steps

Once you're done assigning policies to **Microsoft Teams**, **Microsoft 365 Groups**, **OneDrive**, and **sites,** you can:
* [define who will perform the Access Review in greater detail](access-review-options.md#manage-reviewers) by removing specific users from reviewers
* [configure general Access Review options](access-review-options.md#review-options) applied to all Access Review Policies
* [customize Access Review e-mail](../../configuration/customize-emails.md#access-review-settings)