import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.model';
import { Add } from 'src/app/actions/cart.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastrCtrl: ToastController,
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe(
      (data) => {
        this.products = data;
      });
  }

  async add(product) {
    this.store.dispatch(Add(product));
    const toast = await this.toastrCtrl.create({
      message: `${product.title} adicionado ao carrinho`,
      duration: 2000,
      position: "middle"
    });
  }

}
