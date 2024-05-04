import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { IHoaDon } from 'src/app/Models/hoa-don';
import { AccountService } from 'src/app/Service/account.service';
import { ProfileService } from 'src/app/Service/profile.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [MessageService, ConfirmationService],
})
export class OrderComponent {
    baseUrl = baseUrl;
    selectedStatus: number | null = null;
    constructor(
        private profileService: ProfileService,
        private accountService: AccountService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    chitiet: any;
    chitietList: any;

    name = this.accountService.getfullNameFromToken();

    ngOnInit() {
        this.loadData();
    }

    totalAmount: number = 0;
    loadData() {
        this.profileService
            .getLichSuMuaHang(this.email, this.trangThai)
            .subscribe((data: any) => {
                console.log(this.email);
                this.chitietList = data;
                this.totalAmount = data.totalAmount;
                console.log(this.chitietList);
            });
    }

    //Khai báo key, page, pageSize
    email = this.accountService.getEmailFromToken();
    trangThai: any = '';

    //Tìm kiếm
    filterByStatus(id: any) {
        if (id === 'tatca') {
            this.trangThai = '';
            this.selectedStatus = null;
        } else {
            this.trangThai = id;
            this.selectedStatus = id;
        }
        this.loadData();
    }
    hoaDon: IHoaDon = {};
    huyHang(id: any) {
        this.confirmationService.confirm({
            message: 'Bạn có chắc chắn muốn hủy đơn hàng này?',
            header: 'Thông báo',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.hoaDon.trangThaiDonHang = 'Đã hủy';
                console.log(this.hoaDon);
                this.profileService
                    .getUpdateDonHang(id, this.hoaDon)
                    .subscribe((res) => {
                        this.loadData();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Thông báo',
                            detail: res.message,
                            life: 3000,
                        });
                    });
            },
        });
    }

    hoanThanh(id: any) {
        this.confirmationService.confirm({
            message: 'Bạn đã nhận được đơn hàng?',
            header: 'Thông báo',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.hoaDon.trangThaiDonHang = 'Giao hàng thành công';
                console.log(this.hoaDon);
                this.profileService
                    .getUpdateDonHang(id, this.hoaDon)
                    .subscribe((res) => {
                        this.loadData();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Thông báo',
                            detail: res.message,
                            life: 3000,
                        });
                    });
            },
        });
    }
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
    hoadonban: IHoaDon = {};
    chiTietHoaDons: any[] = [];

    InHoaDon(hoadonban: IHoaDon) {
        this.profileService.getById(hoadonban.id).subscribe((data) => {
            this.hoadonban = data;
            this.chiTietHoaDons = data.chiTietHoaDon;
            this.showDialog();
        });
    }

    printFunction() {
        window.print();
    }
}
