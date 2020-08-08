import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";
import { AlertService } from "../../../services/alert.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import { parseBusinessHours } from "@fullcalendar/core";
import { parseBounds } from "html2canvas/dist/types/css/layout/bounds";
import { parseLazyRoute } from "@angular/compiler/src/aot/lazy_routes";
import html2canvas from "html2canvas";
import * as jspdf from "jspdf";
@Component({
  selector: "app-sales-shop",
  templateUrl: "./sales-shop.component.html",
  styleUrls: ["./sales-shop.component.scss"],
})
export class SalesShopComponent implements OnInit {
  dtOptions: any = {};

  isLoading = false;
  isFound = false;
  isInfo = false;
  isSearching = false;
  searchList = null;
  search = "";
  isAgent = false;
  isWalkin = false;
  showDeposit = false;
  isAdding = false;
  isFinding = true;

  searchForm: FormGroup;
  salesForm: FormGroup;
  tranForm: FormGroup;

  transaction_number: any;
  comData: any;

  allDeposits: any;
  allAgents: any;
  deposits: any;
  depositor: any;
  allDepositors: any;
  account_number: string;
  dailyDeposits = 0;
  accountDetails: any;
  depositorCount = 0;
  agentAmount = null;
  notice = false;
  isAmount = false;
  salesItems: any;
  itemPrice = null;
  initPrice = null;
  stock = null;

  amount_paid: any;

  total = 0;
  finalProfit = 0;
  cost: number;

  products = [];

  // Fields to clear
  product = null;
  quantity = null;
  item = null;

  allSales = null;
  Depos = null;
  allStaff: any;
  allBranches: any;
  saleDetails: any;
  stockQuantity = null;

  date = localStorage.getItem("session");

  sales = {
    transaction_number: "",
    branch_id: "",
    issued_by: "",
    account_number: "",
    customer_name: "",
    initial_product_name: "",
    initial_product_brand: "",
    initial_product_price: "",
    amount_paid: "",
    products: [],
    total: null,
    session_date: this.date,
  };

