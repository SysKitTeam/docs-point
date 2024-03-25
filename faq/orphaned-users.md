---
description: This article provides a detailed explanation of how orphaned users are seen in Syskit Point.
---

# Orphaned Users FAQ

The following situations explain what actions cause a user to be recognized as an Orphaned User in Syskit Point:

* **The user is added to the SharePoint site's hidden list immediately after you**:
   * Add the user to the site's default SharePoint groups (Members, Owners, or Visitors SharePoint groups) - Point > Site Details > Gran Access + Add users to a SharePoint group option enabled

   * Give the user access/permissions directly to the site or site's content (doc. libraries, lists, or files) -  Point > Site Details > Grant Access action + Grant users permissions directly option enabled

   * Give the user access via a sharing link shared with People you choose (sharing link to specific people) - not possible in Point, M365 only

* **User is added to the SharePoint site's hidden list when they visit the site/content when they have access to the site or site content via**:
  * M365 group membership (M365 group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups)
  *  Security group membership (security group where the user is a member is given direct access to the site or added as a member to the site's SharePoint groups)
  * Company-wide sharing link


* **If a user visits the site via an Anyone/Anonymous link, he is not added to the hidden list**.

* **Complete the following action in Syskit Point to remove a user from the site's hidden list**:
  * User Details > Access Tile > Select site/workspace > Remove Access
 
* **Complete the following action in Syskit Point to  remove groups from the site's hidden list**:
  * Reports > Group Access > select group > run report > select workspace from which you want to remove the group > Remove Access

 
{% hint style="info" %}
**PLEASE NOTE: in order to be able to remove a user/group from the hidden list:**
 * The site needs to be synced in Syskit Point

 * Otherwise, the following error could be displayed when running the Remove Access action: The user's SharePoint ID is null. Please sync the site and try again.

 * User/group should have some access to the site

 * if they are in the site's hidden list only and don't have any access/permission, Point will not show them as having access, which is technically correct, but we still want to remove the user from the hidden list, or they will be displayed on the Orphaned users report

{% endhint %}