---
description: This article provides answers to the most common questions regarding audit logs in SysKit Point. 
---

# Audit Logs FAQ

## What type of audit logs does SysKit Point collect?

SysKit Point collects audit logs accessible in the unified audit log. Out of the box, you can review the audit logs from the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch).
You can additionaly [customize for which activities will SysKit Point collect audit logs](../configuration/customize-audit-logs-collection.md).

## Why can't I see sign-in logs from Azure Active Directory in SysKit Point audit reports?

Azure Active Directory shows all sing-ins performed by users, service principals, apps, and Azure resources.
**SysKit Point does not collect Azure Active Directory sign-in logs.** 
SysKit Point collects unified audit logs, which contain sign-in logs related to Microsoft 365 and are visible in the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch).

## How frequently does SysKit Point collect audit logs?

SysKit Point checks for and collects new audit logs every 15 minutes. 
Note that it can take up to 24 hours after an event occurs for the corresponding audit log record to be returned in the results of an audit log search. 

## Additional information

You can find additional information about unified audit logs in the [following Microsoft's article](https://docs.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide).