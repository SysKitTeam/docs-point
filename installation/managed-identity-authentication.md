---
description: This article explains how to upgrade your authentication to Managed Identity. 
---

# Managed Identity Authentication

Instead of using SQL authentication, you are now able to **use Managed Identity authentication with SysKit Point**.

In order to enable Managed Identity authentication to access data in the SysKit Point, complete the following:

* **Navigate to [Azure Portal](https://portal.azure.com/) and open the SysKit Point resource group**
* **Click the Managed Identity resource**; located under Resources and marked as Managed Identity in the Type column
* **Copy the Client ID**; located on the right side of the Managed Identity resource screen 
   * This will be needed later, so store the copied text somewhere it will be easy to get it later
* Return back to the **SysKit Point resource group** page
* **Click the Key Vault resource**; located under Resources and marked as Key Vault in the Type column
* **Select the Access Policies option**; located on the left side of the screen
* Click the **Create** button at the top of the screen
  * This will provide the option to **Create an access policy**
* Under **Configure from a template** select the **Secret Management** option and click on **Next**
* For **Find Principal select the Admin** that is completing the Managed Identity authentication process and click **Next**
* The Application section can be skipped, so **select Next**
* Under **Review + Create, select the principal name** of the person that was selected in the previous step
* **Click Create** when finished

When this is set up, **the Access Policies screen should now show the name of the person selected** during the creation process under the **User** section. If this was completed successfully, proceed to the following steps:

* On the Key Vault resource, **select Netwoking**; located on the left side under Settings
* Under Firewall, **click Add your client IP address** and **paste your public IP address** here
* **Click Apply** when finished
* **Select Secrets**; located on the left side under Objects
* **Select the PointDatabase option** from the list of available names
* On the PointDatabase screen, **click the New Version button**
* On the form that opens, you will need to enter the following text as **Secret value**

 `Data Source=tcp:{servername}.database.windows.net,1433;Initial Catalog=SysKitPointDB;User Id="{managed identity client id}";Authentication=Active Directory Managed Identity;`

{% hint style="warning" %}
**IMPORTANT!**  
This part of the text: User Id="{**managed identity client id**} needs to be changed. The Client ID you previously copied from your Managed Identity resource should be placed where the text says **managed identity client id**. 
{% endhint %}

* When the edited text has been entered, **click Create**

After successfully setting this up, the next step will be removing the information you've entered. 
* **Under Networking, remove your IP address**
  * If this was successfully done, when clicking on Secret, the page should be empty
* On **Access Policies, select the created User and click delete**; when asked to confirm, click delete again

The last steps to finish setting up your Managed Identity authentication are the following:

* **Navigate back to the SysKit Point resource group**
* **Find and open the SQL Server resource**; this can be located under Rescources, with the **Type listed as SQL server**
* Once there, **click the Azure Active Directory**; located on the left side under Settings
* **Click the Set Admin** button at the top of the screen
* **Choose the Managed Identity** that was used in the previous steps
* **Click Save** to complete (ne vidim taj screen pa nisam sigurna da li je to ponudena opcija?)

Once all of these steps have been successfully completed, the only thing left to do for the Managed Identity authentication to be enabled is to **Restart Application Services**. 