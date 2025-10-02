---
description: The Copilot Readiness tile on the Syskit Point Dashboard helps you detect areas of improvement or potential security concerns.
---

# Copilot Readiness

The new Copilot Readiness tile on the Syskit dashboard is a helpful addition for businesses preparing to integrate Copilot into their workflow or those that want to stay on top of policy vulnerabilities or overshared workspaces that could pose a security risk. 

By providing a clear and comprehensive Copilot Readiness score, you are able to quickly identify vulnerabilities or areas for improvement. With insights into policy vulnerabilities, overshared workspaces, and risky sharing practices, you can ensure your environment is secure and address potential security concerns upfront, which makes your Copilot integration smoother and safer.

The following is counted for the Copilot Readiness:

* Number of vulnerabilities detected for the **Workspaces Shared with Everyone policies (1), the Workspaces with Too Many Members (2), Workspaces with Shadow Users (3)**
* The **Group Access (4) and Sharing Links reports (5)**
* The number of **company-wide sharing links (6)** as well as **company-wide sharing links that contain sensitive files (7)**
* The number of **links shared with anyone (8) and links shared with anyone that contain sensitive files (9)**
* The number of **public workspaces (10)** and the **public workspaces with sensitive files (11)**

![Copilot Readiness Tile](../../static/img/copilot-readiness-tile.png)


## Sensitive Files 

{% hint style="warning" %}
**Please note!**  
For sensitive files to be detected and shown on the Copilot Readiness tile, you need to set it up through the Settings of Syskit Point. 

{% endhint %}

To enable sensitive files being shown on the Copilot Readiness score **go to Settings**.

 * Under **General**, navigate to the **Sensitive Content section (1)**
 * **Click the arrow (2)** to open selection box where you can **check the box for the sensitivity labels** you want included in the sensitive files reports
* **Click Save (3)** to finalize your selection

![Copilot Readiness Tile - Settings for Sensitive Files](../../static/img/copilot-readiness-tile-sensitive-files.png)

## Reports

The following reports can be generated through the Copilot Readiness tile:

* [Private Workspaces Shared with Everyone](../governance-and-automation/security-compliance-checks/private-workspaces-shared-with-everyone.md)
* [Group Access](../reporting/access-reports.md#group-access-report)
* [Workspaces with Too Many Members](../governance-and-automation/security-compliance-checks/workspaces-with-too-many-members.md)
* [Workspaces with Shadow Users](../governance-and-automation/security-compliance-checks/workspaces-with-shadow-users.md)
* [Sharing Links](../reporting/external-sharing-reports.md#sharing-links)
  * You can generate the report to show links that were shared company-wide and links shared with anyone
* [Public Microsoft Teams & Groups](../microsoft365-inventory/microsoft-teams-and-groups.md)
  * The report automatically applies the public Groups & Teams view when being generated


