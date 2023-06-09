---
description: This article explains how to enable the usage of sensitivity labels within Syskit Point.
---

# Enable Sensitivity Labels

In order to use sensitivity labels when creating provisioning templates, the following requirements need to be met:
* **Sensitivity labels are created and published** in [Microsoft compliance center](https://compliance.microsoft.com/informationprotection?viewid=sensitivitylabels)
  * [Click here to learn how to create and configure sensitivity labels and their policies.](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels?view=o365-worldwide)
* **Sensitivity labels are enabled for containers - Microsoft Teams sites, Microsoft 365 groups, and SharePoint sites**
  * [Use this article to help you enable sensitivity labels for containers](https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels-teams-groups-sites?view=o365-worldwide#enable-this-preview-and-synchronize-labels)
* **a service account is connected to Syskit Point**

The connected service account enables Syskit Point to:
* **collect existing sensitivity labels**
* **apply sensitivity labels when creating new workspaces with provisioning workflows**

{% hint style="warning" %}
**Please note!**  
The sensitivity label changes can take up to 24 hours to replicate to all apps and services.
{% endhint %}

## Service Account Requirements
When preparing a service account for Syskit Point, consider the following requirements:

* **multifactor authentication can be enabled for the service account**, but it isn't mandatory
* **service account password is set never to expire** to avoid repetitious password re-entries in Syskit Point; [learn how to set user's password never to expire here](https://docs.microsoft.com/en-us/microsoft-365/admin/add-users/set-password-to-never-expire?view=o365-worldwide#set-a-password-to-never-expire) 
* **sensitivity labels should be published to the service account**; [find more information on how to publish sensitivity labels here](https://docs.microsoft.com/en-us/microsoft-365/compliance/create-sensitivity-labels?view=o365-worldwide#publish-sensitivity-labels-by-creating-a-label-policy)
* **service account should not have the Global Administrator role assigned**
* **the Global Administrator has to give consent on behalf of the organization** for a certain user to be assigned to the service account
* **service account must have a Syskit Point admin role** to provide custom templates for creating new workspaces
* **no licenses are required for the service account**


{% hint style="warning" %}
**Please note!**  
To successfully **provision sensitivity labels onto newly created workspaces** when using the **Microsoft Authentication Flow** method, **only the service account** can create all provisioning templates.
{% endhint %}

Learn more about how to set up multifactor authentication for Microsoft 365 by taking a look at [this Microsoft article](https://learn.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/set-up-multi-factor-authentication?view=o365-worldwide)

## Next Steps

To connect a service account in Syskit Point, please follow the instructions provided in [this article](../../configuration/connect-service-account.md ).

Once the service account is connected to Syskit Point, you can specify a sensitivity label when creating provisioning templates.

To learn more about templates and available options while setting them up, open the [following article](templates.md).
