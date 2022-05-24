import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCartCardComponent } from './product-cart-card/product-cart-card.component';
import { ProductResumeTileComponent } from './product-resume-tile/product-resume-tile.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCartCardComponent,
    ProductResumeTileComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ProductCardComponent,
    ProductCartCardComponent,
    ProductResumeTileComponent,
    SignInComponent
  ]
})
export class ComponentsModule { }
