import { baseUrl } from 'src/app/Http/baseUrl';
import { HeThongService } from './../../Service/he-thong.service';
import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { AccountService } from 'src/app/Service/account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    baseUrl = baseUrl;
    dropdownOpen: boolean = false;
    cartItems: any[] = [];
    quantity = 0;
    totalPrice: number = 0;
    isLoggedIn: boolean = false;
    searchTerm = '';
    constructor(
        private heThongService: HeThongService,
        private cartService: CartService,
        private accountService: AccountService,
        activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        activatedRoute.params.subscribe((params: any) => {
            if (params.serchTerm) {
                this.searchTerm = params.searchTerm;
            }
        });
        this.isLoggedIn = this.accountService.isLoggedIn();
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    ngOnInit() {
        this.GetLoaiSanPham();
        this.cartService.loadCart();
        this.cartService.products$.subscribe((products) => {
            this.getQuantity();
            this.calculateTotalPrice();
            this.updateCart(products);
        });
        this.cartItems = this.cartService.getCartItem();
    }

    loaiSanPham: any[] = [];
    GetLoaiSanPham() {
        this.heThongService.GetLoaiSanPham().subscribe((data) => {
            this.loaiSanPham = data;
        });
    }

    getQuantity() {
        this.quantity = this.cartService.getQuantity();
    }

    calculateTotalPrice() {
        this.totalPrice = this.cartService.getTotalPrice();
    }

    removeFromCart(product: any) {
        this.cartService.removeProduct(product);
        this.cartItems = this.cartService.getCartItem();
        this.getQuantity();
        this.calculateTotalPrice();
    }

    updateCart(cartItems: any[]) {
        this.cartItems = cartItems;
        this.getQuantity();
        this.calculateTotalPrice();
    }

    Logout() {
        this.accountService.signOut();
        this.isLoggedIn = this.accountService.isLoggedIn();
    }

    search(term: string): void {
        if (term) this.router.navigateByUrl('/search/' + term);
    }
}
