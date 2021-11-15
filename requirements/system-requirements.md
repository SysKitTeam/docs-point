---
description: This article lists Azure resources requirements to consider when deploying SysKit Point.
---

# Azure Resources Requirements

{% hint style="warning" %}
**Please note!**  
**Requirements highly depend on the Microsoft 365 activity, the number of users, and the amount of data in your environment**. The larger the environment, the higher the resource tier that is required to run SysKit Point smoothly.
{% endhint %}

When deploying SysKit Point, you will be dealing with Azure resources instead of physical machines. Below, you can __find all Azure resources and the required tiers__, based on the size of your environment.

| Azure Resource | Point Tier 1 (<1000 Users) | Point Tier 2 (1K - 10K Users) | Point Tier 3 (10K+ Users) |
| :--- | :--- | :--- | :--- |
| App Service - FE | Standard Tier - S1; 100 Total ACU, 1.75 GB memory, A-Series compute equivalent | Standard Tier - S2; 200 Total ACU, 3.5 GB memory, A-Series compute equivalent | Premium Tier - P2V2; 420 total ACU, 7 GB memory, Dv2-Series compute equivalent |
| App Service - BE | Standard Tier - S1; 100 Total ACU, 1.75 GB memory, A-Series compute equivalent | Standard Tier - S2; 200 Total ACU, 3.5 GB memory, A-Series compute equivalent | Premium Tier - P2V2; 420 total ACU, 7 GB memory, Dv2-Series compute equivalent |
| Azure SQL DB | Standard Tier - S1; 20 DTUs | General Purpose Tier; Compute tier - provisioned; Gen5, 2 vCores | General Purpose Tier; Compute tier - provisioned; Gen5, 4 vCores |
| Cosmos DB | Provisioned throughput (manual); 3,000 RU/sec | Provisioned throughput (manual); 5,000 RU/sec | Provisioned throughput (manual); 10,000 RU/sec |
| Service Bus | Basic tier: 10 million messaging operations/mo | Basic tier: 10 million messaging operations/mo | Basic tier: 10 million messaging operations/mo |
| Storage Account | General Purpose v2 | General Purpose v2 | General Purpose v2 |
| Key Vault | Standard Tier | Standard Tier | Standard Tier |

## Supported Browsers

Once **SysKit Point** is installed and configured, you can access the SysKit Point web-app by using the following browsers:

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

