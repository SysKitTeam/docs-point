---
description:  This article describes how you can access the audit log for all changes made in the Settings of Syskit Point. 
---

# Audit for Settings

Syskit Point logs the selection you make in Settings as well as any changes done after the initual set up. The Audit Log for your Point Settings can be accessed through  application insights.

{% hint style="information" %}
**Please note!** No additional configuration in Syskit Point is needed to log the changes in Settings. This is done automatically. 
{% endhint %}

In this article you can find information on:

* Accessing Application Insights
* Query Logs 
* List of Common Properties in Logs

 
![Syskit Point - Storage Management Set Up](../.gitbook/assets/configure-storage-management-settings.png)

## Accessing Application Insights

To access Application Insights for Syskit Point, on the [Microsoft Azure portal](https://portal.azure.com/#home) select the **Syskit Point resource group**.

* Once the space where you can **enter you query opens**, type (or select) **the following values (1)**:

  * customEvents
  * | where name == "SettingsChanged"

* When you've entered the above value, press the **Run (2)** button to execute your query. 

* In the **Results (3)** section you'll find information about the actions take in the Settings of Syskit Point.

* If no actions are shown in the results, try to adjust and increase the **time range (4)** period and run the query again. 

* Clicking **customDimensions** gives you more details about the action taken.

![Application Insights - Run Query](../.gitbook/assets/configure-storage-management-settings.png)


## List of Common Properties in Logs

category
 * explain category=>propertyPath relation

newValue
* This shows whether there were any new changes made

oldValue
* This shows whether any old values were changed

propertyName

sessionId
* This show the ID for the 

tenantGuid
* This show the tenant 

tenantName
* This show the name of the tenant

userAgent
* This shows the browser and operating system used

userGuid
* This shows the 

userIp
* This shows the IP address for the individual that made the changes

userName
* This show the e-mail for the individual that made the changes


## Query Logs 

If you followed the directions on how to access the Application Insights for Syskit Point, you'll know how to search for the Settings audit logs. Here are a few examples of how the query log might look. 

{% hint style="information" %}
**Please note!** When reading the query log, please note the following:
* with oldValue, null stands for Created
* with newValue, null stands for Deleted, list changes, etc.
{% endhint %}

### **Select Initial Logo**

Let's say you are settings up your initial Logo in the Appearance section of Syskit Point Settings. 

Here is an example of how that query log might look:

* category
  * Appearance
* newValue
  * {"primaryColor":"#000000","accentColor":"#ff0000","logoUrl":"https://assets.syskit.com/point/email/customerlogos/6b79ced7-d396-45eb-be4a-d34f917c66f6.png","bannerUrl":"https://assets.syskit.com/point/email/customerlogos/75fe84f0-13eb-42be-9811-5576fcb4969c.png"}
* accentColor
  * #ff0000
* logoUrl
  * https://assets.syskit.com/point/email/customerlogos/6b79ced7-d396-45eb-be4a-d34f917c66f6.png
* primaryColor
  * #000000
* oldValue
  * null
* sessionId
  * UtQ87S3OF0WLMsHKW287AA
* tenantGuid
  * 73474674-ddd1-4561-b6e2-4e71db845e09
* tenantName
  * Contoso
* userAgent
  * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0
* userGuid
  * 7ca086e7-1dae-4604-bbeb-8ed1a41e0fc5
* userIp
  * 2.34.157.86
* userName
  * admin@contoso.onmicrosoft.com


### **Upload New Logo**

If, for example, your company goes through a rebrand, you'll need to replace your old logo with the new one. Here's how that action might reflect in the query log:

* category
  * Appearance
* newValue
  * https://assets.syskit.com/point/email/customerlogos/1955aea7-87d7-494a-8e82-e14aa846f42c.png
* oldValue
  * https://assets.syskit.com/point/email/customerlogos/6b79ced7-d396-45eb-be4a-d34f917c66f6.png
* propertyName
* LogoUrl
* sessionId
  * UtQ87S3OF0WLMsHKW287AA
* tenantGuid
  * 73474674-ddd1-4561-b6e2-4e71db845e09
* tenantName
  * Contoso
* userAgent
  * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0
* userGuid
  * 7ca086e7-1dae-4604-bbeb-8ed1a41e0fc5
* userIp
  *  2.34.157.86
* userName
  * admin@contoso.onmicrosoft.com

### **Remove Logo**

Maybe you decide against personalizing your Point experience and want to remove your Logo from the Syskit Point settings. This is what is likely to show up in your query log:

* category
  * Appearance
* newValue
  * null
* oldValue
  * https://assets.syskit.com/point/email/customerlogos/131512c0-f8b2-4534-b735-d50562530270.png
* propertyName
* LogoUrl
* sessionId
  * 7DD5j1GqwUS3MBPvrtMVAA
* tenantGuid
  * 73474674-ddd1-4561-b6e2-4e71db845e09
* tenantName
  * Contoso
* userAgent
  * Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 OPR/111.0.0.0
* userGuid
  * 7ca086e7-1dae-4604-bbeb-8ed1a41e0fc5
* userIp
  * 2.34.157.86
* userName
  * admin@contoso.onmicrosoft.com




## Related Articles

* [Configure Your Environment for Storage Management](../configuration/configure-point-for-storage-management.md)
* [Free Up Storage](../storage-management/free-up-storage.md)
* [Configure Tenant Storage Limit Policy](../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Tenant Storage Security & Compliance Check](../governance-and-automation/security-compliance-checks/tenant-storage.md)
* [Resolve Tenant Storage Limit Task](../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Metrics Report](../storage-management/storage-reports.md)
* [Site Storage Metrics Report](../storage-management/storage-reports.md#site-storage-metrics)
* [File Storage Details Report](../storage-management/storage-reports.md#file-storage-details)
