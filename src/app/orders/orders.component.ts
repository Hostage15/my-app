import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public products = products;
  public product = "" as any;
  public price : any;
  public quantity: any;

  constructor() {}

  ngOnInit(): void {}

  addToCart(): void {
    
    products.forEach((p) => {
      if(p.name == this.product) this.price = p.price
    })
    console.log('Product: ', this.product);
    console.log('Quantity: ', this.quantity);
    console.log('Price: ', this.price);
  }
}
