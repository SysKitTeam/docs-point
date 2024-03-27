---
description: This article provides a detailed explanation of how orphaned users are seen in Syskit Point.
---

# Orphaned Users FAQ

## What Are Orphaned Users in Syskit Point?

Orphaned users are **all the users that have been blocked or deleted from Azure Active Directory** and:
  * Have access to workspace content, or
  * Had access to workspace content and visited the SharePoint site containing that content but lost access in the meantime

## How are Orphaned Users Detected in Syskit Point?
Orphaned users in Syskit Point are detected by syncing information from the SharePoint site's hidden list. 
If a user is found on the list and is deleted or blocked in Entra ID, they will be displayed as an Orphaned User in Syskit Point.

You can access the hidden list by constructing and opening the following URL:
* `<SharePointSiteURL>/_catalogs/users/simple.aspx`
* For example, for a Marketing site with the URL `https://contoso.sharepoint.com/sites/marketing/`, you can find the hidden list on the following URL `https://contoso.sharepoint.com/sites/marketing/_catalogs/users/simple.aspx`

## How Does a User End Up on the Hidden List?

* **The user is added to the SharePoint site's hidden list immediately after you**:
   * Add the user to the site's default SharePoint groups (Members, Owners, or Visitors SharePoint groups) - Point > Site Details > Gran Access + Add users to a SharePoint group option enabled

   * Give the user access/permissions directly to the site or site's content (doc. libraries, lists, or files) -  Point > Site Details > Grant Access action + Grant users permissions directly option enabled

   * Give the user access via a sharing link shared with People you choose (sharing link to specific people) - not possible in Point, M365 only

* **User is added to the SharePoint site's hidden list when they visit the site/content when they have access to the site or site content via**:
  * M365 group membership (M365 group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups)
  *  Security group membership (security group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups)
  * Company-wide sharing link

* **If a user visits the site via an Anyone/Anonymous link, they are not added to the hidden list**.

## How Can I Remove an Orphaned User in Syskit Point?

* **Complete the following action in Syskit Point to remove a user from the site's hidden list**:
  * User Details > Access Tile > Select site/workspace > Remove Access
 
{% hint style="info" %}
**Please note!**\
In order to be able to remove a user from the hidden list:**
 * The site needs to be synced in Syskit Point
   * Otherwise, the following error could be displayed when running the Remove Access action: The user's SharePoint ID is null. Please sync the site and try again.
 * User/group should have some access to the site
   * if they are in the site's hidden list only and don't have any access/permissions, Point will not show them as having access, which is technically correct, but you still want to remove the user from the hidden list, or they will be displayed on the Orphaned users report
{% endhint %}