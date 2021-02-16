---
description: This article provides information about Delete and Restore User actions
---

# Delete and Restore Users

When you are managing your **Microsoft 365** environment there are certain situations when you need to **remove Users** from your tenant, be it in a situation of an offboarding person from the company or ending the collaboration with the external users.

With **SysKit Point** you get the ability to easily manage your users.

Situations, where Delete and Restore User action should be used:

* **When offboarding a user** from the company you can just select it in SysKit Point and the User will be deleted. If you need to copy some permissions to a new user you can easily do it with the [Copy Permission](https://docs.syskit.com/point/common-tasks/copy-user-permissions) action.
* **Deleting External Users** – in a situation where you have one or multiple External users who exist in your **Azure Active Directory** and you have ended your collaboration with them.
* **Restoring User** – When you have a situation that someone deleted a wrong user from the tenant.

### Running the Delete User Action

{% hint style="danger" %}
**IMPORTANT** – For you to successfully execute **Delete** and **Restore** User Action you have to be in a [**SysKit Point Admin**](https://docs.syskit.com/point/installation-and-configuration/enable-role-based-access#syskit-point-admins) role. Also, you must have one of these conditions fulfilled in **Microsoft 365 Azure Active Directory** **Roles** on your **Microsoft 365 environment:**

* Be a **Global Admin**
* Be a **SharePoint Admin** complemented with **User Admin**
* Be **User Admin** and be assigned as a manager to the targeted user in **Azure Active Directory**
{% endhint %}

To use Delete User Action you have to be located on the user overview screen. When you are located there, follow these steps:

* Select the users you wish to delete **\(1\)**
* On the side-panel click the Delete User action **\(2\)**
* After the action popup appears click on Delete User **\(3\)**

{% hint style="info" %}
**Please note** – you can only delete users that exist in the **Azure Active Directory**. Some external users on your tenant don’t appear in **Azure Active Directory** as they only have access to selected documents. To remove those kinds of users use the **Remove Access** action on the [**User Access Report**](https://docs.syskit.com/point/common-tasks/check-access-for-specific-user).
{% endhint %}

![User overview screen - Delete User Action](../.gitbook/assets/0%20%284%29.png)

![Delete User Action popup screen](../.gitbook/assets/1%20%284%29.png)

### Running the Restore User Action

To use Restore User Action you have to be located on the user overview screen with deleted users view selected **\(1\)**. When you are located there, follow these steps:

* Select the users you wish to restore **\(2\)**
* On the side-panel click on the Restore User Action **\(3\)**
* After the action popup appears click on Restore User **\(4\)**

![User overview screen - deleted users view, Restore User action](../.gitbook/assets/2%20%284%29.png)

{% hint style="info" %}
**Please note** – When you delete a user in SysKit Point you have a period of 30 days to restore it. When that period passes the user will be permanently deleted.
{% endhint %}



