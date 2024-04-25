import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { baseUrl } from 'src/app/Http/baseUrl';
import { IKhachHang } from 'src/app/Models/khach-hang';
import { AccountService } from 'src/app/Service/account.service';
import { CheckOutService } from 'src/app/Service/check-out.service';
import { ProfileService } from 'src/app/Service/profile.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers: [MessageService],
})
export class AccountComponent {
    id!: any;
    constructor(
        private checkoutService: CheckOutService,
        private messageService: MessageService,
        private profileService: ProfileService,
        private accountService: AccountService
    ) {
        this.id = this.accountService.getIdFromToken();
        this.getByIdKhachHang();
    }
    khachhang: IKhachHang = {};
    getByIdKhachHang() {
        this.checkoutService.GetKhacHangById(this.id).subscribe((data) => {
            this.khachhang = data;
            console.log(data);
        });
    }
    onSubmit() {
        this.profileService
            .updateKhachHang(this.khachhang)
            .subscribe((data) => {
                this.getByIdKhachHang();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Thông báo',
                    detail: data.message,
                    life: 3000,
                });
            });
    }
}
