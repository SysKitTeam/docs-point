---
description: This article describes how to resolve the "Audit Logs Subscription issue" warning in Syskit Point when Microsoft 365 Unified Audit Logging is not enabled or has not yet propagated.
---

# Audit Logs Subscription Issue

This issue occurs when **Microsoft 365 Unified Audit Logging** is not enabled, or when the configuration has not yet fully propagated in the tenant.

It is most commonly encountered in:

* New Microsoft 365 tenants
* Developer or trial tenants
* Recently configured Exchange Online environments

## Symptoms

You may see the following warning in Syskit Point:

```Audit Logs Subscription issue! Audit logs subscription is not enabled. Please contact your Administrators or Syskit Support for help.```

You may also encounter PowerShell errors similar to:

```powershell
The command you tried to run isn't currently allowed in your organization.
To run this command, you first need to run the command:
Enable-OrganizationCustomization
```

Or:

```console
Enable-OrganizationCustomization:
This operation is not required. Organization is already enabled for customization.
```

## Solution

There are two supported ways to enable auditing:

* **Microsoft Purview portal** (recommended)
* **Exchange Online PowerShell**

### Option 1: Enable Auditing in Microsoft Purview (Recommended)

This is the fastest and easiest approach.

1. **Open** the [Microsoft Purview audit search portal](https://purview.microsoft.com/audit/auditsearch).
2. **Sign in** with a **Global Administrator** or **Compliance Administrator** account.
3. If auditing is not enabled, a banner with the ***Start recording user and admin activity*** button is shown.
4. **Click the button** to enable auditing.
5. **Wait** for Microsoft 365 to complete provisioning.

### Option 2: Enable Auditing With PowerShell

#### Step 1: Install and Connect to Exchange Online PowerShell

```powershell
Install-Module ExchangeOnlineManagement -Scope CurrentUser
Import-Module ExchangeOnlineManagement

Connect-ExchangeOnline
```

#### Step 2: Enable Organization Customization

```powershell
Enable-OrganizationCustomization
```

You may see the following output:

```console
This operation is not required. Organization is already enabled for customization.
```

This is normal and simply means customization has already been enabled previously.

#### Step 3: Enable Unified Audit Log Ingestion

```powershell
Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true
```

#### Step 4: Verify Configuration

```powershell
Get-AdminAuditLogConfig | FL UnifiedAuditLogIngestionEnabled
```

The expected result is:

```powershell
UnifiedAuditLogIngestionEnabled : True
```

:::warning
**Please note!**
Microsoft 365 audit configuration changes are not always immediate. Even after enabling auditing successfully:

* PowerShell commands may still fail temporarily
* Syskit Point may continue showing the warning
* The Microsoft Purview UI may not update immediately

According to Microsoft documentation, changes can take from **30 minutes** to **several hours**, and **up to 72 hours** in some environments. This is especially common in developer, trial, and newly created tenants.
:::

## Common Scenario

A common sequence is:

1. `Enable-OrganizationCustomization` reports that customization is already enabled.
2. `Set-AdminAuditLogConfig` still fails temporarily.
3. Microsoft backend provisioning completes later.
4. Re-running the command succeeds.
5. Syskit Point begins collecting audit logs normally.

In many cases, simply waiting and retrying later resolves the issue.

## Troubleshooting Checklist

### Verify Auditing Status in Purview

**Open** the [Microsoft Purview audit search portal](https://purview.microsoft.com/audit/auditsearch).

If you see ***Start recording user and admin activity***, auditing is not enabled yet.

### Verify PowerShell Status

Run:

```powershell
Get-AdminAuditLogConfig | FL UnifiedAuditLogIngestionEnabled
```

If the result is:

```powershell
UnifiedAuditLogIngestionEnabled : False
```

Auditing is still disabled.

### Use a Fresh PowerShell Session

Sometimes stale sessions cause misleading errors. Reconnect and retry the command:

```powershell
Disconnect-ExchangeOnline -Confirm:$false
Connect-ExchangeOnline
```

## Additional Notes

* Production tenants usually already have auditing enabled by default.
* This issue is more common in development or newly provisioned tenants.
* Exchange Online PowerShell must be used for these commands.
* Global Administrator permissions are recommended.

:::info
For initial setup steps and details on enabling auditing from Syskit Point's perspective, see [Turn On Auditing](../configuration/turn-on-auditing.md).
:::

## References

You can find additional information in the following Microsoft Learn articles:

* [Turn auditing on or off](https://learn.microsoft.com/en-us/purview/audit-log-enable-disable#turn-on-auditing)
* [Enable-OrganizationCustomization](https://learn.microsoft.com/en-us/powershell/module/exchange/enable-organizationcustomization)
* [Set-AdminAuditLogConfig](https://learn.microsoft.com/en-us/powershell/module/exchange/set-adminauditlogconfig)
