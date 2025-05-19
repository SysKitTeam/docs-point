---
description: >-
  This article shows an overview of steps to take when deploying Syskit Point in
  your Azure environment.
---

# Overview

**Syskit Point** app can, apart from being used in software-as-a-service form, be deployed in your Azure subscription. The self-hosted deployment option described in this article is a requirement when using the Syskit Point Data Center plan, and requires a customized approach considering the number of users, sites, collected audit logs, and other variables from your environment.

After the deployment, the key Azure resources shown in the architecture diagram below will be created and ready to run Syskit Point.

![Syskit Point - Architecture Diagram](../../../.gitbook/assets/overview-architecture-diagram.png)

Find additional diagrams available for download in the following table:

<table><thead><tr><th width="198">Diagram</th><th>Description</th><th>PDF</th></tr></thead><tbody><tr><td>Syskit Point Architecture Diagram</td><td>Syskit Point is being deployed as an Azure App application into an Azure subscription. The individual components can be scaled as needed based on the size of the customer or the amount of data.</td><td><a href="https://downloads.syskit.com/point/diagrams/Syskit-Point-Architecture-Diagram.pdf">Download</a></td></tr><tr><td>Microsoft 365 Estate With Syskit Point</td><td>Syskit Point integrates with your Microsoft 365 infrastructure to provide you with a comprehensive understanding of your Microsoft 365 estate.</td><td><a href="https://downloads.syskit.com/point/diagrams/Microsoft-365-Estate-With-Syskit-Point.pdf">Download</a></td></tr><tr><td>Syskit Point Azure Network Diagram</td><td>By default, the Front-end and Back-end app services are accessible from the Public Internet. The rest of the utilized Azure resources – Key Vault, Azure SQL Server, Azure Cosmos DB and Storage Account – are secured behind firewalls and private connections. When deploying Syskit Point, there are two options available when considering Azure network resources.</td><td><a href="https://downloads.syskit.com/point/diagrams/Syskit-Point-Azure-Network-Diagram.pdf">Download</a></td></tr><tr><td>Syskit Point Reference Architecture Diagram</td><td>A reference architecture diagram is a model of the infrastructure that Syskit Point’s Microsoft commercial marketplace solution relies on.</td><td><a href="https://downloads.syskit.com/point/diagrams/Syskit-Point-Reference-Architecture-Diagram.pdf">Download</a></td></tr></tbody></table>

[For more information about Syskit Point's Azure network configuration, please read the Azure Networking article.](azure-networking.md)

## Getting Started

These are the 3 most important steps to get you started with Syskit Point:

1. [Deploy Syskit Point](deploy-syskit-point.md) to an empty **Azure resource group**
   * Ask your **Azure team** to create a dedicated Azure resource group and deploy [Syskit Point from the Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point)
   * When deploying, make sure to configure Azure resources following the [minimum requirements](system-requirements.md)
   * After the deployment, you will be able to access the Syskit Point web application by opening the defined URL
2. [Activate Syskit Point](../activation/activate-syskit-point.md)
   * [Contact our team](https://www.syskit.com/contact-us/) to provide you with a free trial key that enables you to try out all Syskit Point features, without limits, for 21 days
   * After the end of the trial period, our team will provide the license key for the activation after purchasing the selected edition of Syskit Point
   * At any time, you can find your keys in the [Customers Portal](https://my.syskit.com/)
   * If you do not have the activation information, please [contact us](https://www.syskit.com/company/contact-us)
3. [Connect to Your Microsoft 365 Tenant](connect-to-tenant.md)
   * You will be asked to create an App registration in your Azure Active Directory
   * A **Global Administrator** will be asked to sign in and [**provide application consent**](../../requirements/permission-requirements.md#global-administrator) during the setup; **Please note**: the Global admin account is only necessary during the initial configuration; later, the application can be used with other non-privileged accounts

If you run into any issues when preparing your environment, please [contact us](https://www.syskit.com/contact-us/).

## First steps with Syskit Point

By now, your Syskit Point is up and running. You can sign in to the Syskit Point web application, and it will continuously collect data from Microsoft 365. There are a few important considerations to make to complete the setup and secure your Point web application:

* [**Request access to Protected APIs in Microsoft Teams**](../../configuration/configure/microsoft-teams-activity.md) - Point needs **additional approval from Microsoft** in order to be able to **detect inactive Teams**
* [**Manage who can access Point**](../../configuration/configure/enable-role-based-access.md) - by default only **Global Administrators** and **SharePoint admins** have the rights to log in to the Point web application
* [**Setup data retention for Audit logs**](../../configuration/customize/customize-audit-logs-collection.md) - depending on your company policy, set the data retention policy for stored Microsoft 365 audit logs
