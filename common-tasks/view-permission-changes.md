---
description: This article describes how to audit permission changes in your environment using SysKit Point.
---

# View Permission Changes in Microsoft 365

If you are an Microsoft 365 global administrator or a site owner, one of the most common tasks while doing permissions review for your sites is to check who did what, and when. For example:

* Which folders or files are shared, who shared them, and when
* Who added Team members
* Who removed a member from a Team
* Who created or deleted a Team and when
* Track changes on permission inheritance
* See access request activities
* …and much more

With SysKit Point you can get the information you need using **Site Permissions Activities** report. The report shows changes made to group memberships, sharing activities, changes made to permission inheritance, and other important security activities. The data for this report comes from the audit logs – this report filters audit logs and shows only activities that are related to security.

{% hint style="warning" %}
**Please note!**  
In order to run this report, audit logs collection must be enabled. Check [this article](https://docs.syskit.com/point/installation-and-configuration/customize-audit-logs-collection) to find out more.
{% endhint %}

## Generate Site Permissions Activities report

Site Permissions Activities report is accessible from a few different places in SysKit Point:

* In **Report Center,** there is Site Permissions Activities report
* On the **Sites overview screen**, you can select sites and choose Permissions Activities from the side panel on the right
* On the **Microsoft Teams & Group overview screen**, you can select Groups or Teams and choose Permissions Activities from the side panel on the right
* On the **details screen for Site / Microsoft Team / Microsoft 365 Group / OneDrive**, you can select Permissions Activities from the side panel on the right

### **Report Center**

On the **Home** screen, you can click the **Reports** tile, then click the Audit Logs filter at the top, and you’ll find Site Permissions Activities report.

When you click the report, you’ll get the screen where you’ll be able to select sites for which you want to generate the report.

After selecting one or more sites, you’ll be able to adjust additional filters:

* **Choose the date period** for which you want to see activities
* **Select specific activities** you want to show

When you click the **Run Report** button, you’ll get the report data. The report shows basic info for every activity, and for more details, every activity can be expanded. Here is the description of every column:

* **Date** – date and time when activity happened
* **Activity** – name of the activity
* **User** - user who performed the action
* **Item** – name of the Site/Group/Team where the action happened
* **Details** – short description of the activity
* **Details when expanded** – shows more detailed properties and it depends on the activity

{% hint style="info" %}
**Hint!**  
For Microsoft 365 Groups and their connected sites, both SharePoint and Microsoft 365 Group activities will be shown.
{% endhint %}

