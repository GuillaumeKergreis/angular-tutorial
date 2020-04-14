import { Injectable, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: BehaviorSubject<any[]>;
  shippingCosts: BehaviorSubject<number>;

  constructor(
    private http: HttpClient
  ) {
    this.items = new BehaviorSubject<any[]>([]);
    this.shippingCosts = new BehaviorSubject<number>(0);
  }

  addToCart(product) {
    this.items.next(this.items.value.concat(product));
  }

  getItems(): any[] {
    return this.items.value;
  }

  getItemsObservable(): Observable<any[]> {
    return this.items.asObservable();
  }

  clearCart() {
    this.items.next([]);
    this.shippingCosts.next(0);
    return this.items.value;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  getTotalAmount(): Observable<number> {
    return this.shippingCosts.asObservable();
  }
}
