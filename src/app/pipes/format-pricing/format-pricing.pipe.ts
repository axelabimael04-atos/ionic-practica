import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPricing'
})
export class FormatPricingPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const fromatedPrice = this.numberWithCommas(value);
    return `$ ${fromatedPrice} MXN`;
  }

  numberWithCommas(x: String) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}