---
description: >-
  Syskit Point templates help you define which types of workspaces your
  end-users can request and create. Each template contains properties and rules
  that guide the creation process and ensure all works
---

# Templates

To start with the configuration, open the **Settings > Governance > Provisioning (1)** screen.

**Your Templates** list shows you which workspace templates will be available and visible for your end-users to request in the Syskit Point teams app.

By default, Syskit Point provides **three templates (2)**.

1. **Manage a project**
2. **Department team**
3. **Public team**

Available actions for these templates are listed under the **Manage (3)** column and allow you to:

* **Edit (4)**
  * Use it to review and modify how the default template is configured - Syskit Point allows you to change any setting available to fit your needs.
* **Delete (5)**
  * If you do not wish to use these default templates or make them available for your end-users, make sure to delete them from this list.

You can create custom templates by clicking the **New Template (6)** button.

![Templates default screen](../../.gitbook/assets/templates\_default-screen.png)

## Create a New Provisioning Template

To create your custom template, click the **New Template** button.

First, choose the type of workspace you want to create the template for.

Templates can be created for the following workspaces:

* **Microsoft Teams**
* **SharePoint Site**
* **Yammer Community**
* **Microsoft 365 Group**

{% hint style="warning" %}
**Please note!**  
When creating a provisioning template in Syskit Point, if you want to use existing Microsoft Teams templates or site templates, set your browser language to English (USA). That way, the correct format of calls directed from Syskit Point to Microsoft endpoints is ensured, which uses Locale set to "en-US" (LocaleID equals 1033).
{% endhint %}

### Microsoft Teams Template

When creating a template for Microsoft Teams, you will need to define the following:

