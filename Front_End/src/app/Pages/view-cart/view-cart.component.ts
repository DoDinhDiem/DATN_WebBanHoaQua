import { Component } from '@angular/core';
import { baseUrl } from 'src/app/Http/baseUrl';
import { CartService } from 'src/app/Service/cart.service';

@Component({
    selector: 'app-view-cart',
    templateUrl: './view-cart.component.html',
    styleUrls: ['./view-cart.component.css'],
})
export class ViewCartComponent {
    baseUrl = baseUrl;
    cartItems: any[] = [];
    quantity = 0;
    totalPrice: number = 0;
    price: number = 0;
    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.cartService.loadCart();
        this.cartService.products$.subscribe((products) => {
            this.getQuantity();
            this.calculateTotalPrice();
        });
        this.cartItems = this.cartService.getCartItem();
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

    incrementQuantity(cart: any) {
        this.cartService.incrementQuantity(cart);
    }

    decrementQuantity(cart: any) {
        this.cartService.decrementQuantity(cart);
    }

    calculateSubtotal(cart: any): number {
        return cart.thanhTien * cart.soLuong;
    }
}
