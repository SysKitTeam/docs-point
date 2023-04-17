---
description: This article shows an overview of steps to take when deploying SysKit Point in your Azure environment.
---


# Overview

__SysKit Point__ app can, apart from being used in software-as-a-service form, be deployed in your Azure subscription. The self-hosted deployment option described in this article is a requirement when using the SysKit Point Data Center plan, and requires a customized approach considering the number of users, sites, collected audit logs, and other variables from your environment.

After the deployment, the key Azure resources shown in the architecture diagram below will be created and ready to run SysKit Point. 

![SysKit Point - Architecture Diagram](../../.gitbook/assets/overview_architecture-diagram.png)

[For more information about SysKit Point's Azure network configuration, please read the Azure Networking article](azure-networking.md).

## Getting Started
These are the 3 most important steps to get you started with SysKit Point:

1. [Deploy SysKit Point](deploy-syskit-point.md) to an empty **Azure resource group**
   * Ask your **Azure team** to create a dedicated Azure resource group and deploy [SysKit Point from the Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit_point)
   * When deploying, make sure to configure Azure resources following the [minimum requirements](system-requirements.md)
   * After the deployment, you will be able to access the SysKit Point web application by opening the defined URL
2. [Activate SysKit Point](../../set-up-point-data-center/activation/activate-syskit-point.md)
    * [Contact our team](https://www.syskit.com/contact-us/) to provide you with a free trial key that enables you to try out all SysKit Point features, without limits, for 21 days
    * After the end of the trial period, our team will provide the license key for the activation after purchasing the selected edition of SysKit Point
    * At any time, you can find your keys in the [Customers Portal](https://my.syskit.com/)
    * If you do not have the activation information, please [contact us](https://www.syskit.com/company/contact-us)
3. [Connect to Your Microsoft 365 Tenant](connect-to-tenant.md)
    * You will be asked to create an App registration in your Azure Active Directory
    * A **Global Administrator** will be asked to sign in and [**provide application consent**](../../requirements/permission-requirements.md#global-administrator) during the setup; __Please note__: the Global admin account is only necessary during the initial configuration; later, the application can be used with other non-privileged accounts

If you run into any issues when preparing your environment, please [contact us](https://www.syskit.com/contact-us/).

## First steps with SysKit Point

By now, your SysKit Point is up and running. You can sign in to the SysKit Point web application, and it will continuously collect data from Microsoft 365. There are a few important considerations to make to complete the setup and secure your Point web application:

* [**Request access to Protected APIs in Microsoft Teams**](../../configuration/microsoft-teams-activity.md) - Point needs **additional approval from Microsoft** in order to be able to **detect inactive Teams**
* [**Manage who can access Point**](../../configuration/enable-role-based-access.md) - by default only **Global Administrators** and **SharePoint admins** have the rights to log in to the Point web application
* [**Setup data retention for Audit logs**](../../configuration/customize-audit-logs-collection.md) - depending on your company policy, set the data retention policy for stored Microsoft 365 audit logs