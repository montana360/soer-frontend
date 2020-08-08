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
  selector: 'app-stock-branch-receive',
  templateUrl: './stock-branch-receive.component.html',
  styleUrls: ['./stock-branch-receive.component.scss']
})
export class StockBranchReceiveComponent implements OnInit {

  dtOptions: any = {};

  isLoading = false;
  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = '';

  allProducts: any;
  isAdding: boolean;
  allBranches: any;
  allStocks: any;
  allSuppliers: any;
  allTrans: any;
  tran: any;
  allStaff: any;
  isto: any;
  comData: any;

  total = 0;
  transaction_number: string;
  cost: number;
  // quantity: number;
  account_number: any;

  products = [];

  // Fields to clear
  supplier = null;
  product = null;
  quantity = null;
  item = null;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dtOptions = {
      searching: false
    };

    this.getBranchStocks();
    this.getBranches();
    this.getStaff();
  }


  getBranchStocks() {
    this.isLoading = true;
    this.auth.show('branch_stock_receivables', localStorage.getItem('branch')).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allTrans = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No New Stocks Available');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
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



  getStaff() {
    this.auth.get('user').subscribe(
      response => {
        // console.log(response['user']);
        if (response['user'] !== null || response['user'] !== undefined) {
          this.allStaff = response['user'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }




  view(ev) {
    this.auth.show('branch_isto', ev).subscribe(
      response => {
        this.isto = response['data'];
        // console.log(response["data"]);
      },
      error => {
        console.log(error);
        // this.isloading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }


  receiveStock(data) {
    this.isLoading = true;

    const stock = {
      transaction_number: data.transaction_number,
      branch_id: localStorage.getItem('branch'),
      products: data.products,
      total: parseInt(data.total, 10),
      status: 'Received',
      receiver_id: localStorage.getItem('userID'),
    };

    this.auth.store('b2b_isto', stock).subscribe(response => {
      this.isLoading = false;
      // console.log(response);
      this.alert.success(response['message']);
      this.allTrans = null;
      this.getBranchStocks();
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
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
      pdf.save(`Unreceived Transactions ${name}.pdf`); // Generated PDF
    });
  }



}