* **Name (1)** – a name you provide here will be used as a template name that is visible to your users
* **Description (2)** – describe in short when to use this template; end-users will see it when requesting a new workspace using a list of templates
* **Microsoft template ID (3)** – this property is used to predefine apps, channels, and tabs that should be created for new workspaces that use this Syskit Point template.
  * If you leave this property empty, default apps or channels will not be created; it will be a blank MS team.
  *   Syskit Point integrates with team templates you have created in the **Microsoft 365 Teams admin center**. When you enter a team template ID, Syskit Point will create apps, tabs, and channels you defined there.

      To review currently available templates in your M365 tenant and use them in Syskit Point:

      1. Navigate to the Microsoft Teams [admin center](https://admin.teams.microsoft.com/)
      2. Under the tab Teams, select **Team templates**
      3. Click the name of the template to review apps and channels they include
      4. Copy the Template ID and paste into the Syskit wizard

      To create a brand-new Teams template in the admin center, follow the [Microsoft guide](https://docs.microsoft.com/en-us/microsoftteams/create-a-team-template).
* **Privacy (4)** – set if workspaces created using this template will be public or private. You can leave this decision to your end-users as well.

![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-1.png)

* **Owners (5)** – allows multiple options:
  * Predefine owners that are always added to this type of workspace
  * Allow end-users to specify additional ones in addition to predefined users
  * Leave this option altogether to the end-user who is requesting a new workspace
*   **Members (6)** – allows multiple options:

    * Predefine members that are always added to this type of workspace
    * Allow end-users to specify additional ones in addition to predefined users
    * Leave this option completely to the end-user who is requesting a new workspace

    ![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-2.png)
*   **Sharing Settings (7)** - choose from available options:

    * Anyone
    * New and existing guests
    * Existing guests only
    * Only people in your organization

    Please note that available options depend on defined tenant-level external sharing policies. For example, if sharing files and folders using links that don't require sign-in is not allowed, the Anyone option will not be enabled.
* **Sharing Permission (8)** - helps control the way things in the site can be shared. Choose between:
  * Site owners and members can share files, folders, and the site. People with edit permission can share files and folders.
  * Site owners and members, and people with edit permission can share files and folders, but only owners can share the site.
  * Only site owners can share files, folders, and the site.

![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-3.png)

* **Allow Access Requests (9)** - decides who receives access requests for all workspaces created from the template. The options are:
  * Owners
  * Specific user(s)
    * If Specific user(s) is selected, the name of at least one specific user needs to be entered in the provided space.
* **Sensitivity Label (10)** - choose from available sensitivity labels available in your tenant to define which are applied on all workspaces created from the template.
  * To use sensitivity labels in Syskit Point, make sure to set up your environment as described in the [following article](enable-sensitivity-labels.md).
* **Terms & Conditions (11)** - define the terms & conditions text displayed to end-users when they request a new workspace.
* **Custom Metadata (12)** - custom metadata provides expanded information collected and included in reports. Set up which fields users will need to input or select for the custom metadata when using the template.
  * If no custom metadata was created, it can be set up directly in the form by selecting **Create New Custom Field**.
  * For more information on managing and creating custom metadata, take a look at [this article](../manage-custom-metadata.md).

![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-4.png)

* **Naming Rule (13)** – predefine suffix or prefix that will be added to a name of a workspace created using this template.
  * For example, setting the prefix to **Marketing** results that each workspace created from this template will be named in a form **Marketing – (Request Name)**
*   **Approval process (14)** – define who is responsible for approving the requests using this template.

    All requests using this template will need to be approved by specified people before the workspace is created.

    By default, you will see four types of approvals available:

    * Manager approval – manager of the end-users requesting new workspace needs to approve this request
    * Admin approval – Syskit Point admins need to approve this request
    * Manager and admin approval – requires approval from both manager of the requester and Syskit Point admins
    * Automatically Approve – templates using this option don’t require approval. The workspace will be created immediately when the end-user sends a request.

    Additionally, you can enable comments for requesters when they request a new workspace in this section.

    Read more about Approval processes and how to create custom ones in this [article](approval-processes.md).
*   **Governance policies (15)** – predefine a set of rules to be applied to the workspace automatically upon creation. Currently available policies are:

    * Access reviews
    * Maximum number of owners
    * Minimum number of owners
    * Orphaned Resources

    Read more about setting up these governance policies and customizing them to your needs [here](../automated-workflows/set-up-automated-workflows.md).
* **Outlook & Email Settings (16)** – define if the newly created workspace will:
  * Be **hidden** from your organization's global address list
  * Send a **welcome e-mail**
  * If a **service account is added to the template**, two additional options are available:
    * Allow external senders to e-mail this group
    * Send copies of group conversations and events to group members

![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-5.png)

* **Template availability (17)** – defines the group of users that are able to select the template when submitting requests for new workspaces.
  * Everyone - the template is available to all users in your organization
  * Specific - the template is available to users that meet specified conditions
    * If selected, the condition type needs to be selected from the dropdown menu.
* When everything has been finalized click **Create Template (18)**.

![Template for Microsoft Teams](../../.gitbook/assets/templates\_teams-template-6.png)

Once you complete this process, your new template will appear in the **Templates** list and will become visible for end-users in **Syskit Point Teams app** when requesting a new workspace.

### SharePoint Site Template

When creating a SharePoint Site template, there are a couple of differences compared to Microsoft Teams template.

* **Site Template** - you can choose the site template for the SharePoint Site workspace created from this template
* **Primary Site Collection Admin** – allows multiple options:
  * Predefine the primary site collection admin
  * Allow end-users to specify the primary site collection admin
* **Additional Site Collection Admins** – allows multiple options:
  * Predefine site collection admins that are always added to this type of workspace
  * Allow end-users to specify additional ones in addition to predefined admins
  * Leave this option altogether to the end-user who is requesting a new workspace
* **Site Members** – allows multiple options:
  * Predefine site members that are always added to this type of workspace
  * Allow end-users to specify additional members in addition to predefined members
  * Leave this option altogether to the end-user who is requesting a new workspace

### Yammer Community Template

When creating a Yammer Community template, there are a couple of differences compared to Microsoft Teams template.

* **Community Admins** – allows multiple options:
  * Predefine community admins that are always added to this type of workspace
  * Allow end-users to specify additional ones in addition to predefined community admins
  * Leave this option altogether to the end-user who is requesting a new workspace
* **Community Members**
  * Predefine community members that are always added to this type of workspace
  * Allow end-users to specify additional community members in addition to predefined community members
  * Leave this option altogether to the end-user who is requesting a new workspace

### Microsoft 365 Group Template

Find all options available when creating a Microsoft 365 Group template described in the [Microsoft Teams Template section](templates.md#microsoft-teams-template).
