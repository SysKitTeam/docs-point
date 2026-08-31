---
description: How AI features in Syskit Point handle your data — written to answer the questions security and compliance teams ask before enabling AI functionality.
---

# AI Data Privacy & Security

This article describes how AI features in Syskit Point handle your data. It should help answer the questions security and compliance teams could ask before enabling AI functionality.

The use of AI features is governed by the [Syskit AI Terms](https://www.syskit.com/legal/ai-terms).

## The Four Commitments

* **Off by default, customer-activated.** 
  * All AI features that use LLM functionality are disabled until an admin explicitly enables them in Settings. 
  * There is no silent enablement, and no AI processing of your data happens before you opt in. See [Enable AI Features](enable-ai-features.md).

* **Data stays in your boundary.** 
  * LLM processing runs through Microsoft Foundry (Azure-hosted models) in the Azure region your organization selects. 
  * Your data is not sent to third-party AI providers outside that boundary.

* **Your data is never used to train the foundation models.**
  * Customer data processed by AI features in Syskit Point is never used to train, fine-tune, or improve the foundation models that power Point's AI features. 
  * Prompts you enter are collected solely to improve Point's AI features themselves, never the underlying models.
    * See *Is prompt and response data retained?* below and the [Syskit AI Terms](https://www.syskit.com/legal/ai-terms).

* **Machine learning features involve no LLM.** 
  * Permission Anomaly Reports and Sensitivity Label Recommendations use statistical and machine learning analysis that runs entirely within Syskit Point, with no LLM involved. 
  * They do not require the AI toggle and are governed by the same data handling as Syskit Point's standard reports.

## AI features and Data Access

AI features work exclusively on data Syskit Point already has: your tenant's users, groups, workspaces, permissions, sharing links, audit logs, storage data, and Point's own reports. Enabling AI features does not expand what Syskit Point collects from your tenant.

Existing boundaries continue to apply:

* **Permissions:** AI features respect Syskit Point's role-based access. Users see only what their Point role allows them to see.
* **Sync scope:** Answers reflect what is synced into Syskit Point, at the time of the last sync.
* **Audit retention:** Activity-related answers are limited by your audit log retention period.

AI features in Syskit Point **deliver findings and recommendations**. 

**They do not make administrative changes so there will be**: 
* **No** permission removals 
* **No** membership changes 
* **No** deletions. 
* **Every action remains a human decision made through Syskit Point's standard workflows**.

## Frequently Asked Security Questions

**Which AI models are used, and where does processing happen?** 

LLM features run through Microsoft Foundry (Azure-hosted models) in the Azure region your organization selects. Machine learning features (Permission Anomaly Reports, Sensitivity Label Recommendations) run entirely within Syskit Point with no LLM involved.

**Which features involve an LLM?** 

Point Assistant, Ticketing Integrations, Syskit Point MCP Server, Workspace Summaries, and Naming Recommendations use an LLM and require opt-in. Permission Anomaly Reports and Sensitivity Label Recommendations are machine learning only - no LLM, no toggle.

**Does enabling AI give Syskit Point access to more of our data?** 

No. AI features work exclusively on data Syskit Point already collects. The AI opt-in changes how you can interact with that data, not what is collected.

**Can AI features change things in our tenant?** 

No. All AI features deliver findings and recommendations. Administrative changes remain human decisions made through standard Point workflows.

**Can a user see data through AI features that their Point role doesn't allow?** 

No. The Point Assistant and the MCP Server answer within the connecting identity's Point role. AI is not a path around role-based access.

**Is our data used to train AI models?** 

Your prompts and their responses are never used to train the foundation models that power Point's AI features. Prompts are collected and used only to improve Point's AI features
  * See the next question and the [Syskit AI Terms](https://www.syskit.com/legal/ai-terms).

**Can we enable some AI features and not others?** 

No. AI features are enabled with a single opt-in: turning AI on makes all AI features available.

**Who in our organization can use AI features once enabled?** 

Users with access to Syskit Point, within the limits of their assigned Point role. Syskit Point admins can choose to enable or disable AI for collaborators. Enabling AI does not grant anyone access to data they couldn't already reach through Point.

**Can we turn it off later?** 

Yes. Disabling AI features in Settings takes effect immediately. No AI processing occurs while disabled.

**Is prompt and response data retained?** 

Prompts, yes; responses, no. When you use the Point Assistant, we collect the prompts you enter and use this data only to improve Point's AI features:

* Improve the quality and reliability of AI responses, including resolving issues more quickly with specific information about what you experienced.
* Understand how AI features are used and prioritize improvements that will enhance your experience.

**Responses are not retained.** We never use your prompts or their responses to train the foundation models that power Point's AI features. Full details are in the [Syskit AI Terms](https://www.syskit.com/legal/ai-terms).

:::warning

**To be confirmed before publishing:** the exact Azure region-selection mechanics and the list of supported regions.

:::
