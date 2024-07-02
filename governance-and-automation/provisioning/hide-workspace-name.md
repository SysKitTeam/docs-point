---
description: This article explains how to customize and hide the name of your workspace in URLs and e-mails.
---

# Customize Your Workspace Name

In the current collaborative work environment, **protecting sensitive information** is more important than ever. Syskit Point is here to help you ensure your **data is safe and secure**. Another effort to do so comes with the newest feature: the ability to **hide workspace names from workspace URLs and e-mails**. 

Instead of displaying the actual workspace name, which might contain sensitive or easily identifiable information, this feature replaces the name with a number identifier (6-10 characters). This approach helps **maintain confidentiality and mitigates the risk of unintentional information exposure**.

Another benefit of the new option is visible in case your **project is prone to changes and the name is likely to be changed as well**. 
With the new option, you can easily change the name, but the URL and e-mail can stay the same since they contain a unique identifier instead of a name. 

**In this article, you can find**:
* How to set up a Provisioning template that ensures the workspace name is hidden in the URL and e-mail.
* What will happen with your existing provisioning templates when upgrading to the latest version of Syskit Point (v2024.4.52) 

## Creating a Provisioning Template

{% hint style="warning" %}
After upgrading Syskit Point, please refresh the Microsoft Teams web client to ensure the new provisioning request will work correctly.
{% endhint %}

When creating a [Provisioning template](templates.md), the fifth step in the process shows you the screen where you can customize your:

* URL
* E-mail

In the URL customization section, you can:

* Allow end users to edit URL
    * Selecting this lets workspace owners and end users edit the URL based on their preference or need
    * Note that once this option is selected, the e-mail option is automatically selected as well
* Hide workspace name from URL
    * Selecting this hides the workspace name from the URL, which means when the workspace is created, instead of the workspace name, the URL contains a number identifier (6-10 randomly generated numbers)
* Customize URL prefix/suffix
    * Selecting this gives the ability to change the URL prefix and suffix

In the e-mail customization section, you can:

* Hide workspace name from e-mail
    * Selecting this hides the workspace name from the e-mail of the created workspace, which means that instead of the workspace name, the e-mail contains a number identifier (6-10 characters)
* Customize e-mail prefix/suffix
    * Selecting this gives the ability to change the e-mail prefix and suffix

{% hint style="success" %}
For all options, when selected, you can see what the end-result URL or e-mail for the workspace will look like.
{% endhint %}

For more details on how to create Provisioning Templates, take a look at the [templates article](../provisioning/templates.md).


{% hint style="information" %}

**Please note the following:**

* SharePoint Site templates do not have a Customize E-mail option
* Yammer templates do not have URL & E-mail customization options due to technical limitations

{% endhint %}

## Upgrading the Existing Provisioning Templates

Here, you can find more information on how existing provisioning templates are upgraded in Syskit Point version 2024.4.52.

In previous versions, if compared with the latest upgrade, Syskit Point provided a more limited scope of customization options for workspace name, URL, and e-mail in provisioning templates.

The following options were available in the Naming Rule customizations in previous versions of Syskit Point:
* Prefix and suffix for workspace name could be defined
* __Apply naming rule to workspace URL and e-mail__ option was available
    * When enabled, prefixes and suffixes defined for workspace name were applied to URL and e-mail as well

Syskit Point 2024.4.52 expands the functionality and provides separate options for URL and e-mail customizations. 
You can separately define prefixes and suffixes for:
* **Workspace name**; by enabling the Workspace Name Rule toggle
* **Workspace URL**; by enabling the Customize URL prefix/suffix option
* **Workspace E-mail**; by enabling the Customize e-mail prefix/suffix option

The following table shows how different template setups in the old version are upgraded to the latest Syskit Point version.

| Old version    | Syskit Point 2024.4.52 Onward | 
| --- | --- | 
| Naming Rule toggle disabled | Workspace Name Rule toggle disabled; all URL and e-mail customization options disabled | 
| Naming Rule toggle enabled; prefix and suffix defined; Apply naming rule to workspace URL and e-mail option disabled | Workspace Name Rule toggle enabled; Name prefix and suffix set to the value defined in previous version; all URL and e-mail customization options disabled |
| Naming Rule toggle enabled; prefix and suffix defined; Apply naming rule to workspace URL and e-mail option enabled | Workspace Name Rule toggle enabled; Name prefix and suffix set to the value defined in previous version; Customize URL prefix/suffix option enabled - URL prefix and suffix defined and equal to Name prefix and suffix; Customize e-mail prefix/suffix option enabled - E-mail prefix and suffix defined and equal to Name prefix and suffix |

{% hint style="warning" %}
**Please Note!** In all upgrade scenarios, __Allow end user to edit URL/e-mail__ and __Hide workspace name from URL/e-mail__ options are disabled. 
If you want to allow end-users to edit URL/e-mail or want to hide the workspace name from URL/e-mail, please edit existing provisioning templates or create new ones and enable appropriate options to fit your needs.
{% endhint %}






