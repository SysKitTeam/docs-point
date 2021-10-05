---
description: This article provides a list of permission changes in SysKit Point app registrations through versions.
---

SysKit Point is constantly evolving and adding new features. Sometimes for these new features to work we require additional consent from a Global administrator in your organization. This might be needed after you upgraded to the latest version of SysKit Point.

## How to tell if Global Admin reconsent is needed after upgrade?
If the latest SysKit Point version has some new permissions requirements to which your Global Administrator has not consented before you will get a notification at the bottom of the Welcome Home screen after your first login to the new version:

**Global Admin Reconsent Needed** - Grant permissions to SysKit Point to use the latest feature.

To resolve this and ensure all the new feature work properly ask you Global Administrator to login to SysKit Point and click **Reconsent** on the shown notification.


# Change Log
Depending on which version you are upgrading to the latest SysKit Point version below you can find the list of changes in permissions requested and which features depend on them.

## SysKit Point 21

**The following permissions were added**:

| App Registration | Permissions | Type | Reason |
| :--- | :--- | :--- | :--- |
| SysKit Point Client | Read all users' relevant people lists | Delegated | Allows SysKit Point to display users' relevant people lists in People Picker within SysKit Point Teams app. |
| SysKit Point Service | Read files in all site collections. | Application | Enables SysKit Point to perform partial site syncs, containing changed files only.  |
| SysKit Point Service | Read all published labels and label policies for an organization. | Application | Enables SysKit Point to sync published sensitivity labels and store them in the database. | 
