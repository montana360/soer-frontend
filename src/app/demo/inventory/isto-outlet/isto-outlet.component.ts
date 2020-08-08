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
  selector: 'app-isto-outlet',
  templateUrl: './isto-outlet.component.html',
  styleUrls: ['./isto-outlet.component.scss']
})
export class IstoOutletComponent implements OnInit {
  istoForm: FormGroup;
  istoEditForm: FormGroup;

  allProducts: any;
  isLoading: boolean;
  allBranches: any;
  allStocks: any;
  allSuppliers: any;
  allIsto: any;
  allStaff: any;

  total: number;
  transaction_number: string;
  cost: number;
  quantity: number;

  istoData = {
    transaction_number: '',
    branch_id: '',
    products: '',
    total: null,
    status: '',
    receiver_id: ''
  };

  editIstoData = {
    transaction_number: '',
    branch_id: '',
    products: '',
    total: null,
    status: '',
    receiver_id: ''
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    // new isto form
    this.istoForm = formBuilder.group({
      branch_id: [null, Validators.compose([Validators.required])],
      products: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])],
      status: [null, Validators.compose([Validators.required])],
      receiver_id: [null, Validators.compose([Validators.required])]
    });

    // edit isto form
    this.istoEditForm = formBuilder.group({
      transaction_number: [null, Validators.compose([Validators.required])],
      branch_id: [null, Validators.compose([Validators.required])],
      products: [null, Validators.compose([Validators.required])],
      total: [null, Validators.compose([Validators.required])],
      status: [null, Validators.compose([Validators.required])],
      receiver_id: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
    this.getProducts();
    this.getBranches();
    this.getStock();
    this.getSupplier();
    this.getisto();
    this.getStaff();
  }

  totalPrice() {
    this.total = this.cost * this.quantity;
  }

  getisto() {
    this.isLoading = true;
    this.auth.get('isto').subscribe(
      response => {
        // console.log(response['data']);
        if (response['data'].length > 0) {
          this.allIsto = response['data'];
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
    this.istoData.transaction_number = this.transaction_number;
    this.istoData.branch_id = this.istoForm.controls['name'].value;
    this.istoData.products = this.istoForm.controls['products'].value;
    this.istoData.total = this.istoForm.controls['total'].value;
    this.istoData.status = this.istoForm.controls['status'].value;
    this.istoData.receiver_id = this.istoForm.controls['receiver_id'].value;
  }

  createIsto() {
    this.isLoading = true;
    this.buildData();
    this.auth.store('isto', this.istoData).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getisto();
        this.total = null;
      },
      error => {
        this.isLoading = false;
        this.alert.error(error['message']);
      }
    );
  }
  getProducts() {
    this.auth.get('available_products').subscribe(
      response => {
        console.log(response['data']);
        if (
          response['data'].length !== null ||
          response['data'] !== undefined
        ) {
          this.allProducts = response['data'];
        }
      },
      error => {
        console.error(error);
      }
    );
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
        this.deleteisto(ev);
      }
    });
  }

  deleteisto(ev) {
    this.isLoading = true;
    this.auth.destroy('isto', ev).subscribe(
      response => {
        this.isLoading = false;
        this.alert.success(response['message']);
        this.getisto();
      },
      error => {
        console.log(error);
        this.isLoading = false;
        this.alert.error(error['error']['message']);
      }
    );
  }
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
}
