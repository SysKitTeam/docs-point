---
description: This article describes improvements and bug fixes in Syskit Point version 19.0.2.
---

# Syskit Point 19.0.2

**Syskit Point 19.0.2** is a minor release that comes with several improvements and important bug fixes. 

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 19.0.2
**Build number:** 2360
**Release date:** May 25, 2021

## Improvements & Bug Fixes

* **Improved how Syskit Point handles ignored users and security groups**. Such users and groups are now hidden from various screens within Syskit Point, most notably the Users Overview screen, Permissions Matrix report, and Change Admins action dialog.

* **Fixed an issue** with Syskit Point upgrade. **After upgrading from version 18.0.1. and earlier to version 19.0.1. and later**, the User sync would result in the following error: `The procedure "GetAllPrincipals" has no parameter named "@PrincipalTypes.` 
Additionally, the Users overview report failed to generate. The issues are now resolved.
**Please note! Users who upgraded from version 18.1.0 to version 19.0.1 and later were not affected by the issue.**

* **Fixed an issue** where changing the Audit Index location would result in an `Internal Server Error.`

* **Fixed a bug** where the **Policies Applied column** was not correctly exported to the excel file when exporting the Sites overview report.

