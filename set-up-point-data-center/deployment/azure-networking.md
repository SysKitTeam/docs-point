---
description: This article describes the configuration of Azure network resources used by Syskit Point.
---

# Azure Networking

<mark style="color:purple;">Last updated on January 28th, 2025</mark>

{% hint style="warning" %}
**Please note!**  
**By default**, **the Front-end and Back-end app services are accessible from the Public Internet**. **The rest of the utilized Azure resources – Key Vault**, **Azure SQL Server**, **Azure Cosmos DB and Storage Account - are secured behind firewalls and private connections**.
{% endhint %}

When deploying Syskit Point, there are **two options available when considering Azure network resources**: 
* **Deploy Syskit Point from Azure Marketplace**
  * consider this to be your **'plug-and-play' option** 
  * new **Azure network resources are automatically created and configured** when you deploy Syskit Point, without the need to perform additional configuration 
  * **Syskit Point is ready to use and secured after the deployment**
* **Deploy a custom ARM template**
    * **use when you want to integrate Syskit Point into already existing Azure network resources**
    * **custom ARM templates are used when deploying Syskit Point**
    * **no Azure network resources are created** when deploying Syskit Point through custom ARM templates  
    * **Syskit Point is ready to use but not secured after the deployment – additional configuration of Azure network resources is required** 


{% hint style="warning" %}
**Please note!**   
For use cases requiring custom deployment and manual configuration of Azure network resources, don't hesitate to [contact us](https://www.syskit.com/company/contact-us) to provide you with custom ARM templates. 
{% endhint %}

## Architecture Diagram

When Syskit Point is deployed from Azure Marketplace, a virtual network is created named point-vnet, with three subnets: 
* **fe-subnet**
* **be-subnet**
* **default-subnet**

![Azure Networking - Architecture Diagram](../../.gitbook/assets/azure-networking-diagram.png)

The subnets have **Network security groups associated** with the default rules applied. **By default**, **inbound traffic is denied** and **outbound traffic is allowed**. If you wish to limit outbound traffic, please [contact us](https://www.syskit.com/company/contact-us). 

**The following applies to fe-subnet**: 
  * takes up 3 IP addresses + 5 Azure reserved addresses 
  * used by a Front-end app service that provides end-users with a web interface 
  * **accessible from the Public Internet**

**The following applies to be-subnet**: 
  * takes up 3 IP addresses + 5 Azure reserved addresses 
  * used by a Back-end app service responsible for retrieving data from a Microsoft 365 tenant by utilizing several Microsoft APIs 
  * **accessible from the Public Internet** 

**The following applies to default-subnet**:
  * takes up 11 IP addresses + 5 Azure reserved addresses 
  * used by the following Azure resources: 
      * **Key Vault**
      * **Azure SQL Server**
      * **Azure Cosmos DB**
      * **Storage Account – Blob**
      * **Storage Account – File**
  * **secured with private connections for each resource**


{% hint style="warning" %}
**Please note!** 
**As the Front-end and Back-end app services are accessible from the Public Internet by default**, [use Azure App Service access restrictions](https://docs.microsoft.com/en-us/azure/app-service/app-service-ip-restrictions) to add another layer of security to Syskit Point app services. 
{% endhint %}