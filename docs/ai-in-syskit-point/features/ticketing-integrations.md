---
description: Ticketing Integrations let your ticketing system forward Microsoft 365-related tickets to Syskit Point, and Point AI sends the answer back before an agent even opens the ticket.
---

# Ticketing Integrations

:::info

**Uses LLM functionality — admin opt-in required.** Off by default; processing runs through Microsoft Foundry (Azure-hosted models) in your selected Azure region, and your data is never used to train the foundation models. See [AI Data Privacy & Security](../ai-data-privacy-and-security.md).

:::

**Support teams waste time hunting for answers across disconnected systems.** A ticket like *"Eva lost access to the site"* normally means jumping between the ticketing system, admin centers, and audit logs before anyone can reply.

With Ticketing Integrations, your ticketing system forwards Microsoft 365-related tickets to Syskit Point, and Point AI sends the answer back — *"Eva lost access because Daniel removed it on 25 May"* — before an agent even opens the ticket. Faster resolutions, lower cost per ticket, better CSAT, and easier onboarding of new support staff.

## How it works

Syskit Point provides the answers; the integration itself is set up and controlled by you, within your ticketing tool. The flow:

1. **A ticket arrives** in your ticketing system.
2. **Your ticketing system forwards it to Syskit Point.** Based on your internal setup in the ticketing tool, you decide which tickets or notes are forwarded to Point.
3. **Point AI provides the answer back** to the ticketing system, based on Point's own data — permissions, audit logs, group memberships, sharing events — with what happened, when, and who did it.
4. **Your ticketing system posts the answer.** Based on your setup, it can be added as an **internal note (recommended)** or as a reply to the ticket.

Because steps 2 and 4 live in your ticketing system, you stay in full control of which tickets Point sees and how its answers are used.

## Setting up a connection

In Syskit Point, go to **Settings** > **Integrations** > **Ticketing** and pick your ticketing system. **[Navigation path to be confirmed.]** Connection setup is explained in-app for every connection — follow the steps shown for your platform.

There is also an **Other** option you can use to integrate ticketing platforms we currently don't have a native connection with.

## What the integration does not do

* It does not make changes in your Microsoft 365 tenant — restoring Eva's access is still an admin action, done through Point or your admin tools.
* It does not decide how tickets are handled — forwarding rules and how answers are posted are controlled by your setup in the ticketing tool.

## Data handling

Point processes the ticket content it receives (to understand the question) and returns an answer. Ticket content is processed under the same rules as all LLM features in Point — within your Azure boundary, never used to train the foundation models. Details are in [AI Data Privacy & Security](../ai-data-privacy-and-security.md).
