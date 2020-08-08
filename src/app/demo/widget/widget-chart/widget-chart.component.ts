import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';

declare var $: any;
import 'peity';

import {ChartDB} from './chart/chart-data';

import {AmountProcessed} from './chart/amount-processed';
import {AmountSpent} from './chart/amount-spent';
import {ProfitProcessed} from './chart/profit-processed';
import {SecEcommerceChartLine} from './chart/sec-ecommerce-chart-line';
import {SecEcommerceChartBar} from './chart/sec-ecommerce-chart-bar';
import {SecEcommerceChartBar1} from './chart/sec-ecommerce-chart-bar-1';
import {SaleIncome} from './chart/sale-income';
import {RentIncome} from './chart/rent-income';
import {IncomeAnalysis} from './chart/income-analysis';
import {SaleReport1} from './chart/sale-report-1';
import {SaleReport2} from './chart/sale-report-2';
import {SaleReport3} from './chart/sale-report-3';
import {SaleReport4} from './chart/sale-report-4';
import {SaleChart1} from './chart/sale-chart-1';
import {ThisMonthBar} from './chart/this-month-bar';
import {PowerCardChart1} from './chart/power-card-chart-1';
import {PowerCardChart3} from '../../dashboard/dash-default/chart/power-card-chart-3';
import {PowerCardChart2} from './chart/power-card-chart-2';
import {RevenueMapChart} from './chart/revenue-map-chart';
import {ProjectEarning} from './chart/project-earning';
import {SeoAnalyticChart1} from './chart/seo-analytic-chart-1';
import {SeoAnalyticChart2} from './chart/seo-analytic-chart-2';
import {SeoAnalyticChart3} from './chart/seo-analytic-chart-3';
import {SeoAnalyticChart4} from './chart/seo-analytic-chart-4';
import {TotalValueGraph1} from './chart/total-value-graph-1';
import {TotalValueGraph2} from './chart/total-value-graph-2';
import {TotalValueGraph3} from './chart/total-value-graph-3';
import {TotalValueGraph4} from './chart/total-value-graph-4';
import {MonthlyProfit1} from './chart/monthly-profit-1';
import {MonthlyProfit2} from './chart/monthly-profit-2';
import {MonthlyProfit3} from './chart/monthly-profit-3';
import {SeoChart1} from './chart/seo-chart-1';
import {SeoChart2} from './chart/seo-chart-2';
import {SeoChart3} from './chart/seo-chart-3';
import {ClientMap1} from './chart/client-map-1';
import {ClientMap3} from './chart/client-map-3';
import {ClientMap2} from './chart/client-map-2';
import {TotLeadChart} from './chart/tot-lead-chart';
import {TotVendorChart} from './chart/tot-vendor-chart';
import {TotInvoiceChart} from './chart/tot-invoice-chart';


