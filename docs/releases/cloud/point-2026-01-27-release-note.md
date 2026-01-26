---
description: This article lists new features, improvements, and bug fixes in the Syskit Point Cloud version 2026.1.125.29
---

# January 20, 2026

[Start a free trial](https://www.syskit.com/products/point/free-trial/) and [tell us what you think](https://www.syskit.com/company/contact-us/).

## About Syskit Point Cloud

* **New to Syskit Point Cloud?** Explore Syskit Point Cloud with a 21-day [free trial](https://www.syskit.com/products/point/free-trial/) for an easy and effective way to manage and secure your environment.

* **Already using Syskit Point Cloud?** Syskit Point Cloud is automatically upgraded to the latest version when available. The automatic update occurs outside working hours to ensure minimal interference with your day-to-day business. The new version will begin rolling out with this announcement and is expected to reach all customers within the next few days.

## New Features

* **New add-on available**: License Optimization
  * [To get the new License Optimization add-on, please contact us](https://www.syskit.com/contact-us/?utm_source=syskit-point&utm_medium=in-product&utm_campaign=311269578-License-Optimization&utm_content=button). 
  * The License Optimization add-on contains:
      * New license reports
      * Enhanced current license reports
      * Help with cost optimization upon your license renewals 
      * Insight into redundant licenses or unused add-on licenses
      * Overview of the state of your Licenses from the Dashboard tile
  * Current Syskit Point users will receive access to the License Optimization add-on for a trial period of 3 months. After this period ends, a separate add-on will be required to access licensing features.
  * [For details on License reports, take a look at this article.](../../reporting/licenses-reports.md) 

   
## Improvements & Bug Fixes 

MultiGeo - site sync on removed locations
U slučaju da se obriše lokacija, sajtovi ostanu u pointu i failaju se syncati.
To Discuss:
vjerojatno treba samo soft delete napraviti ako detektiramo da nema više lokacije?
mozda provjeravat tenant lokacije i ako jedna nestane i nije synced sa onime sto je u bazi na temelju toga zakljuciti da siteovi na toj lokaciji trebaju u deleted stanje (mozda hard)
1.  Added a stored procedures for finding distinct site data locations and a stored procedure for updating hard delete state on the sites with the data location that doesn't exist anymore.
2.  Adaptation of the site repository to use new stored procedure
3.  Adaptation on the service layer: Created IDeletedGeoLocationService that compares current tenant geo-locations from Microsoft 365 against stored data locations in the database to detect removed geo-locations, then hard-deletes all affected sites.
4.  Auto-Discovery Integration: Enhanced the DiscoverObjectsManager to call HandleDeletedGeoLocationsAsync(CancellationToken) during each autodiscovery cycle, automatically cleaning up sites in removed geo-locations before they cause sync failures.
5.  Enhanced Monitoring: Updated StuckSiteSyncReportingJob to include geo-location distribution in logs, helping operators quickly identify if stuck sites are concentrated in a single location (indicating a potential deleted geo-location).





Krivi state autodiscoveranih OneDriveova
Korisnik u Pointu vidi OneDriveove koji su obrisani prije 5 godina i označeni su mu kao Deleted ali imaju kvačicu na Can Be Restored.
Čini se da hidden lista na sebi zadržava sve OneDriveove i onda ih mi kod prvog synca prepoznamo kao SoftDeleted.
U autodiscover bi trebalo dodati sljedeće:
Ako je site obrisan prije više od 93 dana autoamtski ga prebacujemo u hard deleted stanje
Razmisliti ako site još ne postoji u bazi da ga uopće ne dodajemo ako je obrisan dulje od 93 dana (Hard Deleted je) -> mozda bolje ovo
postoji repro jer imamo na QA trunk ovu situaciju
Provjeriti da se onedriveovi koji su izbrisani prije 93 dana zaista na prvi sync prikazuju kao hard deleted
Improved detection of OneDrive sites that cannot be restored.



Folders missing in sync because of sharing links deserialization
Korisnik ima site koji je izgleda migriran sa on-prem i neki sharing linkovi breakaju deserijalizaciju jer im nisu popunjeni property za koje mi u modelu nemamo da su nullable.
Errors loading data for list Weekly Financial Metrics ("https://silberlinemfg.sharepoint.com/sites/AcctPortal/Weekly Financial Metrics") (d1eaa125-eb62-4862-9124-1db932c053a4) 
System.InvalidOperationException: There is an error in XML document (1, 55567).
invitedOnField is nullable and can accept empty value 



* **Various improvements, including UX and UI fixes, are available.**