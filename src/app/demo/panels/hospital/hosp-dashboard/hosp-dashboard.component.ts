import { Component, OnInit } from '@angular/core';
import {DashboardMonthlyProfit1} from '../chart/dashboard-monthly-profit-1';
import {DashboardMonthlyProfit2} from '../chart/dashboard-monthly-profit-2';
import {DashboardMonthlyProfit3} from '../chart/dashboard-monthly-profit-3';

@Component({
  selector: 'app-hosp-dashboard',
  templateUrl: './hosp-dashboard.component.html',
  styleUrls: ['./hosp-dashboard.component.scss']
})
export class HospDashboardComponent implements OnInit {
  public monthlyProfitChart1: any;
  public monthlyProfitChart2: any;
  public monthlyProfitChart3: any;

  constructor() {
    this.monthlyProfitChart1 = DashboardMonthlyProfit1.hospitalChartData;
    this.monthlyProfitChart2 = DashboardMonthlyProfit2.hospitalChartData;
    this.monthlyProfitChart3 = DashboardMonthlyProfit3.hospitalChartData;
  }

  ngOnInit() {
  }

}
