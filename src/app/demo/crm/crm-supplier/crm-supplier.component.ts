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
  selector: 'app-crm-supplier',
  templateUrl: './crm-supplier.component.html',
  styleUrls: ['./crm-supplier.component.scss']
})
export class CrmSupplierComponent implements OnInit {
  isLoading = false;
  allSuppliers: any;
  supplier: any;

  suppliersForm: FormGroup;
  editSuppliersForm: FormGroup;

  suppliersData = {
    name: '',
    address: '',
    contact: ''
  };

  editData = {
    name: '',
    address: '',
    contact: ''
  };
  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // New Discount Rate Form
    this.suppliersForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      contact: [null, Validators.compose([Validators.required])]
    });

    // Edit Discount Rate Form
    this.editSuppliersForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      contact: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.getSupplier();
  }

  getSupplier() {
    this.isLoading = true;
    this.auth.get('supplier').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allSuppliers = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No Supplier created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  buildSupplier() {
    this.suppliersData.name = this.suppliersForm.controls['name'].value;
    this.suppliersData.address = this.suppliersForm.controls['address'].value;
    this.suppliersData.contact = this.suppliersForm.controls['contact'].value;
  }

  createSupplier() {
    this.isLoading = true;
    this.buildSupplier();
    this.auth.store('supplier', this.suppliersData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getSupplier();
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
    this.auth.show('supplier', ev).subscribe(
      response => {
        console.log(response['data']);
        // this.isLoading = false;
        this.supplier = response['data'];
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
    this.editSuppliersForm.get('name').setValue(this.supplier.name);
    this.editSuppliersForm.get('address').setValue(this.supplier.address);
    this.editSuppliersForm.get('contact').setValue(this.supplier.contact);
  }

  buildEdit() {
    this.editData.name = this.editSuppliersForm.controls['name'].value;
    this.editData.address = this.editSuppliersForm.controls['address'].value;
    this.editData.contact = this.editSuppliersForm.controls['contact'].value;
  }

  editSuppliers() {
    this.isLoading = true;
    this.buildEdit();
    this.auth.update('supplier', this.supplier.id, this.editData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getSupplier();
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
      text: 'Once deleted, Supplier data would be lost',
      type: 'warning',
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.deleteSupplier(ev);
      }
    });
  }
  deleteSupplier(ev) {
    this.isLoading = true;
    this.auth.destroy('supplier', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getSupplier();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
}
