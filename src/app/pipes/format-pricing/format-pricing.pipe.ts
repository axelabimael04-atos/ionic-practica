import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPricing',
  pure: false,
})
export class FormatPricingPipe implements PipeTransform {

  transform(value: number): string {
    const formatedPrice = this.numberWithCommas(value);
    return `$ ${formatedPrice} MXN`;
  }


  numberWithCommas(valueToFormat: number) {
    return (`${valueToFormat}`).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}