import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-auth-reset-password-v2',
  templateUrl: './auth-reset-password-v2.component.html',
  styleUrls: ['./auth-reset-password-v2.component.scss']
})
export class AuthResetPasswordV2Component implements OnInit {
  status: any;
  isLoading = false;

  resetForm: FormGroup;

  // Login Data
  resetData = {
    email: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.resetForm = formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])]
    });
  }

  ngOnInit() {}

  // this is the final data required for authentication
  setCredentials() {
    this.resetData.email = this.resetForm.controls['email'].value;
  }

  // function for logging in
  resetPassword() {
    this.isLoading = true;
    this.setCredentials();
    // console.log(this.resetData);
    this.auth.store('password/email', this.resetData).subscribe(
      response => {
        // console.log(response);
        this.isLoading = false;
        this.alert.success(response['message']);
        this.router.navigate(['/auth/signin-v2/']);
      },
      error => {
        if (error.status === 500) {
          this.isLoading = false;
          console.log(error);
          this.alert.info('Oops something went wrong, please try again later');
        } else if (error.status === 0) {
          this.isLoading = false;
          console.log(error);
          this.alert.warning('Network Error. Please check your connectivity.');
        } else if (error.status === 401) {
          this.isLoading = false;
          console.log(error);
          this.alert.warning(
            'Username or Password Incorrect. Please check and enter again.'
          );
        } else {
          this.isLoading = false;
          this.alert.info(error['error']['error']);
          console.log(error);
        }
      }
    );
  }
}
