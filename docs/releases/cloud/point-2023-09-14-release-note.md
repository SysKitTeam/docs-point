---
description: >-
  This article lists improvements and bug fixes in the Syskit Point Cloud
  version 2023.4.0.77
---

# September 14, 2023

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.
* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business.

## Improvements & Bug Fixes

* **Added support for users to try out the new Security & Compliance dashboard in the Syskit Point demo after the initial sign-up**.
* **Improved the default rule** to apply default policies with enabled detection to workspaces right after the upgrade. That way, the Security & compliance dashboard is populated with data much faster and shows all vulnerabilities detected in your environment sooner.
* **Improved the speed and responsiveness of Security & compliance reports**. All interactions with reports - scrolling, selection, filtering, etc. - now work faster, even with large amounts of data.

* **Fixed an issue** where default policies erroneously had the automation option turned on after the upgrade; this resulted in Syskit Point sending emails and creating tasks for such policies. [Contact us](https://www.syskit.com/company/contact-us) if you want to remove the tasks created in Syskit Point.
* **Fixed a bug** with the Keep action that would not follow limits defined in the Lifecycle Management settings under the option for maximum period end users can keep a workspace. 
* **Fixed an issue** with the task details screen for tasks created in case the Inactive Guest Users task delegation is enabled. The screen design was flawed and blocked users from resolving the task.
* **Fixed a bug** with the filter tiles on the Sites screen. When drilled from the Home dashboard, only the selected workspace type count would show, while others would falsely display 0. 
* **Fixed an issue** with the Inactive Guest Users policy settings. When the automation was enabled, no settings were displayed for the reminder email and the allowed Syskit Point action in case there was no response.
* **Fixed a bug** where a deprecated toggle was displayed for the Inactive Guest Users policy dialog. 
All tenant-wide policies, including the Inactive Guest Users policy, have the detection enabled, which cannot be turned off.
In that case, Syskit Point admins can see detected vulnerabilities on the home dashboard and the Security & Compliance dashboard, but Syskit Point doesn't create tasks or send any emails.
* **Fixed an issue** where clicking the View History link on a specific Security & Compliance check report would open a list of all checks instead of the History screen for a specific check.
* **Fixed** the tooltip for the Assigned to column visible on Security & Compliance reports for policies with enabled automation. The tooltip was partially displayed, thus not showing the complete list of users to whom the task was assigned.
* **Various improvements and minor fixes are available**.
