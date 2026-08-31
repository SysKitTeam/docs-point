---
description: Ticketing Integrations let your ticketing system forward Microsoft 365-related tickets to Syskit Point, and Point AI sends the answer back before an agent even opens the ticket.
---

# Ticketing Integrations

:::info

**Uses LLM functionality - admin opt-in required.** Off by default; processing runs through Microsoft Foundry (Azure-hosted models) in your selected Azure region, and your data is never used to train the foundation models. See [AI Data Privacy & Security](../ai-data-privacy-and-security.md).

:::

**Support teams waste time hunting for answers across disconnected systems.** A ticket like *"Eva lost access to the site"* normally means jumping between the ticketing system, admin centers, and audit logs before anyone can reply.

With Ticketing Integrations, your ticketing system forwards Microsoft 365-related tickets to Syskit Point, and Point AI sends the answer back — *"Eva lost access because Daniel removed it on 25 May"* — before an agent even opens the ticket. Faster resolutions, lower cost per ticket, better CSAT, and easier onboarding of new support staff.

## How it works

Syskit Point provides the answers; the integration itself is set up and controlled by you, within your ticketing tool. The flow:

* **A ticket arrives** in your ticketing system.
* **Your ticketing system forwards it to Syskit Point.** 
  * Based on your internal setup in the ticketing tool, you decide which tickets or notes are forwarded to Point.
* **Point AI provides the answer back** to the ticketing system, based on Point's own data - permissions, audit logs, group memberships, sharing events - with what happened, when, and who did it.
* **Your ticketing system posts the answer.** 
  * Based on your setup, it can be added as an **internal note (recommended)** or as a reply to the ticket.

Because steps 2 and 4 happen in your ticketing system, you stay in full control of which tickets Point sees and how its answers are used.

## Setting up a connection

In Syskit Point, go to **Settings** > **Integrations** > **Ticketing (1)**.

* **Click Add Connection (2)** and pick your ticketing system. 
  * In this example, for the sake of the screenshots we are using Jira Service Management. 
  * The connection setup and requirements is explained in-app on the right side of the screen for every connection. 
    * **Follow the steps shown for your platform.**

![Ticketing - Add Connection](../../../static/img/point-assistant-ai.png)

![Ticketing - Jira - General](../../../static/img/point-assistant-ai.png)

![Ticketing - Jira - Ticketing Setup](../../../static/img/point-assistant-ai.png)

![Ticketing - Jira - Callback](../../../static/img/point-assistant-ai.png)

There is also an **Custom / Other** option you can use to integrate ticketing platforms we currently don't have a native connection with.


:::info

**Please Note,** the Ticketing integration **does not**:

* Make changes in your Microsoft 365 tenant — restoring Eva's access is still an admin action, done through Point or your admin tools.
* Decide how tickets are handled — forwarding rules and how answers are posted are controlled by your setup in the ticketing tool.

:::


## Data handling

Point processes the ticket content it receives (to understand the question) and returns an answer. Ticket content is processed under the same rules as all LLM features in Point — within your Azure boundary, never used to train the foundation models. Details are in [AI Data Privacy & Security](../ai-data-privacy-and-security.md).
