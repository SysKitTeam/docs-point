---
description: This article explains how to restrict who can create Microsoft 365 groups in your tenant.
---

# Restrict Microsoft 365 Groups Creation

If you are **using Syskit Point to manage the creation of new workspaces** in your tenant, you might want to **restrict the creation of new workspaces outside the Syskit Point Teams app**. 

By default, **all users can create Microsoft 365 groups in your tenant, and, with that, the various workspaces that rely on groups for access**. 
Such **workspaces might not comply with your business policies**,  which, on the other hand, can be easily controlled with the help of Syskit Point [provisioning templates](templates.md).

Here, you can **find how to restrict Microsoft 365 group creation**, and thus **ensure that all created workspaces comply with your business policies defined in Syskit Point**.

{% hint style="warning" %}
**Please note!**  
**Restricting group creation affects all services that leverage groups for access** - Outlook, SharePoint, Yammer, Microsoft Teams, Microsoft Stream, Planner, Power BI (classic), Project for the web (roadmap)
However, **Office 365 Global Administrators will be able to create groups via various admin centers**, for example, Microsoft 365 admin center.
{% endhint %}

## Requirements

Note the following requirements:
* The **admin who configures the group creation settings needs the Azure AD Premium license or Azure AD Basic EDU license assigned** to them
* Preview version of [Azure AD PowerShell module](https://docs.microsoft.com/en-us/powershell/azure/active-directory/install-adv2?view=azureadps-2.0) needs to be installed

## PowerShell Command

To restrict group creation:
* **Open a PowerShell window**
* **Copy & paste, and run the PowerShell script given below**
* **Sign in with your administrator account when prompted**

```
Connect-AzureAD

$settingsObjectID = (Get-AzureADDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).id
if(!$settingsObjectID)
{
    $template = Get-AzureADDirectorySettingTemplate | Where-object {$_.displayname -eq "group.unified"}
    $settingsCopy = $template.CreateDirectorySetting()
    New-AzureADDirectorySetting -DirectorySetting $settingsCopy
    $settingsObjectID = (Get-AzureADDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).id
}

$settingsCopy = Get-AzureADDirectorySetting -Id $settingsObjectID

$settingsCopy["EnableGroupCreation"] = $False
$settingsCopy["GroupCreationAllowedGroupId"] = $Null

Set-AzureADDirectorySetting -Id $settingsObjectID -DirectorySetting $settingsCopy

(Get-AzureADDirectorySetting -Id $settingsObjectID).Values
```

{% hint style="warning" %}
**Please note!**  
Changes can take 30 minutes or more to take effect.
{% endhint %}

## Verify Changes

To verify that groups, and thus workspaces that rely on groups, cannot be created, do the following:
* **Open Microsoft Teams app**
* **Click Teams**
* **Click Join or create a team option** at the bottom of the teams' list

The **Build a team from scratch** option is no longer available.

## Additional information

You can find additional information about this topic in the [following Microsoft's article](https://docs.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups?view=o365-worldwide).