import { Component, Input } from '@angular/core';
import { ProductOnCart } from '../../interfaces/product';

@Component({
  selector: 'app-product-resume-tile',
  templateUrl: './product-resume-tile.component.html',
  styleUrls: ['./product-resume-tile.component.scss'],
})
export class ProductResumeTileComponent {

  @Input() product: ProductOnCart;

  constructor() { }

}
