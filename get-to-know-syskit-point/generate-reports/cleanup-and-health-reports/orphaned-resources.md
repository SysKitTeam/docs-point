# Orphaned Resources

Orphaned Resources is a report that displays all the SharePoint Sites, Microsoft Teams or Microsoft 365 groups in your tenant that dont have an active owner or administrator, the last owner of those resources is either deleted or blocked in Azure Active Directory. Use this report to manage the health of your Microsoft 365 resources, and to make sure there are no abandoned resources on your tenant.

## How to generate Orphaned Resources report

- From SysKit Point home screen, click on the Reports tile.
- In the upper left corner click on the filter and select Cleanup & Health Check filter
- Click on the Orphaned Resources report to generate the report.

## Reading Orphaned Resources Report

Now that your report is successfully generated you can see the following data by the columns:

- Name - Name of the resource that 
- Blocked Admins - Shows you the orphaned user which was the owner of said resource.
- Users - Shows you the current number of members in the orphaned resource.

There are also additional columns in the column chooser:

- Site Type - Defines the resource by it being SharePoint Site, Microsoft Team, Microsoft 365 Group
- URL - direct link to the selected resource on your Microsoft 365 tenant.

You can also select a row on the report which gives you the option to change the owner of the selected resource by removing the orphaned user and promoting an active user to be the owner of the selected resource. After you execute the action, selected resource won't be visible on the Orphaned Resources report anymore.

Orphaned Resources report can be exported into PDF and XLSX files and you also have the option of scheduling it.