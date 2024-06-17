---
description: This article explains how to create and apply Storage Versioning Limits in Syskit Point.
---

# Storage Versioning Limits  

Having to manually keep with the state of the files in your workspaces can be unecessarily time consuming. Now, you can **set up versioning limits for your storage**, and automatically performs actions based on the limit settings. 

**Storage Versioning Limits help you limit the number of file versions kept in SharePoint document libraries**. File versions are deleted after exceeding the number of versions you set, the time period that you set, or both. 

## Create Storage Versioning Limits

First, go to the **Settings** of your Syskit Point. Click on **Storage Management (1)** and navigate to the **Storage Versioning Limits (2)** section.

There are three default limits set up:
* **Automatic (Default Limit) (3)** - automatically applies optimal storage of versions based on their age and restore probability
* **Inherit Tenant (Default Limit) (4)** - inherits global tenant limit
  * The Automatic and Inherit Tenant limits cannot be edited. 
* **Manual (Default Limit) (5)** - Manual cleanup that runs daily with 100 count limit and 180 day(s) time limit 
  * The Manual limit can be **edited (6)** to adjust the count and time limits based on your personal preferences. 

To create a new storage versioning limit, click the **Create New Limit (6)** button. 

![Storage Versioning Limits - Limits](../.gitbook/assets/storage-versioning-limits-new-limit.png)

The Create New Manual Storage Limit popup opens. There, you can select:
* **Limit Name (1)** - here, you should enter the name for the versioning limit 
* **Count Limit (2)** - select the checkbox if you want to place a count limit on your workspaces
  * Select the **count limit (3)** you want to place as the maximum limit for the number of versions a file can have
  * Once a file exceeds the number of versions you place, the oldest versions start getting removed
* **Time Limit (4)** - select the checkbox if you want to place a time limit on your workspaces
  * Select the **time limit (5)** you want to place as the maximum limit for how old a version can be prior to getting removed
  * File versions older than the time limit you set get removed once the threshold you set is passed. 
* **Click Save (6)** to finalize your selection and create the new storage versioning limit. 

![Storage Versioning Limits - Create New](../.gitbook/assets/storage-versioning-limits-new-limit-create.png)

 
{% hint style="information" %}
**Please note** that the **manual storage limit runs on a daily basis**.  
{% endhint %}

## Apply Storage Versioning Limits

Once you have created your storage versioning limits, **you can apply them manually** by selecting the workspaces yourself or **automatically** by creating a rule that continuously applies limits to existing and new workspaces that get created.

### **Apply Automatically with Rules**

* Selecting this redirects you to **Rules**, where you can create rules that will continually apply the limit to existing and new workspaces
* [For details on how to create Rules, take a look at this article.](../governance-and-automation/automated-workflows/policy-automation.md)


### **Manually Apply Limits**

Selecting this opens the Storage Metrics report where you can:
* **Set Version Limit (Tenant-Wide)(1)** by clicking the button on the right side of the screen
  * **Clicking Set Version** Limit opens the pop-up where you can set the file version limit on the whole tenant for new document libraries
  * The options available are Automatic & Manual  
    * **Selecting Automatic (3)** means that file versions are deleted based on their activity and age, with the algorith keeping the most valuable versions
    * **Selecting Manual (2)** means that file versions are deleted after exceeding the set number of versions and/or after a set period of time, based on the metrics you previously set 

![Storage Versioning Limits - Create New](../.gitbook/assets/storage-versioning-limits-new-limit-create.png)

* **Set Version Limit** on one or more sites by **select one or more workspaces (1)**
* Click the **Set Version Limit (2)** button on the right side
* This opens the Set Version Limit popup where you can set the file version limit on the selected workspace(s) for new document libraries