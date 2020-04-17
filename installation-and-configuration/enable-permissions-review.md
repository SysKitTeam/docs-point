---
description: >-
  This article explains how to Enable Automated Permissions Review in SysKit
  Point.
---

# Enable Automated Permissions Review

For allowing the Automated Permissions Review process in your environment, first, you need to configure e-mail settings and enable collaborators.

{% hint style="warning" %}
**Please note!** Only users that are assigned **SysKit Point Admins role** can see and adjust Settings in the SysKit Point application. 
{% endhint %}

Go to **Settings** &gt; **Governance** &gt; **Permissions Review** screen.

![Settings - Permissions Review screen](../.gitbook/assets/enable-automated-permissions-review_permissions-review-settings-screen%20%281%29.png)

You can perform this by clicking on tiles in the section **Additional Actions Required**. This action will redirect you to the appropriate settings screen. 

{% hint style="info" %}
**Hint!** You can also access these settings screens from the navigation menu.
{% endhint %}

## **E-mail settings** 

It is necessary to define e-mail so that your colleagues are aware of why and from who they are receiving e-mail from SysKit Point. 

There are two methods to choose from - **Exchange Online** and **Simple Mail Transfer Protocol \(SMTP\)**. 

### Exchange Online settings 

If you select Exchange Online method, you only **have to enter a valid e-mail address**. All e-mails regarding the Permissions Review will be sent from this address. 

Option for saving e-mails that are sent from the defined e-mail account in the Sent folder is turned on by default. It means that every e-mail which was sent concerning the Permissions Review can be found in the **Sent folder** in the mailbox. 

![Exchange Online e-mail Settings screen](../.gitbook/assets/enable-automated-permissions-review_exchange-online-e-mail-settings-screen.png)

If you would like **to turn off** this option, **uncheck** it next to the title. 

After entering an e-mail address, click anywhere on white space on the screen and then Save button.  

A new dialog will open asking you to save anyway, or to send a test e-mail to check if everything works properly. 

If you choose to send a **test e-mail**, enter one address in the new dialog that appears, and after a few minutes, check if you received an e-mail in that account. 

You should receive an e-mail like the one in the picture below. 

![Test e-mail](../.gitbook/assets/enable-automated-permissions-review_test-e-mail.png)

### SMTP settings 

If you choose the **SMTP** as your sending e-mail method, you have to define standard properties, including outgoing server, port, e-mail, and whether is encrypted connection and authentication required.  

Also, you will have to provide a username and password. 

![SMTP e-mail Settings screen](../.gitbook/assets/enable-automated-permissions-review_smtp-e-mail-settings-screen.png)

After defining parameters, click the Save button. 

You can check if the environment is set up in the right way, by sending a **test e-mail**. 

## **Manage Access Settings** 

With the Manage Access screen in the SysKit Point Settings, you have to **enable SysKit Point Collaborators' role** to have access to the application. 

This role includes all Site admins/Team owners in your environment. For more information, go to [Enable Role-Based Access](enable-role-based-access.md#what-is-syskit-point-collaborators-role) article.

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

