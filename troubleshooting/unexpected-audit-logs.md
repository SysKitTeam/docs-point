---
description: This article explains potentially unexpected multiple audit logs appearing in Syskit Point after running a single action. 
---

# Unexpected Audit Logs

## Multiple audit logs after performing a single action in Syskit Point

Even though you perform a single action in Syskit Point, Microsoft logs each background step individually. 

For example, to successfully remove access granted through sharing links, Syskit Point must execute multiple actions behind the scenes, as removing user access requires site collection adminstrator permissions. To complete the remove access action, Syskit Point:

* Temporarily grants the Global Admin account running the action site collection administrator permissions.
* Edits or removes the sharing link to remove access.
* Removes the Global Admin account from the site collection adminstrator role after completing the task.

## How these steps appear in Microsoft’s Audit Logs

Since each step is logged separately, you’ll usually see the following audit logs listed:

* Added site collection administrator
* Sharing link updated
* Removed site collection adminstrator

These logs are expected and indicate that the task was performed with elevated rights and subsequently cleaned up.

## Audit Log shows a “shared this file” entry when access is removed

This is a known Microsoft behavior. Even when a sharing link is updated to remove user access, Microsoft may log this as User A shared this file with User B. 

However, rest assured that no new sharing was done via Syskit Point, and Syskit Point cannot create new sharing links.

This entry is caused by how Microsoft logs sharing link updates, not by performing any additional actions.


## Additional information

You can find additional information about unified audit logs in the [following Microsoft article](https://docs.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide).