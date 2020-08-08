export class ClientMap1 {
  public static crmChartData = {
    chart: {
      type: 'area',
      height: 70,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    fill: {
      type: 'solid',
      opacity: 0.4,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    series: [{
      name: 'series1',
      data: [20, 10, 18, 12, 25, 10, 20]
    }],
    yaxis: {
      min: 0,
      max: 30,
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
          formatter: (seriesName) => 'Activity'
        }
      },
      marker: {
        show: false
      }
    }
  };
}
