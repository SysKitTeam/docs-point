---
description: This article explains how to enable Power BI data collection for SysKit Point.
---

# Enable Power BI Data Collection

Enabling Power BI data collection for SysKit Point requires initual set up through your Microsoft 365 Azure Portal. 

## Create a Power BI Security Group 

 * **Click the Azure Active Directory**; on the Home page of your Azure portal. 
 * **Select Groups**; located under the Manage section on the left side of the screen. Select Groups
 * **Click the New Group button** on the top bar. 

Fill out the following details when creating the new group:

 * Under **Group Type**, select **Security**
 * Name the group **PowerBI Group** or similar
 * For the **Group Description** list the purpose of the new group
 * Set the **toggle as NO** when asked whether Azure AD roles can be assigned to the group
 * Set the Membership Type as **Assigned**
 * Select the **Owners and Members** of the Group
   * Make sure the **SysKit Point Power Platform application** is selected as a member for this group

Once created the group can be found by going to **Azure Active Directory > Groups**.

Enter the name of the Power BI security group into **Search** to filter the list by title or scroll down. 

## Configure Power BI Tenant Settings

The next step is to configure Power BI tenant settings which can be done in the following way:

 * Open the **Power BI admin portal** and log in.
 * Under **Tenant settings**, scroll down to the **Admin API settings** section. Once there, make the following changes:
   * Set the toggle as **Enabled** to **Allow service principals to use read-only Power BI admin APIs**
     * Select **Apply to: Specific security groups**
     * **Enter the name** of the Power BI security group that was created
     * Click **Apply**
   * Set the toggle as **Enabled** to **Enhance admin APIs responses with detailed metadata**
     * Select **Apply to: Specific security groups**
     * **Enter the name** of the Power BI security group that was created
     * Click **Apply**

{% hint style="warning" %}
**Please note!**  
It can take **up to 15 minutes** for these changes to apply. {% endhint %}