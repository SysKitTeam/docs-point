---
description: This article explains how Syskit Point licensing depends on the Microsoft 365 licenses in your tenant.
---

# Licensed Users Count

The licensing of the Syskit Point subscription **depends on the number of licensed users within the Microsoft 365 tenant connected to Syskit Point**.

**Licensed Users are all users and resources with any type of paid Microsoft 365 license attached to them**.
 * **Licenses that are listed as free by Microsoft do not count** toward calculating the costs of your Syskit Point subscription
 * Resources include any **meeting rooms, service accounts**, and others with licenses.
 * Only **unique Licensed Users or Guest Users and resources will be counted**, regardless of how many licenses the unique User has assigned to them. 
 * **Guest Users** only fit into that category **if they have a paid license assigned**. 
   * Having a license assigned to Guest Users is unnecessary for rudimentary use cases such as sharing content and using the Microsoft Teams app.

{% hint style="warning" %}
**Please note!**  
Free Microsoft licenses assigned - for example, Microsoft Flow Free - are also counted when calculating licensed users in Syskit Point.
{% endhint %}

The number of licensed Users within Syskit Point can be found by going to **Settings (1) > General (2) > Point License (3) > Number of Users M/N (4)**.
* You can also see a report with all your assigned paid licenses by clicking the **View Point Licenses button (5)**. 

![Number of Licensed Users](../.gitbook/assets/activation-licensed-users-point.png)

 * **M** is the **number of licensed users in the tenant** 
 * **N** is the **number of Paid users that are included in the Syskit Point license**

**Clicking the View Point Licenses button** opens the Point Licenses report screen with a list of all paid licenses that are assigned to users in Syskit Point. 

On that screen, you will find the following information:
  * **Display Name (1)** of the user
  * **Licenses (2)** that are assigned to the user
  * **Username (3)** shows the email of the user
  * **Department (4)** that the user belongs to 

You can also use the **column chooser (5)** to add additional columns to the report. 

![View Point Licenses - Report](../.gitbook/assets/activation-licensed-users_licenses-report.png)

**The exact number and type of licenses** that are assigned to users in Syskit Point can be found on the **Licensed Users screen**. 
* Click **Users (1)** on the left side of the Home page
* Select **Licensed Users (2)** from the drop-down menu or tile
* **Browse (3)** by type of license assigned to users under the Licenses section

![Browse Licensed Users by license](../.gitbook/assets/activation-licensed-users_browse-license.png)

To access information on how many assigned licenses there are in your Microsoft 365, visit the admin center and take the following steps. 

Under **Billing (1)**, select **Licenses (2)**. The list of **owned licenses (3)** will then be shown. 
 * The **Available Licenses (4)** section is the number of licenses that are still available to be assigned to users. 
 * The **Assigned Licenses (5)** section shows the number of assigned licenses compared to the available number. 

![How to Check the Microsoft 365 Licenses](../.gitbook/assets/licensed-users-count_microsoft-licenses.png)

Selecting each license allows you to **Assign** it to additional users or **Unassign** it from current ones. This can help with optimizing the cost of the Syskit Point subscription to suit your needs better.

**To unassign users from a license**, click on the license name to select it. The **License details (1)** screen will open.

 * Once there, **select either the individual Users to unassign or the top box to select all Users (2)**.
 * This will provide the option to click on **Unassign licenses (3)**; a pop-up will open requesting you click the **Unassign button to confirm**.

The pricing for Syskit Point is **calculated based on each User that has a license assigned to them**. 
For example, if one User has three licenses, the charge would still be for that one User, regardless of the number of licenses assigned to them. 

![Unassign Microsoft 365 Licenses](../.gitbook/assets/licensed-users-count_microsoft-license-unassign.png)

{% hint style="warning" %}
**Please note!**  
Syskit Point **does** count the free Microsoft 365 licenses while calculating the cost.  
{% endhint %}

## License Cleanup

If you have Inactive Users, you can remove their license through Syskit Point through the following steps:
 * **Click the Reports button (1)** on the left of the home screen; the Reports page will open with several available options
 * **Select Licenses from the drop-down menu (2)** of the reports screen; 
 * **Click the Inactive Licenses report (3)**; this will generate the report that will show you all of the licenses that are currently assigned to inactive Users or Guest Users

![Inactive License Report](../.gitbook/assets/activation-licensed-users-count_inactive-report.png)

 * **Select the license of an inactive User (1)**; you can select one or multiple licenses. 
    * To select all inactive licenses at once, press the top checkbox on the left, next to the title 'License.' 
 * **Press the Remove Licenses button (2)**; the button is located on the right side of the screen. 
    * Once selected, a pop-up appears.
    * **Type REMOVE and click the Remove button to proceed**. 

![Removing Licenses](../.gitbook/assets/activation-licensed-users-count_inactive-remove.png)


{% hint style="information" %}

**Please note** that if the license is assigned automatically to the user once he is added as a member of a specific group, **it cannot be manually removed**. The license is removed automatically once the user is removed from being a member of the group. [For more information on removing users from workspaces, take a look at this article](../point-collaborators/manage-workspaces/manage-workspaces.md#remove-access).

{% endhint %}

#remove-access

## List of Free Licenses

The licenses that do not count toward calculating the price for your Syskit Point are the following:

| Product Name | String ID | GUID | Service Plan Name |
| :--- | :--- | :--- | :--- |
| Business Apps (free) | SMB_APPS | 90d8b3f8-712e-4f7b-aa1e-62e7ae6cbe96 | DYN365BC_MS_INVOICING |
| Business Apps (free) | SMB_APPS | 90d8b3f8-712e-4f7b-aa1e-62e7ae6cbe96 | MICROSOFTBOOKINGS |
| Microsoft Power Automate Free | FLOW_FREE | f30db892-07e9-47e9-837c-80727f46fd3d | DYN365_CDS_VIRAL |
| Microsoft Power Automate Free | FLOW_FREE | f30db892-07e9-47e9-837c-80727f46fd3d | EXCHANGE_S_FOUNDATION |
| Microsoft Power Automate Free | FLOW_FREE | f30db892-07e9-47e9-837c-80727f46fd3d | FLOW_P2_VIRAL |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | EXCHANGE_S_FOUNDATION |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | MCOFREE |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | TEAMS_FREE |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | SHAREPOINTDESKLESS |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | TEAMS_FREE_SERVICE |
| Microsoft Teams (Free) | TEAMS_FREE | 16ddbbfc-09ea-4de2-b1d7-312db6112d70 | WHITEBOARD_FIRSTLINE1 |
| Power BI (free) | POWER_BI_STANDARD | a403ebcc-fae0-4ca2-8c8c-7a907fd6c235 | EXCHANGE_S_FOUNDATION |
| Power BI (free) | POWER_BI_STANDARD | a403ebcc-fae0-4ca2-8c8c-7a907fd6c235 | BI_AZURE_P0 |


## Related Articles

For more information on customizing license reports, take a look at the [Customize License Reports article](../configuration/customize-license-reports.md).
