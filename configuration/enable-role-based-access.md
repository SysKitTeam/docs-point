---
description: This article explains how you can enable Role-based Access in SysKit Point.
---

# Enable Role-Based Access

After the installation and configuration of **SysKit Point**, depending on the selected subscription plan, you can allow your Microsoft 365 users to access **SysKit Point** web-app.

{% hint style="warning" %}
**Please note!**  
Role-based access in SysKit Point is only available in the **Team** and **Enterprise** subscription plans. The **Professional** subscription plan allows only one SysKit Point admin to access the web-app.
{% endhint %}

## SysKit Point Roles

SysKit Point offers four predefined access roles:

* **SysKit Point Admins**
* **SysKit Point Global Viewers**
* **SysKit Point Exchange Admins**
* **SysKit Point Collaborators**

{% hint style="warning" %}
**Please note!**  
**SysKit Point Global Viewers** and **SysKit Point Exchange Admins** role are **available only in the Enterprise subscription plan**.
{% endhint %}

### SysKit Point Admins

Users with the SysKit Point Admins role assigned can:

* **see all data** collected from your Microsoft 365 tenant
* **manage all settings in SysKit Point** 
* **perform actions** based on the permissions granted in Microsoft 365

### SysKit Point Global Viewers

Users with the SysKit Point Global Viewers role assigned can:

* **see all data collected from your Microsoft 365 tenant**

They have **Read-Only** access, and **cannot execute actions or manage application settings**.

### SysKit Point Exchange Admins

Users with the SysKit Point Exchange Admins role assigned can:

* **access the Exchange Logs report** exclusively

They have **Read-Only** access, and **cannot execute actions or manage application settings only**.

### SysKit Point Collaborators

The only role in SysKit Point that is **assigned automatically** to users or security groups, based on their **ownership permissions** in the **Microsoft 365 tenant**. When logged in to SysKit Point, they can:

* **access all data related to Microsoft 365 resources where they are owners/administrators**
* **perform actions** based on the permissions granted in Microsoft 365

Optionally, you can assign this role to users with **Full Control** permissions, or enable **read-only**, which disables actions for SysKit Point Collaborators. Both of these options are described in the following section.

## Setting up Role-Based Access

### Team License

Let's say you activated the **SysKit Point Team** license. With it, you can simultaneously use **SysKit Point** between **five** users, be it like a **SysKit Point Admin** or **SysKit Point Global Viewer**. Here's how you can manage who gets to use it.

{% hint style="warning" %}
**Please note!**  
The account that has activated your license **will automatically occupy one out of five eligible** **Admin user** places.
{% endhint %}

When located on the **Home Screen**, click the **Settings** **option \(1\)** in the upper right corner. A drop-down appears. Click the **Security** **option \(2\)**.

![SysKit Point - Settings dropdown](../.gitbook/assets/rbs_home_screen_updated%20%281%29%20%282%29%20%282%29%20%284%29%20%286%29%20%286%29%20%286%29%20%286%29%20%285%29%20%281%29.png)

You will be redirected to the **Settings** &gt; **Security** &gt; **Manage Access** page, where you can define who has access to **SysKit Point**.

![Settings - Manage Access page](../.gitbook/assets/rbs-clanak-2.png)

{% hint style="info" %}
**Hint!**  
Shortcut to Manage Access is also available from the License tab in Settings.
{% endhint %}

When you are on the **Manage Access** screen, you will see two roles available for the **Team** license plan; **SysKit Point Admin** and **SysKit Point Global Viewer** \(which is disabled by default\)**.**

When the user is assigned to the **SysKit Point Admin** role, they will be able to login to SysKit Point and view **All data** collected from the **Microsoft 365** tenant. Still, they will only be able to **execute** actions for which they have **permissions** in **Microsoft 365**.

To assign a user to the **SysKit Point Admin** role, click the **Assign to role** button, which will open up a **textbox** where you can type in the name of the **user** you want to **assign** to the **SysKit Point Admin role**. After you've selected the user, click **Save** to confirm your action.

![Settings - Assigning SysKit Point Admin role](../.gitbook/assets/rbs-clanak-3%20%283%29%20%284%29%20%284%29%20%285%29%20%286%29%20%285%29%20%284%29.png)

