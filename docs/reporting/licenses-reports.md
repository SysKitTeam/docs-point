---
description: Licenses Reports provide information on managing your Microsoft 365 licenses assigned to users in your tenant.
---

# Licenses Reports

:::warning
**Please note!**\
**Licenses Reports** are now a part of the License Optimization add-on. The "Free Preview" allows existing customers to continue accessing these features for three months after release. 

After this period ends, a separate add-on will be required to access licensing features. Please [contact us](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button) for more details.

:::

Reports in this section **help manage your Microsoft 365 licenses**.

In this article, you can find information about the following license reports:

* [Licenses Overview Report](#licenses-overview-report)
* [Licenses Usage by Service Report](#licenses-usage-by-service-report)
* [License Distribution](#license-distribution)
* [Licenses Assigned to Inactive Users Report](#licenses-assigned-to-inactive-users-report)
* [Redundant Licenses Report](#redundant-licenses-report)
* [Unused Add-On Licenses Report](#unused-add-on-licenses-report)


Use them to **identify Microsoft 365 licenses that are currently assigned, unassigned, or assigned to inactive users, review their overall cost, and optimize your license distribution to ensure everyone has the necessary licenses**. 

These reports can be used to **discover underutilized licenses to drive adoption and optimize license costs** by [Removing Licenses](#remove-license-action) 

:::info

**Hint!**  

You can save custom views for your reports tailored to your specific needs and preferences. [For more details, refer to the Save Custom Views article.](../configuration/custom-views.md)

:::


## Licenses Overview Report

The **Licenses Overview report** helps discover the assigned, unassigned, and inactive Microsoft 365 licenses on your Microsoft 365 tenant.

It also **shows the overall cost of all the current licenses** you've purchased from Microsoft.

This report can be **used to help you calculate the needed number of licenses and estimate future license costs upon renewal**.


:::info
**A banner appears at the top of this report if any licenses are missing required pricing information** (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.
:::


### Generate the Licenses Overview Report

* **Click the Reports button**, located on the left side of the screen.

* **Select Licenses in the filter**; it can be found in the upper left corner.

* **Click the Licenses Overview report** to generate the report.


### Licenses Overview Report Data

Now that your report has been generated successfully, you have a complete overview of your licenses.

In the top three tiles, the following information is provided:

* An **Overview**, which includes
  * Total Annual Cost, which shows the total amount your licenses cost
  * Total Licenses, which shows the total number of purchased licenses
  * Paid Licenses, which shows the number of paid licenses
  * Free Licenses, which shows the number of free licenses
  * A chart that provides a visual view of the number of licenses that are assigned to active users, assigned to inactive users, or unassigned


* **Annual Potential Savings**, which includes:
  * Inactive Users, showing the amount of money you could save by removing licenses from users who are inactive or have their sign-in blocked
  * Unused Add-on Licenses, showing the amount of money you could save by removing unused add-on licenses
  * Redundant Licenses, showing the amount of money you could save by removing redundant licenses

:::info
The cases on the Annual Potential Savings tile are **automatically sorted** by potential savings, showing from **highest to lowest**. The case that yields the largest savings is always shown first and highlighted. 
:::


* **Top paid licenses**, showing a list of your licenses with the highest number of available seats, with graphs demonstrating the amount used for each


Below the tiles, you can find the report with the following data displayed in the columns:


* **License**; shows the name of all licenses purchased in the Microsoft 365 subscription
* **Unit Cost (Monthly)**; shows the monthly price of the license per user
* **Total Licenses**; shows the total number of licenses
* **Total Annual Cost**; shows the total cost per purchased license
* **Assigned Licenses**; shows the number of currently assigned licenses
* **Unassigned Licenses**; shows the number of currently unassigned licenses
* **Inactive users**; shows the number of currently inactive or blocked sign-in users with assigned licenses

The **total annual cost for all licenses** is located at the bottom of the generated report.

In the top right corner, you can find the button to **schedule the Licenses Overview report** or **export it as PDF and XLSX files**. 

## Licenses Usage by Service Report

The **Licenses Usage by Service** report helps **identify underutilized licenses** per service (Exchange, Microsoft Teams, OneDrive, SharePoint, Viva Engage, etc.).

Use this report to quickly **check if users are fully utilizing their assigned licenses**. This helps determine if they should have **different licenses assigned to optimize usage and cost**.

### Generate the Licenses Usage by Service Report

* **Click the Reports button**, located on the left side of the screen.

* **Select Licenses in the filter**; can be found in the upper left corner.

* **Click the Licenses Usage by Service** tile to generate the report.

### Licenses Usage by Service Report Data

Once the Licenses Usage by Service report is successfully generated, by default, **the result is grouped by the Service (Exchange, Microsoft Teams, OneDrive, SharePoint, Skype for Business, and Viva Engage) column**.

The following data can also be found in the columns:

* **User**; shows the names of users and their usage of licenses per service

* **User Type**; shows what type of user it is (user, room,equipment, etc.)

* **Days Since Last Usage**; shows how many days have passed since the service was used last time by said users
  * If the user never used it, the column will say Unused

* **Last Activity Date**; shows the exact date when the service was last used
  * If the user did not use it at all, the column will show N/A

* **Assigned Date**; shows the exact date when the license for the service was assigned to said user

**Additional columns can be enabled via Column Chooser** next to the search box on the report:

* E-mail
* Service License Assigned
* Department
* Country
* Manager
* Last Refreshed
* Is External User
* Sign-in Status
* Is Deleted

The Licenses Usage by Service report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## License Distribution

The **License Distribution** report enables **viewing the license distribution and cost by department, usage location, country or region, and company**.

View this report to understand license distribution by department, usage location, country or region, and company, along with the total cost of assigned licenses.

This report shows all of the **licenses in the Microsoft 365 environment assigned by your company departments and in various locations**, and can also be **used to help calculate possible savings that can be achieved by removing inactive licenses**.

:::info
**A banner appears at the top of this report if any licenses are missing required pricing information** (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.
:::

### Generate License Distribution Report

* **Click the Reports button**, located on the left side of the screen.

* **Select Licenses in the filter**; can be found in the upper left corner.

* **Click the License Distribution** tile to generate the report.

* **Select one of the available options** when redirected to the filter screen. The report data can be filtered by:
  * **Department**
  * **Usage Location**
  * **Country or Region**
  * **Company**

* **Click the Run Report button** to generate the desired report.

When the License Distribution report is successfully generated, it will be grouped by either Department, Usage Location, Country or Region, or Company.

#### Department

When selected, the report and the top report tiles have the **data grouped by Department**. 

In the top three tiles, the following information is provided:

* An Overview tile, with the: 
  * Number of departments with assigned licenses
  * The number of assigned licenses
  * The cost of the assigned licenses
  * A chart that breaks down the total number to show how many active assigned licenses there are compared to inactive assigned licenses 

* Annual Potential Savings, with the amount of annual potential savings:
  * Top Savings by Department, which shows:  
    * The names of the departments where you can achieve the most savings 
    * The amount of money you can save from licenses in each department

* A graph showing departments with the highest annual license cost, for a visual overview

#### Usage Location

When selected, the report and the top report tiles have the **data grouped by Usage Location**. 

In the top three tiles, the following information is provided:

* An Overview tile, with the: 
  * The number of usage locations
  * The number of assigned licenses
  * The cost of the assigned licenses
  * A chart that breaks down the total number to show how many active assigned licenses there are compared to inactive assigned licenses 

* Annual Potential Savings, with the amount of annual potential savings and:
  * Top Savings by Usage Location, which shows:  
    * The names of the usage locations where you can achieve the most savings 
    * The amount of money you can save from licenses for each usage location

* A graph, showing usage locations with the highest annual license cost, for a visual overview


#### Country or Region

When selected, the report and the top report tiles have the **data grouped by Country or Region**. 

In the top three tiles, the following information is provided:

* An Overview tile, with the: 
  * Number of countries or regions
  * The number of assigned licenses
  * The cost of the assigned licenses
  * A chart that breaks down the total number to show how many active assigned licenses there are, compared to the inactive assigned licenses 

* Annual Potential Savings, with the amount of annual potential savings and:
  * Top Savings by Countries or Regions, which shows:  
    * The names of the Countries or Regions where you can achieve the most savings 
    * The amount of money you can save from licenses in each country or region

* A graph showing countries or regions with the highest annual license cost, for a visual overview

#### Company

When selected, the report and the top report tiles have the **data grouped by Company**. 

In the top three tiles, the following information is provided:

* An Overview tile, with the: 
  * Number of companies with assigned licenses
  * The number of assigned licenses
  * The cost of the assigned licenses
  * A chart that breaks down the total number to show how many active assigned licenses there are, compared to the inactive assigned licenses 

* Annual Potential Savings, with the amount of annual potential savings and:
  * Top Savings by Company, which shows:  
    * The names of the companies where you can achieve the most savings 
    * The amount of money you can save from licenses in each company

* A graph showing companies with the highest annual license cost, for a visual overview


### License Distribution Report Data

The columns that are enabled by default and available regardless of how you grouped your data on the selection step are the following:

* **License**; the name of the purchased Microsoft 365 license
* **Assigned Active Licenses**; the number of currently assigned licenses per license
* **Assigned Licenses Cost**; the total cost of assigned licenses
  * It also shows the **Total cost of licenses distributed by Departments or Locations**
* **Licenses Assigned to Inactive Users**; the number of inactive or blocked sign-in users in Microsoft Entra ID with currently assigned licenses

An additional **SKU ID column** is available for selection from the column chooser. 

The License Distribution report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Licenses Assigned to Inactive Users Report

The **Licenses Assigned to Inactive Users** report helps with **finding and reclaiming licenses assigned to inactive or blocked users** to optimize your Microsoft 365 license cost.

Use this report to **easily remove the assigned licenses from inactive users** and assign them to another user. It can also help you estimate how many licenses are needed at renewal, which supports cost-reduction efforts. 


:::info
**A banner appears at the top of this report if any licenses are missing required pricing information** (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::


### Generate Licenses Assigned to Inactive Users Report

 * **Click the Reports button**, located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Licenses Assigned to Inactive Users report** to generate the report.

### Licenses Assigned to Inactive Users Report Data

The **Licenses Assigned to Inactive Users** report is generated with three top tiles and a report that contains additional information.

In the top three tiles, the following information is provided:

* An overview showing the Number of Licenses Assigned to Inactive Users
  * A chart that breaks down the total number to show how many users with assigned licenses are inactive versus how many have blocked sign-in 

* Potential Savings, with the amount of annual potential savings and:
  * Potential savings if licenses are removed from Inactive Users
  * Potential savings if licenses are removed from Users with Blocked Sign-in

* Top licenses assigned to inactive users, represented through a graph

Below the tiles, you can find the report that can be shown by: **User or License**. By default, the view shown on the report is by **License**. The report's columns are the same regardless of how it is viewed. The following information is displayed in the columns:

* **License**; the name of the License currently assigned to an inactive user
* **Assignment Types**; shows how licenses were applied
* **User Type**; shows what type of user it is (user, room,equipment, etc.)
* **Last logged in**; the exact date when the user was last logged into the tenant
* **User State**; shows if the user is inactive or has a blocked sign-in 
* **Department**; Shows the name of the company Department that said user was a part of
* **Manager**; shows the user who was the said user's manager
  * Only if that information is available in Microsoft Entra ID
* **Created on**; the date and time when the user was first created

In the final column, you'll see the [**Remove License**](#remove-license-action) action. Clicking the action removes the licenses assigned to that user. 

**Selecting more than one user** moves the action to the top of the report and lets you perform the **Remove Licenses action in bulk**. 

There are additional columns available from the column chooser:

* Assignment Groups
* E-mail
* License Status
* Country
* Is External User
* Sign-in Status
* Is Deleted
* Username
* User Domain
* Is License Paid


:::info
**If any licenses are missing required pricing information** (price or default price), the remove licenses modal will contain an additional step where you can enter the missing pricing details. You can still proceed with the removal without entering the pricing; this is not a mandatory step. 

:::

The Licenses Assigned to Inactive Users report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Redundant Licenses Report

The **Redundant Licenses report** helps you detect license combinations with overlapping functionality and safely remove redundant ones to optimize costs. 

This report shows **overlapping license** cases, where a **user is assigned both a primary license and a redundant license**. In these cases, the primary license covers all functionality that is included in the redundant license. 

The report clearly shows which license is the primary one and which is redundant, which **makes it easier to remove the redundant license while keeping the primary license assigned**. 

:::info
**A banner appears at the top of this report if any licenses are missing required pricing information** (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::


### Generate the Redundant Licenses Report

 * **Click the Reports button**, located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Redundant Licenses report** to generate the report.


### Redundant Licenses Report Data

Now that your report has been generated successfully, you have a complete overview of your redundant licenses.

In the top three tiles, the following information is provided:

* Potential Savings, which includes:
  * Total annual cost, which shows the amount of money spent on both primary licenses and redundant licenses assigned to the same user
  * The amount of annual potential savings
  * The number of redundant license combinations
  * License combinations with the highest savings potential 

* Top Redundant License Combinations, which shows a graph of the most frequent license overlap combinations

Below the tiles, you can find the report that can be shown by: **User or License**. The columns for the report are the same regardless of how it is viewed. The following data is displayed in the columns:

* **Assignment Types**; shows how licenses were applied
* **Primary License**; shows the name of the primary license assigned to a user
* **Redundant License**; shows the names of the licenses that have the same functionality as the primary one, which means they can be safely removed
* **User**; shows the name of the user having redundant licenses
* **User Type**; shows what type of user it is (user, room, equipment, etc.)
* **User State**; shows the current activity state of the user and whether a user has blocked sign-in
* **Manager**; shows the name of the manager of the user
* **Department**; shows the department the user is assigned to
* **Remove Redundant action**; clicking this opens a confirmation dialog that lets you remove the redundant license


**Additional columns can be enabled via Column Chooser** next to the search box on the report:

* Assignment Groups
* Primary License Price
* Redundant License Price
* Sign-in Status
* Is Deleted
* Country
* Company

The Redundant Licenses report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Unused Add-on Licenses Report

The **Unused Add-on Licenses report** helps you find add-on licenses that aren't being used and remove them to save on expenses. 

:::info

* **A banner appears at the top of this report if any licenses are missing required pricing information** (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

* A banner might also appear if license data is still being collected, with insight into when all data will be visible.

* Only the following licenses are counted **when generating the unused add-on licenses report**:
  * Copilot
  * Power BI Pro
  * Power BI Premium
  * Visio Plan 1
  * Visio Plan 2

:::


### Generate the Unused Add-on Licenses Report

 * **Click the Reports button**, located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Unused Add-on Licenses report** to generate the report.

### Unused Add-on Licenses Report Data

Now that your report has been generated successfully, you have a complete overview of your unused add-on licenses. 

In the top three tiles, the following information is provided:

* Overview, which includes:
  * Annual cost of the add-on licenses
  * Number of add-on licenses
  * A chart, which provides a visual overview of the number of assigned add-on licenses used compared to the unused assigned add-on licenses

* Annual Potential Savings, which shows the amount of money you could save by removing unused or excess licenses with:
  * The amount of total potential savings
  * List of licenses with the highest savings potential, and the amount you could save by removing them

*  Top unused add-on licenses, which provides an overview of the most commonly unused add-on licenses, with a chart depicting the amount


Below the tiles, you can find the report with the following data displayed in the columns:

* **Name**; shows the name of the license, and below, a list of all the users the license is assigned to
* **Last License Use**; shows the date when the license was last used
* **User State**; shows the current activity state of the user and whether a user has blocked sign-in
* **Assignment Types**; shows how licenses were applied
* **Department**; shows the department the user is assigned to
* **Manager**; shows the name of the manager of the user
* **Company**; shows the name of the company the user works for
* **User Type**; shows what type of user it is (user, room,equipment, etc.)
* [**Remove License action**](#remove-license-action); clicking this opens a confirmation dialog that lets you remove the selected license

The Unused Add-on Licenses report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Remove License Action

Clicking the Remove License action removes licenses that were assigned through different methods. 

The **Remove License** action works in the following situation:
* When a license is **assigned directly to a user**
* When a license is **assigned through a Security Group in Microsoft Entra ID**
* When a license is **assigned through a local Active Directory (on-prem) group**

When the Remove License action is selected:
* If the license was **assigned directly**, the license is **removed from the user**
* If the license was **assigned through a group**, the user is **removed from the group**
* If a license was **assigned through multiple methods** (for example, directly and through multiple groups), the **Remove License** action resolves all of the assigned methods 
  * For example, the license is removed from the user, and the user is removed from the groups

:::info
Users cannot be removed from **dynamic groups** (Security or Microsoft 365 group type). Therefore, the **Remove License** action will not work in such cases.
:::

### On-Premises Groups

Support for licenses assigned through local **Active Directory (on-prem) groups** requires the use of the **Syskit Point On-Prem Agent**.

The **Syskit Point On-Prem Agent** is a separate service that **syncs data between Syskit Point and the local Active Directory**. 

To enable support for on-premises groups, [please contact us](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button).