import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { CartService } from 'src/app/Service/cart.service';
import { HeThongService } from 'src/app/Service/he-thong.service';
import { ProductCategoryService } from 'src/app/Service/product-category.service';

@Component({
    selector: 'app-product-category',
    templateUrl: './product-category.component.html',
    styleUrls: ['./product-category.component.css'],
    providers: [MessageService],
})
export class ProductCategoryComponent {
    baseUrl = baseUrl;

    constructor(
        private danhMucSanPhamService: ProductCategoryService,
        private heThongService: HeThongService,
        private route: ActivatedRoute,
        private cartService: CartService,
        private messageService: MessageService // private auth: AccountService
    ) {}
    id!: any;
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.GetLoaiSanPham();
            this.GetGiaLonNhatTheoLoai(this.id);
        });
    }
    giaRange: any = '';
    GetGiaLonNhatTheoLoai(id: any) {
        this.danhMucSanPhamService
            .GetGiaLonNhatTheoLoai(id)
            .subscribe((data) => {
                this.giaMax = data;
                this.giaRange = data;
                this.GetSanPhamByLoai(id);
            });
    }
    sanPhams: any;
    tenLSP: any;
    totalItem: any;
    GetSanPhamByLoai(id: any) {
        this.danhMucSanPhamService
            .GetSanPhamByLoai(id, this.sapxepSelects, this.giaMax)
            .subscribe((data) => {
                this.sanPhams = data;
                this.totalItem = this.sanPhams.totalItems;
                this.tenLSP = this.sanPhams.category;
            });
    }
    loaiSanPham: any;
    GetLoaiSanPham() {
        this.heThongService.GetLoaiSanPham().subscribe((data) => {
            this.loaiSanPham = data;
        });
    }
    sapxep: any[] = [
        {
            value: 'date',
            name: 'Mới',
        },
        {
            value: 'pricemin',
            name: 'Giá thấp đến cao',
        },
        {
            value: 'pricemax',
            name: 'Giá cao đến thấp',
        },
        {
            value: 'name',
            name: 'Tên',
        },
    ];
    sapxepSelects: any = 'date';
    giaMin: any = 0;
    giaMax: any = '';

    //Tìm kiếm
    onSlide() {
        this.GetSanPhamByLoai(this.id);
    }
    //Khi pageSize thay đổi
    onSapXepChange() {
        this.GetSanPhamByLoai(this.id);
    }
    //Phân trang
    p: number = 1;

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
