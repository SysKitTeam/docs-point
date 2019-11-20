---
description: This article explains how you can enable Role-based Access in SysKit Point.
---

# Enable Role-Based Access

After the installation and configuration of **SysKit Point**, depending on the subscription plan you selected, you can have multiple users using **SysKit Point** simultaneously. This option is found under **Settings** tab called **Manage Access.**

{% hint style="warning" %}
**Please note!**                                                                                                                                       Simultaneous usage of **SysKit Point** is only available in **Team** and **Enterprise** licence plan. 
{% endhint %}

## Setting up Role-Based Access

### Team licence

Let's say you activated **SysKit Point Team** licence. With it you get an option to simultaneously use **SysKit Point** between **five** users. Here's how you can manage who gets to use it.

{% hint style="warning" %}
**Please note!**                                                                                                                                                                 Account that has activated your licence will automatically occupy **one** out of **five** eligible **Admin user** places.
{% endhint %}

When located on the **Home Screen**, click on the **Settings** option in the upper right corner.

![Clicking on settings from home screen](../.gitbook/assets/enable_role_based_access_1.png)

You will be redirected to the **Settings** page. From there, click on the **Manage Access** tab.

{% hint style="info" %}
**Hint!**                                                                                                                                                                      Shortcut to Manage Access is also available from Licence tab in Settings.
{% endhint %}

![Settings page overview](../.gitbook/assets/enable_role_based_access_2.png)

After **Manage Access** tab becomes active, you will see options where you can decide who has access to **SysKit Point**.

![Settings screen - Manage Access tab](../.gitbook/assets/enable_role_based_access_3.png)

If user that you want to add as **Admin** **Users** doesn't have **Global Administrator** rights on your environment, you have to **enable** the **Allow site owners access to SysKit Point** option.

After that, you can enable the **Allow users with full control on site access to SysKit Point** option, in case the user that you want to add as Admin is not a **Site Owner** but has **Full Control** permissions on some Site Collections or Office 365 Groups in your environment.

Now that you've enabled all those options, click on the **People Picker** box and add users to Admin users by typing their name.

Once you've added all desired users, click on the **Save** button. All of them are now able to **Login** to **SysKit Point** via **URL** of your machine.

{% hint style="info" %}
**Hint!**  
You can change selected Admin Users at any time by clicking on crossmark next to their name and typing in the new one.
{% endhint %}

![Manage access - options enabled and users added](../.gitbook/assets/enable_role_based_access_4.png)

#### Setting up when you have activated the Enterprise licence.

If you have purchased **Enterprise** licence for your **SysKit Point** you are not limited to a number of **Admin** users using it simultaneously. However if you want to enable it to users who don't have **Global Administrator** rights on your tenant you have to allow it in **Settings**.

Click on **Settings** and then select the **Manage Access tab**. 

If you wish to enable login to **SysKit Point** for users that are **Site Owners** activate that option. You also have the option to enable login for users that have **Full Control** permissions on sites from in your environment.

Click on **Save** button.

![Manage access - Enterprise Licence edition](../.gitbook/assets/enable_role_based_access_5.png)

After you've saved, all **Site Owners** and users with **Full Control** permissions are able to login into **SysKit Point**.

### Why should you enable Role-Based Access

When working in big environments it's easier to keep things tidy if more people are working together.

As you know, **Global Administrator** account can see all the content that is available on the **Tenant**.

**Role-Based Access** empowers all the **Site Owners** \(and users with **Full Control** permissions\) to keep their **Sites** and **Teams** clean. gives them access to all the reports and informations relevant to them without showing them pages or files they are not allowed to see on your **Tenant**. 

e.g. **Global Administrator** has generated a **User Access** report and instead of sharing the URL of generated report to the other **Global Administrator**, it was sent to the **Site Owner** that doesn't have access to all the users on said environment. This is where **Role-Based Access** kicks in.

When said **Site Owner** opens the URL, report will be generated but only containing **Users** who are members to his **Site Collections** and **Groups**. 

Also when **Site Owner** tries to **drill** to the **User Details** page of a User he is not manager to, he/she will be redirected to **Unauthorized Access** page.

![Unauthorized access page](../.gitbook/assets/enable_role_based_access_6.png)



\*\*\*\*

#### 

\*\*\*\*

