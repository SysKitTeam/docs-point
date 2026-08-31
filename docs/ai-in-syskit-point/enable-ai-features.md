---
description: AI features that use LLM functionality are off by default. This article shows how to enable them in Syskit Point, who can do it, and what changes when you do.
---

# Enable AI Features

**AI features that use LLM functionality are off by default.** This article shows how to enable them, who can do it, and what changes when you do.

Before enabling, we recommend reviewing [AI Data Privacy & Security](ai-data-privacy-and-security.md) article and the [Syskit AI Terms](https://www.syskit.com/legal/ai-terms). 

## Prerequisites

To enable AI features:

* You need the **Syskit Point Admin** role.
* Your organization uses Syskit Point Cloud. During the [Early Access Program](early-access-program.md), AI features are available to all Cloud customers.

## Enable AI features

* In Syskit Point, go to **Settings** > **AI Features (1)**.
* Turn on the **Enable AI-powered features** toggle (2). 
  * This is a single opt-in. 
  * Opting in makes all AI features available; there are no per-feature toggles.
* **Click Save (3)** to finalize your decision.

:::info

**Please note:** changes take **effect immediately**. Users may need to refresh Syskit Point to see new AI entry points, such as the Syskit Point Assistant icon.

:::

![Enable AI-powered Features](../../../static/img/enable-ai-features-toggle.png)

## What to Expect when Enabling AI Features


**Enabling AI-powered features:**

* Makes LLM-based features available to your Syskit Point users, within their existing Point roles.
* Means you accept that usage falls under the Early Access fair-usage principles, see [Early Access Program](early-access-program.md).

**Enabling AI-powered features doesn't:**

* Change what data Syskit Point collects from your tenant.
* Give any user access to data beyond their Point role.
* Allow AI to make changes in your environment — AI features only deliver findings and recommendations.

[Permission Anomaly Reports](features/permission-anomaly-reports.md) and [Sensitivity Label Recommendations](features/sensitivity-label-recommendations.md) use machine learning with no LLM involved. They are part of Syskit Point's standard functionality and are not controlled by the AI features toggle.

## Disable AI Features

To turn AI features off, return to **Settings** > **AI features** and switch the **Enable AI-powered features toggle off**. 

This takes effect immediately:

* AI entry points disappear from the interface.
* No LLM processing of your data occurs while disabled.
* Connected AI tools using the [Syskit Point MCP Server](features/mcp-server.md) lose access.

You can re-enable the feature at any time.
