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
import { parseBusinessHours } from '@fullcalendar/core';
import { parseBounds } from 'html2canvas/dist/types/css/layout/bounds';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';


@Component({
  selector: 'app-crm-deb-deposits',
  templateUrl: './crm-deb-deposits.component.html',
  styleUrls: ['./crm-deb-deposits.component.scss']
})
export class CrmDebDepositsComponent implements OnInit {

  dtOptions: any = {};
  comData: any;

  isLoading = false;
  isAgent = false;
  isWalkin = true;
  showDeposit = false;

  searchForm: FormGroup;
  depositForm: FormGroup;
  editDepositForm: FormGroup;

  allDeposits: any;
  allDebtors: any;
  allStaff: any;
  allAgents: any;
  deposits: any;
  deposit: any;
  allDepositors: any;
  account_number: string;
  dailyDeposits = 0;
  accountDetails: any;
  depositorCount = 0;
  agentAmount = null;
  agentDeposit = null;
  notice = false;
  isAmount = false;
  branches: any;
  amountPaid = 0;
  debAmount = null;

  depositData = {
    account_number: '',
    name: '',
    initial_price: '',
    amount_paid: '',
    deposit: '',
    balance: 0,
    branch_id: '',
    depositor_id: '',
    payment_type: '',
    agent_id: ''
  };

