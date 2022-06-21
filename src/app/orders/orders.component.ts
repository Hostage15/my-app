import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public products = products
  constructor() {}

  ngOnInit(): void {}

  createBundle(): void {

  }
}
