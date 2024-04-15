---
description: This article explains available options when it comes to integrating 3rd party apps and Syskit Point.
---

# Overview

How the work is done, differs from company to company, and chances to find one piece of software to cover all of it, are quite slim. 
Most often, multiple apps are used to support various processes in a company.
Therefore, integration between apps proves important, as it enables you to connect multiple apps in a comprehensive workflow.  

Syskit Point offers 2 types of integration:
    * **Syskit Point API**
    * **Webhooks**

Below, you can find more information and examples for both types.

## Syskit Point API



## Webhooks

Webhooks are **messages that Syskit Point sends to another defined application when an important event occurs**, such as the provisioning of a new Microsoft 365 workspace in Syskit Point.

**Webhooks are useful when handling asynchronous events** that you cannot predict the exact timing of. 
For instance, the provisioning of a workspace depends on a manager or admin approving a request from an end-user. In such cases, Syskit Point can automatically send event information to the registered recipient application, also known as the **webhook endpoint**. The third-party application can then trigger further actions based on the received message from Syskit Point.

[Jump to the Webhooks article to learn more about utilizing Syskit Point webhooks](webhooks.md).

