---
description: This article provides answers regarding backups and data security. 
---
	
## Does SysKit Point perform database backups? Are these backups encrypted? 
SysKit Point uses two types of Azure resources to store data:
* **Azure SQL Database**, and
* **Azure Cosmos DB**

**Azure SQL** provides automated backups which use integrated SQL Transparent Data Encryption. These backups are retained for 7 days. With these backups, Azure SQL Database supports Point in Time Restore that allows a database to be restored to any point in time, up to the millisecond, within a database’s retention period.

**Azure Cosmos DB** automatically takes a full backup of your data every 4 hours, and, at any point in time, the latest two backups are stored. This configuration is the default option, and it is offered without any extra cost. You can change the default backup interval in the Azure Portal. 

## How is data at rest encrypted?

Transparent data encryption (TDE) helps protect Azure SQL Database against the threat of malicious offline activity by encrypting data at rest. The algorithm used for encryption is AES-256.

As a PaaS service, Azure Cosmos DB is very easy to use. Because all user data stored in Azure Cosmos DB is encrypted at rest and in transport, you don't have to take any action. Another way to put this is that encryption at rest is "on" by default, and there are no controls to turn it off or on. Azure Cosmos DB uses AES-256 encryption on all regions where the account is running. We provide this feature while we continue to meet our [availability and performance SLAs](https://azure.microsoft.com/en-us/support/legal/sla/cosmos-db/v1_4/). Data stored in your Azure Cosmos account is automatically and seamlessly encrypted with keys managed by Microsoft (service-managed keys). Optionally, you can choose to add a second layer of encryption with your keys, as described in the [customer-managed keys article](https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-setup-cmk).
	
## How is the integrity of file and message data ensured? How is data in transit secured?

The solution uses TLS 1.2 and HTTPS to secure all messages.

