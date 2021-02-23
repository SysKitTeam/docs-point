---
description: This article describes how to test if SysKit Point web application is accessible.
---

# Test Access to Point

You can test the connection to SysKit Point deployed on the Virtual Machine after the configuration is finished. To do so, use the following PowerShell cmdlet from any computer connected to the Internet:

`Test-NetConnection -Port Point_port -ComputerName PointDNSName`

Here, the `-Port` parameter should be set to 443 and `-ComputerName` to the DNS name of the Point web application you specified as the URL in the SysKit Point Configuration Wizard. For example: `Test-NetConnection -Port 443 -ComputerName point.mycustomdomain.com`

After all the steps are done, you can access the SysKit Point web application from anywhere on the Internet by opening the defined URL in your web browser. For example, `https://point.mycustomdomain.com`. If everything is set up correctly, the SysKit Point Sign in page opens.

