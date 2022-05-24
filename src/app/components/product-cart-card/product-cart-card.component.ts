import { Component, Input } from '@angular/core';
import { Product, ProductOnCart } from 'src/app/interfaces/product';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-product-cart-card',
  templateUrl: './product-cart-card.component.html',
  styleUrls: ['./product-cart-card.component.scss'],
})
export class ProductCartCardComponent {

  @Input() product: ProductOnCart;

  constructor(private cart: CartService) { }

  deleteProduct(){
    this.cart.removeProduct(this.product.product);
  }
  incrementProduct(){
    this.cart.incrementProductCount(this.product);
  }
  decrementProduct(){
    this.cart.decrementProductCount(this.product);
  }

}
