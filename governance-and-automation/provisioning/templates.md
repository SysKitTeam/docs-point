---
description: SysKit Point templates help you define which types of workspaces your end-users can request and create. Each template contains a set of properties and rules that guide the creation process and ensure all workspaces adhere to appropriate governance policies your company specified. 
---

# Templates	

To start with the configuration, open the **Settings > Governance > Provisioning** screen.

**Your Templates** list shows you which workspace templates will be available and visible for your end-users to request in SysKit Point teams app. By default, SysKit Point provides 3 templates. 

1) Manage a project 
2) Department team 
3) Public team 

Available actions for these templates are listed under the **Manage** column and allows you to: 

- **Edit** – use to review and modify how the default template is configured. SysKit Point allows you to change any setting available to fit your needs. 
- **Delete** - If you do not wish to use these default templates or make them available for your end-users, make sure to delete them from this list. 
 
## Create a new provisioning template 

To create your custom template from scratch, click on the **New Template** button. You will need to define a number of settings: 

- **Name** – a name you provide here will be used as a template name that is visible to your users 
- **Description** – describe in short when to use this template; end-users will see it when requesting a new workspace using a list of templates 
- **Microsoft template ID** – this property is used to predefine apps, channels, and tabs that should be created for new workspaces that use this Syskit Point template. 

  1) If you leave this property empty, default apps or channels will not be created, it will be a blank MS team. 

  2) SysKit Point integrates with team templates you’ve created in the **M365 Teams admin center**. When you enter a team template ID, SysKit Point will create apps, tabs, and channels you defined there. 

     To review currently available templates in your M365 tenant and use them in SysKit Point: 

       1) Navigate to MS Teams admin center https://admin.teams.microsoft.com/
       2) Under the tab Teams, select **Team templates**
       3) Click on the name of the template to review apps and channels they include 
       4) Copy the Template ID and paste in SysKit wizard 

          To create a brand-new Teams template in the admin center, follow Microsoft guide: https://docs.microsoft.com/en-us/microsoftteams/create-a-team-template 

- **Privacy** – set if workspaces created using this template will be public or private. You can leave this decision to your end-users as well. 

- **Outlook experience** – define if the newly created workspace will be visible in the Outlook and Exchange global address list. 

- **Owners** – allows multiple options: 
Pre-define owners that are always added in this type of workspace 
Allow end-users to specify additional ones in addition to pre-defined users 
Leave this option completely to the end-user who is requesting a new workspace 

- **Members** – allows multiple options 
  - Pre-define members that are always added in this type of workspace 
  - Allow end-users to specify additional ones in addition to pre-defined users 
  - Leave this option completely to the end-user who is requesting a new workspace 

- **Naming policy** – predefine suffix or prefix that will be added to a name of a workspace created using this template. 
  - E.g. setting prefix to **Marketing** results that each workspace created from this template will be named in a form **Marketing – (Request Name)**

- **Approval process** – define who is responsible for approving the requests using this template. 
    
  All requests using this template will need to be approved by specified people before the workspace is created.  

  By default, you will see four types of approvals available: 
    - Manager approval – manager of the end-users requesting new workspace needs to approve this request 
    - Admin approval – SysKit Point admins need to approve this request 
    - Manager and admin approval – requires approval from both manager of the requester and SysKit Point admins 
    - Automatically Approve – templates using this option don’t require approval. The workspace will be created immediately when the end-user sends a request. 
  
  Read more about Approval processes and how to create custom ones in this [article](governance-and-automation\provisioning\approval-processes.md).
 
- **Governance policies** – predefine a set of rules to be applied to the workspace automatically upon creation. Currently available policies are: 

  - Access reviews 
  - Maximum number of owners 
  - Minimum number of owners 
  - Orphaned Resources 

  Read more about setting up these governance policies and customizing them to your needs [here](governance-and-automation\automated-workflows\set-up-automated-workflows.md).
 
Once you complete this process, your new template will appear in the **Templates** list and will become visible for end-users in **SysKit Point teams app** when requesting a new workspace. 