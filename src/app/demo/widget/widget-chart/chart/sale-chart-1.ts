export class SaleChart1 {
  public static widgetChartData = {
    chart: {
      type: 'line',
      height: 117,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#fff'],

    stroke: {
      curve: 'smooth',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [55, 35, 75, 25, 90, 50]
    }],
    yaxis: {
      min: 20,
      max: 100,
    },
    tooltip: {
      theme: 'dark',
      fixed: {
        enabled: false
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => 'Sales/Order Per Day'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
