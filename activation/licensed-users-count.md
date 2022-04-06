---
description: This article explains how SysKit Point licensing depends on the Microsoft 365 licenses in your tenant.
---

# Licensed Users Count

The price of the SysKit Point subscription **depends on the number of licensed users within the Microsoft 365 tenant connected to SysKit Point**.

**Licensed Users are all users with any type of Microsoft 365 license attached to them**.
 * **Guest Users** only fit into that category **if they have a license assigned to them**. 
   * Having a license assigned to Guest Users is unnecessary for rudimentary use cases such as sharing content and using the Microsoft Teams app.

{% hint style="warning" %}
**Please note!**  
Free Microsoft licenses assigned - for example, Microsoft Flow Free - are also counted when calculating licensed users in SysKit Point.
{% endhint %}

The number of licensed Users within Syskit Point can be found by going to **Settings (1) > General (2) > Point License (3) > Number of Users M/N (4)**.

![Number of Licensed Users](../.gitbook/assets/activation-licensed-users-point.png)

 * **M** is the **number of licensed users in the tenant** 
 * **N** is the **number of Paid users that are included in the SysKit Point license**

## License Cleanup

If you have Inactive Users, you can remove their license through SysKit Point through the following steps:
 * **On the Home screen, click on Reports (1)**; the Reports site will open with several available options
 * **Scroll to the bottom of the site and select Inactive Licenses (2)**; this will open the report section that will show you all of the licenses that are currently assigned to inactive Users or Guest Users
 * **Select the license of an inactive User (3)**; you can select one or multiple licenses. 
    * To select all inactive licenses at once, press the top checkbox on the left, next to the title 'License.' 
 * **Press the Remove Licenses button (4)**; the button is located on the right side of the screen. 
    * Once selected, a popup will appear. **Type REMOVE and click the Remove button to proceed**. 

![Removing Licenses](../.gitbook/assets/activation-licensed-users-count-inactive.png)

## Related Articles

For more information on customizing license reports, take a look at the [Customize License Reports article](../configuration/customize-license-reports.md). 
