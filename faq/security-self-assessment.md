---
description: This article describes how we use the Consensus Assessments Initiative Questionnaire Lite (CAIQ-Lite) to assess our security posture and provide transparency for security control.
---

# Security Self Assessment Questionnaire

We use the Consensus Assessments Initiative Questionnaire Lite (CAIQ-Lite) from the Cloud Security Alliance as a baseline mechanism to express our security posture in real terms and provide security control transparency.

We've made this publicly available to help customers assess our security posture for their vendor management initiatives. Please [contact us](https://www.syskit.com/company/contact-us) if you have any questions or concerns.



| Category | Control Heading | Original ID | Question | Answer | Comments | 
| :--- | :--- | :--- | :--- | :--- | :--- |
| Application & Interface Security |  Interface Security    Application Security | AIS-01.2 | Do you use an automated source code analysis tool to detect security defects in code prior to production? | Yes | We run automated tests that are enforced by Azure DevOps. We use two kinds of checks for all code: • Static code analysis (SAST) – for this, we use SonarCloud https://sonarcloud.io/features. It is integrated straight into the DevOps with Pull Request decoration making sure bugs are highly visible and preventing the merge to the main branches. All issues are resolved before the code can reach the main branch, and we currently have no bugs, vulnerabilities or security hotspots inside our main branch. • Software Composition Analysis (SCA) – we regularly scan our code for known vulnerabilities using OWASP Dependency-check. The tool uses the National Vulnerability Database in the background. Our policy is to fix the highest severity (Critical, High) items ASAP and release a new product update. |
|  | Policy Interface | AIS-01.5 |  (SaaS only) Do you review your applications for security vulnerabilities and address any issues prior to deployment to production? | Yes | We perform manual reviews alongside automated testing. All code changes go to pull requests that require two reviews other than the creator to approve. All defects found during testing are prioritized and fixed before going to production. We also subject our platform to third-party penetration testing annually. |
| | Customer Access Requirements | AIS-02.1 | Are all identified security, contractual, and regulatory requirements for customer access contractually addressed and remediated prior to granting customers access to data, assets, and information systems? | Yes | We provide full details of this via our customer agreement, terms of use and privacy policy on our website. |
|  | Data Integrity | AIS-03.1 | Does your data management policies and procedures require audits to verify data input and output integrity routines? | Yes | Data integrity is checked and audited via extensive end-to-end tests, human review, and penetration testing. |
| Audit Assurance & Compliance | Independent Audits | AAC-02.1 | Do you allow tenants to view your SOC2/ISO 27001 or similar third-party audit or certification reports? | Yes | Yes, available on our website: https://downloads.syskit.com/support/SYSKIT-ISO-27001.pdf, https://downloads.syskit.com/support/SYSKIT-ISO-9001.pdf. We do not provide security reports to external companies. |
|  | Independent Audits | AAC-02.2 | Do you conduct network penetration tests of your cloud service infrastructure at least annually? | Yes | Performed by a third-party annually on both internal and external network security. |
|  | Independent Audits | AAC-02.3 | Do you conduct application penetration tests of your cloud infrastructure regularly as prescribed by industry best practices and guidance? | Yes | Performed by a third-party annually. All suggested improvements from the last penetration test were implemented. |
|  | Information System Regulatory Mapping | AAC-03.1 | Do you have a program in place that includes the ability to monitor changes to the regulatory requirements in relevant jurisdictions, adjust your security program for changes to legal requirements, and ensure compliance with relevant regulatory requirements? | Yes | Our legal and security teams are ensuring all existing and new processes are compliant with the regulatory landscape. |
| Business Continuity Management & Operational Resilience | Business Continuity Testing | BCR-02.1 | Are business continuity plans subject to testing at planned intervals or upon significant organizational or environmental changes to ensure continuing effectiveness? | Yes | We review our business continuity plan on an annual basis and make changes to our internal policies. |
|  | Policy | BCR-10.1 | Are policies and procedures established and made available for all personnel to adequately support services operations’ roles? | Yes | We continuously update our customer documentation, internal documentation and staff training materials. Our engineers rotate into support roles on a regular basis to ensure that everybody is clear on how to support our customers and services. |
|  | Retention Policy  | BCR-11.1 | Do you have technical capabilities to enforce tenant data retention policies? | Yes | We are able to set this inside our platform. |
|  | Retention Policy | BCR-11.3 | Have you implemented backup or recovery mechanisms to ensure compliance with regulatory, statutory, contractual or business requirements? | Yes | We have on-site backups retained for up to two weeks and off-site backups retained for at least six months. |
|  | Retention Policy  | BCR-11.7 | Do you test your backup or redundancy mechanisms at least annually? | Yes | Yes, on a scheduled basis, depending on the system criticality, at least once a year. |
| Change Control & Configuration Management | Unauthorized Software Installations | CCC-04.1 | Do you have controls in place to restrict and monitor the installation of unauthorized software onto your systems? | Yes | Yes, we have a central SCCM and Intune platform used for the installation of new software.  |
| Data Security & Information Lifecycle Management | E-commerce Transactions | DSI-03.1 | Do you provide standardized (e.g., ISO/IEC) non-proprietary encryption algorithms (3DES, AES, etc.) to tenants in order for them to protect their data if it is required to move through public networks (e.g., the Internet)? | Yes | All communications are encrypted; our platform enforces TLS 1.2 and uses HTTPS for secure connections with the browser. |
|  | E-commerce Transactions | DSI-03.2 | Do you utilize open encryption methodologies any time your infrastructure components need to communicate with each other via public networks (e.g., Internet-based replication of data from one environment to another)? | Yes | All communications are encrypted; our platform enforces TLS 1.2 and uses HTTPS for secure connections with the browser. |
|  | Nonproduction Data  | DSI-05.1 | Do you have procedures in place to ensure production data shall not be replicated or used in non-production environments? | Yes |  |
|  | Secure Disposal | DSI-07.1 | Do you support the secure deletion (e.g., degaussing/cryptographic wiping) of archived and backed-up data? | Not Applicable | Data is stored on Azure; therefore, secure deletion can be requested per Microsoft's customer data protection policy. Note that as our platform and all of the data resides in the Customer's Azure subscription, they will need to put in that request. |
|  |  Secure Disposal | DSI-07.2 | Can you provide a published procedure for exiting the service arrangement, including assurance to sanitize all computing resources of tenant data once a customer has exited your environment or has vacated a resource? | Yes | If customers would like to stop using our platform, Customer is required to delete their resource group where our platform is deployed inside their Azure subscription.  |
| Datacenter Security | Asset Management | DCS-01.2 | Do you maintain a complete inventory of all of your critical assets located at all sites/ or geographical locations and their assigned ownership? | Yes | We keep an inventory of our assets and perform an annual inventory review. |
|  | Controlled Access Points | DCS-02.1 | Are physical security perimeters (e.g., fences, walls, barriers, guards, gates, electronic surveillance, physical authentication mechanisms, reception desks, and security patrols) implemented for all areas housing sensitive data and information systems? | Yes | Yes, both Office spaces and the Datacenter are protected by standard physical methods, i.e. security personnel, card access, cameras, a formal announcement of arrival, etc. |
|  | User Access | DCS-09.1 | Do you restrict physical access to information assets and functions by users and support personnel? | Yes |  |
| Encryption & Key Management | Key Generation | EKM-02.1 | Do you have a capability to allow creation of unique encryption keys per tenant? | Yes | This feature is provided by Azure. Note that the platform is hosted in Customer Azure subscription, which is outside of our control. |
|  | Encryption | EKM-03.1 | Do you encrypt tenant data at rest (on disk/storage) within your environment? | Yes | Our platform uses cloud services in Azure to store data, specifically Azure SQL and Cosmos DB. SQL Server uses Transparent data encryption (TDE), https://docs.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview?tabs=azure-portal. Azure Cosmos also support encryption at rest, https://docs.microsoft.com/en-us/azure/cosmos-db/database-encryption-at-rest. The entire database is encrypted, and the algorithm used is AES-256. Note that data resides in the Customer Azure subscription. |
| Governance and Risk Management | Baseline Requirements | GRM-01.1 | Do you have documented information security baselines for every component of your infrastructure (e.g., hypervisors, operating systems, routers, DNS servers, etc.)? | Yes | Yes, done by both internal IT Team and external third party. |
|  | Policy | GRM-06.1 |Are your information security policies and procedures made available to all impacted personnel and business partners, authorized by accountable business role/function and supported by the information security management program as per industry best practices (e.g., ISO 27001, SOC 2)? | Yes | Yes, as per ISO 27001 and ISO 9001 compliance standards. |
|  | Policy Enforcement | GRM-07.1 | Used for third-party app integration. | Yes | These actions are covered and enforced by our Employment contracts. |
|  | Policy Reviews | GRM-09.1 | Do you notify your tenant's when you make material changes to your information security and/or privacy policies? | Yes | Each Customer is assigned a dedicated Customer success manager responsible for sending important notifications, including these. |
|  | Policy Reviews  | GRM-09.2 | Do you perform, at minimum, annual reviews to your privacy and security policies? | Yes |  |
| Human Resources | Asset Returns | HRS-01.1 | Upon termination of contract or business relationship, are employees and business partners adequately informed of their obligations for returning organizationally-owned assets? | Yes | We have defined procedures for returning assets employees need to adhere to. |
|  | Background Screening | HRS-02.1 | Pursuant to local laws, regulations, ethics, and contractual constraints, are all employment candidates, contractors, and involved third parties subject to background verification? | Yes | All new hires are subject to CV/resume checks and criminal record/convictions checks. These are the only background checks we are allowed to perform under our law. |
|  | Employment Agreements | HRS-03.1 | Do your employment agreements incorporate provisions and/or terms in adherence to established information governance and security policies? | Yes |  |
|  | Employment Termination | HRS-04.1 | Are documented policies, procedures, and guidelines in place to govern change in employment and/or termination? | Yes |  |
|  | Training / Awareness | HRS-09.5 | Are personnel trained and provided with awareness programs at least once a year? | Yes | Upon arrival, all new hires have a brief security training regarding company policy, ISO standards and information security. Beyond that, we send out constant safety advice to all employees with education and policies on how to use information systems safely. |
| Identity & Access Management | Audit Tools Access | IAM-01.1 | Do you restrict, log, and monitor access to your information security management systems (e.g., hypervisors, firewalls, vulnerability scanners, network sniffers, APIs, etc.)? | Yes | Only a limited number of authorized users have admin access to restricted systems. |
|  | Audit Tools Access | IAM-01.2 | Do you monitor and log privileged access (e.g., administrator level) to information security management systems? | Yes |  |
|  | User Access Policy  | IAM-02.1 | Do you have controls in place ensuring timely removal of systems access that is no longer required for business purposes? | Yes |  |
|  | Policies and Procedures | IAM-04.1 | Do you manage and store the identity of all personnel who have access to the IT infrastructure, including their level of access? | Yes |  |
|  | Source Code Access Restriction | IAM-06.1 | Are controls in place to prevent unauthorized access to your application, program, or object source code and assure it is restricted to authorized personnel only? | Yes |  |
|  | Source Code Access Restriction | IAM-06.2 | Are controls in place to prevent unauthorized access to tenant application, program, or object source code and assure it is restricted to authorized personnel only? | Yes |  |
|  | User Access Restriction / Authorization | IAM-08.1 | Do you document how you grant, approve and enforce access restrictions to tenant/customer credentials following the rules of least privilege? | Yes |  |
|  | User Access Reviews | IAM-10.1 | Do you require a periodical authorization and validation (e.g., at least annually) of the entitlements for all system users and administrators (exclusive of users maintained by your tenants), based on the rule of least privilege, by business leadership or other accountable business role or function? | Yes |  |
|  | User Access Revocation  | IAM-11.1 | Is timely deprovisioning, revocation, or modification of user access to the organizations systems, information assets, and data implemented upon any change in status of employees, contractors, customers, business partners, or involved third parties? | Yes |  |
| Infrastructure & Virtualization Security | Audit Logging / Intrusion Detection | IVS-01.1 | Are file integrity (host) and network intrusion detection (IDS) tools implemented to help facilitate timely detection, investigation by root cause analysis, and response to incidents? | Not Applicable | On-premise servers are covered by quick RTO, multiple backups, warranties in case of hardware failure etc. However, the majority of our production infrastructure is in the Azure cloud, and we rely on procedures implemented by Microsoft. |
|  | Audit Logging / Intrusion Detection | IVS-01.2 | Is physical and logical user access to audit logs restricted to authorized personnel? | Yes |  |
|  | Audit Logging / Intrusion Detection | IVS-01.5 | Are audit logs reviewed on a regular basis for security events (e.g., with automated tools)? | Yes |  |
|  | Clock Synchronization | IVS-03.1 | Do you use a synchronized time-service protocol (e.g., NTP) to ensure all systems have a common time reference? | Yes |  |
|  | OS Hardening and Base Controls | IVS-07.1 | Are operating systems hardened to provide only the necessary ports, protocols, and services to meet business needs using technical controls (e.g., antivirus, file integrity monitoring, and logging) as part of their baseline build standard or template? | Yes |  |
|  | Production / Non-Production Environments | IVS-08.1 | For your SaaS or PaaS offering, do you provide tenants with separate environments for production and test processes? | Yes | Our platform is deployed into the Customer's Azure subscription (in a dedicated resource group) and connected to a single tenant. The test environment is not provided by SysKit by default, but if the Customer has a test tenant, we offer the option to expand the license to include a non-production tenant for 10% of the original license cost. |
|  | Production / Non-Production Environments | IVS-08.3 | Do you logically and physically segregate production and non-production environments? | Yes | Each platform instance is deployed into a dedicated resource group and is connected to a single tenant ensuring separation between environments. |
|  | Segmentation  | IVS-09.1 | Are system and network environments protected by a firewall or virtual firewall to ensure business and customer security requirements? | Yes | Our corporate network security is managed by our internal IT team and the third-party vendor. Our platform, by default, is deployed with a dedicated Virtual Network that is isolated from the rest of the Customer network. Frontend and Backend app services are accessible from the Internet, while the rest of Azure resources are secured behind firewalls and private connections. Customers are also free to implement additional security layers as needed. |
|  | VMM Security - Hypervisor Hardening | IVS-11.1 | Do you restrict personnel access to all hypervisor management functions or administrative consoles for systems hosting virtualized systems based on the principle of least privilege and supported through technical controls (e.g., two-factor authentication, audit trails, IP address filtering, firewalls and TLS-encapsulated communications to the administrative consoles)? | Yes |  |
|  | Wireless Security | IVS-12.1 | Are policies and procedures established and mechanisms configured and implemented to protect the wireless network environment perimeter and to restrict unauthorized wireless traffic? | Yes |  |
|  | Wireless Security | IVS-12.2 | Are policies and procedures established and mechanisms implemented to ensure wireless security settings are enabled with strong encryption for authentication and transmission, replacing vendor default settings (e.g., encryption keys, passwords, SNMP community strings)? | Yes |  |
|  | Wireless Security | IVS-12.3 | Are policies and procedures established and mechanisms implemented to protect wireless network environments and detect the presence of unauthorized (rogue) network devices for a timely disconnect from the network? | Yes |  |
| Interoperability & Portability | APIs | IPY-01.1 | Do you publish a list of all APIs available in the service and indicate which are standard and which are customized? | Yes | We can send the list of APIs on request. |
| Mobile Security | Approved Applications  | MOS-03.1 | Do you have a policy enforcement capability (e.g., XACML) to ensure that only approved applications and those from approved application stores can be loaded onto a mobile device? | No | We haven't implemented an MDM solution for a few reasons: our size, the fact that we discourage our employees from using their mobile devices for work and that most of our systems require a full-size screen in order to be useful. However, this is an area that we're looking to make improvements on. We'll review the status of this at our next security compliance review. |
| Security Incident Management, E-Discovery, & Cloud Forensics | Incident Management | SEF-02.1 | Do you have a documented security incident response plan? | Yes |  |
|  | Incident Management | SEF-02.4 | Have you tested your security incident response plans in the last year? | Yes |  |
|  | Incident Reporting | SEF-03.1 | Are workforce personnel and external business relationships adequately informed of their responsibility, and, if required, consent and/or contractually required to report all information security events in a timely manner? | Yes | SysKit employees are trained in how to communicate incidents internally. In cases that affect a small subset of our customers, we may reach out directly to those affected customers. |
|  | Incident Reporting | SEF-03.2 | Do you have predefined communication channels for workforce personnel and external business partners to report incidents in a timely manner adhering to applicable legal, statutory, or regulatory compliance obligations? | Yes |  |
|  | Incident Response Legal Preparation | SEF-04.4 | Do you enforce and attest to tenant data separation when producing data in response to legal subpoenas? | Not Applicable | We do not host the platform. Customer is hosting their own instance in their Azure subscription. Data is solely under the Customer's control and responsibility. |
| Supply Chain Management, Transparency, and Accountability | Incident Reporting | STA-02.1 | Do you make security incident information available to all affected customers and providers periodically through electronic methods (e.g., portals)? | Yes |  |
|  | Network / Infrastructure Services | STA-03.1 | Do you collect capacity and use data for all relevant components of your cloud service offering? | Not Applicable | We do not host the platform. Customer is hosting their own instance in their Azure subscription. Data is solely under the Customer's control and responsibility. |
|  | Third Party Agreements | STA-05.4 | Do third-party agreements include provision for the security and protection of information and assets? | Yes |  |
|  | Third Party Agreements | STA-05.5 | Do you have the capability to recover data for a specific customer in the case of a failure or data loss? | Not Applicable | We do not host the platform. Customer is hosting their own instance in their Azure subscription. Data is solely under the Customer's control and responsibility. |
|  | Supply Chain Metrics | STA-07.4 | Do you provide tenants with ongoing visibility and reporting of your operational Service Level Agreement (SLA) performance? | Not Applicable | We do not host the platform. Customer is hosting their own instance in their Azure subscription. Data is solely under the Customer's control and responsibility. |
|  | Third Party Audits | STA-09.1 | Do you mandate annual information security reviews and audits of your third party providers to ensure that all agreed upon security requirements are met? | Not Applicable | We do not host the platform. Customer is hosting their own instance in their Azure subscription. Data is solely under the Customer's control and responsibility. |
| Threat and Vulnerability Management | Antivirus / Malicious Software | TVM-01.1 | Do you have anti-malware programs that support or connect to your cloud service offerings installed on all of your IT infrastructure network and systems components? | Yes | Azure App Service is a managed platform. Microsoft Antimalware Client and Service is enabled by default on app service instances. |
|  | Vulnerability / Patch Management | TVM-02.5 | Do you have a capability to patch vulnerabilities across all of your computing devices, applications, and systems? | Yes | Employees are required to use automatic updates on their company-owned devices. |
|  | Mobile Code | TVM-03.1 | Is mobile code authorized before its installation and use, and the code configuration checked, to ensure that the authorized mobile code operates according to a clearly defined security policy? | Yes |  |