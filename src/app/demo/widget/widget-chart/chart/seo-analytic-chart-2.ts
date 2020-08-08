export class SeoAnalyticChart2 {
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
    colors: ['#9ccc65'],
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
      colors: '#9ccc65',
      strokeColor: '#9ccc65',
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
      data: [12, 25, 36, 9, 54, 25, 66, 66, 41, 89, 63, 25, 44, 89, 41]
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
          formatter: (seriesName) => 'Total Sales :'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
