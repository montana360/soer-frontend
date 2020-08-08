import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-crm-customer-transaction',
  templateUrl: './crm-customer-transaction.component.html',
  styleUrls: ['./crm-customer-transaction.component.scss']
})
export class CrmCustomerTransactionComponent implements OnInit {
  isLoading = false;
  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {}

  depositorForm: FormGroup;
  editDepositorForm: FormGroup;

  allAgents: any;
  allPolicy: any;
  allDepositors: any;
  depositor: any;
  branches: any;
  allDeposits: any;
  accountDetails: any;
  deposits: any;
  account_number: string;
  customerTransactions: any;

  data = {
    account_number: '',
    name: '',
    gender: '',
    contact: '',
    picture: '',
    nationality: '',
    region: '',
    home_town: '',
    address: '',
    occupation: '',
    dob: '',
    nok: '',
    nok_contact: '',
    nok_relation: '',
    product_brand: '',
    product_name: '',
    product_policy_id: '',
    product_price: '',
    duration: '',
    agent_id: '',
    branch_id: ''
  };

  ngOnInit() {
    this.getDepositors();
    this.getAgents();
    this.getPolicies();
    // this.getDeposits();
    this.getBranches();
  }

 
  getDeposits() {
    this.isLoading = true;
    this.auth.get('current_deposits').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allDeposits = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Debtor Account available yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  getDepositors() {
    this.isLoading = true;
    this.auth.show('branch_depositors', localStorage.getItem('branch')).subscribe(
      response => {
        console.log(response['data']);
        if (response['data'].length > 0) {
          this.allDepositors = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Debtor Account available yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }
  getAccountNumber() {
    this.auth.get('acct_number').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.account_number = response['data'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  getAgents() {
    this.isLoading = true;
    this.auth.get('agents').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allAgents = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No discount created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  getPolicies() {
    this.isLoading = true;
    this.auth.get('policy').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allPolicy = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          // this.alert.info('No policy created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }
  // Get data of a specific specimen

  getBranches() {
    this.auth.get('branch').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.branches = response['data'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  buildData() {
    this.data.account_number = this.account_number;
    this.data.name = this.depositorForm.controls['name'].value;
    this.data.gender = this.depositorForm.controls['gender'].value;
    this.data.contact = this.depositorForm.controls['contact'].value;
    this.data.nationality = this.depositorForm.controls['nationality'].value;
    this.data.address = this.depositorForm.controls['address'].value;
    this.data.region = this.depositorForm.controls['region'].value;
    this.data.home_town = this.depositorForm.controls['home_town'].value;
    this.data.occupation = this.depositorForm.controls['occupation'].value;
    this.data.dob = this.depositorForm.controls['dob'].value;
    this.data.nok = this.depositorForm.controls['nok'].value;
    this.data.nok_contact = this.depositorForm.controls['nok_contact'].value;
    this.data.nok_relation = this.depositorForm.controls['nok_relation'].value;
    this.data.product_name = this.depositorForm.controls['product_name'].value;
    this.data.product_brand = this.depositorForm.controls[
      'product_brand'
    ].value;
    this.data.product_policy_id = this.depositorForm.controls[
      'product_policy_id'
    ].value;
    this.data.product_price = this.depositorForm.controls[
      'product_price'
    ].value;
    this.data.duration = this.depositorForm.controls['duration'].value;
    this.data.agent_id = this.depositorForm.controls['agent_id'].value;
    this.data.branch_id = this.depositorForm.controls['branch_id'].value;
  }

  view(ev) {
    this.auth.show('depositor', ev).subscribe(
      response => {
        this.depositor = response['data'];
      },
      error => {
        console.log(error);
        // this.isloading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }

  confirmAlert() {
    Swal.fire({
      title: 'Important Info',
      text: 'Still under construction. THANK YOU ',
      type: 'warning'
    });
  }

  getCustomerTransactions(data) {
    const id = data;
    // console.log(id);
    this.auth.show('customer_transactions', id).subscribe(
      response => {
        // console.log(response['data']);
        this.customerTransactions = response['data'];
        this.amountpaid(id);
      },
      error => {
        console.log(error);
        this.alert.warning(error['error']['message']);
      }
    );
  }
  amountpaid(id) {
    this.auth.show('amount_paid', id).subscribe(
      response => {
        // console.log(response['data']);
        this.accountDetails = response['data'];
        //  this.prepareAddAmount();
        // this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }


  public captureScreen(name) {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`${name} Transactions.pdf`); // Generated PDF
    });
  }
}
