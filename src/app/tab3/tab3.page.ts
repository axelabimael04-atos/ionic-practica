import { Component } from '@angular/core';
import { CartService } from '../services/cart-service.service';
import { ProductOnCart } from '../interfaces/product';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cart: CartService) {}

}
