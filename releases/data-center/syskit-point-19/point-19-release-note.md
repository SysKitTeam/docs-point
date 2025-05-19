---
description: >-
  This article describes the new features and improvements in Syskit Point
  version 19.
---

# Syskit Point 19

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 19.0.0
**Build number:** 1958
**Release date:** Apr 26, 2021

## Features

* **Policies are available**! This feature enables you to define policies, apply them to Microsoft 365 workspaces and solve policy vulnerabilities through Syskit Point. The following policy types are available:
  * **Minimum number of owners** – Syskit Point will notify existing owners if it detects a Microsoft 365 Group or a Team with fewer owners than defined in the policy. Owners can then quickly resolve the policy vulnerability through a Syskit Point task.
  * **Maximum number of owners** - Syskit Point will notify existing owners if there is a Microsoft 365 Group or a Team with more owners than defined in the policy.
  * **Orphaned workspaces** – For Microsoft 365 Groups and Teams without active owners, Syskit Point will ask members or specific users to suggest new owners. Defined users can then approve suggestions and complete adding a new owner or decide to archive or remove the workspace if it is not being used.
  * **Inactive Guest Users** – Syskit Point will ask specified users to validate guest users after they become inactive. This tenant-wide policy helps you ensure there are no unwanted guest users in your environment. **If owners or members do not resolve the policy vulnerabilities, Syskit Point will automatically reassign the task or resolve the violation, depending on your settings.** [To learn more about the available capabilities, navigate to the Policies article.](../../../governance-and-automation/automated-workflows/set-up-policies.md)
* **Additional License information and customizations are available**! With the help of the **new Licenses dashboard tile**, you can easily **track the number of active and inactive licenses and see their total cost**. With the help of the **new License Reports settings screen**, you can define the following values:
  * **Number of inactivity days after which a user and assigned licenses will be considered inactive**
  * **Currency used in the license reports**
  * **Monthly license cost per user for all licenses** in your environment **Syskit Point Admins can now decide whether to show or hide the license reports for site admins and group owners** by simply checking an option on the Manage Access settings screen. [To learn more about license reports and settings, navigate to the following article.](../../../setup/configuration/customize/customize-license-reports.md)
* **New alerts added – External User Logged in**, and **External User Login Failed**! New alerts help you track external user activity, so you are always aware.

## Improvements & Bug Fixes

* **Syskit Point was optimized to be faster than ever**! From the moment you sign in to the report generating or scrolling through thousands of your sites, all background API calls and stored procedures were perfected to make Point more responsive and fluid.
* **Improved information for sites with external users**! Syskit Point now calculates the number of external users for each Microsoft Team, Microsoft 365, and site beforehand and shows the information in the **External Users column on the Sites overview screen**. **Externally Shared Sites** and **Externally Shared Groups views were changed to display only workspaces where the external users exist**, instead of only considering the site’s sharing settings.
* **Improved notifications in case Autodiscover or User sync failure**! Since successful sync is a prerequisite to have up-to-date data in Syskit Point, you must know if something goes wrong. Syskit Point will now show a warning and send you an email if there were no successful syncs in the last 48 hours (2 days).
* **Grant Access action now supports SharePoint groups**! When granting access, you can now select SharePoint groups by typing the group name in the search field.
* **User Access gets a new filter and an improved export**! You can now easily **hide publicly accessible content**, which might not be in the focus when reviewing access. The **XLSX export was improved** to give you all the data needed for simple filtering and sorting, helping you quickly find what you are looking for.
* **User Activity and Site Permissions Changes reports have new filters**! Predefined filters help you show **file and page activities**, **external sharing activities**, or **all (internal and external) sharing activities**. As before, you can **select specific activities to narrow the scope of results**.
* **Improved messages and logs when running actions**! Syskit Point now shows a user-friendly custom message instead of a generic message if the user running the action does not have sufficient privileges. Not all errors have the same importance; therefore, some of the messages are no longer written in the event log to clear the clutter – for example, when you try to add an existing member or owner to the Team.
* **Improved how Syskit Point handles service accounts**! You can define your own list of service accounts which should be ignored inside Syskit Point. Such accounts are then filtered out during sync and are no longer displayed on reports.
* **Total row count on reports was improved to show correct data** even after switching a view, searching, or otherwise filtering the data.
* **Various UX/UI improvements and minor fixes** available. With this version, **the Permissions Review feature is renamed Access Review**.
* **Fixed an issue** where owners and admins would get a Bad Request error when accessing Lifecycle Management tasks from email. If the user accessing the task no longer has owner or admin rights, an Unauthorized Access message is now displayed.
* **Fixed an issue** where users could not download exported report files due to the lack of proper notifications in Syskit Point.
* **Fixed a bug** where Access Review e-mail was sent to Syskit Point Admins, although no Access Review Policies were assigned to Microsoft Teams, Microsoft 365 Groups, OneDrive, or sites.
