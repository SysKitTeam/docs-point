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
	
## How is the integrity of file and message data ensured? How is data in transit secured?

The solution uses TLS 1.2 and HTTPS to secure all messages.

