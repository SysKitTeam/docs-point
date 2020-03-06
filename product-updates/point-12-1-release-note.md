---
description: >-
  This article describes the new features and improvements in SysKit Point
  version 12.1.
---

# SysKit Point 12.1

Although Valentine’s day is behind us, we want to share some love by adding an extremely lovable feature to the existing SysKit Point activity love triangle. Scroll down and see what’s new in the brand-new version of SysKit Point.

[Try SysKit Point trial](https://syskit.com/products/point/download/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 12.1.0  
**Build number:** 479  
**Release date:** Mar 5, 2020

## Features

* **SysKit Point now supports Microsoft Teams activity tracking**! Microsoft Teams chat activity tracking was added to the SharePoint, Exchange, and Yammer trio supported from version 12. [Learn how to configure](../common-tasks/microsoft-teams-activity.md) this new capability, and find unused Microsoft Teams in your Office 365 environment.

## Improvements & Bug Fixes

* Fixed a bug where SysKit Point Configuration Wizard would result in the following exception, in case SysKit Point was installed on Windows 8 or Windows Server 2012 operating systems: `InnerException: System.InvalidCastException: Unable to cast COM object of type 'System.__ComObject' to interface type 'CERTENROLLLib.CX509PrivateKey'. This operation failed because the QueryInterface call on the COM component for the interface with IID '{728AB362-217D-11DA-B2A4-000E7BBB2B09}' failed due to the following error: No such interface supported (Exception from HRESULT: 0x80004002 (E_NOINTERFACE)).`
* Fixed a bug where generating permissions reports – Permissions Matrix report, Externally Shared Content report, or Permissions tile on the Site Details screen – with dynamic O365 groups would throw a Bad Request error.
* Fixed a bug with inactive content where all Office 365 Groups would appear inactive if viewed on the Microsoft Teams & Groups overview screen. Also, fixed a bug where the number of inactive Sites shown in the Sites overview screen differed from the number shown in the Inactive Content report.
* Fixed a bug where the Content report inaccurately showed the "There is no data to show for this report" message when accessed from the Analytics and Usage tile on the Group details screen.
* Fixed an issue where the Company Administrator user couldn’t be directly added to the SysKit Point Admin role, in case he was already assigned to the role through group membership.
* Fixed a bug where the Change Admins action would fail in case there was a deleted user among Site admins.
* Various UX/UI improvements.

