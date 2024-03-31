import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: ProductCategoryComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class ProductCategoryModule {}
