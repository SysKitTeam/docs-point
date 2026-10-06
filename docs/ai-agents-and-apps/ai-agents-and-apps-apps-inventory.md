---
description: The Apps Inventory report provides an overview of the Entra apps in your tenant and shows which ones can access your Microsoft 365 data.
---

# Apps Inventory Report

The **Apps Inventory** report gives you an overview of the **Entra ID app registrations, enterprise applications, and service principals** in your tenant, with their **usage, ownership, and permissions**. It helps you see which Entra apps can access your Microsoft 365 data and identify the ones that need attention.

:::info

**AI Agents in Syskit Point is currently in Early Access** and free to use while the feature is in active development. Feature behavior and scope may change as new capabilities are released.

:::

## Generate Report

You can open the Apps Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Apps Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI Agents tile](ai-agents-and-apps-dashboard-tile.md) and in the Entra Apps section, click **View all apps** to open the full report, or click any of the counts on the tile to open the report filtered to that view. 

## Report Data

Once the report is generated successfully, tiles at the top give you a quick overview:

* **The Overview tile shows** the total number of **apps found in your tenant**, with a breakdown by classification (AI assistants, Agent Identity, Microsoft first-party, and Other). Take a look at the [App Classification](#app-classification) section for what each classification means.
* **The Needs Attention tile highlights** the apps that may require action, with numbers showing the amount for each insight:
  * **High Privileged** - means the app holds a granted delegated permission or application role that matches Syskit Point's maintained catalog of high-privilege permissions. 
    * Examples include tenant-wide role and consent management, broad directory writes, full SharePoint control, and high-impact mail or Teams writes. 
    * These permissions can enable privilege escalation, broad data changes, or tenant-wide actions.
  * **Unverified Publisher** - means the app comes from an external source and has no verified publisher (no verified MPN ID). 
    * Built-in tenant and Microsoft first-party apps are excluded. 
    * This highlights third-party and gallery apps whose publisher identity Microsoft has not verified.
  * **Inactive Apps** - means the app's latest known successful sign-in is more than 90 days old. 
    * Old consent and credentials remain an attack surface even when the app is no longer used.
  * **Accessed Sensitive Data** - means that Syskit Point observed the app access SharePoint or OneDrive content that is currently covered by a sensitivity label marked as sensitive. 
    * This combines the potential access implied by permissions with evidence of actual content access.

* **The Most Active Apps tile lists** the apps with the most active users over the last 90 days.

The report grid shows the following columns:

* **Name** of the app
* **Classification** - for example, AI assistant or Agent Identity
* **Origin** - where the app comes from, for example Third party (multi-tenant)
* **State** - for example, Activated
* **Permissions** - the number of application and delegated permissions the app holds
* **Insights** - highlights such as High Privileged, Accessed Sensitive Data, or Unverified Publisher


The additional columns available in the column chooser are:

* M365 Data Access
* Owners
* Sponsors
* Created On
* Read/Write
* Active Users
* Last Activity
* Application ID
* Application/service principal type
* Interactions (90 days)
* Last Content Activity
* Service principal object ID
* Sign-in audience
* Publisher
* Sensitive data access

The Apps Inventory report can be **exported as PDF, CSV and XLSX files**. There is also the **option to schedule the report**.

Selecting one or more apps in the report lets you complete app actions, such as Block sign-in and Delete.
* [Take a look at the AI Agents Actions article for more details on all the available app actions.](ai-agents-and-apps-actions.md)

## App Classification

A typical tenant contains hundreds of apps, and most of them are Microsoft's own first-party apps and internal tooling that don't need active governance. Syskit Point classifies every app so you can filter out that noise and focus on the apps that matter most, above all the AI assistants that reach Microsoft 365 data through an app registration.

Each app is assigned one of the following classifications:

* **AI Assistant** - surfaces AI tools, such as Claude, ChatGPT, or Copilot extensions, even when they otherwise look like ordinary enterprise apps.
* **Agent Identity** - apps that act as an agent identity, tying the app inventory to the AI-agent world.
* **Microsoft First-Party** - apps published by Microsoft. These are classified so you can filter them out of the default view.
* **Other** - apps that matched none of the above.

## App Details

The app details screen brings together all the key information about a single app, along with the actions you can take on it.

To open the app details screen, **click the app name** on the Apps Inventory report.

The app details screen contains the following tiles:

* **The General info tile** shows the identity of the app in two columns, side by side:
  * **App registration in publisher's tenant** - with information from the tenant where the app is registered, such as the Application ID, home tenant, object type, and whether the publisher is verified
  * **Enterprise app in your tenant** - with information from your tenant, such as the origin, object type, object ID, Application ID, whether the app is enabled, list of owners, and when it was created
  * You can copy the IDs shown on the tile to the clipboard.
  * If information is controlled by the app publisher and can't be read from your tenant, the tile shows that it is not available.
* **The Insights tile** shows the same highlights as the **Insights** column on the Apps Inventory report, with slightly more detail, showcasing any potential issues.
* **The Active Users tile** shows the number of users who signed in to the app in the last 30 days, with the **User**, **Email**, and **Last activity** date of each user.
  * The most recent users are shown first.
  * The tile shows a preview, and you can open the full report to see all the users by clicking Explore. 
    * The full report can be sorted, filtered, and exported.
* **The Files Activity tile** shows the files the app accessed in the last 30 days, with the **File name**, **Location**, **Sensitivity label**, and the date the file was last **Accessed**.
  * Files with the highest sensitivity are shown first, followed by the most recently accessed files.
  * The tile shows a preview, and you can open the full report to see all the files the app accessed by clicking Explore. 
    * The full report can be sorted, filtered, and exported.
* **The Permissions and consent tile** shows a summary of the permissions granted to the app, including the total number of granted permissions, the number of high-privilege permissions, and the number of permissions not used in the last 90 days. Each granted permission is listed with:
  * **Permission** - name
  * **Description** - shows what the permission allows
  * **API/resource**
  * **Type** - application or delegated
  * **Consent** - admin or user
  * **Privilege** - high, medium, or low
  * **M365 Data** - whether the permission grants access to Microsoft 365 data, such as mail, file, chats, calendars, or sites

From the app details screen, you can also complete the **Block sign-in** or **Allow sign-in** and **Delete** actions for that app.
* [Take a look at the AI Agents Actions article for more details.](ai-agents-and-apps-actions.md)

## Related Articles

* [AI Agents Overview](ai-agents-and-apps-overview.md)
* [Configure AI Agents](ai-agents-and-apps-settings.md)
* [AI Agents Dashboard](ai-agents-and-apps-dashboard-tile.md)
* [Agents Inventory Report](ai-agents-and-apps-agents-inventory.md)
* [AI Agents Actions](ai-agents-and-apps-actions.md)
* [AI Agents Reports](../reporting/ai-agents-reports.md)


