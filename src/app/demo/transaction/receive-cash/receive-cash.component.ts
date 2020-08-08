import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receive-cash',
  templateUrl: './receive-cash.component.html',
  styleUrls: ['./receive-cash.component.scss']
})
export class ReceiveCashComponent implements OnInit {

  dtOptions: any = {};

  isLoading = false;

  AgMoReceiveForm: FormGroup;
  editAgMoReceiveForm: FormGroup;

  allAgents: any;
  allTransactions: any;

  data = {
    branch_id: '',
    agent_id: '',
    amount: '',
    main_deposit: '',
    receiver_id: '',
    session_date: localStorage.getItem('session')
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // new transaction
    this.AgMoReceiveForm = formBuilder.group({
      agent_id: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false
    };

    this.getAgents();
    this.getTransactions();
  }

  // getting agent details
  getAgents() {
    this.isLoading = true;
    this.auth.show('agents_branch', localStorage.getItem('branch')).subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allAgents = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          // this.alert.info('No discount created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error('Error getting Agents Information');
      }
    );
  }

  // get all transaction
  getTransactions() {
    this.isLoading = true;
    const data = {
      branch_id: localStorage.getItem('branch'),
      session_date: localStorage.getItem('session')
    };

    this.auth.store('agent_daily_deposits', data).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allTransactions = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No deposit yet for this day');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not get Account Information');
      }
    );
  }


  buildData() {
    this.data.branch_id = localStorage.getItem('branch');
    this.data.agent_id = this.AgMoReceiveForm.controls['agent_id'].value;
    this.data.amount = this.AgMoReceiveForm.controls['amount'].value;
    this.data.main_deposit = this.AgMoReceiveForm.controls['amount'].value;
    this.data.receiver_id = localStorage.getItem("userID");
  }

  createTransaction() {
    this.isLoading = true;
    this.buildData();
    this.auth.store('agent_deposit', this.data).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getTransactions();
      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not receive Cash Deposit');
      }
    );
  }
}
