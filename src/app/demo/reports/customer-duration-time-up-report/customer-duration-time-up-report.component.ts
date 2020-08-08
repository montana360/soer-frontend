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
  selector: 'app-customer-duration-time-up-report',
  templateUrl: './customer-duration-time-up-report.component.html',
  styleUrls: ['./customer-duration-time-up-report.component.scss'],
})
export class CustomerDurationTimeUpReportComponent implements OnInit {

  dtOptions: any = {};
  isLoading = false;
  isLoaded = false;
  allPast = null;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dtOptions = {
      // searching: false,
      buttons: ['print', 'excel', 'csv'],
      dom: 'Bfrtip',
    };

    this.getTimeUp();
  }

  getTimeUp() {
    this.isLoading = true;

    const data = {
      branch_id: localStorage.getItem('branch')
    };

    this.auth.store('duration_timeup', data).subscribe(
      (response) => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allPast = response['data'];
          this.isLoading = false;
          this.isLoaded = true;
        } else {
          this.isLoading = false;
          this.alert.info('No Duration Timeout Yet');
        }
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
        this.alert.error('Could not Timeup duration records');
      }
    );
  }

  refresh() {
    this.allPast = null;
    this.isLoaded =  false;
    this.getTimeUp();
  }
}