In a situation where you want to have Users that should be able to generate reports and see tenant permissions but don't want them to have the ability to execute actions, **SysKit Point Global Viewer** is the role you'll find fitting.

When a user is assigned to the **SysKit Point Global Viewer** role, they can sign in to **SysKit Point** and view all data collected from **Microsoft 365** but **cannot** **execute** **actions** or **manage application settings**.

To assign a User to a **SysKit Point Global Viewer** role, **enable** the **toggle** **\(1\)** **next to it.** Click the **Assign to role** button, **type in the name of the desired user, select it \(2\)**, and click **Save \(3\)**.

![Settings - Assigning SysKit Point Global Viewer role](../.gitbook/assets/rbs-clanak-4%20%281%29%20%282%29%20%282%29%20%283%29%20%284%29%20%284%29%20%284%29%20%284%29%20%284%29%20%284%29%20%282%29.png)

Each role on **Manage Access** has its user number label. It shows us how many users are currently occupying SysKit Point roles.

![Settings - Number of users per Role](../.gitbook/assets/rbs-clanak-5%20%283%29%20%282%29%20%282%29%20%283%29%20%284%29%20%284%29%20%284%29%20%284%29%20%284%29%20%283%29%20%281%29.png)

Clicking each of those labels redirects you to the **report** of the corresponding role. The report shows **exact** users **occupying** that role. On the role reports, you can also **assign** new users to that role, **export** the report into **PDF** or **XLSX**, and **remove** users from said roles.

To **remove** a user, click the **checkbox** next to the desired **user name \(1\)**, then click the **Remove Access from SysKit Point** **\(2\)** action.

![SysKit Point Admins report - Removing access from SysKit Point](../.gitbook/assets/rbs-clanak-6.png)

A **dialog** will pop out, asking you to **confirm** your desired action.

![SysKit Point Admins Report - Confirmation dialog](../.gitbook/assets/rbs-clanak-7.png)

When the action is **completed**, the selected user **no longer has access** to **SysKit Point**.

{% hint style="warning" %}
**Please note!**  
Removing user access from **SysKit Point** will not remove a user from your **Microsoft 365** environment.
{% endhint %}

### Enterprise License

If you are using the **Enterprise** plan, you are not limited to several **Admin** users using SysKit Point simultaneously. However, if you want to enable login for users who don't have **Global Administrator** or **SharePoint admin** rights on your tenant, you have to allow it in **Settings**.

When located on the **Home Screen**, click the **Settings** option in the upper right corner. A drop-down appears. Click the **Security** option.

![SysKit Point - Settings dropdown](../.gitbook/assets/rbs_home_screen_updated%20%281%29%20%282%29%20%282%29%20%284%29%20%286%29%20%286%29%20%286%29%20%286%29%20%285%29%20%281%29%20%286%29.png)

You will be redirected to **SysKit Point Settings screen - Manage access**.

With the **Enterprise** plan, you have four available options for accessing SysKit Point. **SysKit Point Admins** **\(1\)**, **SysKit Point Global Viewers \(2\)**, **SysKit Point Exchange Admins \(3\)**, and **SysKit Point Collaborators** **\(4\)** of which the latter ones are disabled by default.

![Settings - Manage Access page](../.gitbook/assets/rbs_settings_updated.png)

If you have activated **SysKit Point** with **Enterprise** license, it will automatically add two **Microsoft 365** administration roles \(**Company Administrator** and **SharePoint Service Administrator**\) as **SysKit Point Admins**. Any user on your **Microsoft 365 environment** that has that role will **automatically** have **full access** to **SysKit Point**.

To see all users associated with those roles, click the **number** on Users label under **SysKit Point Admins** **option \(1\)**.

![Settings - SysKit Point Admins - Users](../.gitbook/assets/rbs_settings_updated_2.png)

You are then redirected to the **SysKit Point Admins** report, where You can see who has **access** to **SysKit Point**.

![SysKit Point Admins Report](../.gitbook/assets/rbs-clanak-10.png)

While the **Team** license plan gives you the ability to add **distinct users** only as **SysKit Point admins** \(also limited to number five\), the **Enterprise** license enables you to add even **Microsoft 365 Administration roles**, **security groups,** and **Microsoft 365 Groups**.

