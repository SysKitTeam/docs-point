---
description: This article lists improvements and bug fixes in Syskit Point version 2026.1.133
---

# Syskit Point 2026.1.133

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.1.133

**Build number:** XX

**Release date:** March 24, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.1.130](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-1-130-26%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).
   

## Improvements & Bug Fixes

* **Improvements made to License reports.**
  * The **Inactive Users with Assigned Licenses** report has been renamed to **Licenses Assigned to Inactive Users** to better reflect the generated report.
  * In the License Distribution report, the **Inactive Users with Assigned Licenses** column has been renamed to **Licenses Assigned to Inactive Users** for improved clarity.
  * **New columns added** to reports: 
    * **Assignment Type** - shows how the license is assigned to the user (Direct, Group, On-Prem Group, Dynamic).
    * **Assigned Group** - shows the specific group through which the license is assigned.
  * Replaced the *Total Annual Cost* with *Annual Cost* in reports to better reflect your potential savings.
  * Updated tiles to show only **paid licenses** for assigned, unassigned, active, and inactive users.
  * The Remove License action now supports licenses assigned directly, through Entra ID security groups, and through on-premises Active Directory groups. 
    * For on-premises groups, you are required to have the Syskit Point On-Prem Agent, a separate service that syncs data between Syskit Point and your local Active Directory.\
    [Contact us to set up the Syskit Point On-Prem Agent in your environment.](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button)

* **Improvements made to Reports.**
  * **Added the Workspace Type column** to the Orphaned Workspaces report. 
    * The column is hidden by default and can be selected from the column chooser. 
  * **Added a new column** to the Users with Privileged Access report: **Company**
    * This column is not visible by default and can be enabled from the column chooser.

* **Improvements made to the Risky Workspaces view on the Security & Compliance screen**.
  * Added the Request Workspace Review action, which allows admins to trigger a Workspace Review directly from the Risky Workspaces view. 
  * If no Workspace Review policy is assigned to the workspace, clicking the actions opens a confirmation modal that asks you to select a workspace review policy from the dropdown menu before initiating a review. 

* **Added a Delete Files action** to the Storage Metrics report.
  * You can now remove unnecessary files and reduce SharePoint storage usage, while files with assigned retention labels remain protected.
  * You can also access a site's recycle bin from the Site Storage Metrics report.
  * [Take a look at this article for more details.](../../../storage-management/free-up-storage.md#delete-files)

* **Fixed an issue** where Workspace Reviews did not work for private and shared channels. 

* **Improved the stability of Teams provisioning.** 
  * Resolved an issue where provisioning could occasionally fail when creating Microsoft 365 Groups. The process is now more reliable.

* **Added the exact search option** to the People Picker component. 
  * When a search term is entered within quotation marks (" "), the People Picker returns only matches that exactly fit the specified value.

* **Fixed an issue** in Settings > General > Governance-Excluded Users where adding more than 15 users in the People Picker caused the field to clear after clicking Save, resulting in none of the selected users being retained.

* **Fixed an issue** where OneDrive audit events were collected even when OneDrive Autodiscovery was disabled.
  * When OneDrive Autodiscovery is turned off in the General Settings, OneDrive activity is no longer collected for audit data. 

* **Fixed an issue** that caused Autodiscover to sync for a long time or result in a timeout. 

* **Fixed an issue** in the Teams & Groups Overview where drilling down to the Workspace Details screen and selecting the General Channel could cause the Content tile to display a *Bad Request* error instead of showing the channel content.


* **Fixed an issue** with user discovery that caused the following error to occur during the permissions sync: 

  ```
   System.ArgumentException: principal with id <ID> not found
   at SysKit.Point.SPO.Model.BaseClientObject.
  ```

* **Fixed a bug** that caused some folders to go missing after sync due to the following errors when processing sharing links: 

  ```
  System.InvalidOperationException: There is an error in XML document (1, 55567). 
  at System.Xml.Serialization.XmlSerializer.Deserialize(XmlReader xmlReader, String encodingStyle, XmlDeserializationEvents events)
  ```

* **Fixed a bug** that caused the Remove Sharing Links action to fail when completed by a Point Admin without Microsoft 365 admin permissions, with the following error:

  ```
  System.ArgumentNullException: Value cannot be null. (Parameter 'input')
  at System.ArgumentNullException.Throw(String paramName)
  at System.Guid.Parse(String input) 
  System.ArgumentNullException: Value cannot be null. (Parameter 'input')
  ```

* **Fixed an issue** where Power Platform Connections would fail to save successfully and result in the following error:

  ```
  Error while saving connections batch to database for environment Id - {EnvironmentId} Microsoft.Data.SqlClient.SqlException: String or binary data would be truncated in table 'tempdb.dbo.#ABF50E8E', column 'DisplayName'.
  ```

* **Fixed an issue** when generating the Sharing Links report and resolving the Workspace Review All Shared Content step, which caused the following timeout error:
  ```
  Microsoft.Data.SqlClient.SqlException: Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.
  ```


* **Various improvements, including UX and UI fixes, are available.**
