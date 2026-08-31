---
description: Sensitivity Label Recommendations use machine learning to recommend labels for unlabeled workspaces and flag existing labels that look wrong, based on the labeling decisions your organization has already made.
---

# Sensitivity Label Recommendations

:::info

**Machine learning feature - no LLM involved, no AI toggle required.** Analysis runs entirely within Syskit Point. Take a look at the [AI Data Privacy & Security](../ai-data-privacy-and-security.md) article for more details.

:::

**Unlabeled or wrongly labeled workspaces are open exposure windows**; the policies and protections tied to sensitivity labels simply don't apply to them. And manually classifying every new and legacy workspace takes up time.

Sensitivity Label Recommendations help with that. Machine learning analyzes the workspaces your organization has **already labeled**, learns what each label looks like in practice, and:

* **Recommends labels** for unlabeled workspaces.
* **Flags existing labels that look wrong**.
  * For example, a workspace labeled *General* that behaves exactly like your *Confidential* workspaces deserves a second look.

## How it works

* The model learns from your organization's own labeling decisions - membership patterns, content signals, sharing behavior, and workspace characteristics of already-labeled workspaces. **[Exact signal list to be confirmed.]**
* It scores unlabeled workspaces against those patterns and proposes the best-fitting label.
* Recommendations appear in **[recommendation surface — to be confirmed]**. **[Screenshot: the recommendation review surface.]**
* An admin **confirms or dismisses** each recommendation.

## The rules that keep you in control

* **Admin-confirmed, never auto-applied.** 
  * No label is ever applied without an explicit admin decision.
* **Improves with coverage.** 
  * The more workspaces you label (and the more recommendations you confirm or correct), the better the recommendations get.
* **Faster classification of new workspaces.** 
  * Newly created and unmanaged workspaces get a recommendation sooner, shrinking the window where they sit unprotected.

## Prerequisites

* Sensitivity labels are set up in your Microsoft 365 tenant and visible to Syskit Point (see [Enable Sensitivity Labels](../../configuration/enable-sensitivity-labels.md)).
* There is a meaningful base of already-labeled workspaces to learn from. 

## Reviewing recommendations

For each recommendation you'll see the workspace, the proposed label, and **[confidence indicator / supporting rationale — to be confirmed]**. Confirming applies the label through the standard mechanism; dismissing records your decision so the same recommendation doesn't repeatedly show up. 
