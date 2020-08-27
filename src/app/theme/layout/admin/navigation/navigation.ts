import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      // CRM
      // {
      //   id: 'crm',
      //   title: 'CRM',
      //   type: 'collapse',
      //   icon: 'feather icon-layout',
      //   children: [
      //     {
      //       id: 'depositors',
      //       title: 'Depositors Account',
      //       type: 'item',
      //       url: '/crm/crm-depositor'
      //     },
      //   ]
      // },

      // Transactions
      // {
      //   id: 'transaction',
      //   title: 'Transaction',
      //   type: 'collapse',
      //   icon: 'feather icon-briefcase',
      //   children: [
      //     {
      //       id: 'receive-cash',
      //       title: 'Receive Money From Agent',
      //       type: 'item',
      //       url: '/transaction/receive-cash'
      //     },
      //      {
      //       id: 'debtors',
      //       title: 'Deposits',
      //       type: 'item',
      //       url: '/crm/crm-debtor'
      //     },
      //      {
      //       id: 'agent-disbursement',
      //       title: 'Agent Disbursement',
      //       type: 'item',
      //       url: '/transaction/agent-disbursement'
      //     },
      //     {
      //       id: 'crm-deb-deposits',
      //       title: 'Debtors Deposits',
      //       type: 'item',
      //       url: '/crm/crm-deb-deposits'
      //     },
      //     {
      //       id: 'expenses',
      //       title: 'Expenses',
      //       type: 'item',
      //       url: '/transaction/expenses'
      //     },
      //   ]
      // },

      // Stock
      {
        id: 'stock',
        title: 'Stock',
        type: 'collapse',
        icon: 'feather icon-bar-chart',
        children: [
          {
            id: 'stock-receive',
            title: 'Receive Stock',
            type: 'item',
            url: '/stock/stock-receive'
          },
          {
            id: 'stock-branch',
            title: 'Send Stock To Store',
            type: 'item',
            url: '/stock/stock-branch'
          },
          // {
          //   id: 'stock-admin',
          //   title: 'Send Stock Back To HQ',
          //   type: 'item',
          //   url: '/stock/stock-admin'
          // },
          {
            id: 'stock-receive-branch',
            title: 'Receive Stock From Store',
            type: 'item',
            url: '/stock/stock-branch-receive'
          },
        ]
      },

      // Sales Shop
      {
        id: 'sales-shop',
        title: 'Sell Product',
        type: 'collapse',
        icon: 'feather icon-shopping-cart',
        children: [
          // {
          //   id: 'sales-shop',
          //   title: 'Sales Shop',
          //   type: 'item',
          //   url: '/sales/sales-shop'
          // },
          {
            id: 'sales-shop-walkin',
            title: 'Sales Product',
            type: 'item',
            url: '/sales/sales-shop-walkin'
          },
        ]
      },

      // Reports
      {
        id: 'report',
        title: 'Reports',
        type: 'collapse',
        icon: 'feather icon-bar-chart-2',
        children: [
          // Sales Report
          // {
          //   id: 'cash-report',
          //   title: 'Cash Report',
          //   type: 'item',
          //   url: '/reports/cash-report',
          // },
          // {
          //   id: 'agents-cash-report',
          //   title: 'Agents Cash Report',
          //   type: 'item',
          //   url: '/reports/agents-cash-report',
          //   // target: true,
          // },
          // {
          //   id: 'agent-customer-report',
          //   title: 'Agent Customer Report',
          //   type: 'item',
          //   url: '/reports/agent-customer-report',
          //   // target: true,
          // },

          // Stock Report
          {
            id: 'stock-report',
            title: 'Stock Report',
            type: 'collapse',
            children: [
              {
                id: 'branch-stock-report',
                title: 'Store Stock Report',
                type: 'item',
                url: '/reports/branch-stock-report',
              },
              {
                id: 'stock-sales-report',
                title: 'Stock Sales Report',
                type: 'item',
                url: '/reports/stock-sales-report',
                // target: true,
              },
              // {
              //   id: 'inter-branch-stock-report',
              //   title: 'Inter Branch Stock Report',
              //   type: 'item',
              //   url: '/reports/inter-branch-stock-report',
              //   target: true,
              // },
            ]
          },


          // Stock Transfer Report
          {
            id: 'stock-transfer-report',
            title: 'Stock Transfer Report',
            type: 'collapse',
            children: [
              {
                id: 'receive-stock-report',
                title: 'Receive Stock Report',
                type: 'item',
                url: '/reports/receive-stock-report',
              },
              // {
              //   id: 'receive-stock-from-branch-report',
              //   title: 'Receive Stock From Store Report',
              //   type: 'item',
              //   url: '/reports/receive-stock-from-branch-report',
              // },
              // {
              //   id: 'send-stock-to-branch-report',
              //   title: 'Send Stock To Store Report',
              //   type: 'item',
              //   url: '/reports/send-stock-to-branch-report',
              // },
              // {
              //   id: 'send-stock-back-to-hq-report',
              //   title: 'Send Stock Back To HQ',
              //   type: 'item',
              //   url: '/reports/send-stock-back-to-hq-report',
              // },
            ]
          },

      //     // Deposit Customer Report
      //     {
      //       id: 'deposti-customer-report',
      //       title: 'Deposit Customer Report',
      //       type: 'collapse',
      //       children: [
      //         {
      //           id: 'customer-statement',
      //           title: 'Customer Statement',
      //           type: 'item',
      //           url: '/reports/customer-statement',
      //         },
      //         {
      //           id: 'customer-duration-time-up-report',
      //           title: 'Customer Duration Time Up Report',
      //           type: 'item',
      //           url: '/reports/customer-duration-time-up-report',
      //           // target: true,
      //         }
      //       ]
      //     },

      //     // Extra Reports
      //     {
      //       id: 'expenditure-report',
      //       title: 'Expenditure Report',
      //       type: 'item',
      //       url: '/reports/expenditure-report',
      //       // target: true,
      //     },
      //     {
      //       id: 'session-report',
      //       title: 'Session General Report',
      //       type: 'item',
      //       url: '/reports/session-report',
      //       // target: true,
      //     },

      //     // Master Report (Daily / Monthly / Yearly)
      //     // {
      //     //   id: 'master-report',
      //     //   title: 'Master Report',
      //     //   type: 'collapse',
      //     //   children: [
      //     //     {
      //     //       id: 'general-stock-report',
      //     //       title: 'General Stock Report',
      //     //       type: 'item',
      //     //       url: '/reports/general-stock-report',
      //     //     },
      //     //     {
      //     //       id: 'general-cash-report',
      //     //       title: 'General Cash Report',
      //     //       type: 'item',
      //     //       url: '/reports/general-cash-report',
      //     //       // target: true,
      //     //     },
      //     //     {
      //     //       id: 'general-sales-report',
      //     //       title: 'General Sales Report',
      //     //       type: 'item',
      //     //       url: '/reports/general-sales-report',
      //     //       // target: true,
      //     //     },
      //     //     {
      //     //       id: 'active-customers-report',
      //     //       title: 'Active Customers Report',
      //     //       type: 'item',
      //     //       url: '/reports/active-customers-report',
      //     //       // target: true,
      //     //     },
      //     //     {
      //     //       id: 'inactive-customers-report',
      //     //       title: 'Inactive Customers Report',
      //     //       type: 'item',
      //     //       url: '/reports/inactive-customers-report',
      //     //       // target: true,
      //     //     }
      //     //   ]
      //     // },
        ]
      },

      // Settings
      {
        id: 'settings',
        title: 'Settings',
        type: 'collapse',
        icon: 'feather icon-settings',
        children: [
          {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/settings/profile',
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
