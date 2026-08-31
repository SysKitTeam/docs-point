---
description: Permission Anomaly Reports use statistical and machine learning analysis to flag genuinely abnormal access across your tenant, turning thousands of permission entries into a prioritized list of risks.
---

# Permission Anomaly Reports

:::info

**Machine learning feature - no LLM involved, no AI toggle required.** These reports use statistical and machine learning analysis that runs entirely within Syskit Point. See [AI Data Privacy & Security](../ai-data-privacy-and-security.md).

:::

**Access outliers are nearly impossible to catch by reviewing permissions one user or resource at a time** - and treating every user and sharing link as equally worth reviewing means the real risks drown in noise. Privilege creep and dormant access quietly accumulate.

Permission Anomaly Reports solve this with eight reports that compare access against peer groups, departments, and statistical norms to flag what is **genuinely abnormal**: overly permissive sharing links, users with far more access than their role warrants, dormant permissions nobody uses, and sensitive-data access that doesn't fit typical patterns.

In one line: they turn thousands of permission entries into a prioritized list of actionable security risks.

## The problems these reports address

* **Over-provisioning** - users accumulating permissions they no longer need (permission creep).
* **Shadow IT** - anonymous and organization-wide sharing links exposing sensitive data.
* **External threats** - external users with elevated access to confidential resources.
* **Dormant access** - permissions unused for months or years.
* **Compliance risk** - unusual access patterns auditors flag under SOX, GDPR, and HIPAA.

## The eight reports at a glance

| Report | What it detects |
|---|---|
| Dormant Permissions | Access to resources not touched in 180+ days, or never |
| Overly Permissive Sharing Links | Anonymous and organization-wide links |
| Unexpected Sensitive Access | External users with access to sensitive resources |
| Excessive Permissions | Users with 2x+ their department's average permissions |
| Elevated Permissions | Edit or Full Control where peers have Read-only |
| Peer Group Anomaly | Users whose access pattern doesn't match their role peers |
| Department Outlier | Permission counts far outside the department norm |
| Statistical Outlier | ML-detected anomalies across 19 features per permission |

## From finding to fix

Each finding links to the affected user, resource, or sharing link in Syskit Point, where standard remediation workflows apply - remove the permission, expire the link, or assign a review task to the workspace owner. The reports prioritize; you (or your delegated owners) decide and act.
