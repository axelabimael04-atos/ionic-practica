import { Injectable } from '@angular/core';
import { Product, ProductOnCart } from '../interfaces/product';
// TODO: make everything using rxjs, BehaviorSubject, Subject 
@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsOnCart: ProductOnCart[] = [];

  constructor() {}

  isEmpty(): boolean {
    return this.productsOnCart.length === 0;
  }

  addProduct(product: Product) {
    const item: ProductOnCart = {
      product,
      subtotal: product.price,
      count: 1
    };

    this.productsOnCart.push(item);
  }

  removeProduct(product: Product) {
    this.productsOnCart = this.productsOnCart.filter((v) => v.product.id !== product.id);
    // this.productsOnCart.forEach( (item, index) => {
    //   if(item.product.id === product.id){
    //     this.productsOnCart.splice(index,1);
    //   }
    // });
  }

  isProductOnCart(product: Product): boolean{
    return this.productsOnCart.some((x) => x.product.id === product.id);
  }

  incrementProductCount(product: ProductOnCart){
    product.count++;
    product.subtotal =  product.count* product.product.price;
  }
  decrementProductCount(product: ProductOnCart){
    if(product.count>1){
      product.count--;
      product.subtotal =  product.count* product.product.price;
    }
  }
  totalCart(): number{
     return this.productsOnCart.map((product) => product.subtotal).reduce((p,c) => p + c, 0);


    // this.productsOnCart.forEach(product =>{
    //   total = total + product.subtotal;
    // });

    // return total;
  }
}
