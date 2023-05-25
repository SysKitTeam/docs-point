---
description: This article helps you learn everything you need to start using your SysKit Point. 
---

# SysKit Point Configuration Guide

SysKit Point enables Microsoft 365 admins, site owners, auditors, and compliance officers with everything they need to **manage and govern** the content they own and provides the ability to automate security tasks. 

This comprehensive tool can analyze your content, check whether everything is functioning optimally and help you export or schedule reports with just a few simple clicks. 

Several things need to be set up before you can utilize everything SysKit Point offers. This article provides an **easy overview of how to get started using SysKit Point**. 

## Set Up and Customize E-mails

To help you stay up to date with the workings of your Microsoft 365 environment, **SysKit Point sends e-mails** to owners, administrators and other users when automated workflows are enabled. For these e-mails to work properly and be successfully sent, you will need to set up your e-mail within SysKit Point.

{% hint style="warning" %}
**For detailed instructions on configuring your e-mail settings within Syskit Point, please follow the steps listed in the [Set Up E-mail article](../configuration/set-up-email.md).**
{% endhint %}

Once the e-mail has been set up, you can also customize the e-mails that are **sent to site owners** as a part of the **Access Review and Lifecycle Management Automation**.  

E-mails are used for **Access Review and Lifecycle Management** tasks, any policies created under **Automated Workflows**, and for receiving reports available in the **Reports** section of SysKit Point. 

{% hint style="warning" %}
**Learn more on which aspects of the e-mails can be customized along with a step-by-step guide on how to customize them in the [Customize E-mails article](../configuration/customize-emails.md).**
{% endhint %}

## Enable and Manage Access for SysKit Point

After deploying **SysKit Point**, you'll be able to give your Microsoft 365 users access to the SysKit Point web app. 

Assigning these roles to users provides the users with different levels of access. Depending on the role assigned, users will be able to:
 * View all data collected from the Microsoft 365 tenant
 * Perform actions based on the permissions granted to them in Microsoft 365 
 * Have access to all data related to sites, Microsoft 365 Groups, and Microsoft Teams

These roles also allow **site owners to perform Access Reviews on their site and complete Lifecycle Management tasks** to determine which workspaces should be archived or kept. 

{% hint style="warning" %}
**To learn more about the specifics of each role and how to assign them to your users, take a look at the [Enable Role-Based Access article](../configuration/customize-emails.md).**
{% endhint %}


## Enable Microsoft Teams Activity Tracking

One of the first things you might have noticed upon logging into SysKit Point is the notification located at the bottom of the screen that states the following:

**Detect inactive Teams in your environment** 

Clicking the configure now button gets you started with the process of enabling Microsoft Teams activity tracking, which helps you easily **discover which of your Microsoft Teams are not being actively used**. 

Through this, you'll gain insight into when a workspace should be assessed to determine its value for the future with options to **keep, archive or delete the workspace**. 

{% hint style="warning" %}
**For more details on what this includes and a guide on how to successfully set it up, follow the instructions in the [Enable Microsoft Teams Activity Tracking article](../configuration/microsoft-teams-activity.md).**
{% endhint %}

## Ignore Service Account Activity Tracking 

**Service accounts are user accounts created to fulfill automated, expected changes to the server.**

The Ignored Service Accounts option in SysKit Point allows you to **avoid tracking the service accounts activities** collected from the Unified Audit Logs, meaning:

 * The Service Account page hits and views **will be ignored when detecting any workspace activity**
 * The Service Account audit logs **won't be stored**
 * The Service Account changes **will be ignored and won't trigger alerts**

{% hint style="warning" %}
**Learn all about service accounts in SysKit Point and how to avoid tracking their activity by reading through the [Ignore Service Account Activity tracking article](../configuration/ignore-service-account-activity-tracking.md).**
{% endhint %}

## Customize Audit Logs Collection

The Audit Logs provide insights into all user and administration activities in your Microsoft 365 environment.‌ They contain activity information related to **groups, documents, permissions, directory services and much more**. 

{% hint style="warning" %}
**For more details on Audit Logs collection and how to customize it, take a look at the [Customize Audit Logs collection article](../configuration/customize-audit-logs-collection.md).**
{% endhint %}

## Customize License Reports

The License Reports can discover assigned, unassigned or inactive Microsoft 365 licenses and check their overall cost. This might help you optimize the use of your licenses based on which of them are underutilized. 

Customizing license reports can only be done by users with the assigned SysKit Point Admin role. 

{% hint style="warning" %}
**Learn more about license reports and how to customize them in the [Customize License Reports article](../configuration/customize-license-reports.md).**
{% endhint %}

## Enable Power BI Data Collection

If your Microsoft 365 utilizes the Power BI data collection software, you can connect it with SysKit Point. 

{% hint style="warning" %}
**For instructions on how to set-up the Power BI data collection follow the instructions in the [Enable Power BI Data Collection article](../configuration/enable-powerBI-data-collection.md).**
{% endhint %}


## SysKit Point for Collaborators and Owners

When the initial set-up is finalized, the users from your Microsoft 365 environment with assigned roles can start exploring SysKit Point.

Depending on the level of access permitted to a user, there are certain actions that can be completed:
  * **[Complete Access Review Tasks in SysKit Point](../point-collaborators/resolve-governance-tasks/access-review.md)**
  * **[Resolve Lifecycle Management Tasks in SysKit Point](../point-collaborators/resolve-governance-tasks/lifecycle-management.md)** 
