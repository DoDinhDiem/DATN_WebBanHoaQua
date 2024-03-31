import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProductDetailComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ProductDetailModule {}
