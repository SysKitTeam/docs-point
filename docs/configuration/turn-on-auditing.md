---
description: This article describes how to turn on auditing in the Microsoft 365 Security & Compliance Center.
---

# Turn On Auditing

{% hint style="information" %}
**Audit Reports** are available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

For Syskit Point to collect, process, and save audit logs, you must enable auditing in your tenant. The following warning message shows in Syskit Point if auditing is not enabled:

![Syskit Point - Audit Error](../../static/img/turn-on-auditing-point-error.png)

You can use the Syskit Point app, but audit data won't be collected.

First, open the following URL: [https://security.microsoft.com/auditlogsearch](https://purview.microsoft.com/audit/auditsearch)

The Microsoft Purview portal opens, showing the Audit log search page. At the top of the screen, a blue button is available to turn on auditing.

![Microsoft Purview - Start recording user and admin activity](../../static/img/turn-on-auditing-audit-log-search-screen.png)

After you click the button, a security dialog appears. Click Yes to continue.

![Microsoft Purview - Security dialog](../../static/img/turn-on-auditing-security-dialog.png)

After you complete the steps described, wait for audit logs to show on the Audit Log Search page.

{% hint style="warning" %}
**Please note!**  
When you initially connect your tenant to Syskit Point, **Syskit Point collects audit logs no more than 7 days in the past**; this is a technical limit of the Office 365 Management API utilized in the audit log collection process.
Syskit Point will not collect audit log data before it becomes available in the Microsoft Purview portal. **It can take up to 24 hours for audit log data to become available.**
{% endhint %}

{% hint style="info" %}
**Hint!**  
You can also use **PowerShell** to turn on auditing. Find detailed instructions on how to do so in the [following article](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off).
{% endhint %}

