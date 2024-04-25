import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { CartService } from 'src/app/Service/cart.service';
import { HeThongService } from 'src/app/Service/he-thong.service';
import { HomeService } from 'src/app/Service/home.service';
declare var $: any;
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [MessageService],
})
export class HomeComponent {
    responsiveOptions: any[] | undefined;

    SlideOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5,
        },
        {
            breakpoint: '768px',
            numVisible: 3,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ];

    baseUrl = baseUrl;

    constructor(
        private homeService: HomeService,
        private heThongService: HeThongService,
        private cartService: CartService,
        private messageService: MessageService
    ) {}

    ngOnInit() {
        this.GetLoaiSanPham();
        this.GetSlide();
        this.GetSanPhamBanChay();
        this.GetSanPhamGiamGia();
        this.GetSanPhamMoi();
        this.GetHoaQua();
        this.GetNuocEp();
        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1,
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1,
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1,
            },
        ];
    }

    images: any[] | undefined;
    GetSlide() {
        this.homeService.GetSlide().subscribe((data) => {
            this.images = data;
        });
    }

    sanPhamBanChay: any[] = [];
    GetSanPhamBanChay() {
        this.homeService.GetSanPhamBanChay().subscribe((data) => {
            this.sanPhamBanChay = data;
        });
    }

    sanPhamGiamGia: any[] = [];
    GetSanPhamGiamGia() {
        this.homeService.GetSanPhamGiamGia().subscribe((data) => {
            this.sanPhamGiamGia = data;
        });
    }

    sanPhamMoi: any[] = [];
    GetSanPhamMoi() {
        this.homeService.GetSanPhamMoi().subscribe((data) => {
            this.sanPhamMoi = data;
        });
    }

    hoaqua: any[] = [];
    GetHoaQua() {
        this.homeService.GetHoaQua().subscribe((data) => {
            this.hoaqua = data;
        });
    }

    nuocep: any[] = [];
    GetNuocEp() {
        this.homeService.GetNuocEp().subscribe((data) => {
            this.nuocep = data;
        });
    }

    loaiSanPham: any[] = [];
    GetLoaiSanPham() {
        this.heThongService.GetLoaiSanPham().subscribe((data) => {
            this.loaiSanPham = data;
        });
    }

    isProductInCart(productId: number): number {
        const cartItem = this.cartService
            .getCartItem()
            .find((item) => item.id === productId);
        return cartItem ? cartItem.soLuong : 0;
    }
    addToCart(product: any) {
        const cartQuantity = this.isProductInCart(product.id);
        if (cartQuantity >= product.soLuongTon) {
            this.messageService.add({
                severity: 'warn',
                summary: 'Thông báo',
                detail: 'Số lượng sản phẩm trong giỏ hàng vượt quá số lượng có sẵn!',
                life: 3000,
            });
            return;
        }

        this.cartService.addToCart(product);
        this.cartService.loadCart();
        this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Thêm vào giỏ hàng thành công',
            life: 3000,
        });
    }
}
