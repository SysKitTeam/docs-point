---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud version 2024.2.45.
---

# March 26, 2024

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).


## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Improvements & Bug Fixes

* **The Tenant Storage Report** has new columns available to select from the column chooser: Workspace Type and Sensitivity label. 
  * *Last Activity* was added to the default selection of columns included in the report. 

* **Replaced the Add Storage button** on the Tenant Storage Limit Security & Compliance check with the Clean Up action.
  * This action now leads to the Site Storage Metrics report where you can free up storage and clean up your file versions. 

* **Improved the Storage tile on the Dashboard**, which now includes information on how much storage you already saved by performing the Clean Up action as well as how much storage you can still potentially save. 
  * Clicking the Clean Up action takes you to the Storage Metrics report. 

* **The Clean Up Version** action is now available when bulk selecting multiple workspaces. 
   * The limit for this bulk action is a maximum of 500 sites at a time.

* **Improved the Storage Metrics report** with a new Potential Savings tile that includes information on how much storage could be saved by removing all file versions older than X months or removing all file versions except for the last X file versions.
  * The corner of the tile also includes the Settings button that takes you directly to Settings, where you can set up your own values for X.
  * Clicking on either value on the tile filters the report to show the workspaces where the Clean Up action can be performed. 

* **Added columns to the Storage Metrics report** that show the Last 7, 30, 90, and 180 Days. 
  * The columns also show an arrow that represents the growth trend for the workspace size during that specific period, as well as the percentage of change that can be seen when hovering over the number.

* **The Site Storage Metrics report** includes the name of the site for which the report was generated in the top left tile of the report. 

* **Improved the functionality** of the Site Storage Metrics report for both views when working with large sites.

* **Custom metadata conditions** can now be added from the dropdown menu when creating Rules for policy enforcement. 

* **Additional actions added for workspaces** when solving Security & Compliance checks: Archive and Delete. 
  * This can be accessed by clicking the Govern button on the left sidebar, navigating to the Security & Compliance section, and clicking on Active Tasks or History. 

* **Improved the Reassign to Manager option on the Minimum Owners and Maximum Owners policies** to include the ability to select a different user the task should be assigned to in case there is no Manager for the user in question. 

* **Various improvements and minor UX and UI fixes are available**.