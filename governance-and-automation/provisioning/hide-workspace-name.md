---
description: This article explains how to customize and hide the name of your workspace in URLs and e-mails.
---

# Customize Your Workspace Name

In the current collaborative work environment, **protecting sensitive information** is more important than ever. Syskit Point is here to help you ensure your **data is safe and secure**. Another effort to do so comes in the form of your newest feature: the ability to **hide the names of workspaces from the URL when sharing them or sending e-mails**. 

Instead of displaying the actual workspace names, which might contain sensitive or easily identifiable information, this feature replaces the names with randomized numbers or letters. This approach helps **maintain confidentiality and mitigates the risk of unintentional information exposure**.

For example, your project may be prone to changes, and the name might be switched out. This way, you can easily change the name, and no one is likely to notice or get confused by the previous name. Or, perhaps, you're working on a new, important project within the company, and you need some outside collaborators to join the cause. However, you want to keep this project secret and lessen the risk of potential leaks. This feature lets you hide the name of the workspace, but you can still share the workspace and its contents with others.  

Here's how to set up a Provisioning template that ensures the name of the workspace is hiden in the URL and e-mails.

## Creating a Provisioning Template

{% hint style="warning" %}
After upgrading Syskit Point, please make sure to refresh the Microsoft Teams web client to ensure the feature is working correctly.
{% endhint %}

When creating a [Provisioning template](templates.md), the fifth step in the process shows you the screen where you can customize your:

* URL
* E-mail

To customize the URL, you can:

* Allow end users to edit URL
  * Selecting this lets workspace owners and end users edit the URL based on their preference or need
* Hide workspace name from URL
   * Selecting this hides the workspace name from view, which means when the workspace is shared with others instead of the workspace name, the URL consists of randomly generated numbers or letters
* Customize URL prefix/suffix
   * Selecting this gives the ability to change the URL prefix and suffix

To customize the e-mail, you can:

* Hide workspace name from URL
  * Selecting this hides the workspace name from view, which means when the workspace is included in any e-mails sent by Syskit Point, instead of the workspace name, the URL consists of randomly generated numbers or letters
* Customize URL prefix/suffix
  * Selecting this gives the ability to change the URL prefix and suffix for the e-mail


For more details on how to create Provisioning Templates, take a look at the [templates article](../provisioning/templates.md).


{% hint style="information" %}

**Please note the following:**

* SharePoint Site templates do not have a Customize E-mail option
* Yammer templates do not have URL & E-mail customization options

{% endhint %}
