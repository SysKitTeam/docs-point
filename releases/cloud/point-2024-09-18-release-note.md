---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.4.62.30
---

# September 18, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Features

* **New feature added to Provisioning!**
  * New section available when creating or editing Templates: **Content & Structure**
  * The Content & Structure section provides three options:
    * **Start from scratch** - the new provisioned workspace is blank. 
    * **Use existing Microsoft Teams template** - when selected, predefined apps, channels, and tabs are created for the new provisioned workspace based on the template used. 
    * **Copy from existing team** - selecting this will copy channels, apps, tabs, and settings from the selected existing workspace to the new one being provisioned.
  * [For more details, take a look at the Content & Structure article.](../../governance-and-automation/provisioning/content-and-structure.md)

## Improvements & Bug Fixes

* **Improvements made to reports.**

  * **The Sites Overview report and Teams & Groups Overview report** now have an additional column to select from the column chooser: **Last Reviewed**.  
    * This column provides information on the date and time when the last Access Review was performed on the workspace.

  * **The User Access report and Group Access report** now have additional columns: Sensitivity Label and Retention Label. 

  * **The Site Storage Metrics report** is now available in all Syskit Point Subscription plans. 

* **A new column** is available for workspaces in the Govern > Security & Compliance section: **Activity**.
  * The Activity column shows the current state of the workspace: 
    * If the light is **green**, the workspace is **active**.
    * If the light is **gray**, the workspace is **inactive**.
  * Activity is **based on usage** of SharePoint, Exchange, Teams and Yammer in **the last 90 days**.
  * This column is available for both **Active Tasks and History**. 


* **Fixed an issue** that caused the prefix not to show properly when a workspace was archived or restored. 
  * The prefix [Archived] is added to the workspace name if a workspace is archived.
  * The prefix [Archived] is removed from the workspace name if a workspace is restored.  

* **Fixed an issue** where the link sent in the *task completed* e-mails, after completing an Access Review, would direct collaborators to the Govern screen of Syskit Point.
  * The link sent in the e-mail now directs collaborators to the completed Task in Syskit Point. 

* **Fixed an issue** where the policy vulnerability reminder e-mails were erroneously sent after a site sync was performed.

* **Fixed a bug** that caused the layout for the PDF file for tree reports not to show the indent that clearly indicates the relationship between files and workspaces. 

* **Fixed an issue** where the Sign Out button for Syskit Point did not work properly after the session had expired, preventing users from signing out. 

* **Various improvements and minor UX and UI fixes are available**.