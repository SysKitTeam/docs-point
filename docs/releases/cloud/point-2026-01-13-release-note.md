---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.124.1
---

# January 13, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **New policy available**: Workspaces with Expired Sharing Links
    * This policy helps you detect workspaces that contain expired sharing links.
    * **You can fully automate the removal of expired sharing links in Syskit Point by selecting the Resolve Automatically option in the policy settings**. 
        * [For more details about the Workspaces with expired sharing links policy, read this article.](../../governance-and-automation/automated-workflows/workspaces-with-expired-sharing-links-admin.md)
    * Once a workspace with expired sharing links is detected, it is flagged as a vulnerability and can be found in the Security & Compliance dashboard.
        * [To find out more about the Security & Compliance report and the detected vulnerability, read the related Security & Compliance report article.](../../governance-and-automation/security-compliance-checks/workspaces-with-expired-sharing-links.md)


* **New steps added to the Workspace Review**.
    * **Remove Blocked Members** and **Remove Inactive Guests** added to the Membership step.
    * **Remove Blocked Shadow Users** and **Remove Inactive External Shadow Users** added to the Shadow Users step.
    * **Stop Sharing Content with Large Everyone Groups** step added.
    * **Remove Expired Links**, **Remove Unused Links**, and **Review All Shared Content** added to the Sharing Step.
    * [You can enable the added steps by editing the Workspace Review policy.](../../governance-and-automation/workspace-review/setup-workspace-review.md)
    * [More details on additional steps and options on each of them are described in the Resolve Workspace Review articles.](../../point-collaborators/workspace-review/README.md)

## Improvements & Bug Fixes 

* **Workspace Review** tasks now show steps only in case there are related vulnerabilities detected.
    * For example, the 'Remove Inactive Guests' step is displayed if Inactive Guests exist for the reviewed workspace.
    * The following steps are displayed always: Review All Members, Review All Shadow Users, and Summary. 

* **Fixed an issue** where the Remove User action didn't run when triggered on the Orphaned Users Security & Compliance screen.
    * The issue didn't affect automatic action performed by Syskit Point in case the Resolve Automatically option was enabled for the Orphaned Users policy.

* **Various improvements, including UX and UI fixes, are available.**


