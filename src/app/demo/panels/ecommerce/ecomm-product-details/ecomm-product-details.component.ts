import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomm-product-details',
  templateUrl: './ecomm-product-details.component.html',
  styleUrls: ['./ecomm-product-details.component.scss']
})
export class EcommProductDetailsComponent implements OnInit {
  public viewImage: number;
  constructor() {
    this.viewImage = 1;
  }

  ngOnInit() {
  }

}
