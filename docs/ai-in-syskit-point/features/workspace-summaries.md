---
description: Workspace Summaries turn everything Syskit Point knows about a workspace into a plain-language overview in one click, dropping workspace assessment from hours to seconds.
---

# Workspace Summaries

:::info

**Uses LLM functionality — admin opt-in required.** Off by default; processing runs through Microsoft Foundry (Azure-hosted models) in your selected Azure region, and your data is never used to train the foundation models. See [AI Data Privacy & Security](../ai-data-privacy-and-security.md).

:::

**Knowing whether a single workspace is healthy normally means digging through dashboards** and cross-referencing sharing links, permissions, sensitivity labels, inactive access, and storage. In an environment with thousands of workspaces, no admin has time for that — so risks sit unnoticed until they become incidents.

Workspace Summaries turn everything Syskit Point knows about a workspace into a plain-language overview, in one click. Workspace assessment drops from hours to seconds.

## Generate a summary

1. Open any workspace's details page in Syskit Point.
2. Select **Summarize**.
3. The summary appears within seconds.

**[Screenshot: the Summarize button on a workspace details page.]**

## What's in a summary

* **The top 3–5 issues** that need attention in this workspace — prioritized, not a data dump.
* **Benchmarks** against your organizational averages, so you know whether "47 sharing links" is normal or an outlier in *your* environment.
* **Quantified impact** where acting has measurable value — for example, *more than 100 GB reclaimable by deleting old file versions*.
* **Direct links** — each item links straight into the Syskit Point report where you can investigate and fix it.

## How to use it well

* **Triage:** before a workspace review, generate summaries for the workspaces in scope to know where to focus.
* **Handoffs:** paste a summary into a ticket or chat to bring a colleague up to speed on a workspace's state in one message.
* **Owner conversations:** the plain-language format works for workspace owners who don't live in admin dashboards.

## Good to know

* Summaries reflect data currently synced into Syskit Point.
* A summary is an assessment aid, not an action. Fixing issues happens through the linked reports and standard Point workflows.
* Summaries are generated on demand and are not stored.
