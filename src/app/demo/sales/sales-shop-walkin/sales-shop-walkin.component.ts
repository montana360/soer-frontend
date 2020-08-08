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
  selector: 'app-sales-shop-walkin',
  templateUrl: './sales-shop-walkin.component.html',
  styleUrls: ['./sales-shop-walkin.component.scss']
})
export class SalesShopWalkinComponent implements OnInit {

  dtOptions: any = {};

  isLoading = false;
  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = '';
  isAgent = false;
  isWalkin = false;
  showDeposit = false;
  isAdding = false;

  searchForm: FormGroup;
  salesForm: FormGroup;

  transaction_number: any;
  comData: any;

  allDeposits: any;
  allAgents: any;
  deposits: any;
  depositor: any;
  allDepositors: any;
  account_number: string;
  dailyDeposits = 0;
  accountDetails: any;
  depositorCount = 0;
  agentAmount = null;
  notice = false;
  isAmount = false;
  salesItems: any;
  itemPrice = null;
  initPrice = null;
  stock = null;

  amount_paid: any;

  total = 0;
  finalProfit = 0;
  cost: number;

  products = [];

  // Fields to clear
  product = null;
  quantity = null;
  item = null;

  allSales = null;
  branchItems = null;
  allStaff: any;
  allBranches: any;
  saleDetails: any;

  date = localStorage.getItem('session');

  sales = {
    transaction_number: '',
    branch_id: '',
    issued_by: '',
    customer_name: '',
    customer_number: '',
    products: [],
    total: null,
    session_date: this.date,
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {

    this.searchForm = formBuilder.group({
      transaction_number: [null, Validators.compose([Validators.required])]
    });

    // New Sales Walkin Form
    this.salesForm = formBuilder.group({
      transaction_number: [null],
      name: [null, Validators.compose([Validators.required])],
      number: [null, Validators.compose([Validators.required])],
      product_name: [null, Validators.compose([Validators.required])],
      product_brand: [null, Validators.compose([Validators.required])],
      product: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      stock: [null, Validators.compose([Validators.required])],
      product_price: [null, Validators.compose([Validators.required])],
      amount_paid: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
      final_product_price: [null, Validators.compose([Validators.required])],
      search: [null],
    });

  }

  ngOnInit() {
    this.dtOptions = {
      searching: false
    };

    this.getBranchItems();
    this.getBranches();
    this.getStaff();
    this.getBranchWalkinSales();
  }


  getStaff() {
    this.auth.get('user').subscribe(
      response => {
        if (response['user'] !== null || response['user'] !== undefined) {
          this.allStaff = response['user'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }


  getBranches() {
    this.isLoading = true;
    this.auth.get('branch').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allBranches = response['data'];
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


  getBranchItems() {
    this.isLoading = true;
    this.auth.show('branch_available_products', localStorage.getItem('branch')).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.branchItems = response['data'];
          this.isLoading = false;
        }
      },
      error => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }


  getBranchWalkinSales() {
    const data = {
      branch_id: localStorage.getItem('branch'),
      session_date: localStorage.getItem('session'),
    };

    // console.log(data);
    this.auth.store('branch_sales_shop_walkin', data).subscribe(
      (response) => {
        console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.allSales = response['data'];
          this.isLoading = false;
        }
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  getAccountNumber() {
    this.auth.get('sales_walkin_tran_number').subscribe(
      response => {
        // console.log('Tran Num: ', response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.transaction_number = response['data'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }



  // Getting Selected Item information
  getItemInfo(id) {
    this.auth.show('branch_product', id).subscribe(
      response => {
      //  console.log(response['data']);
       this.itemPrice = response['data']['cost_price'];
       this.initPrice = response['data']['cost_price'];
       this.stock = response['data']['quantity'];
       this.isAmount = true;
      },
      error => {
        console.log(error);
        this.alert.warning('Server Issues, Please Try Again');
      }
    );
  }


  pushToProducts() {
    this.isAdding = true;
    const id = this.salesForm.controls['product'].value;
    const quantity = this.salesForm.controls['quantity'].value;
    const cp = this.salesForm.controls['final_product_price'].value;
    // console.log(quantity, id);

    this.auth.show('branch_product', id).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.item = response['data'];
          // const cp = parseFloat(this.item.selling_price);
          const total = quantity * cp;
          const initpro = quantity * this.initPrice;
          const finalProfit = total - initpro;

          // Pushing item details to Product Array
          this.products.push({
            id: this.item.product_id,
            name: this.item.product,
            cost: cp,
            quantity: quantity,
            total: total,
            initial_cost: this.initPrice,
            initial_sales: initpro,
            profit: finalProfit,
          });
          this.isAdding = false;
          this.total = this.total + total;
          this.finalProfit = this.finalProfit + finalProfit;

          // console.log(this.products);
        }
        this.resetFields();
        this.isAdding = false;
      },
      error => {
        console.error(error);
        this.resetFields();
        this.isAdding = false;
      }
    );
  }


  resetFields() {
    this.product = null;
    this.quantity = null;
    this.item = null;
    this.isAmount = false;
    this.quantity = null;
    this.stock = null;
    this.item = null;
    this.searchList = null;
    this.isInfo = false;
    this.isFound = false;
    this.search = '';
  }


  clear() {
    this.products = [];
    this.total = 0;
    this.finalProfit = 0;
    this.isAmount = false;
  }


  buildData() {
    this.sales.transaction_number = this.transaction_number;
    this.sales.branch_id = localStorage.getItem('branch');
    this.sales.issued_by = localStorage.getItem('userID');
    this.sales.customer_name = this.salesForm.controls['name'].value;
    this.sales.customer_number = this.salesForm.controls['number'].value;
    this.sales.products = this.products;
    this.sales.total = this.total;
  }


  issueSales() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.sales);
    // this.isLoading = false;
    this.auth.store('sales_shop_walkin', this.sales).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.allSales = null;
        this.isAmount = false;
        this.total = null;
        this.products = [];
      },
      error => {
        this.isLoading = false;
        this.alert.error('Items could not be issued to Customer');
      }
    );
  }


  getTransaction() {
    this.isLoading = true;
    const id = this.searchForm.controls['transaction_number'].value;
    this.auth.show('sales_walkin_transaction', id).subscribe(
      response => {
        // console.log(response['data']);
        this.allSales = response['data'];
        this.isLoading = false;
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning('Error getting Transaction Information');
      }
    );
  }


  view(ev) {
    this.auth.show('sales_shop_walkin', ev).subscribe(
      response => {
        // console.log(response["data"]);
        this.saleDetails = response['data'];
      },
      error => {
        // this.isloading = false;
        console.log(error);
        this.alert.warning('Error Loading Data');
      }
    );
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
      pdf.save(`Sales Shop Walk-In - ${name}.pdf`); // Generated PDF
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
    this.isAmount = false;
    this.stock = null;
  }

}