  constructor(
    private auth: AuthenticationService,
    private alert: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = formBuilder.group({
      account_number: [null, Validators.compose([Validators.required])],
      search: [null],
    });

    this.tranForm = formBuilder.group({
      transaction_number: [null, Validators.compose([Validators.required])],
    });

    // New Debtor Form
    this.salesForm = formBuilder.group({
      transaction_number: [null],
      account_number: [null, Validators.compose([Validators.required])],
      name: [null, Validators.compose([Validators.required])],
      product_name: [null, Validators.compose([Validators.required])],
      product_brand: [null, Validators.compose([Validators.required])],
      product: [null, Validators.compose([Validators.required])],
      quantity: [null, Validators.compose([Validators.required])],
      stock: [null, Validators.compose([Validators.required])],
      product_price: [null, Validators.compose([Validators.required])],
      amount_paid: [null, Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
      final_product_price: [null, Validators.compose([Validators.required])],
      search: [null],
    });
  }

  ngOnInit() {
    this.dtOptions = {
      searching: false,
    };
    this.getDepositors();
    this.getBranchSales();
  }

  getBranchSales() {
    const data = {
      branch_id: localStorage.getItem("branch"),
      session_date: localStorage.getItem("session"),
    };

    // console.log(data);
    this.auth.store("branch_sales_shop", data).subscribe(
      (response) => {
        console.log(response["data"]);
        if (response["data"] !== null || response["data"] !== undefined) {
          this.allSales = response["data"];
          this.isLoading = false;
        }
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }

  getStaff() {
    this.auth.get("user").subscribe(
      (response) => {
        if (response["user"] !== null || response["user"] !== undefined) {
          this.allStaff = response["user"];
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getDepositors() {
    this.isLoading = true;
    this.auth
      .show("branch_depositors", localStorage.getItem("branch"))
      .subscribe(
        (response) => {
          // console.log(response['data']);
          if (response["data"].length > 0) {
            this.Depos = response["data"];
            this.isLoading = false;
          } else {
            this.isLoading = false;
            this.alert.info("No Depositor Account available yet");
          }
        },
        (error) => {
          this.isLoading = false;
          console.log(error);
          this.alert.error("Error getting Customer Deposit Records");
        }
      );
  }

  getBranches() {
    this.isLoading = true;
    this.auth.get("branch").subscribe(
      (response) => {
        if (response["data"].length > 0) {
          this.allBranches = response["data"];
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.alert.info("No branches created yet");
        }
      },
      (error) => {
        this.isLoading = false;
        this.alert.error(error["message"]);
      }
    );
  }

  getAccountNumber() {
    this.auth.get("sales_tran_number").subscribe(
      (response) => {
        // console.log('Tran Num: ', response['data']);
        if (response["data"] !== null || response["data"] !== undefined) {
          this.transaction_number = response["data"];
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // getting account details using account number as id
  getClient() {
    const id = this.searchForm.controls["account_number"].value;

    this.auth.show("search_depositor", id).subscribe(
      (response) => {
        // console.log(response['data']);
        // this.isLoading = false;
        this.accountDetails = response["data"][0];
        this.getRecords(id);
        this.prepareDepForm();
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning("Error getting Customer Acoount Details");
      }
    );
  }

  getRecords(id) {
    this.auth.show("amount_paid", id).subscribe(
      (response) => {
        // console.log(response['data']);
        if (response["data"] === null) {
          this.amount_paid = 0;
          this.prepareAddAmount();
          this.getSalesItems(this.amount_paid);
        } else if (response["data"] === undefined) {
          this.alert.warning(
            "Customer balance not retrieved. Please try again later"
          );
        } else if (
          response["data"] !== null ||
          response["data"] !== undefined
        ) {
          this.amount_paid = response["data"]["balance"];
          this.prepareAddAmount();
          this.getSalesItems(this.amount_paid);
        }
      },
      (error) => {
        console.log(error);
        this.alert.warning("Could not get customer deposit records");
      }
    );
  }

  prepareAddAmount() {
    this.salesForm.get("amount_paid").setValue(this.amount_paid);
  }

  getSalesItems(id) {
    const data = {
      branch_id: localStorage.getItem("branch"),
      cost_price: id,
    };
    // console.log(data);

    this.auth.store("sales_items", data).subscribe(
      (response) => {
        //  console.log(response['data']);
        this.salesItems = response["data"];
        //  this.isAmount = true;
      },
      (error) => {
        console.log(error);
        this.alert.warning("Could not get Branch Products");
      }
    );
  }

  prepareDepForm() {
    this.salesForm
      .get("account_number")
      .setValue(this.accountDetails.account_number);
    this.salesForm.get("name").setValue(this.accountDetails.name);
    this.salesForm
      .get("product_price")
      .setValue(this.accountDetails.product_price);
    this.salesForm
      .get("product_name")
      .setValue(this.accountDetails.product_name);
    this.salesForm.get("amount").setValue(this.accountDetails.amount);
  }

  getItemInfo(id) {
    this.auth.show("branch_product", id).subscribe(
      (response) => {
        //  console.log(response['data']);
        this.itemPrice = response["data"]["cost_price"];
        this.initPrice = response["data"]["cost_price"];
        this.stock = response["data"]["quantity"];
        this.isAmount = true;
      },
      (error) => {
        console.log(error);
        this.alert.warning("Server Issues, Please Try Again");
      }
    );
  }

  resetFields() {
    this.product = null;
    this.quantity = null;
    this.item = null;
    this.isAmount = false;
    this.quantity = null;
    this.stock = null;
    this.item = null;
    this.searchList = null;
    this.isInfo = false;
    this.isFound = false;
    this.search = "";
  }

  clear() {
    this.products = [];
    this.total = 0;
    this.finalProfit = 0;
    this.isAmount = false;
    this.quantity = null;
    this.stock = null;
    this.item = null;
    this.product = null;
    this.isFinding = true;
  }

  pushToProducts() {
    this.isAdding = true;
    const id = this.salesForm.controls["product"].value;
    const quantity = this.salesForm.controls["quantity"].value;
    const cp = this.salesForm.controls["final_product_price"].value;
    // console.log(quantity, id);

    this.auth.show("branch_product", id).subscribe(
      (response) => {
        // console.log(response['data']);
        if (response["data"] !== null || response["data"] !== undefined) {
          this.item = response["data"];
          // const cp = parseFloat(this.item.selling_price);
          const total = quantity * cp;
          const initpro = quantity * this.initPrice;
          const finalProfit = total - initpro;

          // Pushing item details to Product Array
          this.products.push({
            id: this.item.product_id,
            name: this.item.product,
            cost: cp,
            quantity: quantity,
            total: total,
            initial_cost: this.initPrice,
            initial_sales: initpro,
            profit: finalProfit,
          });
          this.isAdding = false;
          this.total = this.total + total;
          this.finalProfit = this.finalProfit + finalProfit;

          // console.log(this.products);
        }
        this.resetFields();
        this.isAdding = false;
      },
      (error) => {
        console.error(error);
        this.resetFields();
        this.isAdding = false;
      }
    );
  }

  buildData() {
    this.sales.transaction_number = this.transaction_number;
    this.sales.branch_id = localStorage.getItem("branch");
    this.sales.issued_by = localStorage.getItem("userID");
    this.sales.account_number = this.accountDetails.account_number;
    this.sales.customer_name = this.accountDetails.name;
    this.sales.initial_product_name = this.accountDetails.product_name;
    this.sales.initial_product_brand = this.accountDetails.product_brand;
    this.sales.initial_product_price = this.accountDetails.product_price;
    this.sales.amount_paid = this.amount_paid;
    this.sales.products = this.products;
    this.sales.total = this.total;
  }

  // Issue Items to Customer
  issueSales() {
    this.isLoading = true;
    this.buildData();
    // console.log(this.sales);
    this.auth.store("sales_shop", this.sales).subscribe(
      (response) => {
        this.isLoading = false;
        this.alert.success(response["message"]);
        this.allSales = null;
        this.getBranchSales();
        this.total = null;
        this.products = [];
      },
      (error) => {
        this.isLoading = false;
        this.alert.error("Could not save to databse");
      }
    );
  }

  getTransaction() {
    this.isLoading = true;
    const id = this.tranForm.controls["transaction_number"].value;
    this.auth.show("sales_transaction", id).subscribe(
      (response) => {
        // console.log(response['data']);
        this.allSales = response["data"];
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.alert.warning("Error getting Transaction Information");
      }
    );
  }

  view(ev) {
    this.auth.show("sales_shop", ev).subscribe(
      (response) => {
        // console.log(response["data"]);
        this.saleDetails = response["data"];
      },
      (error) => {
        // this.isloading = false;
        console.log(error);
        this.alert.warning("Error Loading Data");
      }
    );
  }

  public captureScreen(name) {
    const data = document.getElementById("contentToConvert");
    html2canvas(data).then((canvas) => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save(`Sales Shop - ${name}.pdf`); // Generated PDF
    });
  }

  searchProducts(data) {
    this.isSearching = true;
    if (this.search === "") {
      this.clearSearch();
    } else if (data === "" || data === null) {
      this.clearSearch();
      this.isSearching = false;
      return;
    } else {
      const search = {
        query: data,
        branch_id: localStorage.getItem("branch"),
      };

      // console.log(search);

      this.auth.store("branch_stock_search", search).subscribe(
        (response) => {
          // console.log(response['data']);
          if (response["data"].length > 0) {
            this.isInfo = false;
            this.searchList = response["data"];
            this.isSearching = false;
            this.isFound = true;
          } else {
            this.searchList = null;
            this.isFound = false;
            this.isInfo = true;
            this.isSearching = false;
          }
        },
        (error) => {
          // console.log(error);
          this.searchList = null;
          this.isSearching = false;
        }
      );
    }
  }

  clearSearch() {
    this.isInfo = false;
    this.isFound = false;
    this.searchList = null;
    this.isSearching = false;
    this.isAmount = false;
    this.stock = null;
  }

  searchDepositors(data) {
    this.isSearching = true;
    if (this.search === "") {
      this.clearUserSearch();
    } else if (data === "" || data === null) {
      this.clearUserSearch();
      this.isSearching = false;
      return;
    } else {
      const search = {
        query: data,
        branch_id: localStorage.getItem("branch"),
      };

      this.auth.store("branch_search_depositor", search).subscribe(
        (response) => {
          // console.log(response['data']);
          if (response["data"].length > 0) {
            this.isInfo = false;
            this.searchList = response["data"];
            this.isSearching = false;
            this.isFound = true;
            this.isFinding = false;
          } else {
            this.searchList = null;
            this.isFound = false;
            this.isInfo = true;
            this.isSearching = false;
          }
        },
        (error) => {
          // console.log(error);
          this.searchList = null;
          this.isSearching = false;
        }
      );
    }
  }

  clearUserSearch() {
    this.isInfo = false;
    this.isFound = false;
    this.searchList = null;
    this.isSearching = false;
  }
}
