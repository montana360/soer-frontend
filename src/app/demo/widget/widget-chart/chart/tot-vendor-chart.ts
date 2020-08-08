export class TotVendorChart {
  public static crmChartData = {
    chart: {
      type: 'area',
      height: 150,
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
    stroke: {
      curve: 'straight',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 50]
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
          formatter: (seriesName) => 'Total Vendors :'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
