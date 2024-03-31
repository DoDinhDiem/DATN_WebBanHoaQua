import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KhachHangComponent } from './khach-hang.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: KhachHangComponent }]),
    ],
    exports: [RouterModule],
})
export class KhachHangModule {}
