---
description: This article explains what Microsoft's hero links are, how they work, and where you can see them in Syskit Point.
---

# Hero Links

**Hero links** are Microsoft's new sharing experience for SharePoint and OneDrive, where each file or folder uses a **single, reusable link that controls all access to it**.

Instead of creating a new link every time content is shared with a different person or audience, the same hero link is reused whenever you **copy a link, share by e-mail, or use the file URL**. This removes the need to create, delete, and manage multiple links for the same file and makes sharing simpler to understand and manage.

With hero links, each file gets a single link that controls all access to it. Whether you click **Copy Link**, add access for new people, or send an e-mail, it is the same hero link in the background.

In the SharePoint and OneDrive interface, there is no separate *hero link* label. This is presented as the **file or folder link settings**.

Here are the key characteristics of how a hero link works:

* By default, access is set to `Only people added`, which means only the people listed can access the file
* Adding someone to the list of people gives them access through the same hero link; in the background, access is granted directly on the file or folder
* Changing the link setting to `People in your org` does not change the link or URL, but it changes who can access the file using it
* Resetting the link deletes the current link and generates a new URL

## Hero Links vs. Classic Sharing Links

In the classic sharing model, each time a user shared a file with a different audience, SharePoint often generated a new sharing link. Over time, a single file could accumulate many sharing links, each containing a different permission scope.

With hero links, a single link per file replaces that and reduces the number of links pointing to the same file.

**Existing sharing links and permissions continue to work.** The experience for creating new classic-style sharing links is changing: it is less prominent and is available behind the three-dot menu.

:::info

For more details on Microsoft's new sharing experience, take a look at the following article: [The new sharing experience is coming to SharePoint Online: What admins need to know](https://techcommunity.microsoft.com/blog/microsoftmissioncriticalblog/the-new-sharing-experience-is-coming-to-sharepoint-online-what-admins-need-to-kn/4539859).

:::

## Hero Links in Syskit Point

Syskit Point recognizes hero links and surfaces them across its link-based reports and tasks, so you can tell them apart from classic sharing links and see how each file or folder is shared.

The following reports include a **Hero link** column, which identifies Microsoft's default per-item sharing link and distinguishes it from classic sharing links:

* **Sharing Links report** - see the [Sharing Links report](external-sharing-reports.md#sharing-links)
* **User Access report** - see the [User Access report](access-reports.md#user-access-report)
* **Workspace Review Sharing step** - hero links are marked across the sharing sections; see the [Workspace Review Sharing step](../point-collaborators/workspace-review/sharing-step.md)

The following reports include a **Hero Link Setting** column, which shows the file or folder link setting, such as `Only people added`, `People in your org`, or `Anyone`:

* **Permissions Matrix report** - see the [Permissions Matrix report](access-reports.md#permissions-matrix-report)
* **Externally Shared Content report** - see the [Externally Shared Content report](external-sharing-reports.md#externally-shared-content)

You can also see hero links in these places:

* **Site metrics** - the **Anonymous Links** and **Company-Wide Links** metrics count hero links, and drilling into a metric shows the hero links on the Sharing Links report
  * You can see this on the [Sites overview](../microsoft365-inventory/sites.md)
* **Anonymous Access Links report** - Anyone hero links appear here even before they are used


:::info

**Please note!**  
* Since SharePoint does not allow deleting a hero link, running **Remove Sharing Link** on a hero link switches its audience to **Specific people** instead of removing the link, so only people you shared the link with directly still have access. 
* The **Remove Access** and **Restrict Sharing** actions also work on hero links. 
* **Restrict Sharing** applies to organization-wide and Anyone hero links and reverts their sharing so that only people who were already added keep access; it is available from the **Sharing Links**, **Permissions Matrix**, and **User Access** reports.

:::

## Related Articles

* [External Sharing Reports](external-sharing-reports.md)
* [Access Reports](access-reports.md)
* [Workspace Review Sharing](../point-collaborators/workspace-review/sharing-step.md)
