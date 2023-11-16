---
description: >-
  This article lists improvements and bug fixes in Syskit Point version 2023.4
---

# Syskit Point 2023.4

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think.](https://www.syskit.com/company/contact-us/)

**Product version:** 2023.4.0

**Build number:** 125

**Release date:** September 25, 2023

## Get the Latest Version

* **New to Syskit Point?** Get the latest Syskit Point version from [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/syskitltd.syskit\_point).\
  Find all steps described in detail in the [deployment article](../../../set-up-point-data-center/deployment/deploy-syskit-point.md).
* **Already using Syskit Point?** Upgrade to the latest Syskit Point version.\
  [![](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fsyskitassetsstorage.blob.core.windows.net%2Fpoint%2FARMTemplates%2FPointUpdateDeploy%2FPointUpdateTemplate.json)

See detailed step-by-step instructions on how to upgrade Syskit Point in the [upgrade article](../../../set-up-point-data-center/deployment/upgrade-syskit-point.md).

## Features

### Security & Compliance Dashboard and Reports

**Security & compliance dashboard and reports are available!** Visible from your new home screen, the dashboard pinpoints the most important vulnerabilities and misalignments with Microsoft 365 best practices. These checks will keep you aware and help you react promptly to maintain a secure and controlled environment. You will receive an overview of all checks, along with severity, the number of detected vulnerabilities, and the option to drill down for more details to decide if you want to take action to resolve a specific issue.

* **If you are a Syskit Point Admin**, [**read the Security & compliance checks article**](../../../governance-and-automation/security-compliance-checks/security-compliance-checks.md) to learn how to:
  * **Access and use the new dashboard**
  * **Monitor and resolve detected vulnerabilities**
  * **Perform additional automation actions** - use the **Ask Owners** option to include them in the vulnerabilities cleanup process, or **Send Reminder** to users that already received tasks to resolve vulnerabilities.
* **If you are a workspace owner**, you will continue to receive tasks for workspaces with automated policies applied as configured by Syskit Point Admin. \
  [**Use this link to learn how to resolve governance tasks in Syskit Point**](../../../point-collaborators/resolve-governance-tasks/my-tasks.md).

{% hint style="info" %}
**The Security & compliance dashboard is available to Syskit Point administrators only**.
{% endhint %}

**With the new dashboard, important policy changes were introduced.**

**Governance policies now have 2 modes of operation**:

* **Detection**
  * **Syskit Point detects a vulnerability on a workspace** based on an applied policy.
  * **Vulnerabilities are displayed on the new Security & compliance dashboard**.
  * **Syskit Point does not create tasks or send any emails** to workspace owners in case policies are configured to perform detection only; think of this mode as an assistant for Syskit Point admins, reminding them there are potential issues in their Microsoft 365 environment every time they open Syskit Point.
  * **For new users that acquire Syskit Point, default policies are created - Minimum 2 Owners (Default Policy), Maximum 5 Owners (Default Policy), and Orphaned Workspaces (Default Policy) - and applied to all your workspace via a default rule**; these policies serve to give you an overview of workspaces that are potentially not configured according to best practices; no need to worry, though - default policies are configured as **detection-only policies**, meaning that **Syskit Point will not create tasks or send emails**.
  * **Existing customers can also expect to get the 3 new default policies with detection only**; if you already applied Policies to your workspaces in the previous version, the default rule is configured to have the lowest priority, meaning the previously applied policies will still have precedence, and you should experience no changes.
  * **2 new detection-only policies were added** - [**Blocked Users with Assigned Licenses (Tenant-Wide)**](../../../governance-and-automation/security-compliance-checks/blocked-users-assigned-license.md) and [**Orphaned Users (Tenant-Wide)**](../../../governance-and-automation/security-compliance-checks/orphaned-users.md); stay tuned for automation options for these policies in upcoming releases!
* **Automation**
  * **Can be enabled in policy settings for the following policies**: [Inactive Guest Users (Tenant-Wide)](../../../governance-and-automation/security-compliance-checks/inactive-guest-users.md), [Maximum Number of Owners](../../../governance-and-automation/security-compliance-checks/workspaces-too-many-owners.md), [Minimum Number of Owners](../../../governance-and-automation/security-compliance-checks/workspaces-not-enough-owners.md), and [Orphaned Workspaces](../../../governance-and-automation/security-compliance-checks/orphaned-workspaces.md).
  * **When automation is enabled, Syskit Point creates tasks and sends emails to users as defined in policy settings**.
  * **Access Requests** and **Access Review** policies don't represent vulnerabilities and will not appear on the Security & compliance dashboard; think of them as automation-only policies.
  * **Existing customers can expect the automation option for the default policies to be turned off and for policies previously configured by Syskit Point admins to stay the same**. It is advised for the Syskit Point Admins to check policy settings and enable automation where needed.

**Guest Users Expiration (Tenant-Wide) policy is deprecated.** The deprecated policy has offered to enable the detection of inactive guest users or a periodic review of guest users from the same policy setting. To enable both the detection of inactive guest users and a periodic guest users review, the old policy needs to be split into 2 new policies.

* [Inactive Guest Users (Tenant-Wide)](../../../governance-and-automation/security-compliance-checks/inactive-guest-users.md) policy enables detection of guest users that are inactive longer than defined in the policy settings. It also provides you with the option to enable automation, meaning that Syskit Point will create tasks and send emails to users defined in the policy settings.
* **Guest Users Review** policy will be added in an upcoming release.

**A couple of things changed names.**

* **Automated Workflows were renamed to Policies**.
* **Orphaned Resources policy was renamed to Orphaned Workspaces**.&#x20;
* You will see the change in multiple screens - settings, governance screens, etc.

### New Look and Homepage Experience

**Syskit Point 2023.4 brings a new look and feel and a revamped homepage experience!** We're excited to introduce the new look and feel of Syskit Point following our company rebranding. With improved platform capabilities and a redefined product vision as the central hub for administration, security, and compliance, we are thrilled to unveil the new homepage experience. This revamped interface features a left-hand menu and a centralized dashboard, offering a comprehensive overview of your Microsoft 365. Easily navigate and delve into specifics as needed.

<figure><img src="../../../.gitbook/assets/newHomepagev2.gif" alt=""><figcaption><p>New Home Page Experience</p></figcaption></figure>

## Improvements & Bug Fixes

* **Fixed a bug** where the Copy User Permissions action would erroneously copy permission of the source user to all existing team members on private channels where the source user had permissions. The issue manifested if:
  * **Copy memberships in Microsoft Teams private channels option was enabled** when performing the action. 
  * **The selected destination user was recently added to the tenant and not synced in Syskit Point**.
  * SharePoint sites and Team memberships were not affected by this issue.
* **Group Access report was optimized**. It now better handles special groups - Everyone and Everyone except external users - and thus loads the selection step faster.
* **Improved the sensitivity label dropdown** used when creating a provisioning template. In some cases, the dropdown would show the sensitivity label GUID instead of a friendly name. Instead of the name property, Syskit Point now shows the display name.
* **Fixed an issue** where owners would get an empty screen with infinite loading animation instead of an appropriate message in case they opened a link to a workspace to which they don't have access. Now, the Access Denied message is displayed.
* **Fixed a bug** where changing Audit Log settings and activities to collect was not applied instantly but only after app services restarted.
* **Various improvements and minor fixes are available**.



