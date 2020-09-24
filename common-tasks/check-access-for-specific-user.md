---
title: Check Access for specific user
author: Ivica Boskovic
description: >-
  This article explains how to generate the User Access report and the options
  available once generated.
date: 19.11.2019.
---

# Check Access for Specific Office 365 User

## User Permissions in your Office 365 environment

When you are using **Office 365** for your daily **collaboration** there are numerous occasions where you’ll **grant** or **remove access** to certain items in your environment. **Office 365** gives us multiple ways of doing that, be it via **direct rights** to the file or maybe through **security groups**, **SharePoint groups**, **sharing links** and many more. After a while, you may lose traction of which user has access to the item and how that user exactly got rights to said item. This is where the **SysKit Point User Access report** comes in to save the day.

## SysKit Point User Access report

### What is the User Access report?

**SysKit Point User Access report** is a powerful tool that gives you the ability to **check** all **individual permissions** for **every specific user** in your **Office 365 environment**. It enables you to:

* See what type of **access** does a user have \(**Full Control**, **Edit**, **Contribute**, or **any personal type of access** you may have **added** to your **environment**\).
* Understand **through which channel** is the **access given** to the user \(**Being a member in a SharePoint** **group**, **Group owner**, **Administrator**, through **security group** or **directly** to said **user**\).
* Show the **details** from which exact **source** were those rights given to it.
* **Perform** multiple **actions directly** on the report \(**Remove Access**, **Change Owners**, **Change to Member**, **Edit Permissions**, **Remove from Group**, **Remove Sharing Link**\).

### When should You use the User Access report

There are multiple occasions where using the **User Access report** which will help you manage your **Office 365 environment** successfully.

Some of them are:

* When a **new user** in your **Office 365 environment** is being **onboarded**, to easily check if they have all the correct permissions to be successful in their work.
* When a **user** is being **offboarded** to double-check if they still have access to some information they shouldn’t have anymore \(via **Anonymous sharing links**\).
* To check if some external cooperants have access to something they shouldn’t have.
* When reorganizing your environment \(**removing users** from certain **security groups** or **changing permissions** for specific users in your environment\).

## How to use User Access to be a true Permissions champion

### How to generate the User Access report

First, you will need to **Sign in** to your **SysKit Point**. When located on the **home screen**, click on the **Reports** tile.

![SysKit Point Welcome screen](../.gitbook/assets/user_access_docs1.png)

It will redirect you to the **SysKit Point Report Center** where you can click on **User Access**.

![SysKit Point Report Center screen](../.gitbook/assets/user_access_docs2.png)

{% hint style="info" %}
**Hint! -** you can also access the **User Access report** through various other **SysKit Point** **reports**, **User overview screen**, and **User details screens**.
{% endhint %}

Now that you are located on the **User Access Selection** **screen**, choose **one** or **multiple users** \(1\) you wish to generate the report for and click the **Run Report button** \(2\).

![SysKit Point User Access report selection screen](../.gitbook/assets/user_access_docs3.png)

### Things to do with User Access Report

Now that you have **successfully** generated the **User Access report** it should look something like this.

![SysKit Point User Access report result](../.gitbook/assets/user_access_docs4.png)

As the **User Access report** is a Tree structure report you can see:

* **User** for which you have generated the report \(1\).
* All **types** of **resources** \(**Sites**, **Microsoft Teams**, **Office 365 Groups**, and **OneDrive** accounts\) that user has some kind of **access** to \(2\).
* What kind of **access** does the user have on a said **resource** \(3\).
* **How** the access was **Given Through** to said user \(4\).
* **Details** containing **exact resources** where the user got their **permissions** for \(5\), and if those are **Office 365 groups** or **Microsoft Teams** they are **drillable** to their respective **Detail Screens** in **SysKit Point** \(6\).

![SysKit Point User Access report structure](../.gitbook/assets/user_access_docs5.png)

Let’s say that you have now found out that this user has **Multiple Access** over the same resource via **Direct Access** and **through** the **Security Group**. You want to **remove** the **Direct Access** that the user was given so he only has access through the Security Group. 

Here’s how to do it.

**Expand** the resource you have chosen, and **select** the **row** in which it says that the user has **Direct Access** \(1\). On the **side panel**, click the **action** called **Remove Access**\(2\).

![SysKit Point User Access report using Remove Access action](../.gitbook/assets/user_access_docs6.png)

**Remove Access** action **prompt** will appear where you just click the **Remove Access button**.

![SysKit Point Remove Access action prompt dialogue](../.gitbook/assets/user_access_docs7.png)

After the action is completed you will receive a **notification bubble** where you can **click** and **see the result**. On selected resource, it is now visible that the user has rights only through the Security Group.

![SysKit Point User Access result after the action was executed ](../.gitbook/assets/user_access_docs8.png)

By the same principle, you can also **Edit** the given permissions, **Remove** said Users from groups that have access to the resource, **Remove Sharing Links** which might give access to unwanted users.

**User Access report** helps all **Admins** and content **Owners** to keep their **Office 365 environment** **clean**, **secure**, and **easy to manage** all at one place, the **SysKit Point**.





