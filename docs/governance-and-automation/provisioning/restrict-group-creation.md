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
**Restricting group creation affects all services that leverage groups for access** - Outlook, SharePoint, Viva Engage, Microsoft Teams, Planner, Project for the web (roadmap)
However, **Office 365 Global Administrators will be able to create groups via various admin centers**, for example, Microsoft 365 admin center.
{% endhint %}

## Requirements

Note the following requirements:
* The **admin who configures the group creation settings needs the Microsoft Entra ID Premium license or Microsoft Entra ID Basic EDU license assigned** to them
* [Microsoft Graph PowerShell Beta module](https://learn.microsoft.com/en-us/powershell/microsoftgraph/installation?view=graph-powershell-1.0) needs to be installed

## PowerShell Command

To restrict group creation:
* **Open a PowerShell window**
* **Copy & paste, and run the PowerShell script given below**
* **Sign in with Global Administrator account when prompted**

```
Import-Module Microsoft.Graph.Beta.Identity.DirectoryManagement
Import-Module Microsoft.Graph.Beta.Groups

Connect-MgGraph -Scopes "Directory.ReadWrite.All", "Group.Read.All"

$AllowGroupCreation = "False"

$settingsObjectID = (Get-MgBetaDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).id

if(!$settingsObjectID)
{
    $params = @{
	  templateId = "62375ab9-6b52-47ed-826b-58e47e0e304b"
	  values = @(
		    @{
			       name = "EnableMSStandardBlockedWords"
			       value = "true"
		     }
	 	     )
	     }
	
    New-MgBetaDirectorySetting -BodyParameter $params
	
    $settingsObjectID = (Get-MgBetaDirectorySetting | Where-object -Property Displayname -Value "Group.Unified" -EQ).Id
}

$params = @{
	templateId = "62375ab9-6b52-47ed-826b-58e47e0e304b"
	values = @(
		@{
			name = "EnableGroupCreation"
			value = $AllowGroupCreation
		}
	)
}

Update-MgBetaDirectorySetting -DirectorySettingId $settingsObjectID -BodyParameter $params

(Get-MgBetaDirectorySetting -DirectorySettingId $settingsObjectID).Values
```

{% hint style="warning" %}
**Please note!**  
Changes can take 30 minutes or more to take effect.
{% endhint %}

## Verify Changes

To verify that groups, and thus workspaces that rely on groups, cannot be created, do the following:
* **Open Microsoft Teams app**
* **Click Teams**
* **Click the Create and join teams and channels** > **Create team** action located above the _Your Teams_ list

Create a team **From template**, including **From Scratch**, and **From another team** options are disabled.

## Additional information

You can find additional information about this topic in the [following Microsoft's article](https://docs.microsoft.com/en-us/microsoft-365/solutions/manage-creation-of-groups?view=o365-worldwide).