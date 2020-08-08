import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-expenditure-report',
  templateUrl: './expenditure-report.component.html',
  styleUrls: ['./expenditure-report.component.scss']
})
export class ExpenditureReportComponent implements OnInit {

  isLoading = false;
  allExpenses = null;
  Expenses = null;
  dtOptions: any = {};

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getExpenses();
    this.getAllExpenses();
  }

  getExpenses() {
    this.isLoading = true;
    this.auth.get('expenditure').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.Expenses = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Expense Created Yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Error getting Expense Information');
      }
    );
  }


  getAllExpenses() {
    this.isLoading = true;

    const data = {
      branch_id: localStorage.getItem('branch')
    };

    this.auth.store('expense_report', data).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allExpenses = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No New Stocks Available');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }
  


}
