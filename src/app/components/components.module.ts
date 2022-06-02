import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductCartCardComponent } from './product-cart-card/product-cart-card.component';
import { ProductResumeTileComponent } from './product-resume-tile/product-resume-tile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../modules/shared.module';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCartCardComponent,
    ProductResumeTileComponent,
    SignInComponent, 
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ProductCardComponent,
    ProductCartCardComponent,
    ProductResumeTileComponent,
    SignInComponent
  ]
})
export class ComponentsModule { }
