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
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cash-report',
  templateUrl: './cash-report.component.html',
  styleUrls: ['./cash-report.component.scss'],
})
export class CashReportComponent implements OnInit {
  dtOptions: any = {};
  isLoading: boolean;
  isAdding: boolean;
  allBranches: any;
  allStaff: any;
  comData: any;
  isLoaded = false;
  allCash = null;
  total = null;

   // Formgroups
   cashSingle: FormGroup;
   cashMulti: FormGroup;

   // multi data
  cashMulData = {
    from: '',
    to: '',
    branch_id: ''
  };

  // single data
  cashData = {
    date: '',
    branch_id: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // Cash Multi Report Form
    this.cashMulti = formBuilder.group({
      from_date: [null, Validators.compose([Validators.required])],
      to_date: [null, Validators.compose([Validators.required])],
    });

    // Cash Single Report Form
    this.cashSingle = formBuilder.group({
      date: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit() {

    this.dtOptions = {
      searching: false,
      dom: 'Bfrtip',
      buttons: ['print'],
    };

    this.getStaff();
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

  buildSingle() {
    this.cashData.date = this.cashSingle.controls['date'].value;
    this.cashData.branch_id = localStorage.getItem('branch');
  }

  buildMulti() {
    this.cashMulData.from = this.cashMulti.controls['from_date'].value;
    this.cashMulData.to = this.cashMulti.controls['to_date'].value;
    this.cashMulData.branch_id = localStorage.getItem('branch');
  }


  // Search multiple records for Sales
  getCashMultiReport() {
    this.clear();
    this.isLoading = true;
    this.buildMulti();
    this.auth.store('cash_multiple_report', this.cashMulData).subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allCash = response['data'];
          this.total = response['total'];
          this.isLoaded = true;
          this.isLoading = false;
        } else {
          this.alert.info('No record found');
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  // Getting records for daily sales
  getCashDailyReport() {
    this.isLoading = true;
    this.buildSingle();
    this.auth.store('cash_single_report', this.cashData).subscribe(
      (response) => {
        if (response['data'].length > 0) {
          this.allCash = response['data'];
          this.total = response['total'];
          this.isLoaded = true;
          this.isLoading = false;
        } else {
          this.alert.info('No record found');
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  clear() {
    this.isLoaded = false;
    this.allCash = null;
    this.total = null;
  }


}
