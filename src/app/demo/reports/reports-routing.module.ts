import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      // Sales Report
      {
        path: 'cash-report',
        loadChildren: () =>
          import('./cash-report/cash-report.module').then(
            module => module.CashReportModule
          )
      },
      {
        path: 'agents-cash-report',
        loadChildren: () =>
          import('./agents-cash-report/agents-cash-report.module').then(
            module => module.AgentsCashReportModule
          )
      },
      {
        path: 'agent-customer-report',
        loadChildren: () =>
          import('./agent-customer-report/agent-customer-report.module').then(
            module => module.AgentCustomerReportModule
          )
      },

      // Stock Report
      {
        path: 'branch-stock-report',
        loadChildren: () =>
          import('./branch-stock-report/branch-stock-report.module').then(
            module => module.BranchStockReportModule
          )
      },
      {
        path: 'stock-sales-report',
        loadChildren: () =>
          import('./stock-sales-report/stock-sales-report.module').then(
            module => module.StockSalesReportModule
          )
      },
      {
        path: 'inter-branch-stock-report',
        loadChildren: () =>
          import(
            './inter-branch-stock-report/inter-branch-stock-report.module'
          ).then(module => module.InterBranchStockReportModule)
      },

      // Stock Transaction Report
      {
        path: 'receive-stock-from-branch-report',
        loadChildren: () =>
          import('./stock/receive-stock-from-branch-report/receive-stock-from-branch-report.module').then(
            module => module.ReceiveStockFromBranchReportModule
          )
      },
      {
        path: 'receive-stock-report',
        loadChildren: () =>
          import('./stock/receive-stock-report/receive-stock-report.module').then(
            module => module.ReceiveStockReportModule
          )
      },
      {
        path: 'send-stock-back-to-hq-report',
        loadChildren: () =>
          import('./stock/send-stock-back-to-hq-report/send-stock-back-to-hq-report.module').then(
            module => module.SendStockBackToHqReportModule
          )
      },
      {
        path: 'send-stock-to-branch-report',
        loadChildren: () =>
          import('./stock/send-stock-to-branch-report/send-stock-to-branch-report.module').then(
            module => module.SendStockToBranchReportModule
          )
      },

      // Deposit Customer Report
      {
        path: 'customer-statement',
        loadChildren: () =>
          import(
            './customer-statement/customer-statement.module'
          ).then(module => module.CustomerStatementModule)
      },
      {
        path: 'customer-duration-time-up-report',
        loadChildren: () =>
          import(
            './customer-duration-time-up-report/customer-duration-time-up-report.module'
          ).then(module => module.CustomerDurationTimeUpReportModule)
      },


      // Master Report (Daily / Monthly / Yearly)
      {
        path: 'general-stock-report',
        loadChildren: () =>
          import(
            './general-stock-report/general-stock-report.module'
          ).then(module => module.GeneralStockReportModule)
      },
      {
        path: 'general-cash-report',
        loadChildren: () =>
          import(
            './general-cash-report/general-cash-report.module'
          ).then(module => module.GeneralCashReportModule)
      },
      {
        path: 'general-sales-report',
        loadChildren: () =>
          import(
            './general-sales-report/general-sales-report.module'
          ).then(module => module.GeneralSalesReportModule)
      },
      {
        path: 'active-customers-report',
        loadChildren: () =>
          import(
            './active-customers-report/active-customers-report.module'
          ).then(module => module.ActiveCustomersReportModule)
      },
      {
        path: 'active-customers-report',
        loadChildren: () =>
          import(
            './inactive-customers-report/inactive-customers-report.module'
          ).then(module => module.InactiveCustomersReportModule)
      },

      // Extra Reports
      {
        path: 'expenditure-report',
        loadChildren: () =>
          import(
            './expenditure-report/expenditure-report.module'
          ).then(module => module.ExpenditureReportModule)
      },
      {
        path: 'session-report',
        loadChildren: () =>
          import(
            './session-report/session-report.module'
          ).then(module => module.SessionReportModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
