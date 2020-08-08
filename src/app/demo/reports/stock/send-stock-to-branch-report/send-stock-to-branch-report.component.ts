import { AlertService } from './../../../../services/alert.service';
import { AuthenticationService } from './../../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import { parseBusinessHours } from '@fullcalendar/core';
import { parseBounds } from 'html2canvas/dist/types/css/layout/bounds';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-send-stock-to-branch-report',
  templateUrl: './send-stock-to-branch-report.component.html',
  styleUrls: ['./send-stock-to-branch-report.component.scss']
})
export class SendStockToBranchReportComponent implements OnInit {

  dtOptions: any = {};

  isLoading: boolean;
  comData: any;

  allIsto: any;
  allBranches: any;
  isto: any;
  allStaff: any;
  allTrans: any;


  data = {
    branch_id : localStorage.getItem("branch"),
  };



  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getBranches();
    this.getBranchStockReport();

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

  getBranchStockReport(){
    // receive_stock_report
    this.auth.store('send_stock_from_branch_report', this.data).subscribe(
      response => {
        // console.log(response["data"]);
        this.isLoading = false;
        this.allIsto = response["data"];

      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not receive stock report');
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








}
