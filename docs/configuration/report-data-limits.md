---
description: This article describes thresholds and other report limits available in Syskit Point.
---

# Report Data Limits

:::info
**Data Limits settings** are available in the Point Enterprise plan. See the [pricing page](https://www.syskit.com/products/point/pricing/) for more details.
:::

## Settings

To prevent high load times and performance issues during report generation, several thresholds are set in place which limits the size of the generated report. These thresholds are predefined but can be easily adjusted in the Data Limits section of the settings screen to fit your needs. The following thresholds are defined:

* **Rows Threshold** – The maximum number of rows per report. The default value is 200K.
* **Excel Export Threshold** – The maximum number of rows for reports exported to Excel. The default value is 500K.  
* **PDF Export Threshold** – The maximum number of rows for reports exported to PDF. The value is set to 10K. This value can not be changed.
* **Site Structure Threshold** – The maximum number of sites displayed in reports showing site structure, for example, the Permissions Matrix report. The default value is 100. 
* **User Access Threshold** – The maximum number of users displayed in the User Access report. The default value is 100. 

Once a certain threshold value is reached, a warning message will appear. For instance, if we detect that the report during generation contains more rows than the specified Rows Threshold value, a message on top of the browser window will appear telling you precisely that. The same goes for the exported reports. That means that the generated report does not contain the complete data set and thus some important information about your environment might be missing.

## Data Limits Reached

What to do when you encounter the threshold warning messages? There are two approaches you can take:

* **Specify the report generation parameters more conservatively** - for instance, you might want to generate a Permission Matrix report for a fewer number of sites. That is the recommended approach. 
* **Increase the related threshold setting** - that might in turn greatly affect the application’s performance and load times which is something to keep in mind while choosing the right value for you. 

## When the data is simply too large

As mentioned above, increasing the Rows Threshold value might seem like a more comfortable path to take, but, in addition to the performance effects, you might get an error message saying:

`Response data is larger than the configured threshold. Consider changing the filters to reduce response data.`

The configured threshold in question is a hidden setting inside the settings.json file in the ProgramData/SysKit/Point/Settings folder with the name maxDataTransferSizeInBytes which indicates the maximum size of responses the browser app will handle while communicating with the Syskit Point service, in bytes. If any response exceeds the set value, the before mentioned error message will appear, but, if ever, the error message will most likely appear for report generation responses meaning that the generated report is too large. You can increase this value to enable the proper processing of larger responses. The value will default to 500 MB \(524288000 Bytes\) if a value less than 100MB \(104857600 Bytes\) is set. But, alongside possible poor performance consequences, even that can fail as explained below.

Other problems you might notice are seeing Internal Server Error or Bad Request icons instead of the report data. Inspecting the event log, you might see error messages like

`Cannot write more bytes to the buffer than the configured maximum buffer size`,

`System.OutOfMemoryException: Array dimensions exceeded supported range`

or similar. That is a clear indication that increasing any threshold values cannot help you anymore and that the only option left is adjusting the report generation parameters \(i.e. picking a fewer number of sites\).

