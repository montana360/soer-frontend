import { Component, OnInit } from '@angular/core';
import {SeoAnalyticChart1} from './chart/seo-analytic-chart-1';
import {SeoAnalyticChart2} from './chart/seo-analytic-chart-2';
import {SeoAnalyticChart3} from './chart/seo-analytic-chart-3';
import {SeoAnalyticChart4} from './chart/seo-analytic-chart-4';
import {CandlestickChart1} from './chart/candlestick-chart-1';

@Component({
  selector: 'app-cp-dashboard',
  templateUrl: './cp-dashboard.component.html',
  styleUrls: ['./cp-dashboard.component.scss']
})
export class CpDashboardComponent implements OnInit {
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public seoChartData4: any;
  public candlestickChartData1: any;

  constructor() {
    this.seoChartData1 = SeoAnalyticChart1.seoChartData;
    this.seoChartData2 = SeoAnalyticChart2.seoChartData;
    this.seoChartData3 = SeoAnalyticChart3.seoChartData;
    this.seoChartData4 = SeoAnalyticChart4.seoChartData;
    this.candlestickChartData1 = CandlestickChart1.chartData;
  }

  ngOnInit() {
  }

}
