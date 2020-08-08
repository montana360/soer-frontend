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
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-statement',
  templateUrl: './customer-statement.component.html',
  styleUrls: ['./customer-statement.component.scss'],
})
export class CustomerStatementComponent implements OnInit {
  dtOptions: any = {};
  isLoading = false;
  isAdding: boolean;
  allBranches: any;
  AllDepositor: any;
  allAgents: any;
  allStaff: any;
  comData: any;
  allDeposits = null;
  allSales = null;
  saleDetails = null;

  total = null;
  sum = null;

  isFinding = true;
  isLoaded = false;
  isChecking = false;
  isNotice = false;
  isSales = false;

  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = '';

  customerInfo: any;
  customerBalance = null;
  salesTotal = null;
  sumTotal = null;


  RepCusForm: FormGroup;

  data = {
    account_number: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // agent transaction form
    this.RepCusForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])],
      search: [null],
    });
  }

  ngOnInit() {
    this.getDepositors();
    this.getStaff();
    this.getBranches();

    this.dtOptions = {
      searching: false,
      dom: 'Bfrtip',
      buttons: ['print'],
      // buttons: ['print', 'excel', 'csv'],
    };
  }

  getBranches() {
    this.isLoading = true;
    this.auth.get('branch').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allBranches = response['data'];
          // console.log(this.allBranches);
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No branches created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
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

  getDepositors() {
    this.isLoading = true;
    this.auth
      .show('branch_depositors', localStorage.getItem('branch'))
      .subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.AllDepositor = response['data'];

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
    this.data.account_number = this.RepCusForm.controls['account_number'].value;
  }

  getRecords() {
    this.clear();
    // this.isLoading = true;
    this.buildData();
    // console.log(this.data);
    this.auth.store('customer_statement', this.data).subscribe(
      (response) => {
        console.log(response);
        if (response['data'].length > 0) {
          this.allDeposits = response['data'];
          this.customerBalance = response['sum_total'];
          this.total = response['total'];
          this.customerInfo = response['customer'][0];
          this.salesTotal = response['sum'];
        } else {
          this.alert.info('No records found');
        }

        if (response['sales'].length > 0) {
          this.allSales = response['sales'];
          this.sum = response['sum'];
          this.isSales = true;
        } else {
          // this.isLoading = false;
          this.alert.info('No Sales Records Found');
        }
      },
      (error) => {
        // this.isLoading = false;
        this.alert.error('Could not get Records');
      }
    );
  }

  clear() {
    this.isLoaded = false;
    this.isFinding = true;
    this.isNotice = false;
    this.isChecking = false;
    this.isSales = false;
    this.allDeposits = null;
    this.saleDetails = null;
    this.isFound = false;
  }

  view(ev) {
    this.auth.show('sales_shop', ev).subscribe(
      (response) => {
        // console.log(response["data"]);
        this.saleDetails = response['data'];
      },
      (error) => {
        // this.isloading = false;
        console.log(error);
        this.alert.warning('Error Loading Data');
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
      pdf.save(`${name} Statement.pdf`); // Generated PDF
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
