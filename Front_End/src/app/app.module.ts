import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgToastModule } from 'ng-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProductDetailComponent } from './Pages/product-detail/product-detail.component';
import { ProductCategoryComponent } from './Pages/product-category/product-category.component';
import { BlogCategoryComponent } from './Pages/blog-category/blog-category.component';
import { BlogDetailComponent } from './Pages/blog-detail/blog-detail.component';
import { ViewCartComponent } from './Pages/view-cart/view-cart.component';
import { CheckOutComponent } from './Pages/check-out/check-out.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { TokenInterceptor } from './Interceptors/Token.interceptor';
import { NoficationComponent } from './Pages/nofication/nofication.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { SafePipe } from './Pages/contact/safe.pipe';
import { SearchComponent } from './Pages/search/search.component';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ProductDetailComponent,
        ProductCategoryComponent,
        BlogCategoryComponent,
        BlogDetailComponent,
        ViewCartComponent,
        CheckOutComponent,
        LoginComponent,
        RegisterComponent,
        NoficationComponent,
        AboutComponent,
        ContactComponent,
        SafePipe,
        SearchComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CarouselModule,
        GalleriaModule,
        ButtonModule,
        SliderModule,
        FormsModule,
        NgxPaginationModule,
        ToastModule,
        BrowserAnimationsModule,
        NgToastModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
