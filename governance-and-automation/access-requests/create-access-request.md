---
description: This article explains how to create an Access Request policy in SysKit Point. 
---

#  Access Request Policy

To create the **Access Request policy**, open SysKit point and go to **Settings**. 

Under Governance, select **Automated Workflows**. 

## Create Access Request Policy

To create the Access Request policy, complete the following steps:
 * **Click the Create New Policy(1) button** located on the left side under the Automated Workflows title.
   * A pop-up screen will appear, prompting you to select which policy to create.

* **Select Access Requests(2)** from the available list of policies.

Depending on the approval processes required for your Workspaces, the following information needs to be specified:

* **Create the new policies name**; depending on the type of Access Request policy that will be created

* Select the **preferred approval process** from the available list:
     * Manager approval
     * Manager and admin approval
     * Admin approval
     * Automatically Approve
     * Owner approval
* Alternatively, you can also create a new approval process if the above does not suit a specific Workspaces needs:
  * **Click Create New**; located under the approval process dropdown menu
  * Enter the name of your new approval process
  * Select between the single or multiple-stage approval process:
    * 1-stage process
    * 2-stage process
    * 3-stage process
  * Depending on whether you selected the single or multiple-stage process, you will need to be complete the below information:
    * Select who approves the requested workspace:
      * **Manager of Requester**; you are also able to **add additional information** in case the requester has no manager by entering details in the section below
      * **Workspace Owner**; you are also able to **add additional information** in case the workspace has no owner by entering details in the section below
      * **SysKit Point Administrators**
      * **Custom Recipients**; for this option, you will need to enter the desired recipients' details in the section below

* After setting the desired approval process, you need to specify the level of access; users can request to join as **Members, Owners**, or both. 
  * This can be set for the following workspaces: 
    * Microsoft 365 Groups/Microsoft Teams
    * SharePoint Sites
    * Distribution Lists
    * Security Groups
    * Mail-Enabled Security Groups

Once you complete the above steps, **click Save**; this opens a pop-up stating that your **policy has been successfully created**. The new policy can now be found in the **list of all policies created in your environment**. 
  * The pop-up also allows clicking on Apply Policy and being taken to the Mange Policies screen directly. 

{% hint style="information" %}
To enforce the new policy, it will need to be **applied to resources in your environment**. Take a look at the [Apply Access Request article](https://www.syskit.com/products/point/pricing/) for instructions on how to apply your policy.
{% endhint %}
