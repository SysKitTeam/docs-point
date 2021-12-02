---
description: This article provides a list of permission changes in SysKit Point app registrations through versions.
---

SysKit Point is constantly evolving and adding new features. Sometimes, we require additional consent from a Global administrator in your organization for these new features to work. This might be needed after you upgraded to the latest version of SysKit Point.

## How To Tell if Global Admin Re-Consent Is Needed After the Upgrade?
If the latest SysKit Point version has some new permissions requirements to which your Global Administrator has not consented before, you will get a notification at the bottom of the Welcome Home screen after your first sign in to the new version:

**Global Admin Reconsent Needed** - Grant permissions to SysKit Point to use the latest feature.

To resolve this and ensure all the new features work properly, ask your Global Administrator to sign in to SysKit Point and click **Reconsent (1)** on the shown notification.

![Home Screen - Reconsent](../.gitbook/assets/permission-requirements-change-log_reconsent.png)


# Change Log
Depending on which version you are upgrading to, below you can find the list of changes in permissions requested and which features depend on them.

## SysKit Point 2021.10

**The following app registrations were added**:
* **SysKit Point Permissions Loader** - used for optimized data sync of SharePoint sites and OneDrive
* **SysKit Point API** - used for third-party app integration to get SysKit Point data and use it in other business applications and web services; **currently in Beta stage**; by default, the app registration has **no permissions added**

**The following permissions were added**:

| App Registration | Permissions | Type | Reason |
| :--- | :--- | :--- | :--- |
| SysKit Point Client | Read all users' relevant people lists | Delegated | Allows SysKit Point to display users' relevant people lists in People Picker within SysKit Point Teams app. |
| SysKit Point Service | Read files in all site collections | Application | Enables SysKit Point to perform partial site syncs, containing changed files only.  |
| SysKit Point Service | Read all published labels and label policies for an organization | Application | Enables SysKit Point to sync published sensitivity labels and store them in the database. | 
| SysKit Point Permissions Loader | Uses the same set of permissions as SysKit Point Service App Registration  | Application | Used for optimized SharePoint and OneDrive sync. |
| SysKit Point API | No permissions added  | - | Used for third-party app integration. |

[To see the complete list of used App Registrations and assigned permissions, navigate to the Permission Requirements article](permission-requirements.md).

