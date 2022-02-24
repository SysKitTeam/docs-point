---
description: This article explains how to configure Azure resources to enable diagnostic logs export in SysKit Point.
---

# Setup Diagnostic Logs Export

SysKit Point allows you to export diagnostics logs saved in Application Insights. They contain data that helps SysKit Point support team to resolve issues you might be facing when using SysKit Point. 

{% hint style="warning" %}
**Please note!**
If you are a new customer and deployed **SysKit Point version 2022.2.2 or later**, **all requirements for diagnostic logs export are set up for you automatically**.
**Use the steps described in this article if you are an existing customer upgrading from a previous version to manually set up diagnostic logs export in SysKit Point**.


You will need to set up the following in SysKit Point Azure resource group:
* **Enable user access to key vault**
* **Create a new key vault secret**
* **Remove user access from the key vault**
* **Assign a role to the user-assigned managed identity**

{% hint style="warning" %}
**Please note!**
To perform changes described in this article, you need to have the owner role assigned on SysKit Point resource group.
{% endhint %}
 
## Enable User Access to Key Vault

Before you can create a new key vault secret, enable access to the key vault:
* Open [Azure portal](https://portal.azure.com/) and open resource group where SysKit Point is deployed
* On the resource group **Overview screen find and click the Key Vault resource**
* **Click Access policies (1)** in the Settings section
* **Click Add Access Policy (2)**; the Add access policy screen opens

![Key Vault - Add Access Policy link](../.gitbook/assets/setup-diagnostic-logs-export_add-access-policy.png)

On the next screen:
* **Select the Secret Management option (1)** in the Configure from template drop-down
* **Click the None selected link (2)** under Select principal
* **Search and find the currently signed-in user (3) and click it**; the **user is shown in the Selected items section (4)**
* **Click Select (5)**
* **Click Add (6) on the Add access policy screen**; the initial Access Policy screen opens
* **Click Save** on the Access policies screen to save your changes

![Key Vault - Add Access Policy screen](../.gitbook/assets/setup-diagnostic-logs-export_select-principal.png)

2.	Allow your current IP address to access the key vault
a.	In the left menu navigate to Networking under the Settings section
b.	Enter your current public IP address into the IP address or CIDR input box
c.	Click on Save at the top of the screen
3.	Wait for a short amount of time. It takes some time for these changes to take effect
 
 
 
## Create a New Key Vault Secret
1.	Navigate to SysKit Point resource group 
2.	Open the Application Insights resource
3.	In the left menu navigate to API Access under the Configure section
4.	Copy the Application ID from the top of the page
5.	Navigate to SysKit Point resource group 
6.	Open the Key vault resource
7.	In the left menu navigate to Secrets under the Settings section
8.	Click on Generate/Import
9.	Under Name enter the following string: AppInsightsAppId
10.	Under Value paste the Application ID that you have copied earlier
11.	Click on Create at the bottom of the screen
12.	You can remove added access policy and IP address rule if you want
 
## Remove User Access from Key Vault
1.	Remove the access policy for the current user
a.	In the left menu navigate to Access policies under the Settings section
b.	Find your user and click on “Delete” at the far right of the screen
c.	Click on Save
2.	Remove access from your current IP address
a.	In the left menu navigate to Networking under the Settings section
b.	Find your IP address under IP address or CIDR and click on the delete icon (garbage bin) at the far right of the screen
c.	Click on Save
 
## Assig a Role to the User-Assigned Managed Identity
1.	Navigate to SysKit Point resource group 
2.	In the left menu navigate to Access control (IAM)
3.	Click on Add > Add role assignment
4.	On the Role tab search for Log Analytics Reader
5.	Select Log Analytics Reader
6.	Navigate to the Members tab
7.	Under Assign access to select Managed identity
8.	Under Members click on Select member
9.	In the popup window under Managed identity select User-assigned managed identity
10.	Click on the identity that appeared
11.	Click on Select at the bottom of the screen
12.	Click on Review + assign at the bottom of the screen
13.	Click on Review + assign at the bottom of the screen again
14.	 Wait for the role to be assigned
