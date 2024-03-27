---
description: This article provides information on the Blocked Users with Assigned Licenses report.
---


# Blocked Users with Assigned Licenses

Syskit Point detects blocked users with assigned licenses based on the settings defined in the tenant-wide [policy](../automated-workflows/blocked-users-with-licenses-admin.md). This helps you optimize cost by removing the unused licenses from the user and assigning them to active users. 

The Blocked Users with Assigned Licenses is **a tenant-wide policy, and it cannot have task delegation enabled**. That means that no tasks are created to resolve this policy, and no emails are sent to collaborators.

The blocked users with assigned licenses **are still detected** as a part of the Security and Compliance checks feature. **This means that Syskit Point detects a vulnerability on a workspace** based on the applied policy, but it does not create tasks or send any emails to collaborators. 

The purpose of this is to assist Syskit Point admins by
bringing awareness of potential issues in their Microsoft 365 environment. 

On the Security & Compliance dashboard, click the **Blocked users with assigned licenses** button to see the report.

The Blocked Users with Assigned Licenses screen opens, showing a list of all **blocked users that still have licenses assigned** to them.

The report provides information on:
  * **User (1)** name
  * **Detected (2)** - when the policy vulnerability was detected
  * **Username (3)** - the email of the blocked users
  * **Licenses (4)** - name of licenses that are assigned to the blocked user
  * **Status (5)** - status of the policy vulnerability

Additionally, you can complete the following actions for the policy vulnerability:
  * **Accept Risk (6)** - this means you will close the policy vulnerability without making any changes to the current state of the workspace
  * **Remove Licenses (7)** - this will remove the licenses from the blocked user and resolve the policy vulnerability


![Blocked Users with Assigned Licenses](../../.gitbook/assets/security-compliance-checks-blocked-users.png)


