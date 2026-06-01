---
description: Learn how to restrict or allow Syskit Point to create SharePoint sites using SharePoint Advanced Management.
---

# Restrict Site Creation by Apps

:::info
This feature requires a **Microsoft 365 Copilot license** (assigned to at least one user in your organization) or a **SharePoint Advanced Management** license. See the [Microsoft licensing requirements](https://learn.microsoft.com/en-us/sharepoint/sharepoint-advanced-management-licensing) for details.
:::

SharePoint Online provides the **Restricted Site Creation by Apps** feature, which lets SharePoint Administrators control which third-party applications can create new SharePoint sites in the tenant.

Syskit Point uses the **SysKit Point Service** app registration to provision SharePoint sites. This is the App ID you need when configuring the restricted site creation policy.

:::info
**Hint!**
This feature only restricts third-party apps — it does not affect first-party (Microsoft) apps. The policies also only control which apps can create **new** sites; they do not affect site access permissions for users or apps.
:::

## Allow and Deny Modes

The restricted site creation feature operates in one of two modes: **Deny** (blocklist) or **Allow** (allowlist). The mode is shared across all site types — you cannot use Deny mode for one site type and Allow mode for another.

| | Deny (Blocklist) | Allow (Allowlist) |
|---|---|---|
| **Apps in the list** | Blocked from creating sites | Allowed to create sites |
| **Apps not in the list** | Can create sites as usual | Blocked from creating sites |
| **Default?** | Yes (default when enabled) | No |
| **Use when** | You want to block specific apps | You want only specific apps to create sites |

### Deny Mode (Blocklist)

Deny mode works like a **blocklist** — all third-party apps **can** create sites **except** those explicitly listed.

- Apps whose App ID is **in the list** are **blocked** from creating sites
- Apps whose App ID is **not in the list** can create sites as usual
- This is the **default mode** when the feature is first enabled

**Use Deny mode when** you want to block specific apps (such as Syskit Point) from creating sites while allowing everything else.

### Allow Mode (Allowlist)

Allow mode works like an **allowlist** — **no** third-party app can create sites **unless** it is explicitly listed.

- Apps whose App ID is **in the list** are the **only** apps allowed to create sites
- Apps whose App ID is **not in the list** are **blocked** from creating sites

**Use Allow mode when** you want only specific apps (such as Syskit Point) to create sites and block all others.

:::warning
**Please note!**
Switching between Deny and Allow modes **removes all current configuration**. You will need to reconfigure the app list after switching.
:::

## Prerequisites

Before configuring restricted site creation, make sure you have:

- A **SharePoint Administrator** role or equivalent permissions
- The latest version of [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588) installed
- The **App ID** of the **SysKit Point Service** app registration from your Microsoft Entra admin center

### Find the Syskit Point Service App ID

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com/)
2. Browse to **Microsoft Entra ID** > **Enterprise applications** > **All applications**
3. Search for **SysKit Point Service**
4. Select the application and copy the **Application ID** (a GUID, e.g., `a1b2c3d4-e5f6-7890-abcd-ef1234567890`) — you will use this value in the PowerShell commands below

:::info
**Hint!**
Syskit Point registers several apps in your tenant (Client, Service, API, Permissions Loader, Configuration Inventory, Power Platform). The **SysKit Point Service** app is the one responsible for provisioning SharePoint sites.
:::

## Block Syskit Point From Creating Sites

Use **Deny mode** to prevent Syskit Point from provisioning new SharePoint sites while allowing all other apps.

**Step 1** — Connect to SharePoint Online:

```powershell
Connect-SPOService -Url https://<your-tenant>-admin.sharepoint.com
```

**Step 2** — Enable the feature and set Deny mode:

```powershell
Set-SPORestrictedSiteCreationForApps -Enabled $true -Mode Deny
```

**Step 3** — Add the SysKit Point Service App ID to the deny list:

```powershell
Set-SPORestrictedSiteCreationForApps -SiteType "All" -RestrictedSiteCreationApps "<SysKit Point Service App ID>"
```

Replace `<SysKit Point Service App ID>` with the Application ID you copied from the Entra admin center.

