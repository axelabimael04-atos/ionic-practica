import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Product, ProductOnCart } from '../interfaces/product';
import { map, take } from 'rxjs/operators';
// TODO: make everything using rxjs, BehaviorSubject, Subject 
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public productsOnCart$: BehaviorSubject<ProductOnCart[]> = new BehaviorSubject<ProductOnCart[]>([]); // * @;
  // * @ A > subscription  @BH
  // * @ BH != A 
  // * @
  constructor() {
    this.productsOnCart$.subscribe({
      next: (newState) => {
        console.log(newState);
      }
    })
  }

  public isEmpty(): boolean {
    return this.productsOnCart$.getValue().length === 0;
  }

  public addProduct(product: Product): void {
    const item: ProductOnCart = {
      product,
      subtotal: product.price,
      count: 1
    }; // * @ crea un nuevo object > newState slice
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue(); // * @ actualState
    this.productsOnCart$.next([...currentState, item]); // * @1  > newState creation  @ 2 > set newState, 
  }

  removeProduct(product: Product) {
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();
    const filteredList = currentState.filter((v) => v.product.id !== product.id);
    this.productsOnCart$.next([...filteredList]);
  }

  isProductOnCart(product: Product): boolean {
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();
    return currentState.some((x) => x.product.id === product.id);
  }

  incrementProductCount({product}: ProductOnCart) {
    // product.count++;
    // product.subtotal = product.count * product.product.price;
    this.productsOnCart$.asObservable().pipe(
      take(1),
      map((productList) => {
        let myIndex: number = null;
        productList.find(({ product: mySavedProduct }, k) => {
          const match: boolean = mySavedProduct.id === product.id;
          if (match) {
            myIndex = k;
          }
          return match;
        });
        if (typeof myIndex === 'number') {
          productList[myIndex].count++;
          productList[myIndex].subtotal = productList[myIndex].count * productList[myIndex].product.price;
        }
        return productList;
      }),
    ).subscribe({
      next: (newCartState) => {
        this.productsOnCart$.next(newCartState);
      } 
    })
  }

  decrementProductCount({ product }: ProductOnCart) {
    this.productsOnCart$.asObservable().pipe(
      take(1),
      map((productList) => {
        let myIndex: number = null;
        productList.find(({ product: mySavedProduct }, k) => {
          const match: boolean = mySavedProduct.id === product.id;
          if (match) {
            myIndex = k;
          }
          return match;
        });
        if (typeof myIndex === 'number') {
          productList[myIndex].count--;
          productList[myIndex].subtotal = productList[myIndex].count * productList[myIndex].product.price;
        }
        return productList;
      }),
    ).subscribe({
      next: (newCartState) => {
        this.productsOnCart$.next(newCartState);
      } 
    })
    // * @ A -> B => A == emi


    // if (product.count > 1) {
    //   product.count--;
    //   product.subtotal = product.count * product.product.price;
    // }
  }
  totalCart(): number {
    const currentState: ProductOnCart[] = this.productsOnCart$.getValue();
    return currentState.map((product) => product.subtotal).reduce((p, c) => p + c, 0);


    // this.productsOnCart.forEach(product =>{
    //   total = total + product.subtotal;
    // });

    // return total;
  }
}
