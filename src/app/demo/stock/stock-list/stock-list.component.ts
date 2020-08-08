import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  dtOptions: any = {};

  isLoading = false;
  allStock: any;

  constructor(private auth: AuthenticationService, private alert: AlertService) { }

  ngOnInit() {
    this.dtOptions = {
      searching: false
    };
    this.getBranchStock();
  }


  getBranchStock() {
    this.isLoading = true;
    this.auth.show('branch_items', localStorage.getItem('branch')).subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allStock = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Stock Available for this Branch');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

}
