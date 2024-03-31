import { Component } from '@angular/core';
import { IKhachHang } from 'src/app/Models/khach-hang';
import { KhachHangService } from 'src/app/Service/khach-hang.service';

@Component({
    selector: 'app-khach-hang',
    templateUrl: './khach-hang.component.html',
    styleUrl: './khach-hang.component.scss',
})
export class KhachHangComponent {
    title = 'Quản lý loại sản phẩm';

    khachhang!: IKhachHang;

    khachhangs!: IKhachHang[];

    constructor(private khachhangService: KhachHangService) {}
    ngOnInit(): void {
        this.loadData();
    }
    loadData() {
        this.khachhangService.getAll().subscribe((data) => {
            this.khachhangs = data;
        });
    }
}
