---
description: This article provides answers to the most common questions regarding audit logs in Syskit Point. 
---

# Audit Logs FAQ

## What type of audit logs does Syskit Point collect?

Syskit Point collects audit logs, which are accessible in the unified audit log. You can review the audit logs from the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch) out of the box.
You can additionally [customize for which activities Syskit Point will collect audit logs](../configuration/customize-audit-logs-collection.md).

## Why can't I see sign-in logs from Microsoft Entra ID in Syskit Point audit reports?

Microsoft Entra ID shows all sing-ins performed by users, service principals, apps, and Azure resources.
**Syskit Point does not collect Microsoft Entra ID sign-in logs.** 
Syskit Point collects unified audit logs, which contain sign-in logs related to Microsoft 365 and are visible in the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch).

## How frequently does Syskit Point collect audit logs?

Syskit Point checks for and collects new audit logs every 15 minutes. 
Note that it can take up to 24 hours after an event occurs for the corresponding audit log record to be returned in the results of an audit log search. 


{% hint style="information" %}
**Please note!** When using the Remove Users from All Sites action to revoke user permissions in Syskit Point, especially those granted via sharing links, you may notice several unexpected or confusing entries in the Microsoft 365 Audit Logs. 
{% endhint %}

## Why are there multiple Audit log entries when I'm performing a single action in Syskit Point?

Even though you perform a single action in Syskit Point, Microsoft logs each background step individually. 

For example, to successfully remove access granted through sharing links, Syskit Point must execute multiple actions behind the scenes because removing user access requires elevated permissions. To complete the remove access action, Syskit Point:

* Temporarily grants the Global Admin account elevated permissions by adding it as a Site Collection Administrator.
* Edits or disables the sharing link to remove access.
* Removes the Global Admin account from the Site Collection Admin role after completing the task.

## How will these steps appear in Microsoft’s Audit Logs?

Since each step is logged separately, you’ll usually see the following actions listed:

* Added site collection admin
* Sharing link updated
* Removed site collection admin

These actions being listed are expected and show that the task was performed using elevated rights and cleaned up afterward.

## Why does the Audit Log show a “shared this file” entry if I only removed access?

This is a known Microsoft behavior. Even when a sharing link is updated to remove user access, Microsoft may log this as User A shared this file with User B. 

However, rest assured that no new sharing was done via Syskit Point, and Syskit Point cannot create new sharing links.

This entry is caused by how Microsoft logs sharing link updates, not by performing any additional actions.


## Additional information

You can find additional information about unified audit logs in the [following Microsoft's article](https://docs.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide).