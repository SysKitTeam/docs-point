---
description: This article lists improvements and bug fixes in Syskit Point version 2025.5.113
---

# Syskit Point 2025.5.113

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2025.5.113

**Build number:** 74

**Release date:** October 23, 2025

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
 Find all steps described in detail in the [deployment article](../../../set-up-point-enterprise/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
 [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-enterprise/deployment/upgrade-syskit-point.md).

## New Features

* **Introducing the new Workspace Review!**
  * **The Workspace review**, in the context of the Microsoft 365 environment, is a scheduled review for Microsoft 365 workspaces that ensures each workspace follows your organization's governance policies.
  * The new **Workspace Review policy** helps organizations **maintain and secure their Microsoft 365 environment by enabling regular, structured, and recommendation-driven review of the most essential workspace settings**. It provides automated tasks for workspace owners to review and resolve policy vulnerabilities related to **access, privacy, and sensitivity**. 
  * **Admins can define custom workspace review policies that trigger during specified review cycles, ensuring that workspace owners regularly evaluate their workspaces**.
  * **Read the articles listed below to learn more about the new Workspace Review**:
    * **Syskit Point Admins**:
      * [Enable and configure the automated Workspace Review in Syskit Point](../../../governance-and-automation/workspace-review/setup-workspace-review.md)
      * [Monitor Workspace Reviews in Syskit Point](../../../governance-and-automation/workspace-review/monitor-workspace-review.md)
    * **Syskit Point Collaborators/Reviewers**
      * [Learn how to resolve Workspace Review tasks in Syskit Point](../../../point-collaborators/workspace-review/workspace-review-overview.md)

* **Two new Power Platform reports are available in Syskit Point!**
  * **Copilot Agents Inventory report**, and
  * **Copilot Agent Knowledge Sources report**
  * [Find more information about the reports in the Copilot Agents Reports article.](../../../power-platform/power-platform-reports/copilot-agents-reports.md)

:::warning
**Please Note!** 
To configure Copilot Agents data sync and reports currently available in early access, [please contact us](https://www.syskit.com/contact-us-power-platform/).
:::

## Improvements & Bug Fixes

* **Yammer is now Viva Engage.**
  * Yammer was renamed, and the icons were changed to reflect the Microsoft 365 branding.

* **Two new endpoints have been added** to the Syskit Point API.
  * **GET /1.0/webhooks/endpoints** - retrieves all existing webhook endpoints registered in Syskit Point.
  * **DELETE /1.0/webhooks/endpoints** - deletes a specified webhook endpoint.
  * If the webhook endpoint URL doesn't exist, the API returns a **404 Not Found** response.
  * If a webhook endpoint is successfully deleted, the API returns a **204 No Content** response. 
  * [Find more information in the dedicated Webhooks article.](../../../integrations/webhooks.md)

* **Power Platform reports improved**:
  * **URL column added** to the Copilot Agent Knowledge Sources report
  * **App Id column added** to the Power Apps Inventory and Power Apps Permissions reports

* **The Last Logged In** column on all reports has been renamed to **Last Tenant Log In**.
  * This change was made to ensure clarity with users that the column references the last tenant log in, not the last workspace log in. 

* **New site metric** was added: Number of Items Shared with Everyone. 
  * The Number of Items Shared with Everyone column can be selected from the column chooser on the Sites Overview and Teams & Groups Overview screens.

* **Fixed an issue** where users could click the Archive action for Private and Shared Channel sites from the Storage Metrics report, which caused an error to occur.
  * The Archive action is now unavailable for private and shared channel sites, and they can only be archived as part of their parent Team.

* **Fixed the issues** when resolving policy vulnerability tasks. 
  * The task no longer fails when deleting a site or team.
  * The progress indicator now accurately shows the progress of the task. 

* **Fixed a bug** that caused errors when generating the Group Access report on large tenants; the report is now generated without missing data. 

* **Fixed an issue** where the Orphaned Workspaces report export resulted in an error.

* **Improved the Delete workspace action** to support a bulk deletion of more than 20 Teams.
  * Before, deleting more than 20 Teams at once would result in the following error: `Microsoft.Graph.ClientException: Code: MaximumValueExceeded
Message: Number of batch request steps exceeds the maximum value of 20.`

* **Fixed an issue** that caused the Swagger documentation to cache and display the wrong host domain name.
  * In some instances, if a request was sent with an X-Forwarded-Host header, that value would be cached and returned to all clients accessing the Swagger documentation endpoints. 
  * The received host value is now validated against a whitelist of allowed domains, which can be edited in the web service App Settings as XForwardedHostHeaderOptions__AllowedHosts settings.

* **Various improvements and minor UX and UI fixes are available**.