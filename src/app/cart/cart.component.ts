import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;
  totalOrderAmount: number;
  checkoutForm;
  totalAmount: number;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.totalOrderAmount = this.items.reduce((a, b) => a + b.price, 0);
    this.cartService.getTotalAmount().subscribe(() => {
       this.totalAmount = this.totalOrderAmount + this.cartService.shippingCosts.value;
    });
  }

  clearCart(): void {
    this.items = this.cartService.clearCart();
    this.totalOrderAmount = 0;
  }

  onSubmit(customerData): void {
    console.warn('Your order has been submitted', customerData, this.items, 'Shipping : ' + this.cartService.shippingCosts.value);
    this.clearCart();
    this.checkoutForm.reset();
  }

}
