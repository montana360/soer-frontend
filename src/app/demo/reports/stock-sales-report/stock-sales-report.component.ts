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
  selector: 'app-stock-sales-report',
  templateUrl: './stock-sales-report.component.html',
  styleUrls: ['./stock-sales-report.component.scss'],
})
export class StockSalesReportComponent implements OnInit {
  dtOptions: any = {};
  // isLoading: boolean;
  isAdding: boolean;
  AllBranches: any;
  AllStaff: any;
  comData: any;

  isLoading = false;
  isSales = false;
  isWalkin = false;
  isLoaded = false;

  // dtOptions: any = {};

  // Formgroups
  salesSingle: FormGroup;
  salesMulti: FormGroup;
  walkinSingle: FormGroup;
  walkinMulti: FormGroup;

  // Object variables
  allSales = null;
  allWalkins = null;

  // sales multi data
  salesMulData = {
    from: '',
    to: '',
    branch_id: ''
  };

  // sales single data
  salesData = {
    date: '',
    branch_id: ''
  };

  // walkin multi data
  walkinMulData = {
    from: '',
    to: '',
    branch_id: ''
  };

  // walkin single data
  walkinData = {
    date: '',
    branch_id: ''
  };

  // viewing variables
  saleDetails: any;

  constructor(
    public auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // Sales Shop Multi Report Form
    this.salesMulti = formBuilder.group({
      from_date: [null, Validators.compose([Validators.required])],
      to_date: [null, Validators.compose([Validators.required])],
    });

    // Sales Shop Single Report Form
    this.salesSingle = formBuilder.group({
      date: [null, Validators.compose([Validators.required])],
    });

    // Walkin Multi Report Form
    this.walkinMulti = formBuilder.group({
      from_date: [null, Validators.compose([Validators.required])],
      to_date: [null, Validators.compose([Validators.required])],
    });

    // Walkin Single Report Form
    this.walkinSingle = formBuilder.group({
      date: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      // searching: false,
      dom: 'Bfrtip',
      buttons: [
        'print',
        // 'excel',
        // 'csv'
      ]
    };
  }

  buildSalesSingle() {
    this.salesData.date = this.salesSingle.controls['date'].value;
    this.salesData.branch_id = localStorage.getItem('branch');
  }

  buildWalkinSingle() {
    this.walkinData.date = this.walkinSingle.controls['date'].value;
    this.walkinData.branch_id = localStorage.getItem('branch');
  }

  buildSalesMulti() {
    this.salesMulData.from = this.salesMulti.controls['from_date'].value;
    this.salesMulData.to = this.salesMulti.controls['to_date'].value;
    this.salesMulData.branch_id = localStorage.getItem('branch');
  }

  buildWalkinMulti() {
    this.walkinMulData.from = this.walkinMulti.controls['from_date'].value;
    this.walkinMulData.to = this.walkinMulti.controls['to_date'].value;
    this.walkinMulData.branch_id = localStorage.getItem('branch');
  }

  // Search multiple records for Sales
  getSalesMultiReport() {
    this.clearSales();
    this.isLoading = true;
    this.buildSalesMulti();
    this.auth.store('sales_shop_multiple_report', this.salesMulData).subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allSales = response['data'];
          this.isLoaded = true;
          this.isLoading = false;
          this.isSales = true;
        } else {
          this.alert.info('No record found');
          this.isLoading = false;
          // this.isSales = true;
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  // Getting records for daily sales
  getSalesDailyReport() {
    this.isLoading = true;
    this.buildSalesSingle();
    this.auth.store('sales_shop_single_report', this.salesData).subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allSales = response['data'];
          this.isLoaded = true;
          this.isLoading = false;
          this.isSales = true;
        } else {
          this.alert.info('No record found');
          this.isLoading = false;
          // this.isSales = true;
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  clearSales() {
    this.isLoaded = false;
    this.isSales = false;
    this.isWalkin = false;
    this.allSales = null;
    this.allWalkins = null;
  }

  clearWalkin() {
    this.isLoaded = false;
    this.isSales = false;
    this.isWalkin = false;
    this.allSales = null;
    this.allWalkins = null;
  }

  // view sales item
  viewSales(ev) {
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

  // Search walkin multiple records for Sales
  getSalesWalkinMultiReport() {
    this.clearSales();
    this.isLoading = true;
    this.buildWalkinMulti();
    this.auth
      .store('sales_walkin_shop_multiple_report', this.walkinMulData)
      .subscribe(
        (response) => {
          if (response['data'].length > 0) {
            this.allWalkins = response['data'];
            this.isLoaded = true;
            this.isLoading = false;
            this.isWalkin = true;
          } else {
            this.alert.info('No record found');
            this.isLoading = false;
            // this.isSales = true;
          }
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
  }

  // Getting walkin sales records for daily sales
  getSalesWalkinDailyReport() {
    this.isLoading = true;
    this.buildWalkinSingle();
    this.auth
      .store('sales_walkin_shop_single_report', this.walkinData)
      .subscribe(
        (response) => {
          // console.log(response['data']);
          if (response['data'].length > 0) {
            this.allWalkins = response['data'];
            this.isLoaded = true;
            this.isLoading = false;
            this.isWalkin = true;
          } else {
            this.alert.info('No record found');
            this.isLoading = false;
            // this.isSales = true;
          }
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
        }
      );
  }

  view(ev) {
    this.auth.show('sales_shop_walkin', ev).subscribe(
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
      pdf.save(`Branch To Branch ${name}.pdf`); // Generated PDF
    });
  }
}
