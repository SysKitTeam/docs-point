---
description: Entra Apps reports provide an overview of the Entra apps in your tenant, show which ones can access your Microsoft 365 data, and track their activity and configuration changes.
---

# Entra Apps Reports

In this article, there is information on the following Entra Apps reports:

* [Apps Inventory Report](#apps-inventory-report)
* [App Activity Report](#app-activity-report)
* [App Configuration Changes Report](#app-configuration-changes-report)

These reports can be accessed in the Report Center by selecting the **AI Agents** category in the filter. The App Activity and App Configuration Changes reports can also be opened from the Apps Inventory report by selecting one or more apps.

* [For reports on agents, take a look at the AI Agents Reports article.](ai-agents-reports.md)
* [For the permissions granted to apps and agents, take a look at the Permissions and Consent Report article.](permissions-and-consent-report.md)
* [For actions you can take on apps, such as Block sign-in and Delete, take a look at the AI Agents Actions article.](../ai-agents-and-apps-actions.md#entra-app-actions)

## Apps Inventory Report

The **Apps Inventory** report gives you an overview of the **Entra ID app registrations, enterprise applications, and service principals** in your tenant, with their **usage, ownership, and permissions**. It helps you see which Entra apps can access your Microsoft 365 data and identify the ones that need attention.

### Generate Report

You can open the Apps Inventory report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the Apps Inventory report tile** to open the report.
* From the **Dashboard**: 
  * Go to the [AI & app governance Dashboard tile](../ai-agents-and-apps-dashboard-tile.md) and in the Apps section, click **View all apps** to open the full report, or click any of the counts on the tile to open the report filtered to that view. 

### Report Data

Once the report is generated successfully, tiles at the top give you a quick overview:

* **The Overview tile shows** the total number of **apps found in your tenant**, with a breakdown by classification (AI assistants, Agent Identity, Microsoft first-party, and Other). Take a look at the [App Classification](#app-classification) section for what each classification means.
* **The Needs Attention tile highlights** the apps that may require action, with numbers showing the amount for each insight:
  * **High Privileged** - means the app holds a granted delegated permission or application role that matches Syskit Point's maintained catalog of high-privilege permissions. 
    * Examples include tenant-wide role and consent management, broad directory writes, directory access as the signed-in user (`Directory.AccessAsUser.All`), full SharePoint control, and high-impact mail or Teams writes. 
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

* **Name** - the name of the app
* **Classification** - the category Syskit Point assigns to the app based on what it is; see the [App Classification](#app-classification) section for what each classification means
* **Origin** - shows where the app comes from, i.e., whether it was built in your tenant or comes from a third party, for example, Third party (multi-tenant)
* **State** - shows whether the app is currently active in your tenant, for example, Activated
* **Permissions** - the number of application and delegated permissions granted to the app
* **Insights** - highlights flagged for the app that may require your attention, such as High Privileged, Accessed Sensitive Data, or Unverified Publisher; the meaning of each insight is described in the Needs Attention tile above

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

### App Classification

A typical tenant contains hundreds of apps, and most of them are Microsoft's own first-party apps and internal tooling that don't need active governance. Syskit Point classifies every app so you can filter out that noise and focus on the apps that matter most, above all the AI assistants that reach Microsoft 365 data through an app registration.

Each app is assigned one of the following classifications:

* **AI Assistant** - surfaces AI tools, such as Claude, ChatGPT, or Copilot extensions, even when they otherwise look like ordinary enterprise apps.
* **Agent Identity** - apps that act as an agent identity, tying the app inventory to the AI-agent world.
* **Microsoft First-Party** - apps published by Microsoft. These are classified so you can filter them out of the default view.
* **Other** - apps that matched none of the above.

### App Details

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
  * **Permission** - the name of the granted permission, for example, Files.Read.All
  * **Description** - shows what the permission allows
  * **API/resource** - the resource API the permission is granted for, for example, Microsoft Graph
  * **Type** - shows how the permission is used:
    * **Application** - the app uses the permission on its own, without a signed-in user
    * **Delegated** - the app uses the permission on behalf of the signed-in user, and can access only what that user can access
  * **Consent** - shows who granted the permission:
    * **Admin** - an administrator granted the permission for the whole organization
    * **User** - an individual user granted the permission for themselves
  * **Privilege** - shows how much impact the permission can have if misused, from **High** to **Low**
  * **M365 Data** - shows whether the permission grants access to Microsoft 365 data, such as mail, files, chats, calendars, or sites

From the app details screen, you can also complete the **Block sign-in** or **Allow sign-in** and **Delete** actions for that app.
* [Take a look at the AI Agents Actions article for more details.](../ai-agents-and-apps-actions.md#entra-app-actions)

### Report Actions

The Apps Inventory report can be **exported as PDF, CSV and XLSX files**. There is also the **option to schedule the report**.

Selecting one or more apps in the report lets you:

* **Complete app actions**, such as Block sign-in, Allow sign-in, and Delete
  * [Take a look at the AI Agents Actions article for more details on all the available app actions.](../ai-agents-and-apps-actions.md#entra-app-actions)
* **Open the following reports** for the selected apps:
  * [App Activity](#app-activity-report)
  * [App Configuration Changes](#app-configuration-changes-report)

## App Activity Report

:::info
**The App Activity report** is available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

The **App Activity** report shows **everything the selected apps did**, including the files they accessed, who they acted for, and sign-ins to them, for example, **Modified file** or **User logged in**.

### Generate Report

You can open the App Activity report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the App Activity report tile** to open the selection screen with the list of apps from the Apps Inventory.
  * **Select the apps** you want to include in the report to generate it.
* From the **Apps Inventory report**:
  * **Select one or more apps** and **click the App Activity action**.

### Report Data

The report opens on the **Last 30 Days** view. The default columns displayed in the report are:

* **Date** - when the activity happened
* **Activity** - the type of activity, for example, Modified file or User logged in
* **App** - the app that performed the activity
* **Performed By** - the user who performed the activity, or on whose behalf the app acted
* **Workload** - the Microsoft 365 service where the activity happened, for example, SharePoint or OneDrive
* **Item** - the item the activity was performed on, for example, a file
* **IP Address** - the IP address from which the activity was performed
* **Additional Info** - more details about the activity

To see more details, **expand each row**.

### Report Actions

The App Activity report can be **exported as XLSX and CSV files**. There is also the **option to schedule the report**.

## App Configuration Changes Report

:::info
**The App Configuration Changes report** is available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

The **App Configuration Changes** report shows **the changes made to the selected apps in Microsoft Entra**, including permissions, consent, credentials, and owners, for example, **Updated service principal**.

### Generate Report

You can open the App Configuration Changes report in two ways:

* From the **Report Center**:
  * **Click the Reports button** on the screen's left side.
  * **Select the AI Agents category in the filter** in the upper left corner.
  * **Click the App Configuration Changes report tile** to open the selection screen with the list of apps from the Apps Inventory.
  * **Select the apps** you want to include in the report to generate it.
* From the **Apps Inventory report**:
  * **Select one or more apps** and **click the App Configuration Changes action**.

### Report Data

The default columns displayed in the report are:

* **Date** - when the change was made
* **Activity** - the type of change, for example, Updated service principal
* **App** - the app that was changed
* **Performed By** - the user who made the change
* **IP Address** - the IP address from which the change was made
* **Additional Info** - more details about the change

To see more details, **expand each row**.

### Report Actions

The App Configuration Changes report can be **exported as XLSX and CSV files**. There is also the **option to schedule the report**.

## Related Articles

* [AI Agents Overview](../ai-agents-and-apps-overview.md)
* [Configure AI Agents](../ai-agents-and-apps-settings.md)
* [AI & app governance Dashboard tile](../ai-agents-and-apps-dashboard-tile.md)
* [AI Agents Reports](ai-agents-reports.md)
* [Permissions and Consent Report](permissions-and-consent-report.md)
* [AI Agents Actions](../ai-agents-and-apps-actions.md)