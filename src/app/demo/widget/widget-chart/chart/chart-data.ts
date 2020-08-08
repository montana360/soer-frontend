export class ChartDB {
  public static completedTicketCAC = {
    chart: {
      type: 'line',
      height: 80,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'smooth',
    },
    series: [{
      data: [45, 66, 41, 89, 25, 44, 9, 54]
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
          formatter: (seriesName) =>  ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static transactions1CAC = {
    chart: {
      type: 'bar',
      height: 60,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Inbound'
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static transactions2CAC = {
    chart: {
      type: 'bar',
      height: 65,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#ff5252'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
    }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Outbound'
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static percentageCAC = {
    chart: {
      height: 120,
      type: 'bar',
      sparkline: {
        enabled: true
      },
    },
    colors: ['#4680ff', '#0e9e4a', '#ff5252'],
    plotOptions: {
      bar: {
        columnWidth: '55%',
        distributed: true
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0
    },
    series: [{
      name: 'Requests',
      data: [66.6, 29.7, 32.8]
    }],
    xaxis: {
      categories: ['Desktop', 'Tablet', 'Mobile'],
    }
  };
  public static userAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#FF9800'],
  };
  public static sessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#dc6788'],
  };
  public static pageViewAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#ff5252'],
  };
  public static pageSessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#7759de'],
  };
  public static avgSessionAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [3, 0, 1, 2, 1, 1, 2]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#4680ff'],
  };
  public static bounceRateAACC = {
    chart: {
      type: 'line',
      height: 30,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 2,
    },
    series: [{
      data: [2, 1, 2, 1, 1, 3, 0]
    }],
    yaxis: {
      min: -2,
      max: 5
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    },
    colors: ['#11c15b'],
  };
  public static timeUserCAC = {
    chart: {
      height: 400,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    series: [{
      name: 'Metric1',
      data: generateDataSabraThat(12, {
        min: 0,
        max: 90
      })
    },
      {
        name: 'Metric2',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric3',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric4',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric5',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric6',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric7',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric8',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric9',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric10',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric11',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric12',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric13',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Metric14',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }
    ]
  };
  public static horizontalBarCAC = {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        },
      }
    },
    colors: ['#4680ff', '#0e9e4a', '#ff5252'],
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: '12px',
        colors: ['#fff']
      }
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
    series: [{
      name: 'India',
      data: [44, 55, 41, 64, 22]
    }, {
      name: 'Japan',
      data: [53, 32, 33, 52, 13]
    }, {
      name: 'London',
      data: [44, 33, 52, 13, 22]
    }],
    xaxis: {
      categories: [2001, 2002, 2003, 2004, 2005],
    },
  };
  public static conversionsBarCAC = {
    chart: {
      type: 'bar',
      height: 85,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89,
        63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static siteCAC = {
    chart: {
      type: 'line',
      height: 150,
      sparkline: {
        enabled: true
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight',
      width: 3,
    },
    series: [{
      data: [135, 187, 180, 222, 185, 195, 158]
    }],
    yaxis: {
      min: 100
    },
    colors: ['#4680ff'],
  };
  public static satisfactionSACC = {
    chart: {
      height: 260,
      type: 'pie',
    },
    series: [66, 50, 40, 30],
    labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    legend: {
      show: true,
      offsetY: 50,
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#4680ff',
      }
    },
    responsive: [{
      breakpoint: 768,
      options: {
        chart: {
          height: 320,

        },
        legend: {
          position: 'bottom',
          offsetY: 0,
        }
      }
    }]
  };
  public static trafficCAC = {
    chart: {
      height: 300,
      type: 'donut',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
    colors: ['#4680ff', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252', '#7759de'],
    labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
    legend: {
      show: true,
      position: 'bottom',
    }
  };
  public static saleCAC = {
    chart: {
      type: 'bar',
      height: 220,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => ''
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static timeCAC = {
    chart: {
      height: 225,
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 3,
      curve: 'straight',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors: ['#0e9e4a'],
    series: [{
      name: 'Hour.',
      data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
    }],
    grid: {
      row: {
        colors: ['#f3f6ff', 'transparent'],
        opacity: 0.5
      }
    },
  };
  public static revenueCAC = {
    chart: {
      height: 223,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    labels: ['Target', 'Last week', 'Last day'],
    series: [1258, 975, 500],
    legend: {
      show: false
    },
    colors: ['#00acc1', '#ffa21d', '#4680ff'],
  };
  public static marketCAC = {
    chart: {
      height: 200,
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#E0291D', '#3C5A99', '#42C0FB'],
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    series: [{
      name: 'Youtube',
      data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
    }, {
      name: 'Facebook',
      data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
    }, {
      name: 'Twitter',
      data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
    }],
    xaxis: {
      type: 'datetime',
      categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT',
        '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT'],
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1
    },
  };
  public static typeCAC = {
    chart: {
      height: 235,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%'
        }
      }
    },
    labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
    series: [76.7, 15, 30],
    legend: {
      show: false
    },
    colors: ['#ff5252', '#ffa21d', '#00acc1'],
  };
  public static trafficMonitorCAC = {
    chart: {
      type: 'bar',
      height: 400,
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: true
    },
    colors: ['#4680ff'],
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: 0,
            to: 15,
            color: '#ff5252'
          }, {
            from: 16,
            to: 30,
            color: '#ffa21d'
          }, {
            from: 31,
            to: 50,
            color: '#4680ff'
          }, {
            from: 51,
            to: 100,
            color: '#0e9e4a'
          }]
        },
        columnWidth: '80%',
      }
    },
    series: [{
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41,
        89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }],
    xaxis: {
      crosshairs: {
        width: 1
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: (seriesName) => 'Click '
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static supportCAC = {
    chart: {
      type: 'area',
      height: 95,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
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
          formatter: (seriesName) => 'Ticket '
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static average1CAC = {
    chart: {
      type: 'area',
      height: 145,
      width: '100%',
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#4680ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 80, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [40, 60, 35, 55, 35, 75, 50]
    }],
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => '$'
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static average2CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#0e9e4a'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [40, 55, 35, 75, 50, 90, 50]
    }],
    yaxis: {
      min: 0,
      max: 100,
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName) => '$'
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static average3CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [40, 60, 35, 70, 50]
    }],
    yaxis: {
      min: 0,
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
          formatter: (seriesName) => '$'
        }
      },
      marker: {
        show: false
      }
    }
  };
  public static average4CAC = {
    chart: {
      type: 'area',
      height: 145,
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#FFF'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [{
      name: 'series1',
      data: [65, 45, 60, 40, 80]
    }],
    yaxis: {
      min: 0,
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
          formatter: (seriesName) => '$'
        }
      },
      marker: {
        show: false
      }
    }
  };
}

function generateDataSabraThat(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    series.push({
      x: 'w' + (i + 1).toString(),
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
    i++;
  }
  return series;
}
