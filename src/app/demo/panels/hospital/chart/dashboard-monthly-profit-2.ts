export class DashboardMonthlyProfit2 {
  public static hospitalChartData = {
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
      opacity: 0.3,
    },
    markers: {
      size: 3,
      opacity: 0.9,
      colors: '#fff',
      strokeColor: '#9ccc65',
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
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
          formatter: (seriesName) => 'Amount Processed :'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
