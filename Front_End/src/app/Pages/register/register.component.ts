import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IKhachHang } from 'src/app/Models/khach-hang';
import { AccountService } from 'src/app/Service/account.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    providers: [MessageService],
})
export class RegisterComponent {
    constructor(
        private accountService: AccountService,
        private messageService: MessageService,
        private router: Router
    ) {}

    khachhang: IKhachHang = {};
    signUp() {
        this.accountService.signUp(this.khachhang).subscribe({
            next: (res) => {
                this.khachhang = {};
                this.messageService.add({
                    severity: 'success',
                    summary: 'Thông báo',
                    detail: res.message,
                    life: 3000,
                });
                this.router.navigate(['/login']);
            },
            error: (err) => {
                this.messageService.add({
                    severity: 'warn',
                    summary: 'Thông báo',
                    detail: err?.error.message,
                    life: 3000,
                });
            },
        });
    }
}
