import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../services/authentication.service';
import { AlertService } from '../../../../services/alert.service';

@Component({
  selector: 'app-auth-signup-v2',
  templateUrl: './auth-signup-v2.component.html',
  styleUrls: ['./auth-signup-v2.component.scss']
})
export class AuthSignupV2Component implements OnInit {

  isRegistering = false;
  registerForm: FormGroup;

  // Signup Data
  registerData = {
    branch_id: 1,
    first_name: '',
    last_name: '',
    gender: '',
    role: 'Administrator',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    status: 'Active'
  };


  constructor(
    private formBuilder: FormBuilder,
    private alert: AlertService,
    private auth: AuthenticationService,
    private router: Router,
  ) {

    this.registerForm = formBuilder.group(
      {
        first_name: [null, Validators.required],
        last_name: [null, Validators.required],
        gender: [null, Validators.required],
        email: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'
            )
          ])
        ],
        phone: [
          null,
          Validators.compose([Validators.required, Validators.minLength(10)])
        ],
        password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(5)])
        ],
        confirm_password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(5)])
        ]
      },
      {
        validator: this.isMatching // your validation method
      }
    );

  }

  isMatching(group: FormGroup) {
    const firstPassword = group.controls['password'].value;
    const secondPassword = group.controls['confirm_password'].value;
    if (firstPassword !== secondPassword) {
      return { pw_mismatch: true };
    } else {
      return null;
    }
  }

  ngOnInit() {
  }

  setData() {
    (this.registerData.first_name = this.registerForm.controls['first_name'].value),
      (this.registerData.last_name = this.registerForm.controls[
        'last_name'
      ].value),
      (this.registerData.gender = this.registerForm.controls['gender'].value),
      (this.registerData.email = this.registerForm.controls['email'].value),
      (this.registerData.phone = this.registerForm.controls['phone'].value),
      (this.registerData.password = this.registerForm.controls['password'].value);
  }


   // user registration function
   registration() {
    this.isRegistering = true;
    this.setData();
    setTimeout(() => {
      this.auth.createUser('registration', this.registerData).subscribe(
        response => {
          this.isRegistering = false;
          this.alert.success(
            'Hooray... Welcome to the Smart HP Platform'
          );
          this.router.navigate(['/auth/signin-v2']);
        },
        error => {
          if (error.status === 500) {
            this.isRegistering = false;
            this.alert.error(
              'Something went wrong, please contact Customer Care!'
            );
          } else if (error.status === 0) {
            this.isRegistering = false;
            this.alert.error('Network error. No internet connectivity.');
          } else {
            this.isRegistering = false;
            this.alert.error(error['message']);
          }
        }
      );
    }, 3000);
  }

}
