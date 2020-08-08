import { Component, OnInit } from '@angular/core';
import { SupportChartData1 } from './chart/support-chart-data-1';
import { SupportChartData2 } from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';

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
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss'],
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;

  dtOptions: any = {};

  isLoading = false;
  allBranches: any;
  isClosable = false;

  depositCustomers: any;
  adminStocks: any;
  totalStaffs: any;
  totalBranches: any;
  totalGoodsTransit: any;
  totalCustomerDuration: any;
  expenseTotal: any;
  allDeposits: any;
  netTotal: any;

  // Branch Information
  branchID = localStorage.getItem('branch');
  role = localStorage.getItem('access_level');
  date = localStorage.getItem('session');
  sid = localStorage.getItem('sessionID');

  data = {
    branch_id: this.branchID,
    session_date: this.date,
    total_deposits: null,
    total_expenses: null,
    net_total: null
  };

  sessionDetails = {
    branch_id: this.branchID,
    session_date: this.date,
    total_deposits: null,
    total_expenses: null,
    net_total: null
  };


  agent_deposits: any;
  deposits: any;

  sessionForm: FormGroup;

  sessionData = {
    close_session: this.date,
  };

  constructor(
    public auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;

    this.sessionForm = formBuilder.group({
      session_date: [null, Validators.compose([Validators.required])],
      agent_deposits_total: [null, Validators.compose([Validators.required])],
      deposits_total: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false,
      paging: false,
      select: false,
      info: false,
      ordering: false
    };

    this.getBranches();
    this.getAccounts();
    this.getBranchStat();
    this.getSessionExpensesTotal();
  }

  getBranches() {
    this.isLoading = true;
    this.auth.get('branch').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          // console.log(response);
          this.allBranches = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          // this.alert.info('No branches created yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  getAccounts() {
    this.isLoading = true;
    this.auth.store('branch_cash', this.data).subscribe(
      (response) => {
        // console.log(response);
        this.agent_deposits = parseInt(response['agent_deposits']);
        this.deposits = response['deposits'];
        // console.log(this.agent_deposits, this.deposits);
        // this.deposits = 4000;

        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        // this.alert.error(error['message']);
      }
    );
  }

  getSessionExpensesTotal() {
    this.isLoading = true;

    const data = {
      branch_id: localStorage.getItem('branch'),
      session_date: localStorage.getItem('session'),
    };

    this.auth.store('branch_expense_total', data).subscribe(
      (response) => {
        // console.log(response['data']);
        this.expenseTotal = response['data'];
        this.isLoading = false;
        this.getAllDepositsAmount();
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not get expense information');
      }
    );
  }

  getAllDepositsAmount() {
    this.isLoading = true;

    const data = {
      branch_id: localStorage.getItem('branch'),
      session_date: localStorage.getItem('session'),
    };

    this.auth.store('all_session_amount', data).subscribe(
      (response) => {
        // console.log(response['data']);
        this.allDeposits = parseInt(response['data']);
        this.netTotal = this.allDeposits - this.expenseTotal;
        // console.log(this.netTotal);
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not get Deposit(s) Information');
      }
    );
  }

  getBranchStat() {
    this.isLoading = true;
    this.auth.show('branch_stats', localStorage.getItem('branch')).subscribe(
      (response) => {
        // console.log(response);
        this.depositCustomers = response['depositor_count'];
        this.adminStocks = response['product_count'];
        this.totalStaffs = response['staff_count'];
        this.totalCustomerDuration = response['duration_count'];
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  confirmAlert() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once you close this session, only Admin can reopen it.',
      type: 'warning',
      showCancelButton: true,
    }).then((willDelete) => {
      if (willDelete.dismiss) {
      } else {
        this.recordSessionInfo();
      }
    });
  }


  buildSession() {
    this.sessionDetails.total_deposits = this.allDeposits;
    this.sessionDetails.total_expenses = parseInt(this.expenseTotal);
    this.sessionDetails.net_total = this.netTotal;
  }


  recordSessionInfo() {
    this.buildSession();
    console.log(this.sessionDetails);
    this.isLoading = true;
    this.auth.store('session_details', this.sessionDetails).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.closeSession();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(
          'Could not close session, please check network connectivity'
        );
      }
    );
  }


  closeSession() {
    this.isLoading = true;
    this.auth.update('session', this.sid, this.sessionData).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success('Session closed successfully');
        localStorage.clear();
        this.router.navigate(['/auth/signin-v2/']);
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(
          'Could not close session, please check network connectivity'
        );
      }
    );
  }
}
