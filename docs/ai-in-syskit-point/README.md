---
description: AI in Syskit Point turns your Microsoft 365 governance data into faster answers and clearer priorities, with features that are off by default and keep your data in your boundary.
---

# Syskit Point AI

import DocCardList from '@theme/DocCardList';

:::info

**Early Access — public preview.** AI features in Syskit Point are currently in Early Access, open to all Syskit Point Cloud customers who opt in. Feature behavior and scope may change during the preview. See [Early Access Program](early-access-program.md) for what to expect.

:::

**Syskit Point uses AI to turn your governance data into faster answers and clearer priorities**, so you spend less time digging through reports and more time acting on what matters.

AI in Syskit Point follows three principles:

* **Off by default.** Features that use LLM functionality are opt-in and must be activated by an admin in Settings. Nothing is enabled without your explicit consent.
* **Your data stays in your boundary.** LLM processing runs through Microsoft Foundry (Azure-hosted models) in your selected Azure region. Your data is never used to train the foundation models.
* **AI assists, admins decide.** AI features deliver findings and recommendations. They do not make administrative changes.

For full details, see [AI Data Privacy & Security](ai-data-privacy-and-security.md).

## AI features at a glance

| Feature | What it does | Technology | Opt-in required |
|---|---|---|---|
| [Point Assistant](features/point-assistant.md) | Ask governance questions in plain language — users, access, activity, storage, reports | LLM | Yes |
| [Ticketing Integrations](features/ticketing-integrations.md) | Attaches the answer to Microsoft 365-related tickets in your ticketing system | LLM | Yes |
| [Syskit Point MCP Server](features/mcp-server.md) | Connect your own AI tools and agents to Syskit Point data | LLM | Yes |
| [Workspace Summaries](features/workspace-summaries.md) | One-click plain-language health summary of any workspace | LLM | Yes |
| [Naming Recommendations](features/naming-recommendations.md) | Suggests names for provisioning templates and policies | LLM | Yes |

| [Sensitivity Label Recommendations](features/sensitivity-label-recommendations.md) | Recommends labels for unlabeled workspaces and flags labels that look wrong | Machine learning (no LLM) | No |

:::info

**Please note:** Machine learning features (Sensitivity Label Recommendations) do not use LLMs and do not require the AI toggle. They analyze your data with statistical models inside Syskit Point, the same way other Point reports do.

:::

## Getting started

1. Review [AI Data Privacy & Security](ai-data-privacy-and-security.md) — share it with your security team if needed.
2. [Enable AI features](enable-ai-features.md) in Settings.
3. Start with the [Point Assistant](features/point-assistant.md) — it's the quickest way to see what AI in Syskit Point can do.

## Governing AI in your tenant

Looking for how to govern the AI your organization already uses — Microsoft 365 Copilot and AI agents? That's covered elsewhere in the documentation:

* [Copilot Readiness](../microsoft365-inventory/copilot-readiness.md)
* [AI Agents reports](../reporting/ai-agents-reports.md)
* [Copilot Agents reports](../power-platform/power-platform-reports/copilot-agents-reports.md)
* [Restrict content from Microsoft 365 Copilot](../access-management/restrictions.md)

## In this section

<DocCardList />
