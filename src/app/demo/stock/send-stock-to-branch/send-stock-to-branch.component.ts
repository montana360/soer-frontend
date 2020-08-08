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
  selector: 'app-send-stock-to-branch',
  templateUrl: './send-stock-to-branch.component.html',
  styleUrls: ['./send-stock-to-branch.component.scss'],
})
export class SendStockToBranchComponent implements OnInit {

  dtOptions: any = {};

  isLoading = false;
  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = '';

  istoForm: FormGroup;
  istoEditForm: FormGroup;
  tranForm: FormGroup;

  allIsto: any;
  allBranches: any;
  comData: any;

  // Booleans
  transaction_number: any;

  allProducts: any;
  isAdding: boolean;
  allStocks: any;
  allSuppliers: any;
  isto: any;
  allStaff: any;

  total = 0;
  cost: number;
  // quantity: number;
  account_number: any;

  products = [];

  // Fields to clear
  product = null;
  quantity = null;
  item = null;
  stockQuantity = null;

  istoData = {
    sending_branch_id: '',
    receiving_branch_id: '',
    transaction_number: '',
    products: [],
    total: null,
    sender_id: '',
  };

  editIstoData = {
    transaction_number: '',
    branch_id: '',
    products: '',
    total: null,
    status: '',
    receiver_id: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // Searching for Transaction
    this.tranForm = formBuilder.group({
      transaction_number: [null, Validators.compose([Validators.required])],
    });

    // new branch isto form
    this.istoForm = formBuilder.group({
      transaction_number: [null],
      branch_id: [null, Validators.compose([Validators.required])],
      product: [null],
      quantity: [null],
      search: [null],
    });

    // edit isto form
    this.istoEditForm = formBuilder.group({
      transaction_number: [null, Validators.compose([Validators.required])],
      branch_id: [null, Validators.compose([Validators.required])],
      product: [null],
      total: [null],
      status: [null],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false,
    };

    this.getBranches();
    this.getBranchStock();
    this.getStaff();
  }

  getStock(id) {
    // console.log(id);
    this.auth.show('branch_product', id).subscribe(
      (response) => {
        if (response['data'] !== null || response['data'] !== undefined) {
          this.stockQuantity = response['data']['quantity'];
        }
      },
      (error) => {
        console.log(error);
        // this.isAdding = false;
      }
    );
  }

  // Push all added products to Products array
  pushToProducts() {
    this.isAdding = true;
    const id = this.istoForm.controls['product'].value;
    const quantity = this.istoForm.controls['quantity'].value;

    // console.log(id);

    this.auth.show('branch_product', id).subscribe(
      (response) => {
        console.log(response['data']);
        this.isAdding = false;
        if (response['data'] !== null || response['data'] !== undefined) {
          this.item = response['data'];
          const cp = parseFloat(this.item.cost_price);
          const total = quantity * cp;
          this.products.push({
            id: this.item.product_id,
            name: this.item.product,
            cost: cp,
            quantity: quantity,
            total: total,
          });
          this.total = this.total + total;
          // this.isAdding = false;
          console.log(this.products);
        }
        this.resetFields();
      },
      (error) => {
        console.log(error);
        this.isAdding = false;
      }
    );
  }

  resetFields() {
    this.product = null;
    this.quantity = null;
    // this.allStocks = null;
    this.item = null;
    this.stockQuantity = null;
    this.searchList = null;
    this.isInfo = false;
    this.isFound = false;
    this.search = '';
  }

  clearProducts() {
    this.products = [];
    this.total = 0;
  }

  getBranchStock() {
    this.auth
      .show('branch_available_products', localStorage.getItem('branch'))
      .subscribe(
        (response) => {
          // console.log('Stock', response['data']);
          if (response['data'] !== null || response['data'] !== undefined) {
            this.allStocks = response['data'];
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getBranchIsto() {
    this.isLoading = true;
    this.auth.show('b2b', localStorage.getItem('branch')).subscribe(
      (response) => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allIsto = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No data available yet');
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
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

  getStaff() {
    this.auth.get('user').subscribe(
      (response) => {
        // console.log(response['user']);
        if (response['user'] !== null || response['user'] !== undefined) {
          this.allStaff = response['user'];
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAccountNumber() {
    this.auth.get('branch_isto_tran_number').subscribe(
      (response) => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.transaction_number = response['data'];
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // Getting Branch ISTO Transaction
  getTransaction() {
    this.isLoading = true;
    const id = this.tranForm.controls['transaction_number'].value;
    this.auth.show('branch_isto_transaction', id).subscribe(
      (response) => {
        // console.log(response['data']);
        this.allIsto = response['data'];
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning('Error getting Transaction Information');
      }
    );
  }

  buildData() {
    this.istoData.sending_branch_id = localStorage.getItem('branch');
    this.istoData.receiving_branch_id = this.istoForm.controls[
      'branch_id'
    ].value;
    this.istoData.sender_id = localStorage.getItem('userID');
    this.istoData.transaction_number = this.transaction_number;
    this.istoData.products = this.products;
    this.istoData.total = this.total;
  }

  sendStock() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.istoData);
    this.auth.store('branch_isto', this.istoData).subscribe(
      (response) => {
        // console.log(response);
        this.isLoading = false;
        this.alert.success(response['message']);
        this.allIsto = null;
        this.getBranchIsto();
        this.getBranchStock();
        this.total = null;
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  view(ev) {
    this.auth.show('branch_isto', ev).subscribe(
      (response) => {
        this.isto = response['data'];
        // console.log(response["data"]);
      },
      (error) => {
        console.log(error);
        // this.isloading = false;
        this.alert.warning(error['error']['message']);
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
      pdf.save(`Branch To Branch ${name}.pdf`); // Generated PDF
    });
  }


  searchProducts(data) {
    this.isSearching = true;
    if (this.search === '') {
      this.clearSearch();
    } else if (data === '' || data === null) {
      this.clearSearch();
      this.isSearching = false;
      return;
    } else {

      const search = {
        query: data,
        branch_id: localStorage.getItem('branch')
      };

      // console.log(search);

      this.auth.store('branch_stock_search', search).subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.isInfo = false;
            this.searchList = response['data'];
            this.isSearching = false;
            this.isFound = true;
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

  clearSearch() {
    this.isInfo = false;
    this.isFound = false;
    this.searchList = null;
    this.isSearching = false;
  }
}


