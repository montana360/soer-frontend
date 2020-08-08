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
  selector: 'app-receive-stock',
  templateUrl: './receive-stock.component.html',
  styleUrls: ['./receive-stock.component.scss']
})
export class ReceiveStockComponent implements OnInit {

  dtOptions: any = {};

  allProducts: any;
  isLoading: boolean;
  isAdding: boolean;
  allBranches: any;
  allStocks: any;
  allSuppliers: any;
  allTrans: any;
  tran: any;
  allStaff: any;
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
  ) {}

  ngOnInit() {
    this.getStockTransfers();
    this.getBranches();

    this.dtOptions = {
      searching: false
    };
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


  getStockTransfers() {
    this.allTrans = null;
    this.isLoading = true;
    this.auth.show('stock_receivables', localStorage.getItem('branch')).subscribe(
      response => {
        console.log(response['data']);
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

  view(ev) {
    // this.isLoading = true;
    this.tran =  null;
    this.auth.show('isto', ev).subscribe(
      response => {
        this.tran = response['data'];
      },
      error => {
        console.log(error);
        // this.isloading = false;
        this.alert.warning('Error Viewing Data');
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

    this.auth.store('branch_stock', stock).subscribe(response => {
      // console.log(response);
      this.isLoading = false;
      this.alert.success(response['message']);
      this.allTrans = null;
      this.getStockTransfers();
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