@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export class WidgetChartComponent implements OnInit, OnDestroy {
  public chartDB: any;
  public taskRate: number;

  public amountProcessedChartData: any;
  public amountSpentChartData: any;
  public profitProcessedChartData: any;

  public secEcommerceChartDataLine: any;
  public secEcommerceChartDataBar: any;
  public secEcommerceChartDataBar1: any;

  public saleIncomeChartData: any;
  public rentIncomeChartData: any;
  public incomeAnalysisChartData: any;

  public saleReportChartData1: any;
  public saleReportChartData2: any;
  public saleReportChartData3: any;
  public saleReportChartData4: any;

  public saleChartData1: any;
  public thisMonthBarChartData: any;

  public powerCardChartData1: any;
  public powerCardChartData2: any;
  public powerCardChartData3: any;

  public revenueMapChartData: any;

  public projectEarningChartData: any;

  public lastDate: number;
  public siteVisitorCAC: any;
  public data: any;

  public intervalSub: any;
  public intervalMain: any;

  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public seoChartData4: any;

  public totalValueGraphChartData1: any;
  public totalValueGraphChartData2: any;
  public totalValueGraphChartData3: any;
  public totalValueGraphChartData4: any;

  public monthlyProfitChartData1: any;
  public monthlyProfitChartData2: any;
  public monthlyProfitChartData3: any;

  public seoSaleChartData1: any;
  public seoSaleChartData2: any;
  public seoSaleChartData3: any;

  public clientMapChartData1: any;
  public clientMapChartData2: any;
  public clientMapChartData3: any;

  public totLeadChartData: any;
  public totVendorChartData: any;
  public totInvoiceChartData: any;

  constructor(public apexEvent: ApexChartService) {
    this.chartDB = ChartDB;
    this.taskRate = 10;

    this.amountProcessedChartData = AmountProcessed.analyticsChartData;
    this.amountSpentChartData = AmountSpent.analyticsChartData;
    this.profitProcessedChartData = ProfitProcessed.analyticsChartData;

    this.secEcommerceChartDataLine = SecEcommerceChartLine.saleChartData;
    this.secEcommerceChartDataBar = SecEcommerceChartBar.saleChartData;
    this.secEcommerceChartDataBar1 = SecEcommerceChartBar1.widgetChartData;

    this.saleIncomeChartData = SaleIncome.widgetChartData;
    this.rentIncomeChartData = RentIncome.widgetChartData;
    this.incomeAnalysisChartData = IncomeAnalysis.widgetChartData;

    this.saleReportChartData1 = SaleReport1.widgetChartData;
    this.saleReportChartData2 = SaleReport2.widgetChartData;
    this.saleReportChartData3 = SaleReport3.widgetChartData;
    this.saleReportChartData4 = SaleReport4.widgetChartData;

    this.saleChartData1 = SaleChart1.widgetChartData;
    this.thisMonthBarChartData = ThisMonthBar.widgetChartData;

    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart3.powerCardChartData;
    this.powerCardChartData3 = PowerCardChart2.powerCardChartData;

    this.revenueMapChartData = RevenueMapChart.widgetChartData;
    this.projectEarningChartData = ProjectEarning.widgetChartData;

    this.lastDate = 0;
    this.data = [];

    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {min: 10, max: 90});
    this.siteVisitorCAC = {
      chart: {
        height: 230,
        type: 'area',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'active Users :',
        data: this.data
      }],
      colors: ['#ff5252'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.8,
          opacityTo: 0,
          stops: [0, 100]
        }
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000,
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      },
    };

    this.seoChartData1 = SeoAnalyticChart1.seoChartData;
    this.seoChartData2 = SeoAnalyticChart2.seoChartData;
    this.seoChartData3 = SeoAnalyticChart3.seoChartData;
    this.seoChartData4 = SeoAnalyticChart4.seoChartData;

    this.totalValueGraphChartData1 = TotalValueGraph1.widgetChartData;
    this.totalValueGraphChartData2 = TotalValueGraph2.widgetChartData;
    this.totalValueGraphChartData3 = TotalValueGraph3.widgetChartData;
    this.totalValueGraphChartData4 = TotalValueGraph4.widgetChartData;

    this.monthlyProfitChartData1 = MonthlyProfit1.saleChartData;
    this.monthlyProfitChartData2 = MonthlyProfit2.saleChartData;
    this.monthlyProfitChartData3 = MonthlyProfit3.crmChartData;

    this.seoSaleChartData1 = SeoChart1.analyticsChartData;
    this.seoSaleChartData2 = SeoChart2.analyticsChartData;
    this.seoSaleChartData3 = SeoChart3.analyticsChartData;

    this.clientMapChartData1 = ClientMap1.crmChartData;
    this.clientMapChartData2 = ClientMap2.crmChartData;
    this.clientMapChartData3 = ClientMap3.crmChartData;

    this.totLeadChartData = TotLeadChart.crmChartData;
    this.totVendorChartData = TotVendorChart.crmChartData;
    this.totInvoiceChartData = TotInvoiceChart.crmChartData;
  }

  ngOnInit() {
    setTimeout(() => {
      $('.data-attributes').peity('donut');

      $('span.pie_1').peity('pie', {
        fill: ['#4680ff', '#eff3f6']
      });
      $('span.pie_2').peity('pie', {
        fill: ['#eff3f6', '#4680ff']
      });
      $('span.pie_3').peity('pie', {
        fill: ['#eff3f6', '#4680ff']
      });
    });

    this.intervalSub = setInterval(() => {
      this.getNewSeries(this.lastDate, {min: 10, max: 90});
      this.apexEvent.eventChangeSeriesData();
    }, 2000);

    this.intervalMain = setInterval(() => {
      this.resetData();
      this.apexEvent.eventChangeSeriesData();
    }, 60000);

  }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
    if (this.intervalMain) {
      clearInterval(this.intervalMain);
    }
  }

  getDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({x, y});
      this.lastDate = baseval;
      baseval += 86400000;
      i++;
    }
  }

  resetData() {
    this.data = this.data.slice(this.data.length - 10, this.data.length);
  }

  getNewSeries(baseval, yrange) {
    const newDate = baseval + 86400000;
    this.lastDate = newDate;
    this.data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
  }

}
