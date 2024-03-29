import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-auth-signin-v2',
  templateUrl: './auth-signin-v2.component.html',
  styleUrls: ['./auth-signin-v2.component.scss'],
})
export class AuthSigninV2Component implements OnInit {
  status: any;
  isLoading = false;

  loginForm: FormGroup;

  // Login Data
  loginData = {
    username: '',
    password: '',
    grant_type: 'password',
    client_id: '2',
    client_secret: 'GwTUp5aXDeAz5T02SknoBOQMMkfsCM9Qc0FenHrB', // server auth key
    // client_secret: 'vOmq6Hy3SPTFxYGfptSgpPYzJpyIU3QZmgeuTRI6',
    scope: '*',
  };

  constructor(
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }

  ngOnInit() {}

  // this is the final data required for authentication
  setCredentials() {
    (this.loginData.username = this.loginForm.controls['email'].value),
      (this.loginData.password = this.loginForm.controls['password'].value);
  }

  // function for logging in
  signIn() {
    this.isLoading = true;
    this.setCredentials();
    // console.log(this.loginData);
    this.auth.authenticate(this.loginData).subscribe(
      (response) => {
        // console.log(response);
        if (response !== null || response !== undefined) {
          localStorage.setItem('token', response['access_token']);
          this.checkAccessLevel(this.loginData);
        }
      },
      (error) => {
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
          this.alert.info('Wrong credentials');
          // console.log(error);
        }
      }
    );
  }

  checkAccessLevel(data) {
    this.auth.store('access_level', data).subscribe(
      (response) => {
        const access_level = response['user']['role'];
        localStorage.setItem('user', JSON.stringify(response['user']));
        localStorage.setItem('userID', response['user']['id']);
        localStorage.setItem('username', response['user']['first_name']);
        localStorage.setItem('branch', response['user']['branch_id']);

        if (access_level !== 'Administrator') {
          this.alert.success('Welcome ' + localStorage.getItem('username'));
          localStorage.setItem('access_level', access_level);
          this.router.navigate(['/dashboard/default']);
        } else {
          localStorage.clear();
          this.isLoading = false;
          this.alert.info('Staff Account Access Only');
          this.router.navigate(['/auth/signin-v2/']);
        }
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.error('Signing In unsuccessful, please try again later.');
      }
    );
  }

}
