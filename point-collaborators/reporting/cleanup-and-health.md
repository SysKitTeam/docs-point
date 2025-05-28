---
description: >-
  Cleanup & Health Reports provide information on maintaining the health of your
  workspaces.
---

# Cleanup & Health Reports

The Cleanup and Health reports in SysKit Point **provide insight that helps you ensure your workspaces are secured and optimized.**

The Cleanup and Health report **includes details on orphaned users** which you can use to determine users that no longer need access to your workspaces, declutter your environment, enhance security and resolve any other potential issues.

## Orphaned Users

The Orphaned Users report displays all orphaned users in your tenant environment. Use the Orphaned Users report to **detect and manage orphaned users**.

It shows **all the users that have been blocked or deleted from Microsoft Entra ID**, which means they should no longer be a part of your workspace.

This report helps detect and remove blocked/disabled or deleted users from your Microsoft 365 workspaces.

### Generate Orphaned Users report

* **Click the Reports tile**; located on the SysKit Point home screen.
* **Select Cleanup & Health Check in the filter**; it can be found in the upper left corner.
* **Click the Orphaned Users report** to generate the report.

### Report Data

Once the report is successfully generated, the following data will be displayed in the columns:

* **User**; the name of the user that is orphaned.
  * When clicked, the User Details page of the selected user is opened.
* **Site**; the name of the workspace where said user is a member.
  * When clicked, the page will be redirected to the Site Details screen of the selected workspace.
* **Status**; defines whether the user was deleted or disabled in Microsoft Entra ID.
* **Department**; shows which department in the company the Orphaned User operated in.
  * Only if that data is available from Microsoft Entra ID.
* **Manager**; shows who the manager was of the orphaned user.

For more details, there are also additional columns available in the column chooser:

* **Site Type**; defines the workspace by SharePoint Site, Microsoft Team, Microsoft 365 Group, or OneDrive.
* **URL**; a direct link to the selected workspace on the Microsoft 365 tenant.
* **Username**; shows the Microsoft 365 tenant username for the orphaned user.

To group the report results by one or multiple columns, drag a column header to the designated place in the upper left corner of the report.

* Doing that provides a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user, you can perform the **Remove User** action located on the right side of the screen.

* This opens the Remove User pop-up
* **Type REMOVE** in the space available and **click the Remove button** to finalize your decision

The Orphaned Users report can be **exported as PDF and XLSX files**. There is also the [**option to schedule the report**](schedule-reports.md).
