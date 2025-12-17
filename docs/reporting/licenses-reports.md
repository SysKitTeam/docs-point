---
description: Licenses Reports provide information on managing your Microsoft 365 licenses assigned to users in your tenant.
---

# Licenses Reports

:::info

**License Reports** are now a part of the Licensing Add-on package. To access license reports, XXX, and other licensing-related features, please see the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.

:::

Reports in this section **help manage your Microsoft 365 licenses**.

In this article, you can find information about the following license reports:

* [Licenses Overview Report](#licenses-overview-report)

* [Licenses Usage by Service Report](#licenses-usage-by-service-report)

* [License Distribution](#license-distribution)

* [Inactive Users with Assigned Licenses Report](#inactive-users-with-assigned-licenses-report)

* [Redundant Licenses Report](#redundant-licenses-report)

* [Unused Add-On Licenses](#unused-add-on-licenses-report)


Use them to **identify assigned, unassigned Microsoft 365 licenses or Microsoft 365 licenses assigned to inactive users** and review their overall cost.

These reports can be used to **discover underutilized licenses to drive adoption and optimize license costs**.

:::info

**License Reports** are available in the Security & Compliance plan and higher tiers. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.

:::

:::info

**Please note!**  

You can save custom views for your reports tailored to your specific needs and preferences. [For more details on this, take a look at the Save Custom Views article.](../configuration/custom-views.md)

:::


## Licenses Overview Report

The **Licenses Overview report** helps discover the assigned, unassigned, and inactive Microsoft 365 licenses on your Microsoft 365 tenant.

It also **shows the overall cost of all the current licenses** you've purchased from Microsoft.

This report can be **used to help calculate future license costs**.


:::info

**Please note!**  

A banner appears at the top of this report if any licenses are missing required pricing information (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::


### Generate the Licenses Overview Report

* **Click the Reports button**; located on the left side of the screen.

* **Select Licenses in the filter**; it can be found in the upper left corner.

* **Click the Licenses Overview report** to generate the report.


### Licenses Overview Report Data

Now that your report is successfully generated, you have a complete overview of your licenses.

In the top three tiles, the following information is provided:

* An **Overview**, which includes
  * Total Annual Cost, which shows the total amount your licenses cost
  * Total Purchased Licenses, which shows the number of total purchased licenses
  * Paid Licenses, which shows the number of paid licenses
  * Free Licenses, which shows the number of free licenses
  * A chart that provides a visual view of your number of licenses that are Active, Assigned to an Inactive User, or Unassigned


* **Potential Savings**, which includes:
  * Inactive Users, showing the amount of money you could save by removing licenses from inactive users
  * Unused Add-on Licenses, showing the amount of money you could save by removing unused add-on licenses
  * Redundant Licenses, showing the amount of money you could save by removing redundant licenses


* **Most purchased licenses**, showing a list of your licenses with the highest number of available seats, with graphs demonstrating the amount used for each


Below the tiles, you can find the report with the following data displayed in the columns:


* **License**; shows the name of all licenses purchased in the Microsoft 365 subscription
* **Unit Cost**; shows the monthly price of the license per user
* **Purchased Licenses**; shows the number of licenses purchased
* **Total Cost**; shows the total cost per purchased license
* **Assigned Licenses**; shows the number of currently assigned licenses
* **Assigned Licenses Cost**; shows the cost per assigned license
* **Unassigned Licenses**; shows the number of currently unassigned licenses
* **Inactive users**; shows the number of currently inactive, blocked, or deleted users with assigned licenses
* **Potential Savings (Inactive)**; shows the potential savings you can obtain on inactive licenses

The **total cost for All licenses, Assigned Licenses, and Total potential savings on unassigned and inactive licenses are located at the bottom** of the generated report.

Clicking a row in the report enables you to generate an Inactive Licenses report for that license.

The Licenses Overview report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

## Licenses Usage by Service Report

The **Licenses Usage by Service** report helps **identify underutilized licenses** per service (Exchange, Microsoft Teams, OneDrive, SharePoint, Viva Engage, etc.).

Use this report to quickly **check if users are fully utilizing their assigned licenses**. This helps determine if they should have **different licenses assigned to optimize usage and cost**.

### Generate the Licenses Usage by Service Report

* **Click the Reports button**; located on the left side of the screen.

* **Select Licenses in the filter**; can be found in the upper left corner.

* **Click the Licenses Usage by Service** tile to generate the report.

### Licenses Usage by Service Report Data

Once the Licenses Usage by Service report is successfully generated, by default, **the result is grouped by the Service (Exchange, Microsoft Teams, OneDrive, SharePoint, Skype for Business, and Viva Engage) column**.

The following data can also be found in the columns:

* **User**; shows the names of users and their usage of licenses per service

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

The **License Distribution** report enables **viewing the license distribution and cost by department or location**.

View this report to understand license distribution by department and the total cost of assigned licenses.

This report can also be **used to help calculate possible savings that can achieve by removing inactive licenses**.

:::info

**Please note!**  

A banner appears at the top of this report if any licenses are missing required pricing information (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::

### Generate License Distribution Report

* **Click the Reports button**; located on the left side of the screen.

* **Select Licenses in the filter**; can be found in the upper left corner.

* **Click the License Distribution** tile to generate the report.

* **Select one of the three options** when redirected to the filter screen, the report data can be filtered by:
  * **Department**
  * **Usage Location**
  * **Country or Region**

* **Click the Run Report button** to generate the desired report.

### License Distribution Report Data

When the License Distribution report is successfully generated, it will be grouped by either Department or Usage Location.

It shows all of the **licenses in the Microsoft 365 environment assigned by your company departments or various locations**.


Other columns that are enabled by default are:

* **License**; the name of the purchased Microsoft 365 license
* **Assigned Active Licenses**; the number of currently assigned licenses per license
* **Assigned Licenses Cost**; the total cost of assigned licenses
  * It also shows the **Total cost of licenses distributed by Departments or Locations**
* **Inactive Users with Assigned Licenses**; the number of inactive, blocked, or deleted users in Microsoft Entra ID with currently assigned licenses

With an additional **SKU ID column** available for selection from the column chooser. 

The License Distribution report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Inactive Users with Assigned Licenses Report

The **Inactive Users with Assigned Licenses** report helps with **finding and reclaiming licenses assigned to inactive or blocked users** to optimize your Microsoft 365 license cost.

Use this report to **easily remove the assigned licenses from inactive users**. The license can then be **assigned to other users or removed to reduce costs**.


:::info

**Please note!**  

A banner appears at the top of this report if any licenses are missing required pricing information (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::


### Generate Inactive Users with Assigned Licenses Report

 * **Click the Reports button**; located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Inactive Users with Assigned Licenses report** to generate the report.

### Inactive Users with Assigned Licenses Report Data

The **Inactive Users with Assigned Licenses** report is generated with three top tiles and a report that contains additional information.

In the top three tiles, the following information is provided:

* An overview, with the Number of Inactive Users with Assigned Licenses
  * A chart that shows the number of Inactive Users with licenses assigned and Users with Blocked Sign-in with licenses assigned

* Potential Savings, with the amount of total potential savings and:
  * Potential savings if licenses are removed from Inactive Users
  * Potential savings if licenses are removed from Users with Blocked Sign-in

* Top licenses assigned to inactive users, represented through a graph

Below the tiles, you can find the report with that can be Shown by: **License or User**. The columns for the report are the same regardless of how it is viewed. The following information is displayed in the columns:

* **License**; the name of the License currently assigned to an inactive user
* **Last logged in**; the exact date when the user was last active
* **User State**; shows if the user is inactive, has a blocked sign-in, or is deleted from Microsoft Entra ID
* **Department**; Shows the name of the company Department that said user was a part of
* **Manager**; shows the user that was the said user's manager
  * Only if that information is available in Microsoft Entra ID
* **Created on**; the date and time when the user was first created

In the final column, you'll see the **Remove Licenses** action. Clicking the action removes the licenses assigned to that user. 

**Selecting more than one user**, moves the action to the top of the report, and lets you perform the **Remove Licenses action in bulk**. 

The Inactive users with Assigned Licenses report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.


## Redundant Licenses Report

The **Redundant Licenses report** helps you detect license conbinations with overlapping functionality and safely remove redundant ones to optimize costs. 


:::info

**Please note!**  

A banner appears at the top of this report if any licenses are missing required pricing information (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

:::


### Generate the Redundant Licenses Report

 * **Click the Reports button**; located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Redundant Licenses report** to generate the report.


### Redundant Licenses Report Data

Now that your report is successfully generated, you have a complete overview of your redundant licenses.

In the top three tiles, the following information is provided:

* Potential Savings, which includes:
  * The amount of total potential savings
  * The number of redundant license combinations
  * Total cost, which shows the amount of money spent on both primary licenses and redundant licenses assigned to the same user
  * License combinations with the highest savings potential 

* Top Redundant License Combinations, which shows a graph with the most frequent license overlap combinations

Below the tiles, you can find the report with the following data displayed in the columns:

* **Primary License**; shows the name of the primary license assigned to a user
* **Redundant License**; shows the name of the licenses that have the same functionality as the primary one, which means they can be safely removed
* **User**; shows the name of the user that has redundant licenses
* **User State**; shows the current activity state of the user and whether a user has blocked sign-in
* **Manager**; shows the name of the manager of the user
* **Department**; shows the department the user is assigned to
* **Remove Redundant action**; clicking this opens a confirmation dialog that lets you remove the redundant license


**Additional columns can be enabled via Column Chooser** next to the search box on the report:

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

**Please note!**  

* A banner appears at the top of this report if any licenses are missing required pricing information (price or default price), with a direct link to the Settings screen where you can provide the missing pricing details.

* A banner might also appear if license data is still being collected, with insight into when all data will be visible. 

:::


### Generate the Unused Add-on Licenses Report

 * **Click the Reports button**; located on the left side of the screen.

 * **Select Licenses in the filter**; it can be found in the upper left corner.

 * **Click the Unused Add-on Licenses report** to generate the report.

### Unused Add-on Licenses Report Data

Now that your report is successfully generated, you have a complete overview of your unused add-on licenses. 

In the top three tiles, the following information is provided:

* Overview, which includes:
  * Number of add-On licenses
  * Amount of money the add-on licenses cost
  * A chart, which provides a visual overview of the number of used assigned add-on licenses compared to unused assigned add-on licenses

* Potential Savings, which shows the amount of money you could save by removing unused or excess licenses with:
  * The amount if total potential savings
  * List of licenses with the highest savings potential, and the amount you could save

*  Top unused add-on licenses, which provides an overview of the most commonly used add-on licenses, with a chart depicting the amount


Below the tiles, you can find the report with the following data displayed in the columns:

* **Name**; shows the name of the license and below, a list of all the users the license is assigned to
* **Last License Use**; shows date when the license was last used
* **User State**; shows the current activity state of the user and whether a user has blocked sign-in
* **Department**; shows the department the user is assigned to
* **Manager**; shows the name of the manager of the user
* **Company**; shows the name of the company the user works for
* **Remove License action**; clicking this opens a confirmation dialog that lets you remove the selected license


The Unused Add-on Licenses report can be **exported as PDF and XLSX files**. There is also the **option to schedule the report**.

