---
description: >-
This article describes how to handle IE javascript not enabled error
---
// TODO: da li mijenjati naslov?
# Configure Azure Virtual Machine

## Internet Explorer settings

Server versions of Windows (Internet explorer) use an enhanced security settings and in order to be able to use SSO authentication it is necesary to reach pages like login.microsoft.com.

We recommend configuring IE settings the following way:
* **Tools -> Internet Options -> Security tab**
* **Select Trusted Sites Icon -> Sites button**
* **Add following Microsoft addresses to trusted sites list: 
  [*.Microsoft.com](), [*.live.com](),  [*.microsoftonline.com]()**

In most cases you will be able to identfy this problem if you see this type of error:

// TODO: slika ovdje?
