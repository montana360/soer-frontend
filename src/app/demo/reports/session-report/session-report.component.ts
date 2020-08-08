import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-session-report',
  templateUrl: './session-report.component.html',
  styleUrls: ['./session-report.component.scss']
})
export class SessionReportComponent implements OnInit {

  isLoading = false;
  allSessions = null;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.getSessionReport();
  }

  getSessionReport() {
    this.isLoading = true;
    const data = {
      branch_id: localStorage.getItem('branch')
    };

    this.auth.store('session_details_report', data).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allSessions = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No data available');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error('Could not get information');
      }
    );
  }



}
