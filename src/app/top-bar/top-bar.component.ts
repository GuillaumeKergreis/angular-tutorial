import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  itemNumber: string;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.cartService.getItemsObservable().subscribe(items => {
      this.itemNumber = items.length.toString();
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
