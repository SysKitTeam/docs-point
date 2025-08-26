---
description: This article lists improvements and bug fixes in the Syskit Point Cloud version 2025.4.106.1
---

# August 27, 2025

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## Improvements & Bug Fixes 


* **Fixed an issue** that caused colla
Kolaborator je dobio task koji se odnosi na inactive guest users. Kada pokuša obrisati usera -> akcija padne s greškom "Error while deleting user. Insufficient privileges to complete the operation".
Customer setup: 
In our M365 tenant, the users do not have the right to create a guest user.
They have to create a support ticket, so the admin team can create a guest user, and user that asked for the creation is set as the guest’s manager.
So he received the mail, as the guest user manager
Analiza je pokazala da imamo bug nastao prilikom zadnjeg refaktora (micanje managera). Izgleda kao da nemamo ispravnu implementaciju  metode:
Fix Result: Will correctly elevate permissions when needed to remove inactive guest users from tenant.




problem: Fallback value of LastActivityOn column in ConnectedSiteCollectionsTable
Asics kaze ovako:
we started with cleanup of inactive sites in our tenant and need some clarity on one point
the last activity date in Syskit is not matching what we have in MS SharePoint admin center, one example -
Fix Result: Different fallback value is now used for the initial activity of the site




Problem: Max Owners Policy - change owners ne radi ništa
U userActionPermissionResult se neispravno punio resurs IDem policya umjesto policy violation IDem .
Steps to reproduce
dodaj vise od 5 ljudi da budu owneri
jedan od tih ownera nek bude i primary admin
okini job da dobijes violation i task
ulogiraj se sa collaborator accountom
otvori task i probaj maknut sve osim sebe (ukljucujuci lika koji je primary admin)
Expected result
Akcija prolazi i owneri se mijenjaju u membere
Actual result
ekran se samo refresha i ništa se ne dogodi
FIX RESULT: Fixed so that the Change Owners action for the min/max policy correctly determines which sites are eligible for the action.


* **Various improvements, including UX and UI fixes, are available.**

