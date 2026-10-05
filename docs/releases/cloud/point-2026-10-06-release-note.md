---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.3.162.14
---

# October 6, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

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
  * For more details, [please take a look at the article link here.](../../ai-agents-and-apps/ai-agents-and-apps-overview.md)

* **New actions are available for Entra apps.**
  * You can now complete the following actions on the **Apps Inventory** report and on the app details screen:
    * **Block sign-in** and **Allow sign-in**
      * Block sign-in stops the app from signing in to your tenant, and Allow sign-in lets it sign in again.
    * **Delete**
      * This action helps you remove apps that are no longer needed.
      * For apps registered in your tenant, both the app registration and its enterprise application are deleted.
  * For more details, [please take a look at the article link here.](../../ai-agents-and-apps/ai-agents-and-apps-overview.md)


* **New details screens are available for AI agents and Entra apps.**
  * The details screens bring together all the key information about a single agent or app, along with the actions you can take on it.
  * The AI Agents details screen can be accessed by clicking an Agent name on the Agents Inventory Report. 
  * The AI Apps details screen can be accessed by clicking an Apps name on the Apps Inventory Report. 
  * AI Agents in Syskit Point is still in early access, and the details screens will be expanded with new information over time.
  * For more details, [please take a look at the article link here.](../../ai-agents-and-apps/ai-agents-and-apps-overview.md)

## Improvements & Bug Fixes

* **Improvements made to Reports.**
  * **The Department metadata is now filled in for OneDrive sites** based on the department of the OneDrive owner.
    * This lets you sort, filter, and export OneDrive sites by department.
  * **Fixed an issue** in the **Storage Metrics** report where the **Potential Savings (Stale Files)** column was empty in exported files, even though the values were shown in the report.
  * **Fixed an issue** where the **Agents Inventory** and **Apps Inventory** reports could keep loading without displaying any data on slow network connections.

* **Fixed a bug** in the **Inactive Workspaces** policy where a workspace kept using the **Keep** action was not detected as inactive again after the keep period ended.
  * As a result, no new policy vulnerability was raised for the workspace, even if it was still inactive.

* **Fixed an issue** in Workspace Review where the Accept Risk action was unavailable for the Maximum Number of Owners vulnerability when task delegation was turned off in that policy.
  * Reviewers can now always accept risk when task delegation is off. 
  * When task delegation is on, the option follows the policy setting.

* **Various improvements, including UX and UI fixes, have been implemented.**
