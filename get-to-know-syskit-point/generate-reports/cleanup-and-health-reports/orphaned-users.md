# Orphaned Users

Orphaned Users report is a report that displays all orphaned users in your tenant environment. It shows all the users that have been disabled/blocked or deleted from Azure Active Directory. Use this report to remove the disabled or deleted users from your Microsoft 365 resources.

## How to generate Orphaned Users report

- From SysKit Point home screen, click on the Reports tile.
- In the upper left corner click on the filter and select Cleanup & Health Check filter
- Click on the Orphaned Users report to generate the report.

## Reading Orphaned Users Report

Now that your report is successfully generated you can see the following data by the columns:

- User - Name of the user that is orphaned, when clicked on it, you are redirected to User Details page of said user.
- Site - Name of the resource where said user is a member, when clicked on it, you are redirected to Site Details page of selected resource.
- Status - Defines was the user deleted or disabled in Azure Active Directory.
- Department - Shows in which department in your company orphaned user operated (if that data is available from Azure Active Directory).
- Manager - Shows who was the manager of the orphaned user.

There are also aditional columns in the column chooser if you wish to see more details:

- Site Type - Defines the resource by it being SharePoint Site, Microsoft Team, Microsoft 365 Group or OneDrive.
- URL - direct link to the selected resource on your Microsoft 365 tenant.
- Username - it shows us the Microsoft 365 tenant username for the orphaned user.

You can also drag a column header to group the report results by one ore multiple columns. By doing that you can get a clearer view of where the orphaned user is still a member.

By selecting the checkbox of an orphaned user you can perform Remove User action and see the additional information, like who disabled and when was the selected user disabled.

Orphaned Users report can be exported into PDF and XLSX files and you also have the option of scheduling it.