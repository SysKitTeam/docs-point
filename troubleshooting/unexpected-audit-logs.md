---
description: This article answers any questions about unexpected audit logs in Syskit Point. 
---


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