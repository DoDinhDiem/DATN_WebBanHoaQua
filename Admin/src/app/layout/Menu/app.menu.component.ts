import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                ],
            },
            {
                label: 'UI Components',
                items: [
                    {
                        label: 'Loại sản phẩm',
                        icon: 'pi pi-fw pi-briefcase',
                        routerLink: ['/loaisp'],
                    },
                    {
                        label: 'Sản phẩm',
                        icon: 'pi pi-fw pi-inbox',
                        routerLink: ['/sanpham'],
                    },
                    {
                        label: 'Tin tức',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/tintuc'],
                    },
                    {
                        label: 'Nhà cung cấp',
                        icon: 'pi pi-fw pi-car',
                        routerLink: ['/nhacc'],
                    },
                    {
                        label: 'Nhân viên',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/nhanvien'],
                    },
                    {
                        label: 'Khách hàng',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/khachhang'],
                    },
                    {
                        label: 'Hóa đơn',
                        icon: 'pi pi-fw pi-shopping-bag',
                        items: [
                            {
                                label: 'Hóa đơn nhập',
                                routerLink: ['/hoadonnhap'],
                            },
                            {
                                label: 'Hóa đơn bán',
                                routerLink: ['/hoadonban'],
                            },
                        ],
                    },
                    {
                        label: 'Hệ thống',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Giới thiệu',
                                routerLink: ['/gioithieu'],
                            },
                            {
                                label: 'Liên hệ',
                                routerLink: ['/lienhe'],
                            },
                            {
                                label: 'Slide',
                                routerLink: ['/slide'],
                            },
                            {
                                label: 'Quyền',
                                routerLink: ['/role'],
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
