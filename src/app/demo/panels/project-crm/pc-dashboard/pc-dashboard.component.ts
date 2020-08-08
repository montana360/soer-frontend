import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DashboardLeadsChart} from '../chart/dashboard-leads-chart';
import {DashboardProjectStateChart} from '../chart/dashboard-project-state-chart';

@Component({
  selector: 'app-pc-dashboard',
  templateUrl: './pc-dashboard.component.html',
  styleUrls: ['./pc-dashboard.component.scss']
})
export class PcDashboardComponent implements OnInit {
  @ViewChild('defaultClick', {static: false}) defaultClick: ElementRef;

  public todoModalMessage: string;
  public todoModalMessageError: boolean;
  public newTodoModal: any;

  public leadsChart: any;
  public projectStateChart: any;

  constructor() {
    this.newTodoModal = '';
    this.leadsChart = DashboardLeadsChart.projectCrmChartData;
    this.projectStateChart = DashboardProjectStateChart.projectCrmChartData;
  }

  ngOnInit() {
  }

  completeTodoList(e) {
    e.target.parentElement.classList.remove('done-task');
    if (e.target.checked) {
      e.target.parentElement.classList.add('done-task');
    }
  }

  addTodoModal() {
    if (this.todoModalMessage === '' || this.todoModalMessage === undefined) {
      this.todoModalMessageError = true;
    } else {
      const random = Math.floor(Math.random() * (999999 - 100000)) + 100000;
      const htmlTodo = '<div class="to-do-list mb-3">' +
        '<div class="d-inline-block">' +
        '<label class="check-task custom-control custom-checkbox d-flex justify-content-center">' +
        '<input type="checkbox" class="custom-control-input" id="info_' + random + '" (change)="completeTodoList($event)">' +
        '<span class="custom-control-label">' + this.todoModalMessage + '</span>' +
        '</label>' +
        '</div>' +
        '<div class="float-right"><a href="javascript:" class="delete_todolist" appTodoListRemove><i class="far fa-trash-alt"></i></a></div>' +
        '</div>';

      this.newTodoModal = this.newTodoModal + htmlTodo;
      this.todoModalMessage = '';
      const el: HTMLElement = this.defaultClick.nativeElement as HTMLElement;
      el.click();
    }
  }

}
