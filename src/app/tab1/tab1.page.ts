/* eslint-disable max-len */
import { Component, ViewEncapsulation } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab1Page {
  products: Product[] = [
    {
      id: 1,
      name: 'Camarones roca',
      description: 'Camarón crujiente + aderezo spicy',
      price: 15000,
      img: 'https://firebasestorage.googleapis.com/v0/b/project-quick-trip.appspot.com/o/er0pfDGmOWpsTbjxoP8L%2Fproducts%2Froca.jpeg?alt=media&token=86181260-9dcb-4c92-bf26-f9500d0a8619',
    },

    {
      id: 2,
      name: 'Tortuga Roll',
      description:
        'Atún + Pepino + Aguacate + Queso crema. Empanizado con topping de tampico spicy + camarón empanizado con salsa de anguila',
      price: 185,
      img: 'https://firebasestorage.googleapis.com/v0/b/project-quick-trip.appspot.com/o/er0pfDGmOWpsTbjxoP8L%2Fproducts%2Ftortuga_roll.jpeg?alt=media&token=4416997d-17dd-4ebc-b42f-b16234ac5ea7',
    },

    {
      id: 3,
      name: 'Tacos Triton',
      description: 'Arrachera + Camarón + Costra de queso + Aguacate',
      price: 239,
      img: 'https://firebasestorage.googleapis.com/v0/b/project-quick-trip.appspot.com/o/er0pfDGmOWpsTbjxoP8L%2Fproducts%2Fel%20triton.jpeg?alt=media&token=c6adaaf0-da23-4898-a5ba-9f97ecf2b578',
    },
    {
      id: 4,
      name: 'Tablita de Pulpo',
      price: 542,
      description: 'Pulpo entero a las brasas + papas bravas + ensalada',
      img: 'https://firebasestorage.googleapis.com/v0/b/project-quick-trip.appspot.com/o/er0pfDGmOWpsTbjxoP8L%2Fproducts%2Ftablita_pulpo.jpeg?alt=media&token=f2462728-d44b-4f40-97af-3106386be946',
    },

    {
      id: 5,
      name: 'Jack Burger',
      price: 180,
      description:
        'Carne, BBQ, aros de cebolla, tocino, queso, papas francesas.',
      img: 'https://firebasestorage.googleapis.com/v0/b/project-quick-trip.appspot.com/o/er0pfDGmOWpsTbjxoP8L%2Fproducts%2Fjack_burger.jpeg?alt=media&token=6f5fcd82-160c-4856-8107-40466e687c47',
    },
  ];

  constructor() {}
}
