---
description: This article explains how to get started with Syskit Point API.
---

# Syskit Point API

{% hint style="information" %}
**Please note!** 
To utilize Provisioning via Syskit Point API, the Governance plan or above is required.\
See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
{% endhint %}

In this article, you can find steps on how to create your first request to your Syskit Point web app.
You will need to perform the following steps:
* **Create and set an app registration in Microsoft Entra ID**
* **Fetch the `access_token`**
* **Send your first request** to Syskit Point 

## Prerequisites

To complete the steps described in this article, make sure to have the following:
* **Syskit Point Instance** - running Point Cloud or Data Center instance
* **Microsoft Entra/Azure Active Directory Access** - you should be able to create an App registration in Microsoft Entra/Azure Active Directory

## Microsoft Entra Setup

To enable Postman to get access tokens for API requests, you must create and configure an additional App registration in Microsoft Entra.

First, create the New app registration:
* **Navigate to** [Microsoft Entra > Identity > Applications > App registrations](https://entra.microsoft.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade/quickStartType~/null/sourceType/Microsoft_AAD_IAM) **(1)**
* **Create a new registration** by clicking the **New registration button (2)**
    * **Provide a Name (3)** - e.g., **API Demo**
    * **Click Register (4)**

![Microsoft Entra - New registration](../.gitbook/assets/syskit-point-api-new-registration.png)

![Microsoft Entra - Register](../.gitbook/assets/syskit-point-api-register.png)

Second, create a new client secret:
* **Navigate to Manage > Certificates & Secrets (1)**
* **Click the New client secret option (2)** - a sidebar opens where you can:
    * **Enter client secret description (3)**
    * **Define expiration (4)**
    * **Click Add (5)** to finish

![New client secret](../.gitbook/assets/syskit-point-api-new-client-secret.png)

{% hint style="information" %}
**Please note!** **Once the new client secret is created, immediately copy (1) and save the client secret value to the side.**
{% endhint %}

![Copy client secret value](../.gitbook/assets/syskit-point-api-copy-client-secret-value.png)

Afterward, configure API permissions:
* **Navigate to Manage > API Permissions (1)**
* **Click Add a permission option (2)** - a sidebar opens where you should:
    * **Select the APIs my organization uses tab; search and find Syskit Point API (3) and click to select** - sidebar shows new information
    * **Select the displayed permission (4)**
        * We strongly encourage applying the principle of least privilege and provide the minimum level of permissions required to accommodate your integration requirements
        * [Find more details about available permissions in the Permissions section](#permissions)
    * **Click Add permissions (5)**
* **Click the Grant admin consent option (6)** - confirmation dialog opens:
    **Click Yes to confirm**

![Request API permissions](../.gitbook/assets/syskit-point-api-request-api-permissions.png)

![Grant Admin Consent](../.gitbook/assets/syskit-point-api-grant-admin-consent.png)

Lastly, **collect the following data and save to side with the client secret value stored before**:
* **Application (client) ID** 
* **Directory (tenant) ID** 
* **Syskit Point API Application (client) ID** - find the _Syskit Point API_ app registration and copy the Application (client) ID from the Overview screen

## Permissions 

There are 4 permissions associated with Syskit Point API:

| Permission | Privileges |
| ----- | ----- |
| SharePoint.Read.All ||
| Point.AsyncRequests ||
| Point.Provisioning ||
| Point.Admin ||


## Fetch the `access_token`

Here, you can find an example of how to fetch the `access_token` using Postman.

Create a new POST request:

<mark style="color:yellow;">`POST`</mark> https://login.microsoftonline.com/\<tenant-id\>/oauth2/v2.0/token

Replace the \<tenant-id\> in your request with your Directory (tenant) ID saved in the previous step.

**Body**
Include the following parameters in the request body

| Name | Type | Description | Example Value |
| --- | --- | --- | --- |
| `client_id` | string | Application (client) ID of the created app registration | 0a1948f2-b37b-4c38-8430-2c3ad19ba71c |
| `client_secret`| string  | Client secret created in the previous step | Ma~8Q~hffkTUrO53J8XpKQWl-rnsw.4l~_AG-arJ |
| `grant_type`| string  | Enter the string 'client_credentials' | client_credentials |
| `scope`| string  | Combine the Application (client) ID of Syskit Point API app registration and string '/.default' | ee22be9d-e792-45c2-8955-deb8fd565aa5/.default |

Click Send and wait for the response.

The provided example is shown in the image below:

![Get Access Token](../.gitbook/assets/syskit-point-api-get-access-token.png)

Copy the `access_token` property from the response to use in further requests to your Syskit Point web app.

## Example Request

Using Postman, let's create the first request to your Syskit Point web app.

Create a new GET request:

<mark style="color:green;">`GET`</mark> {{pointWebAppUrl}}/v1.0/sites

Under Authorization > Type, select `Bearer Token` and paste the `access_token` retrieved in the previous step.

Click Send and wait for the response.

The provided example is shown in the image below:

![GET Request to Syskit Point](../.gitbook/assets/syskit-point-api-get-request.png)

## Syskit Point API Documentation

To find more information about the Syskit Point API, navigate to the provided Swagger documentation. You can find it on the following URL:
* `<YourSyskitPointBaseURL/swagger>`
* For example, `contoso.syskit365demo.com/swagger`

