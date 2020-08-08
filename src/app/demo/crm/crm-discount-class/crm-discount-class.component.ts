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
  selector: 'app-crm-discount-class',
  templateUrl: './crm-discount-class.component.html',
  styleUrls: ['./crm-discount-class.component.scss']
})
export class CrmDiscountClassComponent implements OnInit {
  isLoading = false;
  allDiscount: any;
  discount: any;

  discountForm: FormGroup;
  editDiscountForm: FormGroup;

  discountData = {
    name: '',
    rate: ''
  };

  editData = {
    name: '',
    rate: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // New Discount Rate Form
    this.discountForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      rate: [null, Validators.compose([Validators.required])]
    });

    // Edit Discount Rate Form
    this.editDiscountForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      rate: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.getDiscount();
  }

  getDiscount() {
    this.isLoading = true;
    this.auth.get('discount').subscribe(
      response => {
        if (response['data'].length > 0) {
          this.allDiscount = response['data'];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info('No discount created yet');
        }
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  buildDiscount() {
    this.discountData.name = this.discountForm.controls['name'].value;
    this.discountData.rate = this.discountForm.controls['rate'].value;
  }

  createDiscount() {
    this.isLoading = true;
    this.buildDiscount();
    this.auth.store('discount', this.discountData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getDiscount();
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
    this.auth.show('discount', ev).subscribe(
      response => {
        console.log(response['data']);
        // this.isLoading = false;
        this.discount = response['data'];
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
    this.editDiscountForm.get('name').setValue(this.discount.name);
    this.editDiscountForm.get('rate').setValue(this.discount.rate);
  }

  buildEdit() {
    this.editData.name = this.editDiscountForm.controls['name'].value;
    this.editData.rate = this.editDiscountForm.controls['rate'].value;
  }

  editDiscounts() {
    this.isLoading = true;
    this.buildEdit();
    this.auth.update('discount', this.discount.id, this.editData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getDiscount();
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
      text: 'Once deleted, discount data would be lost',
      type: 'warning',
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.deleteDiscount(ev);
      }
    });
  }
  deleteDiscount(ev) {
    this.isLoading = true;
    this.auth.destroy('discount', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getDiscount();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
}
