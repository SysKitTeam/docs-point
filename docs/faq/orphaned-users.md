---
description: This article provides a detailed explanation of how orphaned users are seen in Syskit Point.
---

# Orphaned Users

## What Are Orphaned Users in Syskit Point?

Orphaned users are **all users who have been blocked or deleted from Microsoft Entra ID** and:
  * Have access to workspace content, or
  * Had access to workspace content and visited the SharePoint site containing that content but lost access in the meantime

## How are Orphaned Users Detected in Syskit Point?
Orphaned users in Syskit Point are detected by syncing information from the SharePoint site's hidden list. 
If a user is found on the list and is deleted or blocked in Microsoft Entra ID, they will be displayed as an Orphaned User in the [Orphaned Users report](../reporting/cleanup-and-health-reports.md#orphaned-users) in Syskit Point.

To access the hidden list, you need to construct and open the following URL:
* `<SharePointSiteURL>/_catalogs/users/simple.aspx`
* For example, for a Marketing site with the URL `https://contoso.sharepoint.com/sites/marketing/`, you can find the hidden list on the following URL `https://contoso.sharepoint.com/sites/marketing/_catalogs/users/simple.aspx`

## How Does a User End Up on the Hidden List?

**A user is added to the SharePoint site's hidden list in the following ways**:
   * When you add the user to the site's default SharePoint groups - Members, Owners, or Visitors SharePoint groups
   * When you give the user access/permissions directly to the site or site's content - document libraries, lists, or files
   * When you give the user access via a sharing link shared with People you choose - sharing link to specific people

* **A user is added to the SharePoint site's hidden list when they visit the site/content and have access to the site or site content via**:
  * M365 group membership - M365 group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups
  * Security group membership - security group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups
  * Company-wide sharing link

:::warning
**Please note** that if a user is granted access to a SharePoint site through document_number_1 group membership, security group membership, or a company-wide sharing link, but does not visit the site, they will not be added to the site's hidden list.
:::

* **If a user visits the site via an Anyone/Anonymous link, they are not added to the hidden list**.

## How Can I Remove an Orphaned User in Syskit Point?

* **To remove a user's access from the site and the site's hidden list in Syskit Point, complete the following steps:**:
  * Open the User details screen
  * In the Access tile, select a site/workspace from which you want to remove the user
  * In the sidebar, click Remove Access
 
:::info
**Please note!**\
To be able to remove a user from the hidden list:
 * The site needs to be synced in Syskit Point
   * Otherwise, the following error could be displayed when running the Remove Access action: `The user's SharePoint ID is null. Please sync the site and try again.`
 * User should have some access to the site
   * If they are in the site's hidden list only and don't have any access/permissions, Point will not show them as having access
:::