---
description: >-
  This article explains how to enable and  configure the 
  Automated Permissions Review in SysKit Point.
---

# Enable Automated Permissions Review

To use the advantages of Automated Permissions Review, first, you need to enable it and configure the settings in SysKit Point.

{% hint style="warning" %}
**Please note!**
Only users assigned to the **SysKit Point Admin** role can access and configure Settings in SysKit Point.  
{% endhint %}

Go to **Settings** &gt; **Governance** &gt; **Permissions Review** screen.

The permission review is depending on two additional components that you need to set up: 
* **E-mail**, and
* **SysKit Point Collaborators** role 
Initially, you may find the Permissions Review settings screen displaying the following warnings: 

![Settings - Permissions Review screen](../.gitbook/assets/enable-automated-permissions-review_permissions-review-settings-screen%20%281%29.png)

Clicking the tiles in the **Additional Actions Required** section redirects to the appropriate settings screen. 

## **E-mail Settings** 

As a part of the automated permissions review process, e-mails are sent to SysKit Point Admin and SysKit Point Collaborator users.
For SysKit Point to be able to send e-mails, you need to configure the sending method. **Exchange Online** and **SMTP**\(Simple Mail Transfer Protocol\) options are available. 

{% hint style="warning" %}
**Please Note!**
E-mail address set up in this section will appear in the **Sent from** field of all e-mails sent from SysKit Point 
{% endhint %}

### Exchange Online Settings 

{% hint style="warning" %}
**Please Note!**
Exchange Online has the sending limit of 10000 e-mails per day. 
{% endhint %}

The Exchange Online method enables you to use an existing Exchange account in your Office 365 tenant to send e-mails from SysKit Point.
To do so, enter a valid e-mail address in the **Sent from** field. 
By default, the **Save to sent items folder** option is turned on, meaning that all e-mails sent from SysKit Point will be stored in the **Sent** mailbox folder of the entered Exchange account.

![Exchange Online e-mail Settings screen](../.gitbook/assets/enable-automated-permissions-review_exchange-online-e-mail-settings-screen.png)

Click the **Send test e-mail** button to check if the entered e-mail address is working properly. The **Sent test e-mail** dialog opens. Enter the e-mail address to which you want to send the test e-mail. After a moment, you should receive an e-mail like the one pictured below.

![Test e-mail](../.gitbook/assets/enable-automated-permissions-review_test-e-mail.png)

Click the **Save** button to store your e-mail settings.

### SMTP Settings 

Select the **SMTP method** if you are using an **SMTP** server in your environment. 
Here, you can enter the SMTP properties - **Outgoing Server**, **Port**, **Sent from** e-mail - and choose whether to **Use Encrypted Connection (SSL)** and **Require Authentication**. If the later is turned on, you will have to provide a **Username** and **Password**. 

![SMTP e-mail Settings screen](../.gitbook/assets/enable-automated-permissions-review_smtp-e-mail-settings-screen.png)

You can check if the entered data is correct by **sending a test e-mail**. 

Click the **Save** button once you confirm that the test email was received.

## **Manage Access Settings** 

With the Manage Access screen in the SysKit Point Settings, you have to **enable SysKit Point Collaborators' role** to have access to the application. 

**This role includes all** **Site admins/Team owners** in your environment. For more information, go to this [article](enable-role-based-access.md#what-is-syskit-point-collaborators-role).

![Manage Access Settings screen](../.gitbook/assets/enable-automated-permissions-review_manage-access-settings-screen.png)

## **Permissions Review Settings**

After you set up e-mail and access settings, you can enable automated Permissions Review by marking the checkbox in the **Governance** &gt; **Permissions Review** screen. 

Click on the Save button after enabling this setting so that you can adjust all the parameters. 

### **Customize section** 

First, you have to **define the start date** for the **Permissions Review**. 

![Permissions Review - Customize section](../.gitbook/assets/enable-automated-permissions-review_permissions-review-customize-section.png)

Click on the **calendar icon** and choose the desired date. You can also enter the date manually in the provided field. 

The next thing is to define how often you want to repeat the process of the Permissions Review. The process can be repeated monthly. Choose the number of months and save the changes. 

{% hint style="warning" %}

**Please** **Note!** You can always see the date when the next Permissions Review will start in the Customize section, and you can adjust it according to your preference by changing the settings. 
{% endhint %}

{% hint style="info" %}

**Hint!** Every Permissions Review lasts for ten working days only. 
{% endhint %}

The last option in this section is turned on by default, and it regards the **e-mail reminder** to all the participant

{% hint style="info" %}
**Hint!** As SysKit Point Admin, you can send a manual e-mail reminder to site owners once a day at any time during actual Permissions Review by choosing the action Remind Owners. You can find this action at Governance &gt; Permissions Review details screen. 
{% endhint %}

**You can** **turn off an e-mail reminder at any time** during the Permissions Review if you want to. 

If you want to become familiar with how will the e-mail look like, open the **Preview e-mail**. 

### **Target Selection section** 

In this section, you **have to define** which **sites** need **to be examined by the site owners** in the Permissions Review. 

![Target Selection - Specific Items option](../.gitbook/assets/enable-automated-permissions-review_target-selection-specific-items-option%20%281%29.png)

The option of **All active Microsoft Teams, Office 365 Groups and sites** **is chosen by default**. Optionally you **can include OneDrive** too. 

There is an **option** to include **only content that has enabled external sharing**. Mark the checkbox if you want this option and save the changes. 

For more information about **active/inactive content**, visit this [article](../common-tasks/inactive-content.md).

Click on the **Preview tile** to open the details screen with content that would be included in the Permissions Review. 

![Permissions Review - Preview screen](../.gitbook/assets/enable-automated-permissions-review_permissions-review-preview-screen.png)

In this screen, you can see all **Microsoft Teams, Office 365 Groups, sites, and OneDrive** **that are included within the Permissions Review**. 

Except for **All view**, there is **Orphaned Sites view** where you can see all the sites that do not have admins/owners.

If you **select the row, in the side panel will appear Change admins/Change Owners action** with which you can assign user, and then this site will be later checked with a task in Permissions Review. 

Choose the option **Specific items** if you want specific sites to include in the Permissions Review. Save the changes. 

![Target Selection - Specific Items option](../.gitbook/assets/enable-automated-permissions-review_target-selection-specific-items-option.png)

You must click on the **Select Now** link to **define sites to be included** in the **Permissions Review**. **Specific Permissions Review screen** will open. 

Select all sites that you need and save the changes. 

![Specific Permissions Review screen](../.gitbook/assets/enable-automated-permissions-review_specific-permissions-review-screen.png)

Now that everything is defined for the Permissions Review, you have to wait until the flow starts on its own. 

For more information about the **Permissions Review process** visit [article](../common-tasks/permissions-review.md). 

