---
description: >-
This article describes what are additional configuration necesary in case of some common errors
---
// TODO: da li mijenjati naslov?
# Configure Azure Virtual Machine

##  Install a compatible browser

We are always trying to give our users the best security and visual experience while using our application and in order to provide that we are not compatible with Internet Explorer and you should install a compatible browser to be able to use SysKit Point.Here are the browsers we are recommending:

// TODO staviti linkove na sluzbene stranice za download?
* **Google Chrome**
* **Microsoft Edge Chromium**
* **Firefox**
* **Opera**
* **Safari???**

This is the error you will see when your browser is incompatible:

//TODO: slika errora ovdje?

## Configure firewall manually
In order to be able to use the SysKit Point application you need to be able to reach the page where the Point web application is hosted.
If you are not able to reach the page, you will see this kind of error:

//TODO: Slika errora?

And you should do the following:
* **Configure and enable inbound rule for port in your firewall**
* **Run the following PowerShell script to make sure that port is open"**

//TODO: kako staviti PS kod?
// TODO Da li staviti 443 u primjer?
"test-netconnection -port portNumber -computername dnsoftthepointmachine.azure.net" 
 
* **Firefox**
* **Opera**
* **Safari???**

//TODO: Slika koraka za postavljanje?


