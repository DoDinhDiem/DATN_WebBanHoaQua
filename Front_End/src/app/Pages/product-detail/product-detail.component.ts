import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { CartService } from 'src/app/Service/cart.service';
import { ProductDetailService } from 'src/app/Service/product-detail.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    providers: [MessageService],
})
export class ProductDetailComponent {
    baseUrl = baseUrl;
    id!: any;
    responsiveOptionsSimilar: any[] | undefined;
    constructor(
        private chiTietSanPhamService: ProductDetailService,
        private cartService: CartService,
        private route: ActivatedRoute,
        private messageService: MessageService
    ) {}

    sanPham: any | undefined;
    tenLoai: any;
    thongSos: any[] = [];
    Images: any[] | undefined;

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.GetChiTietSanPham(this.id);
        });
        this.responsiveOptionsSimilar = [
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
    GetChiTietSanPham(id: any) {
        this.chiTietSanPhamService.GetChiTietSanPham(id).subscribe((data) => {
            this.sanPham = data;
            this.tenLoai = data.tenLoai;
            this.Images = data.imageList;
            const loaiid = data.loaiId;

            this.GetSanPhamTuongTu(id, loaiid);
        });
    }

    sanPhams: any[] = [];
    GetSanPhamTuongTu(id: any, loaiid: any) {
        this.chiTietSanPhamService
            .GetSanPhamTuongTu(id, loaiid)
            .subscribe((data) => {
                this.sanPhams = data;
            });
    }

    //Tăng giảm số lượng
    quantity: number = 1;

    increment() {
        this.quantity++;
    }

    decrement() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    addToCart(product: any) {
        this.cartService.addToCartDetail(product, this.quantity);
        this.cartService.loadCart();
        this.messageService.add({
            severity: 'success',
            summary: 'Thông báo',
            detail: 'Thêm vào giỏ hàng thành công',
            life: 3000,
        });
    }

    //Ảnh chi tiết

    get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (
            this.Images &&
            0 <= newValue &&
            newValue <= this.Images.length - 1
        ) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;

    responsiveOptions: any[] = [
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

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }
}
