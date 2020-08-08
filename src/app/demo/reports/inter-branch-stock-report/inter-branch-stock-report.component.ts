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


@Component({
  selector: 'app-inter-branch-stock-report',
  templateUrl: './inter-branch-stock-report.component.html',
  styleUrls: ['./inter-branch-stock-report.component.scss']
})
export class InterBranchStockReportComponent implements OnInit {

  dtOptions: any = {};

  allProducts = null;
  isLoading: boolean;
  allBranches: any;
  allSuppliers: any;
  product: any;
  allStaff: any;
  comData: any;

  isLoaded = false;

  RepBranchForm: FormGroup;

  data = {
    branch_id: '',
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
     // new transaction
     this.RepBranchForm = formBuilder.group({
      branch_id: [null, Validators.compose([Validators.required])],
    });
   }

  ngOnInit() {
    this.getBranches();

    this.dtOptions = {
      // searching: false,
      dom: 'Bfrtip',
      buttons: [
        'print',
        'excel',
        'csv'
      ]
    };

  }

  getBranches() {
    this.isLoading = true;

    this.auth.show('other_branch', localStorage.getItem('branch')).subscribe(
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
        this.alert.error('Error getting Branch List');
      }
    );
  }

  getAllStock() {
    this.isLoading = true;

    const id = this.RepBranchForm.controls['branch_id'].value;

    this.auth.show('branch_available_products', id).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allProducts = response['data'];
          this.isLoaded = true;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Stocks Available');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error('Error getting branch products');
      }
    );
  }


  clear() {
    this.isLoaded = false;
    this.allProducts = null;
  }

}
