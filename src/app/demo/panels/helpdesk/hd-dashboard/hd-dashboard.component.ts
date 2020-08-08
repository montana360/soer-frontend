import { Component, OnInit } from '@angular/core';
import {ChartDB} from './chart/chart-data';

@Component({
  selector: 'app-hd-dashboard',
  templateUrl: './hd-dashboard.component.html',
  styleUrls: ['./hd-dashboard.component.scss']
})
export class HdDashboardComponent implements OnInit {
  public chartDB: any;

  constructor() {
    this.chartDB = ChartDB;
  }

  ngOnInit() {
  }

}
