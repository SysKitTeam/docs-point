---
title: Check Access for specific user
author: Ivica Boskovic
description: >-
  This article explains how to generate the User Access report and the options
  available once generated.
date: 19.11.2019.
---

# Check Access for Specific User

In **Office 365** and **SharePoint**, there are a variety of **permission levels** which allow users to **access** the resources they need. They tend to group actions and define what users can and can't see within your environment.

If you, as an administrator, try to check where does the user have access to in your environment, you would have to go through every site collection and check for a specific user.

However, if you use **SysKit Point** it allows you to reach this collected data for a specific user's access in a single report.

Here's how you can do it.

## Generate User Access from Report Center

From the **Home Screen**, you can either click on Reports tile, or directly to **User Access** report.

![Home Screen](../.gitbook/assets/check_access_for_specific_user_1.png)

If you've clicked on **Reports** you will be redirected to **Report Center** where you can select **User Access** report.

![Report Center - User Access](../.gitbook/assets/check_access_for_specific_user_2.png)

To find **User Access** easier you can also use filters on the upper side of Report Center, User Access has tags for **Permission Reports** and **Users**, so selecting either of those will show you User Access report.

![Report Center - report filters](../.gitbook/assets/check_access_for_specific_user_3.png)

### Filtering through users on Selection page

After clicking on User Access, you are redirected to **Selection** page. There you can see all the **Users** on your **Tenant**.

![User Access selection screen](../.gitbook/assets/check_access_for_specific_user_4.png)

You can filter through **Users** by changing the type of **view** you're using. Change the type of view by clicking on **view selector** on the left side of the screen.

![User Access selection screen - view picker](../.gitbook/assets/check_access_for_specific_user_5.png)

Clicking on **Column Chooser** also enables you at adding additional columns to the grid so you can filter further through those columns. To open a Column Chooser click on the icon next to the **Search bar** on the right.

![User Access selection screen - column chooser](../.gitbook/assets/check_access_for_specific_user_6.png)

Last type of filtering is by using the **Search bar** which is located on the right side of the screen. Type into it to find a specific user you want.

![User Access selection screen - search bar](../.gitbook/assets/check_access_for_specific_user_7.png)

### Making a Selection

While making a selection you have various possibilities. Clicking on a **checkbox** next to a **Display Name** column will select all the Users on the current view.

![User Access selection screen - select all users](../.gitbook/assets/check_access_for_specific_user_8.png)

By clicking on checkboxes next to a User you can make a **single** or **multiple** User selection.

![User Access selection screen - multiple user selection](../.gitbook/assets/check_access_for_specific_user_9.png)

If you know names of Users you want to generate a report for and you don't want to scroll through the User list. You can use Search bar to enter each name and click on a checkbox next to User's name.

After you've made a selection, click on **Run Report**, it will generate User Access report for all the users you selected.

![User Access report](../.gitbook/assets/check_access_for_specific_user_10.png)

## Side Panel options when report is successfully generated

### Default options

When report is generated, if you focus on the right side of the screen you will see the **side panel**.

If you haven't selected anything on the report, there will be option to **Export** your report.

You can export the report into **PDF** and **Excel**.

![User Access report - side panel export options](../.gitbook/assets/check_access_for_specific_user_12.png)

### Options when making a selection.

If you make a selection on a **Root level** of the report be it single selection or multi selection, side panel changes and action **Remove Access** becomes available.

Also you get the option to generate other **SysKit Point** reports for selected objects from there.

![User Access report - side panel options on selection](../.gitbook/assets/check_access_for_specific_user_13.png)

## Generate User Access from Site Details

You've visited **site details** page of one Site Collection on your tenant. There you can see the **Overview tile** which has **Users** and **External Users** metric.

![Site Details page - Overview tile](../.gitbook/assets/check_access_for_specific_user_14.png)

If you click on Users metric, you will be redirected to the page which shows you all types of user that have access to that Site Collection.

![Side Details - Users metric clicked](../.gitbook/assets/check_access_for_specific_user_15.png)

Clicking on External Users metric wil show you only external users that have acces to that Site Collection.

If you select some users on that page you get options in **Side panel** to generate a **User Access** report.

Generating report from there will show what kind of access do users have on that Site collection.

![User Access report generated from Site Details](../.gitbook/assets/check_access_for_specific_user_16.png)

## Generate User Access from User Overview screen

From **Home Screen** click on **Users** tile which redirects you to Users Overview screen.

On **Users Overview** screen you see all the Users on your environment.

Select any user and on the **side panel** click on the **User Access**.

![User Overview screen - selection](../.gitbook/assets/check_access_for_specific_user_17.png)

You will get a User Access report generated for the **selected user** on which you can see what kind of access does that user have on all objects of your environment.

![User Access report generated from User Overview screen](../.gitbook/assets/check_access_for_specific_user_18.png)

