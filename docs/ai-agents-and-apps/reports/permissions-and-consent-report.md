---
description: The Permissions and Consent report shows the granted permissions, resource APIs, privilege levels, and consent scope for the selected apps and agents.
---

# Permissions and Consent Report

The **Permissions and Consent** report helps you **review the granted permissions, resource APIs, privilege levels, and consent scope** for the selected apps and agents. Use it to see what each app or agent can access, which permissions are highly privileged, and which ones grant access to Microsoft 365 data.

## Generate Report

The Permissions and Consent report can be accessed only from the **Report Center**:

* **Click the Reports button** on the screen's left side.
* **Select the AI Agents category in the filter** in the upper left corner.
* **Click the Permissions and Consent report** to be redirected to the Selection screen.

## Selection

The selection screen opens as a list of the apps and agents in your tenant. For each, you can see its:

* **Name** - the name of the app or agent
* **Classification** - the category Syskit Point assigns to the app or agent based on what it is; [see the App Classification section for what each classification means](entra-apps-reports.md#app-classification)
* **Origin** - shows where the app or agent comes from, i.e., whether it was built in your tenant or comes from a third party
* **State** - shows whether the app or agent is currently active in your tenant
* **Permissions** - the number of application and delegated permissions granted to the app or agent
* **Insights** - the number of highlights flagged for the app or agent that may require your attention, such as High Privileged, Unverified Publisher, Inactive, or Accessed Sensitive Data

Use the **view dropdown** in the upper left corner, the **column filters**, or the **search option** to locate specific apps or agents.

* **Select one or more items** you want to include in the report.
* **Click Run Report** to generate the Permissions and Consent report for the selected items.

## Report Data

The report is **grouped by app and then by API**, so you can easily see all the permissions an app or agent holds for each resource API, for example, **Microsoft Graph**.

The default columns displayed in the report are:

* **Permission** - the name of the granted permission, for example, Files.Read.All
* **Description** - shows what the permission allows
* **Type** - shows how the permission is used:
  * **Application** - the app or agent uses the permission on its own, without a signed-in user
  * **Delegated** - the app or agent uses the permission on behalf of the signed-in user, and can access only what that user can access
* **Consent** - shows who granted the permission:
  * **Admin** - an administrator granted the permission for the whole organization
  * **User** - an individual user granted the permission for themselves
* **Privilege** - shows how much impact the permission can have if misused, from **High** to **Low**
  * High-privilege permissions match Syskit Point's catalog of high-privilege permissions, such as tenant-wide role and consent management, broad directory writes, directory access as the signed-in user (`Directory.AccessAsUser.All`), full SharePoint control, and high-impact mail or Teams writes
* **M365 data** - shows whether the permission grants access to Microsoft 365 data, such as mail, files, chats, calendars, or sites

The Permissions and Consent report can be **exported as PDF, XLSX, and CSV files**. There is also the **option to schedule the report**.

## Related Articles

* [AI Agents Reports](ai-agents-reports.md)
* [Entra Apps Reports](entra-apps-reports.md)
* [AI Agents Actions](../ai-agents-and-apps-actions.md)
* [AI Agents Overview](../ai-agents-and-apps-overview.md)
