import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * This sidebar includes only files that actually exist in the filesystem
 * Step by step organization: home.mdx first, then Releases with Cloud/Enterprise subcategories
 * Order matches SUMMARY.md exactly
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    // Home page
    'home',
    // Releases
    {
      type: 'category',
      label: 'Releases',
      link: {
            type: 'doc',
            id: 'releases/README',
      },
      items: [
        {
          type: 'category',
          label: 'Syskit Point Cloud',
          link: {
            type: 'doc',
            id: 'releases/cloud/README',
          },
          items: [
            'releases/cloud/point-2025-10-14-release-note',
            'releases/cloud/point-2025-10-07-release-note',
            'releases/cloud/point-2025-09-30-release-note',
            'releases/cloud/point-2025-09-23-release-note',
            'releases/cloud/point-2025-09-16-release-note',
            'releases/cloud/point-2025-09-09-release-note',
            'releases/cloud/point-2025-09-02-release-note',
            'releases/cloud/point-2025-08-27-release-note',
            'releases/cloud/point-2025-08-20-release-note',
            'releases/cloud/point-2025-08-12-release-note',
            'releases/cloud/point-2025-08-07-release-note',
            'releases/cloud/point-2025-07-30-release-note',
            'releases/cloud/point-2025-07-23-release-note',
            'releases/cloud/point-2025-07-16-release-note',
            'releases/cloud/point-2025-07-08-release-note',
            'releases/cloud/point-2025-07-01-release-note',
            'releases/cloud/point-2025-06-24-release-note',
            'releases/cloud/point-2025-06-17-release-note',
            'releases/cloud/point-2025-06-10-release-note',
            'releases/cloud/point-2025-06-05-release-note',
            'releases/cloud/point-2025-05-27-release-note',
            'releases/cloud/point-2025-05-13-release-note',
            'releases/cloud/point-2025-05-06-release-note',
            'releases/cloud/point-2025-04-29-release-note',
            'releases/cloud/point-2025-04-22-release-note',
            'releases/cloud/point-2025-04-08-release-note',
            'releases/cloud/point-2025-04-01-release-note',
            'releases/cloud/point-2025-03-25-release-note',
            'releases/cloud/point-2025-03-18-release-note',
            'releases/cloud/point-2025-03-11-release-note',
            'releases/cloud/point-2025-03-04-release-note',
            'releases/cloud/point-2025-02-25-release-note',
            'releases/cloud/point-2025-02-18-release-note',
            'releases/cloud/point-2025-02-11-release-note',
            'releases/cloud/point-2025-02-06-release-note',
            'releases/cloud/point-2025-01-28-release-note',
            'releases/cloud/point-2025-01-22-release-note',
            'releases/cloud/point-2025-01-14-release-note',
            'releases/cloud/point-2025-01-02-release-note',
            'releases/cloud/point-2024-12-17-release-note',
            'releases/cloud/point-2024-12-10-release-note',
            'releases/cloud/point-2024-12-03-release-note',
            'releases/cloud/point-2024-11-26-release-note',
            'releases/cloud/point-2024-11-19-release-note',
            'releases/cloud/point-2024-11-05-release-note',
            'releases/cloud/point-2024-10-29-release-note',
            'releases/cloud/point-2024-10-22-release-note',
            'releases/cloud/point-2024-10-15-release-note',
            'releases/cloud/point-2024-10-08-release-note',
            'releases/cloud/point-2024-10-01-release-note',
            'releases/cloud/point-2024-09-24-release-note',
            'releases/cloud/point-2024-09-18-release-note',
            'releases/cloud/point-2024-09-02-release-note',
            'releases/cloud/point-2024-08-26-release-note',
            'releases/cloud/point-2024-08-20-release-note',
            'releases/cloud/point-2024-08-12-release-note',
            'releases/cloud/point-2024-08-06-release-note',
            'releases/cloud/point-2024-07-29-release-note',
            'releases/cloud/point-2024-07-23-release-note',
            'releases/cloud/point-2024-07-02-release-note',
            'releases/cloud/point-2024-06-18-release-note',
            'releases/cloud/point-2024-06-04-release-note',
            'releases/cloud/point-2024-05-21-release-note',
            'releases/cloud/point-2024-05-09-release-note',
            'releases/cloud/point-2024-04-23-release-note',
            'releases/cloud/point-2024-04-09-release-note',
            'releases/cloud/point-2024-03-26-release-note',
            'releases/cloud/point-2024-03-12-release-note',
            'releases/cloud/point-2024-02-22-release-note',
            'releases/cloud/point-2024-02-06-release-note',
            'releases/cloud/point-2024-01-19-release-note',
            'releases/cloud/point-2024-01-18-release-note',
            'releases/cloud/point-2023-12-19-release-note',
            'releases/cloud/point-2023-11-30-release-note',
            'releases/cloud/point-2023-11-15-release-note',
            'releases/cloud/point-2023-11-02-release-note',
            'releases/cloud/point-2023-11-02-announcement',
            'releases/cloud/point-2023-10-17-release-note',
            'releases/cloud/point-2023-10-03-release-note',
            'releases/cloud/point-2023-09-21-release-note',
            'releases/cloud/point-2023-09-14-release-note',
            'releases/cloud/point-2023-09-07-release-note',
            'releases/cloud/point-2023-08-23-release-note',
            'releases/cloud/point-2023-08-09-release-note',
            'releases/cloud/point-2023-07-26-release-note',
            'releases/cloud/point-2023-3-release-note',
            'releases/cloud/point-2023-2-release-note',
          ],
        },
        {
          type: 'category',
          label: 'Syskit Point Enterprise',
          link: {
            type: 'doc',
            id: 'releases/enterprise/README',
          },
          items: [
            {
              type: 'category',
              label: 'Syskit Point 2025.4',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2025-4/README',
              },
              items: [
                'releases/enterprise/syskit-point-2025-4/point-2025-4-109-release-note',
                'releases/enterprise/syskit-point-2025-4/point-2025-4-105-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2025.3',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2025-3/README',
              },
              items: [
                'releases/enterprise/syskit-point-2025-3/point-2025-3-101-release-note',
                'releases/enterprise/syskit-point-2025-3/point-2025-3-99-release-note',
                'releases/enterprise/syskit-point-2025-3/point-2025-3-97-release-note',
                'releases/enterprise/syskit-point-2025-3/point-2025-3-95-release-note',
                'releases/enterprise/syskit-point-2025-3/point-2025-3-93-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2025.2',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2025-2/README',
              },
              items: [
                'releases/enterprise/syskit-point-2025-2/point-2025-2-91-release-note',
                'releases/enterprise/syskit-point-2025-2/point-2025-2-90-release-note',
                'releases/enterprise/syskit-point-2025-2/point-2025-2-86-release-note',
                'releases/enterprise/syskit-point-2025-2/point-2025-2-82-release-note',
                'releases/enterprise/syskit-point-2025-2/point-2025-2-78-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.6',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-6/README',
              },
              items: [
                'releases/enterprise/syskit-point-2024-6/point-2024-6-73-release-note',
                'releases/enterprise/syskit-point-2024-6/point-2024-6-71-release-note',
                'releases/enterprise/syskit-point-2024-6/point-2024-6-70-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.5',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-5/README',
              },
              items: [
                'releases/enterprise/syskit-point-2024-5/point-2024-5-67-release-note',
                'releases/enterprise/syskit-point-2024-5/point-2024-5-65-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.4',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-4/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2024-4/point-2024-4-60-release-note',
                'releases/enterprise/syskit-point-2024-4/point-2024-4-54-release-note',
                'releases/enterprise/syskit-point-2024-4/point-2024-4-52-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.3',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-3/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2024-3/point-2024-3-48-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.2',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-2/README',
              },
              items: [
                'releases/enterprise/syskit-point-2024-2/point-2024-2-45-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2024.1',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2024-1/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2024-1/point-2024-1-43-release-note',
                'releases/enterprise/syskit-point-2024-1/point-2024-1-41-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2023.5',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2023-5/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2023-5/point-2023-5-39-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2023.4',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2023-4/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2023-4/point-2023-4-1-release-note',
                'releases/enterprise/syskit-point-2023-4/point-2023-4-release-note',
              ],
            },
            'releases/enterprise/point-2023-3-release-note',
            'releases/enterprise/point-2023-2-release-note',
            {
              type: 'category',
              label: 'Syskit Point 2023.1',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2023-1/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2023-1/point-2023-1-3-release-note',
                'releases/enterprise/syskit-point-2023-1/point-2023-1-2-release-note',
                'releases/enterprise/syskit-point-2023-1/point-2023-1-1-release-note',
                'releases/enterprise/syskit-point-2023-1/point-2023-1-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2022.5',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2022-5/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2022-5/point-2022-5-1-release-note',
                'releases/enterprise/syskit-point-2022-5/point-2022-5-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2022.4',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2022-4/README',
              },
              items: [                
                'releases/enterprise/syskit-point-2022-4/point-2022-4-1-release-note',
                'releases/enterprise/syskit-point-2022-4/point-2022-4-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2022.3',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2022-3/README',
              },
              items: [
                'releases/enterprise/syskit-point-2022-3/point-2022-3-1-release-note',
                'releases/enterprise/syskit-point-2022-3/point-2022-3-release-note',
              ],
            },
            {
              type: 'category',
              label: 'Syskit Point 2022.2',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-2022-2/README',
              },
              items: [
                'releases/enterprise/syskit-point-2022-2/point-2022-2-3-release-note',
                'releases/enterprise/syskit-point-2022-2/point-2022-2-2-release-note',
                'releases/enterprise/syskit-point-2022-2/point-2022-2-1-release-note',
                'releases/enterprise/syskit-point-2022-2/point-2022-2-release-note',
              ],
            },
            'releases/enterprise/point-2021-12-release-note',
            'releases/enterprise/point-2021-11-release-note',
            'releases/enterprise/point-2021-10-release-note',
            'releases/enterprise/point-20-release-note',
            {
              type: 'category',
              label: 'Syskit Point 19',
              link: {
                type: 'doc',
                id: 'releases/enterprise/syskit-point-19/README',
              },
              items: [                
                'releases/enterprise/syskit-point-19/point-19-0-2-release-note',
                'releases/enterprise/syskit-point-19/point-19-0-1-release-note',
                'releases/enterprise/syskit-point-19/point-19-release-note',
              ],
            },
          ],
        },
      ],
    },

    {
      type: 'category',
      label: 'Requirements',
      link: {
        type: 'doc',
        id: 'requirements/README',
      },
      items: [
        'requirements/permission-requirements',
        'requirements/permission-requirements-change-log',
      ],
    },
    {
      type: 'category',
      label: 'Set Up Point Cloud',
      link: {
        type: 'doc',
        id: 'set-up-point-cloud/README',
      },
      items: [
        'set-up-point-cloud/overview',
        'set-up-point-cloud/free-trial',
        'set-up-point-cloud/free-trial-limits',
        'set-up-point-cloud/syskit-point-subscriptions',
      ],
    },
    {
      type: 'category',
      label: 'Set Up Point Enterprise',
      link: {
        type: 'doc',
        id: 'set-up-point-enterprise/README',
      },
      items: [
        {
          type: 'category',
          label: 'Deployment',
          link: {
            type: 'doc',
            id: 'set-up-point-enterprise/deployment/README',
          },
          items: [
            'set-up-point-enterprise/deployment/overview',
            'set-up-point-enterprise/deployment/system-requirements',
            'set-up-point-enterprise/deployment/deploy-syskit-point',
            'set-up-point-enterprise/deployment/connect-to-tenant',
            'set-up-point-enterprise/deployment/set-up-custom-domain-and-ssl-certificate',
            'set-up-point-enterprise/deployment/upgrade-syskit-point',
            'set-up-point-enterprise/deployment/azure-networking',
          ],
        },
                {
          type: 'category',
          label: 'Activation',
          link: {
            type: 'doc',
            id: 'set-up-point-enterprise/activation/README',
          },
          items: [
            'set-up-point-enterprise/activation/activate-syskit-point',
            'set-up-point-enterprise/activation/free-trial-enterprise',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Licensing & Activation',
      link: {
        type: 'doc',
        id: 'licensing-activation/README',
      },
      items: [
        'licensing-activation/licensed-users-count',
        'licensing-activation/activation-privacy-statement',
      ],
    },
    {
      type: 'category',
      label: 'Get to Know Syskit Point',
      link: {
        type: 'doc',
        id: 'get-to-know-syskit-point/README',
      },
      items: [
        'get-to-know-syskit-point/point-starter-kit',
        'get-to-know-syskit-point/navigate-through-syskit-point',
        'get-to-know-syskit-point/collect-office-365-data',
      ],
    },
    {
      type: 'category',
      label: 'Microsoft 365 Inventory',
      link: {
        type: 'doc',
        id: 'microsoft365-inventory/README',
      },
      items: [
        'microsoft365-inventory/overview',
        'microsoft365-inventory/explore-your-microsoft-365-dashboard',
        'microsoft365-inventory/sites',
        'microsoft365-inventory/microsoft-teams-and-groups',
        'microsoft365-inventory/users',
        'microsoft365-inventory/copilot-readiness',
        'microsoft365-inventory/power-platform'       
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'doc',
        id: 'configuration/README',
      },
      items: [
        'configuration/how-to-configure-Point',
        'configuration/enable-role-based-access',
        'configuration/microsoft-teams-activity',
        'configuration/configure-storage-management',
        'configuration/set-up-email',
        'configuration/connect-service-account',
        'configuration/customize-audit-logs-collection',
        'configuration/upgrade-SQL-to-managed-identity-authentication',
        'configuration/ignore-service-account-activity-tracking',
        'configuration/customize-license-reports',
        'configuration/customize-emails',
        'configuration/report-data-limits',
        'configuration/turn-on-auditing',
        'configuration/exclude-users-tasks',
        'configuration/customize-dashboard',
        'configuration/customize-appearance',
        'configuration/configure-point-for-storage-management',
        'configuration/custom-views',
        'configuration/audit-log-for-settings',
        'configuration/manage-connection', 
      ],
    },
    {
      type: 'category',
      label: 'Reporting',
      link: {
        type: 'doc',
        id: 'reporting/README',
      },
      items: [
        'reporting/overview',
        'reporting/external-sharing-reports',
        'reporting/access-reports',
        'reporting/audit-reports',
        'reporting/cleanup-and-health-reports',
        'reporting/licenses-reports',
        'reporting/analytics-reports',
        'reporting/sensitivity-labels',
        'reporting/ai-agents-reports',
      ],
    },
    {
      type: 'category',
      label: 'Storage Management',
      link: {
        type: 'doc',
        id: 'storage-management/README',
      },
      items: [
        'storage-management/storage-management-overview',
        'storage-management/free-up-storage',
        'storage-management/storage-reports',        
        'storage-management/limit-storage-usage',
        'storage-management/versioning-limits',
        'storage-management/storage-sync',
      ],
    },
    {
      type: 'category',
      label: 'Governance & Automation',
      link: {
        type: 'doc',
        id: 'governance-and-automation/README',
      },
      items: [
        'governance-and-automation/syskit-point-tasks',
        {
          type: 'category',
          label: 'Workspace Review',
          link: {
            type: 'doc',
            id: 'governance-and-automation/workspace-review/README',
          },
          items: [
            'governance-and-automation/workspace-review/setup-workspace-review',
            'governance-and-automation/workspace-review/monitor-workspace-review',
          ],
        },
        {
          type: 'category',
          label: 'Access Review',
          link: {
            type: 'doc',
            id: 'governance-and-automation/permissions-review/README',
          },
          items: [
            'governance-and-automation/permissions-review/enable-permissions-review',
            'governance-and-automation/permissions-review/create-apply-access-review-policies',
            'governance-and-automation/permissions-review/access-review-options',
            'governance-and-automation/permissions-review/monitor-permissions-review',
            'governance-and-automation/permissions-review/manually-request-permissions-review',
          ],
        },
        {
          type: 'category',
          label: 'Lifecycle Management',
          link: {
            type: 'doc',
            id: 'governance-and-automation/lifecycle-management/README',
          },
          items: [
            'governance-and-automation/lifecycle-management/deprecating-lifecyle-management',
            'governance-and-automation/lifecycle-management/inactive-content',
            'governance-and-automation/lifecycle-management/enable-lifecycle-management',
            'governance-and-automation/lifecycle-management/monitor-lifecycle-management',
            'governance-and-automation/lifecycle-management/lifecycle-management-actions',
          ],
        },
        {
          type: 'category',
          label: 'Policies',
          link: {
            type: 'doc',
            id: 'governance-and-automation/automated-workflows/README',
          },
          items: [
            'governance-and-automation/automated-workflows/set-up-policies',
            'governance-and-automation/automated-workflows/policy-automation',
            'governance-and-automation/automated-workflows/blocked-users-with-licenses-admin',
            'governance-and-automation/automated-workflows/inactive-guest-users-admin',
            'governance-and-automation/automated-workflows/inactive-workspaces-admin',
            'governance-and-automation/automated-workflows/minimum-number-of-owners-admin',
            'governance-and-automation/automated-workflows/maximum-number-of-owners-admin',
            'governance-and-automation/automated-workflows/orphaned-resources-admin',
            'governance-and-automation/automated-workflows/orphaned-users-admin',
            'governance-and-automation/automated-workflows/tenant-storage-admin',
            'governance-and-automation/automated-workflows/workspaces-with-too-many-members-admin',
            'governance-and-automation/automated-workflows/shadow-users-admin',
            'governance-and-automation/automated-workflows/private-workspaces-shared-with-everyone-admin',
            'governance-and-automation/automated-workflows/workspaces-no-sensitivity-admin',
            'governance-and-automation/automated-workflows/manage-policies',            
            'governance-and-automation/automated-workflows/upgrade-to-policy-automation', 
          ],
        },
        {
          type: 'category',
          label: 'Security and Compliance Checks',
          link: {
            type: 'doc',
            id: 'governance-and-automation/security-compliance-checks/README',
          },
          items: [
            'governance-and-automation/security-compliance-checks/overview',
            'governance-and-automation/security-compliance-checks/inactive-workspaces',
            'governance-and-automation/security-compliance-checks/orphaned-workspaces',
            'governance-and-automation/security-compliance-checks/inactive-guest-users',
            'governance-and-automation/security-compliance-checks/blocked-users-assigned-license',
            'governance-and-automation/security-compliance-checks/workspaces-not-enough-owners',
            'governance-and-automation/security-compliance-checks/orphaned-users',
            'governance-and-automation/security-compliance-checks/workspaces-too-many-owners',
            'governance-and-automation/security-compliance-checks/tenant-storage',
            'governance-and-automation/security-compliance-checks/workspaces-with-too-many-members',
            'governance-and-automation/security-compliance-checks/workspaces-with-shadow-users',            
            'governance-and-automation/security-compliance-checks/private-workspaces-shared-with-everyone',
            'governance-and-automation/security-compliance-checks/workspaces-without-sensitivity',
          ],
        },
        {
          type: 'category',
          label: 'Provisioning',
          link: {
            type: 'doc',
            id: 'governance-and-automation/provisioning/README',
          },
          items: [
            'governance-and-automation/provisioning/set-up-provisioning',
            'governance-and-automation/provisioning/enable-disable-provisioning',
            'governance-and-automation/provisioning/register-viva-engage-app',
            'governance-and-automation/provisioning/enable-sensitivity-labels',
            'governance-and-automation/provisioning/restrict-group-creation',
            'governance-and-automation/provisioning/templates',
            'governance-and-automation/provisioning/content-and-structure',
            'governance-and-automation/provisioning/configure-provisioning-failure-notifications',
            'governance-and-automation/provisioning/approval-processes',
            'governance-and-automation/provisioning/approve-reject-requests',
            'governance-and-automation/provisioning/manage-requests',
            'governance-and-automation/provisioning/hide-workspace-name',
          ],
        },
        {
          type: 'category',
          label: 'Access Requests',
          link: {
            type: 'doc',
            id: 'governance-and-automation/access-requests/README',
          },
          items: [
            'governance-and-automation/access-requests/set-up-access-requests',
            'governance-and-automation/access-requests/create-access-requests-policy',
            'governance-and-automation/access-requests/apply-access-requests-policy',
            'governance-and-automation/access-requests/approval-process',
          ],
        },
        {
          type: 'category',
          label: 'Metadata',
          link: {
            type: 'doc',
            id: 'governance-and-automation/metadata/README',
          },
          items: [
            'governance-and-automation/metadata/manage-custom-metadata',
            'governance-and-automation/metadata/request-metadata-review',
            'governance-and-automation/metadata/monitor-metadata-review',
          ],
        },
        {
          type: 'category',
          label: 'Sensitivity Review',
          link: {
            type: 'doc',
            id: 'governance-and-automation/sensitivity-review/README',
          },
          items: [
            'governance-and-automation/sensitivity-review/request-sensitivity-review',
            'governance-and-automation/sensitivity-review/monitor-sensitivity-review',
          ],
        },
        {
          type: 'category',
          label: 'Privacy Review',
          link: {
            type: 'doc',
            id: 'governance-and-automation/privacy-review/README',
          },
          items: [
            'governance-and-automation/privacy-review/request-privacy-review',
            'governance-and-automation/privacy-review/monitor-privacy-review',
          ],
        },
        'governance-and-automation/syskit-point-teams-app',
        'governance-and-automation/scheduled-reports',
        'governance-and-automation/configure-alerts',
        'governance-and-automation/manage-sensitivity-labels',
      ],
    },
    {
      type: 'category',
      label: 'Access Management',
      link: {
        type: 'doc',
        id: 'access-management/README',
      },
      items: [
        'access-management/track-external-users-and-their-activities',        
        'access-management/check-access-for-specific-user',        
        'access-management/copy-user-permissions',
        'access-management/delete-and-restore-users',
        'access-management/view-permission-changes',
        'access-management/supervise-microsoft-teams-private-channels',
        'access-management/manage-private-channels',       
      ],
    },
    {
      type: 'category',
      label: 'Power Platform',
      link: {
        type: 'doc',
        id: 'power-platform/README',
      },
      items: [
        'power-platform/power-platform-overview',
        'power-platform/enable-power-platform',
        'power-platform/enable-powerBI-data-collection',       
        {
          type: 'category',
          label: 'Power Platform Reports',
          link: {
            type: 'doc',
            id: 'power-platform/power-platform-reports/README',
          },
          items: [
            'power-platform/power-platform-reports/copilot-agents-reports',
            'power-platform/power-platform-reports/power-platform-environments-reports',
            'power-platform/power-platform-reports/power-apps-reports',
            'power-platform/power-platform-reports/power-automate-reports',
            'power-platform/power-platform-reports/power-platform-connections-reports',
            'power-platform/power-platform-reports/power-bi-reports',
          ],
        },
        'power-platform/power-platform-actions',
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      link: {
        type: 'doc',
        id: 'integrations/README',
      },
      items: [
        'integrations/overview',
        'integrations/syskit-point-api',
        'integrations/webhooks',
        {
          type: 'category',
          label: 'Examples',
          link: {
            type: 'doc',
            id: 'integrations/examples/README',
          },
          items: [
            'integrations/examples/webhooks-example',
            'integrations/examples/servicenow-example',
            'integrations/examples/jira-example',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      link: {
        type: 'doc',
        id: 'faq/README',
      },
      items: [
        'faq/security',
        'faq/security-self-assessment',
        'faq/storage-management',
        'faq/free-trial',
        'faq/licensing',
        'faq/activation-faq',
        'faq/purchasing-and-discounts',
        'faq/customer-terms',
        'faq/privacy-and-compliance',
        'faq/partner-program',
        'faq/site-storage-limits',
        'faq/orphaned-users',        
        'faq/inactive-users-detection',
        'faq/provisioning-content-structure',
        'faq/multi-geo',       
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'doc',
        id: 'troubleshooting/README',
      },
      items: [
        'troubleshooting/export-diagnostic-logs',
        'troubleshooting/setup-diagnostic-logs-export',
        'troubleshooting/analytics-and-usage-report-issues',
        'troubleshooting/unexpected-audit-logs',
      ],
    },
    {
      type: 'category',
      label: 'Explore Syskit Point for Site Owners/Collaborators',
      link: {
        type: 'doc',
        id: 'point-collaborators/README',
      },
      items: [
        'point-collaborators/point-starter-kit-collaborators',

                {
          type: 'category',
          label: 'Complete Workspace Review',
          link: {
            type: 'doc',
            id: 'point-collaborators/workspace-review/README',
          },
          items: [
            'point-collaborators/workspace-review/workspace-review-overview',
            'point-collaborators/workspace-review/membership-step',
            'point-collaborators/workspace-review/shadow-users-step',
            'point-collaborators/workspace-review/sharing-step',
            'point-collaborators/workspace-review/summary-step',
          ],
        },

        {
          type: 'category',
          label: 'Resolve Governance Tasks',
          link: {
            type: 'doc',
            id: 'point-collaborators/resolve-governance-tasks/README',
          },
          items: [
            'point-collaborators/resolve-governance-tasks/my-tasks',
            'point-collaborators/resolve-governance-tasks/access-review',
            'point-collaborators/resolve-governance-tasks/metadata-review',
            'point-collaborators/resolve-governance-tasks/privacy-review',
            'point-collaborators/resolve-governance-tasks/sensitivity-review',
            'point-collaborators/resolve-governance-tasks/inactive-workspaces',
            'point-collaborators/resolve-governance-tasks/lifecycle-management',
            'point-collaborators/resolve-governance-tasks/guest-users-expiration',
            'point-collaborators/resolve-governance-tasks/minimum-number-of-owners',
            'point-collaborators/resolve-governance-tasks/maximum-number-of-owners',
            'point-collaborators/resolve-governance-tasks/orphaned-resources',
            'point-collaborators/resolve-governance-tasks/tenant-storage-limit',
          ],
        },
        {
          type: 'category',
          label: 'Manage Access',
          link: {
            type: 'doc',
            id: 'point-collaborators/manage-access/README',
          },
          items: [
            'point-collaborators/manage-access/manage-external-sharing',
            'point-collaborators/manage-access/manage-users',
          ],
        },
        {
          type: 'category',
          label: 'Manage Workspaces',
          link: {
            type: 'doc',
            id: 'point-collaborators/manage-workspaces/README',
          },
          items: [
            'point-collaborators/manage-workspaces/request-new-workspace',
            'point-collaborators/manage-workspaces/request-workspace-access',
            'point-collaborators/manage-workspaces/manage-workspace-access',
            'point-collaborators/manage-workspaces/manage-custom-metadata',         
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          link: {
            type: 'doc',
            id: 'point-collaborators/reporting/README',
          },
          items: [
            'point-collaborators/reporting/syskit-glossary-icons',
            'point-collaborators/reporting/inventory',
            'point-collaborators/reporting/schedule-reports',
            'point-collaborators/reporting/alerts',
            'point-collaborators/reporting/cleanup-and-health',
            'point-collaborators/reporting/external-sharing',
            'point-collaborators/reporting/access',           
          ],
        },
      ],
    },
  ],
};

export default sidebars;