import { Component, OnInit } from '@angular/core';
import {AverageChart1} from './chart/average-chart-1';
import {AverageChart2} from './chart/average-chart-2';
import {AverageChart3} from './chart/average-chart-3';
import {AverageChart4} from './chart/average-chart-4';

@Component({
  selector: 'app-cp-exchange',
  templateUrl: './cp-exchange.component.html',
  styleUrls: ['./cp-exchange.component.scss']
})
export class CpExchangeComponent implements OnInit {
  public avgChartData1: any;
  public avgChartData2: any;
  public avgChartData3: any;
  public avgChartData4: any;

  constructor() {
    this.avgChartData1 = AverageChart1.chartData;
    this.avgChartData2 = AverageChart2.chartData;
    this.avgChartData3 = AverageChart3.chartData;
    this.avgChartData4 = AverageChart4.chartData;
  }

  ngOnInit() {
  }

}
