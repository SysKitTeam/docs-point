# Cleanup & Health Reports

Reports in this section help maintain the health of your tenant environment. Use Orphaned Users and Orphaned Resources reports to detect and manage orphaned users and resources.

## Orphaned Users

Orphaned Users report is a report that displays all orphaned users in your tenant environment. It shows all the users that have been disabled/blocked, or deleted from Azure Active Directory. Use this report to remove the disabled or deleted users from your Microsoft 365 resources.

### Generate Orphaned Users report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Cleanup & Health Check filter
- Click on the Orphaned Users report to generate the report.

### Report Data

Now that your report is successfully generated, you can see the following data by the columns:

- User - Name of the user that is orphaned; when clicked on it, you are redirected to the User Details page of said user.
- Site - Name of the resource where said user is a member; when clicked on it, you are redirected to the Site Details page of the selected resource.
- Status - Defines was the user deleted or disabled in Azure Active Directory.
- Department - Shows which department in your company Orphaned User operated (if that data is available from Azure Active Directory).
- Manager - Shows who was the manager of the orphaned user.

There are also additional columns in the column chooser if you wish to see more details:

- Site Type - Defines the resource by SharePoint Site, Microsoft Team, Microsoft 365 Group, or OneDrive.
- URL - direct link to the selected resource on your Microsoft 365 tenant.
- Username - it shows us the Microsoft 365 tenant username for the orphaned user.

You can also drag a column header to group the report results by one or multiple columns. By doing that, you can get a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user, you can perform the Remove User action and see the additional information, like who disabled and when was the selected user disabled.

You can export the Orphaned Users report into PDF and XLSX files, and you can also schedule it.

## Orphaned Resources

Orphaned Resources report is a report that displays all the SharePoint Sites, Microsoft Teams, or Microsoft 365 groups in your tenant that don't have an active owner or administrator, the last owner of those resources is either deleted or blocked in Azure Active Directory. Use this report to manage your Microsoft 365 resources' health and make sure there are no abandoned resources on your tenant.

### Generate Orphaned Resources report

- From the SysKit Point home screen, click on the Reports tile.
- In the upper left corner, click on the filter and select Cleanup & Health Check filter
- Click on the Orphaned Resources report to generate the report.

### Report Data

Now that your report is successfully generated, you can see the following data by the columns:

- Name - Name of the resource that 
- Blocked Admins - This shows you the orphaned user who was the owner of said resource.
- Users - This shows you the current number of members in the orphaned resource.

There are also additional columns in the column chooser:

- Site Type - Defines the resource by it being SharePoint Site, Microsoft Team, Microsoft 365 Group
- URL - direct link to the selected resource on your Microsoft 365 tenant.

You can also select a row on the report which gives you the option to change the owner of the selected resource by removing the orphaned user and promoting an active user to be the owner of the selected resource. After you execute the action, the selected resource won't be visible on the Orphaned Resources report anymore.

You can export the Orphaned Resources report into PDF and XLSX files, and you also have the option of scheduling it.