---
description: This article explains how to edit restrictions on your workspaces within Syskit Point.
---

# Edit Restrictions

**Managing access and visibility of SharePoint sites is a vital part of governance**, helping keep sites secure and prevent oversharing. 

With **the new Restrictions column on the Site Overview screen**, you can now easily view whether a site has: 

* **Restricted Access**, if access to the site is restricted to members of whitelisted groups 
* **Restricted Content Discoverability**, if site content is exempt from Microsoft 365 Copilot
* **Restricted Access and Restricted Content Discoverability**, if both restrictions are applied to the site
* **No Restrictions**, if no access restrictions are applied to the site.

By using **the Edit Restrictions action**, located on the **Site Overview and Site Details screens**, you can update these settings for selected sites and choose whether to restrict access to content, restrict content discoverability, both, or leave a workspace without restrictions.

**Clicking the Edit Restrictions action (1)** opens the Edit Restrictions dialog where you can make your selection. 

![Edit Restrictions](../../static/img/restrictions-edit.png)


## Restrict access to content

Restricting access to content prevents oversharing by limiting access to a SharePoint site and its content to members of a specific workspace.

When this restriction is applied:  
 * **Syskit Point** manages Microsoft's SharePoint Restricted site access control capability which **limits access to a SharePoint site and its content to members of specific Microsoft Entra security groups or Microsoft 365 groups** defined as Restricted Access Control groups.
 * For **SharePoint sites**, at least **one Microsoft Entra security group or Microsoft 365 group must be added** for the restriction to become active.
 * For **Microsoft 365 group-connected sites**, the **Microsoft 365 group connected** to the site is automatically added as the **default Restricted Access Control group**. 
   * You can choose to keep this default group and optionally **add additional Microsoft 365 or Microsoft Entra security groups**.
 * **Shared and private channels sites** are separate from the parent Microsoft 365 group-connected site, so **the restriction applied to the main site does not affect them**. 
   * The **restriction has to be enabled separately** for each shared or private channel site.
   * For **shared channel sites**, only **internal users** in the resource tenant **are subject to the restriction policy**, while external participants are assessed based on existing site access. 
 * To access restricted content, **users must** both have a **site or content permissions** and be **members of the defined Restricted Access Control group**.
   * Users who are not members of the specified group cannot access the site or its content, even if they previously had access or received a sharing link.


For more details, take a look at this Microsoft article: [Restrict SharePoint site access with Microsoft 365 groups and Microsoft Entra security groups.](https://learn.microsoft.com/en-us/sharepoint/restricted-access-control)

In Syskit Point, you can restrict access to content by doing the following: 
* On the Sites Overview screen, **select a workspace (1)**
* **Click the Edit Restrictions button (2)** on the right side
* The Edit Restrictions dialog opens where you can:
  * **Turn the toggle on to Restrict access to content (3)** - this limits access to workspace files and folders
    * To allow access to users in security groups or Microsoft 365 groups, **click the checkbox (4)** and enter the name of the groups
  * Additionally, if you want to also restrict content discoverability, you can **turn the toggle on to Restrict content discoverability (5)** - this hides the workspace and its content from search and browsing results
    * If you do not want to restrict content discoverability, ensure the toggle is turned off
  * **Type Confirm (6)** to continue
  * **Click Save (7)** to finalize your selection

![Edit Restrictions - Restrict access to content](../../static/img/restrictions-access-to-content.png)

## Restrict content discoverability

Restricting content discoverability limits how SharePoint site content appears in organization-wide search and Microsoft 365 Copilot. When enabled for a site, the site's content does not appear in a tenant-wide search, such as the SharePoint home page or Bing, unless a user has recently interacted with it.

This setting does not change existing permissions, so users who already have access can still open files directly. 

By controlling discoverability at the site level, you can protect sensitive content during governance review or Copilot onboarding while still allowing authorized users to continue working as normal. 

For more details, take a look at this Microsoft article: [Restrict discovery of SharePoint sites and content.](https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery)

In Syskit Point, you can restrict content discoverability: 
* On the Sites Overview screen, **select a workspace (1)**
* **Click the Edit Restrictions button (2)** on the right side
* The Edit Restrictions dialog opens where you can:
  * **Turn the toggle on to Restrict content discoverability (3)** - this hides the workspace and its content from search and browsing results
  * Additionally, if you want to also restrict access to content, you can **turn the toggle on to Restrict access to content (4)** - this limits access to workspace files and folders
    * To allow access to users in security groups or Microsoft 365 groups, **click the checkbox (5)** and enter the name of the groups
    * If you do not want to restrict access to content, ensure the toggle is turned off
  * **Type Confirm (6)** to continue
  * **Click Save (7)** to finalize your selection

![Edit Restrictions - Restrict access to content](../../static/img/restrictions-content-discoverability.png)