  editDepositData = {
    account_number: '',
    name: '',
    initial_price: '',
    amount_paid: '',
    deposit: '',
    balance: 0,
    branch_id: '',
    depositor_id: '',
    payment_type: '',
    agent_id: ''
  };


  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {


    this.searchForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])]
    });

    // New Debtor Form
    this.depositForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])],
      agent_id: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      product_price: [null, Validators.compose([Validators.required])],
      amount_paid: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
      agentAmount: [null, Validators.compose([Validators.required])],
      agentDeposit: [null, Validators.compose([Validators.required])],
      payment_type: ['Walkin', Validators.compose([Validators.required])],
    });

    // Edit Debtor Form
    this.editDepositForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])],
      agent_id: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      product_price: [null, Validators.compose([Validators.required])],
      amount_paid: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
      payment_type: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false
    };
    this.getStaff();
    this.getBranches();
    this.getAgents();
    this.getDebtors();
  }

  getDebtors() {
    this.isLoading = true;
    this.auth.get('debtor').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allDebtors = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Debtor Account available yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not get Debtor Accounts. Please try again later');
      }
    );
  }

  getBranches() {
    this.auth.get('branch').subscribe(
      (response) => {
        // console.log(response);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.branches = response['data'];
        }
      },
      (error) => {
        console.error(error);
        this.alert.error('Could not get Branch Data. Please try again later');
      }
    );
  }

  getStaff() {
    this.isLoading = true;
    this.auth.get('get_staff').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allStaff = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Staff account created yet');
        }
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error('Could not get Staff Accounts. Please try again later');
      }
    );
  }


  // getting branch agents
  getAgents() {
    this.isLoading = true;
    this.auth.show('agents_branch', localStorage.getItem('branch')).subscribe(
      response => {
        // console.log(response['data']);
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
        this.alert.error('Could not get Agent Accounts. Please try again later');
      }
    );
  }


  // getting account details using account number as id
  getClient() {
    const id = this.searchForm.controls['account_number'].value;
    this.auth.show('search_debtor', id).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.accountDetails = response['data'][0];
          this.getRecords(id);
          this.prepareDepForm();
        } else {
          this.alert.info('No such account available. Check Account Number');
        }
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error('Couldn`t get Client info. Please try again');
      }
    );
  }


  // Getting Client Deposit Records
  getClientRecords() {
    this.isLoading = true;
    const id = this.searchForm.controls['account_number'].value;
    this.auth.show('debtor_deposit_records', id).subscribe(
      response => {
        // console.log(response);
        if (response['data'].length <= 0 ) {
          this.alert.info('No made deposit(s) available');
        }
        this.allDeposits = response['data'];
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning('Error getting Customer Deposit Records');
      }
    );
  }

  getRecords(id) {
    // this.isLoading = true;
    this.auth.show('debtor_amount_paid', id).subscribe(
       response => {
        // console.log(response['data']);
        this.amountPaid = response['data'];
        this.prepareAddAmount();
        // this.isLoading = false;
       },
       error => {
         console.log(error);
         this.isLoading = false;
         this.alert.error('Couldn`t get Debtor`s Amount Paid');
       }
     );
  }


  prepareDepForm() {
    this.depositForm.get('account_number').setValue(this.accountDetails.account_number);
    this.depositForm.get('name').setValue(this.accountDetails.name);
    this.depositForm.get('product_price').setValue(this.accountDetails.product_price);
    // this.depositForm.get('amount').setValue(this.accountDetails.amount);
  }

  prepareAddAmount() {
    this.depositForm.get('amount_paid').setValue(this.amountPaid);
  }

  buildData() {
    this.depositData.account_number = this.depositForm.controls[
      'account_number'
    ].value;
    this.depositData.name = this.depositForm.controls['name'].value;
    this.depositData.initial_price = this.depositForm.controls['product_price'].value;
    this.depositData.amount_paid = this.depositForm.controls['amount_paid'].value;
    this.depositData.deposit = this.depositForm.controls['amount'].value;

    // Balance Codes
    const ip = Math.round(parseInt(this.depositForm.controls['product_price'].value, 10));
    const ap = Math.round(parseInt(this.depositForm.controls['amount_paid'].value, 10));
    const am = this.depositForm.controls['amount'].value;

    const balance = am + ap;
    // const balance  = ip - amp;

    this.depositData.balance = balance;

    this.depositData.agent_id = this.depositForm.controls['agent_id'].value;
    this.depositData.branch_id = localStorage.getItem('branch');
    this.depositData.depositor_id = localStorage.getItem('userID');
    this.depositData.payment_type = this.depositForm.controls['payment_type'].value;
  }

  createDeposit() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.depositData);
    this.auth.store('debtor_deposits', this.depositData).subscribe(
      response => {
        this.notice = false;
        this.isAmount = false;
        this.allDeposits = null;
        this.isLoading = false;
        this.setDefault();
        this.alert.success(response['message']);
      },
      error => {
        this.isLoading = false;
        this.setDefault();
        this.alert.error('Cannot make deposit at the moment, try again');
      }
    );
  }

  setDefault() {
    this.depositForm.get('payment_type').setValue('Walkin');
  }

  edit(ev) {
    // console.log(ev);
    this.auth.show('debtor_deposits', ev).subscribe(
      response => {
        // console.log(response['data']);
        this.deposits = response['data'];
        this.prepareEditForm();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error('Error getting deposit information. Try again');
      }
    );
  }

  prepareEditForm() {
    this.editDepositForm
      .get('account_number')
      .setValue(this.deposits.account_number);
    this.editDepositForm.get('name').setValue(this.deposits.name);
    this.editDepositForm.get('amount').setValue(this.deposits.deposit);
  }

  buildEdit() {
    this.editDepositData.name = this.deposits.name;
    this.editDepositData.account_number = this.deposits.account_number;
    this.editDepositData.initial_price = this.deposits.initial_price;
    this.editDepositData.amount_paid = this.deposits.amount_paid;
    this.editDepositData.deposit = this.editDepositForm.controls['amount'].value;

    // Balance Codes
    const ip = this.deposits.initial_price;
    const ap = this.deposits.amount_paid;
    const am = this.editDepositForm.controls['amount'].value;

    const amp = am + ap;
    const balance  = ip - amp;


    this.editDepositData.balance = balance;

    this.editDepositData.agent_id = this.deposits.agent_id;
    this.editDepositData.branch_id = this.deposits.branch_id;
    this.editDepositData.depositor_id = localStorage.getItem('userID');
    this.editDepositData.payment_type = this.deposits.payment_type;
  }

  editDeposit() {
    this.isLoading = true;
    this.buildEdit();
    // console.log(this.editDepositData);
    this.auth
      .update('debtor_deposits', this.deposits.id, this.editDepositData)
      .subscribe(
        response => {
          this.allDeposits = null;
          this.isLoading = false;
          this.alert.success(response['message']);
        },
        error => {
          console.log(error);
          this.isLoading = false;
          this.alert.error('Edit unsuccessful, try again later');
        }
      );
  }

  view(ev) {
    this.auth.show('debtor_deposits', ev).subscribe(
      response => {
        // console.log(response['data']);
        this.deposit = response['data'];
      },
      error => {
        console.log(error);
        this.alert.warning('Viewing data not possible, please try again');
      }
    );
  }


  getAgentDeposit(id) {
    this.auth.show('agent_current_deposit', id).subscribe(response => {
      // console.log(response['data']);
      if (response['data'] !== null || response['data'] !== undefined) {
        this.agentAmount = response['data']['amount'];
        this.agentDeposit = response['data']['main_deposit'];
        if (this.agentAmount > 0) {
          this.notice = false;
          this.isAmount = true;
        } else {
          this.notice = true;
          this.isAmount = false;
        }
      }
    }, error => {
      console.log(error);
    });
  }


  payIn(data) {
    if (data === 'Agent') {
      this.isAgent = true;
      this.showDeposit = true;
      this.isWalkin = false;
    } else {
      this.notice = false;
      this.showDeposit = true;
      this.isAgent = false;
      this.isWalkin = true;
      this.isAmount = false;
    }
  }


  clear() {
    this.isAgent = false;
    this.isWalkin = true;
    this.showDeposit = false;
    this.isAmount = false;
    this.agentDeposit = null;
    this.agentAmount = null;
    this.allDeposits = null;
    this.amountPaid = 0;
    this.depositForm.get('agent_id').setValue(null);
    this.depositForm.get('amount').setValue(null);
    this.depositForm.get('payment_type').setValue('Walkin');
  }


  public captureScreen(name) {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`Debtor Deposit - ${name}.pdf`); // Generated PDF
    });
  }
}
