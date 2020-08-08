import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentication.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: string;
  username: string;

  manageForm: FormGroup;
  manageEditForm: FormGroup;

  all_users: any;
  user: any;
  editManage: any;
  branches: any;

  manageEditDetails = {
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.id = localStorage.getItem('userID');
    this.username = localStorage.getItem('username');

    this.getUser();
    this.getBranches();

    // initializing edit form for colon specimen
    this.manageEditForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      role: ['', Validators.required],
      branch_id: ['', Validators.required]
    });
  }
  getBranches() {
    this.auth.get('branch').subscribe(
      response => {
        // console.log(response);
        if (response['data'] !== null || response['data'] !== undefined) {
          this.branches = response['data'];
        }
      },
      error => {
        console.error(error);
      }
    );
  }
 
  getUser() {
    this.spinner.show();
    this.auth.show('user', this.id).subscribe(
      response => {
        this.user = response['user'];
        this.prepareEditForm();
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.alert.error('Error loading user Data');
        // console.log(error);
      }
    );
  }

  prepareEditForm() {
    this.manageEditForm.get('first_name').setValue(this.user.first_name);
    this.manageEditForm.get('last_name').setValue(this.user.last_name);
    this.manageEditForm.get('email').setValue(this.user.email);
    this.manageEditForm.get('phone').setValue(this.user.phone);
    this.manageEditForm.get('role').setValue(this.user.role);
    this.manageEditForm.get('branch_id').setValue(this.user.branch_id);
  }

  // setEditData() {
  //   this.manageEditDetails.first_name = this.manageEditForm.controls[
  //     'first_name'
  //   ].value;
  //   this.manageEditDetails.last_name = this.manageEditForm.controls[
  //     'last_name'
  //   ].value;
  //   this.manageEditDetails.email = this.manageEditForm.controls['email'].value;
  //   this.manageEditDetails.phone = this.manageEditForm.controls['phone'].value;
  // }

  // editManageUser() {
  //   this.spinner.show();
  //   this.setEditData();
  //   // console.log(this.manageEditDetails);
  //   this.auth
  //     .update('update_user', this.user.id, this.manageEditDetails)
  //     .subscribe(
  //       response => {
  //         this.spinner.hide();
  //         if (response !== null || response !== undefined) {
  //           this.alert.success(response['message']);
  //           this.getUser();
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //         this.spinner.hide();
  //         if (error.status === 500) {
  //           this.alert.warning(
  //             'Can not update the information, please check the data'
  //           );
  //         } else {
  //           this.alert.error('User update failed, try again later.');
  //         }
  //       }
  //     );
  // }
}
