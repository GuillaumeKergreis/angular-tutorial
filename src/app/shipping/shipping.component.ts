import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  chosenShippingCost: number;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  onChosenShippingChange(): void {
    this.cartService.shippingCosts.next(this.chosenShippingCost);
  }

}
