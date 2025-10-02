---
description: This article describes improvements and bug fixes in Syskit Point version 18.2.
---

# Syskit Point 18.2

**Syskit Point 18.2** is a minor release that comes with important bug fixes. 

**Product version:** 18.2.0  
**Build number:** 1874  
**Release date:** Mar 31, 2021

## Improvements & Bug Fixes

* **Improved how Syskit Point discovers SharePoint sites!** Syskit Point now better handles sites that are discovered to not have all expected site properties defined. Before, the discovery of such sites resulted in duplicate entries in the Syskit Point database, which would eventually lead to Syskit Point performance degradation.  
* **The file size limit of 2MB for scheduled reports uploaded to SharePoint document libraries is removed!** Before, when Syskit Point tried to upload scheduled reports larger than 2MB to the document library, the following error would appear:
`The request message is too big. The server does not allow messages larger than 2097152 bytes.`
The upload of larger files now completes without error.
* **Fixed an issue with alerts caused by changes in Microsoft's audit log format.** As a result, Microsoft Teams & Groups alerts in Syskit Point failed to detect membership changes and other activities performed on selected Microsoft Teams or Microsoft 365 groups.
* **Fixed an issue** where Syskit Point erroneously displayed assigned licenses for deleted users.