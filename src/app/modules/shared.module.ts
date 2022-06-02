import { NgModule } from "@angular/core";
import { FormatPricingPipe } from "../pipes/format-pricing/format-pricing.pipe";

@NgModule({
    declarations: [
        FormatPricingPipe,
    ],
    exports: [
        FormatPricingPipe
    ],
}) export class SharedModule { }