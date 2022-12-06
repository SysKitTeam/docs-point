---
description: Approval processes define who needs to approve the end-user request for a new workspace before this workspace gets created using SysKit Point. 
---

# Approval Processes 

To start with the configuration, open the **Settings > Governance > Approval Processes** screen. 

**Your Approval Processes** list shows you which approval types will be available to use in provisioning templates. 

By default, SysKit Point provides 3 approval processes:

  - Manager approval – manager of the end-users requesting new workspace needs to approve this request 
  - Admin approval – SysKit Point admins need to approve this request 
  - Manager and admin approval – requires approval from both manager of the requester and SysKit Point admins 

## Create a Custom Approval Process 

To create your custom approval process from scratch, click the **New Approval Process** button. You will need to define several settings: 

  - **Approval Process Name** – give a name to this approval process; this will be displayed in the template wizard  
  - **Number of stages for this approval** – how many levels of approval each request needs to go through before it is finally approved. Current options are: 
    - 1-stage – only one person/group will need to approve this request 
    - 2-stage – 2 people/groups will need to approve this request 
    - 3-stage - 3 people/groups will need to approve this request 

  - **Approver for each stage** – for each stage, you can choose between the manager of the requester, SysKit Point administrators or provide specific people that will be responsible for this level (multi-select allowed) 
