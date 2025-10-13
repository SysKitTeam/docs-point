---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.5.113.XX
---

# October 14, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

**Introducing the new Workspace Review!**

* **The Workspace review**, in the context of the Microsoft 365 environment, is a scheduled review for Microsoft 365 workspaces that ensures each workspace follows your organization's governance policies.
* The new **Workspace Review policy** helps organizations **maintain and secure their Microsoft 365 environment by enabling regular, structured, and recommendation-driven review of the most essential workspace settings**. It provides automated tasks for workspace owners to review and resolve policy vulnerabilities related to **access, privacy, and sensitivity**. 
* **Admins can define custom workspace review policies that trigger during specified review cycles, ensuring that workspace owners regularly evaluate their workspaces**.

**Read the articles listed below to learn more about the new Workspace Review**:

* **Syskit Point Admins**:
  * [Enable and configure the automated Workspace Review in Syskit Point](../../governance-and-automation/workspace-review/setup-workspace-review.md)
  * [Monitor Workspace Reviews in Syskit Point](../../governance-and-automation/workspace-review/monitor-workspace-review.md)
* **Syskit Point Collaborators/Reviewers**
  * [Learn how to resolve Workspace Review tasks in Syskit Point](../../point-collaborators/workspace-review/workspace-review-overview.md)

## Improvements & Bug Fixes 

* **Improved the Delete workspace action** to support a bulk deletion of more than 20 Teams.
  * Before, deleting more than 20 Teams at once would result in the following error: `Microsoft.Graph.ClientException: Code: MaximumValueExceeded
Message: Number of batch request steps exceeds the maximum value of 20.`

* **Various improvements, including UX and UI fixes, are available.**