{% hint style="warning" %}
**Please note!**  
It is not possible to remove or add a distinct user from **Microsoft 365 administration role** in **SysKit Point**.
{% endhint %}

#### SysKit Point Exchange Admins

**SysKit Point Exchange Admin** is a role that enables you to put a person or security group in charge of monitoring Exchange Log reports for your environment. User with the assigned role has Read-Only access on the Exchange Logs report, and cannot execute actions and manage application settings.

To enable **SysKit Point Exchange Admins,** navigate to the **Settings** &gt; **Manage Access** screen, enable the **toggle** next to **SysKit Point Exchange Admins \(1\)**, and click the **Assign to role** **\(2\)** button. A textbox opens where you can enter the names of **users**, **Microsoft 365 Administrator roles**, **security groups**, and **Microsoft 365 Groups**. When you're finished, click the **Save** **button \(3\)**.

![Settings - Enabling SysKit Point Exchange Admins role](../.gitbook/assets/rbs_settings_updated_3.png)

After your settings have been saved, you can click the Users tile under SysKit Point Exchange Admins to check who has the said role assigned; you can assign more users to that role, and Export the report to PDF or Excel.

![SysKit Point Exchange Admins report](../.gitbook/assets/rbs_settings_updated_4.png)

You can also select the current user or role and **remove their access \(1\)** from SysKit Point.

![SysKit Point Exchange Admins report - Removing access](../.gitbook/assets/rbs_settings_updated_5.png)

#### SysKit Point Collaborators

The **SysKit Point Collaborators** role enables **Site admins/Teams owners** to access **SysKit Point** and efficiently manage their **sites/teams** while not showing the information they should not see. When it's enabled, **SysKit Point** **automatically** assigns that type of user to **SysKit Point Collaborators** role.

To enable **SysKit Point Collaborators**, when located on the **Settings &gt;** **Manage Access** screen, enable the **toggle** next to **SysKit Point Collaborators** **\(1\).** The total number of owners and administrators appears automatically above the **Site Owners label**. To assign the Collaborators role to users with **Full Control** permissions, check the **Add users with Full Control** **\(3\)** option. If you want to enable users to sign in to **SysKit Point** but **do not want** them to **execute actions**, check the **Give users read-only access \(disable actions\)** **\(2\)** option. When you're finished, click **Save**.

![Settings - SysKit Point Collaborators](../.gitbook/assets/rbs_settings_updated_6.png)

If you want to see which users have the **SysKit Point Collaborators** role assigned, click the **Site Owners \(1\)** tile.

![SysKit Point Collaborators - Site Owners](../.gitbook/assets/rbs_settings_updated_7.png)

You will be redirected to **SysKit Point Collaborators report**, where you can see which users are s**ite owners or administrators**, where exactly do they have **permissions** in your **Microsoft 365 environment**, and through what means are they given those permissions.

![SysKit Point Collaborators report](../.gitbook/assets/rbs-clanak-13.png)

### Why Should You Enable Role-Based Access

When working in large environments, it's easier to keep things tidy if more people are working together.

As you know, the **SysKit Point Admin** can see all the available content in the Microsoft 365 Tenant.‌

**Role-Based Access** empowers all **Site Owners** \(and users with **Full Control** permissions\) to keep their **Sites** and **Teams** clean. It gives them access to all reports and information relevant to them, without showing the content they are not allowed to see.

**For example,** the **SysKit Point Admin** has generated the **User Access** report. Instead of sharing the URL of the generated report to the other **SysKit Point Admin**, it was sent to the **SysKit Point Collaborator** that doesn't have access to all the users on the said environment. This is where **Role-Based Access** kicks in.

When said **SysKit Point Collaborator** opens the URL, the report will be generated but only containing **Users** who are members on his **Site Collections** and **Microsoft 365** **Groups**.

When the **SysKit Point Collaborator** tries to **drill** to the **User Details** page of a user he is not a manager of, he/she will be redirected to an **Unauthorized Access** page.

![Unauthorized access page](../.gitbook/assets/enable-role-based-access_unauthorized-access-screen.png)