**Step 4** — Verify the configuration:

```powershell
Get-SPORestrictedSiteCreationForApps
```

After this configuration, Syskit Point will not be able to create new SharePoint sites. All other third-party apps can still create sites.

:::warning
**Please note!**
If you need to block additional apps, include **all** App IDs in a single comma-separated list. Each run of the command **replaces** the previous list — it does not append to it.
:::

## Allow Only Syskit Point to Create Sites

Use **Allow mode** to make Syskit Point the only third-party app that can provision new SharePoint sites.

**Step 1** — Connect to SharePoint Online:

```powershell
Connect-SPOService -Url https://<your-tenant>-admin.sharepoint.com
```

**Step 2** — Enable the feature and set Allow mode:

```powershell
Set-SPORestrictedSiteCreationForApps -Enabled $true -Mode Allow
```

**Step 3** — Add the SysKit Point Service App ID to the allow list:

```powershell
Set-SPORestrictedSiteCreationForApps -SiteType "All" -RestrictedSiteCreationApps "<SysKit Point Service App ID>"
```

Replace `<SysKit Point Service App ID>` with the Application ID you copied from the Entra admin center.

**Step 4** — Verify the configuration:

```powershell
Get-SPORestrictedSiteCreationForApps
```

After this configuration, only Syskit Point can create new SharePoint sites. All other third-party apps are blocked.

:::info
**Hint!**
If you also want other apps to create sites alongside Syskit Point, list all their App IDs (comma-separated) in the `-RestrictedSiteCreationApps` parameter.
:::

## Site Type Options

You can scope the restriction to specific site types instead of applying it to all sites:

| SiteType | Applies to |
|---|---|
| **All** | OneDrive and all SharePoint sites |
| **SharePoint** | All SharePoint sites (not OneDrive) |
| **OneDrive** | Only OneDrive sites |
| **Team** | Only SharePoint team sites (group-connected and classic) |
| **Communication** | Only SharePoint communication sites |

For example, to restrict only team site creation:

```powershell
Set-SPORestrictedSiteCreationForApps -SiteType "Team" -RestrictedSiteCreationApps "<SysKit Point Service App ID>"
```

:::info
**Hint!**
The **All** site type overrides all other site type configurations. If you configure a policy for **All**, it applies regardless of other site-type-specific policies.
:::

## Test With Simulation Mode

Before enforcing the policy, you can use the simulation mode parameter to test a hypothetical configuration without affecting production behavior. This lets you verify that the correct apps are allowed or blocked before committing the change.

Refer to the [Microsoft documentation](https://learn.microsoft.com/en-us/sharepoint/restricted-site-creation-by-apps) for the latest simulation mode syntax.

## Disable the Restriction

To remove the restriction and allow all apps to create sites again:

```powershell
Set-SPORestrictedSiteCreationForApps -Enabled $false
```

## Troubleshooting

### "Experimental feature that is not supported in the current environment"

If you receive the error:

> Set-SPORestrictedSiteCreationForApps : The requested operation is part of an experimental feature that is not supported in the current environment.

Check the following:

- **Update the SharePoint Online Management Shell** — uninstall the current version from **Add or remove programs**, then install the [latest version](https://www.microsoft.com/download/details.aspx?id=35588). This cmdlet is only available in recent builds.
- **Verify tenant licensing** — your organization must have at least one of:
  - A **Microsoft 365 Copilot license** assigned to at least one user, **or**
  - A **SharePoint Advanced Management** standalone license
- **Feature availability** — this feature is currently in **preview**. If both the module version and licensing are correct and the error persists, the feature may not yet be rolled out to your tenant.

## Related Articles

- [Set Up Provisioning](../governance-and-automation/provisioning/set-up-provisioning.md)
- [Microsoft — Restrict OneDrive and SharePoint site creation by apps](https://learn.microsoft.com/en-us/sharepoint/restricted-site-creation-by-apps)
- [Microsoft — SharePoint Advanced Management licensing](https://learn.microsoft.com/en-us/sharepoint/sharepoint-advanced-management-licensing)
