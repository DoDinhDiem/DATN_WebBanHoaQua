import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BlogCategoryComponent } from './blog-category.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: BlogCategoryComponent }]),
    ],
    exports: [RouterModule],
})
export class BlogCategoryModule {}
