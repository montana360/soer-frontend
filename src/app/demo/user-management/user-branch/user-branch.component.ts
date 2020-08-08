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
  selector: 'app-user-branch',
  templateUrl: './user-branch.component.html',
  styleUrls: ['./user-branch.component.scss']
})
export class UserBranchComponent implements OnInit {
  isLoading = false;
  allBranches: any;
  branch: any;

  branchForm: FormGroup;
  editBranchForm: FormGroup;

  branchData = {
    name: '',
    location: ''
  };

  editData = {
    name: '',
    location: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // New Branch Form
    this.branchForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      location: [null, Validators.compose([Validators.required])]
    });

    // Edit Branch Form
    this.editBranchForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      location: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.getBranches();
  }

  getBranches() {
    this.isLoading = true;
    this.auth.get('branch').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allBranches = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No branches created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  buildBranch() {
    this.branchData.name = this.branchForm.controls['name'].value;
    this.branchData.location = this.branchForm.controls['location'].value;
  }

  createBranch() {
    this.isLoading = true;
    this.buildBranch();
    this.auth.store('branch', this.branchData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getBranches();
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  edit(ev) {
    console.log(ev);
    // this.isLoading = true;
    this.auth.show('branch', ev).subscribe(
      response => {
        console.log(response['data']);
        // this.isLoading = false;
        this.branch = response['data'];
        this.prepareEditForm();
      },
      error => {
        console.log(error);
        // this.isLoading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }

  prepareEditForm() {
    this.editBranchForm.get('name').setValue(this.branch.name);
    this.editBranchForm.get('location').setValue(this.branch.location);
  }

  buildEdit() {
    this.editData.name = this.editBranchForm.controls['name'].value;
    this.editData.location = this.editBranchForm.controls['location'].value;
  }

  // Editing branch function
  editBranches() {
    this.isLoading = true;
    this.buildEdit();
    this.auth.update('branch', this.branch.id, this.editData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getBranches();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }

  // Confirming Delete function

  confirmAlert(ev) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, branch data would be lost',
      type: 'warning',
      // showCloseButton: true,
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        // Swal.fire('', 'Poof! Your imaginary file has been deleted!', 'success');
        this.deleteBranch(ev);
      }
    });
  }

  // Delete branch function
  deleteBranch(ev) {
    this.isLoading = true;
    this.auth.destroy('branch', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getBranches();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
}
