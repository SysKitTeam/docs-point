---
description: >-
  This article describes how to turn on auditing in the Office 365 Security &
  Compliance Center.
---

# Turn On Auditing

For SysKit Point to be able to collect, process, and save audit logs, the auditing has to be enabled in your tenant. If the auditing is not properly configured, the following warning message is displayed in the SysKit Point Configuration Wizard:   
  
`Error starting a subscription. It may take up to 24h after initial audit configuration for this step to work.`

![SysKit Point Configuration Wizard - Warning message](../.gitbook/assets/turn-on-auditing_cw-warning.png)

Although the SysKit Point configuration can be finished at this point, audit data cannot be collected.

To turn on auditing, first, open the following URL in your browser of choice: [https://protection.office.com/unifiedauditlog](https://protection.office.com/unifiedauditlog)

The Office 365 Security & Compliance Center will open, showing the Audit log search page. At the top, a yellow warning bar is displayed. On the right side of the warning bar, you can find the **Turn on auditing button** – click it to turn on auditing.

![Office 365 Security &amp; Compliance Center - Turn on auditing](../.gitbook/assets/turn-on-auditing_turn-on-button%20%282%29.png)

Once the page is refreshed, a different warning message appears telling us the **auditing can take a couple of hours** to be made available.

![Office 365 Security &amp; Compliance Center - Warning bar](../.gitbook/assets/turn-on-auditing_warning%20%282%29.png)

When the page is refreshed at a later point in time, another warning message is displayed, with more precise information on how long it might take for the audit logs to be visible.

![Office 365 Security &amp; Compliance Center - Message](../.gitbook/assets/turn-on-auditing_warning2%20%281%29.png)

{% hint style="warning" %}
**Please note!**   
SysKit Point will not be able to collect audit log data before it becomes available in the Office 365 Security & Compliance Center. As described in this article, **it can take up to 24 hours for audit log data to become available.**
{% endhint %}

{% hint style="info" %}
**Hint!**  
It is also possible to turn on auditing with **PowerShell.** You can find detailed instructions in the [following article](https://docs.microsoft.com/en-us/microsoft-365/compliance/turn-audit-log-search-on-or-off). 
{% endhint %}

