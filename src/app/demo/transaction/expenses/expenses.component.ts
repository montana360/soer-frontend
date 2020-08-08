import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  dtOptions: any = {};

  isLoading = false;
  allExpenses: any;
  allTransactions: any;

  expenseForm: FormGroup;

  data = {
    branch_id: localStorage.getItem('branch'),
    expense_id: null,
    amount: null,
    session_date: localStorage.getItem('session'),
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.expenseForm = formBuilder.group({
      expense_id: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getExpenses();
    this.getSessionExpenses();
  }

  getExpenses() {
    this.isLoading = true;
    this.auth.get('expenditure').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allExpenses = response['data'];
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

  buildData() {
    this.data.expense_id = this.expenseForm.controls['expense_id'].value;
    this.data.amount = this.expenseForm.controls['amount'].value;
  }

  createExpense() {
    this.isLoading = true;
    this.buildData();
    this.auth.store('daily_expense', this.data).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getSessionExpenses();
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not record expense');
      }
    );
  }

  getSessionExpenses() {
    this.isLoading = true;

    const data = {
      branch_id: localStorage.getItem('branch'),
      session_date: localStorage.getItem('session'),
    };

    this.auth.store('branch_session_expenses', data).subscribe(
      (response) => {
        this.allTransactions = response['data'];
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not receive Cash Deposit');
      }
    );
  }
}
