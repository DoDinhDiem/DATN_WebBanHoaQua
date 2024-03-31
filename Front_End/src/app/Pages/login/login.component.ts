import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { IKhachHang } from 'src/app/Models/khach-hang';
import { AccountService } from 'src/app/Service/account.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [MessageService],
})
export class LoginComponent {
    constructor(
        private accountService: AccountService,
        private messageService: MessageService,
        private router: Router
    ) {}
    ngOnInit() {}

    khachhang: IKhachHang = {};
    singIn() {
        this.accountService.signIn(this.khachhang).subscribe({
            next: (res) => {
                this.khachhang = {};
                this.accountService.storeToken(res.accessToken);
                this.accountService.storeRefreshToken(res.refreshToken);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Thông báo',
                    detail: res.message,
                    life: 3000,
                });
                this.router.navigate(['/']);
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
