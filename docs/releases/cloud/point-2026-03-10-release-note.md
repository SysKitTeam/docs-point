---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.132.4
---

# March 10, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.
   
## Improvements & Bug Fixes 

* **Improvements made to Group-Based Licensing.**
  * The Remove License action now supports licenses assigned directly, through Entra ID security groups, and through on-premises Active Directory groups. 
    * For on-premises groups, you are required to have the Syskit Point On-Prem Agent, a separate service that syncs data between Syskit Point and your local Active Directory.\
    [Contact us to set up the Syskit Point On-Prem Agent in your environment.](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button)
  * **New columns added** to licenses reports: 
    * Assignment Type - shows how the license is assigned to the user (Direct, Group, On-Prem Group, Dynamic).
    * Assigned Group - shows the specific group through which the license is assigned.

* **Fixed an issue** where Workspace Reviews did not work for private and shared channels. 

* **Fixed an issue** where OneDrive audit events were collected even when OneDrive Autodiscovery was disabled.
  * When OneDrive Autodiscovery is turned off in the General Settings, OneDrive activity is no longer collected for audit data. 

* **Fixed an issue** in Settings > General > Governance-Excluded Users where adding more than 15 users in the People Picker caused the field to clear after clicking Save, resulting in none of the selected users being retained.

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

* **Various improvements, including UX and UI fixes, have been implemented.**