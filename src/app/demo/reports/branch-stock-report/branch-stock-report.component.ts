import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-branch-stock-report',
  templateUrl: './branch-stock-report.component.html',
  styleUrls: ['./branch-stock-report.component.scss']
})
export class BranchStockReportComponent implements OnInit {
  dtOptions: any = {};
  allProducts: any;
  isLoading: boolean;
  allBranches: any;
  allSuppliers: any;
  product: any;
  allStaff: any;
  comData: any;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getAllStock();
    this.getBranches();

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
  getAllStock() {
    this.isLoading = true;
    this.auth.show('branch_available_products', localStorage.getItem('branch')).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allProducts = response['data'];
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
  


}
