import { Component, OnInit } from '@angular/core';
import {DashboardRevenueMapChart} from '../chart/dashboard-revenue-map-chart';
import {DashboardTransactions1} from '../chart/dashboard-transactions-1';
import {DashboardTransactions2} from '../chart/dashboard-transactions-2';
import {DashboardSaleChart} from '../chart/dashboard-sale-chart';

@Component({
  selector: 'app-mshp-dashboard',
  templateUrl: './mshp-dashboard.component.html',
  styleUrls: ['./mshp-dashboard.component.scss']
})
export class MshpDashboardComponent implements OnInit {
  public revenueMapChartData: any;
  public transactionsChart1: any;
  public transactionsChart2: any;
  public saleChart: any;

  constructor() {
    this.revenueMapChartData = DashboardRevenueMapChart.mshpChartData;

    this.transactionsChart1 = DashboardTransactions1.mshpChartData;
    this.transactionsChart2 = DashboardTransactions2.mshpChartData;
    this.saleChart = DashboardSaleChart.mshpChartData;
  }

  ngOnInit() {
  }

}
