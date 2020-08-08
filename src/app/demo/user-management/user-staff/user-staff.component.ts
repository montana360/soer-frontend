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
  selector: 'app-user-staff',
  templateUrl: './user-staff.component.html',
  styleUrls: ['./user-staff.component.scss']
})
export class UserStaffComponent implements OnInit {
  isLoading = false;

  staffForm: FormGroup;
  editStaffForm: FormGroup;

  staff: any;
  allStaff: any;
  permissions: any;
  branches: any;

  staffData = {
    branch_id: '',
    first_name: '',
    last_name: '',
    gender: '',
    role: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
    status: '',
    // user_id: '',
    reverse_transaction: '',
    inventory: '',
    sales_report: '',
    cash_report: '',
    stock_report: '',
    transaction_menu: '',
    setup: '',
    crm: '',
    work_order: '',
    sm_master_report: ''
  };

  staffEditData = {
    branch_id: '',
    first_name: '',
    last_name: '',
    gender: '',
    role: '',
    email: '',
    phone: '',
    password: '',
    status: '',
    reverse_transaction: '',
    inventory: '',
    sales_report: '',
    cash_report: '',
    stock_report: '',
    transaction_menu: '',
    setup: '',
    crm: '',
    work_order: '',
    sm_master_report: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // New Staff Form
    this.staffForm = formBuilder.group(
      {
        branch_id: [null, Validators.required],
        first_name: [null, Validators.required],
        last_name: [null, Validators.required],
        gender: [null, Validators.required],
        role: [null, Validators.required],
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
          Validators.compose([
            null,
            Validators.required,
            Validators.minLength(10)
          ])
        ],
        status: [null, Validators.required],
        password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(5)])
        ],
        confirm_password: [
          null,
          Validators.compose([Validators.required, Validators.minLength(5)])
        ],
        reverse_transaction: [],
        inventory: [],
        sales_report: [],
        cash_report: [],
        stock_report: [],
        transaction_menu: [],
        setup: [],
        crm: [],
        work_order: [],
        sm_master_report: []
      },
      {
        validator: this.isMatching // your validation method
      }
    );

    this.editStaffForm = formBuilder.group({
      branch_id: [null, Validators.required],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      gender: [null, Validators.required],
      role: [null, Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ],
      phone: [
        Validators.compose([
          null,
          Validators.required,
          Validators.minLength(10)
        ])
      ],
      status: [null, Validators.required],
      reverse_transaction: [],
      inventory: [],
      sales_report: [],
      cash_report: [],
      stock_report: [],
      transaction_menu: [],
      setup: [],
      crm: [],
      work_order: [],
      sm_master_report: []
    });
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
    this.getBranches();
    this.getStaff();
  }

  // Getting all current branches of KCC
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

  // Get the list of all staff
  getStaff() {
    this.isLoading = true;
    this.auth.get('get_staff').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allStaff = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Staff account created yet');
        }
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  // Building new staff data
  buildData() {
    this.staffData.branch_id = this.staffForm.controls['branch_id'].value;
    this.staffData.first_name = this.staffForm.controls['first_name'].value;
    this.staffData.last_name = this.staffForm.controls['last_name'].value;
    this.staffData.gender = this.staffForm.controls['gender'].value;
    this.staffData.role = this.staffForm.controls['role'].value;
    this.staffData.email = this.staffForm.controls['email'].value;
    this.staffData.phone = this.staffForm.controls['phone'].value;
    this.staffData.password = this.staffForm.controls['password'].value;
    this.staffData.status = this.staffForm.controls['status'].value;
    this.staffData.reverse_transaction = this.staffForm.controls[
      'reverse_transaction'
    ].value;
    this.staffData.inventory = this.staffForm.controls['inventory'].value;
    this.staffData.sales_report = this.staffForm.controls['sales_report'].value;
    this.staffData.cash_report = this.staffForm.controls['cash_report'].value;
    this.staffData.stock_report = this.staffForm.controls['stock_report'].value;
    this.staffData.transaction_menu = this.staffForm.controls[
      'transaction_menu'
    ].value;
    this.staffData.setup = this.staffForm.controls['setup'].value;
    this.staffData.crm = this.staffForm.controls['crm'].value;
    this.staffData.work_order = this.staffForm.controls['work_order'].value;
    this.staffData.sm_master_report = this.staffForm.controls[
      'sm_master_report'
    ].value;
  }

  // Functionality for creating a new staff
  createStaff() {
    this.isLoading = true;
    this.buildData();
    // this.isLoading = false;
    this.auth.store('create_staff', this.staffData).subscribe(
      response => {
        // console.log(response);
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getStaff();
      },
      error => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }

  // Confirming Staff Delete
  confirmAlert(ev) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, Staff Account details would be lost!',
      type: 'warning',
      // showCloseButton: true,
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.delete(ev);
      }
    });
  }

  // Deleting Staff Account
  delete(id) {
    this.isLoading = true;
    this.auth.destroy('user', id).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getStaff();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }

  // Getting basic staff information
  edit(ev) {
    this.isLoading = true;
    this.auth.show('user', ev).subscribe(
      response => {
        this.isLoading = false;
        this.staff = response['user'];
        this.getPermissions(ev);
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning(error['error']['message']);
      }
    );
  }

  // Getting Staff Permissions
  getPermissions(id) {
    this.auth.show('permissions', id).subscribe(
      response => {
        // this.isLoading = false;
        this.permissions = response['data'][0];
        this.prepareEditForm();
      },
      error => {
        console.log(error);
        // this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }

  // Setting Edit form data with the staff account and permissions data
  prepareEditForm() {
    this.editStaffForm.get('branch_id').setValue(this.staff.branch_id);
    this.editStaffForm.get('first_name').setValue(this.staff.first_name);
    this.editStaffForm.get('last_name').setValue(this.staff.last_name);
    this.editStaffForm.get('gender').setValue(this.staff.gender);
    this.editStaffForm.get('role').setValue(this.staff.role);
    this.editStaffForm.get('email').setValue(this.staff.email);
    this.editStaffForm.get('phone').setValue(this.staff.phone);
    this.editStaffForm.get('status').setValue(this.staff.status);
    this.editStaffForm
      .get('reverse_transaction')
      .setValue(parseInt(this.permissions.reverse_transaction, 10));
    this.editStaffForm
      .get('inventory')
      .setValue(parseInt(this.permissions.inventory, 10));
    this.editStaffForm
      .get('sales_report')
      .setValue(parseInt(this.permissions.sales_report, 10));
    this.editStaffForm
      .get('cash_report')
      .setValue(parseInt(this.permissions.cash_report, 10));
    this.editStaffForm
      .get('stock_report')
      .setValue(parseInt(this.permissions.stock_report, 10));
    this.editStaffForm
      .get('transaction_menu')
      .setValue(parseInt(this.permissions.transaction_menu, 10));
    this.editStaffForm
      .get('setup')
      .setValue(parseInt(this.permissions.setup, 10));
    this.editStaffForm.get('crm').setValue(parseInt(this.permissions.crm, 10));
    this.editStaffForm
      .get('work_order')
      .setValue(parseInt(this.permissions.work_order, 10));
    this.editStaffForm
      .get('sm_master_report')
      .setValue(parseInt(this.permissions.sm_master_report, 10));
  }

  // Building Staff Edit Data
  buildEditData() {
    this.staffEditData.branch_id = this.editStaffForm.controls[
      'branch_id'
    ].value;
    this.staffEditData.first_name = this.editStaffForm.controls[
      'first_name'
    ].value;
    this.staffEditData.last_name = this.editStaffForm.controls[
      'last_name'
    ].value;
    this.staffEditData.gender = this.editStaffForm.controls['gender'].value;
    this.staffEditData.role = this.editStaffForm.controls['role'].value;
    this.staffEditData.email = this.editStaffForm.controls['email'].value;
    this.staffEditData.phone = this.editStaffForm.controls['phone'].value;
    this.staffEditData.status = this.editStaffForm.controls['status'].value;
    this.staffEditData.reverse_transaction = this.editStaffForm.controls[
      'reverse_transaction'
    ].value;
    this.staffEditData.inventory = this.editStaffForm.controls[
      'inventory'
    ].value;
    this.staffEditData.sales_report = this.editStaffForm.controls[
      'sales_report'
    ].value;
    this.staffEditData.cash_report = this.editStaffForm.controls[
      'cash_report'
    ].value;
    this.staffEditData.stock_report = this.editStaffForm.controls[
      'stock_report'
    ].value;
    this.staffEditData.transaction_menu = this.editStaffForm.controls[
      'transaction_menu'
    ].value;
    this.staffEditData.setup = this.editStaffForm.controls['setup'].value;
    this.staffEditData.crm = this.editStaffForm.controls['crm'].value;
    this.staffEditData.work_order = this.editStaffForm.controls[
      'work_order'
    ].value;
    this.staffEditData.sm_master_report = this.editStaffForm.controls[
      'sm_master_report'
    ].value;
  }

  // Updating Staff Account functionality
  updateStaff() {
    this.isLoading = true;
    this.buildEditData();
    this.auth
      .update('update_staff', this.staff.id, this.staffEditData)
      .subscribe(
        response => {
          this.isLoading = false;
          this.alert.success(response['message']);
          this.permissions = '';
          this.getStaff();
        },
        error => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }
}
