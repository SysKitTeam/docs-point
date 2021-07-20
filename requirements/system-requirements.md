---
description: This article lists Azure resources requirements to consider when deploying SysKit Point.
---

# Azure Resources Requirements

{% hint style="warning" %}
**Please note!**  
**Requirements highly depend on the Microsoft 365 activity, the number of users, and the amount of data in your environment**. The larger the environment, the higher resource tier will be required to run SysKit Point smoothly.
{% endhint %}

When deploying SysKit Point, you will be dealing with Azure resources instead of physical machines. Below, you can __find all Azure resources and the required tiers__, based on the size of your environment.

| Azure Resource | Point Tier 1 (<1000 Users) | Point Tier 2 (1K - 10K Users) | Point Tier 3 (10K+ Users) |
| :--- | :--- | :--- | :--- |
| App Service - FE | Standard Tier; 1 S1 (1 Core(s), 1.75 GB RAM, 50 GB Storage) x 730 Hours; Windows OS | Standard Tier; 1 S2 (2 Core(s), 3.5 GB RAM, 50 GB Storage) x 730 Hours; Windows OS | Premium V2 Tier; 1 P2V2 (2 Core(s), 7 GB RAM, 250 GB Storage) x 730 Hours; Windows OS |
| App Service - BE | Standard Tier; 1 S2 (2 Core(s), 3.5 GB RAM, 50 GB Storage) x 730 Hours; Windows OS | Standard Tier; 1 S2 (2 Core(s), 3.5 GB RAM, 50 GB Storage) x 730 Hours; Windows OS | Premium V2 Tier; 1 P2V2 (2 Core(s), 7 GB RAM, 250 GB Storage) x 730 Hours; Windows OS |
| Azure SQL DB | Single Database, DTU Purchase Model, Standard Tier, S2: 50 DTUs, 250 GB included storage per DB, 1 Database(s) x 730 Hours, 5 GB Retention | Single Database, vCore, RA-GRS Backup Storage, General Purpose, Provisioned, Gen 5, Local Redundancy, 1 - 2 vCore instance(s) x 730 Hours, 32 GB Storage, 0 GB Backup Storage | Single Database, vCore, RA-GRS Backup Storage, General Purpose, Provisioned, Gen 5, Local Redundancy, 1 - 4 vCore instance(s) x 730 Hours, 32 GB Storage, 0 GB Backup Storage |
| Cosmos DB | Standard provisioned throughput (manual), Single Region Write (Single-Master);  3,000 RU/sec | Standard provisioned throughput (manual), Single Region Write (Single-Master); 5,000 RU/sec | Standard provisioned throughput (manual), Single Region Write (Single-Master); 10,000 RU/sec |
| Service Bus | Basic tier: 10 million messaging operations/mo | Basic tier: 10 million messaging operations/mo | Basic tier: 10 million messaging operations/mo |
| Storage Account | Block Blob Storage, General Purpose V2, LRS Redundancy, Hot Access Tier, 30 GB Capacity - Pay as you go, 100,000 Write operations, 100,000 List and Create Container Operations, 100,000 Read operations, 100,000 Archive High Priority Read, 1 Other operations. 1,000 GB Data Retrieval, 1,000 GB Archive High Priority Retrieval, 1,000 GB Data Write | Block Blob Storage, General Purpose V2, LRS Redundancy, Hot Access Tier, 30 GB Capacity - Pay as you go, 100,000 Write operations, 100,000 List and Create Container Operations, 100,000 Read operations, 100,000 Archive High Priority Read, 1 Other operations. 1,000 GB Data Retrieval, 1,000 GB Archive High Priority Retrieval, 1,000 GB Data Write | Block Blob Storage, General Purpose V2, LRS Redundancy, Hot Access Tier, 30 GB Capacity - Pay as you go, 100,000 Write operations, 100,000 List and Create Container Operations, 100,000 Read operations, 100,000 Archive High Priority Read, 1 Other operations. 1,000 GB Data Retrieval, 1,000 GB Archive High Priority Retrieval, 1,000 GB Data Write |
| Key Vault | Vault: 100,000 operations, 100,000 advanced operations, 0 renewals, 0 protected keys, 0 advanced protected keys; Managed HSM Pools: 0 Standard B1 HSM Pool(s) x 730 Hours | Vault: 100,000 operations, 100,000 advanced operations, 0 renewals, 0 protected keys, 0 advanced protected keys; Managed HSM Pools: 0 Standard B1 HSM Pool(s) x 730 Hours | Vault: 100,000 operations, 100,000 advanced operations, 0 renewals, 0 protected keys, 0 advanced protected keys; Managed HSM Pools: 0 Standard B1 HSM Pool(s) x 730 Hours |

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

