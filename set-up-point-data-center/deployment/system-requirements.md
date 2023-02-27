---
description: This article lists requirements to consider when deploying SysKit Point in your Azure subscription.
---

# Requirements

{% hint style="warning" %}
**Please note!**  
Requirements listed in this article apply to the self-hosted SysKit Point option required when using the Data Center plan only.
{% endhint %}

## SysKit Point Requirements

**SysKit Point is dependent upon the use of**:
* **Microsoft 365 tenant**
* **Azure Subscription**
* **Azure Active Directory** 

## Azure Resources Requirements

SysKit Point uses Azure cloud components managed by Microsoft. [You can view the architecture diagram of these components by following this link](https://www.syskit.com/products/point/resources/architecture-diagrams/).

All components are provisioned inside your Azure subscription and configured automatically by using [SysKit's Azure Marketplace offering](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point?exp=ubp8&tab=Overview). 

The following Azure components are used:
* **Azure App Service**
* **Cosmos DB**
* **Azure SQL database**
* **Service bus**
* **Storage account**
* **Key vault**


{% hint style="warning" %}
**Please note!**  
Each customer's environment is unique, and, depending on the number of users, the number of files, and the number of event logs your tenant is generating, the resources will need to be scaled accordingly.
Before deploying SysKit Point, your dedicated customer success manager will provide you with recommendations for all mentioned Azure components.
{% endhint %}

## Azure Reservations

****WIP****
To optimize cost, consider using Azure reservations.
The table below lists potential savings for App service and SQL Azure components.
| Azure Component | 1 Year Reservation | 3 Years Reservation |
| :--- | :--- | :--- |
| App Service | Up to X% | Up to Y% |
| SQL | Up to U% | Up to W% |
| Cosmos |  |  |

{% hint style="warning" %}
**Please note!**  
When considering reservations, note the following planned Point changes:
* Q1 2024 - transition to Linux app services
* Q1 2024 - replacing Cosmos DB with an alternative storage option
{% endhint %}

## Supported Browsers

Once **SysKit Point** is installed and configured, you can access the SysKit Point web app by using the following browsers:

* **Google Chrome** \(recommended\)
* **Firefox**
* **Opera**
* **Microsoft Edge** \(Chromium-based\)

{% hint style="warning" %}
**Please note!**  
**Internet Explorer is not supported.**
{% endhint %}

## Related Topics

* [Permission Requirements](permission-requirements.md)
* [Deploy SysKit Point](../installation/deploy-syskit-point.md)

