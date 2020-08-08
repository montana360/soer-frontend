import { Component, OnInit } from '@angular/core';
import {DashboardProjectEarning} from '../../school/chart/dashboard-project-earning';

@Component({
  selector: 'app-sis-dashboard',
  templateUrl: './sis-dashboard.component.html',
  styleUrls: ['./sis-dashboard.component.scss']
})
export class SisDashboardComponent implements OnInit {
  public projectEarningChartData: any;

  constructor() {
    this.projectEarningChartData = DashboardProjectEarning.schChartData;
  }

  ngOnInit() {
  }

}
