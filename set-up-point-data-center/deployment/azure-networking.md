---
description: >-
  This article describes the configuration of Azure network resources used by
  Syskit Point.
---

# Azure Networking

<mark style="color:purple;">Last updated on January 28th, 2025</mark>

{% hint style="warning" %}
**Please note!**\
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
**Please note!**\
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
**Please note!** **As the Front-end and Back-end app services are accessible from the Public Internet by default**, [use Azure App Service access restrictions](https://docs.microsoft.com/en-us/azure/app-service/app-service-ip-restrictions) to add another layer of security to Syskit Point app services.
{% endhint %}

## Firewall considerations

When configuring your firewall, ensure that outbound connectivity to the required endpoints is allowed to enable full functionality of Syskit Point.\
The following destinations must be permitted through your firewall:

<table><thead><tr><th width="111">Protocol</th><th width="272">Host</th><th width="87">Port</th><th>Description</th></tr></thead><tbody><tr><td>HTTPS</td><td>my.syskit.com</td><td>443</td><td>SysKit portal for license activation and “Check for updates” functionality, hosted in Azure West Europe.</td></tr><tr><td>HTTPS</td><td>downloads.syskit.com</td><td>443</td><td>Required for future updates, hosting the deployment packages.</td></tr><tr><td>HTTPS</td><td>dc.applicationinsights.azure.com</td><td>443</td><td>Application Insights owned by SysKit used for critical error reporting and performance metrics. https://docs.microsoft.com/en-us/azure/azure-monitor/app/ip-addresses</td></tr><tr><td>HTTPS</td><td>dc.applicationinsights.microsoft.com</td><td>443</td><td>-||-</td></tr><tr><td>HTTPS</td><td>*.in.applicationinsights.azure.com</td><td>443</td><td>-||-</td></tr><tr><td>HTTPS</td><td>{PointServiceBus}.servicebus.windows.net</td><td>443</td><td>HTTPS access to the Azure Service Bus instance deployed in your resource group.</td></tr><tr><td>AMQP</td><td>{PointServiceBus}.servicebus.windows.net</td><td>5671</td><td>AMQP over TLS access to the Azure Service Bus. Required for real-time communication.</td></tr><tr><td>AMQP</td><td>{PointServiceBus}.servicebus.windows.net</td><td>5672</td><td>AMQP over TLS access to the Azure Service Bus. Required for real-time communication.</td></tr><tr><td>HTTPS</td><td>login.microsoftonline.com</td><td>443</td><td>Azure AD login endpoint to get access tokens necessary for API calls.</td></tr><tr><td>HTTPS</td><td>graph.microsoft.com</td><td>443</td><td>Microsoft <a href="https://docs.microsoft.com/en-us/graph/">Graph API</a> endpoint.</td></tr><tr><td>HTTPS</td><td>manage.office.com</td><td>443</td><td><a href="https://docs.microsoft.com/en-us/office/office-365-management-api/office-365-management-apis-overview">Office 365 Management API</a> endpoint.</td></tr><tr><td>HTTPS</td><td>{YourDomain}-admin.sharepoint.com</td><td>443</td><td>Admin portal of your tenant.</td></tr><tr><td>HTTPS</td><td>{YourDomain}.sharepoint.com</td><td>443</td><td>SharePoint Online sites of your tenant.</td></tr><tr><td>HTTPS</td><td>{YourDomain}-my.sharepoint.com</td><td>443</td><td>OneDrive’s location for your tenant.</td></tr><tr><td>HTTPS</td><td>api.keygen.sh</td><td>443</td><td>New licensing system. Reserved for future usage.</td></tr><tr><td>HTTPS</td><td>api.powerbi.com</td><td>443</td><td>Required for Syskit Point Power Platform features. Optional if these features are not in use.</td></tr><tr><td>HTTPS</td><td>api.bap.microsoft.com</td><td>443</td><td>Required for Syskit Point Power Platform features. Optional if these features are not in use.</td></tr><tr><td>HTTPS</td><td>api.powerapps.com</td><td>443</td><td>Required for Syskit Point Power Platform features. Optional if these features are not in use.</td></tr><tr><td>HTTPS</td><td>api.flow.microsoft.com</td><td>443</td><td>Required for Syskit Point Power Platform features. Optional if these features are not in use.</td></tr><tr><td>HTTPS</td><td>*.environment.api.powerplatform.com</td><td>443</td><td>Required for Syskit Point Power Platform features. Optional if these features are not in use.</td></tr></tbody></table>

{% hint style="warning" %}
**Please note!** If you are operating in a non-default Azure environment (e.g., Azure Government), you must adjust the firewall rules accordingly to reflect the appropriate regional endpoints.
{% endhint %}

{% hint style="warning" %}
**Please note!** The {PointServiceBus} placeholder refers to the specific Azure Service Bus namespace deployed in your resource group. Ensure that both HTTPS and AMQP protocols are allowed for this endpoint per the rules above.
{% endhint %}
