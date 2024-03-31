import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/Layout/app.layout.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Guards/Auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: AppLayoutComponent,
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('./Pages/dashboard/dashboard.module').then(
                                (m) => m.DashboardModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'loaisp',
                        loadChildren: () =>
                            import(
                                './Pages/loai-san-pham/loai-san-pham.module'
                            ).then((m) => m.LoaiSanPhamModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'sanpham',
                        loadChildren: () =>
                            import('./Pages/san-pham/san-pham.module').then(
                                (m) => m.SanPhamModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'tintuc',
                        loadChildren: () =>
                            import('./Pages/tin-tuc/tin-tuc.module').then(
                                (m) => m.TinTucModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'nhacc',
                        loadChildren: () =>
                            import(
                                './Pages/nha-cung-cap/nha-cung-cap.module'
                            ).then((m) => m.NhaCungCapModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'gioithieu',
                        loadChildren: () =>
                            import('./Pages/gioi-thieu/gioi-thieu.module').then(
                                (m) => m.GioiThieuModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'nhanvien',
                        loadChildren: () =>
                            import('./Pages/nhan-vien/nhan-vien.module').then(
                                (m) => m.NhanVienModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'khachhang',
                        loadChildren: () =>
                            import('./Pages/khach-hang/khach-hang.module').then(
                                (m) => m.KhachHangModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'lienhe',
                        loadChildren: () =>
                            import('./Pages/lien-he/lien-he.module').then(
                                (m) => m.LienHeModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'slide',
                        loadChildren: () =>
                            import('./Pages/slide/slide.module').then(
                                (m) => m.SlideModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'role',
                        loadChildren: () =>
                            import('./Pages/quyen/quyen.module').then(
                                (m) => m.QuyenModule
                            ),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'hoadonnhap',
                        loadChildren: () =>
                            import(
                                './Pages/hoa-don-nhap/hoa-don-nhap.module'
                            ).then((m) => m.HoaDonNhapModule),
                        canActivate: [AuthGuard],
                    },
                    {
                        path: 'hoadonban',
                        loadChildren: () =>
                            import(
                                './Pages/hoa-don-ban/hoa-don-ban.module'
                            ).then((m) => m.HoaDonBanModule),
                    },
                ],
                canActivate: [AuthGuard],
            },
            {
                path: 'login',
                component: LoginComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
