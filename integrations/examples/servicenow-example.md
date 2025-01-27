---
description: This article showcases how you can utilize Syskit Point's webhooks with ServiceNow.
---

# ServiceNow Integration with Syskit Point 

In this article, we’ll guide you through the steps to set up a ServiceNow integration with Syskit Point. 

This setup will allow you to automate the provisioning of Microsoft 365 workspaces directly from ServiceNow by making use of Syskit Point’s API. 

In the [3rd Party Integrations Using Webhooks article](webhooks-example.md), we explained all the prerequisites needed for this to work. 

## Setting up ServiceNow Integration

The first step is to **configure OAuth credentials in ServiceNow**.

* Add the OAuth credentials in ServiceNow to allow ServiceNow to authenticate against Syskit Point’s API securely

* Store OAuth credentials as System Properties

In ServiceNow, navigate to System Properties and add the following custom properties for secure access:

* provisioning.client_id
  * Set this property to your Syskit Point Client ID. 
* provisioning.client_secret 
  * Set this property to your Syskit Point Client Secret. 
* provisioning.tenant_id
  * Set this property to your Directory (Tenant) ID. 
* provisioning.application_id
  * Set this property to your Syskit Point API Application (Client) ID.

Now, create a custom request form in ServiceNow to capture the required details for provisioning Microsoft 365 workspaces. 

This form will gather the information that Syskit Point needs to complete the provisioning process. 

Define the Form Fields:
* Go to Service Catalog > Maintain Items and create a new catalog item for “Workspace Provisioning.”
* Add the following fields: 
  * Site/Team Name (text): The name of the workspace to be provisioned. (Type: Single Line Text, Variable name: site_name, mandatory)
  * Site/Team Description (text): A brief description of the workspace. (Type: Single Line Text, Variable: site_description, mandatory)
  * Owners (multi-select dropdown): A field to select users who will have ownership rights. Configure this field to pull user data from the sys_user table. (Type: List Collector, Variable: owners, mandatory)
  * Members (multi-select dropdown): A field to select users to add as members, also referencing sys_user. (Type: List Collector, Variable: members, mandatory)

![Request Form to request provisioning of new workspaces](../../.gitbook/assets/webhooks-example-diagrams.png)

* Users can use a Request Form to request provisioning of new workspaces


Next, you need to set up approval workflow
* Configure the catalog item’s workflow to include an approval step
  * This step ensures that the request is reviewed before triggering the Syskit Point API call

![ServiceNow workflow designer](../../.gitbook/assets/webhooks-example-diagrams.png)
 
* Use ServiceNow workflow designer to adjust the workflow to your business process. Once approved, Run the Script script listed below.

### Integration script

We prepared a comprehensive script below, that you can use as part of your workflow.

SCRIPT HERE SCRIPT HERE SCRIPT HERE

By following these steps, you can integrate ServiceNow with Syskit Point, enabling seamless provisioning of Microsoft 365 resources directly from your service desk. 

This process streamlines approvals, enhances resource management, and provides your users with a unified experience.
