---
description: This article provides information on the Tenant Storage Limit report.
---


# Tenant Storage Limit

Syskit Point mitigates the risk of running out of storage based on the settings defined in the tenant-wide [policy](../automated-workflows/tenant-storage-admin.md). 

The purpose of the Tenant Storage Limit check is to **notify you when your storage percentage gets close to the limit you set**. This information can help you determine whether you should change the storage limit set for the policy, remove any redundant content to free up space or purchase additional storage from Microsoft.

When the task delegation option is enabled for the Tenant Storage policy, Syskit Point creates tasks and sends emails to users as defined in the policy settings.
To learn more, take a look at the [Tenant Storage Limit policy article](../../governance-and-automation/automated-workflows/tenant-storage-admin.md).

By default, task delegation is turned on for this policy. If the task delegation is turned off when the tenant storage limit is exceeded, Syskit Point still **detects the policy vulnerability** and shows it on the Security and Compliance dashboard. This means that Syskit Point detects a vulnerability in the tenant based on the policy, but **if the task delegation is turned off, it does not create tasks or send any emails** to Syskit Point Administrators. 

The purpose of this is to assist Syskit Point admins by
bringing awareness of potential issues in their Microsoft 365 environment. 

On the Security & Compliance dashboard, click the **Tenant Storage Limit** button to see the report.

The Tenant Storage Limit screen opens, **showing the Tenant Storage Limit vulnerability**.

The report provides information on:
  * **Name (1)** of the policy
  * **Detected (2)** - when the policy vulnerability was detected
  * **Used Storage % (3)** - the percentage of storage that is used
  * **Used (4)** - the amount of storage that is used
  * **Total (5)** - the total amount of storage available
  * **Potential Savings (Number of Versions) (6)** - the amount of storage that can be saved by cleaning up the X number of versions
    * X can be set by going to Syskit Point > Settings > Storage Management 
  * **Potential Savings (Old Versions) (7)** - the amount of storage that can be saved by cleaning up a certain number of versions
    * The number can be set by going to Syskit Point > Settings > Storage Management 
  * **Status (8)** - the status of the policy vulnerability

There are two actions that can be completed for this violation:
 * **Accept Risk (9)**
   * Clicking Accept Risk opens a pop-up where you can **select the number of days** you want Syskit Point to ignore this policy vulnerability
   * Clicking the **Accept Risk button** finalizes your decision
 * **Clean Up (10)** 
   * Clicking Clean Up button redirects you to the Storage Metrics report where you can perform the Clean Up action and free up storage 
    * [For more details on how to perform the Clean Up, take a look at the Free Up Storage article.](../../storage-management/free-up-storage.md)

![Tenant Storage Limit - Security & Compliance checks report](../../.gitbook/assets/security-compliance-checks-tenant-storage-limits.png)

Other than the actions available in the report, there are a few additional ways to resolve this violation:
  * **Increasing the storage limit percentage** that is set for the [Tenant Storage Limit policy](../automated-workflows/tenant-storage-admin.md)
  * **Removing unnecessary or redundant content** from your sites and cleaning up your tenant to free up storage

Completing any of the above actions resolves the Security & Compliance checks violation. 

## Related Articles

* [Free Up Storage](../../storage-management/free-up-storage.md)
* [Configure Tenant Storage Limit Policy](../../governance-and-automation/automated-workflows/tenant-storage-admin.md)
* [Resolve Tenant Storage Limit Task](../../point-collaborators/resolve-governance-tasks/tenant-storage-limit.md)
* [Storage Reports](../../storage-management/storage-reports.md)