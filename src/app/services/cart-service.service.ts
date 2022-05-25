import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product, ProductOnCart } from '../interfaces/product';
// TODO: make everything using rxjs, BehaviorSubject, Subject 
@Injectable({
  providedIn: 'root',
})
export class CartService {


  public productsOnCart$: BehaviorSubject<ProductOnCart[]> = 
  new BehaviorSubject<ProductOnCart[]>([]);



  // productsOnCart: ProductOnCart[] = [];

  constructor() {}

  isEmpty(): boolean {
    // return this.productsOnCart.length === 0;
    return this.productsOnCart$.getValue().length === 0;
  }

  addProduct(product: Product) {
    const item: ProductOnCart = {
      product,
      subtotal: product.price,
      count: 1
    };

    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();

    this.productsOnCart$.next([...currentState, item])

    // this.productsOnCart.push(item);
  }

  removeProduct(product: Product) {
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();

    const filteredList = currentState.filter((v) => v.product.id !== product.id);

    this.productsOnCart$.next([...filteredList])


    // this.productsOnCart.forEach( (item, index) => {
    //   if(item.product.id === product.id){
    //     this.productsOnCart.splice(index,1);
    //   }
    // });
  }

  isProductOnCart(product: Product): boolean{
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();
    return currentState.some((x) => x.product.id === product.id);
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
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();
     return currentState.map((product) => product.subtotal).reduce((p,c) => p + c, 0);


    // this.productsOnCart.forEach(product =>{
    //   total = total + product.subtotal;
    // });

    // return total;
  }
}
