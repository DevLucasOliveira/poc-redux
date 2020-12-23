import { Observable } from 'rxjs';
import { cart } from './../reducers/cart.reducer';
import { Component } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cart$: Observable<CartModel>;

  constructor(
    private store: Store<{cart: CartModel}>
    ){
      this.cart$ = store.pipe(select('cart'));
    }

}
