import { Component } from '@angular/core';
import { Product, ProductOnCart } from '../interfaces/product';
import { CartService } from '../services/cart-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public cart: CartService) {}


}
