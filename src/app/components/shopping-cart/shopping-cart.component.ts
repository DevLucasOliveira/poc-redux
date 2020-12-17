import { Clear } from './../../actions/cart.action';
import { select, Store } from '@ngrx/store';
import { CartModel } from './../../models/cart.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Remove } from 'src/app/actions/cart.action';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor(
    private alertCtrl: AlertController,
    private store: Store<{cart: CartModel}>
  ) {
    this.cart$ = store.pipe(select('cart'));
   }

  ngOnInit() {}

  remove(item){
    this.store.dispatch(Remove(item));
  }

  reset(){
    this.store.dispatch(Clear());
  }

  async presentRemoveConfirm(item) {
    const alert = await this.alertCtrl.create({
      header: 'Remover item',
      message: `Deseja remover o item ${item.title}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
        }, {
          text: 'Remover',
          handler: () => {
            this.remove(item);
          }
        }
      ]
    });

    await alert.present();
  }

}
