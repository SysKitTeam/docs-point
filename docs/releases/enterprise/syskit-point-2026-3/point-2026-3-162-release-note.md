---
description: This article lists new features, improvements, and bug fixes in Syskit Point version 2026.3.162
---

# Syskit Point 2026.3.162

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2026.3.162

**Build number:** 80

**Release date:** October 13, 2026

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)
* **Need this specific version?**\
[Deploy Syskit Point version 2026.3.162.14](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitdownloadsstorage.blob.core.windows.net%2Fpoint%2Fdeployment-packages%2Fv2026-3-162-14%2FPointUpdateTemplate.json)

For detailed step-by-step instructions on how to upgrade Syskit Point, refer to the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## New Features

* **New actions are available for AI agents.**
  * You can now complete the following actions on the **Agents Inventory** report and on the agent details screen:
    * **Block** and **Unblock**
      * These actions are available for Copilot Studio and Agent Builder agents.
      * Block an agent to stop people from using it, and unblock it to make it available again.
    * **Reassign**
      * This action is available for Copilot Studio and Agent Builder agents and lets you assign a new owner to an agent, which can come in handy for orphaned agents.
      * Note that the new owner must have access to the Power Platform environment where the agent is located.
    * **Delete**
      * This action helps you remove agents that are no longer needed and is available for Copilot Studio, Agent Builder, and SharePoint agents.
      * For SharePoint agents, the agent file is deleted from the site where it is stored.
    * **Knowledge Sources**
      * This action opens a list of all the knowledge sources the selected agent uses, with the **name**, **type**, **location**, and **sensitivity label** of each source.
  * To complete these actions, you need permission to manage the agent in Microsoft 365.
  * For more details, [please take a look at the AI Agents Actions article.](../../../ai-agents-and-apps/ai-agents-and-apps-actions.md#agent-actions)

* **New actions are available for Entra apps.**
  * You can now complete the following actions on the **Apps Inventory** report and on the app details screen:
    * **Block sign-in** and **Allow sign-in**
      * Block sign-in stops the app from signing in to your tenant, and Allow sign-in lets it sign in again.
    * **Delete**
      * This action helps you remove apps that are no longer needed.
      * For apps registered in your tenant, both the app registration and its enterprise application are deleted.
  * For more details, [please take a look at the Entra App Actions article.](../../../ai-agents-and-apps/ai-agents-and-apps-actions.md#entra-app-actions)

* **New details screens are available for AI agents and Entra apps.**
  * The details screens bring together all the key information about a single agent or app, along with the actions you can take on it.
  * The [AI Agents details screen](../../../ai-agents-and-apps/ai-agents-and-apps-agents-inventory.md#agent-details) can be accessed by clicking an Agent name on the Agents Inventory Report.
  * The [AI Apps details screen](../../../ai-agents-and-apps/ai-agents-and-apps-apps-inventory.md#app-details) can be accessed by clicking an Apps name on the Apps Inventory Report.
  * AI Agents in Syskit Point is still in early access, and the details screens will be expanded with new information over time.

## Improvements & Bug Fixes

### Security & Compliance

* **Restricted Content Discovery (RCD) can now be managed by site admins**, in addition to Syskit Point admins, when your organization has enabled delegated RCD management.

### Governance

* **You can now select a group as the fallback reviewer for the Inactive Guest Users Policy.**
  * The group is used to review and resolve the task when an inactive guest user does not have a manager assigned.

* **Fixed a bug** in the **Inactive Workspaces** policy where a workspace kept using the **Keep** action was not detected as inactive again after the keep period ended.
  * As a result, no new policy vulnerability was raised for the workspace, even if it was still inactive.

* **Fixed an issue** in Workspace Review where the Accept Risk action was unavailable for the Maximum Number of Owners vulnerability when task delegation was turned off in that policy.
  * Reviewers can now always accept risk when task delegation is off.
  * When task delegation is on, the option follows the policy setting.

### Access Management

* **The Restrict Sharing action is now available.**
  * The action can be taken from the Sharing Links, Permission Matrix, and User Access reports.
  * It applies to organization-wide and Anyone hero links, and reverts their sharing so that only people who were already added keep access.

* **Org-wide and Anonymous default sharing links are now reported before they are used.** Syskit Point detects default (hero) links shared with your entire organization or with anyone and shows them on the Sharing Links report, and on the Anonymous Access Links report for Anyone links, even before SharePoint has fully registered them.

### Reporting

* **The Department metadata is now filled in for OneDrive sites** based on the department of the OneDrive owner.
  * This lets you sort, filter, and export OneDrive sites by department.

* **Fixed an issue** where a report view could not be created when it contained too many filters.

* **Fixed an issue** where the **Last Tenant Log In** column was not displayed correctly on the External Users report.

* **Fixed an issue** where the **Agents Inventory** and **Apps Inventory** reports could keep loading without displaying any data on slow network connections.

* **Fixed an issue** where Point Assistant could occasionally reference reports and data from features that were not enabled.

### Storage

* **Fixed an issue** in the **Storage Metrics** report where the **Potential Savings (Stale Files)** column was empty in exported files, even though the values were shown in the report.

### Configuration

* **Fixed a bug** where Point failed to send emails with attachments larger than 3MB when the Exchange Online send method was selected.
  * This could occur when PDF reports or multiple XLSX reports were sent in the same email.

* **Fixed an issue** where emails sent using the SMTP method could time out before being sent.

### Sync & Performance

* **Fixed an issue** where some sites could be labeled with an incorrect site template when their actual template could not be determined during sync.

* **Fixed an issue** where sites were not synced as often as the configured refresh interval, causing the site information to be updated less frequently than expected.

* **Various improvements, including UX and UI fixes, have been implemented.**
