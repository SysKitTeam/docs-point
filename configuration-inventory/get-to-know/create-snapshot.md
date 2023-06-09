---
description: This article explains how to create a snapshot of Microsoft 365 configuration settings using Syskit Point.
---

# Create Snapshot

A snapshot in the context of Syskit Point is a collection of all the Microsoft 365 configuration settings taken at a specific point in time. 

There are two ways to create a snapshot:
* **manual** - described in this article
* **automatic** - described in the [Enable Automatic Snapshots article](enable-automatic-snapshots.md)

{% hint style="warning" %}
**Please note!**  
Before creating a snapshot, make sure to read the [Configuration Inventory Requirements article](../configuration-inventory-requirements.md).
{% endhint %}

## Take Snapshot

To create a snapshot:
* Click the Configuration Inventory tile (1) on the Home screen - the Configuration Inventory screen opens 
* Click the Take Snapshot option (2) available in the side panel under the Manage section - the Take Snapshot dialog opens
* Click the Start Snapshot button (3) - Syskit Point starts to collect data in the background

![Configuration Inventory Tile](../../.gitbook/assets/create-snapshot_cim-tile.png)

![Take Snapshot](../../.gitbook/assets/create-snapshot_take-snapshot.png)

![Start Snapshot](../../.gitbook/assets/create-snapshot_start-snapshot.png)

Once the snapshot is finished, a notification (1) is displayed. 
You can find the newly created snapshot in the snapshot list (2).

![Snapshot Created](../../.gitbook/assets/create-snapshot_snapshot-created.png)

## Related Articles

* [Configuration Inventory Requirements](../configuration-inventory-requirements.md)
* [Enable Automatic Snapshots](enable-automatic-snapshots.md)