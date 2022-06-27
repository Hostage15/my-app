import { Component, OnInit } from '@angular/core';
import { products } from './products';
import { packaging } from './packaging';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public products = products;
  public packaging = packaging;
  public product = '' as any;
  public price: any;
  public bundlePrice = 0 as any;
  public quantity: any;
  public errorMsg = '' as any;

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    if (this.quantity > 0 && this.product != '') {
      this.errorMsg = '';
      products.forEach((p) => {
        if (p.name == this.product) {
          this.price = p.price;
        }
      });
      this.calculatePrice();
      console.log('Product: ', this.product);
      console.log('Quantity: ', this.quantity);
    } else this.errorMsg = 'Please enter both product & quantity'; // Validate input
  }

  calculatePrice(): void {
    let productBundle = [] as any;
    let selectedProductCode = '';
    this.bundlePrice = 0;
    this.products.forEach((p) => {
      if (this.product == p.name) selectedProductCode = p.code;
    });
    this.packaging.forEach((packaging) => {
      if (selectedProductCode == packaging.code) {
        productBundle.push(packaging);
      }
    });
    console.log(productBundle, 'BUNDEL');
    switch (productBundle.length) {
      case 2: //Cheese
        var remainder = this.quantity % 5;
        console.log(remainder, '%5');
        if (this.quantity >= 5) {
          if (remainder == 0) {
            this.bundlePrice = 20.95 * (this.quantity / 5);
          } else {
            this.singlePriceCE(remainder);
          }
        } else this.singlePriceCE(this.quantity)
        break;
      case 3: // Ham
        var remainder = this.quantity % 8;
        break;
      default:
        console.log('SOY S'); // Soy sauce
    }
    console.log('Bundle price: ', this.bundlePrice);
  }

  singlePriceCE(quantity: any) {
    if (quantity == 1 || quantity == 2)
      this.bundlePrice =
        ((this.quantity - quantity) / 5) * 20.95 + quantity * 5.95;
    if (quantity == 3 || quantity == 4) {
      this.bundlePrice =
        ((this.quantity - quantity) / 5) * 20.95 +
        14.95 +
        (quantity - 3) * 5.95;
      this.bundlePrice = Math.round(this.bundlePrice * 100) / 100;
    }
  }
}
