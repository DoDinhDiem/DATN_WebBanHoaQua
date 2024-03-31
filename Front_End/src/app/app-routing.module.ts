import { BlogDetailComponent } from './Pages/blog-detail/blog-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./Pages/home/home.module').then(
                        (m) => m.HomeModule
                    ),
            },
            {
                path: 'productDetail/:id',
                loadChildren: () =>
                    import('./Pages/product-detail/product-detail.module').then(
                        (m) => m.ProductDetailModule
                    ),
            },
            {
                path: 'productCategory/:id',
                loadChildren: () =>
                    import(
                        './Pages/product-category/product-category.module'
                    ).then((m) => m.ProductCategoryModule),
            },
            {
                path: 'blogCategory',
                loadChildren: () =>
                    import('./Pages/blog-category/blog-category.module').then(
                        (m) => m.BlogCategoryModule
                    ),
            },
            {
                path: 'blogDetail/:id',
                loadChildren: () =>
                    import('./Pages/blog-detail/blog-detail.module').then(
                        (m) => m.BlogDetailModule
                    ),
            },
            {
                path: 'viewCart',
                loadChildren: () =>
                    import('./Pages/view-cart/view-cart.module').then(
                        (m) => m.ViewCartModule
                    ),
            },
            {
                path: 'about',
                loadChildren: () =>
                    import('./Pages/about/about.module').then(
                        (m) => m.AboutModule
                    ),
            },
            {
                path: 'contact',
                loadChildren: () =>
                    import('./Pages/contact/contact.module').then(
                        (m) => m.ContactModule
                    ),
            },
            {
                path: 'checkout',
                loadChildren: () =>
                    import('./Pages/check-out/check-out.module').then(
                        (m) => m.CheckOutModule
                    ),
                canActivate: [AuthGuard],
            },
            {
                path: 'success',
                loadChildren: () =>
                    import('./Pages/nofication/nofication.module').then(
                        (m) => m.NoficationModule
                    ),
                canActivate: [AuthGuard],
            },
            {
                path: 'search/:searchTerm',
                loadChildren: () =>
                    import('./Pages/search/search.module').then(
                        (m) => m.SearchModule
                    ),
            },
            {
                path: 'login',
                loadChildren: () =>
                    import('./Pages/login/login.module').then(
                        (m) => m.LoginModule
                    ),
            },
            {
                path: 'register',
                loadChildren: () =>
                    import('./Pages/register/register.module').then(
                        (m) => m.RegisterModule
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
