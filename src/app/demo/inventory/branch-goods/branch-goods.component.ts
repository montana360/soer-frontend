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
  selector: 'app-branch-goods',
  templateUrl: './branch-goods.component.html',
  styleUrls: ['./branch-goods.component.scss']
})
export class BranchGoodsComponent implements OnInit {
  isLoading = false;
  allIsto: any;

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getisto();
  }

  getisto() {
    this.isLoading = true;
    this.auth.get('isto').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allIsto = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Data available yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }
}
