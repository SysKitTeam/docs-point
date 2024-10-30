---
description: This article outlines the most frequently asked questions about the content & structure section of Provisioning for Syskit Point.
---

# Provisioning - Content & Structure FAQ

## What emails are sent?

Admins will receive email notifications if provisioning fails or results in an error.

No email is sent to notify users or admins that provisioning was successfully completed. Admins can view this info by navigating to Govern > Provisioning Requests > Overview and checking the “Status” column.

## If the workspace changes after the Provisioning Template is created, which version will be copied?

Copying is done when a new workspace is provisioned, not when the template is created.

Only the structure/content available at the moment of provisioning will be copied.

## How many files can be copied? What if there are more files?

The maximum number of files that can be copied is **20 files**. 

**Workspaces with more than 20 files cannot be selected to copy content** and will have a warning icon in Point.

If the workspace used for the Provisioning Template later adds more files, when a new workspace is provisioned using this template, copying content will fail, and no files will be copied (admin will receive an email about the error, and the structure will still be copied).

Here's an example:
* Today - **"Site A"** has 15 files. This site is used to create **“Template A”**.
* Tomorrow - **“Site A”** adds 20 more files, so now it has 35 files.
* Next week - New workspace is provisioned using **“Template A”** - during the process, the engine checks and sees that the workspace has 35 files (more than the limit). The engine will only copy the structure, but it will not copy any files. Instead, it will notify the admin via email that copying content failed because there were too many files.

## What if I create a Public template but copy structure/content from a Private workspace?

If you set the privacy as “Public” in the Point provisioning template, but you are using a Private workspace to copy structure/content:

Workspace will follow the Point provisioning template selection ("Public"), but it will copy everything else.

## What are suggested best practices?

Create a “template workspace” - it will be used only for provisioning new workspaces and has the default structure/content.

Copying structure/content from live production workspaces that are subject to change is not recommended.

## What if I want to exclude these “template” workspaces from vulnerability detection?

This is currently not possible.

A possible workaround is to “Accept Risk” for these workspaces when they appear as a vulnerability.

## Are these copy options available via API?
Yes, everything available via the GUI is also available via the API.

 