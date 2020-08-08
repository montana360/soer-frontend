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
  selector: 'app-agents-cash-report',
  templateUrl: './agents-cash-report.component.html',
  styleUrls: ['./agents-cash-report.component.scss'],
})
export class AgentsCashReportComponent implements OnInit {
  dtOptions: any = {};
  isLoading: boolean;
  allBranches: any;
  allSuppliers: any;
  allStaff: any;
  agentRecords: any;
  allAgents = null;
  comData: any;
  total = null;

  RepAgentForm: FormGroup;

  data = {
    agent_id: '',
  };

  isLoaded = false;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // agent transaction form
    this.RepAgentForm = formBuilder.group({
      agent_id: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.getAgent();
    this.getStaff();
    // this.getBranches();

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

  getBranches() {
    this.isLoading = true;
    this.auth.get('branch').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allBranches = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No branches created yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  buildData() {
    this.data.agent_id = this.RepAgentForm.controls['agent_id'].value;
  }

  getAgentRecords() {
    this.isLoading = true;
    this.buildData();
    this.auth.store('agent_cash_report', this.data).subscribe(
      (response) => {
        // console.log(response);
        if (response['data'].length > 0) {
          this.agentRecords = response['data'];
          this.total = response['total'];
          this.isLoading = false;
          this.isLoaded = true;
        } else {
          this.isLoading = false;
          this.alert.info('No deposit record found');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('Could not get records');
      }
    );
  }

  clear() {
    this.isLoaded = false;
    this.agentRecords = null;
    this.total = null;
  }

}
