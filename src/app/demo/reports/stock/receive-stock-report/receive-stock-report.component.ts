import { AuthenticationService } from './../../../../services/authentication.service';
import { AlertService } from './../../../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import { parseBusinessHours } from '@fullcalendar/core';
import { parseBounds } from 'html2canvas/dist/types/css/layout/bounds';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-receive-stock-report',
  templateUrl: './receive-stock-report.component.html',
  styleUrls: ['./receive-stock-report.component.scss']
})
export class ReceiveStockReportComponent implements OnInit {

  dtOptions: any = {};

  isLoading: boolean;
  comData: any;
  allBranches: any;
  allTrans= null;
  tran = null;

  data = {
    branch_id : localStorage.getItem("branch"),
  };



  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
  ){

  }

  ngOnInit() {
    this.getBranches();
    this.getReceiveStockReport();
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


  getReceiveStockReport(){
    // receive_stock_report
    this.auth.store('receive_stock_report', this.data).subscribe(
      response => {
        // console.log(response["data"]);
        this.isLoading = false;
        this.allTrans = response["data"];

      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not receive stock report');
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
      pdf.save(`Transactions ${name}.pdf`); // Generated PDF
    });
  }


}
