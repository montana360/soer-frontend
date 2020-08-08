import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { AlertService } from '../../../services/alert.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-receive-supplier',
  templateUrl: './receive-supplier.component.html',
  styleUrls: ['./receive-supplier.component.scss']
})
export class ReceiveSupplierComponent implements OnInit {
  isLoading = false;

  receiveSupplierForm: FormGroup;
  editReceiveSupplierForm: FormGroup;

  allSupplier: any;
  supplier: any;
  stock: any;
  allSuppliers: any;
  allStocks: any;

  cost: number;
  quantity: number;
  total: number;

  supplierData = {
    supplier_id: '',
    product: '',
    specification: '',
    cost_price: '',
    selling_price: '',
    quantity: '',
    total: null
  };

  editSupplierData = {
    supplier_id: '',
    product: '',
    specification: '',
    cost_price: '',
    selling_price: '',
    quantity: '',
    total: null
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // new supplier form
    this.receiveSupplierForm = formBuilder.group({
      supplier_id: [null, Validators.compose([Validators.required])],
      product: [null, Validators.compose([Validators.required])],
      specification: [null, Validators.compose([Validators.required])],
      cost_price: [null, Validators.compose([Validators.required])],
      selling_price: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])]
    });

    // edit supplier form
    this.editReceiveSupplierForm = formBuilder.group({
      supplier_id: [null, Validators.compose([Validators.required])],
      product: [null, Validators.compose([Validators.required])],
      specification: [null, Validators.compose([Validators.required])],
      cost_price: [null, Validators.compose([Validators.required])],
      selling_price: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.getSuppliers();
    this.getStock();
  }

  // Calculating total price for supplies
  totalPrice() {
    this.total = this.cost * this.quantity;
  }

  getStock() {
    this.isLoading = true;
    this.auth.get('stock').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allStocks = response['data'];
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

  buildData() {
    this.supplierData.supplier_id = this.receiveSupplierForm.controls[
      'supplier_id'
    ].value;
    this.supplierData.product = this.receiveSupplierForm.controls[
      'product'
    ].value;
    this.supplierData.specification = this.receiveSupplierForm.controls[
      'specification'
    ].value;
    this.supplierData.cost_price = this.receiveSupplierForm.controls[
      'cost_price'
    ].value;
    this.supplierData.selling_price = this.receiveSupplierForm.controls[
      'selling_price'
    ].value;
    this.supplierData.quantity = this.receiveSupplierForm.controls[
      'quantity'
    ].value;
    this.supplierData.total = this.total;
  }

  createStock() {
    this.isLoading = true;
    this.buildData();
    this.auth.store('stock', this.supplierData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getStock();
        this.total = null;
        this.cost = null;
        this.quantity = null;
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }

  edit(ev) {
    this.auth.show('stock', ev).subscribe(
      response => {
        // console.log(response['data']);
        this.stock = response['data'];
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
    this.editReceiveSupplierForm
      .get('supplier_id')
      .setValue(parseInt(this.stock.supplier_id, 10));
    this.editReceiveSupplierForm.get('product').setValue(this.stock.product);
    this.editReceiveSupplierForm
      .get('specification')
      .setValue(this.stock.specification);
    this.editReceiveSupplierForm
      .get('cost_price')
      .setValue(this.stock.cost_price);
    this.editReceiveSupplierForm
      .get('selling_price')
      .setValue(this.stock.selling_price);
    this.editReceiveSupplierForm.get('quantity').setValue(this.stock.quantity);
    this.editReceiveSupplierForm.get('total').setValue(this.stock.total);
  }

  BuildEdit() {
    this.editSupplierData.supplier_id = this.editReceiveSupplierForm.controls[
      'supplier_id'
    ].value;
    this.editSupplierData.product = this.editReceiveSupplierForm.controls[
      'product'
    ].value;
    this.editSupplierData.specification = this.editReceiveSupplierForm.controls[
      'specification'
    ].value;
    this.editSupplierData.cost_price = this.editReceiveSupplierForm.controls[
      'cost_price'
    ].value;
    this.editSupplierData.selling_price = this.editReceiveSupplierForm.controls[
      'selling_price'
    ].value;
    this.editSupplierData.quantity = this.editReceiveSupplierForm.controls[
      'quantity'
    ].value;
    this.editSupplierData.total = this.total;
  }

  editSupplier() {
    this.isLoading = true;
    this.BuildEdit();
    // console.log(this.editSupplierData);
    this.auth.update('stock', this.stock.id, this.editSupplierData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getStock();
        this.total = null;
        this.cost = null;
        this.quantity = null;
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
      text: 'Once deleted, Account data would be lost',
      type: 'warning',
      showCancelButton: true
    }).then(willDelete => {
      if (willDelete.dismiss) {
        // Swal.fire('', 'Your imaginary file is safe!', 'error');
      } else {
        this.deleteSuppliers(ev);
      }
    });
  }

  deleteSuppliers(ev) {
    this.isLoading = true;
    this.auth.destroy('stock', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getStock();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }

  getSuppliers() {
    this.isLoading = true;
    this.auth.get('supplier').subscribe(
      response => {
        console.log('Suppliers', response['data']);
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
}
