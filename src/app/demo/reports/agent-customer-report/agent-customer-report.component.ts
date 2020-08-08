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
  selector: 'app-agent-customer-report',
  templateUrl: './agent-customer-report.component.html',
  styleUrls: ['./agent-customer-report.component.scss'],
})
export class AgentCustomerReportComponent implements OnInit {
  dtOptions: any = {};
  isLoading: boolean;
  allBranches: any;
  AllDepositor: any;
  allSuppliers: any;
  allStaff: any;
  allTransactions = null;
  allAgents: any;
  comData: any;
  allCustomers = null;
  total = null;

  isFinding = true;
  isLoaded = false;
  isChecking = false;
  isNotice = false;
  AgentDepForm: FormGroup;

  data = {
    agent_id: '',
    account_number: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // new transaction
    this.AgentDepForm = formBuilder.group({
      agent_id: [null, Validators.compose([Validators.required])],
      account_number: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getAgent();
    this.getStaff();

    this.dtOptions = {
      searching: false,
      dom: 'Bfrtip',
      buttons: ['print', 'excel', 'csv'],
    };
  }

  getAgent() {
    this.isLoading = true;
    this.auth.show('agents_branch', localStorage.getItem('branch')).subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allAgents = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          // this.alert.info('No discount created yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Error getting Agents Information');
      }
    );
  }


  getStaff() {
    this.isLoading = true;
    this.auth.get('get_staff').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allStaff = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Staff account created yet');
        }
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  buildData() {
    this.data.agent_id = this.AgentDepForm.controls['agent_id'].value;
    this.data.account_number = this.AgentDepForm.controls['account_number'].value;
  }

  getRecords() {
    this.clear();
    this.isLoading = true;
    this.buildData();
    // console.log(this.data);
    this.auth
      .store('agent_customer_report', this.data)
      .subscribe(
        (response) => {
          // console.log(response);
          if (response['data'].length > 0) {
            this.allTransactions = response['data'];
            this.total = response['total'];
            this.isLoaded = true;
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.alert.info('No records found');
          }
        },
        (error) => {
          this.isLoading = false;
          this.alert.error('Could not get Records');
        }
      );
  }

  findCustomer(id) {
    this.isNotice = false;
    this.isChecking = true;
    this.auth
      .show('agent_customer', id)
      .subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.allCustomers = response['data'];
            this.isChecking = false;
            this.isFinding = false;
          } else {
            this.isChecking = false;
            this.isNotice = true;
          }
        },
        (error) => {
          this.isChecking = false;
          console.log(error);
          this.alert.error('Could not get Agent Customer Accounts');
        }
      );
  }


  clear() {
    this.isLoaded = false;
    this.isFinding = true;
    this.isNotice = false;
    this.isChecking = false;
    this.allTransactions = null;
  }
}
