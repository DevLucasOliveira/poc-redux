import { CartModel } from './../../models/cart.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<{cart: CartModel}>
  ) {
    this.cart$ = store.pipe(select('cart'));
   }

  ngOnInit() {
  }

}
