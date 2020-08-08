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
  selector: 'app-crm-policy',
  templateUrl: './crm-policy.component.html',
  styleUrls: ['./crm-policy.component.scss']
})
export class CrmPolicyComponent implements OnInit {

  isLoading = false;
  allPolicy: any;
  policy: any;

  policyForm: FormGroup;
  editPolicyForm: FormGroup;

  policyData = {
    name: '',
    description: ''
  };

  editData = {
    name: '',
    description: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {

    // New Policy Form
    this.policyForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
    });


    // Edit Policy Form
    this.editPolicyForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {
    this.getPolicies();
  }

  getPolicies() {
    this.isLoading = true;
    this.auth.get('policy').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allPolicy = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No policy created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }


  buildPolicy() {
    this.policyData.name = this.policyForm.controls['name'].value;
    this.policyData.description = this.policyForm.controls['description'].value;
  }

  createPolicy() {
    this.isLoading = true;
    this.buildPolicy();
    this.auth.store('policy', this.policyData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getPolicies();
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  edit(ev) {
    // this.isLoading = true;
    this.auth.show('policy', ev).subscribe(
      response => {
        // this.isLoading = false;
        this.policy = response['data'];
        this.prepareEditForm();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }


  prepareEditForm() {
    this.editPolicyForm.get('name').setValue(this.policy.name);
    this.editPolicyForm.get('description').setValue(this.policy.description);
  }

  buildEdit() {
    this.editData.name = this.editPolicyForm.controls['name'].value;
    this.editData.description = this.editPolicyForm.controls['description'].value;
  }

  editPolicies() {
    this.isLoading = true;
    this.buildEdit();
    this.auth.update('policy', this.policy.id, this.editData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getPolicies();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }

  confirmAlert(ev) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, this policy data would be lost',
      type: 'warning',
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.deletePolicy(ev);
      }
    });
  }


  deletePolicy(ev) {
    this.isLoading = true;
    this.auth.destroy('policy', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getPolicies();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
}
