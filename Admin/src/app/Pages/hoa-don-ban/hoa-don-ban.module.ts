import { NgModule } from '@angular/core';
import { HoaDonBanComponent } from './hoa-don-ban.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: HoaDonBanComponent }]),
    ],
    exports: [RouterModule],
})
export class HoaDonBanModule {}
