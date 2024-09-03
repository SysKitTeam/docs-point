---
description: This article provides answers to the most common questions regarding audit logs in Syskit Point. 
---

# Audit Logs FAQ

## What type of audit logs does Syskit Point collect?

Syskit Point collects audit logs accessible in the unified audit log. Out of the box, you can review the audit logs from the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch).
You can additionaly [customize for which activities will Syskit Point collect audit logs](../configuration/customize-audit-logs-collection.md).

## Why can't I see sign-in logs from Azure Active Directory in Syskit Point audit reports?

Azure Active Directory shows all sing-ins performed by users, service principals, apps, and Azure resources.
**Syskit Point does not collect Azure Active Directory sign-in logs.** 
Syskit Point collects unified audit logs, which contain sign-in logs related to Microsoft 365 and are visible in the [Microsoft 365 compliance center](https://compliance.microsoft.com/auditlogsearch).

## How frequently does Syskit Point collect audit logs?

Syskit Point checks for and collects new audit logs every 15 minutes. 
Note that it can take up to 24 hours after an event occurs for the corresponding audit log record to be returned in the results of an audit log search. 

## How far back in the past can Syskit Point collect audit logs?

When you initially connect your tenant to Syskit Point, **Syskit Point collects audit logs no more than 7 days in the past**.

## Additional information

You can find additional information about unified audit logs in the [following Microsoft's article](https://docs.microsoft.com/en-us/microsoft-365/compliance/search-the-audit-log-in-security-and-compliance?view=o365-worldwide).