---
description: This article explains how to configure and use Syskit Point's webhooks.
---

# Webhooks

Webhooks are **push notifications sent by Syskit Point in the form of HTTP requests to a registered webhook endpoint when an event occurs**.

To successfully enable webhooks in Syskit Point, you need to perform the following steps:

* **Register endpoint** to which Syskit Point will send notifications.
* **Obtain the signature key** and secure your endpoint.
  * It is recommended for your webhook handler to verify that the webhook requests are generated by Syskit Point.

{% hint style="information" %}
Note that you must set up an HTTP endpoint function that can accept webhook requests with a POST method. 
{% endhint %}

## Registering a Webhook Endpoint with Syskit Point API

{% hint style="warning" %}
**Please note!**\
The application used to access the webhooks endpoint needs to have the `Point.Admin` app role.
{% endhint %}

To register a webhook endpoint via the Syskit Point API, you need to use the following POST request:

<mark style="color:yellow;">`POST`</mark> \{{baseURL\}}/v1.0/webhooks/endpoints

**Headers**

| Name          | Value              |
| ------------- | ------------------ |
| Content-Type  | `application/json` |
| Authorization | `Bearer <token>`   |

**Body**

| Name       | Type   | Description            |
| ---------- | ------ | ---------------------- |
| `endpoint` | string | Webhook endpoint URL   |
| `types`    | array  | Types of notifications |

{% tabs %}
{% tab title="Example" %}
```json
{
  "endpoint": "https://contoso.azurewebsites.net/api/Logger?code=o74oKsbrgHDI-RnekJXdbR3Fba7mZxEmJQNyCIpV6z-ZAzFuwnaWJg==",
  "types": [
    "*"
  ]
}
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
You can subscribe to all event types using the `*` symbol, as shown in the example.
{% endhint %}

**Types**

Syskit Point can send the following types of events:

| Type                  | Description                                        |
| --------------------- | -------------------------------------------------- |
| ProvisioningStarted   | Triggered when the Provisioning process starts     |
| ProvisioningCompleted | Triggered when the Provisioning process completes. |
| ProvisioningFailed    | Triggered when the Provisioning process fails.     |

Below, you can find examples for all types:

{% tabs %}
{% tab title="ProvisioningStarted" %}
```json
{
  "ProvisioningStarted":  
  {
     name = "name",
     type = "teams",
     requestedOn = "datetime",
     requesterId = "guid"
  }
}
```
{% endtab %}
{% tab title="ProvisioningCompleted" %}
```json
{
  "ProvisioningCompleted": 
  {
    name = "name",
    type = "teams",
    url = @"url",
    microsoftId = "guid"
  }
}
```
{% endtab %}
{% tab title="ProvisioningFailed" %}
```json
{
  "ProvisioningFailed":  
  {
    name = "name",
    type = "teams",
    error = "error message",
    correlationId = "correlationId"
  }
}
```
{% endtab %}
{% endtabs %}

**Response**

Successful registration of the webhook endpoint results in response status 200.

{% tabs %}
{% tab title="200" %}
```json
{
    Null
}
```
{% endtab %}
{% endtabs %}

## Webhook Events

Syskit Point sends a POST request to the registered webhook endpoint URL.\
The event object has the following body structure:

{% tabs %}
{% tab title="Body" %}
```json
{
    "type": "type",
    "content": {serializedContent},
    "meta": {
        "timeStamp": "timestamp",
        "idempotencyKey": "key"
    }
}
```
{% endtab %}
{% endtabs %}

Each webhook event also sends two headers:

* **Signature**: Contains the message signature created using the hashing algorithm provided in the Algorithm header using a signature key.
* **Algorithm**: The hashing algorithm used to create the message signature.

## Signature Validation

To verify the notification was sent by Syskit Point:

* **Get the signature key via Syskit Point API**
* **Create a signature using the key** to compare with the signature in the received event object

To get the signature key, send the following GET request.

<mark style="color:green;">`GET`</mark> \{{baseURL\}}/v1.0/options

**Response**

Successful request results in response status 200 and provides the Signature Authentication Key.

{% tabs %}
{% tab title="200" %}
```json
{
    "webhooksSignatureAuthenticationKey": "158b08cc-6a06-49f2-a724-2bc514fdcf1e"
}
```
{% endtab %}
{% endtabs %}

**Create Signature**

Below is the code example you can use to create the signature, which can then be compared with the one received in the event object to verify it was sent from Syskit Point.

```csharp
private static string generateSignature(string content, string authKey)
{
    var keyBytes = Encoding.UTF8.GetBytes(authKey);
    var payloadBytes = Encoding.UTF8.GetBytes(content);

    using var hmac = new HMACSHA256(keyBytes);
    var hashBytes = hmac.ComputeHash(payloadBytes);
    return Convert.ToBase64String(hashBytes);
}
```