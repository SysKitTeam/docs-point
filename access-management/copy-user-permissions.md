---
description: This article provides information about the Copy User Permissions action.
---

# Copy User Permissions

The **Copy User Permissions action** enables you to copy all directly given permissions and group memberships from one user to another user, or even multiple users, eliminating the daunting task of comparing permissions between users and manually applying them if needed.

{% hint style="warning" %}
**Please note!**  
The Copy User Permissions action is available only for Syskit Point users with the Syskit Point Admin role.
{% endhint %}

To learn more about roles in Syskit Point, see the [following article](../configuration/enable-role-based-access.md).

You can take advantage of the Copy User Permissions action in the following cases:

* **Onboarding a user** – make the process faster by copying permissions from an existing team member to the new one, for example; you can even copy permissions to multiple users at once
* **Offboarding a user** – copy all permissions from a user that is leaving your company to a new colleague that is filling his position; after that, all permissions are removed from the old colleague if you decide to do so

## Running the Action

To copy permissions from one user to another, follow these steps:

* **Select a user on the Users overview screen \(1\)** – permissions will be copied from this user
* **Click the Copy User Permissions \(2\)** action in the side panel – the Copy Permissions dialog opens
* **Select one or more Destination users \(3\)** – permissions will be copied to this user
* **Check the Transfer Permissions option \(4\)** if you want to remove all permissions from the source user after the permissions are granted for the destination users
* **Check the Copy memberships in Microsoft Teams private channels option \(5\)** if you want to copy the permissions of this user for the private channels where they are a member

* **Click the Copy Permissions button \(6\)** to run the action

![Users Overview - Copy User Permissions](../.gitbook/assets/copy-user-permissions_users-overview.png)

![Copy User Permissions Dialog](../.gitbook/assets/copy-user-permissions_copy-permissions-dialog.png)

Once the Copy User Permissions action is started, a notification is displayed. **Click the action in the Notifications menu \(1\)** to access the **Action Details screen \(2\)** if you want to see all steps taken as a part of this action.

![Notifications Menu - Copy User Permissions](../.gitbook/assets/copy-user-permissions_copy-permissions-notification.png)

![Actions Details - Copy User Permissions steps](../.gitbook/assets/copy-user-permissions_action-details.png)

## What is Copied

When using the Copy User Permissions action, **the following is copied**:

* **O365 Group and Microsoft Teams memberships**
* **Site administrator privileges**
* **All directly given permissions on sites and items with broken permission inheritance**
* **SharePoint group memberships**

## What is not Copied

The Copy User Permissions **does not copy the following**:

* **Access that is given through Sharing links**
* **OneDrive permissions**
* **Security Group memberships**
* **Azure AD role privileges**

## Existing Permissions 

{% hint style="warning" %}
**Please note!**  
**Existing permissions of the destination user are not affected by the Copy User Permissions action**.
Copied permissions are appended to the existing ones.
{% endhint %}