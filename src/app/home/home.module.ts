import { ShoppingCartComponent } from './../components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ProductListComponent } from '../components/product-list/product-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    NavbarComponent, 
    ProductListComponent, 
    ShoppingCartComponent]
})
export class HomePageModule {}
