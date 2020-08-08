export class SeoAnalyticChart3 {
  public static seoChartData = {
    chart: {
      type: 'area',
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ff5252'],
    fill: {
      type: 'solid',
      opacity: 0,
    },
    grid: {
      padding: {
        left: 5,
        right: 5
      }
    },
    markers: {
      size: 3,
      opacity: 0.9,
      colors: '#ff5252',
      strokeColor: '#ff5252',
      strokeWidth: 1,
      hover: {
        size: 4,
      }
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89]
    }],
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Bitcoin(BTC) :'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
