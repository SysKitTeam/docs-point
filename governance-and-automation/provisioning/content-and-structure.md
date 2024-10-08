---
description: This article explains how the content and structure aspect of Provisioning works.
---

# Content & Structure

The Content & Structure section for Provisioning lets you copy the structure or both the structure and content of an existing Team, Group, or Site in order to make things easier for you when provisioning a new one. 

The options you have are the following:

* **Start from scratch (1)**
  * Selecting this option means that your new provisioned workspace will be a clean slate. 
  * Default apps or channels will not be created, and the content and structure will not be copied from an existing workspace. 

* **Use existing Microsoft Teams template (2)**
  * After selecting this option, you need to enter Microsoft template ID for an existing template.
  * Syskit Point integrates with team templates you have created in the **Microsoft 365 Teams admin center**. 
  * When you enter a team template ID, Syskit Point creates predefined apps, channels, and tabs for the new workspaces that use the template.

* **Copy from existing team (3)**
  * When selecting this, you need to select the workspace you want to copy by entering the name (or identifying information) of the workspace in the space provided.
  * This copies channels, apps, tabs, and settings from the selected workspace to the one being provisioned. 
  * You can also select whether to **check the Copy team SharePoint site (4)** checkbox
    * If the check is marked, you can also select whether to:
      * Copy structure - this copies only the structure of the workspace but not the content
      * Copy structure and content - this copies both the structure of the workspace and the content within the workspace

![Provisioning - Content & Structure](../../.gitbook/assets/provisioning-content-and-structure-section.png)


## Content & Structure Options

Here, you can find a list of all objects that can be copied, along with which of the three options will copy which objects. 

The objects available for copying are: 

* **Channels & channel folders**
* **Apps**
* **Tabs**
* **Document Libraries and Lists**
* **Folders**
* **Files/Documents**


When deciding which option to select from the three available, it helps to know which option copies which objects. Here's what each option copies: 

* If you select **Start from scratch**, none of the objects are copied, your workspace is a clean slate.

* If you select **Use existing Microsoft Teams template**, the following is copied:
  * **Channels & channel folders**
  * **Apps**
  * **Tabs**

* If you select **Copy from existing team**, the following is copied: 
  * **Channels & channel folders**
  * **Apps**
  * **Tabs**

* If you select **Copy team SharePoint site - Copy structure**, the following is copied: 
  * **Channels & channel folders**
  * **Apps**
  * **Tabs**
  * **Document Libraries and Lists**

* If you select **Copy team SharePoint site - Copy structure and content**, the following is copied: 
  * **Channels & channel folders**
  * **Apps**
  * **Tabs**
  * **Document Libraries and Lists**
  * **Folders**
  * **Files/Documents**

{% hint style="warning" %}
**Please note** the following: 
* **Channels & channel folders are provisioned by Microsoft** 365 and visible only after the first post is made and by **navigating to the Files tab** in the Teams app
* **Site Themes** and **Subsites** are currently **not copied** under any of the options
* **Empty folders** are not copied
* **Folder color** is not copied
* When copying files, **up to 20 files can be copied** 
* If **more than 20 files are detected**, they are **not copied and the Admin receives an email** stating that the Content will not be applied

{% endhint %}


Find more details on how to create Provisioning templates in the [Templates article](templates.md).
