---
description: This article provides a detailed explanation of how orphaned users appear in Syskit Point.
---

# Orphaned Users

## What Are Orphaned Users in Syskit Point?

Orphaned users are **all users whose accounts have been blocked, soft-deleted, or permanently (hard) deleted from Microsoft Entra ID**, but they may still appear on SharePoint's hidden user list and may retain residual access to the workspace's content. 

In Syskit Point, these orphaned users:
  * Have access to workspace content, or
  * Had access to workspace content and visited the SharePoint site containing that content, but lost access in the meantime

When a user's sign-in is blocked or their account is deleted in Microsoft Entra ID, their SharePoint permissions are not automatically revoked, leaving them as an orphaned user. 

### Soft-Delete vs Hard-Delete

It's important to understand the Microsoft Entra ID deletion lifecycle when managing orphaned users. 

The **Soft-Delete** functions as follows: 
* When a user is deleted in Microsoft Entra ID, their account enters a soft-deleted state for 30 days.
* During these 30 days, the account can be restored.
  * If restored within 30 days, the user regains their original identity.
  * Previously assigned SharePoint permissions should remain intact.

Any soft-deleted user restored within the 30-day window will regain access to previously shared content.

The **Hard-Delete** functions as follows: 
* Once the 30-day window expires, the user is **permanently removed** from Microsoft Entra ID, and the **account cannot be restored**
* Even if a new account is created with the same e-mail address, it will be considered a completely new user, and the recreated account will not inherit any previous SharePoint permissions.
  * This can result in a *User ID Mismatch* issue in SharePoint because the recreated account is treated as a different identity.

:::info
**Please note!** You should still complete the cleanup of residual permissions from the original permanently deleted user. Recreating the account after hard deletion is outside of the scope of restoration behavior, and so the new account has no relationship to those residual permissions.  
:::

## How are Orphaned Users Detected in Syskit Point?
Orphaned users in Syskit Point are detected by syncing information from the SharePoint site's hidden list.

If a user appears on the site's hidden list and is blocked, soft-deleted, or permanently deleted in Microsoft Entra ID, they will be displayed as an Orphaned User in the [Orphaned Users report](../reporting/cleanup-and-health-reports.md#orphaned-users) in Syskit Point.

To access the hidden list, you need to construct and open the following URL:
* `<SharePointSiteURL>/_catalogs/users/simple.aspx`
* For example, for a Marketing site with the URL `https://contoso.sharepoint.com/sites/marketing/`, you can find the hidden list on the following URL `https://contoso.sharepoint.com/sites/marketing/_catalogs/users/simple.aspx`

## How Does a User End Up on the Hidden List?

**A user is added to the SharePoint site's hidden list in the following ways**:
   * When you add the user to the site's default SharePoint groups - Members, Owners, or Visitors SharePoint groups
   * When you give the user access/permissions directly to the site or the site's content - document libraries, lists, or files
   * When you give the user access via a sharing link shared with People you choose - sharing link to specific people

* **A user is added to the SharePoint site's hidden list when they visit the site/content and have access to the site or site content via**:
  * M365 group membership - M365 group where the user is a member is given direct access to the site, or added as a member to the site's SharePoint groups
  * Security group membership - the security group where the user is a member is given direct access to the site, or added as a member to the site's SharePoint groups
  * Company-wide sharing link

:::warning
**Please note** that if a user is granted access to a SharePoint site through M365 group membership, security group membership, or a company-wide sharing link, but does not visit the site, they will not be added to the site's hidden list.
:::

* **If a user visits the site via an Anyone/Anonymous link, they are not added to the hidden list**.

## How Can I Remove an Orphaned User in Syskit Point?

* **To remove a user's access from the site and the site's hidden list in Syskit Point, complete the following steps:**:
  * Open the User details screen
  * In the Access tile, select a site/workspace from which you want to remove the user
  * In the sidebar, click Remove Access

**We recommend enabling automation with the Orphaned Users policy**. Once **Resolve Automatically** is selected, Syskit Point automatically resolves the detected Orphaned Users vulnerability by:
  * Removing deleted users
  * Removing users with blocked sign-in, or
  * Removing all orphaned users

For more details, see the [Orphaned Users policy article](../governance-and-automation/automated-workflows/orphaned-users-admin.md).
 
:::info
**Please note!**\
To be able to remove a user from the hidden list:
 * The site needs to be synced in Syskit Point
   * Otherwise, the following error could be displayed when running the Remove Access action: `The user's SharePoint ID is null. Please sync the site and try again.`
 * The user should have some access to the site
   * If they are in the site's hidden list only and don't have any access/permissions, Point will not show them as having access
:::