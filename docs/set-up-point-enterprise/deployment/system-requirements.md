---
description: This article lists requirements to consider when deploying Syskit Point in your Azure subscription.
---

# Requirements

:::warning
**Please note!**  
Requirements listed in this article apply to the self-hosted Syskit Point option required when using the Enterprise plan only.
:::

## Syskit Point Requirements

**Syskit Point is dependent upon the use of**:
* **Microsoft 365 tenant**
* **Azure Subscription**
* **Microsoft Entra ID** 

## Azure Resources Requirements

Syskit Point uses Azure cloud components managed by Microsoft. [You can view the architecture diagram of these components by following this link](https://www.syskit.com/products/point/resources/architecture-diagrams/).

All components are provisioned inside your Azure subscription and configured automatically by using [Syskit's Azure Marketplace offering](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point?exp=ubp8&tab=Overview). 

The following Azure components are used:
* **Azure App Service**
* **Cosmos DB**
* **Azure SQL database**
* **Service bus**
* **Storage account**
* **Key vault**


:::warning
**Please note!**  
Each customer's environment is unique, and depending on the number of users, the number of files, and the number of event logs your tenant is generating, the resources will need to be scaled accordingly.
Before deploying Syskit Point, your dedicated customer success manager will provide you with recommendations for all mentioned Azure components.
:::

## Azure Reservations

To optimize cost, consider using Azure reservations.
The table below lists potential savings in percentage for App Service, SQL Database, and Cosmos components.

:::warning
**Please note!**  
Potential savings depend on Azure region, resource tier, and other factors. 
Use the [Azure pricing calculator](https://azure.microsoft.com/en-us/pricing/calculator/) to discover detailed pricing information for your environment.
:::

| Azure Component | 1 Year Reservation | 3 Years Reservation |
| :--- | :--- | :--- |
| App Service | ~35% | ~55% |
| SQL | ~22% | ~34% |
| Cosmos | ~15% up to ~23% | ~25% up to ~33% |

:::warning
**Please note!**  
When considering reservations, note the following planned Point changes:
* Q1 2024 - replacing Windows App Services with Linux App Services
:::

## Supported Browsers

Once **Syskit Point** is installed and configured, you can access the Syskit Point web app by using the following browsers:

* **Google Chrome** \(recommended\)
* **Firefox**
* **Opera**
* **Microsoft Edge** \(Chromium-based\)

:::warning
**Please note!**  
**Internet Explorer is not supported.**
:::

## Related Topics

* [Permission Requirements](../../requirements/permission-requirements.md)
* [Deploy Syskit Point](deploy-syskit-point.md)

