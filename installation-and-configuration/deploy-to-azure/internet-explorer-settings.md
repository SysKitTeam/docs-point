---
description: >-
  This article describes how to handle error caused by IE settings not allowing access to Microsoft login sites or by having scripting disabled
---
// TODO: da li mijenjati naslov?
# Configure Azure Virtual Machine

## Internet Explorer settings

### Enable access to Microsoft pages

Server versions of Windows (Internet explorer) use an enhanced security settings and in order to be able to use SSO authentication it is necessary to reach pages like login.microsoft.com.

In most cases you will see an error like this one:

// TODO: slika ovdje

We recommend configuring IE settings the following way:
* **Select "Tools" -> "Internet Options" -> "Security" tab**
* **Select "Trusted sites" icon -> "Sites" button**
* **Add following Microsoft addresses to trusted sites list: 
  [*.microsoft.com](), [*.live.com](),  [*.microsoftonline.com]()**

In most cases you will be able to identify this problem if you see this type of error:

// TODO: slika ovdje?

### Enable scripting

In order for the SysKit Point application to be able to authenticate you in Azure AD, it is necessary to enable scripting in Internet Explorer settings, so the SSO login popup would be shown.To enable it, follow the steps:
* **Select "Tools" -> "Internet Options" -> "Security" tab**
* **Click the "Custom Level..." button**
* **Scroll down and change the Active Scripting setting -> select "Enable" option**
* **Confirm the change**
* **Close "Internet Options"**


//TODO: ovdje su screenshoti svih koraka https://www.whatismybrowser.com/guides/how-to-enable-javascript/internet-explorer

