import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewCartComponent } from './view-cart.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ViewCartComponent }]),
    ],
    exports: [RouterModule],
})
export class ViewCartModule {}
