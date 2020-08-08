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
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';


@Component({
  selector: 'app-crm-depositor',
  templateUrl: './crm-depositor.component.html',
  styleUrls: ['./crm-depositor.component.scss'],
})
export class CrmDepositorComponent implements OnInit {
  dtOptions: any = {};
  comData: any;

  isLoading = false;

  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = '';
  isAdding = false;
  isFinding = true;


  depositorForm: FormGroup;
  searchForm: FormGroup;
  // editDepositorForm: FormGroup;

  allAgents: any;
  allPolicy: any;
  allDepositors: any;
  Depos: any;
  depositor: any;
  branches: any;
  account_number: string;

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
    product_name: '',
    product_brand: '',
    product_policy_id: '',
    product_price: '',
    duration: '',
    agent_id: '',
    branch_id: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // Searching Form
    this.searchForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])],
      search: [null],
    });

    // New Depositor Form
    this.depositorForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      gender: [null, Validators.compose([Validators.required])],
      contact: [
        null,
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      nationality: [null, Validators.compose([Validators.required])],
      region: [null, Validators.compose([Validators.required])],
      home_town: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      occupation: [null, Validators.compose([Validators.required])],
      dob: [null, Validators.compose([Validators.required])],
      nok: [null, Validators.compose([Validators.required])],
      nok_contact: [null, Validators.compose([Validators.minLength(10)])],
      nok_relation: [null, Validators.compose([Validators.required])],
      product_name: [null, Validators.compose([Validators.required])],
      product_brand: [null, Validators.compose([Validators.required])],
      product_policy_id: [null, Validators.compose([Validators.required])],
      product_price: [null, Validators.compose([Validators.required])],
      duration: [null, Validators.compose([Validators.required])],
      agent_id: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false,
    };

    this.getDepositors();
    this.getAgents();
    this.getPolicies();
    this.getBranches();
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
            this.alert.info('No Depositor Account available yet');
          }
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
          this.alert.error('Error getting Customer Deposit Records');
        }
      );
  }

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
        console.log(error);
        this.alert.error('Couldn`t get Agents. Please try again');
      }
    );
  }

  getPolicies() {
    this.isLoading = true;
    this.auth.get('policy').subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allPolicy = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          // this.alert.info('No policy created yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error('No policy available. Try again later.');
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
      }
    );
  }

  getAccountNumber() {
    this.auth.get('acct_number').subscribe(
      (response) => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.account_number = response['data'];
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Getting Depositor Info
  getDepositorInfo() {
    const id = this.searchForm.controls['account_number'].value;

    this.auth.show('search_depositor', id).subscribe(
      (response) => {
        // console.log(response['data'][0]);
        // this.isLoading = false;
        this.allDepositors = response['data'];
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning('Error getting Depositor Account Details');
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
    this.data.branch_id = localStorage.getItem('branch');
  }

  createDepositor() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.data);
    this.auth.store('depositor', this.data).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getDepositors();
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  confirmAlert(ev) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, Debtor Account data would be lost',
      type: 'warning',
      showCancelButton: true,
    }).then((willDelete) => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.deleteDepositor(ev);
      }
    });
  }

  deleteDepositor(ev) {
    this.isLoading = true;
    this.auth.destroy('depositor', ev).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getDepositors();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }

  view(ev) {
    // this.isLoading = true;
    this.auth.show('depositor', ev).subscribe(
      (response) => {
        this.depositor = response['data'];
      },
      (error) => {
        console.log(error);
        // this.isloading = false;
        this.alert.warning('Error Viewing Data');
      }
    );
  }

  public captureScreen(name) {
    const data = document.getElementById('contentToConvert');
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`${name} Details.pdf`); // Generated PDF
    });
  }


  searchDepositors(data) {
    this.isSearching = true;
    if (this.search === '') {
      this.clearUserSearch();
    } else if (data === '' || data === null) {
      this.clearUserSearch();
      this.isSearching = false;
      return;
    } else {
      const search = {
        query: data,
        branch_id: localStorage.getItem('branch')
      };

      this.auth.store('branch_search_depositor', search).subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.isInfo = false;
            this.searchList = response['data'];
            this.isSearching = false;
            this.isFound = true;
            this.isFinding = false;
          } else {
            this.searchList = null;
            this.isFound = false;
            this.isInfo = true;
            this.isSearching = false;
          }
        },
        (error) => {
          // console.log(error);
          this.searchList = null;
          this.isSearching = false;
        }
      );
    }
  }

  clearUserSearch() {
    this.isInfo = false;
    this.isFound = false;
    this.searchList = null;
    this.isSearching = false;
  }

}
