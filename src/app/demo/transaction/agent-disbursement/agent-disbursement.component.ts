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
  selector: 'app-agent-disbursement',
  templateUrl: './agent-disbursement.component.html',
  styleUrls: ['./agent-disbursement.component.scss'],
})
export class AgentDisbursementComponent implements OnInit {
  agentForm: FormGroup;

  dtOptions: any = {};

  isLoading = false;

  allAgents = null;
  Depos = null;

  allTransactions = null;
  total = 0;

  data = {
    agent_id: '',
    session_date: localStorage.getItem('session'),
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.agentForm = formBuilder.group({
      agent_id: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false,
    };

    this.getAgents();
    this.getDepositors();
  }

  // getting agent details
  getAgents() {
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

  getDepositors() {
    this.isLoading = true;
    this.auth
      .show('branch_depositors', localStorage.getItem('branch'))
      .subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.Depos = response['data'];
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.alert.info('No such records or account found');
          }
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
          this.alert.error('Could not get Depositor Account Records');
        }
      );
  }

  buildData() {
    this.data.agent_id = this.agentForm.controls['agent_id'].value;
  }

  getDisbursements() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.data);
    this.auth.store('agent_disbursements', this.data).subscribe(
      (response) => {
        // console.log(response);
        if (response['data'].length > 0) {
          this.allTransactions = response['data'];
          this.total = response['total'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('Agent has no transaction(s) this session.');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not get agent cash disbursements');
      }
    );
  }

  clear() {
    this.allTransactions = null;
    this.total = 0;
  }
  
  confirmAlert(ev) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This operation would totally reverse customer deposit made',
      type: 'warning',
      // showCloseButton: true,
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
      } else {
        this.deleteDeposit(ev);
      }
    });
  }

  // Delete branch function
  deleteDeposit(ev) {
    this.isLoading = true;
    this.auth.destroy('deposits', ev).subscribe(
      response => {
        this.clear();
        this.isLoading = false;
        this.alert.success(response['message']);
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
}
