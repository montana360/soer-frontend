export class DashboardLeadsChart {
  public static projectCrmChartData = {
    chart: {
      height: 275,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
    colors: ['#4680ff', '#0e9e4a', '#00acc1', '#ffba57', '#536dfe', '#ff5252'],
    labels: ['New', 'Contacted', 'Working', 'Qualified', 'Proposal Sent', 'Customer'],
    legend: {
      show: true,
      position: 'bottom',
    }
  };
}
